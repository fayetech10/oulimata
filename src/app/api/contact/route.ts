import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  buildEnquiryPdf,
  buildEnquiryXlsx,
  type EnquiryField,
} from "@/lib/enquiry-files";

/**
 * Contact form handler.
 *
 * Preferred path — SMTP (nodemailer): when SMTP_USER and SMTP_PASSWORD are set
 * (in .env.local locally, or in the host's environment variables), each enquiry
 * is emailed to CONTACT_RECIPIENT with two downloadable attachments: a PDF and
 * an Excel file of the submission. Defaults to Zoho's relay — the same account
 * that hosts the mailbox, so it can send as info@ — see .env.example.
 *
 * Fallback — FormSubmit (https://formsubmit.co): if no SMTP credentials are
 * present, the enquiry is forwarded as a plain table email (no attachments).
 * FormSubmit requires a one-time activation click from the recipient inbox.
 */

// The Zoho mailbox — read in Outlook over IMAP. It is the destination of every
// enquiry (the "To"), and stays the one and only address you actually read.
const CONTACT_RECIPIENT = "info@watchthebabyllc.com";

// Enquiries are sent FROM this address rather than info@ itself. Outlook hides
// mail that arrives "from yourself to yourself", so info@ → info@ never shows in
// the inbox. This must exist as an ALIAS of the info@ mailbox in Zoho
// (admin.zoho.com → Users → info@ → Email Aliases) — it is not a new mailbox,
// just a sender label, and everything still lands in info@. Until the alias
// exists Zoho rejects it (553) and sendViaSmtp falls back to info@, so no
// enquiry is ever lost. Override with the SMTP_FROM env var for a different name.
const ENQUIRY_SENDER = process.env.SMTP_FROM ?? "contact@watchthebabyllc.com";

// FormSubmit requires an Origin header and ties the form's activation to it,
// so we always send the production origin — even from local dev.
const FORM_ORIGIN = "https://ouliaservice.netlify.app";

type ContactPayload = {
  /** Honeypot field — humans never see it; bots fill it in. */
  company?: string;
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  motherDateOfBirth?: string;
  dateOfBirth?: string;
  feedingPreference?: string;
  address?: string;
  parking?: string;
  pets?: string;
  allergies?: string;
  message?: string;
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

/**
 * <input type="date"> always submits ISO (YYYY-MM-DD) whatever the browser
 * displays, but enquiries are read in the US — so render month-first as
 * MM.DD.YYYY. Kept as string surgery rather than `new Date()`, which would
 * shift the day for anyone west of UTC.
 */
const usDate = (v?: string) => {
  const raw = v?.trim() ?? "";
  const iso = /^(\d{4})-(\d{2})-(\d{2})$/.exec(raw);
  return iso ? `${iso[2]}.${iso[3]}.${iso[1]}` : raw;
};

type MailTransport = {
  host: string;
  port: number;
  auth: { user: string; pass: string };
  /** The From address — it has to be one the transport is allowed to send as. */
  from: string;
};

/**
 * Zoho hosts the mailbox and relays its outgoing mail, so it can send as the
 * address it authenticated — info@. The old personal-Gmail credentials stay
 * supported as a fallback, but Gmail rewrites the From header to the account
 * it authenticated, so that path sends as itself.
 */
function resolveTransport(): MailTransport | null {
  const { SMTP_USER, SMTP_PASSWORD, GMAIL_USER, GMAIL_APP_PASSWORD } =
    process.env;

  if (SMTP_USER && SMTP_PASSWORD) {
    return {
      host: process.env.SMTP_HOST ?? "smtp.zoho.com",
      port: Number(process.env.SMTP_PORT ?? 587),
      auth: { user: SMTP_USER, pass: SMTP_PASSWORD },
      from: ENQUIRY_SENDER,
    };
  }

  if (GMAIL_USER && GMAIL_APP_PASSWORD) {
    return {
      host: "smtp.gmail.com",
      port: 587,
      auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
      from: GMAIL_USER,
    };
  }

  return null;
}

const escapeHtml = (v: string) =>
  v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/**
 * A relay refuses to send "as" an address it doesn't own — Zoho answers 553.
 * Used to detect that the enquiry-sender alias isn't set up in Zoho yet.
 */
function isRelayRejection(e: unknown): boolean {
  const err = (e ?? {}) as { responseCode?: number; message?: string };
  return (
    err.responseCode === 553 ||
    /not allowed to relay|relaying disallowed|sender address rejected/i.test(
      String(err.message ?? ""),
    )
  );
}

async function sendViaSmtp(
  transport: MailTransport,
  fields: EnquiryField[],
  name: string,
  replyTo: string,
) {
  const submittedAt = new Date();

  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const date = submittedAt.toISOString().slice(0, 10);
  const baseFilename = `enquiry-${slug || "contact"}-${date}`;

  // The PDF and Excel copies are a convenience — the full enquiry is always in
  // the email body below. So build them defensively: if either one fails, log
  // it and send the email anyway rather than lose the enquiry entirely.
  const attachments: { filename: string; content: Buffer; contentType: string }[] =
    [];
  try {
    attachments.push({
      filename: `${baseFilename}.pdf`,
      content: await buildEnquiryPdf(fields, submittedAt),
      contentType: "application/pdf",
    });
  } catch (err) {
    console.error("[contact] PDF build failed — sending enquiry without it:", err);
  }
  try {
    attachments.push({
      filename: `${baseFilename}.xlsx`,
      content: await buildEnquiryXlsx(fields, submittedAt),
      contentType:
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
  } catch (err) {
    console.error(
      "[contact] Excel build failed — sending enquiry without it:",
      err,
    );
  }

  const rows = fields
    .map(
      ({ label, value }) =>
        `<tr><td style="padding:6px 12px 6px 0;font-weight:bold;vertical-align:top;white-space:nowrap">${escapeHtml(label)}</td><td style="padding:6px 0;vertical-align:top">${escapeHtml(value || "—").replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("");

  const attachmentNote = attachments.length
    ? `<p style="color:#777;font-size:12px">The same information is attached as ${attachments
        .map((a) => (a.filename.endsWith(".pdf") ? "PDF" : "Excel"))
        .join(" and ")}.</p>`
    : "";

  const transporter = nodemailer.createTransport({
    host: transport.host,
    port: transport.port,
    secure: transport.port === 465,
    auth: transport.auth,
  });

  // Show the visitor's name as the sender and put their email in Reply-To, so
  // hitting "Reply" in the inbox writes straight back to them — even though the
  // sender address itself must be one of ours (no relay lets you send *as*
  // someone else's address).
  const from = { name: `${name} (via website)`, address: transport.from };
  const mail = {
    to: CONTACT_RECIPIENT,
    replyTo,
    subject: `New enquiry from ${name} — Watch The Baby`,
    html: `<h2 style="color:#59335c">New enquiry — Watch The Baby</h2><table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">${rows}</table>${attachmentNote}`,
    attachments,
  };

  try {
    await transporter.sendMail({ ...mail, from });
  } catch (err) {
    // The sender alias may not exist in Zoho yet (553 relay rejection). Don't
    // lose the enquiry — resend from the authenticated mailbox. It still lands,
    // just self-addressed, exactly as before the alias was set up.
    if (isRelayRejection(err) && from.address !== CONTACT_RECIPIENT) {
      console.warn(
        `[contact] Sender "${from.address}" was rejected — is it an alias in Zoho? Resending from ${CONTACT_RECIPIENT}.`,
      );
      await transporter.sendMail({
        ...mail,
        from: { name: from.name, address: CONTACT_RECIPIENT },
      });
    } else {
      throw err;
    }
  }
}

async function sendViaFormSubmit(fields: EnquiryField[], name: string) {
  const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_RECIPIENT}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Origin: FORM_ORIGIN,
      Referer: `${FORM_ORIGIN}/contact`,
    },
    body: JSON.stringify({
      _subject: `New enquiry from ${name} — Watch The Baby`,
      _template: "table",
      ...Object.fromEntries(fields.map((f) => [f.label, f.value || "—"])),
    }),
  });

  const result = (await res.json()) as { success?: string; message?: string };
  if (!res.ok || result.success !== "true") {
    throw new Error(
      `FormSubmit responded ${res.status}: ${result.message ?? "unknown error"}`,
    );
  }
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot tripped — pretend everything went fine so bots don't adapt.
  if (body.company?.trim()) {
    console.log("[contact] Honeypot triggered — enquiry discarded.");
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email and message are required." },
      { status: 422 },
    );
  }

  if (!isEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 422 },
    );
  }

  const fields: EnquiryField[] = [
    { label: "Name", value: name },
    { label: "Email", value: email },
    { label: "Phone", value: body.phone?.trim() ?? "" },
    { label: "Service", value: body.service ?? "" },
    { label: "Mother's date of birth", value: usDate(body.motherDateOfBirth) },
    { label: "Baby's date of birth", value: usDate(body.dateOfBirth) },
    { label: "Feeding preference", value: body.feedingPreference ?? "" },
    { label: "Address", value: body.address?.trim() ?? "" },
    { label: "Parking", value: body.parking?.trim() ?? "" },
    { label: "Pets", value: body.pets?.trim() ?? "" },
    { label: "Allergies", value: body.allergies?.trim() ?? "" },
    { label: "Message", value: message },
  ];

  const transport = resolveTransport();

  try {
    if (transport) {
      await sendViaSmtp(transport, fields, name, email);
      console.log(
        "[contact] Enquiry emailed with PDF/Excel attachments to",
        CONTACT_RECIPIENT,
        "—",
        name,
      );
    } else {
      await sendViaFormSubmit(fields, name);
      console.log(
        "[contact] No SMTP credentials — enquiry forwarded via FormSubmit (no attachments) to",
        CONTACT_RECIPIENT,
        "—",
        name,
      );
    }
  } catch (err) {
    console.error("[contact] Failed to send enquiry:", err);
    return NextResponse.json(
      { error: "Could not send your message. Please email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
