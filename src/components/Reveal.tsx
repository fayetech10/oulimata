"use client";

import {
  useEffect,
  useState,
  type ReactNode,
  type ElementType,
} from "react";

/**
 * Reveals its children with a gentle fade-and-rise as they scroll into view.
 * Falls back to visible immediately when IntersectionObserver is unavailable.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  as,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {
  const Tag: ElementType = as ?? "div";
  const [node, setNode] = useState<Element | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [node]);

  return (
    <Tag
      ref={setNode}
      data-reveal
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[700ms] ease-out ${
        shown ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      } ${className}`}
    >
      {children}
    </Tag>
  );
}
