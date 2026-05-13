import Link from "next/link";

/*
 * SPEC.md §4.5. White card; navy radial gradient fades in at top-right on hover;
 * 2px red top-border slides in left→right (scaleX 0→1, origin left); "Learn More"
 * goes navy→red; arrow translates 4px right.
 * Sits in a 3-col grid with 1px hairline gaps (bg-line-hi on the parent grid).
 */
type Props = {
  href: string;
  code: string;
  category: string;
  name: string;
  subtitle?: string;
  description: string;
};

export default function ProductCard({
  href,
  code,
  category,
  name,
  subtitle,
  description,
}: Props) {
  return (
    <Link
      href={href}
      className="group relative isolate flex h-full flex-col gap-8 overflow-hidden bg-white p-9 pb-8 transition-colors duration-300 hover:bg-bg-elev"
    >
      {/* Animated 2px red top border, slides left→right on hover */}
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-red transition-transform duration-[400ms] ease-out group-hover:scale-x-100"
      />
      {/* Hover radial — navy bleed in top-right */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 -z-10 h-[260px] w-[260px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--navy) 14%, transparent), transparent)",
        }}
      />

      <div className="flex items-baseline justify-between gap-4">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-mute">
          {category}
        </span>
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-navy">
          {code}
        </span>
      </div>

      <div>
        <h3 className="font-serif text-[42px] font-normal leading-none tracking-[-0.02em] text-ink">
          {name}
        </h3>
        {subtitle ? (
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
            ({subtitle})
          </p>
        ) : null}
      </div>

      <p className="max-w-[32ch] font-sans text-[15px] leading-[1.55] text-ink-dim">
        {description}
      </p>

      <span className="mt-auto inline-flex items-center gap-3 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-navy transition-colors duration-300 group-hover:text-red">
        Learn More
        <span
          aria-hidden="true"
          className="arr transition-transform duration-300 ease-out group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
