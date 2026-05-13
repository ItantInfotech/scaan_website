import type { Metadata } from "next";

import Button from "@/components/Button";
import MonoLabel from "@/components/MonoLabel";
import PillarCard from "@/components/PillarCard";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

import {
  DISCIPLINES,
  DISCIPLINE_TO_PRODUCT,
  HERO,
} from "@/content/capabilities";

export const metadata: Metadata = {
  title: "Capabilities — Scaan Technologies",
  description:
    "The eight disciplines behind every Scaan platform: AI, geospatial, secure cloud, mobile, offline-first, cybersecurity, DevSecOps, enterprise engineering.",
};

/*
 * /capabilities — Task 3.6, SPEC.md §6.
 * Hero · 8-card discipline grid · discipline-to-product mapping · CTA.
 */
export default function CapabilitiesPage() {
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

      {/* Discipline grid */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-(--container-wrap) px-5 py-24 md:px-9 md:py-32">
          <Reveal>
            <SectionHeader
              number="01"
              label="Disciplines"
              lede="Each discipline has a dedicated technical lead inside Scaan. Knowledge of the field travels with our engineers, not with subcontractors."
            >
              Eight disciplines,{" "}
              <em className="italic font-normal text-navy">
                one engineering organisation.
              </em>
            </SectionHeader>
          </Reveal>

          <Reveal delay={1} className="mt-16">
            <div className="grid grid-cols-1 gap-px bg-line-hi sm:grid-cols-2 lg:grid-cols-4">
              {DISCIPLINES.map((d) => (
                <PillarCard
                  key={d.number}
                  number={d.number}
                  label={d.label}
                  body={d.body}
                >
                  {d.headline}
                </PillarCard>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Discipline → Product mapping */}
      <section className="border-b border-line bg-bg-elev">
        <div className="mx-auto max-w-(--container-wrap) px-5 py-24 md:px-9 md:py-32">
          <Reveal>
            <SectionHeader
              number="02"
              label="Mapping"
              lede="Disciplines are the load-bearing layer; platforms are how they reach customers. Each platform draws on multiple disciplines; some disciplines power every platform."
            >
              How disciplines{" "}
              <em className="italic font-normal text-navy">
                power the platforms.
              </em>
            </SectionHeader>
          </Reveal>

          <Reveal delay={1} className="mt-16">
            <ol className="flex flex-col">
              {DISCIPLINE_TO_PRODUCT.map((m, i) => (
                <li
                  key={m.discipline}
                  className="grid gap-4 border-t border-line py-5 last:border-b md:grid-cols-[240px_1fr] md:gap-8"
                >
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-navy">
                    <span className="mr-3 text-red">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {m.discipline}
                  </p>
                  <p className="font-sans text-[15px] text-ink">
                    {m.products.join(" · ")}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-(--container-wrap) px-5 py-24 md:px-9 md:py-32">
          <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
            <Reveal>
              <MonoLabel size="sm">
                <b className="font-bold text-red">03 /</b>{" "}
                <span className="text-ink-mute">Engagement</span>
              </MonoLabel>
              <h2 className="mt-6 max-w-[20ch] font-serif font-light text-[clamp(34px,5vw,64px)] leading-[1.02] tracking-[-0.025em] text-ink">
                Briefings cover{" "}
                <em className="italic font-normal text-navy">
                  the disciplines behind the platform.
                </em>
              </h2>
            </Reveal>

            <Reveal delay={1} className="flex flex-col gap-8">
              <p className="max-w-[44ch] font-sans text-lg leading-[1.55] text-ink-dim">
                Tell us which platform you&apos;re evaluating. We&apos;ll go as
                deep as the operational context requires — engineering trade-offs
                included.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="solid">
                  Schedule a Briefing
                </Button>
                <Button href="/products" variant="outline">
                  All Products
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
