import Link from "next/link";
import { Icon } from "./Icons";
import { PhotoSlot } from "./PhotoSlot";
import type { Service } from "@/lib/site";

export function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index?: number;
}) {
  const numberStr =
    typeof index === "number" ? String(index + 1).padStart(2, "0") : null;

  return (
    <Link
      href={`/services#${service.slug}`}
      className="group relative flex h-full flex-col rounded-2xl border border-line/70 bg-surface/90 p-5 shadow-[0_4px_24px_rgba(55,35,61,0.04)] backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-plum/30 hover:bg-surface hover:shadow-[0_16px_40px_rgba(55,35,61,0.08)]"
    >
      {/* Photo frame with art-print breathing room */}
      {service.image && (
        <div className="relative mb-5 overflow-hidden rounded-xl bg-plum-tint/30">
          <PhotoSlot
            src={service.image}
            alt={service.imageAlt ?? service.title}
            className="aspect-[16/11] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          />
        </div>
      )}

      {/* Header meta: Subtle index & price note */}
      <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.16em] text-gold-deep">
        {numberStr ? <span>Care N° {numberStr}</span> : <span />}
        {service.priceNote && (
          <span className="text-[11px] font-medium normal-case tracking-normal text-ink-muted">
            {service.priceNote.split("·")[0].trim()}
          </span>
        )}
      </div>

      {/* Title */}
      <h3 className="mt-3 font-display text-xl font-semibold leading-snug text-ink transition-colors duration-200 group-hover:text-plum-deep">
        {service.title}
      </h3>

      {/* Summary */}
      <p className="mt-2.5 flex-1 text-[14.5px] leading-relaxed text-ink-soft">
        {service.summary}
      </p>

      {/* Footer link: delicate artisanal underline */}
      <div className="mt-6 flex items-center justify-between border-t border-line/60 pt-4 text-xs font-semibold text-plum-deep">
        <span className="inline-flex items-center gap-1.5 transition-colors group-hover:text-plum">
          Explore details
          <Icon
            name="arrow-right"
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
          />
        </span>
        <span className="text-[11px] font-normal text-ink-muted transition-colors group-hover:text-ink-soft">
          Full overview
        </span>
      </div>
    </Link>
  );
}
