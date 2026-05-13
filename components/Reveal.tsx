"use client";

import React, { useEffect, useRef } from "react";

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
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("reveal-visible");
      return;
    }

    const obs = getObserver();
    if (!obs) return;

    obs.observe(el);

    return () => {
      obs.unobserve(el);
    };
  }, []);

  return (
    <As
      ref={ref as React.Ref<any>}
      data-delay={delay}
      className={`reveal ${className}`}
    >
      {children}
    </As>
  );
}