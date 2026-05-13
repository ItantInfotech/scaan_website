"use client";

import { useEffect, useRef } from "react";

/*
 * SPEC.md §4.11 + §7. Scroll-triggered fade-up wrapper. Uses a single
 * module-level IntersectionObserver shared across every <Reveal> on the
 * page (threshold 0.12, rootMargin -40px). The visible class drives the
 * actual transition (defined in globals.css), so `prefers-reduced-motion`
 * works automatically via the global override.
 *
 * `delay` (1–5) adds an 80ms-incremented transition-delay so siblings can
 * stagger their reveal.
 */
let sharedObserver: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver | null {
  if (typeof window === "undefined") return null;
  if (sharedObserver) return sharedObserver;
  sharedObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          sharedObserver?.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: "-40px" },
  );
  return sharedObserver;
}

type Props = {
  delay?: 1 | 2 | 3 | 4 | 5;
  as?: "div" | "section" | "article" | "header" | "footer" | "li";
  className?: string;
  children: React.ReactNode;
};

export default function Reveal({
  delay,
  as: As = "div",
  className = "",
  children,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Users with prefers-reduced-motion get the content immediately;
    // skip the observer entirely.
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("reveal-visible");
      return;
    }

    const obs = getObserver();
    if (!obs) return;
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);

  return (
    <As
      ref={ref as React.RefObject<HTMLDivElement>}
      data-delay={delay}
      className={`reveal ${className}`}
    >
      {children}
    </As>
  );
}
