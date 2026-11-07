import Link from "next/link";
import { Button } from "@/components/Button";
import { FounderPlaceholder } from "@/components/FounderPlaceholder";
import { HeroArt } from "@/components/HeroArt";
import { PhotoSlot } from "@/components/PhotoSlot";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading, Eyebrow } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Icon, type IconName } from "@/components/Icons";
import { credentials, services, steps, testimonials, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="container grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-24">
          <div>
            <div className="animate-fade-up">
              <Eyebrow>Luxury newborn care · {site.region}</Eyebrow>
            </div>
            <h1
              className="animate-fade-up mt-6 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl"
              style={{ animationDelay: "80ms" }}
            >
              {site.heroTitle}
            </h1>
            <p
              className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
              style={{ animationDelay: "160ms" }}
            >
              {site.heroSubtitle}
            </p>

            <div
              className="animate-fade-up mt-8 flex flex-wrap items-center gap-3"
              style={{ animationDelay: "240ms" }}
            >
              <Button href="/contact" size="lg" withArrow>
                Book a free consultation
              </Button>
              <Button href="/services" size="lg" variant="secondary">
                Explore services
              </Button>
            </div>

            <ul
              className="animate-fade-up mt-9 flex flex-wrap items-center gap-x-6 gap-y-3"
              style={{ animationDelay: "320ms" }}
            >
              {/* Qualifications only. Background checks, CPR and insurance are
                  the credentials strip's job immediately below, and spelling
                  them out twice within one screen read as noise. */}
              {[
                "Certified Newborn Care Specialist",
                "Certified Postpartum Doula",
              ].map(
                (item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-ink-soft"
                  >
                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-plum-soft text-plum-deep">
                      <Icon name="check" className="h-3.5 w-3.5" />
                    </span>
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          <div className="group relative animate-fade-up" style={{ animationDelay: "200ms" }}>
            {site.images.hero ? (
              <PhotoSlot
                src={site.images.hero}
                alt="A caregiver gently soothing a sleeping newborn"
                priority
                quality={90}
                className="aspect-[13/14] w-full rounded-3xl shadow-soft"
              />
            ) : (
              <HeroArt className="h-auto w-full drop-shadow-[0_20px_40px_rgba(55,35,61,0.1)]" />
            )}
          </div>
        </div>
      </section>

      {/* ── Credentials strip ────────────────────────────────── */}
      <section className="container pt-4 pb-8">
        <Reveal>
          <div className="border-y border-line/80 py-8 sm:py-10">
            <div className="grid gap-8 sm:grid-cols-3 sm:gap-10">
              {credentials.map((c) => (
                <div
                  key={c.title}
                  className="flex flex-col items-start sm:border-l sm:border-line/60 sm:pl-8 first:sm:border-l-0 first:sm:pl-0"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-plum-tint text-plum-deep">
                    <Icon name={c.icon as IconName} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {c.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Our promise ──────────────────────────────────────── */}
      <section className="container pt-16 sm:pt-20">
        <Reveal>
          <figure className="mx-auto max-w-3xl text-center">
            <Eyebrow>{site.promiseSection.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              {site.promiseSection.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              {site.promiseSection.text}
            </p>
            <div
              className="mx-auto mt-8 h-px w-24 bg-gold/60"
              aria-hidden="true"
            />
          </figure>
        </Reveal>
      </section>

      {/* ── Services ─────────────────────────────────────────── */}
      <section className="container py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="Gentle, expert care — shaped around your family"
            description="A small, focused set of services covering the moments that matter most in those first weeks at home."
          />
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 80}>
              <ServiceCard service={service} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Our motto ────────────────────────────────────────── */}
      <section className="container py-8">
        <Reveal>
          <figure className="relative overflow-hidden rounded-3xl bg-plum px-8 py-16 text-center shadow-soft sm:px-16">
            <span className="mx-auto inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gold">
              <Icon name="quote" className="h-5 w-5" />
            </span>
            <blockquote className="mx-auto mt-6 max-w-3xl font-display text-2xl font-semibold italic leading-snug text-white sm:text-3xl">
              &ldquo;{site.motto}&rdquo;
            </blockquote>
            <figcaption className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-gold-soft">
              {site.name} · {site.tagline}
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* ── Founder / About teaser ───────────────────────────── */}
      <section className="container py-8">
        <div className="group overflow-hidden rounded-3xl border border-line/80 bg-surface shadow-soft lg:grid lg:grid-cols-2">
          <div className="relative min-h-[420px] sm:min-h-[480px] lg:min-h-[320px]">
            {site.images.founder ? (
              <PhotoSlot
                src={site.images.founder}
                alt={`${site.founder}, founder of ${site.name}`}
                className="h-full min-h-[420px] sm:min-h-[480px] lg:min-h-[320px]"
              />
            ) : (
              /* portrait placeholder — set site.images.founder to swap in a photo */
              <FounderPlaceholder className="h-full min-h-[320px]" />
            )}
          </div>

          <div className="p-8 sm:p-12">
            <Eyebrow>Meet the founder</Eyebrow>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              Small by design, so care never feels like a call centre
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              {site.promise}
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              {site.name} was founded by {site.founder} to bring calm, reliable
              newborn support to families across {site.serviceArea} — the kind
              of steady, knowledgeable presence every new parent deserves in
              the fourth trimester.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="secondary" withArrow>
                Our story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────── */}
      <section className="container py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="How it works"
            title="Getting started is simple"
            description="Three easy steps between your first message and a good night's sleep."
            className="mx-auto"
          />
        </Reveal>
        <div className="relative mt-14 grid gap-8 md:grid-cols-3">
          <div
            className="absolute left-[16%] right-[16%] top-6 hidden h-px bg-line/80 md:block"
            aria-hidden="true"
          />
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 100}>
              <div className="relative flex flex-col items-center text-center">
                <span className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-line/80 bg-surface font-display text-base font-semibold text-plum-deep shadow-soft">
                  {step.number}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2.5 max-w-xs text-[15px] leading-relaxed text-ink-soft">
                  {step.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="container py-12">
        <Reveal>
          <SectionHeading
            eyebrow="Kind words"
            title="Families rest a little easier with us"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="flex h-full flex-col rounded-3xl border border-line/80 bg-surface p-7 shadow-soft transition-all duration-300 hover:border-plum/20">
                <span className="font-display text-4xl leading-none text-gold/80" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote className="mt-2 flex-1 font-display text-lg italic leading-relaxed text-ink">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-line/70 pt-4">
                  <div className="font-semibold text-ink">{t.name}</div>
                  <div className="text-xs text-ink-muted">{t.detail}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CTA band ─────────────────────────────────────────── */}
      <section className="container py-16 sm:py-24">
        <Reveal className="relative overflow-hidden rounded-3xl bg-plum px-8 py-14 text-center shadow-soft sm:px-16 sm:py-20">
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Ready to rest easy? Let&apos;s talk.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-plum-soft">
              Book a free, no-pressure consultation and we&apos;ll help you plan
              the support that fits your family.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="group/btn inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-base font-semibold tracking-tight text-plum-deep shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lift"
              >
                Book a free consultation
                <Icon
                  name="arrow-right"
                  className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1"
                />
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Icon name="mail" className="h-4 w-4" />
                {site.email}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
