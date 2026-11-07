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
    <section className="border-b border-line/70">
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
