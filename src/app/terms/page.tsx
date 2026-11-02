import { PageHeader } from "@/components/PageHeader";
import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import { getBaseUrl, pageMetadata, breadcrumbSchema } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Terms of Service",
  description: `Terms of Service for ${site.name} — usage terms, SMS text messaging program terms, and service conditions.`,
  path: "/terms",
});

export default function TermsPage() {
  const baseUrl = getBaseUrl();
  return (
    <>
      <JsonLd
        data={breadcrumbSchema(baseUrl, [
          { name: "Home", path: "/" },
          { name: "Terms of Service", path: "/terms" },
        ])}
      />
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        description={`Please read these terms carefully before using the ${site.name} website or booking our services.`}
      />

      <section className="container py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="leading-relaxed text-ink-soft">
              <strong className="font-semibold text-ink">
                {site.legalName}
              </strong>{" "}
              — Effective date: October 30, 2026
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Welcome to {site.legalName}. By using our website at
              watchthebabyllc.com (the &quot;Site&quot;), contacting us, or
              booking our services, you agree to these Terms of Service. If you
              do not agree, please do not use the Site.
            </p>
          </Reveal>

          {/* 1. About Our Services */}
          <Reveal>
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-ink">
                1. About Our Services
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                {site.legalName} provides overnight and daytime newborn care,
                postpartum doula support, newborn sleep conditioning, feeding
                support, parent education, newborn routine development, and
                emotional support for new parents in Maryland, Washington DC,
                and Northern Virginia. Services are provided under a separate
                written service agreement between you and {site.legalName}. If
                these Terms conflict with a signed service agreement, the
                service agreement controls for the services it covers.
              </p>
            </section>
          </Reveal>

          {/* 2. Not Medical Advice */}
          <Reveal>
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-ink">
                2. Not Medical Advice
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                The Site and our communications are for general information and
                do not provide medical advice, diagnosis, or treatment. Our team
                provides non-medical newborn and postpartum support. Always
                consult your physician, midwife, pediatrician, or other
                qualified health provider about medical concerns. In an
                emergency, call 911.
              </p>
            </section>
          </Reveal>

          {/* 3. Consultations and Bookings */}
          <Reveal>
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-ink">
                3. Consultations and Bookings
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Submitting the contact form or messaging us does not guarantee
                availability or create a service agreement. A booking is
                confirmed only when we confirm it in writing and any required
                agreement is signed.
              </p>
            </section>
          </Reveal>

          {/* 4. SMS / Text Messaging Terms */}
          <Reveal>
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-ink">
                4. SMS / Text Messaging Terms
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                These terms apply to the {site.legalName} text messaging program
                (the &quot;Program&quot;).
              </p>

              {/* Program description */}
              <div className="mt-10">
                <h3 className="font-display text-xl font-semibold text-ink">
                  Program description
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  If you opt in, {site.legalName} will send you text messages
                  related to your inquiry and our services, including responses
                  to your questions, consultation scheduling and confirmations,
                  appointment reminders, and service-related updates and notices.
                </p>
              </div>

              {/* How to opt in */}
              <div className="mt-10">
                <h3 className="font-display text-xl font-semibold text-ink">
                  How to opt in
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  You opt in by checking the SMS consent box on our contact form
                  at{" "}
                  <Link
                    href="/contact"
                    className="text-plum-deep underline underline-offset-2 hover:text-plum"
                  >
                    watchthebabyllc.com/contact
                  </Link>{" "}
                  and submitting the form, or by texting us first and agreeing to
                  receive messages. Consent to receive text messages is not
                  required to purchase any goods or services, and you may still
                  contact us by email or phone.
                </p>
              </div>

              {/* Message frequency */}
              <div className="mt-10">
                <h3 className="font-display text-xl font-semibold text-ink">
                  Message frequency
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  Message frequency varies depending on your interaction with us
                  and your scheduled services.
                </p>
              </div>

              {/* Costs */}
              <div className="mt-10">
                <h3 className="font-display text-xl font-semibold text-ink">
                  Costs
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  Message and data rates may apply. Check with your mobile
                  carrier about your plan.
                </p>
              </div>

              {/* How to opt out */}
              <div className="mt-10">
                <h3 className="font-display text-xl font-semibold text-ink">
                  How to opt out
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  You can cancel the SMS service at any time. Text STOP to{" "}
                  {site.phone}. After you send STOP, we will send one final
                  message confirming your unsubscribe, and you will receive no
                  further messages. If you want to rejoin, sign up again through
                  our{" "}
                  <Link
                    href="/contact"
                    className="text-plum-deep underline underline-offset-2 hover:text-plum"
                  >
                    contact form
                  </Link>{" "}
                  or text START.
                </p>
              </div>

              {/* Help */}
              <div className="mt-10">
                <h3 className="font-display text-xl font-semibold text-ink">
                  Help
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  For assistance, text HELP to {site.phone} or contact us at{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="text-plum-deep underline underline-offset-2 hover:text-plum"
                  >
                    {site.email}
                  </a>{" "}
                  or {site.phone}.
                </p>
              </div>

              {/* Supported carriers */}
              <div className="mt-10">
                <h3 className="font-display text-xl font-semibold text-ink">
                  Supported carriers
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  The Program is available on major U.S. carriers. Carriers are
                  not liable for delayed or undelivered messages.
                </p>
              </div>

              {/* Your information */}
              <div className="mt-10">
                <h3 className="font-display text-xl font-semibold text-ink">
                  Your information
                </h3>
                <p className="mt-3 leading-relaxed text-ink-soft">
                  Your phone number and consent are handled according to our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-plum-deep underline underline-offset-2 hover:text-plum"
                  >
                    Privacy Policy
                  </Link>
                  . We do not share mobile information with third parties or
                  affiliates for marketing or promotional purposes.
                </p>
              </div>

              {/* Sensitive information warning */}
              <div className="mt-10">
                <p className="leading-relaxed text-ink-soft">
                  <strong className="font-semibold text-ink">
                    Please do not text sensitive health information.
                  </strong>{" "}
                  Text messaging is not a secure channel. Please do not send us
                  sensitive medical details by text.
                </p>
              </div>
            </section>
          </Reveal>

          {/* 5. Acceptable Use of the Site */}
          <Reveal>
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-ink">
                5. Acceptable Use of the Site
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                You agree not to use the Site to:
              </p>
              <ul className="mt-4 list-disc pl-6 space-y-2 text-ink-soft">
                <li>Violate any law</li>
                <li>Submit false or misleading information</li>
                <li>Interfere with the Site&apos;s operation</li>
                <li>Attempt unauthorized access</li>
                <li>
                  Send spam or unsolicited messages through the Site
                </li>
              </ul>
            </section>
          </Reveal>

          {/* 6. Intellectual Property */}
          <Reveal>
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-ink">
                6. Intellectual Property
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                All content on the Site, including text, logos, images, and
                design, is owned by or licensed to {site.legalName} and may not
                be copied, reproduced, or used without our written permission.
              </p>
            </section>
          </Reveal>

          {/* 7. Disclaimer of Warranties */}
          <Reveal>
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-ink">
                7. Disclaimer of Warranties
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                The Site is provided &quot;as is&quot; and &quot;as
                available&quot; without warranties of any kind, express or
                implied, to the fullest extent permitted by law.
              </p>
            </section>
          </Reveal>

          {/* 8. Limitation of Liability */}
          <Reveal>
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-ink">
                8. Limitation of Liability
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                To the fullest extent permitted by law, {site.legalName} and its
                owners, employees, and contractors are not liable for indirect,
                incidental, special, or consequential damages arising from your
                use of the Site or from SMS communications. Nothing in these
                Terms limits liability that cannot be limited by law.
              </p>
            </section>
          </Reveal>

          {/* 9. Governing Law */}
          <Reveal>
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-ink">
                9. Governing Law
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                These Terms are governed by the laws of the State of Maryland,
                without regard to conflict of law principles.
              </p>
            </section>
          </Reveal>

          {/* 10. Changes to These Terms */}
          <Reveal>
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-ink">
                10. Changes to These Terms
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                We may update these Terms from time to time. The effective date
                above shows when they were last revised. Continued use of the
                Site after changes means you accept the updated Terms.
              </p>
            </section>
          </Reveal>

          {/* Contact Us */}
          <Reveal>
            <section className="mt-12">
              <h2 className="font-display text-2xl font-semibold text-ink">
                Contact Us
              </h2>
              <address className="mt-4 space-y-2 not-italic leading-relaxed text-ink-soft">
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
              </address>
            </section>
          </Reveal>
        </div>
      </section>
    </>
  );
}
