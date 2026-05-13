import type { ReactNode } from "react";

import Button from "./Button";
import MonoLabel from "./MonoLabel";
import ProductScreenshot from "./ProductScreenshot";

/*
 * Reusable product page hero (SPEC.md §6 product pages).
 * 2-column on desktop: left = meta + name + tagline + description + CTAs,
 * right = screenshot placeholder. Stacks on mobile.
 */
type Cta = { label: string; href: string };

type Props = {
  code: string;
  category: string;
  name: string;
  subtitle?: string;
  tagline: ReactNode;
  description: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
};

export default function ProductHero({
  code,
  category,
  name,
  subtitle,
  tagline,
  description,
  primaryCta = { label: "Request a Demo", href: "/contact" },
  secondaryCta,
}: Props) {
  return (
    <section className="relative border-b border-line">
      <div className="mx-auto max-w-(--container-wrap) px-5 pb-20 pt-20 md:px-9 md:pb-28 md:pt-28">
        {/* Meta row */}
        <div className="mb-12 flex flex-wrap items-center gap-x-5 gap-y-2">
          <MonoLabel variant="red" size="sm">· {code}</MonoLabel>
          <MonoLabel variant="mute" size="xs">{category}</MonoLabel>
        </div>

        <div className="grid items-start gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <h1 className="font-serif font-light text-[clamp(48px,8vw,112px)] leading-[0.95] tracking-[-0.025em] text-ink">
              {name}
            </h1>
            {subtitle ? (
              <p className="mt-3 font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-ink-mute">
                ({subtitle})
              </p>
            ) : null}

            <p className="mt-10 max-w-[28ch] font-serif text-[clamp(24px,2.6vw,34px)] font-light leading-[1.15] tracking-[-0.015em] text-ink">
              {tagline}
            </p>

            <p className="mt-8 max-w-[52ch] font-sans text-[17px] leading-[1.6] text-ink-dim">
              {description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={primaryCta.href} variant="solid">
                {primaryCta.label}
              </Button>
              {secondaryCta ? (
                <Button href={secondaryCta.href} variant="outline">
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          </div>

          <div className="lg:pt-8">
            <ProductScreenshot code={code} name={name} aspect="16/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
