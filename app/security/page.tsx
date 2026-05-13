import type { Metadata } from "next";

import Button from "@/components/Button";
import MonoLabel from "@/components/MonoLabel";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

import {
  ALL_SECTIONS,
  DEPLOYMENT_MODELS,
  HERO,
} from "@/content/security";

export const metadata: Metadata = {
  title: "Security — Scaan Technologies",
  description:
    "Scaan's security posture for defence-grade adoption: deployment models, secure SDLC, VAPT, supply chain integrity, compliance, and coordinated disclosure.",
};

/*
 * /security — Task 3.7, SPEC.md §6.
 * Hero · Deployment models grid · SDLC · VAPT · Supply chain · Compliance ·
 * Disclosure · CTA. Heavy structured content for defence-buyer due diligence.
 */
export default function SecurityPage() {
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

          <h1 className="max-w-[20ch] font-serif font-light text-[clamp(40px,7vw,96px)] leading-[0.95] tracking-[-0.025em] text-ink">
            {HERO.headline}
          </h1>

          <Reveal delay={1} className="mt-12 max-w-[60ch]">
            <p className="font-sans text-lg leading-[1.6] text-ink-dim">
              {HERO.lede}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Deployment Models */}
      <section className="border-b border-line bg-bg-elev">
        <div className="mx-auto max-w-(--container-wrap) px-5 py-24 md:px-9 md:py-32">
          <Reveal>
            <SectionHeader
              number="01"
              label="Deployment"
              lede="Deployment posture is the first line of security. Scaan platforms run on customer infrastructure, customer hardware, and customer-controlled key material."
            >
              Deployed where{" "}
              <em className="italic font-normal text-navy">
                customers control the substrate.
              </em>
            </SectionHeader>
          </Reveal>

          <Reveal delay={1} className="mt-16">
            <div className="grid grid-cols-1 gap-px bg-line-hi md:grid-cols-2">
              {DEPLOYMENT_MODELS.map((d) => (
                <div
                  key={d.label}
                  className="flex flex-col gap-5 bg-bg-elev p-10 md:p-12"
                >
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-red">
                    {d.label}
                  </p>
                  <h3 className="max-w-[24ch] font-serif text-[26px] font-normal leading-[1.15] tracking-[-0.01em] text-ink">
                    {d.headline}
                  </h3>
                  <p className="max-w-[44ch] font-sans text-[15px] leading-[1.6] text-ink-dim">
                    {d.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* SDLC · VAPT · Supply Chain · Compliance · Disclosure */}
      {ALL_SECTIONS.map((s) => (
        <section key={s.number} className="border-b border-line">
          <div className="mx-auto max-w-(--container-wrap) px-5 py-24 md:px-9 md:py-32">
            <Reveal>
              <SectionHeader number={s.number} label={s.label}>
                {s.headline}
              </SectionHeader>
            </Reveal>

            <Reveal delay={1} className="mt-12 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
              <div className="max-w-[60ch] space-y-5 font-sans text-[16px] leading-[1.7] text-ink-dim">
                {s.body}
              </div>
              <ul className="flex flex-col">
                {s.bullets.map((b, i) => (
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
      ))}

      {/* CTA */}
      <section className="bg-bg-elev">
        <div className="mx-auto max-w-(--container-wrap) px-5 py-24 md:px-9 md:py-32">
          <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
            <Reveal>
              <MonoLabel size="sm">
                <b className="font-bold text-red">07 /</b>{" "}
                <span className="text-ink-mute">Engagement</span>
              </MonoLabel>
              <h2 className="mt-6 max-w-[20ch] font-serif font-light text-[clamp(34px,5vw,64px)] leading-[1.02] tracking-[-0.025em] text-ink">
                Security reviews{" "}
                <em className="italic font-normal text-navy">
                  on your terms.
                </em>
              </h2>
            </Reveal>

            <Reveal delay={1} className="flex flex-col gap-8">
              <p className="max-w-[44ch] font-sans text-lg leading-[1.55] text-ink-dim">
                Documentation packages, architecture walk-throughs, and
                supply-chain provenance reviews are routine parts of engagement.
                Tell us what your security organisation needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="solid">
                  Schedule a Review
                </Button>
                <Button href="/responsible-disclosure" variant="outline">
                  Responsible Disclosure
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
