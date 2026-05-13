import type { ReactNode } from "react";

/*
 * /security content — defence-buyer due diligence surface.
 * Compliance / certification claims are flagged where they need confirmation
 * from the Scaan security team (SPEC.md §11.9, §15).
 */
const Em = ({ children }: { children: ReactNode }) => (
  <em className="italic font-normal text-navy">{children}</em>
);

export const HERO = {
  number: "00",
  label: "Security",
  headline: (
    <>
      Security posture for{" "}
      <Em>defence-grade adoption.</Em>
    </>
  ),
  lede: "Scaan does not treat security as a configuration step at the end. Threat modelling, hardened SDLC, supply chain integrity, and customer-controlled deployment are part of how every platform is engineered from first commit.",
};

export type DeploymentFact = {
  label: string;
  headline: ReactNode;
  body: string;
};

export const DEPLOYMENT_MODELS: readonly DeploymentFact[] = [
  {
    label: "On-Prem",
    headline: <>Customer-owned hardware. <Em>No call-home.</Em></>,
    body: "Every Scaan platform deploys onto customer infrastructure. No telemetry leaves customer hardware. No external license check.",
  },
  {
    label: "Air-Gapped",
    headline: <>Operates <Em>without internet.</Em></>,
    body: "Models, tiles, updates, and tooling are delivered offline via signed bundles. Platforms never assume a network they don't control.",
  },
  {
    label: "Hardware-Bonded",
    headline: <>Theft of disks <Em>does not leak access.</Em></>,
    body: "Activation, key material, and operational state are bonded to customer hardware identity. Physical extraction of media is not sufficient to operate the system elsewhere.",
  },
  {
    label: "Network-Segmented",
    headline: <>Cooperates with <Em>classified network architectures.</Em></>,
    body: "Designed to live inside customer-segmented networks (multi-level secure, air-gap enclaves, cross-domain solutions) rather than fight them.",
  },
];

export type SectionBlock = {
  number: "02" | "03" | "04" | "05" | "06";
  label: string;
  headline: ReactNode;
  body: ReactNode;
  bullets: readonly string[];
};

export const SDLC: SectionBlock = {
  number: "02",
  label: "Secure SDLC",
  headline: (
    <>
      Security in the <Em>specification, not the audit.</Em>
    </>
  ),
  body: (
    <>
      <p>
        Threat models are produced before code, not after deployment. Every
        major component carries an explicit set of assets, adversaries, and
        controls — and the design is reviewed against them before
        implementation begins.
      </p>
      <p>
        Code review treats security as a first-class concern. Static analysis,
        dependency scanning, and secret detection run on every change. Builds
        produce cryptographically signed artefacts with full provenance.
      </p>
    </>
  ),
  bullets: [
    "Design-time threat modelling on every major component",
    "Security-explicit code review",
    "Static analysis, dependency scanning, and secret detection on every commit",
    "Cryptographically signed releases with build-time provenance",
  ],
};

export const VAPT: SectionBlock = {
  number: "03",
  label: "VAPT",
  headline: (
    <>
      Vulnerability assessment as a <Em>continuous discipline.</Em>
    </>
  ),
  body: (
    <>
      <p>
        Internal red-team activity is run on a recurring cadence by engineers
        who do not work on the target component. Third-party assessments are
        commissioned before major releases and before deployments into new
        classification environments.
      </p>
      <p>
        Where contracts permit, customers may witness or participate in
        assessment activity. Findings are tracked under our standard
        vulnerability management process and resolved before release sign-off.
      </p>
    </>
  ),
  bullets: [
    "Recurring internal red-team activity",
    "Third-party assessment before major releases",
    "Customer-witnessed assessments where contracted",
    "Coordinated disclosure aligned with our Responsible Disclosure policy",
  ],
};

export const SUPPLY_CHAIN: SectionBlock = {
  number: "04",
  label: "Supply Chain",
  headline: (
    <>
      Provenance, signing, and{" "}
      <Em>no foreign closed-source in the critical path.</Em>
    </>
  ),
  body: (
    <>
      <p>
        Every dependency in the build is pinned, signed, and recorded. Software
        Bills of Materials (SBOMs) accompany every release artefact.
        Closed-source dependencies are excluded from the critical operational
        path; where unavoidable, they are isolated and documented.
      </p>
      <p>
        The indigenous-only build path is certified end-to-end so customers can
        verify the provenance of what they deploy.
      </p>
    </>
  ),
  bullets: [
    "Pinned and signed open-source dependencies",
    "SBOMs published with every release artefact",
    "No foreign closed-source dependencies in the critical path",
    "Indigenous-only build path certified end-to-end",
  ],
};

export const COMPLIANCE: SectionBlock = {
  number: "05",
  label: "Compliance",
  headline: (
    <>
      Aligned with{" "}
      <Em>the certifications our customers require.</Em>
    </>
  ),
  body: (
    <>
      <p>
        Compliance commitments are made customer-by-customer where they
        actually matter for deployment, rather than as a generic badge wall.
        The list below describes the postures Scaan actively works to.
      </p>
      <p>
        <strong className="font-semibold text-ink">
          [Specific certifications to be confirmed by Scaan security team —
          ISO 27001, customer-specific MoD requirements, others as applicable.]
        </strong>
      </p>
    </>
  ),
  bullets: [
    "Aligned with Government of India procurement security guidelines",
    "Customer-specific certifications addressed under engagement agreements",
    "Internal information security management aligned to ISO 27001 controls",
    "Documentation packages prepared for customer security review",
  ],
};

export const DISCLOSURE: SectionBlock = {
  number: "06",
  label: "Disclosure",
  headline: (
    <>
      Coordinated disclosure with{" "}
      <Em>good-faith safe harbour.</Em>
    </>
  ),
  body: (
    <>
      <p>
        Scaan operates a published Responsible Disclosure policy for security
        researchers and operators acting in good faith. Reports are
        acknowledged within two business days and tracked through resolution.
      </p>
      <p>
        Full policy and contact details live on the{" "}
        <a
          href="/responsible-disclosure"
          className="text-navy underline underline-offset-4 hover:text-red"
        >
          Responsible Disclosure
        </a>{" "}
        page.
      </p>
    </>
  ),
  bullets: [
    "Two business day acknowledgement",
    "Good-faith safe harbour for in-scope research",
    "Coordinated disclosure with public credit (or anonymity) at researcher's option",
    "Out-of-scope items clearly enumerated",
  ],
};

export const ALL_SECTIONS: readonly SectionBlock[] = [
  SDLC,
  VAPT,
  SUPPLY_CHAIN,
  COMPLIANCE,
  DISCLOSURE,
];
