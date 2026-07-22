import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

/** Full brand lockup — the real Watch The Baby logo (mother, moon, wordmark). */
export function LogoImage({
  className = "",
  sizes = "200px",
}: {
  className?: string;
  /** Widest the lockup is ever drawn — the footer's h-24 works out at 165px. */
  sizes?: string;
}) {
  return (
    <Image
      src="/images/logo.png"
      alt={`${site.name} — ${site.tagline}`}
      width={814}
      height={473}
      priority
      // The lockup is thin script over fine line art; the default quality of 75
      // muddies those strokes once re-encoded to WebP.
      quality={95}
      sizes={sizes}
      className={className}
    />
  );
}

export function Logo({
  className = "",
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      className={`inline-flex items-center ${className}`}
      aria-label={`${site.name} — home`}
    >
      <LogoImage className="h-[72px] w-auto transition-transform duration-300 hover:scale-[1.04] motion-reduce:transition-none" />
    </Link>
  );
}
