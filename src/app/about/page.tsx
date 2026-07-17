import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/Button";
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
                <PhotoSlot
                  src={site.images.founder}
                  alt={`${site.founder}, founder of ${site.name}`}
                  className="aspect-[4/5] w-full rounded-4xl shadow-soft"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
              ) : (
                <>
                  <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-plum-soft via-plum-tint to-rose-soft p-8">
                    <div className="flex min-h-[300px] items-center justify-center">
                      <div className="relative">
                        <div className="flex h-40 w-40 items-center justify-center rounded-full border border-white/70 bg-white/60 shadow-soft backdrop-blur">
                          <span className="font-display text-5xl font-semibold text-plum-deep">
                            {site.founder.charAt(0)}
                          </span>
                        </div>
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-line bg-surface px-4 py-1.5 text-sm font-semibold text-ink shadow-soft">
                          {site.founder}, Founder
                        </div>
                      </div>
                    </div>
                  </div>
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
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink">
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

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-3xl border border-line bg-surface p-6 text-center shadow-soft"
                  >
                    <div className="font-display text-2xl font-semibold text-plum-deep">
                      {s.value}
                    </div>
                    <div className="mt-1.5 text-sm leading-snug text-ink-soft">
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
      <section className="container py-8">
        <Reveal>
          <figure className="mx-auto max-w-3xl text-center">
            <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-plum-soft text-plum animate-pulse-soft motion-reduce:animate-none">
              <Icon name="quote" className="h-6 w-6" />
            </span>
            <blockquote className="mt-5 font-display text-2xl font-semibold italic leading-snug text-ink sm:text-3xl">
              &ldquo;{site.motto}&rdquo;
            </blockquote>
            <figcaption className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">
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
              <div className="surface-card h-full p-7">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-soft text-rose">
                  <Icon name={v.icon as IconName} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                  {v.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-ink-soft">
                  {v.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16">
        <Reveal className="surface-card flex flex-col items-center gap-6 p-10 text-center sm:p-14">
          <h2 className="max-w-xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
            We&apos;d love to meet your family
          </h2>
          <p className="max-w-lg text-lg leading-relaxed text-ink-soft">
            Tell us a little about your due date and what would help most.
            The first conversation is always free.
          </p>
          <Button href="/contact" size="lg" withArrow>
            Get in touch
          </Button>
        </Reveal>
      </section>
    </>
  );
}
