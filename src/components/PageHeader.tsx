import type { ReactNode } from "react";
import { Eyebrow } from "./SectionHeading";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line/70">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          // Plum top-right, dusty rose top-left — the same arrangement as
          // .page-backdrop, so the band reads as part of the page rather than
          // a panel laid on top. These blooms were previously sage green and
          // terracotta, left over from an earlier palette.
          background:
            "radial-gradient(40rem 22rem at 80% -20%, rgba(74, 38, 80, 0.12), transparent 60%), radial-gradient(36rem 22rem at 0% 0%, rgba(176, 94, 109, 0.12), transparent 55%)",
        }}
        aria-hidden="true"
      />
      <div className="container py-16 sm:py-20">
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
