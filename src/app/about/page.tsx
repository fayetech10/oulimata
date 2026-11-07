import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
import { FounderPlaceholder } from "@/components/FounderPlaceholder";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Icon, type IconName } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { PhotoSlot } from "@/components/PhotoSlot";
import { values, site } from "@/lib/site";
import { getBaseUrl, pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description: `Meet ${site.name}, a boutique newborn and postpartum care studio founded by ${site.founder} in ${site.city}.`,
  path: "/about",
});

const stats = [
  { value: "1-to-1", label: "Personal, direct care" },
  { value: "100%", label: "Vetted & certified caregivers" },
  { value: `Est. ${site.establishedYear}`, label: `Serving ${site.region}` },
];

export default function AboutPage() {
  const baseUrl = getBaseUrl();
  return (
    <>
      <JsonLd
        data={breadcrumbSchema(baseUrl, [
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <PageHeader
        eyebrow="About us"
        title="A calmer, kinder fourth trimester"
        description={`${site.name} is a newborn and postpartum care studio, born from ${site.founder}'s own experience as a new mother — and one belief: new families deserve steady, expert hands, and real rest.`}
      />

      {/* Story */}
      <section className="container py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="group lg:sticky lg:top-28">
              {site.images.founder ? (
                <div className="rounded-2xl border border-line/70 bg-surface/90 p-3 shadow-[0_8px_30px_rgba(55,35,61,0.06)]">
                  <PhotoSlot
                    src={site.images.founder}
                    alt={`${site.founder}, founder of ${site.name}`}
                    className="aspect-[4/5] w-full rounded-xl object-cover"
                    sizes="(min-width: 1024px) 40vw, 100vw"
                  />
                </div>
              ) : (
                <>
                  <FounderPlaceholder className="min-h-[320px] overflow-hidden rounded-2xl" />
                  <p className="mt-4 text-center text-sm text-ink-muted">
                    A warm photo of {site.founder} will live here — see
                    public/images/README.md.
                  </p>
                </>
              )}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="prose-neutral">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-gold-deep">
                Founder&apos;s Journey
              </div>
              <h2 className="mt-2 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                My story
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-soft">
                <p>
                  My name is {site.founder}, founder of {site.legalName}. My
                  journey to becoming a Newborn Care Specialist and Postpartum
                  Doula began with my own experience as a new mother.
                </p>
                <p>
                  When my son was born over a decade ago, my mother came to
                  live with me during those first precious weeks. Every night,
                  I cared for my baby, and each morning around 6:00 a.m., I
                  would bring him to my mother&apos;s room so I could get a few
                  more hours of much-needed sleep.
                </p>
                <p className="font-display text-xl font-semibold italic text-plum-deep">
                  That support was priceless.
                </p>
                <p>
                  Looking back, I often think about how difficult those early
                  weeks would have been without her help. Having someone I
                  trusted to care for my baby allowed me to rest, recover, and
                  be the best mother I could be.
                </p>
                <p>
                  That experience stayed with me. It inspired me to become a
                  certified Newborn Care Specialist and Postpartum Doula so I
                  could provide that same sense of comfort, reassurance, and
                  support to other families.
                </p>
                <p>
                  At {site.legalName}, my goal is to be the helping hand that
                  every new parent deserves. Whether I&apos;m caring for your
                  newborn during the day or overnight, my mission is to give
                  you the opportunity to rest, recover, and enjoy this special
                  season with confidence, knowing your baby is in caring and
                  capable hands.
                </p>
              </div>

              {/* Artisanal stats strip */}
              <div className="my-10 grid gap-6 border-y border-line/70 py-7 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-line/60">
                {stats.map((s, idx) => (
                  <div
                    key={s.label}
                    className={`text-center ${idx > 0 ? "sm:px-6" : "sm:pr-6"}`}
                  >
                    <div className="font-display text-3xl font-semibold text-plum-deep">
                      {s.value}
                    </div>
                    <div className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-gold-deep">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Motto */}
      <section className="container py-12">
        <Reveal>
          <figure className="mx-auto max-w-3xl text-center">
            <span className="font-display text-5xl leading-none text-gold/80" aria-hidden="true">
              &ldquo;
            </span>
            <blockquote className="mt-2 font-display text-2xl font-semibold italic leading-snug text-ink sm:text-3xl">
              {site.motto}
            </blockquote>
            <figcaption className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">
              Our motto — {site.name}
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* Values */}
      <section className="container py-16 sm:py-20">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="What we stand for"
            title="The values behind every visit"
            className="mx-auto"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80}>
              <div className="group flex h-full flex-col rounded-2xl border border-line/70 bg-surface/90 p-6 shadow-[0_4px_24px_rgba(55,35,61,0.04)] backdrop-blur-sm transition-all duration-300 hover:border-plum/30 hover:shadow-[0_12px_32px_rgba(55,35,61,0.06)]">
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.16em] text-gold-deep">
                  <span>Principle 0{i + 1}</span>
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-plum-tint text-plum-deep">
                    <Icon name={v.icon as IconName} className="h-4 w-4" />
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink transition-colors group-hover:text-plum-deep">
                  {v.title}
                </h3>
                <p className="mt-2.5 text-[14.5px] leading-relaxed text-ink-soft">
                  {v.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16">
        <Reveal className="relative overflow-hidden rounded-3xl border border-line/70 bg-surface/90 p-10 text-center sm:p-14 shadow-[0_8px_32px_rgba(55,35,61,0.04)]">
          <h2 className="mx-auto max-w-xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            We&apos;d love to meet your family
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg leading-relaxed text-ink-soft">
            Tell us a little about your due date and what would help most.
            The first conversation is always free.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg" withArrow>
              Get in touch
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
