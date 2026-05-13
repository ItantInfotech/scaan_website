import type { ReactNode } from "react";

/*
 * MEMORIAL (SCN-06) page content — museum and memorial management.
 * Illustrative pending client confirmation (SPEC.md §11.4).
 *
 * MEMORIAL has a distinctly different audience from the other five
 * platforms — regimental museums, war memorials, and service archives —
 * but shares Scaan's sovereignty and long-horizon stewardship principles.
 */
const Em = ({ children }: { children: ReactNode }) => (
  <em className="italic font-normal text-navy">{children}</em>
);

export const HERO = {
  tagline: (
    <>
      Heritage stewardship for{" "}
      <Em>the regiment&apos;s memory.</Em>
    </>
  ),
  description:
    "MEMORIAL is the indigenous management platform for regimental museums, war memorials, and military heritage institutions. Collections, exhibits, visitor experience, and conservation — engineered to preserve service for the generations who follow.",
};

export const AT_A_GLANCE: readonly { label: string; value: string }[] = [
  { label: "Deployment", value: "On-Prem · Customer-Controlled" },
  { label: "Coverage", value: "Collections · Exhibits · Visitors" },
  { label: "Operators", value: "Curators · Conservators · Staff" },
  { label: "Posture", value: "Long-Horizon Stewardship" },
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
    label: "Collections Management",
    headline: (
      <>
        Catalogue artefacts, archives, and oral histories —{" "}
        <Em>to the standards that outlast institutions.</Em>
      </>
    ),
    body: (
      <>
        <p>
          Standards-aligned cataloguing for artefacts, photographs, archives,
          and oral histories. Accession records, provenance, and conservation
          state stay attached to every item across its institutional life.
        </p>
        <p>
          Built around CIDOC CRM and SPECTRUM-aligned conventions so records
          remain useful as collections move between institutions or change
          hands across generations.
        </p>
      </>
    ),
    bullets: [
      "Accession, provenance, and condition records on every item",
      "Standards-aligned cataloguing (CIDOC CRM, SPECTRUM)",
      "Photographs, archives, and oral histories as first-class records",
      "Cross-institution exchange formats",
    ],
  },
  {
    number: "02",
    label: "Exhibits & Visitor Experience",
    headline: (
      <>
        Exhibits, tours, and accessibility —{" "}
        <Em>for the audiences who come to remember.</Em>
      </>
    ),
    body: (
      <>
        <p>
          Curate physical and digital exhibits with bilingual presentation
          (Hindi and English) and regional language extensibility. Tour
          management, visitor analytics, and accessibility features for
          diverse audiences.
        </p>
        <p>
          The visitor experience is engineered with the gravitas these
          institutions carry — not the gloss of a commercial gallery.
        </p>
      </>
    ),
    bullets: [
      "Physical and digital exhibit curation",
      "Hindi + English with regional language extensibility",
      "Tour scheduling and visitor analytics",
      "Accessibility features for diverse audiences",
    ],
  },
  {
    number: "03",
    label: "Conservation & Audit",
    headline: (
      <>
        Every condition assessment, every loan —{" "}
        <Em>auditable across decades.</Em>
      </>
    ),
    body: (
      <>
        <p>
          Conservation logs, condition assessments, environmental monitoring,
          and loan records all linked to the artefact record. Auditors and
          successor conservators see the full history.
        </p>
        <p>
          Long-horizon stewardship means records that outlast staff turnover,
          institutional reorganisation, and software generations.
        </p>
      </>
    ),
    bullets: [
      "Condition assessments and conservation interventions",
      "Environmental monitoring tied to artefact records",
      "Loan, exhibition, and movement history",
      "Audit-complete history across decades",
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
    headline: <>Customer infrastructure. <Em>No cloud dependency.</Em></>,
    body: "Deploys on institution-controlled hardware. Heritage records belong to the institution; we don't host them elsewhere.",
  },
  {
    label: "Standards-Aligned",
    headline: <>CIDOC CRM and <Em>SPECTRUM-compatible.</Em></>,
    body: "Records are interoperable with international museum standards, so collections remain portable across institutions and generations of software.",
  },
  {
    label: "Bilingual",
    headline: <>Hindi and English, <Em>extensible to regional languages.</Em></>,
    body: "Cataloguing and visitor-facing presentation in Hindi and English from the outset. Regional language packs supported for state and unit-level institutions.",
  },
  {
    label: "Long-Horizon",
    headline: <>Engineered for <Em>decades-long institutional lifespans.</Em></>,
    body: "These institutions outlast most software companies. MEMORIAL is built for that reality — open data formats, documented schemas, no vendor lock-in.",
  },
];

export type UseCase = {
  formation: string;
  title: string;
  body: string;
};

export const USE_CASES: readonly UseCase[] = [
  {
    formation: "Regimental Museum",
    title: "Collections cataloguing with a curated visitor experience.",
    body: "Authoritative records of regimental artefacts, archives, and oral histories — paired with exhibit curation and bilingual visitor experience for the families and veterans who visit.",
  },
  {
    formation: "War Memorial",
    title: "Visitor experience tied to remembrance and education.",
    body: "Tour management, multilingual presentation, and accessibility for diverse visitor audiences. Records of fallen personnel maintained with the dignity the institution requires.",
  },
  {
    formation: "Service Archives",
    title: "Oral history and document conservation at scale.",
    body: "Veterans' oral histories, service documents, and photographic archives catalogued to international standards. Conservation state tracked across decades.",
  },
];

export const PAGE_CTA = {
  number: "05",
  label: "Engagement",
  headline: (
    <>
      Engagements begin with{" "}
      <Em>a single collection or memorial.</Em>
    </>
  ),
  body: "We typically begin with one institution — a regimental museum, a single memorial, or an archive — and grow from there. Briefings cover the platform, the data model, and the long-horizon stewardship commitments.",
};
