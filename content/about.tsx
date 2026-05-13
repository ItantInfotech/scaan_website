import type { ReactNode } from "react";

/*
 * Content for /about. Founder names, bios, service histories, and milestone
 * narrative are all placeholders pending client confirmation (SPEC.md §11.3).
 * Replace verbatim once the client sends the real profiles.
 */
const Em = ({ children }: { children: ReactNode }) => (
  <em className="italic font-normal text-navy">{children}</em>
);

export const ABOUT_HERO = {
  number: "00",
  label: "About",
  headline: (
    <>
      An indigenous defence-tech company.{" "}
      <Em>Operators and engineers, in one room.</Em>
    </>
  ),
  lede: "Scaan Technologies builds software for the people who will run it under pressure. We were founded on a simple premise: the Indian Defence Forces and the Government of India deserve sovereign, mission-grade systems engineered for the conditions they actually operate in — not products localised after the fact.",
};

export type Founder = {
  name: string;
  role: string;
  service: string;
  bio: string;
  initials: string;
};

export const FOUNDERS: readonly Founder[] = [
  {
    name: "[Founder One]",
    role: "Co-founder · CEO",
    service: "Indian Army · 22 yrs",
    initials: "VS",
    bio: "Former Army officer with operational experience across J&K and the North-East. Led training and operations cells at HQ before founding Scaan to bring indigenous software into the operational fold.",
  },
  {
    name: "[Founder Two]",
    role: "Co-founder · CTO",
    service: "Engineering · 18 yrs",
    initials: "PN",
    bio: "Built secure platforms across geospatial and AI domains. Has shipped systems into air-gapped environments and runs Scaan's engineering and product organisation.",
  },
  {
    name: "[Founder Three]",
    role: "Co-founder · Defence Relations",
    service: "Procurement · 18 yrs",
    initials: "AM",
    bio: "Former defence procurement officer and industry liaison. Built relationships across the three services and the Ministry of Defence; runs Scaan's engagement with operational customers.",
  },
];

export const VISION = {
  number: "02",
  label: "Vision",
  headline: (
    <>
      Sovereignty isn&apos;t a feature.{" "}
      <Em>It&apos;s the whole product.</Em>
    </>
  ),
  body: [
    "For decades, Indian defence and government buyers have had two choices: foreign-built platforms with sovereignty trade-offs baked in, or local integrations that wrap a foreign core. Neither is acceptable for the operational decade ahead.",
    "Scaan exists to close that gap. Every line of code, every model weight, every deployment artifact is engineered in India and stays in the hands of our customers. We don't sell sovereignty as a feature — we build it into the product's structure.",
  ],
};

export type Value = {
  number: "01" | "02" | "03" | "04";
  label: string;
  headline: ReactNode;
  body: string;
};

export const VALUES: readonly Value[] = [
  {
    number: "01",
    label: "Veterans First",
    headline: (
      <>
        Domain expertise from the <Em>people who lived the mission</Em>,
        not the people who wrote about it.
      </>
    ),
    body: "Our product, engineering, and customer-facing teams include serving and retired military leaders. Every system is reviewed against operational reality before it ships.",
  },
  {
    number: "02",
    label: "Indigenous by Default",
    headline: (
      <>
        Engineered in India for{" "}
        <Em>Indian operational reality</Em> — not localised after
        the fact.
      </>
    ),
    body: "Source code, infrastructure, model weights, and operational control remain with our customers. No foreign dependencies in the critical path.",
  },
  {
    number: "03",
    label: "Code That Ships",
    headline: (
      <>
        We deliver <Em>working systems</Em>, not whitepapers and
        roadmaps.
      </>
    ),
    body: "Engineering velocity is a defence capability. We measure ourselves by what runs in production, not what fills a slide deck.",
  },
  {
    number: "04",
    label: "Long-Horizon Stewardship",
    headline: (
      <>
        Decade-long deployments. <Em>No abandonware.</Em>
      </>
    ),
    body: "Defence software outlives most companies. We engineer our products — and our company — for the lifespan of the systems we deploy.",
  },
];
