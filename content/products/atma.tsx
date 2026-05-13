import type { ReactNode } from "react";

/*
 * ATMA (SCN-03) page content — training lifecycle management.
 * Illustrative pending client confirmation (SPEC.md §11.4).
 */
const Em = ({ children }: { children: ReactNode }) => (
  <em className="italic font-normal text-navy">{children}</em>
);

export const HERO = {
  tagline: (
    <>
      From curriculum to <Em>combat readiness.</Em>
    </>
  ),
  description:
    "ATMA is the indigenous training lifecycle platform for Indian Defence training establishments. Curricula, assessments, readiness, and skills analytics — engineered for service-wide adoption with customer-controlled data and offline-first field operation.",
};

export const AT_A_GLANCE: readonly { label: string; value: string }[] = [
  { label: "Deployment", value: "On-Prem · Air-Gapped" },
  { label: "Operators", value: "Instructors · Trainees · HQ" },
  { label: "Coverage", value: "Curriculum to Readiness" },
  { label: "Posture", value: "Service-Wide" },
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
    label: "Curriculum Management",
    headline: (
      <>
        Curricula, syllabus revisions, instructor assignments —{" "}
        <Em>across every establishment.</Em>
      </>
    ),
    body: (
      <>
        <p>
          Manage curricula and syllabus revisions across multiple training
          establishments with full version control and audit. Standardise
          where standardisation matters; allow per-establishment flexibility
          where local context matters.
        </p>
        <p>
          Instructor assignments, course schedules, and learning objectives
          flow through one authoritative source — not a scatter of
          spreadsheets.
        </p>
      </>
    ),
    bullets: [
      "Version-controlled curriculum and syllabus revisions",
      "Multi-establishment authoring with HQ-level standardisation",
      "Instructor assignment and schedule management",
      "Tamper-evident audit trail on every change",
    ],
  },
  {
    number: "02",
    label: "Assessment & Evaluation",
    headline: (
      <>
        Digital assessments with{" "}
        <Em>item security and tamper-evident grading.</Em>
      </>
    ),
    body: (
      <>
        <p>
          Conduct assessments digitally with offline-first sync, automated
          marking where appropriate, and human-in-the-loop review where it
          matters. Item banks and question security designed for the
          examination conventions Indian training establishments actually use.
        </p>
        <p>
          Answer storage is tamper-evident. Grade revisions carry full
          provenance.
        </p>
      </>
    ),
    bullets: [
      "Item-bank management with question security",
      "Offline-first assessment delivery",
      "Automated marking with human-in-the-loop review",
      "Tamper-evident answer and grade storage",
    ],
  },
  {
    number: "03",
    label: "Readiness & Skills Analytics",
    headline: (
      <>
        A continuous readiness picture —{" "}
        <Em>not an annual report.</Em>
      </>
    ),
    body: (
      <>
        <p>
          Skill gaps surface before they show up in deployment. Per-trainee,
          per-unit, and per-formation analytics flow up through
          classification-aware aggregation — no leakage of individual
          performance data outside the right chain.
        </p>
        <p>
          HQ sees the readiness picture they need to plan; trainees see the
          gaps they need to close.
        </p>
      </>
    ),
    bullets: [
      "Per-trainee, per-unit, and per-formation analytics",
      "Classification-aware aggregation up the chain",
      "Skills gap surfacing with remediation pathways",
      "Readiness rollup for HQ planning and force generation",
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
    body: "Deploys on training establishment hardware or HQ-controlled infrastructure. No external service dependencies for day-to-day operation.",
  },
  {
    label: "Offline-First",
    headline: <>Field units operate <Em>without connectivity.</Em></>,
    body: "Trainees and instructors in forward-deployed units use ATMA without network. Sync when reachable; never block on it.",
  },
  {
    label: "Establishment-Scoped",
    headline: <>Each establishment owns <Em>its own data.</Em></>,
    body: "Data sovereignty extends down to the training establishment. HQ aggregates with permission-respecting rollups; establishments own the source records.",
  },
  {
    label: "Audit-Complete",
    headline: <>Every change is <Em>auditable.</Em></>,
    body: "Curriculum revisions, assessment results, and grade changes carry full provenance and tamper-evident audit trails.",
  },
];

export type UseCase = {
  formation: string;
  title: string;
  body: string;
};

export const USE_CASES: readonly UseCase[] = [
  {
    formation: "Naval Training Establishment",
    title: "Curriculum management across multiple schools.",
    body: "A common authoring surface across schools, with local flexibility and HQ-level visibility on syllabus alignment.",
  },
  {
    formation: "Joint Training Command",
    title: "Inter-service readiness assessment.",
    body: "Skill standards aligned across services for joint operations. Readiness rolled up with the right handling at every level.",
  },
  {
    formation: "Operational Unit",
    title: "Continuous skills tracking for forward-deployed personnel.",
    body: "Trainees in the field record completed qualifications and assessments offline. Records sync back to the parent establishment automatically when connectivity is available.",
  },
];

export const PAGE_CTA = {
  number: "05",
  label: "Engagement",
  headline: (
    <>
      Pilots scope to one establishment —{" "}
      <Em>then scale across the Service.</Em>
    </>
  ),
  body: "We typically begin with a single training establishment, validate the operational model, then extend across the Service. Briefings cover both the platform and the change-management story.",
};
