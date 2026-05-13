import type { ReactNode } from "react";

/*
 * Trust strip items (SPEC.md §5.3 + §3.4). Icons are 24x24 stroke-only SVGs
 * using currentColor so they pick up the navy from their container.
 *
 * These hand-rolled icons follow SPEC.md §3.4's icon descriptions; once the
 * visual prototype HTML lands, swap in the prototype's exact SVG paths.
 */
export type TrustItem = {
  label: string;
  note: string;
  icon: ReactNode;
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "square" as const,
  strokeLinejoin: "round" as const,
};

export const TRUST_ITEMS: readonly TrustItem[] = [
  {
    label: "Made in India",
    note: "Indigenous IP, designed and engineered in India.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}>
        <path d="M12 3l8 3v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3z" />
      </svg>
    ),
  },
  {
    label: "Defence-Grade",
    note: "Hardened against the threat models our customers face.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}>
        <rect x="5" y="11" width="14" height="9" />
        <path d="M8 11V7a4 4 0 018 0v4" />
      </svg>
    ),
  },
  {
    label: "On-Prem · Air-Gapped",
    note: "Deploy on customer infrastructure. No cloud required.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}>
        <circle cx="12" cy="12" r="8" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="12" y1="4" x2="12" y2="20" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    label: "AI-Native",
    note: "Sovereign models, on-prem inference, mission-tuned.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round">
        <circle cx="12" cy="12" r="2.5" />
        <line x1="12" y1="3" x2="12" y2="7" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <line x1="3" y1="12" x2="7" y2="12" />
        <line x1="17" y1="12" x2="21" y2="12" />
        <line x1="5.6" y1="5.6" x2="8.4" y2="8.4" />
        <line x1="15.6" y1="15.6" x2="18.4" y2="18.4" />
        <line x1="5.6" y1="18.4" x2="8.4" y2="15.6" />
        <line x1="15.6" y1="8.4" x2="18.4" y2="5.6" />
      </svg>
    ),
  },
  {
    label: "Built with Veterans",
    note: "Domain expertise from the people who lived the mission.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" {...stroke}>
        <polygon points="12,3 14.5,9 21,9.5 16,13.5 17.5,20 12,16.5 6.5,20 8,13.5 3,9.5 9.5,9" />
      </svg>
    ),
  },
];
