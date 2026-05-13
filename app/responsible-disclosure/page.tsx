import type { Metadata } from "next";

import ProsePage from "@/components/ProsePage";
import {
  INTRO,
  LAST_UPDATED,
  SECTIONS,
} from "@/content/legal/responsible-disclosure";

export const metadata: Metadata = {
  title: "Responsible Disclosure — Scaan Technologies",
  description:
    "How to report security vulnerabilities in scaan.tech and Scaan corporate infrastructure.",
};

export default function ResponsibleDisclosurePage() {
  return (
    <ProsePage
      metaNumber="00"
      metaLabel="Security · Disclosure"
      title="Responsible Disclosure."
      lastUpdated={LAST_UPDATED}
      intro={INTRO}
      sections={SECTIONS}
    />
  );
}
