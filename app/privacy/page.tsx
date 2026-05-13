import type { Metadata } from "next";

import ProsePage from "@/components/ProsePage";
import {
  INTRO,
  LAST_UPDATED,
  SECTIONS,
} from "@/content/legal/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy — Scaan Technologies",
  description:
    "How Scaan Technologies handles information collected through scaan.tech.",
};

export default function PrivacyPage() {
  return (
    <ProsePage
      metaNumber="00"
      metaLabel="Legal · Privacy"
      title="Privacy Policy."
      lastUpdated={LAST_UPDATED}
      intro={INTRO}
      sections={SECTIONS}
    />
  );
}
