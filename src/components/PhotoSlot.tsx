import Image from "next/image";
import { Icon } from "./Icons";

/**
 * A photo frame that gracefully handles missing images.
 *
 * Pass a real `src` (a file under public/, e.g. "/images/hero.jpg") and it
 * renders an optimised next/image. While `src` is null/undefined it shows an
 * elegant branded placeholder instead — so the site never looks broken while
 * you're waiting for the photoshoot. Configure paths in src/lib/site.ts →
 * site.images.
 */
export function PhotoSlot({
  src,
  alt,
  className = "",
  label = "Photo coming soon",
  priority = false,
  quality,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  src?: string | null;
  alt: string;
  className?: string;
  label?: string;
  priority?: boolean;
  /**
   * Falls back to next/image's default of 75. Worth raising for a source photo
   * that is already tightly compressed, so the re-encode doesn't stack a second
   * generation of artefacts on top. Any value used must also be declared in
   * next.config.mjs → images.qualities, which Next 16 enforces.
   */
  quality?: number;
  sizes?: string;
}) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out motion-reduce:transition-none group-hover:scale-[1.05]"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-plum-soft via-cream to-rose-soft ${className}`}
    >
      <div className="flex flex-col items-center gap-3 p-6 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/75 text-plum shadow-soft">
          <Icon name="camera" className="h-6 w-6" />
        </span>
        <span className="text-sm font-semibold text-ink-soft">{label}</span>
      </div>
    </div>
  );
}
