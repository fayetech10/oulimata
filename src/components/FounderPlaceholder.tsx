import { site } from "@/lib/site";

/**
 * Branded portrait placeholder shown while site.images.founder is null —
 * a soft gradient panel with the founder's initial and a name badge.
 * Used on the home founder teaser and the About page.
 */
export function FounderPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center bg-gradient-to-br from-plum-soft via-plum-tint to-rose-soft p-8 ${className}`}
    >
      <div className="relative">
        <div className="flex h-44 w-44 items-center justify-center rounded-full border border-white/70 bg-white/60 shadow-soft backdrop-blur">
          <span className="font-display text-6xl font-semibold text-plum-deep">
            {site.founder.charAt(0)}
          </span>
        </div>
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-line bg-surface px-4 py-1.5 text-sm font-semibold text-ink shadow-soft">
          {site.founder}, Founder
        </div>
      </div>
    </div>
  );
}
