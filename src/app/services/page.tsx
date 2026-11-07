import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { PhotoSlot } from "@/components/PhotoSlot";
import { Button } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon, type IconName } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { services, faqs, site } from "@/lib/site";
import {
  getBaseUrl,
  pageMetadata,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Overnight & daytime newborn care, postpartum doula support, sleep conditioning, feeding support, parent education and more — luxury care across Maryland, DC & Virginia.",
  path: "/services",
});

export default function ServicesPage() {
  const baseUrl = getBaseUrl();
  return (
    <>
      <JsonLd
        data={[
          faqSchema(),
          breadcrumbSchema(baseUrl, [
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />
      <PageHeader
        eyebrow="Our services"
        title="Care for the fourth trimester"
        description="We keep our offering small and personal — just the support that makes the biggest difference in those first weeks at home."
      />

      {/* Detailed services */}
      <section className="container py-16 sm:py-20">
        <div className="flex flex-col gap-10">
          {services.map((service, i) => (
            <Reveal key={service.slug}>
              <article
                id={service.slug}
                className="group relative grid gap-8 overflow-hidden rounded-3xl border border-line/70 bg-surface/90 p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:items-center shadow-[0_4px_28px_rgba(55,35,61,0.04)] backdrop-blur-sm transition-all duration-300 hover:border-plum/25 hover:shadow-[0_12px_36px_rgba(55,35,61,0.06)]"
              >
                {/* Mobile/tablet: photo framed cleanly */}
                {service.image && (
                  <div className="overflow-hidden rounded-2xl bg-plum-tint/30 lg:hidden">
                    <PhotoSlot
                      src={service.image}
                      alt={service.imageAlt ?? service.title}
                      className="aspect-[16/10] w-full object-cover"
                      sizes="100vw"
                    />
                  </div>
                )}
                <div className={i % 2 === 1 ? "lg:order-2" : "lg:order-1"}>
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-gold-deep">
                    <span>Care N° {String(i + 1).padStart(2, "0")}</span>
                    <span className="h-1 w-1 rounded-full bg-gold/60" />
                    <span>Boutique Care</span>
                  </div>

                  <h2 className="mt-3 font-display text-2xl font-semibold leading-tight text-ink sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg">
                    {service.description}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-line/80 bg-cream/70 px-4 py-1.5 text-xs font-medium text-ink-soft">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold-deep" />
                      {service.priceNote}
                    </span>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-plum-deep transition-colors hover:text-plum"
                    >
                      Book this care
                      <Icon name="arrow-right" className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>

                <div
                  className={`flex flex-col gap-6 rounded-2xl border border-line/60 bg-cream/50 p-6 sm:p-8 ${
                    i % 2 === 1 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  {/* Desktop: photo framed with art-print aesthetic */}
                  {service.image && (
                    <div className="hidden overflow-hidden rounded-xl bg-plum-tint/30 lg:block">
                      <PhotoSlot
                        src={service.image}
                        alt={service.imageAlt ?? service.title}
                        className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                        sizes="(min-width: 1024px) 50vw, 100vw"
                      />
                    </div>
                  )}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-plum-deep">
                      What&apos;s included
                    </h3>
                    <ul className="mt-4 space-y-3">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm">
                          <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center text-plum-deep">
                            <Icon name="check" className="h-3.5 w-3.5 stroke-[2.5]" />
                          </span>
                          <span className="leading-relaxed text-ink-soft">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Maternity Care Packages */}
        <Reveal className="mt-12">
          <div className="relative overflow-hidden rounded-3xl bg-plum px-8 py-10 shadow-soft sm:px-12">
            <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-5">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-gold">
                  <Icon name="sparkle" className="h-6 w-6" />
                </span>
                <p className="max-w-2xl text-lg leading-relaxed text-white">
                  {site.packagesNote}
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-plum-deep shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift"
              >
                Ask about packages
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="container py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Good to know"
            title="Frequently asked questions"
            className="mx-auto"
          />
        </Reveal>
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-line/70 overflow-hidden rounded-2xl border border-line/70 bg-surface/90 shadow-[0_4px_24px_rgba(55,35,61,0.04)]">
          {faqs.map((faq) => (
            <details key={faq.q} className="group px-6 sm:px-8">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-lg font-semibold text-ink marker:hidden transition-colors group-hover:text-plum-deep">
                {faq.q}
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-plum-tint text-plum-deep transition-transform duration-300 group-open:rotate-45">
                  <Icon name="close" className="h-3.5 w-3.5 rotate-45" />
                </span>
              </summary>
              <p className="pb-5 pr-12 text-[15px] leading-relaxed text-ink-soft">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16">
        <Reveal className="relative overflow-hidden rounded-3xl border border-line/70 bg-surface/90 p-10 text-center sm:p-14 shadow-[0_8px_32px_rgba(55,35,61,0.04)]">
          <h2 className="mx-auto max-w-xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Not sure which service fits? Let&apos;s figure it out together.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-ink-soft">
            Every family is different. Book a free consultation and we&apos;ll
            recommend the right support — no pressure, no obligation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact" size="lg" withArrow>
              Book a free consultation
            </Button>
            <Button
              href={`mailto:${site.email}`}
              size="lg"
              variant="secondary"
            >
              Email us to book
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
