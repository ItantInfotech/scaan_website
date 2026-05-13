/*
 * Discovery → Co-Build → Deploy → Sustain (SPEC.md §5.6).
 */
export type ApproachPhase = {
  phase: "I" | "II" | "III" | "IV";
  name: string;
  body: string;
};

export const APPROACH: readonly ApproachPhase[] = [
  {
    phase: "I",
    name: "Understand",
    body:
      "Discovery with operators. We embed with the units that will use the system, not the procurement officers who approve it.",
  },
  {
    phase: "II",
    name: "Co-Build",
    body:
      "Indigenous secure development. Tight feedback loops, classified-aware artifacts, no offshore handoffs.",
  },
  {
    phase: "III",
    name: "Deploy",
    body:
      "Hardened roll-out into on-prem and air-gapped environments. Training, runbooks, and joint go-live.",
  },
  {
    phase: "IV",
    name: "Sustain",
    body:
      "Long-horizon support. In-place upgrades, threat-model evolution, and uninterrupted operations.",
  },
] as const;
