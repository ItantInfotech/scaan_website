import type { Metadata } from "next";

import ContactForm from "@/components/ContactForm";
import MonoLabel from "@/components/MonoLabel";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

import {
  CONTACT_HERO,
  DESKS,
  OFFICES,
  WHAT_TO_EXPECT,
} from "@/content/contact";

export const metadata: Metadata = {
  title: "Contact — Scaan Technologies",
  description:
    "Schedule a briefing with Scaan Technologies. Sales, partnership, careers, and media desks for the Indian Defence Forces, Government of India, and partners.",
};

/*
 * /contact — SPEC.md §6 (P1) and §10.2 (Task 2.2: UI only).
 * Sections: hero · form + what-to-expect · email desks · offices.
 * Real submission wiring lands in Task 2.3.
 */
export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative border-b border-line">
        <div className="mx-auto max-w-(--container-wrap) px-5 pb-20 pt-20 md:px-9 md:pb-24 md:pt-28">
          <div className="mb-12">
            <MonoLabel size="sm">
              <b className="font-bold text-red">{CONTACT_HERO.number} /</b>{" "}
              <span className="text-ink-mute">{CONTACT_HERO.label}</span>
            </MonoLabel>
          </div>

          <h1 className="max-w-[20ch] font-serif font-light text-[clamp(40px,7vw,96px)] leading-[0.95] tracking-[-0.025em] text-ink">
            {CONTACT_HERO.headline}
          </h1>

          <Reveal delay={1} className="mt-12 max-w-[60ch]">
            <p className="font-sans text-lg leading-[1.6] text-ink-dim">
              {CONTACT_HERO.lede}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Form + what-to-expect */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-(--container-wrap) px-5 py-24 md:px-9 md:py-32">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            {/* What to expect */}
            <Reveal>
              <MonoLabel size="sm">
                <b className="font-bold text-red">01 /</b>{" "}
                <span className="text-ink-mute">What to expect</span>
              </MonoLabel>
              <h2 className="mt-6 font-serif font-light text-[clamp(28px,3.4vw,44px)] leading-[1.1] tracking-[-0.015em] text-ink">
                A briefing built around{" "}
                <em className="italic font-normal text-navy">
                  your operational context
                </em>
                .
              </h2>
              <ul className="mt-10 flex flex-col">
                {WHAT_TO_EXPECT.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 border-t border-line py-4 last:border-b"
                  >
                    <span className="mt-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-red">
                      0{i + 1}
                    </span>
                    <span className="font-sans text-[15px] leading-[1.6] text-ink">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-10 max-w-[40ch] font-sans text-[14px] leading-[1.6] text-ink-mute">
                For classified discussions, indicate the appropriate handling
                in your message. We&apos;ll respond with the right channel
                before the call.
              </p>
            </Reveal>

            {/* Form */}
            <Reveal delay={1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Direct desks */}
      <section className="border-b border-line bg-bg-elev">
        <div className="mx-auto max-w-(--container-wrap) px-5 py-24 md:px-9 md:py-28">
          <Reveal>
            <SectionHeader
              number="02"
              label="Direct"
              lede="Skip the form if you know which desk you need. Each address is monitored during business hours, Monday to Friday, IST."
            >
              Or reach the right desk{" "}
              <em className="italic font-normal text-navy">directly.</em>
            </SectionHeader>
          </Reveal>

          <Reveal delay={1} className="mt-14">
            <div className="grid grid-cols-1 gap-px bg-line-hi sm:grid-cols-2 lg:grid-cols-4">
              {DESKS.map((d) => (
                <div key={d.label} className="flex flex-col gap-3 bg-bg-elev p-8">
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-ink-mute">
                    {d.label}
                  </p>
                  <a
                    href={`mailto:${d.value}`}
                    className="font-serif text-[22px] font-normal leading-tight tracking-[-0.01em] text-navy underline-offset-4 hover:underline"
                  >
                    {d.value}
                  </a>
                  {d.note ? (
                    <p className="font-sans text-[13px] leading-[1.55] text-ink-dim">
                      {d.note}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Offices */}
      <section>
        <div className="mx-auto max-w-(--container-wrap) px-5 py-24 md:px-9 md:py-32">
          <Reveal>
            <SectionHeader number="03" label="Offices">
              Visits by{" "}
              <em className="italic font-normal text-navy">appointment only.</em>
            </SectionHeader>
          </Reveal>

          <Reveal delay={1} className="mt-14">
            <div className="grid grid-cols-1 gap-px bg-line-hi md:grid-cols-2">
              {OFFICES.map((o) => (
                <div
                  key={o.label}
                  className="flex flex-col gap-5 bg-white p-10"
                >
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-red">
                    {o.label}
                  </p>
                  <div className="font-serif text-[22px] font-normal leading-[1.3] tracking-[-0.01em] text-ink">
                    {o.address.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
                    · {o.tag}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={2} className="mt-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
              · Street addresses to be confirmed
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
