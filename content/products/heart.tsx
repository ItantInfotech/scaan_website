import type { ReactNode } from "react";

/*
 * HEART (SCN-04) page content — enterprise administration.
 * Illustrative pending client confirmation (SPEC.md §11.4).
 */
const Em = ({ children }: { children: ReactNode }) => (
  <em className="italic font-normal text-navy">{children}</em>
);

export const HERO = {
  tagline: (
    <>
      Administration that <Em>runs at the speed of operations.</Em>
    </>
  ),
  description:
    "HEART is the indigenous enterprise administration platform for Service HQs and the Ministry of Defence. Personnel, unit, and HQ workflows — engineered to remove friction from the operational tempo, not add to it.",
};

export const AT_A_GLANCE: readonly { label: string; value: string }[] = [
  { label: "Deployment", value: "On-Prem · Customer-Controlled" },
  { label: "Coverage", value: "Personnel · Units · HQ" },
  { label: "Operators", value: "All Ranks · All Branches" },
  { label: "Posture", value: "Workflow + Audit" },
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
    label: "Personnel & Service Records",
    headline: (
      <>
        Service records as a{" "}
        <Em>single source of truth.</Em>
      </>
    ),
    body: (
      <>
        <p>
          Service records, postings, qualifications, awards, dependants, and
          related documentation in one authoritative store. Role-aware access
          means each rank and branch sees what they should — and no more.
        </p>
        <p>
          History is tamper-evident. Past states of a record can be retrieved
          for audit without compromising the current state.
        </p>
      </>
    ),
    bullets: [
      "Personnel master record with role-aware visibility",
      "Postings, qualifications, awards, and dependants",
      "Tamper-evident change history",
      "Branch-specific record conventions respected",
    ],
  },
  {
    number: "02",
    label: "Forms & Approvals",
    headline: (
      <>
        Digital forms with{" "}
        <Em>approval chains the chain of command recognises.</Em>
      </>
    ),
    body: (
      <>
        <p>
          Multi-step workflows that respect the chain of command, with full
          audit and configurable escalation. Forms are authored once and
          versioned; submissions inherit the form&apos;s revision so historical
          audits are reproducible.
        </p>
        <p>
          Approvals carry digital signatures bonded to the approving
          officer&apos;s credentials — not generic user accounts.
        </p>
      </>
    ),
    bullets: [
      "Multi-step approval chains aligned to chain of command",
      "Versioned forms with reproducible historical audits",
      "Credential-bonded digital signatures on approvals",
      "Configurable escalation and deadlines",
    ],
  },
  {
    number: "03",
    label: "Audit & Compliance",
    headline: (
      <>
        Every record change, every approval —{" "}
        <Em>traceable.</Em>
      </>
    ),
    body: (
      <>
        <p>
          Built for the audit conventions Indian Defence administrative bodies
          actually use. Every workflow, every approval, and every record
          change is auditable with full provenance.
        </p>
        <p>
          Append-only storage means historical state is preserved. Audits can
          reconstruct the exact state of a record at any past point in time.
        </p>
      </>
    ),
    bullets: [
      "Append-only audit log of all administrative actions",
      "Point-in-time reconstruction of any past record state",
      "Aligned with Indian Defence audit conventions",
      "Exportable audit artifacts for inspection bodies",
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
    body: "Deploys on Service HQ or MoD-controlled infrastructure. Personnel data never leaves customer hardware.",
  },
  {
    label: "Role-Aware",
    headline: <>Access follows <Em>the chain of command.</Em></>,
    body: "Visibility, edit rights, and approval authority are bound to rank, branch, and posting. The model matches how administrative authority actually flows.",
  },
  {
    label: "Branch-Aware",
    headline: <>Service-branch conventions <Em>respected at every step.</Em></>,
    body: "Form formats, rank structures, and approval conventions differ across services and branches. HEART respects those differences instead of forcing a generic mould.",
  },
  {
    label: "Append-Only",
    headline: <>History is <Em>tamper-evident.</Em></>,
    body: "Records cannot be silently rewritten. Every change is captured with provenance; auditors reconstruct past state from the log, not a snapshot.",
  },
];

export type UseCase = {
  formation: string;
  title: string;
  body: string;
};

export const USE_CASES: readonly UseCase[] = [
  {
    formation: "Service HQ",
    title: "Personnel administration at scale.",
    body: "Master personnel records, posting workflows, and credential-bonded approvals for an entire service, with consistent audit and reduced manual reconciliation.",
  },
  {
    formation: "Ministry of Defence",
    title: "Cross-service forms and approvals.",
    body: "Forms and approval chains that span multiple services, with the right handling at every level and a single authoritative audit log.",
  },
  {
    formation: "Unit Adjutant",
    title: "Day-to-day personnel and unit administration.",
    body: "The administrative surface at the unit level — leave, postings, awards, and approvals — handled with the same authoritative records HQ uses.",
  },
];

export const PAGE_CTA = {
  number: "05",
  label: "Engagement",
  headline: (
    <>
      Engagements typically begin with{" "}
      <Em>one workflow, one branch.</Em>
    </>
  ),
  body: "We scope HEART pilots around a single high-value workflow — postings, awards, dependants — within a single branch. Operational confidence first, then breadth.",
};
