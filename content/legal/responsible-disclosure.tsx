import type { ProseSection } from "@/components/ProsePage";

/*
 * Responsible Disclosure / vulnerability disclosure policy placeholder.
 * Final text and scope must be confirmed with counsel and security team
 * (SPEC.md §11.9, §15). PGP key fingerprint and contact alias to be added
 * once provisioned.
 */

export const LAST_UPDATED = "2026-05-13";

export const INTRO = (
  <>
    <p>
      Scaan Technologies welcomes reports of security issues from researchers
      and operators acting in good faith. This policy sets out how to report
      a vulnerability in this site or in publicly accessible Scaan
      infrastructure, and what you can expect from us in return.
    </p>
    <p>
      Customer-deployed Scaan platforms operate on customer infrastructure
      under separate engagement agreements; vulnerabilities found in those
      deployments should be reported through the agreement&apos;s designated
      channel, not through this policy.
    </p>
  </>
);

export const SECTIONS: readonly ProseSection[] = [
  {
    number: "01",
    label: "Scope",
    body: (
      <>
        <p>This policy applies to:</p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <strong className="font-semibold">scaan.tech</strong> and its
            subdomains
          </li>
          <li>Publicly accessible Scaan corporate infrastructure</li>
          <li>
            Source code and binaries that Scaan distributes publicly (if any)
          </li>
        </ul>
        <p>The following are out of scope:</p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            Customer-deployed Scaan platforms running on customer
            infrastructure
          </li>
          <li>Third-party services that we depend on</li>
          <li>Social engineering of Scaan personnel or partners</li>
          <li>
            Denial-of-service activity of any kind, including resource
            exhaustion
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "02",
    label: "How to Report",
    body: (
      <>
        <p>
          Send vulnerability reports to{" "}
          <a
            href="mailto:security@scaan.tech"
            className="text-navy underline underline-offset-4 hover:text-red"
          >
            security@scaan.tech
          </a>
          . Where possible, encrypt the contents using the published PGP key.
        </p>
        <p>
          <strong className="font-semibold text-ink">
            [PGP fingerprint to be added — security team to provision.]
          </strong>
        </p>
        <p>A good report includes:</p>
        <ul className="list-inside list-disc space-y-2">
          <li>A clear description of the issue and its impact</li>
          <li>Reproduction steps</li>
          <li>The URL, endpoint, or component affected</li>
          <li>Any proof-of-concept artifacts</li>
          <li>Your preferred public credit (or anonymity)</li>
        </ul>
      </>
    ),
  },
  {
    number: "03",
    label: "Safe Harbour",
    body: (
      <>
        <p>
          Scaan will not pursue civil action or initiate complaints to law
          enforcement for security research conducted in good faith and in
          accordance with this policy. Good faith means:
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li>Stopping at proof-of-impact — no data exfiltration beyond what is needed</li>
          <li>
            Avoiding privacy violations and destruction or modification of
            data
          </li>
          <li>Reporting the issue promptly</li>
          <li>Giving us reasonable time to fix the issue before disclosure</li>
        </ul>
      </>
    ),
  },
  {
    number: "04",
    label: "What to Expect",
    body: (
      <>
        <p>When we receive a report we will:</p>
        <ul className="list-inside list-disc space-y-2">
          <li>Acknowledge receipt within two business days</li>
          <li>
            Investigate, validate the finding, and keep you informed of
            progress
          </li>
          <li>
            Coordinate disclosure once the issue is fixed, with credit to
            you if you wish
          </li>
        </ul>
        <p>
          Scaan does not currently operate a paid bug bounty programme.
          We may offer public acknowledgement and, where appropriate, a token
          of thanks.
        </p>
      </>
    ),
  },
  {
    number: "05",
    label: "Contact",
    body: (
      <>
        <p>
          Reports:{" "}
          <a
            href="mailto:security@scaan.tech"
            className="text-navy underline underline-offset-4 hover:text-red"
          >
            security@scaan.tech
          </a>
          . Please use the PGP key published alongside this policy for
          anything sensitive.
        </p>
      </>
    ),
  },
];
