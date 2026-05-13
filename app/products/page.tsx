import type { Metadata } from "next";

import Button from "@/components/Button";
import MonoLabel from "@/components/MonoLabel";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

import { PRODUCTS } from "@/content/products";

export const metadata: Metadata = {
  title: "Products — Scaan Technologies",
  description:
    "Six platforms forming an operational spine for the Indian Defence Forces and Government of India: OneCommand, INDEA, ATMA, HEART, UNITI, MEMORIAL.",
};

/*
 * /products — index page (Task 3.1, SPEC.md §6).
 * Sections: hero · product grid · connected-suite narrative · CTA.
 * The grid is the same data the homepage shows in its Portfolio section,
 * but this page is the destination for "View All Products" links and gives
 * the connected-suite story room to breathe.
 */
export default function ProductsIndexPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative border-b border-line">
        <div className="mx-auto max-w-(--container-wrap) px-5 pb-20 pt-20 md:px-9 md:pb-28 md:pt-28">
          <div className="mb-12">
            <MonoLabel size="sm">
              <b className="font-bold text-red">00 /</b>{" "}
              <span className="text-ink-mute">Portfolio</span>
            </MonoLabel>
          </div>

          <h1 className="max-w-[20ch] font-serif font-light text-[clamp(40px,7vw,96px)] leading-[0.95] tracking-[-0.025em] text-ink">
            The Scaan platforms —{" "}
            <em className="italic font-normal text-navy">
              designed to interoperate.
            </em>
          </h1>

          <Reveal delay={1} className="mt-12 max-w-[60ch]">
            <p className="font-sans text-lg leading-[1.6] text-ink-dim">
              Six indigenous platforms. Each is deployable on its own; together
              they form a single operational spine spanning command, sovereign
              AI, training, administration, unit operations, and heritage.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Product grid */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-(--container-wrap) px-5 py-24 md:px-9 md:py-32">
          <Reveal>
            <SectionHeader
              number="01"
              label="Platforms"
              lede="Each platform has its own technical lead, its own deployment story, and its own customer profile. They share design language, security posture, and the operational spine that makes them work together."
            >
              All six,{" "}
              <em className="italic font-normal text-navy">in one place.</em>
            </SectionHeader>
          </Reveal>

          <Reveal delay={1} className="mt-16">
            <div className="grid grid-cols-1 gap-px bg-line-hi sm:grid-cols-2 lg:grid-cols-3">
              {PRODUCTS.map((p) => (
                <ProductCard key={p.code} {...p} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Connected suite narrative */}
      <section className="border-b border-line bg-bg-elev">
        <div className="mx-auto max-w-(--container-wrap) px-5 py-24 md:px-9 md:py-32">
          <Reveal>
            <SectionHeader
              number="02"
              label="The Spine"
              lede="Indigenous defence software has historically meant point solutions stitched together at the boundary. The Scaan portfolio is engineered the other way around — as a single operational spine that exposes specialised surfaces."
            >
              One spine,{" "}
              <em className="italic font-normal text-navy">
                six operational surfaces.
              </em>
            </SectionHeader>
          </Reveal>

          <Reveal delay={1} className="mt-16 grid gap-12 md:grid-cols-[240px_1fr]">
            <div />
            <div className="max-w-[64ch] space-y-6 font-sans text-lg leading-[1.65] text-ink-dim">
              <p>
                Identity, classification handling, audit, and replication are
                shared services across every platform. Plans authored in
                OneCommand carry their classification labels into INDEA&apos;s
                retrieval surface. Skill assessments in ATMA inform readiness
                visualisations rendered on OneCommand. Personnel changes in
                HEART flow into UNITI&apos;s unit operating picture.
              </p>
              <p>
                Each platform stands on its own — buy any one of them, deploy
                it, run it standalone — but adopt two and they reinforce. Adopt
                the full spine and your organisation runs on a single
                indigenous substrate.
              </p>
            </div>
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
                Briefings cover one platform —{" "}
                <em className="italic font-normal text-navy">
                  or the full spine.
                </em>
              </h2>
            </Reveal>

            <Reveal delay={1} className="flex flex-col gap-8">
              <p className="max-w-[44ch] font-sans text-lg leading-[1.55] text-ink-dim">
                Tell us which surfaces matter for your operation. We&apos;ll
                tailor the briefing to those — and to the deployment posture
                you actually need.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="solid">
                  Schedule a Briefing
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
