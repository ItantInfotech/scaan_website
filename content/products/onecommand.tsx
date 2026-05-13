import type { ReactNode } from "react";

/*
 * OneCommand (SCN-01) page content. Capability narratives, deployment facts,
 * and use cases are illustrative pending client confirmation. Verbatim copy
 * to be supplied per SPEC.md §11.4.
 */
const Em = ({ children }: { children: ReactNode }) => (
  <em className="italic font-normal text-navy">{children}</em>
);

export const HERO = {
  tagline: (
    <>
      Plan, rehearse, <Em>coordinate</Em> — on one geospatial surface.
    </>
  ),
  description:
    "OneCommand is the joint geospatial command and planning platform built for the operational reality of Indian Defence Forces. Mission rehearsal, common operational picture, and inter-service coordination — engineered for on-prem deployment in degraded and air-gapped environments.",
};

export const AT_A_GLANCE: readonly { label: string; value: string }[] = [
  { label: "Deployment", value: "On-Prem · Air-Gapped" },
  { label: "Operators", value: "Joint Services" },
  { label: "Data", value: "Customer-Controlled" },
  { label: "Posture", value: "Mission-Grade" },
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
    label: "Mission Planning",
    headline: (
      <>
        From <Em>rehearsal to execution</Em>, on the same map.
      </>
    ),
    body: (
      <>
        <p>
          Multi-domain route planning, force allocation, and terrain-aware
          analysis on a unified geospatial surface. Plans become live
          operations without re-keying coordinates or reconciling exports.
        </p>
        <p>
          Synthetic adversary models let operators rehearse against
          parameterised threats before deployment — without leaving the
          authoring environment.
        </p>
      </>
    ),
    bullets: [
      "Terrain, elevation, and bathymetry analysis",
      "Multi-domain force allocation and routing",
      "Synthetic adversary and red-team rehearsal",
      "Hand-off from plan to live mission with one click",
    ],
  },
  {
    number: "02",
    label: "Operational Truth",
    headline: (
      <>
        Live positions, sensor feeds, and intel layers —{" "}
        <Em>one common picture.</Em>
      </>
    ),
    body: (
      <>
        <p>
          Fuses unit positions, sensor feeds, and classified intel layers into
          a single common operational picture. Designed for low-bandwidth and
          intermittent links, with deterministic conflict resolution between
          replicas.
        </p>
        <p>
          Operators always see the operational truth — not a stale snapshot
          waiting for a sync window.
        </p>
      </>
    ),
    bullets: [
      "Fused tactical, sensor, and intel layers",
      "Degraded-comms and offline-first operation",
      "Deterministic site-to-site replication",
      "Per-layer classification and need-to-know",
    ],
  },
  {
    number: "03",
    label: "Joint Coordination",
    headline: (
      <>
        Inter-service coordination,{" "}
        <Em>without the export-import dance.</Em>
      </>
    ),
    body: (
      <>
        <p>
          Cross-service coordination for joint exercises and real-world
          operations. Permissions, classification handling, and audit trails
          are built in — not bolted on.
        </p>
        <p>
          Plans, overlays, and decisions move between services with the right
          handling for each leg of the path.
        </p>
      </>
    ),
    bullets: [
      "Service-aware permissions and audit",
      "Classification-aware data movement",
      "Joint exercise and live-op modes",
      "Tamper-evident operational record",
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
    label: "On-Prem",
    headline: <>Customer-owned hardware. <Em>No cloud dependency.</Em></>,
    body: "Deploys on customer infrastructure — bare-metal, virtualised, or in private clouds you control. No call-home, no external license check.",
  },
  {
    label: "Air-Gapped",
    headline: <>Operates <Em>without internet.</Em></>,
    body: "Tiles, models, signatures, and updates are delivered offline via signed bundles. The platform never assumes a network it doesn't own.",
  },
  {
    label: "Hardware-Bonded",
    headline: <>Software bonded to <Em>your hardware.</Em></>,
    body: "Theft of disks or images does not leak access. Activation is tied to hardware identity and customer-controlled key material.",
  },
  {
    label: "Multi-Site Sync",
    headline: <>Site-to-site replication, <Em>conflict-aware.</Em></>,
    body: "Replication between sites over classified links, with deterministic conflict resolution and full audit. Designed for the bandwidth profiles you actually have.",
  },
];

export type UseCase = {
  formation: string;
  title: string;
  body: string;
};

export const USE_CASES: readonly UseCase[] = [
  {
    formation: "Naval Command Centre",
    title: "Mission rehearsal for combined fleet exercises.",
    body: "Rehearse multi-domain operations across sea, air, and shore. Parameterised adversary models replace static walkthroughs.",
  },
  {
    formation: "Strategic Forces",
    title: "Long-range planning with terrain modelling.",
    body: "Route planning over deep terrain with elevation, line-of-sight, and movement-cost analysis. Built for time-on-target precision.",
  },
  {
    formation: "Joint Operations HQ",
    title: "Inter-service coordination during live exercises.",
    body: "A single common operational picture across services, with the right handling and audit on every layer.",
  },
];

export const PAGE_CTA = {
  number: "05",
  label: "Engagement",
  headline: (
    <>
      Briefings on-prem, on-site, or{" "}
      <Em>under classification</Em> as your operation requires.
    </>
  ),
  body: "We'll come to you. Briefings cover engineering depth, deployment options, and the operational trade-offs you actually care about.",
};
