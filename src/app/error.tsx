"use client";

import { Button } from "@/components/Button";
import { LogoImage } from "@/components/Logo";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="container flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <LogoImage className="h-20 w-auto" />
      <h1 className="mt-6 font-display text-2xl font-semibold text-ink">
        Something didn&apos;t go quite right
      </h1>
      <p className="mt-3 max-w-sm leading-relaxed text-ink-soft">
        An unexpected hiccup on our side. Please try again — or head back home
        and we&apos;ll take it from there.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button onClick={reset} withArrow>
          Try again
        </Button>
        <Button href="/" variant="secondary">
          Back to home
        </Button>
      </div>
    </section>
  );
}
