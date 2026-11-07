import { PageHeader } from "@/components/PageHeader";
import { ContactForm } from "@/components/ContactForm";
import { Icon } from "@/components/Icons";
import { JsonLd } from "@/components/JsonLd";
import { SocialLinks } from "@/components/SocialLinks";
import { site } from "@/lib/site";
import { getBaseUrl, pageMetadata, breadcrumbSchema } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description: `Book a free newborn care consultation with ${site.name} — serving ${site.serviceArea}. We reply within one business day.`,
  path: "/contact",
});

const details = [
  {
    icon: "mail" as const,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: "phone" as const,
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    icon: "instagram" as const,
    label: "Instagram",
    value: "DM us to book",
    href: site.social.instagram,
  },
  {
    icon: "map-pin" as const,
    label: "Service area",
    value: site.serviceArea,
  },
  {
    icon: "clock" as const,
    label: "Hours",
    value: site.hours,
  },
];

export default function ContactPage() {
  const baseUrl = getBaseUrl();
  return (
    <>
      <JsonLd
        data={breadcrumbSchema(baseUrl, [
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <PageHeader
        eyebrow="Contact"
        title="Let's plan the support that's right for you"
        description="Send us a message and we'll get back to you within one business day to arrange your free consultation."
      />

      <section className="container py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          {/* Details */}
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.18em] text-gold-deep">
              Direct Contact
            </div>
            <h2 className="mt-2 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Get in touch
            </h2>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Prefer to reach out directly? Here&apos;s the quickest way to find
              us. We&apos;re a small team, so it&apos;s always a real person
              replying.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-line/70 bg-surface/90 shadow-[0_4px_24px_rgba(55,35,61,0.04)] divide-y divide-line/60">
              {details.map((d) => {
                const inner = (
                  <div className="flex items-start gap-4 p-5 transition-colors hover:bg-cream/40">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-plum-tint text-plum-deep">
                      <Icon name={d.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-gold-deep">
                        {d.label}
                      </div>
                      <div className="mt-1 font-semibold leading-snug text-ink">
                        {d.value}
                      </div>
                    </div>
                  </div>
                );
                return d.href ? (
                  <a key={d.label} href={d.href} className="block transition-colors">
                    {inner}
                  </a>
                ) : (
                  <div key={d.label}>{inner}</div>
                );
              })}
            </div>

            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>

          {/* Form */}
          <ContactForm />
        </div>
      </section>
    </>
  );
}
