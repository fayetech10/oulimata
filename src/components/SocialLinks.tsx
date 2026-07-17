import { Icon, type IconName } from "./Icons";
import { site } from "@/lib/site";

const links: { name: IconName; label: string; href: string }[] = [
  { name: "instagram", label: "Instagram", href: site.social.instagram },
  { name: "facebook", label: "Facebook", href: site.social.facebook },
];

/**
 * The round Instagram/Facebook buttons used in the footer and on the
 * contact page. `size` tweaks the touch-target diameter (both ≥ 40px).
 */
export function SocialLinks({ size = "md" }: { size?: "sm" | "md" }) {
  const dim = size === "sm" ? "h-10 w-10" : "h-11 w-11";
  return (
    <div className="flex gap-2">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noreferrer"
          aria-label={l.label}
          className={`inline-flex ${dim} items-center justify-center rounded-full border border-line bg-surface text-ink-soft transition-colors hover:border-plum hover:text-plum-deep focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum focus-visible:ring-offset-2`}
        >
          <Icon name={l.name} className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}
