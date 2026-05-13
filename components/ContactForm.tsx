"use client";

import { useState } from "react";
import Button from "./Button";

/*
 * Contact form per SPEC.md §6 (P1).
 *
 * Task 2.3 — Option A (mailto:). Submission opens a pre-filled email in the
 * user's default mail client; the user reviews and sends it themselves.
 * No server, no third-party API, no API key. Appropriate for the expected
 * volume (≤5 sales submissions / month) and a defence audience where
 * inquiry data should not transit a third-party SaaS.
 *
 * Honeypot field stays even though there's no server to drop the request —
 * we short-circuit before opening the mail client.
 *
 * Message length is capped to keep the mailto URL within historical
 * client limits (macOS Mail used to truncate around 2 KB).
 */
type Reason = "sales" | "partnership" | "careers" | "media" | "other";

const REASONS: { id: Reason; label: string }[] = [
  { id: "sales", label: "Sales" },
  { id: "partnership", label: "Partnership" },
  { id: "careers", label: "Careers" },
  { id: "media", label: "Media" },
  { id: "other", label: "Other" },
];

const RECIPIENT = "sales@scaan.tech";
const MESSAGE_MAX = 1500;

function FieldLabel({
  children,
  required,
}: {
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-ink-mute">
      {children}
      {required ? <span className="ml-1 text-red">*</span> : null}
    </span>
  );
}

const inputClass =
  "w-full border border-line-hi bg-white px-4 py-3 font-sans text-[15px] text-ink transition-colors placeholder:text-ink-mute focus:border-navy focus:outline-none";

function TextField({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
  placeholder,
}: {
  label: string;
  name: string;
  type?: "text" | "email" | "tel";
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <FieldLabel required={required}>{label}</FieldLabel>
      <input
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={inputClass}
      />
    </label>
  );
}

function TextareaField({
  label,
  name,
  required = false,
  rows = 5,
  placeholder,
  maxLength,
}: {
  label: string;
  name: string;
  required?: boolean;
  rows?: number;
  placeholder?: string;
  maxLength?: number;
}) {
  return (
    <label className="flex flex-col gap-2">
      <FieldLabel required={required}>{label}</FieldLabel>
      <textarea
        name={name}
        required={required}
        rows={rows}
        placeholder={placeholder}
        maxLength={maxLength}
        className={`${inputClass} resize-y leading-[1.55]`}
      />
    </label>
  );
}

function buildMailto(data: Record<string, string>, reason: Reason): string {
  const reasonLabel = REASONS.find((r) => r.id === reason)?.label ?? reason;
  const subject = `[Scaan Contact · ${reasonLabel}] ${data.name} — ${data.org}`;
  const body = [
    `Name: ${data.name}`,
    `Designation: ${data.role}`,
    `Organisation: ${data.org}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone || "—"}`,
    `Reason: ${reasonLabel}`,
    "",
    "---",
    "",
    data.message,
    "",
    "---",
    "Submitted via scaan.tech/contact",
  ].join("\n");
  return `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function SuccessState({ mailto }: { mailto: string }) {
  return (
    <div className="border border-navy bg-white p-10">
      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-red">
        · Draft Prepared
      </p>
      <h3 className="mt-5 font-serif text-[32px] font-light leading-[1.1] tracking-[-0.01em] text-ink">
        Check your mail client.
      </h3>
      <p className="mt-5 max-w-[44ch] font-sans text-[15px] leading-[1.6] text-ink-dim">
        We&apos;ve opened a pre-filled draft in your default mail client.{" "}
        <strong className="font-semibold text-ink">
          Review the message and click Send
        </strong>{" "}
        to deliver it to{" "}
        <a
          href={`mailto:${RECIPIENT}`}
          className="text-navy underline underline-offset-4 hover:text-red"
        >
          {RECIPIENT}
        </a>
        .
      </p>
      <p className="mt-6 max-w-[44ch] font-sans text-[14px] leading-[1.55] text-ink-mute">
        Nothing opened?{" "}
        <a
          href={mailto}
          className="text-navy underline underline-offset-4 hover:text-red"
        >
          Re-open the draft
        </a>{" "}
        or write to{" "}
        <a
          href={`mailto:${RECIPIENT}`}
          className="text-navy underline underline-offset-4 hover:text-red"
        >
          {RECIPIENT}
        </a>{" "}
        directly.
      </p>
    </div>
  );
}

export default function ContactForm() {
  const [reason, setReason] = useState<Reason>("sales");
  const [submitted, setSubmitted] = useState<{ mailto: string } | null>(null);

  if (submitted) return <SuccessState mailto={submitted.mailto} />;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = Object.fromEntries(
          new FormData(e.currentTarget),
        ) as Record<string, string>;
        if (data._hp_company) return; // honeypot tripped — drop silently
        const mailto = buildMailto(data, reason);
        // Open the user's mail client with the pre-filled draft.
        window.location.href = mailto;
        setSubmitted({ mailto });
      }}
      className="flex flex-col gap-8 border border-line-hi bg-white p-8 md:p-10"
    >
      {/* Honeypot — invisible to humans, drops bots that fill it. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label>
          Leave this empty
          <input
            type="text"
            name="_hp_company"
            tabIndex={-1}
            autoComplete="off"
          />
        </label>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <TextField label="Full Name" name="name" required autoComplete="name" />
        <TextField label="Designation" name="role" required />
        <div className="md:col-span-2">
          <TextField
            label="Organisation / Service / Unit"
            name="org"
            required
            autoComplete="organization"
          />
        </div>
        <TextField
          label="Official Email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
        <TextField label="Phone" name="phone" type="tel" autoComplete="tel" />
      </div>

      <fieldset className="flex flex-col gap-3">
        <FieldLabel required>Reason for Inquiry</FieldLabel>
        <div
          role="radiogroup"
          aria-label="Reason for inquiry"
          className="grid grid-cols-2 gap-px bg-line-hi sm:flex sm:flex-wrap sm:gap-2 sm:bg-transparent"
        >
          {REASONS.map((r) => {
            const active = reason === r.id;
            return (
              <button
                key={r.id}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setReason(r.id)}
                className={`border-[1.5px] px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.16em] transition-colors ${
                  active
                    ? "border-navy bg-navy text-white"
                    : "border-line-hi bg-white text-navy hover:border-navy"
                }`}
              >
                {r.label}
              </button>
            );
          })}
        </div>
        <input type="hidden" name="reason" value={reason} />
      </fieldset>

      <TextareaField
        label="Message"
        name="message"
        required
        rows={6}
        maxLength={MESSAGE_MAX}
        placeholder="Briefly describe what you'd like to discuss."
      />

      <p className="font-sans text-[12px] leading-[1.55] text-ink-mute">
        Submitting opens a pre-filled draft in your mail client. You review and
        send it yourself — your message goes straight to {RECIPIENT} and is not
        routed through any third-party service.
      </p>

      <div className="flex justify-end">
        <Button type="submit" variant="solid">
          Open Draft
        </Button>
      </div>
    </form>
  );
}
