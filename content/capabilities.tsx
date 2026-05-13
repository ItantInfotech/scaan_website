import type { ReactNode } from "react";

/*
 * Capabilities / disciplines deep-dive content.
 * The eight disciplines below are the same set used in the homepage
 * capabilities marquee (SPEC.md §5.7). This page expands each into a
 * full description and maps disciplines to the products that embody them.
 */
const Em = ({ children }: { children: ReactNode }) => (
  <em className="italic font-normal text-navy">{children}</em>
);

export const HERO = {
  number: "00",
  label: "Capabilities",
  headline: (
    <>
      The disciplines behind <Em>everything we ship.</Em>
    </>
  ),
  lede: "Scaan is engineered across eight disciplines that show up in every platform we deliver. Each is held by a dedicated team and a dedicated technical lead — not subcontracted, not offshored.",
};

export type Discipline = {
  number: "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08";
  label: string;
  headline: ReactNode;
  body: string;
};

export const DISCIPLINES: readonly Discipline[] = [
  {
    number: "01",
    label: "AI & ML",
    headline: (
      <>
        Sovereign AI engineering, <Em>top to bottom.</Em>
      </>
    ),
    body: "Open-weight foundation models, customer fine-tuning, on-prem inference, and evaluation harnesses. We build the stack, not a wrapper around it.",
  },
  {
    number: "02",
    label: "Geospatial & C2",
    headline: (
      <>
        Operational geospatial, <Em>not just maps.</Em>
      </>
    ),
    body: "Multi-domain planning, terrain analysis, fused operational pictures, and joint coordination at the scale Indian Defence formations actually operate at.",
  },
  {
    number: "03",
    label: "Secure Cloud & On-Prem",
    headline: (
      <>
        Customer-controlled infrastructure, <Em>by default.</Em>
      </>
    ),
    body: "Deployment automation for on-prem, air-gapped, and customer-controlled cloud. No vendor lock-in to a hyperscaler region we don't control.",
  },
  {
    number: "04",
    label: "Mobile",
    headline: (
      <>
        Mobile that works <Em>where the network doesn't.</Em>
      </>
    ),
    body: "Offline-first mobile experiences for field operators, with deterministic sync, classification-aware data handling, and hardware-bonded credentials.",
  },
  {
    number: "05",
    label: "Offline-First",
    headline: (
      <>
        Architectures that <Em>assume the network will fail.</Em>
      </>
    ),
    body: "Distributed systems that operate without connectivity, replicate when reachable, and resolve conflicts deterministically. Engineered for the conditions, not the demo.",
  },
  {
    number: "06",
    label: "Cybersecurity",
    headline: (
      <>
        Security-by-architecture, <Em>not security-by-policy.</Em>
      </>
    ),
    body: "Threat modelling at design time, hardened SDLC, supply chain integrity, and credential-bonded operations. Defence-grade posture from first commit.",
  },
  {
    number: "07",
    label: "DevSecOps",
    headline: (
      <>
        Build pipelines that ship <Em>hardened artefacts.</Em>
      </>
    ),
    body: "Signed releases, build-time provenance, SBOMs, dependency scanning, and zero-trust deployment paths. The pipeline is part of the threat model.",
  },
  {
    number: "08",
    label: "Enterprise Engineering",
    headline: (
      <>
        Software engineered for <Em>decade-long deployments.</Em>
      </>
    ),
    body: "Long-horizon architecture, open data formats, documented schemas, and in-place upgrades. Built to outlast staff turnover and software generations.",
  },
];

export type DisciplineProductMap = {
  discipline: string;
  products: readonly string[];
};

export const DISCIPLINE_TO_PRODUCT: readonly DisciplineProductMap[] = [
  { discipline: "AI & ML", products: ["INDEA"] },
  { discipline: "Geospatial & C2", products: ["OneCommand"] },
  { discipline: "Secure Cloud & On-Prem", products: ["All platforms"] },
  { discipline: "Mobile", products: ["UNITI", "ATMA"] },
  { discipline: "Offline-First", products: ["UNITI", "ATMA", "OneCommand"] },
  { discipline: "Cybersecurity", products: ["All platforms"] },
  { discipline: "DevSecOps", products: ["All platforms"] },
  { discipline: "Enterprise Engineering", products: ["HEART", "MEMORIAL"] },
];
