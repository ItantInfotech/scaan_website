/*
 * Product data — the six platforms that form the operational spine (SPEC.md §5.4).
 * Product names are flagged for client confirmation (SPEC.md §16.4).
 */
export type Product = {
  code: `SCN-0${1 | 2 | 3 | 4 | 5 | 6}`;
  category: string;
  name: string;
  subtitle?: string;
  description: string;
  href: string;
};

export const PRODUCTS: readonly Product[] = [
  {
    code: "SCN-01",
    category: "Command · Geospatial",
    name: "OneCommand",
    subtitle: "MapPlan",
    description:
      "Geospatial command and planning surface for joint operations — from mission rehearsal to live coordination.",
    href: "/products/onecommand",
  },
  {
    code: "SCN-02",
    category: "Sovereign AI",
    name: "INDEA",
    description:
      "Indigenous AI platform for on-prem inference, retrieval, and mission-tuned reasoning across classified data.",
    href: "/products/indea",
  },
  {
    code: "SCN-03",
    category: "Training Lifecycle",
    name: "ATMA",
    description:
      "End-to-end training lifecycle management — curricula, assessments, readiness, and skills analytics.",
    href: "/products/atma",
  },
  {
    code: "SCN-04",
    category: "Administration",
    name: "HEART",
    description:
      "Enterprise administration and operations spine for personnel, units, and HQ workflows.",
    href: "/products/heart",
  },
  {
    code: "SCN-05",
    category: "Unit Operations",
    name: "UNITI",
    description:
      "Unit operations, communications, and day-to-day coordination across distributed formations.",
    href: "/products/uniti",
  },
  {
    code: "SCN-06",
    category: "Memorial · Heritage",
    name: "MEMORIAL",
    description:
      "Museum and memorial management — collections, exhibits, visitor experience, and heritage stewardship.",
    href: "/products/memorial",
  },
] as const;
