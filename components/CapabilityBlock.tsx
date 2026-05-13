import type { ReactNode } from "react";

import ProductScreenshot from "./ProductScreenshot";

/*
 * Single capability section for product pages. Two-column layout with
 * alternating side per block; pass `reverse` to flip image and text.
 * Visual defaults to a ProductScreenshot placeholder until client supplies
 * real per-capability mockups (SPEC.md §11.4).
 */
type Props = {
  number: "01" | "02" | "03" | "04" | "05";
  label: string;
  headline: ReactNode;
  body: ReactNode;
  bullets?: readonly string[];
  reverse?: boolean;
  // For the placeholder; replace with <Image> once mockups exist
  visualCode: string;
  visualName: string;
};

export default function CapabilityBlock({
  number,
  label,
  headline,
  body,
  bullets,
  reverse = false,
  visualCode,
  visualName,
}: Props) {
  return (
    <div
      className={`grid items-center gap-12 lg:gap-20 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
    >
      <div>
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-red">
          {number} —{" "}
          <span className="font-semibold text-ink-mute">{label}</span>
        </p>
        <h3 className="mt-5 max-w-[20ch] font-serif text-[clamp(28px,3.6vw,44px)] font-light leading-[1.1] tracking-[-0.015em] text-ink">
          {headline}
        </h3>
        <div className="mt-6 max-w-[52ch] space-y-4 font-sans text-[15px] leading-[1.65] text-ink-dim">
          {typeof body === "string" ? <p>{body}</p> : body}
        </div>
        {bullets && bullets.length > 0 ? (
          <ul className="mt-8 flex flex-col">
            {bullets.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-4 border-t border-line py-3.5 last:border-b"
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
        ) : null}
      </div>

      <div>
        <ProductScreenshot code={visualCode} name={visualName} aspect="4/3" />
      </div>
    </div>
  );
}
