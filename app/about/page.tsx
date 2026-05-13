import type { Metadata } from "next";

import Button from "@/components/Button";
import FounderCard from "@/components/FounderCard";
import MonoLabel from "@/components/MonoLabel";
import PillarCard from "@/components/PillarCard";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

import { ABOUT_HERO, FOUNDERS, VALUES, VISION } from "@/content/about";

export const metadata: Metadata = {
  title: "About — Scaan Technologies",
  description:
    "An indigenous defence-tech company building software for the Indian Defence Forces and Government of India. Founded by veterans and engineers.",
};

/*
 * /about — SPEC.md §6 (P1) and §10.2.
 * Sections: hero · founders · vision · values · CTA.
 * All client-specific copy is sourced from content/about.tsx and flagged as
 * placeholder there pending §11.3 / §16.4 confirmation.
 */
export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="relative border-b border-line">
        <div className="mx-auto max-w-(--container-wrap) px-5 pb-24 pt-20 md:px-9 md:pb-32 md:pt-28">
          <div className="mb-12">
            <MonoLabel size="sm">
              <b className="font-bold text-red">{ABOUT_HERO.number} /</b>{" "}
              <span className="text-ink-mute">{ABOUT_HERO.label}</span>
            </MonoLabel>
          </div>

          <h1 className="max-w-[18ch] font-serif font-light text-[clamp(40px,7vw,96px)] leading-[0.95] tracking-[-0.025em] text-ink">
            {ABOUT_HERO.headline}
          </h1>

          <Reveal delay={1} className="mt-12 max-w-[60ch]">
            <p className="font-sans text-lg leading-[1.6] text-ink-dim">
              {ABOUT_HERO.lede}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Founders */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-(--container-wrap) px-5 py-24 md:px-9 md:py-32">
          <Reveal>
            <SectionHeader
              number="01"
              label="Leadership"
              lede="Scaan is run by people who have done the job we build for. Our leadership combines decades of service with deep engineering experience."
            >
              Built by{" "}
              <em className="italic font-normal text-navy">
                operators and engineers
              </em>
              , in one room.
            </SectionHeader>
          </Reveal>

          <Reveal delay={1} className="mt-16">
            <div className="grid grid-cols-1 gap-px bg-line-hi md:grid-cols-2 lg:grid-cols-3">
              {FOUNDERS.map((founder) => (
                <FounderCard key={founder.name} {...founder} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={2} className="mt-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
              · Founder profiles to be confirmed
            </p>
          </Reveal>
        </div>
      </section>

      {/* Vision */}
      <section className="border-b border-line bg-bg-elev">
        <div className="mx-auto max-w-(--container-wrap) px-5 py-24 md:px-9 md:py-32">
          <Reveal>
            <SectionHeader number={VISION.number} label={VISION.label}>
              {VISION.headline}
            </SectionHeader>
          </Reveal>

          <Reveal delay={1} className="mt-12 grid gap-8 md:grid-cols-[240px_1fr]">
            <div />
            <div className="max-w-[64ch] space-y-6">
              {VISION.body.map((para, i) => (
                <p
                  key={i}
                  className="font-sans text-lg leading-[1.65] text-ink-dim"
                >
                  {para}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-(--container-wrap) px-5 py-24 md:px-9 md:py-32">
          <Reveal>
            <SectionHeader number="03" label="Values">
              How we operate when{" "}
              <em className="italic font-normal text-navy">
                no one&apos;s watching the slide deck.
              </em>
            </SectionHeader>
          </Reveal>

          <Reveal delay={1} className="mt-16">
            <div className="grid grid-cols-1 gap-px bg-line-hi md:grid-cols-2">
              {VALUES.map((v) => (
                <PillarCard
                  key={v.number}
                  number={v.number}
                  label={v.label}
                  body={v.body}
                >
                  {v.headline}
                </PillarCard>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Closing CTA — mirrors homepage closing CTA */}
      <section className="bg-bg-elev">
        <div className="mx-auto max-w-(--container-wrap) px-5 py-24 md:px-9 md:py-32">
          <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
            <Reveal>
              <MonoLabel size="sm">
                <b className="font-bold text-red">04 /</b>{" "}
                <span className="text-ink-mute">Talk to us</span>
              </MonoLabel>
              <h2 className="mt-6 font-serif font-light text-[clamp(34px,5vw,64px)] leading-[1.02] tracking-[-0.025em] text-ink">
                Working on{" "}
                <em className="italic font-normal text-navy">
                  the same problems?
                </em>{" "}
                We should meet.
              </h2>
            </Reveal>

            <Reveal delay={1} className="flex flex-col gap-8">
              <p className="max-w-[44ch] font-sans text-lg leading-[1.55] text-ink-dim">
                Whether you&apos;re a defence buyer evaluating sovereign
                platforms, a veteran exploring a second career, or a partner
                looking to build with us — we&apos;d like to hear from you.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="solid">
                  Schedule a Briefing
                </Button>
                <Button href="/careers" variant="outline">
                  See Open Roles
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
