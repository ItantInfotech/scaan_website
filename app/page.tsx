import Button from "@/components/Button";
import Stamp from "@/components/Stamp";
import MonoLabel from "@/components/MonoLabel";
import SectionHeader from "@/components/SectionHeader";
import ProductCard from "@/components/ProductCard";
import PillarCard from "@/components/PillarCard";
import { ApproachBar, ApproachStep } from "@/components/ApproachStep";
import CapabilitiesTicker from "@/components/CapabilitiesTicker";
import Reveal from "@/components/Reveal";

import { PRODUCTS } from "@/content/products";
import { PILLARS } from "@/content/pillars";
import { APPROACH } from "@/content/approach";
import { TRUST_ITEMS } from "@/content/trust-items";
import { CONTACTS } from "@/content/contacts";

/*
 * Homepage composition — SPEC.md §5. Section flow:
 *   Hero → Trust strip → Products → Why Scaan → Approach → Capabilities → CTA
 * Content is sourced from content/. Components live in components/.
 */
export default function Home() {
  return (
    <>
      {/* 5.2 Hero */}
      <section className="relative border-b border-line">
        <div className="mx-auto max-w-(--container-wrap) px-5 pb-32 pt-20 md:px-9 md:pb-40 md:pt-28">
          <div className="mb-16 flex items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <Stamp>Mission-Grade · Sovereign</Stamp>
              <MonoLabel variant="mute" size="xs" className="hidden sm:inline">
                19.0760° N · 72.8777° E
              </MonoLabel>
            </div>
            <MonoLabel variant="mute" size="xs">
              FILE · SCN/HOME/01
            </MonoLabel>
          </div>

          <h1 className="font-serif font-light text-[clamp(48px,9vw,132px)] leading-[0.9] tracking-[-0.035em] text-ink">
            <span className="hero-line hero-line-1 block">Indigenous.</span>
            <span className="hero-line hero-line-2 block italic font-normal text-navy">
              Intelligent.
            </span>
            <span className="hero-line hero-line-3 block">
              Mission-Ready.
              <sup className="ml-1 align-top font-mono text-[0.16em] font-bold tracking-[0.2em] text-red">
                ·01
              </sup>
            </span>
          </h1>

          <Reveal delay={3} className="mt-12 max-w-[60ch]">
            <p className="font-sans text-lg leading-[1.55] text-ink-dim">
              Mission-grade, sovereign platforms for the Indian Defence Forces and
              Government of India.{" "}
              <span className="italic text-navy">
                AI, geospatial, and enterprise engineering
              </span>{" "}
              — built in India, deployed on Indian terms.
            </p>
          </Reveal>

          <Reveal delay={4} className="mt-12 flex flex-wrap gap-4">
            <Button href="#portfolio" variant="solid">
              Explore Products
            </Button>
            <Button href="/contact" variant="outline">
              Request a Demo
            </Button>
          </Reveal>
        </div>

        {/* Vertical coordinate ladder, hidden under 1100px */}
        <div className="pointer-events-none absolute right-9 top-1/2 hidden -translate-y-1/2 flex-col gap-3 xl:flex">
          {["19.0760", "72.8777", "INDIA", "·", "MUMBAI"].map((s, i) => (
            <MonoLabel key={i} variant="mute" size="xs" as="span">
              {s}
            </MonoLabel>
          ))}
        </div>
      </section>

      {/* 5.3 Trust strip */}
      <section className="border-b border-line bg-bg-elev">
        <div className="mx-auto max-w-(--container-wrap) px-5 py-16 md:px-9 md:py-20">
          <div className="grid grid-cols-1 gap-px bg-line sm:grid-cols-2 lg:grid-cols-5">
            {TRUST_ITEMS.map((item) => (
              <div
                key={item.label}
                className="flex flex-col gap-3 bg-bg-elev p-6"
              >
                <span className="text-navy" aria-hidden="true">
                  {item.icon}
                </span>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-navy">
                  {item.label}
                </p>
                <p className="font-sans text-[13px] leading-[1.55] text-ink-dim">
                  {item.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.4 Products */}
      <section id="portfolio" className="border-b border-line">
        <div className="mx-auto max-w-(--container-wrap) px-5 py-24 md:px-9 md:py-32">
          <Reveal>
            <SectionHeader
              number="02"
              label="Portfolio"
              lede="Six platforms designed to interoperate. Each is deployable on its own; together they form a single operational spine for command, intelligence, training, administration, and heritage."
            >
              Six platforms.{" "}
              <em className="italic font-normal text-navy">
                One operational spine.
              </em>
            </SectionHeader>
          </Reveal>

          <Reveal delay={1} className="mt-16">
            <div className="grid grid-cols-1 gap-px bg-line-hi sm:grid-cols-2 lg:grid-cols-3">
              {PRODUCTS.map((p) => (
                <ProductCard key={p.code} {...p} />
              ))}
            </div>
          </Reveal>

          <Reveal delay={2} className="mt-12 flex justify-end">
            <Button href="/products" variant="outline">
              View All Products
            </Button>
          </Reveal>
        </div>
      </section>

      {/* 5.5 Why Scaan */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-(--container-wrap) px-5 py-24 md:px-9 md:py-32">
          <Reveal>
            <SectionHeader number="03" label="Why Scaan">
              Engineered for the{" "}
              <em className="italic font-normal text-navy">
                operational reality
              </em>{" "}
              — not the demo room.
            </SectionHeader>
          </Reveal>

          <Reveal delay={1} className="mt-16">
            <div className="grid grid-cols-1 gap-px bg-line-hi md:grid-cols-2">
              {PILLARS.map((p) => (
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

      {/* 5.6 Approach */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-(--container-wrap) px-5 py-24 md:px-9 md:py-32">
          <Reveal>
            <SectionHeader number="04" label="Our Approach">
              Discovery with operators. Indigenous secure development.{" "}
              <em className="italic font-normal text-navy">
                Long-horizon support.
              </em>
            </SectionHeader>
          </Reveal>

          <Reveal delay={1} className="mt-16">
            <ApproachBar>
              {APPROACH.map((step, i, arr) => (
                <ApproachStep
                  key={step.phase}
                  phase={step.phase}
                  name={step.name}
                  body={step.body}
                  last={i === arr.length - 1}
                />
              ))}
            </ApproachBar>
          </Reveal>
        </div>
      </section>

      {/* 5.7 Capabilities band */}
      <CapabilitiesTicker />

      {/* 5.8 Closing CTA */}
      <section className="bg-bg-elev">
        <div className="mx-auto max-w-(--container-wrap) px-5 py-24 md:px-9 md:py-32">
          <div className="grid gap-12 md:grid-cols-[1fr_1fr]">
            <Reveal>
              <MonoLabel size="sm">
                <b className="font-bold text-red">05 /</b>{" "}
                <span className="text-ink-mute">Contact</span>
              </MonoLabel>
              <h2 className="mt-6 font-serif font-light text-[clamp(34px,5vw,64px)] leading-[1.02] tracking-[-0.025em] text-ink">
                Building software for the{" "}
                <em className="italic font-normal text-navy">
                  next operational decade.
                </em>{" "}
                Talk to us.
              </h2>
            </Reveal>

            <Reveal delay={1} className="flex flex-col gap-10">
              <p className="max-w-[44ch] font-sans text-lg leading-[1.55] text-ink-dim">
                Whether you&apos;re a defence procurement office, a serving unit, or
                a government CIO — we&apos;re ready when you are. Briefings are
                conducted on your premises or ours.
              </p>
              <div>
                <Button href="/contact" variant="solid">
                  Schedule a Briefing
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-px border-t border-line bg-line pt-px">
                {CONTACTS.map((c) => (
                  <div key={c.label} className="bg-bg-elev p-5">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-mute">
                      {c.label}
                    </p>
                    <p className="mt-2 font-sans text-[15px] text-ink">
                      {c.value}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
