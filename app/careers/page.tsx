import type { Metadata } from "next";

import Button from "@/components/Button";
import MonoLabel from "@/components/MonoLabel";
import PillarCard from "@/components/PillarCard";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

import {
  HERO,
  PAGE_CTA,
  ROLE_AREAS,
  VETERANS_PATHWAY,
  WHY_WORK_HERE,
} from "@/content/careers";

export const metadata: Metadata = {
  title: "Careers — Scaan Technologies",
  description:
    "Build indigenous defence software at Scaan Technologies. Engineering, product, and customer-engagement roles. Veterans pathway. Mumbai HQ and Pune R&D.",
};

/*
 * /careers — Task 3.8.
 * Hero · why work here pillars · open role areas · veterans pathway · CTA.
 * Static recruitment; ATS integration deferred per SPEC.md §16.6.
 */
export default function CareersPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative border-b border-line">
        <div className="mx-auto max-w-(--container-wrap) px-5 pb-20 pt-20 md:px-9 md:pb-24 md:pt-28">
          <div className="mb-12">
            <MonoLabel size="sm">
              <b className="font-bold text-red">{HERO.number} /</b>{" "}
              <span className="text-ink-mute">{HERO.label}</span>
            </MonoLabel>
          </div>

          <h1 className="max-w-[16ch] font-serif font-light text-[clamp(40px,7vw,96px)] leading-[0.95] tracking-[-0.025em] text-ink">
            {HERO.headline}
          </h1>

          <Reveal delay={1} className="mt-12 max-w-[60ch]">
            <p className="font-sans text-lg leading-[1.6] text-ink-dim">
              {HERO.lede}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Why work here */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-(--container-wrap) px-5 py-24 md:px-9 md:py-32">
          <Reveal>
            <SectionHeader
              number="01"
              label="Why Scaan"
              lede="Defence-tech careers in India have historically meant choosing between meaningful work and modern engineering culture. We're trying to be the answer that doesn't make you pick."
            >
              The reasons people stay{" "}
              <em className="italic font-normal text-navy">
                are the reasons they came.
              </em>
            </SectionHeader>
          </Reveal>

          <Reveal delay={1} className="mt-16">
            <div className="grid grid-cols-1 gap-px bg-line-hi md:grid-cols-2">
              {WHY_WORK_HERE.map((p) => (
                <PillarCard
                  key={p.number}
                  number={p.number}
                  label={p.label}
                  body={p.body}
                >
                  {p.headline}
                </PillarCard>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Role areas */}
      <section className="border-b border-line bg-bg-elev">
        <div className="mx-auto max-w-(--container-wrap) px-5 py-24 md:px-9 md:py-32">
          <Reveal>
            <SectionHeader
              number="02"
              label="Open Areas"
              lede="We hire across the areas below. Specific job descriptions are scoped to active openings — write to us with what you'd want to build and we'll route you to the right team."
            >
              We&apos;re growing{" "}
              <em className="italic font-normal text-navy">
                across these areas.
              </em>
            </SectionHeader>
          </Reveal>

          <Reveal delay={1} className="mt-16">
            <ol className="flex flex-col">
              {ROLE_AREAS.map((r, i) => (
                <li
                  key={r.area}
                  className="grid gap-6 border-t border-line py-8 last:border-b md:grid-cols-[280px_1fr_140px] md:gap-12"
                >
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-navy">
                    <span className="mr-3 text-red">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {r.area}
                  </p>
                  <p className="font-sans text-[15px] leading-[1.6] text-ink-dim">
                    {r.description}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute md:text-right">
                    {r.postings}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={2} className="mt-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
              · Specific openings rotate. Don&apos;t see a fit? Write anyway.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Veterans Pathway */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-(--container-wrap) px-5 py-24 md:px-9 md:py-32">
          <Reveal>
            <SectionHeader number={VETERANS_PATHWAY.number} label={VETERANS_PATHWAY.label}>
              {VETERANS_PATHWAY.headline}
            </SectionHeader>
          </Reveal>

          <Reveal delay={1} className="mt-12 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <p className="max-w-[60ch] font-sans text-lg leading-[1.65] text-ink-dim">
              {VETERANS_PATHWAY.body}
            </p>
            <ul className="flex flex-col">
              {VETERANS_PATHWAY.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 border-t border-line py-4 last:border-b"
                >
                  <span className="mt-1 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-navy">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-sans text-[14px] leading-[1.6] text-ink">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-bg-elev">
        <div className="mx-auto max-w-(--container-wrap) px-5 py-24 md:px-9 md:py-32">
          <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
            <Reveal>
              <MonoLabel size="sm">
                <b className="font-bold text-red">{PAGE_CTA.number} /</b>{" "}
                <span className="text-ink-mute">{PAGE_CTA.label}</span>
              </MonoLabel>
              <h2 className="mt-6 max-w-[20ch] font-serif font-light text-[clamp(34px,5vw,64px)] leading-[1.02] tracking-[-0.025em] text-ink">
                {PAGE_CTA.headline}
              </h2>
            </Reveal>

            <Reveal delay={1} className="flex flex-col gap-8">
              <p className="max-w-[44ch] font-sans text-lg leading-[1.55] text-ink-dim">
                {PAGE_CTA.body}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="mailto:careers@scaan.tech" variant="solid">
                  Email Careers
                </Button>
                <Button href="/about" variant="outline">
                  About Scaan
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
