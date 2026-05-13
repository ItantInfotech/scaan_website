import type { ProseSection } from "@/components/ProsePage";

/*
 * Terms of Use placeholder. Final text must be drafted by counsel
 * (SPEC.md §11.9 + §16). Governing law / jurisdiction lines need confirmation
 * with client's preferred forum.
 */

export const LAST_UPDATED = "2026-05-13";

export const INTRO = (
  <>
    <p>
      These Terms of Use govern your access to and use of{" "}
      <strong className="font-semibold text-ink">scaan.tech</strong>{" "}
      (the &quot;Site&quot;), operated by Scaan Technologies Pvt. Ltd.
      (&quot;Scaan&quot;).
    </p>
    <p>
      By accessing or using the Site you agree to these Terms. If you do not
      agree, you should not use the Site. These terms govern only your use of
      the public marketing site — use of any Scaan product or platform under
      a customer engagement is governed by a separate written agreement.
    </p>
  </>
);

export const SECTIONS: readonly ProseSection[] = [
  {
    number: "01",
    label: "Use of the Site",
    body: (
      <>
        <p>
          The Site is provided as informational material for prospective
          customers, partners, and personnel evaluating Scaan&apos;s
          platforms. You agree to use the Site only for lawful purposes and
          in a manner consistent with these Terms.
        </p>
        <p>You agree not to:</p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            Attempt to interfere with the operation of the Site, including
            through scraping, denial-of-service activity, or
            automated probing.
          </li>
          <li>
            Reverse engineer, decompile, or attempt to extract source code or
            architectural detail from the Site or its components.
          </li>
          <li>
            Submit content through the contact form that is unlawful,
            harassing, infringing, or designed to impersonate another person.
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "02",
    label: "Intellectual Property",
    body: (
      <>
        <p>
          All content on the Site — including text, graphics, logos, product
          names, and underlying software — is the property of Scaan or its
          licensors and is protected by Indian and international intellectual
          property laws.
        </p>
        <p>
          You may view, share, and reference the Site for non-commercial,
          informational purposes. No other licence is granted by these Terms.
          Product names (OneCommand, INDEA, ATMA, HEART, UNITI, MEMORIAL) and
          the SCAAN wordmark are trademarks of Scaan Technologies Pvt. Ltd.
        </p>
      </>
    ),
  },
  {
    number: "03",
    label: "No Warranty",
    body: (
      <>
        <p>
          The Site is provided on an &quot;as is&quot; and &quot;as
          available&quot; basis. Scaan makes no warranties, express or
          implied, regarding the Site&apos;s accuracy, completeness, fitness
          for a particular purpose, or uninterrupted availability.
        </p>
        <p>
          The product information on the Site is intended to convey general
          capabilities and is not a binding specification. Customer-specific
          commitments are set out in individual engagement agreements.
        </p>
      </>
    ),
  },
  {
    number: "04",
    label: "Limitation of Liability",
    body: (
      <>
        <p>
          To the maximum extent permitted by applicable Indian law, Scaan
          will not be liable for any indirect, incidental, special,
          consequential, or punitive damages arising out of or related to
          your use of the Site.
        </p>
        <p>
          <strong className="font-semibold text-ink">
            [Liability cap — confirm with counsel.]
          </strong>
        </p>
      </>
    ),
  },
  {
    number: "05",
    label: "Indemnification",
    body: (
      <>
        <p>
          You agree to indemnify and hold Scaan, its officers, employees,
          and partners harmless from any claim, loss, or liability arising
          from your use of the Site in breach of these Terms.
        </p>
      </>
    ),
  },
  {
    number: "06",
    label: "Governing Law",
    body: (
      <>
        <p>
          These Terms are governed by the laws of India. Any disputes arising
          out of or in connection with the Site or these Terms will be
          subject to the exclusive jurisdiction of the competent courts at{" "}
          <strong className="font-semibold text-ink">
            [Mumbai / Pune — confirm forum with counsel]
          </strong>
          .
        </p>
      </>
    ),
  },
  {
    number: "07",
    label: "Changes",
    body: (
      <>
        <p>
          We may revise these Terms from time to time. Material revisions
          will be reflected in the &quot;Last updated&quot; date at the top
          of this page. Continued use of the Site after a revision
          constitutes acceptance.
        </p>
      </>
    ),
  },
  {
    number: "08",
    label: "Contact",
    body: (
      <>
        <p>
          Questions about these Terms can be sent to{" "}
          <a
            href="mailto:legal@scaan.tech"
            className="text-navy underline underline-offset-4 hover:text-red"
          >
            legal@scaan.tech
          </a>
          .
        </p>
      </>
    ),
  },
];
