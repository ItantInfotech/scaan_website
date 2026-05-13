/*
 * SPEC.md §3.5. Fixed background layer behind all content:
 *  - Two soft radial gradients (navy top-left, faint red bottom-right)
 *  - SVG topographic-line overlay at ~0.18 navy / ~0.14 red opacity
 *
 * Mounts once at the layout level. html element provides the white base so
 * sections without an explicit background show the topo through.
 *
 * z-index: -1 so any positioned section background sits above it. Sections
 * with explicit `bg-bg-elev` / `bg-navy` cover it; the rest let it show.
 */
export default function TopoBg() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background: `
            radial-gradient(60% 50% at 0% 0%, color-mix(in oklab, var(--navy) 9%, transparent), transparent 70%),
            radial-gradient(55% 50% at 100% 100%, color-mix(in oklab, var(--red) 5%, transparent), transparent 70%)
          `,
        }}
      />
      <svg
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Navy contour band — tighter cadence */}
          <pattern
            id="topo-navy"
            x="0"
            y="0"
            width="240"
            height="240"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0,40 Q60,28 120,40 T240,40"
              fill="none"
              stroke="var(--navy)"
              strokeWidth="0.6"
            />
            <path
              d="M0,90 Q60,76 120,90 T240,90"
              fill="none"
              stroke="var(--navy)"
              strokeWidth="0.6"
            />
            <path
              d="M0,140 Q60,154 120,140 T240,140"
              fill="none"
              stroke="var(--navy)"
              strokeWidth="0.6"
            />
            <path
              d="M0,190 Q60,206 120,190 T240,190"
              fill="none"
              stroke="var(--navy)"
              strokeWidth="0.6"
            />
          </pattern>
          {/* Red contour band — looser cadence, offset phase */}
          <pattern
            id="topo-red"
            x="40"
            y="20"
            width="360"
            height="360"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0,70 Q90,52 180,70 T360,70"
              fill="none"
              stroke="var(--red)"
              strokeWidth="0.5"
            />
            <path
              d="M0,210 Q90,232 180,210 T360,210"
              fill="none"
              stroke="var(--red)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#topo-navy)" opacity="0.18" />
        <rect width="100%" height="100%" fill="url(#topo-red)" opacity="0.14" />
      </svg>
    </>
  );
}
