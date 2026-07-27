import { Icon, type IconName } from "./Icons";
import { site } from "@/lib/site";

const items: { name: IconName; label: string; href: string }[] = [
  { name: "instagram", label: "Instagram", href: site.social.instagram },
];

/**
 * Floating social buttons pinned to the bottom-right of every page.
 * Each button slides in on load and shows a small label on hover.
 */
export function SocialFloat() {
  return (
    <nav
      aria-label="Social media"
      className="fixed bottom-6 right-4 z-40 flex flex-col gap-2.5 sm:right-6"
    >
      {items.map((item, i) => {
        const isExternal = item.href.startsWith("http");
        return (
          <a
            key={item.label}
            href={item.href}
            {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
            aria-label={item.label}
            className="group relative inline-flex h-11 w-11 animate-fade-up items-center justify-center rounded-full border border-line bg-surface/95 text-ink-soft shadow-soft backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:border-plum hover:bg-plum hover:text-white hover:shadow-lift motion-reduce:animate-none motion-reduce:transition-none"
            style={{ animationDelay: `${500 + i * 90}ms` }}
          >
            <Icon name={item.name} className="h-5 w-5" />
            <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold text-ink opacity-0 shadow-soft transition-opacity duration-200 group-hover:opacity-100 md:block">
              {item.label}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
