import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import { getBaseUrl, pageMetadata, breadcrumbSchema } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: `Privacy Policy for ${site.name} — how we collect, use, and protect your information, including SMS text messaging data.`,
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const baseUrl = getBaseUrl();
  return (
    <>
      <JsonLd
        data={breadcrumbSchema(baseUrl, [
          { name: "Home", path: "/" },
          { name: "Privacy Policy", path: "/privacy-policy" },
        ])}
      />
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description={`How ${site.legalName} collects, uses, and protects your information, including SMS text messaging data.`}
      />

      <section className="container py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          {/* Intro */}
          <Reveal>
            <div className="space-y-4 leading-relaxed text-ink-soft">
              <p>
                <strong className="font-semibold text-ink">
                  {site.legalName}
                </strong>{" "}
                — Effective date: October 30, 2026
              </p>
              <p>
                {site.legalName} (&quot;Watch The Baby,&quot; &quot;we,&quot;
                {" "}&quot;us,&quot; or &quot;our&quot;) provides overnight and
                daytime newborn care, postpartum support, and related family
                services in Maryland, Washington DC, and Northern Virginia. This
                Privacy Policy explains what information we collect, how we use
                it, and the choices you have. It applies to our website at
                watchthebabyllc.com (the &quot;Site&quot;) and to our text
                message (SMS) communications.
              </p>
            </div>
          </Reveal>

          {/* 1. Information We Collect */}
          <Reveal>
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-ink">
                1. Information We Collect
              </h2>
              <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
                <p>
                  We collect information you give us directly, such as when you
                  fill out our contact form, book a consultation, email or call
                  us, or message us by text.
                </p>
                <ul className="list-disc pl-6 space-y-2 text-ink-soft">
                  <li>
                    <strong className="font-semibold text-ink">
                      Contact details:
                    </strong>{" "}
                    your name, email address, mobile phone number, and home
                    address.
                  </li>
                  <li>
                    <strong className="font-semibold text-ink">
                      Service-related details you choose to share:
                    </strong>{" "}
                    the service you are interested in, the mother&apos;s date of
                    birth, the baby&apos;s date of birth or due date, feeding
                    preferences, parking information, pets, allergies, and the
                    message you write to us.
                  </li>
                  <li>
                    <strong className="font-semibold text-ink">
                      Text message records:
                    </strong>{" "}
                    your phone number, your opt-in consent (including date, time,
                    and the page where you consented), and the content of
                    messages we exchange with you.
                  </li>
                  <li>
                    <strong className="font-semibold text-ink">
                      Automatically collected information:
                    </strong>{" "}
                    when you visit the Site, we may collect basic technical data
                    such as your IP address, browser type, device type, pages
                    viewed, and referring page, through cookies and similar
                    technologies.
                  </li>
                </ul>
                <p>
                  Please do not send sensitive medical details by text or through
                  the contact form. We will discuss care details with you
                  directly during your consultation.
                </p>
              </div>
            </section>
          </Reveal>

          {/* 2. How We Use Your Information */}
          <Reveal>
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-ink">
                2. How We Use Your Information
              </h2>
              <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
                <p>We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2 text-ink-soft">
                  <li>
                    Respond to your inquiries and schedule free consultations;
                  </li>
                  <li>
                    Provide, coordinate, and improve our newborn and postpartum
                    care services;
                  </li>
                  <li>
                    Send appointment confirmations, reminders, scheduling
                    updates, and service-related messages by text, email, or
                    phone;
                  </li>
                  <li>
                    Send text messages only if you have opted in, as described in
                    Section 4;
                  </li>
                  <li>
                    Maintain our records, prevent fraud, and meet legal
                    obligations;
                  </li>
                  <li>
                    Understand how the Site is used and improve it.
                  </li>
                </ul>
              </div>
            </section>
          </Reveal>

          {/* 3. How We Share Your Information */}
          <Reveal>
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-ink">
                3. How We Share Your Information
              </h2>
              <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
                <p>We do not sell your personal information.</p>
                <p>We may share information only with:</p>
                <ul className="list-disc pl-6 space-y-2 text-ink-soft">
                  <li>
                    <strong className="font-semibold text-ink">
                      Service providers
                    </strong>{" "}
                    who help us operate our business (for example, website
                    hosting, email, scheduling, customer management, and text
                    messaging platforms). They may use your information only to
                    perform services for us.
                  </li>
                  <li>
                    <strong className="font-semibold text-ink">
                      Legal and safety recipients
                    </strong>{" "}
                    when required by law, legal process, or to protect the
                    rights, safety, or property of our clients, our team, or
                    others.
                  </li>
                  <li>
                    <strong className="font-semibold text-ink">
                      Business successors
                    </strong>{" "}
                    if {site.legalName} is involved in a merger, sale, or
                    transfer of assets, in which case your information would
                    remain protected under this policy.
                  </li>
                </ul>
              </div>
            </section>
          </Reveal>

          {/* 4. Text Messaging (SMS) Privacy */}
          <Reveal>
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-ink">
                4. Text Messaging (SMS) Privacy
              </h2>
              <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
                <p>
                  If you provide your mobile phone number and agree to receive
                  text messages from us, we will use your number to send messages
                  related to your inquiry and our services, such as consultation
                  scheduling, appointment reminders, and replies to your
                  questions.
                </p>
                <p className="font-semibold text-ink">
                  No mobile information will be shared with third parties or
                  affiliates for marketing or promotional purposes. Text
                  messaging originator opt-in data and consent will not be shared
                  with any third parties.
                </p>
                <p>
                  Information sharing to subcontractors in support of our
                  services, such as customer support or our text messaging
                  platform provider, is permitted. All other categories of text
                  messaging originator opt-in data and consent exclude this
                  information.
                </p>
                <p>
                  Consent to receive text messages is not a condition of
                  purchasing any goods or services. You can opt out at any time
                  by replying STOP to any text message. See our{" "}
                  <Link
                    href="/terms"
                    className="text-plum-deep underline underline-offset-2 hover:text-plum"
                  >
                    Terms of Service
                  </Link>{" "}
                  for full SMS program details.
                </p>
              </div>
            </section>
          </Reveal>

          {/* 5. Cookies and Analytics */}
          <Reveal>
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-ink">
                5. Cookies and Analytics
              </h2>
              <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
                <p>
                  The Site may use cookies and similar technologies to keep the
                  Site working properly and to understand how visitors use it.
                  You can control cookies through your browser settings.
                  Disabling cookies may affect some Site features.
                </p>
              </div>
            </section>
          </Reveal>

          {/* 6. Data Retention */}
          <Reveal>
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-ink">
                6. Data Retention
              </h2>
              <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
                <p>
                  We keep personal information only as long as needed for the
                  purposes described in this policy, to provide our services, and
                  to meet legal, tax, and recordkeeping requirements. Text
                  message consent records are retained for as long as needed to
                  demonstrate compliance.
                </p>
              </div>
            </section>
          </Reveal>

          {/* 7. Data Security */}
          <Reveal>
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-ink">
                7. Data Security
              </h2>
              <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
                <p>
                  We use reasonable administrative, technical, and physical
                  safeguards to protect your information. No method of
                  transmission or storage is completely secure, so we cannot
                  guarantee absolute security.
                </p>
              </div>
            </section>
          </Reveal>

          {/* 8. Your Choices and Rights */}
          <Reveal>
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-ink">
                8. Your Choices and Rights
              </h2>
              <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
                <ul className="list-disc pl-6 space-y-2 text-ink-soft">
                  <li>
                    <strong className="font-semibold text-ink">
                      Text messages:
                    </strong>{" "}
                    reply STOP to opt out at any time, or HELP for assistance.
                  </li>
                  <li>
                    <strong className="font-semibold text-ink">
                      Email:
                    </strong>{" "}
                    use the unsubscribe link in any marketing email, or contact
                    us.
                  </li>
                  <li>
                    <strong className="font-semibold text-ink">
                      Access, correction, deletion:
                    </strong>{" "}
                    you may request access to, correction of, or deletion of
                    your personal information by contacting us using the details
                    below. Depending on where you live, you may have additional
                    rights under applicable state privacy laws, and we will honor
                    valid requests as required by law.
                  </li>
                </ul>
              </div>
            </section>
          </Reveal>

          {/* 9. Children's Privacy */}
          <Reveal>
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-ink">
                9. Children&apos;s Privacy
              </h2>
              <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
                <p>
                  The Site is intended for parents and adults. We do not
                  knowingly collect personal information directly from children
                  under 13. Information about a baby (such as date of birth) is
                  provided by the parent or guardian for the purpose of arranging
                  care.
                </p>
              </div>
            </section>
          </Reveal>

          {/* 10. Third-Party Links */}
          <Reveal>
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-ink">
                10. Third-Party Links
              </h2>
              <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
                <p>
                  The Site may link to third-party sites, such as Instagram. We
                  are not responsible for the privacy practices of those sites.
                </p>
              </div>
            </section>
          </Reveal>

          {/* 11. Changes to This Policy */}
          <Reveal>
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-ink">
                11. Changes to This Policy
              </h2>
              <div className="mt-4 space-y-4 leading-relaxed text-ink-soft">
                <p>
                  We may update this Privacy Policy from time to time. The
                  effective date above shows when it was last revised. Continued
                  use of the Site or our services after changes means you accept
                  the updated policy.
                </p>
              </div>
            </section>
          </Reveal>

          {/* Contact Us */}
          <Reveal>
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-ink">
                Contact Us
              </h2>
              <div className="mt-4 space-y-2 leading-relaxed text-ink-soft">
                <p>{site.legalName}</p>
                <p>[BUSINESS MAILING ADDRESS]</p>
                <p>
                  Email:{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="text-plum-deep underline underline-offset-2 hover:text-plum"
                  >
                    {site.email}
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href={site.phoneHref}
                    className="text-plum-deep underline underline-offset-2 hover:text-plum"
                  >
                    {site.phone}
                  </a>
                </p>
              </div>
            </section>
          </Reveal>

          {/* Internal nav */}
          <Reveal>
            <div className="mt-12 flex flex-wrap gap-4 border-t border-line pt-8">
              <Link
                href="/terms"
                className="text-plum-deep underline underline-offset-2 hover:text-plum"
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="text-plum-deep underline underline-offset-2 hover:text-plum"
              >
                Contact Us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
