import type { ReactNode } from "react";

/*
 * "Why Scaan" pillars (SPEC.md §5.5). Headlines carry navy-italic emphasis,
 * so this file is .tsx rather than .ts. The Em helper enforces the
 * SPEC.md §3.2 rule that italic emphasis always renders navy + weight 400.
 */
export type Pillar = {
  number: "01" | "02" | "03" | "04";
  label: string;
  headline: ReactNode;
  body: string;
};

const Em = ({ children }: { children: ReactNode }) => (
  <em className="italic font-normal text-navy">{children}</em>
);

export const PILLARS: readonly Pillar[] = [
  {
    number: "01",
    label: "Defence-First Engineering",
    headline: (
      <>
        Engineered for the <Em>operational reality</Em>, not the demo room.
      </>
    ),
    body:
      "Every system we build is designed for the conditions our customers operate in — degraded networks, hostile spectrum, hardened endpoints, and zero-trust assumptions.",
  },
  {
    number: "02",
    label: "Indigenous & Sovereign",
    headline: (
      <>
        Built in India, <Em>deployed on Indian terms.</Em>
      </>
    ),
    body:
      "Source code, infrastructure, and operational control remain with our customers. No foreign dependencies in the critical path.",
  },
  {
    number: "03",
    label: "AI at the Core",
    headline: (
      <>
        AI that runs <Em>where the mission runs.</Em>
      </>
    ),
    body:
      "Sovereign models, on-prem inference, and mission-tuned reasoning — not a wrapper around someone else’s API.",
  },
  {
    number: "04",
    label: "Mission-Grade Reliability",
    headline: (
      <>
        Built for <Em>long-horizon support.</Em>
      </>
    ),
    body:
      "We don’t ship and run. Our engineering posture is built around decade-long deployments, in-place upgrades, and uninterrupted operations.",
  },
];
