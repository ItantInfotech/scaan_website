import type { Metadata } from "next";

import Button from "@/components/Button";
import CapabilityBlock from "@/components/CapabilityBlock";
import MonoLabel from "@/components/MonoLabel";
import ProductHero from "@/components/ProductHero";
import RelatedProducts from "@/components/RelatedProducts";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

import { PRODUCTS } from "@/content/products";
import {
  AT_A_GLANCE,
  CAPABILITIES,
  DEPLOYMENT,
  HERO,
  PAGE_CTA,
  USE_CASES,
} from "@/content/products/onecommand";

const product = PRODUCTS.find((p) => p.code === "SCN-01")!;

export const metadata: Metadata = {
  title: `${product.name} — Scaan Technologies`,
  description: `${product.name} (${product.code}): geospatial command and planning for joint operations. Mission rehearsal, common operational picture, and inter-service coordination — on-prem and air-gapped.`,
};

/*
 * /products/onecommand — SPEC.md §6 (P1) and §10.2 (Task 2.4).
 * Sections: hero · at-a-glance · capabilities · deployment · use cases ·
 * related products · CTA. The reusable ProductHero / CapabilityBlock /
 * RelatedProducts components are reused for 2.5 (INDEA) onward.
 */
export default function OneCommandPage() {
  return (
    <>
      <ProductHero
        code={product.code}
        category={product.category}
        name={product.name}
        subtitle={product.subtitle}
        tagline={HERO.tagline}
        description={HERO.description}
        secondaryCta={{ label: "Schedule a Briefing", href: "/contact" }}
      />

      {/* At-a-glance */}
      <section className="border-b border-line bg-bg-elev">
        <div className="mx-auto max-w-(--container-wrap) px-5 py-12 md:px-9 md:py-16">
          <div className="grid grid-cols-2 gap-px bg-line lg:grid-cols-4">
            {AT_A_GLANCE.map((item) => (
              <div key={item.label} className="flex flex-col gap-2 bg-bg-elev p-6">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-ink-mute">
                  {item.label}
                </p>
                <p className="font-serif text-[20px] font-normal leading-tight tracking-[-0.01em] text-navy">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-(--container-wrap) px-5 py-24 md:px-9 md:py-32">
          <Reveal>
            <SectionHeader
              number="01"
              label="Capabilities"
              lede="OneCommand is built around three load-bearing capabilities. Each is deployable on its own; together they form the operational spine."
            >
              Mission planning, operational truth,{" "}
              <em className="italic font-normal text-navy">
                joint coordination.
              </em>
            </SectionHeader>
          </Reveal>

          <div className="mt-20 space-y-24 md:space-y-32">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.number}>
                <CapabilityBlock
                  number={c.number}
                  label={c.label}
                  headline={c.headline}
                  body={c.body}
                  bullets={c.bullets}
                  reverse={i % 2 === 1}
                  visualCode={`${product.code}.${c.number}`}
                  visualName={c.label}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment */}
      <section className="border-b border-line bg-bg-elev">
        <div className="mx-auto max-w-(--container-wrap) px-5 py-24 md:px-9 md:py-32">
          <Reveal>
            <SectionHeader
              number="02"
              label="Deployment"
              lede="Defence software lives where its operators do — not in a cloud region somebody else manages. OneCommand is engineered for the deployment posture the mission actually requires."
            >
              Engineered for{" "}
              <em className="italic font-normal text-navy">
                the environment you operate in.
              </em>
            </SectionHeader>
          </Reveal>

          <Reveal delay={1} className="mt-16">
            <div className="grid grid-cols-1 gap-px bg-line-hi md:grid-cols-2">
              {DEPLOYMENT.map((d) => (
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

      {/* Use cases */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-(--container-wrap) px-5 py-24 md:px-9 md:py-32">
          <Reveal>
            <SectionHeader
              number="03"
              label="Use Cases"
              lede="Anonymised examples drawn from active engagements. Formation and unit identifiers are illustrative."
            >
              How operators are using{" "}
              <em className="italic font-normal text-navy">OneCommand.</em>
            </SectionHeader>
          </Reveal>

          <Reveal delay={1} className="mt-16">
            <ol className="flex flex-col">
              {USE_CASES.map((u, i) => (
                <li
                  key={u.formation}
                  className="grid gap-6 border-t border-line py-10 last:border-b md:grid-cols-[240px_1fr] md:gap-12"
                >
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-red">
                      0{i + 1}
                    </p>
                    <p className="mt-3 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-navy">
                      {u.formation}
                    </p>
                  </div>
                  <div>
                    <h4 className="max-w-[28ch] font-serif text-[24px] font-normal leading-[1.2] tracking-[-0.01em] text-ink">
                      {u.title}
                    </h4>
                    <p className="mt-4 max-w-[52ch] font-sans text-[15px] leading-[1.6] text-ink-dim">
                      {u.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Related products */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-(--container-wrap) px-5 py-24 md:px-9 md:py-32">
          <Reveal>
            <SectionHeader number="04" label="Related">
              Other platforms in the{" "}
              <em className="italic font-normal text-navy">
                operational spine.
              </em>
            </SectionHeader>
          </Reveal>

          <Reveal delay={1} className="mt-16">
            <RelatedProducts currentCode={product.code} limit={3} />
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
