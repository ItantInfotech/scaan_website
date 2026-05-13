import type { ReactNode } from "react";

/*
 * UNITI (SCN-05) page content — unit operations.
 * Illustrative pending client confirmation (SPEC.md §11.4).
 */
const Em = ({ children }: { children: ReactNode }) => (
  <em className="italic font-normal text-navy">{children}</em>
);

export const HERO = {
  tagline: (
    <>
      Coordination that <Em>moves with the unit.</Em>
    </>
  ),
  description:
    "UNITI is the indigenous unit-operations platform for distributed Indian Defence formations. Unit comms, day-to-day coordination, and shared operational awareness — engineered to keep working when the network doesn't.",
};

export const AT_A_GLANCE: readonly { label: string; value: string }[] = [
  { label: "Deployment", value: "On-Prem · Edge · Offline-First" },
  { label: "Operators", value: "COs · NCOs · Personnel" },
  { label: "Coverage", value: "Comms · Coordination · Picture" },
  { label: "Posture", value: "Field-Hardened" },
];

export type Capability = {
  number: "01" | "02" | "03";
  label: string;
  headline: ReactNode;
  body: ReactNode;
  bullets: readonly string[];
};

export const CAPABILITIES: readonly Capability[] = [
  {
    number: "01",
    label: "Unit Communications",
    headline: (
      <>
        Secure messaging and structured comms —{" "}
        <Em>built for degraded networks.</Em>
      </>
    ),
    body: (
      <>
        <p>
          Secure messaging, broadcasts, and structured comms across the unit
          and to higher formations. Designed for the network conditions units
          actually have — not the conditions vendor demos run on.
        </p>
        <p>
          Messages queue locally, prioritise on the wire, and reconcile
          deterministically across detachments.
        </p>
      </>
    ),
    bullets: [
      "End-to-end secure messaging across detachments",
      "Priority queuing and bandwidth-aware delivery",
      "Structured comms for taskings, sitreps, and orders",
      "Operates on intermittent and degraded networks",
    ],
  },
  {
    number: "02",
    label: "Day-to-Day Coordination",
    headline: (
      <>
        The operational tempo of a unit,{" "}
        <Em>on one surface.</Em>
      </>
    ),
    body: (
      <>
        <p>
          Duty rosters, taskings, leave, postings, and daily routine — the
          administrative tempo of a unit captured on one operational surface,
          owned by the unit, not bolted on from HQ.
        </p>
        <p>
          NCOs and adjutants run their day from the same picture the CO sees,
          without secondary spreadsheets.
        </p>
      </>
    ),
    bullets: [
      "Duty rosters, taskings, and daily routine",
      "Leave, postings, and personnel state at the unit level",
      "Commander, NCO, and personnel views from one source",
      "Hand-off to HEART for HQ-level workflows",
    ],
  },
  {
    number: "03",
    label: "Distributed Operational Picture",
    headline: (
      <>
        Shared awareness across detachments —{" "}
        <Em>degrades gracefully.</Em>
      </>
    ),
    body: (
      <>
        <p>
          Detachments and forward-deployed elements share an operational
          picture that replicates when reachable and degrades gracefully when
          not. No silent divergence, no waiting for a sync window.
        </p>
        <p>
          When connectivity returns, conflicts resolve deterministically and
          the picture re-converges.
        </p>
      </>
    ),
    bullets: [
      "Shared operational picture across detachments",
      "Deterministic replication and conflict resolution",
      "Graceful degradation under network loss",
      "Hand-off to OneCommand for higher-formation planning",
    ],
  },
];

export type DeploymentFact = {
  label: string;
  headline: ReactNode;
  body: string;
};

export const DEPLOYMENT: readonly DeploymentFact[] = [
  {
    label: "Offline-First",
    headline: <>Connectivity is <Em>optional.</Em></>,
    body: "UNITI operates without network. Comms, coordination, and operational picture all function locally and sync when reachable.",
  },
  {
    label: "Edge-Capable",
    headline: <>Runs on <Em>commodity hardware.</Em></>,
    body: "Designed to run on the hardware a unit actually has — not a dedicated server cluster. Edge profiles for forward elements with limited compute.",
  },
  {
    label: "Detachment-Sync",
    headline: <>Replication with <Em>deterministic conflict resolution.</Em></>,
    body: "Detachments converge on the same picture after rejoin. Resolution is deterministic and auditable, not based on whoever happens to sync last.",
  },
  {
    label: "Field-Hardened",
    headline: <>Engineered for <Em>the network you have.</Em></>,
    body: "Bandwidth-aware delivery, priority queuing, and graceful degradation. Built for intermittent and lossy links, not idealised vendor benchmarks.",
  },
];

export type UseCase = {
  formation: string;
  title: string;
  body: string;
};

export const USE_CASES: readonly UseCase[] = [
  {
    formation: "Infantry Battalion",
    title: "Day-to-day coordination with a commander's picture.",
    body: "Duty rosters, taskings, and a unit operational picture across the battalion. The CO sees what NCOs and adjutants are running on.",
  },
  {
    formation: "Forward-Deployed Detachment",
    title: "Comms and tasking under intermittent connectivity.",
    body: "Detachments operate without dependable network. Comms queue, taskings execute, and the picture syncs when reachable — without losing operational continuity.",
  },
  {
    formation: "Higher Formation HQ",
    title: "Visibility across constituent units.",
    body: "Roll-up across constituent units feeds the higher formation's picture without forcing units onto an unfamiliar surface.",
  },
];

export const PAGE_CTA = {
  number: "05",
  label: "Engagement",
  headline: (
    <>
      Pilots scope to a single unit —{" "}
      <Em>then extend along the formation.</Em>
    </>
  ),
  body: "We typically begin with a single battalion or equivalent, validate the field profile in actual operational conditions, then extend across the formation.",
};
