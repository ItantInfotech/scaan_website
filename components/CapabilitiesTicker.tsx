/*
 * SPEC.md §4.8. Full-bleed navy band; centered "Capabilities · Disciplines"
 * label above; horizontal marquee below with 42px Fraunces white text and
 * red diamond (◆) separators in italic. The marquee is two identical tracks
 * side-by-side animated to translateX(-50%) for a seamless loop.
 *
 * Fade masks on left/right hide the wrap seam.
 */
const DEFAULT_ITEMS = [
  "AI & ML",
  "Geospatial & C2",
  "Secure Cloud & On-Prem",
  "Mobile",
  "Offline-First",
  "Cybersecurity",
  "DevSecOps",
  "Enterprise Engineering",
];

type Props = {
  items?: readonly string[];
};

export default function CapabilitiesTicker({ items = DEFAULT_ITEMS }: Props) {
  const segments = [...items, ...items];
  return (
    <section className="relative w-full overflow-hidden bg-navy py-20">
      <p className="mb-10 text-center font-mono text-[11px] font-semibold uppercase tracking-[0.32em] text-red-soft">
        Capabilities · Disciplines
      </p>
      <div className="relative">
        <div className="flex w-max whitespace-nowrap motion-safe:animate-[scroll_36s_linear_infinite]">
          {segments.map((item, i) => (
            <span key={i} className="flex items-center">
              <span className="font-serif text-[42px] font-light leading-none text-white">
                {item}
              </span>
              <span
                aria-hidden="true"
                className="mx-10 font-serif text-[42px] font-light italic leading-none text-red"
              >
                ◆
              </span>
            </span>
          ))}
        </div>
        {/* Edge fade masks — same color as the band */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-32"
          style={{
            background:
              "linear-gradient(to right, var(--navy), transparent)",
          }}
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-32"
          style={{
            background:
              "linear-gradient(to left, var(--navy), transparent)",
          }}
        />
      </div>
    </section>
  );
}
