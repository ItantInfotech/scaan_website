import type { ReactNode } from "react";

import MonoLabel from "./MonoLabel";

/*
 * Shared layout for legal / prose pages (SPEC.md §6: /privacy, /terms,
 * /responsible-disclosure). Single-column reading layout with mono-numbered
 * sections divided by hairlines. A red "draft pending counsel review" banner
 * keeps placeholder copy from being mistaken for final legal text (§11.9).
 */
export type ProseSection = {
  number: string;
  label: string;
  body: ReactNode;
};

type Props = {
  metaNumber: string;
  metaLabel: string;
  title: string;
  lastUpdated: string;
  intro: ReactNode;
  sections: readonly ProseSection[];
  isDraft?: boolean;
};

export default function ProsePage({
  metaNumber,
  metaLabel,
  title,
  lastUpdated,
  intro,
  sections,
  isDraft = true,
}: Props) {
  return (
    <>
      {/* Hero */}
      <section className="relative border-b border-line">
        <div className="mx-auto max-w-(--container-wrap) px-5 pb-16 pt-20 md:px-9 md:pb-20 md:pt-24">
          {isDraft ? (
            <div className="mb-10 inline-flex items-center gap-3 border border-red px-3 py-1.5">
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-red">
                · Draft
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-mute">
                Placeholder pending counsel review
              </span>
            </div>
          ) : null}

          <MonoLabel size="sm">
            <b className="font-bold text-red">{metaNumber} /</b>{" "}
            <span className="text-ink-mute">{metaLabel}</span>
          </MonoLabel>

          <h1 className="mt-6 max-w-[20ch] font-serif font-light text-[clamp(40px,6vw,80px)] leading-[0.98] tracking-[-0.025em] text-ink">
            {title}
          </h1>

          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
            Last updated · {lastUpdated}
          </p>

          <div className="mt-10 max-w-[68ch] space-y-5 font-sans text-[17px] leading-[1.65] text-ink-dim">
            {typeof intro === "string" ? <p>{intro}</p> : intro}
          </div>
        </div>
      </section>

      {/* Sections */}
      <section>
        <div className="mx-auto max-w-(--container-wrap) px-5 py-16 md:px-9 md:py-24">
          <ol className="flex flex-col">
            {sections.map((s, i) => (
              <li
                key={s.number}
                id={`section-${s.number}`}
                className="grid gap-6 border-t border-line py-12 last:border-b md:grid-cols-[180px_1fr] md:gap-12"
              >
                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-red">
                    {s.number}
                  </p>
                  <p className="mt-3 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-navy">
                    {s.label}
                  </p>
                </div>
                <div className="max-w-[70ch] space-y-5 font-sans text-[16px] leading-[1.7] text-ink">
                  {s.body}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
