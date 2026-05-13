import type { Metadata } from "next";

import ProsePage from "@/components/ProsePage";
import { INTRO, LAST_UPDATED, SECTIONS } from "@/content/legal/terms";

export const metadata: Metadata = {
  title: "Terms of Use — Scaan Technologies",
  description: "Terms of use for the scaan.tech marketing site.",
};

export default function TermsPage() {
  return (
    <ProsePage
      metaNumber="00"
      metaLabel="Legal · Terms"
      title="Terms of Use."
      lastUpdated={LAST_UPDATED}
      intro={INTRO}
      sections={SECTIONS}
    />
  );
}
