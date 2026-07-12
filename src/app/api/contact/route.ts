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
 * Preferred path — Gmail (nodemailer): when GMAIL_USER and
 * GMAIL_APP_PASSWORD are set (in .env.local locally, or in the host's
 * environment variables), each enquiry is emailed to CONTACT_RECIPIENT with
 * two downloadable attachments: a PDF and an Excel file of the submission.
 *
 * Fallback — FormSubmit (https://formsubmit.co): if the Gmail variables are
 * missing, the enquiry is forwarded as a plain table email (no attachments).
 * FormSubmit requires a one-time activation click from the recipient inbox.
 */

// TODO: switch to watchthebaby42@gmail.com when going live.
const CONTACT_RECIPIENT = "fayedev93@gmail.com";

// FormSubmit requires an Origin header and ties the form's activation to it,
// so we always send the production origin — even from local dev.
const FORM_ORIGIN = "https://ouliaservice.netlify.app";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  timing?: string;
  dateOfBirth?: string;
  feedingPreference?: string;
  address?: string;
  parking?: string;
  pets?: string;
  allergies?: string;
  message?: string;
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

const escapeHtml = (v: string) =>
  v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

async function sendViaGmail(
  fields: EnquiryField[],
  name: string,
  replyTo: string,
) {
  const submittedAt = new Date();
  const [pdf, xlsx] = await Promise.all([
    buildEnquiryPdf(fields, submittedAt),
    buildEnquiryXlsx(fields, submittedAt),
  ]);

  const slug = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  const date = submittedAt.toISOString().slice(0, 10);
  const baseFilename = `enquiry-${slug || "contact"}-${date}`;

  const rows = fields
    .map(
      ({ label, value }) =>
        `<tr><td style="padding:6px 12px 6px 0;font-weight:bold;vertical-align:top;white-space:nowrap">${escapeHtml(label)}</td><td style="padding:6px 0;vertical-align:top">${escapeHtml(value || "—").replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("");

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: `"Watch The Baby — Website" <${process.env.GMAIL_USER}>`,
    to: CONTACT_RECIPIENT,
    replyTo,
    subject: `New enquiry from ${name} — Watch The Baby`,
    html: `<h2 style="color:#59335c">New enquiry — Watch The Baby</h2><table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">${rows}</table><p style="color:#777;font-size:12px">The same information is attached as PDF and Excel.</p>`,
    attachments: [
      {
        filename: `${baseFilename}.pdf`,
        content: pdf,
        contentType: "application/pdf",
      },
      {
        filename: `${baseFilename}.xlsx`,
        content: xlsx,
        contentType:
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    ],
  });
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
    { label: "Due date or baby's age", value: body.timing?.trim() ?? "" },
    { label: "Baby's date of birth", value: body.dateOfBirth ?? "" },
    { label: "Feeding preference", value: body.feedingPreference ?? "" },
    { label: "Address", value: body.address?.trim() ?? "" },
    { label: "Parking", value: body.parking?.trim() ?? "" },
    { label: "Pets", value: body.pets?.trim() ?? "" },
    { label: "Allergies", value: body.allergies?.trim() ?? "" },
    { label: "Message", value: message },
  ];

  const gmailConfigured =
    !!process.env.GMAIL_USER && !!process.env.GMAIL_APP_PASSWORD;

  try {
    if (gmailConfigured) {
      await sendViaGmail(fields, name, email);
      console.log(
        "[contact] Enquiry emailed with PDF/Excel attachments to",
        CONTACT_RECIPIENT,
        "—",
        name,
      );
    } else {
      await sendViaFormSubmit(fields, name);
      console.log(
        "[contact] Gmail not configured — enquiry forwarded via FormSubmit (no attachments) to",
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
