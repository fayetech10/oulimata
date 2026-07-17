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
        <div className="flex flex-col gap-6">
          {services.map((service, i) => (
            <Reveal key={service.slug}>
              <article
                id={service.slug}
                className="surface-card grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:items-center"
              >
                {/* Mobile/tablet: big edge-to-edge photo at the top of the card */}
                {service.image && (
                  <PhotoSlot
                    src={service.image}
                    alt={service.imageAlt ?? service.title}
                    className="-mx-6 -mt-6 -mb-2 aspect-[4/3] w-[calc(100%+3rem)] max-w-none rounded-b-none rounded-t-4xl sm:-mx-10 sm:-mt-10 sm:aspect-[3/2] sm:w-[calc(100%+5rem)] lg:hidden"
                    sizes="100vw"
                  />
                )}
                <div className={i % 2 === 1 ? "lg:order-2" : "lg:order-1"}>
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-plum-soft text-plum-deep">
                    <Icon name={service.icon as IconName} className="h-7 w-7" />
                  </span>
                  <h2 className="mt-5 font-display text-2xl font-semibold text-ink sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                    {service.description}
                  </p>
                  <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-rose-tint px-4 py-1.5 text-sm font-semibold text-rose">
                    <Icon name="sparkle" className="h-4 w-4" />
                    {service.priceNote}
                  </p>
                </div>

                <div
                  className={`rounded-4xl bg-plum-tint/70 p-5 sm:p-7 ${
                    i % 2 === 1 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  {/* Desktop: photo lives inside the "what's included" box */}
                  {service.image && (
                    <PhotoSlot
                      src={service.image}
                      alt={service.imageAlt ?? service.title}
                      className="mb-7 hidden aspect-[16/9] w-full rounded-3xl lg:block"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  )}
                  <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-plum-deep">
                    What&apos;s included
                  </h3>
                  <ul className="mt-5 space-y-3.5">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-plum text-white">
                          <Icon name="check" className="h-3.5 w-3.5" />
                        </span>
                        <span className="leading-relaxed text-ink-soft">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Maternity Care Packages */}
        <Reveal className="mt-10">
          <div className="relative overflow-hidden rounded-4xl bg-plum px-8 py-10 shadow-lift sm:px-12">
            <div
              className="pointer-events-none absolute -right-14 -top-14 h-52 w-52 rounded-full bg-plum-deep/50"
              aria-hidden="true"
            />
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
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-plum-deep shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift"
              >
                Ask about packages
                <Icon name="arrow-right" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="container py-12 sm:py-16">
        <Reveal>
          <SectionHeading
            eyebrow="Good to know"
            title="Frequently asked questions"
          />
        </Reveal>
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-line overflow-hidden rounded-4xl border border-line bg-surface">
          {faqs.map((faq) => (
            <details key={faq.q} className="group px-6 sm:px-8">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-lg font-semibold text-ink marker:hidden">
                {faq.q}
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-plum-soft text-plum-deep transition-transform duration-300 group-open:rotate-45">
                  <Icon name="close" className="h-4 w-4 rotate-45" />
                </span>
              </summary>
              <p className="pb-5 pr-12 leading-relaxed text-ink-soft">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16">
        <Reveal className="surface-card flex flex-col items-center gap-6 p-10 text-center sm:p-14">
          <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            Not sure which service fits? Let&apos;s figure it out together.
          </h2>
          <p className="max-w-lg text-lg leading-relaxed text-ink-soft">
            Every family is different. Book a free consultation and we&apos;ll
            recommend the right support — no pressure, no obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
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
