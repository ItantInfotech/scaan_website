import type { ReactNode } from "react";

/*
 * Content for /contact. Email addresses follow scaan.tech convention but the
 * exact recipient routing must be confirmed with client (SPEC.md §16.5).
 */
const Em = ({ children }: { children: ReactNode }) => (
  <em className="italic font-normal text-navy">{children}</em>
);

export const CONTACT_HERO = {
  number: "00",
  label: "Contact",
  headline: (
    <>
      Schedule a briefing.{" "}
      <Em>Sales gated, never spam.</Em>
    </>
  ),
  lede: "Briefings are conducted on your premises or ours. Tell us what you need and which service or unit you represent — we'll route you to the right desk within two business days.",
};

export const WHAT_TO_EXPECT: readonly string[] = [
  "30 to 60 minutes with engineering and operations leads",
  "Technical Q&A under NDA where relevant",
  "Deployment options for on-prem and air-gapped environments",
  "Roadmap and roll-out planning",
];

export type Desk = { label: string; value: string; note?: string };

export const DESKS: readonly Desk[] = [
  {
    label: "Sales",
    value: "sales@scaan.tech",
    note: "Demos, evaluations, procurement",
  },
  {
    label: "Partnerships",
    value: "partners@scaan.tech",
    note: "Integrations, joint deployments",
  },
  {
    label: "Careers",
    value: "careers@scaan.tech",
    note: "Engineering, operations, veterans",
  },
  {
    label: "Media",
    value: "media@scaan.tech",
    note: "Press, briefings, interviews",
  },
];

export type Office = { label: string; address: readonly string[]; tag: string };

export const OFFICES: readonly Office[] = [
  {
    label: "Mumbai HQ",
    address: ["[Street address]", "Mumbai · Maharashtra · India"],
    tag: "Head office · Sales · Operations",
  },
  {
    label: "Pune",
    address: ["[Street address]", "Pune · Maharashtra · India"],
    tag: "Engineering · R&D",
  },
];
