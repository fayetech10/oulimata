import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Icon } from "./Icons";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-plum text-white shadow-soft hover:bg-plum-deep hover:shadow-lift hover:-translate-y-0.5",
  secondary:
    "bg-surface text-ink border border-line hover:border-plum hover:text-plum-deep hover:-translate-y-0.5",
  ghost: "text-ink-soft hover:text-plum-deep",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  withArrow?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  withArrow = false,
  ...rest
}: CommonProps & {
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const content = (
    <>
      {children}
      {withArrow && (
        <Icon
          name="arrow-right"
          className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-1"
        />
      )}
    </>
  );

  if (href) {
    const isExternal = /^(https?:|mailto:|tel:)/.test(href);
    if (isExternal) {
      return (
        <a href={href} className={`group/btn ${classes}`}>
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={`group/btn ${classes}`}>
        {content}
      </Link>
    );
  }

  return (
    <button className={`group/btn ${classes}`} {...rest}>
      {content}
    </button>
  );
}
