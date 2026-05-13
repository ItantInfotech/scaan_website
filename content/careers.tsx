import type { ReactNode } from "react";

/*
 * /careers content (Task 3.8, SPEC.md §6 + §16.6).
 * Static recruitment surface for v1 — no ATS integration. Roles listed at
 * the level of "we hire across these areas" rather than specific JDs.
 */
const Em = ({ children }: { children: ReactNode }) => (
  <em className="italic font-normal text-navy">{children}</em>
);

export const HERO = {
  number: "00",
  label: "Careers",
  headline: (
    <>
      Build software <Em>that matters.</Em>
    </>
  ),
  lede: "Scaan is a small, deliberate team building indigenous defence platforms for the Indian Defence Forces and the Government of India. We hire engineers, operators, and the people who connect them.",
};

export type Pillar = {
  number: "01" | "02" | "03" | "04";
  label: string;
  headline: ReactNode;
  body: string;
};

export const WHY_WORK_HERE: readonly Pillar[] = [
  {
    number: "01",
    label: "Mission Impact",
    headline: (
      <>
        Your code runs <Em>where it matters.</Em>
      </>
    ),
    body: "Scaan platforms ship into operational environments — not into a sandbox. The work has consequences, and that's the point.",
  },
  {
    number: "02",
    label: "Veterans Alongside Engineers",
    headline: (
      <>
        Domain expertise <Em>in the room.</Em>
      </>
    ),
    body: "Veterans of the three services work alongside engineers on every product. The feedback loop between operational reality and code is short.",
  },
  {
    number: "03",
    label: "Long Horizon",
    headline: (
      <>
        Decade-long deployments, <Em>no abandonware.</Em>
      </>
    ),
    body: "We engineer for software lifespans measured in decades. Career growth here means real ownership of long-horizon systems — not feature-shop turnover.",
  },
  {
    number: "04",
    label: "Mumbai · Pune",
    headline: (
      <>
        Indian-located, <Em>defence-tech.</Em>
      </>
    ),
    body: "Offices in Mumbai (HQ) and Pune (engineering / R&D). Remote-friendly within India where the role allows, but the work happens close to the customers.",
  },
];

export type Role = {
  area: string;
  description: string;
  postings: string;
};

export const ROLE_AREAS: readonly Role[] = [
  {
    area: "Engineering — Geospatial / C2",
    description:
      "Multi-domain planning, terrain analysis, fused operational pictures. Closest to OneCommand.",
    postings: "Senior · Staff",
  },
  {
    area: "Engineering — AI / ML",
    description:
      "Sovereign foundation models, on-prem inference, retrieval, fine-tuning. Closest to INDEA.",
    postings: "Senior · Staff · Research",
  },
  {
    area: "Engineering — Cybersecurity",
    description:
      "Threat modelling, hardened SDLC, supply chain, secure deployment for classified environments.",
    postings: "Senior · Staff",
  },
  {
    area: "Engineering — Mobile / Offline-First",
    description:
      "Field-hardened mobile experiences across UNITI, ATMA, OneCommand. Offline-first, deterministic sync.",
    postings: "Senior · Mid",
  },
  {
    area: "Product · Defence Domain",
    description:
      "Defence-domain product managers translating operational needs into platform direction. Veterans encouraged.",
    postings: "Senior · Lead",
  },
  {
    area: "Customer Engagement",
    description:
      "On-site customer engagement during pilots, deployments, and long-horizon support. Strong defence-domain background required.",
    postings: "Senior",
  },
];

export const VETERANS_PATHWAY = {
  number: "03",
  label: "Veterans Pathway",
  headline: (
    <>
      A deliberate route for{" "}
      <Em>service leavers and reservists.</Em>
    </>
  ),
  body: "Scaan was founded on the premise that domain expertise should be in the room. We actively hire serving-leavers and reservists into product, customer engagement, and engineering — with structured onboarding for those transitioning from service into software.",
  bullets: [
    "Structured transition programme for engineers coming from service",
    "In-house mentorship from veterans already on the team",
    "Roles across product, customer engagement, and operational engineering",
    "Clearance pathways for engineers working on classified deployments",
  ],
};

export const PAGE_CTA = {
  number: "04",
  label: "Apply",
  headline: (
    <>
      No portal, no recruiters —{" "}
      <Em>write to us directly.</Em>
    </>
  ),
  body: "Send a CV and a short note on what you'd want to build to careers@scaan.tech. If we don't have an open role that fits, we'll say so — but we read every application.",
};
