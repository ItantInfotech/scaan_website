import type { ReactNode } from "react";

/*
 * INDEA (SCN-02) page content. Capability narratives, deployment facts, and
 * use cases are illustrative pending client confirmation (SPEC.md §11.4).
 */
const Em = ({ children }: { children: ReactNode }) => (
  <em className="italic font-normal text-navy">{children}</em>
);

export const HERO = {
  tagline: (
    <>
      Sovereign AI — <Em>engineered to stay on your terms.</Em>
    </>
  ),
  description:
    "INDEA is the indigenous AI platform for on-prem inference, retrieval-augmented reasoning, and mission-tuned fine-tuning over classified data. Model weights, training data, and operational telemetry never leave customer infrastructure.",
};

export const AT_A_GLANCE: readonly { label: string; value: string }[] = [
  { label: "Inference", value: "On-Prem · Air-Gapped" },
  { label: "Models", value: "Customer-Owned" },
  { label: "Data", value: "Never Leaves Site" },
  { label: "Stack", value: "GPU · CPU · Edge" },
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
    label: "Sovereign Inference",
    headline: (
      <>
        Open-weight foundation models or your own fine-tunes —{" "}
        <Em>running on your hardware.</Em>
      </>
    ),
    body: (
      <>
        <p>
          Run open-weight foundation models or customer-tuned variants entirely
          on-prem. No call-home, no remote telemetry, no hosted dependencies.
          Inference happens on hardware you control, under audit you own.
        </p>
        <p>
          Throughput, latency, and quantisation profiles are tuned per
          deployment — we don&apos;t ship a one-size-fits-all binary.
        </p>
      </>
    ),
    bullets: [
      "GPU, CPU, and edge inference targets",
      "Quantisation, batching, and KV-cache tuning per deployment",
      "Deterministic outputs for reproducible evaluations",
      "Tamper-evident inference logs",
    ],
  },
  {
    number: "02",
    label: "Mission-Tuned Reasoning",
    headline: (
      <>
        Fine-tune on your own data —{" "}
        <Em>without sending a byte to anyone else.</Em>
      </>
    ),
    body: (
      <>
        <p>
          Fine-tune foundation models on classified data without third-party
          access. Training, evaluation, and weight management stay on customer
          infrastructure. Resulting weights are bonded to your hardware.
        </p>
        <p>
          Evaluation harnesses run on your own benchmark sets, so model quality
          is measured against your operational tasks — not someone else&apos;s.
        </p>
      </>
    ),
    bullets: [
      "On-prem fine-tuning and LoRA workflows",
      "Customer-owned evaluation harness",
      "Weight provenance and lineage tracking",
      "Reversible roll-back across model versions",
    ],
  },
  {
    number: "03",
    label: "Retrieval Over Classified Corpora",
    headline: (
      <>
        Retrieval that <Em>respects your classification handling.</Em>
      </>
    ),
    body: (
      <>
        <p>
          Build retrieval indexes over classified documents and operational
          corpora. Per-document and per-section classification flows through
          retrieval, into prompts, and into the final response.
        </p>
        <p>
          Need-to-know enforcement is applied at retrieval time, not as a
          post-hoc filter. The model never sees content the user isn&apos;t
          authorised to see.
        </p>
      </>
    ),
    bullets: [
      "Per-document and per-section classification labels",
      "Need-to-know enforcement at retrieval time",
      "Citation-grounded responses with source linkage",
      "Hybrid dense + sparse retrieval over operational data",
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
    label: "Air-Gapped",
    headline: <>Runs <Em>without internet.</Em></>,
    body: "Models, embeddings, tooling, and updates are delivered offline via signed bundles. INDEA never assumes a network it doesn't own.",
  },
  {
    label: "Customer-Owned Weights",
    headline: <>Fine-tuned weights stay <Em>in your hardware.</Em></>,
    body: "Trained models are bonded to customer hardware and key material. No third-party model registry, no shared hosting tier.",
  },
  {
    label: "Classified-Aware",
    headline: <>Classification flows <Em>end-to-end.</Em></>,
    body: "Per-document and per-section classification labels travel through retrieval into prompts and final responses. The model never sees what the user can't.",
  },
  {
    label: "Hardware-Agnostic",
    headline: <>NVIDIA, AMD, CPU — <Em>whatever fits the mission.</Em></>,
    body: "Inference and fine-tuning across NVIDIA, AMD, and CPU-only targets. Edge profiles for forward-deployed nodes with limited compute.",
  },
];

export type UseCase = {
  formation: string;
  title: string;
  body: string;
};

export const USE_CASES: readonly UseCase[] = [
  {
    formation: "Intelligence Cell",
    title: "Retrieval-augmented reasoning over classified intel corpora.",
    body: "Analysts query operational intel with citation-grounded responses and per-document classification handling on every result.",
  },
  {
    formation: "Operations HQ",
    title: "Mission-tuned summarisation of multi-source reports.",
    body: "Fine-tuned models summarise multi-source operational reports against the unit's own reporting conventions, not a generic style.",
  },
  {
    formation: "Technical R&D",
    title: "Internal knowledge retrieval over decades of design docs.",
    body: "Engineering teams query historical design documents, decisions, and trial data — without exposing intellectual property to a third party.",
  },
];

export const PAGE_CTA = {
  number: "05",
  label: "Engagement",
  headline: (
    <>
      Sovereign AI evaluated{" "}
      <Em>on your data, on your hardware.</Em>
    </>
  ),
  body: "We run proof-of-value evaluations on customer premises against customer benchmarks. No exfiltration, no shared corpora, no telemetry — only the model and your data, in one place.",
};
