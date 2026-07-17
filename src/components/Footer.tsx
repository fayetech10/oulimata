import Link from "next/link";
import { LogoImage } from "./Logo";
import { Icon } from "./Icons";
import { SocialLinks } from "./SocialLinks";
import { nav, services, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-line bg-plum-tint/60">
      <div className="container py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link href="/" aria-label={`${site.name} — home`}>
              <LogoImage className="h-24 w-auto" />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              Luxury overnight postpartum &amp; newborn care serving{" "}
              {site.serviceArea} — so families can rest, recover and feel
              supported.
            </p>
            <div className="mt-5">
              <SocialLinks size="sm" />
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-ink-muted">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink-soft transition-colors hover:text-plum-deep"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-ink-muted">
              Services
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-ink-soft transition-colors hover:text-plum-deep"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-ink-muted">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2.5 text-ink-soft transition-colors hover:text-plum-deep"
                >
                  <Icon name="mail" className="h-4 w-4 text-plum" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 text-ink-soft transition-colors hover:text-plum-deep"
                >
                  <Icon name="instagram" className="h-4 w-4 text-plum" />
                  DM us to book
                </a>
              </li>
              <li className="inline-flex items-start gap-2.5 text-ink-soft">
                <Icon name="map-pin" className="mt-0.5 h-4 w-4 shrink-0 text-plum" />
                {site.serviceArea}
              </li>
            </ul>
          </div>
        </div>

        {/* Inclusivity note */}
        <p className="mt-14 max-w-3xl border-t border-line pt-8 text-sm leading-relaxed text-ink-soft">
          We warmly support every family — every structure, every background,
          every feeding and parenting choice. You are welcome here.
        </p>

        <div className="mt-8 flex flex-col gap-3 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>
            Serving {site.region} · Est. {site.establishedYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
