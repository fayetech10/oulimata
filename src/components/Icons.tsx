import type { SVGProps } from "react";
import {
  ArrowRight,
  BookOpen,
  Camera,
  Check,
  Clock,
  Flower2,
  Gift,
  Heart,
  Mail,
  MapPin,
  Menu,
  MessageCircleHeart,
  MoonStar,
  Phone,
  Quote,
  Star,
  Sun,
  X,
  type LucideIcon,
} from "lucide-react";

type IconProps = SVGProps<SVGSVGElement> & { name: IconName };

export type IconName =
  | "shield"
  | "heart-pulse"
  | "leaf"
  | "moon"
  | "hands"
  | "bottle"
  | "heart"
  | "sparkle"
  | "check"
  | "arrow-right"
  | "menu"
  | "close"
  | "phone"
  | "mail"
  | "map-pin"
  | "clock"
  | "instagram"
  | "facebook"
  | "tiktok"
  | "quote"
  | "star"
  | "zzz"
  | "sun"
  | "book"
  | "spa"
  | "chat-heart"
  | "gift"
  | "camera"
  | "badge-check"
  | "certificate"
  | "award"
  | "home-heart";

/**
 * Bespoke, handcrafted SVGs designed specifically for Watch The Baby LLC.
 * Replaces generic AI / stock icons with warm, delicate, maternal-care iconography.
 */
const customIcons: Partial<Record<IconName, React.ReactNode>> = {
  // Baby nursing bottle with nipple and calibration notches (replaces Lucide's supermarket milk carton)
  bottle: (
    <>
      <path d="M10 5V3.2a1.8 1.8 0 0 1 3.6 0V5" />
      <rect x="8" y="5" width="7.6" height="2.2" rx="0.8" />
      <path d="M8 7.2v10.6a3 3 0 0 0 3 3h1.6a3 3 0 0 0 3-3V7.2" />
      <line x1="11" y1="10.5" x2="13" y2="10.5" />
      <line x1="11" y1="13.5" x2="14" y2="13.5" />
      <line x1="11" y1="16.5" x2="13" y2="16.5" />
    </>
  ),

  // Peaceful baby bassinet / cradle with canopy & rockers (replaces generic hotel double-bed)
  zzz: (
    <>
      <path d="M3 13.5v1a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5v-1" />
      <path d="M3 13.5h18" />
      <path d="M3 13.5V9a5 5 0 0 1 7-4.5" />
      <path d="M6 13.5a2 2 0 0 1 4 0" />
      <path d="M5 21.5c4 1 10 1 14 0" />
      <line x1="7" y1="19.5" x2="6" y2="21.5" />
      <line x1="17" y1="19.5" x2="18" y2="21.5" />
    </>
  ),

  // Nurturing postpartum doula hands cupping a gentle heart (replaces corporate handshake)
  hands: (
    <>
      <path d="M3 14c1.8 3.5 4.8 5.8 9 5.8s7.2-2.3 9-5.8" />
      <path d="M2.5 11.5c2.2 3.2 5.3 5 9.5 5s7.3-1.8 9.5-5" />
      <path d="M12 12.8c-2-1.8-3.6-3.2-3.6-4.8a2.4 2.4 0 0 1 4.1-1.5A2.4 2.4 0 0 1 16.6 8c0 1.6-1.6 3-3.6 4.8z" />
    </>
  ),

  // Infant CPR & first-aid: tender heart with medical care cross (replaces hospital ECG monitor line)
  "heart-pulse": (
    <>
      <path d="M19.5 13.5L12 21l-7.5-7.5a5 5 0 1 1 7.5-6.5 5 5 0 1 1 7.5 6.5z" />
      <line x1="12" y1="8" x2="12" y2="13" />
      <line x1="9.5" y1="10.5" x2="14.5" y2="10.5" />
    </>
  ),

  // Verified caregiver credential seal with checkmark
  "badge-check": (
    <>
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),

  // Fully insured certificate agreement with verified seal
  certificate: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M9 14.5l2 2 4-4" />
    </>
  ),

  // Protective trust shield with checkmark
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),

  // Professional accreditation award medal (replaces AI sparkle in values)
  award: (
    <>
      <circle cx="12" cy="8.5" r="5.5" />
      <path d="M8.2 13.5L7 21l5-2.5L17 21l-1.2-7.5" />
      <path d="M9.5 8.5l1.8 1.8 3.2-3.2" />
    </>
  ),

  // Welcoming home with heart for "For every family" (replaces random leaf)
  "home-heart": (
    <>
      <path d="M3 10.5l9-7.5 9 7.5v8.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8.5z" />
      <path d="M12 13c-1.3-1.1-2.4-2-2.4-2.9a1.4 1.4 0 0 1 2.4-.9 1.4 1.4 0 0 1 2.4.9c0 .9-1.1 1.8-2.4 2.9z" />
    </>
  ),

  // Refined 4-point editorial diamond star (replaces generic 3-star AI sparkles)
  sparkle: (
    <path d="M12 2.5l2.2 7.3L21.5 12l-7.3 2.2L12 21.5l-2.2-7.3L2.5 12l7.3-2.2z" />
  ),

  // Subtle botanical sprig for holistic wellbeing
  leaf: (
    <>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </>
  ),

  // Social brand icons
  instagram: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="16.5" cy="7.5" r="0.6" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: (
    <path d="M14.5 8.5H16V6h-1.8c-1.9 0-3.2 1.2-3.2 3.2V11H9v2.6h2v6.4h2.6v-6.4h2.1l.4-2.6h-2.5V9.6c0-.7.3-1.1 1.4-1.1z" />
  ),
  tiktok: (
    <path
      d="M16.6 5.82A4.28 4.28 0 0115.54 3h-3.09v12.4a2.59 2.59 0 01-2.59 2.5 2.6 2.6 0 01-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 004.3 1.38V7.3s-1.88.09-3.24-1.48z"
      fill="currentColor"
      stroke="none"
    />
  ),
};

const lucideIcons: Partial<Record<IconName, LucideIcon>> = {
  moon: MoonStar,
  heart: Heart,
  check: Check,
  "arrow-right": ArrowRight,
  menu: Menu,
  close: X,
  phone: Phone,
  mail: Mail,
  "map-pin": MapPin,
  clock: Clock,
  quote: Quote,
  star: Star,
  sun: Sun,
  book: BookOpen,
  spa: Flower2,
  "chat-heart": MessageCircleHeart,
  gift: Gift,
  camera: Camera,
};

export function Icon({ name, className = "", ...props }: IconProps) {
  // 1. Bespoke handcrafted SVG takes priority
  const custom = customIcons[name];
  if (custom) {
    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={className}
        {...props}
      >
        {custom}
      </svg>
    );
  }

  // 2. Refined Lucide icon fallback with delicate stroke width
  const Lucide = lucideIcons[name];
  if (Lucide) {
    return (
      <Lucide
        strokeWidth={1.5}
        aria-hidden="true"
        className={className}
        {...props}
      />
    );
  }

  return null;
}
