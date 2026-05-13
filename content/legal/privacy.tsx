import type { ProseSection } from "@/components/ProsePage";

/*
 * Privacy policy placeholder. Final text must be drafted by counsel
 * (SPEC.md §11.9 + §16). Sections cover the standard data-protection
 * topics under GDPR and India's Digital Personal Data Protection Act.
 */

export const LAST_UPDATED = "2026-05-13";

export const INTRO = (
  <>
    <p>
      Scaan Technologies Pvt. Ltd. (&quot;Scaan&quot;, &quot;we&quot;,
      &quot;us&quot;) takes the privacy of the personnel, units, and partners
      who interact with this site seriously. This policy describes what
      limited information we collect through{" "}
      <strong className="font-semibold text-ink">scaan.tech</strong>, how it
      is used, and the rights you have over it.
    </p>
    <p>
      This is a marketing site. We do not host customer operational data,
      classified information, or production telemetry on the public web.
      Customer deployments are governed by separate engagement-specific
      agreements.
    </p>
  </>
);

export const SECTIONS: readonly ProseSection[] = [
  {
    number: "01",
    label: "Information We Collect",
    body: (
      <>
        <p>
          We collect only what is necessary to respond to inquiries and
          operate the site. This includes:
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            Inquiry information you submit via the contact form — name,
            designation, organisation, email, optional phone, and the message
            you write. This information is delivered to{" "}
            <strong className="font-semibold">sales@scaan.tech</strong> from
            your own mail client.
          </li>
          <li>
            Aggregated analytics — anonymous page views and approximate
            geography, collected through a privacy-respecting analytics
            provider that does not set cross-site identifiers.
          </li>
        </ul>
        <p>
          We do not use third-party advertising cookies, fingerprinting, or
          session-replay tools.
        </p>
      </>
    ),
  },
  {
    number: "02",
    label: "How We Use Information",
    body: (
      <>
        <p>Inquiry information is used to:</p>
        <ul className="list-inside list-disc space-y-2">
          <li>Route your message to the right Scaan team and reply to you.</li>
          <li>
            Schedule briefings, evaluations, and follow-up engagement
            activities.
          </li>
          <li>
            Maintain a record of communications for our internal
            audit obligations.
          </li>
        </ul>
        <p>
          Analytics information is used to understand which parts of the site
          are useful and to fix bugs. It is never combined with inquiry
          submissions to build a profile of an individual.
        </p>
      </>
    ),
  },
  {
    number: "03",
    label: "How We Share Information",
    body: (
      <>
        <p>
          We do not sell, syndicate, or share inquiry data with third parties
          for advertising or any other commercial purpose.
        </p>
        <p>
          Inquiry information transits the standard email infrastructure
          between your mail client and our inbox. We do not route contact-form
          submissions through any third-party SaaS contact-management tool.
        </p>
        <p>
          We may disclose information where required to comply with applicable
          law, lawful requests from competent Indian authorities, or to
          protect the rights and safety of Scaan, our customers, and the
          public.
        </p>
      </>
    ),
  },
  {
    number: "04",
    label: "Data Retention",
    body: (
      <>
        <p>
          Inquiry information is retained for the duration of the engagement
          conversation and for{" "}
          <strong className="font-semibold">
            [retention window — confirm with counsel]
          </strong>{" "}
          afterwards for audit and contractual record-keeping. After that
          period we delete or anonymise the records.
        </p>
        <p>
          Analytics data is retained in aggregated form and cannot be linked
          back to an individual.
        </p>
      </>
    ),
  },
  {
    number: "05",
    label: "Your Rights",
    body: (
      <>
        <p>
          You have the right to access, correct, or request deletion of the
          information we hold about you. Requests can be sent to{" "}
          <a
            href="mailto:privacy@scaan.tech"
            className="text-navy underline underline-offset-4 hover:text-red"
          >
            privacy@scaan.tech
          </a>
          .
        </p>
        <p>
          We respond to verified requests within the timelines set out under
          the India Digital Personal Data Protection Act and, where
          applicable, the GDPR.
        </p>
      </>
    ),
  },
  {
    number: "06",
    label: "Security",
    body: (
      <>
        <p>
          Scaan is a defence-tech engineering company. Security is part of
          how we build everything we ship, and this site is no exception.
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li>HTTPS enforced site-wide; HSTS preload where applicable.</li>
          <li>
            No third-party scripts beyond the privacy-respecting analytics
            mentioned above.
          </li>
          <li>
            Inquiry submissions are processed through your own mail client —
            no intermediate web-hosted form-handler stores them.
          </li>
        </ul>
        <p>
          If you discover a security issue with this site, please follow the{" "}
          <a
            href="/responsible-disclosure"
            className="text-navy underline underline-offset-4 hover:text-red"
          >
            Responsible Disclosure
          </a>{" "}
          policy.
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
          We may update this policy from time to time. Material changes will
          be reflected in the &quot;Last updated&quot; date at the top of
          this page.
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
          Questions about this policy or about how we handle your information
          should be sent to{" "}
          <a
            href="mailto:privacy@scaan.tech"
            className="text-navy underline underline-offset-4 hover:text-red"
          >
            privacy@scaan.tech
          </a>
          .
        </p>
      </>
    ),
  },
];
