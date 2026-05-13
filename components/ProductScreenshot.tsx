/*
 * Product screenshot placeholder. Renders an intentional-looking visual frame
 * with crosshair + faint grid pattern + product code, so pages don't feel
 * broken while real screenshots are pending (SPEC.md §11.4). Replace this
 * component's body with <Image> when client supplies assets.
 */
type Props = {
  code: string;
  name: string;
  aspect?: "16/10" | "16/9" | "4/3";
  className?: string;
};

const aspectClass: Record<NonNullable<Props["aspect"]>, string> = {
  "16/10": "aspect-[16/10]",
  "16/9": "aspect-[16/9]",
  "4/3": "aspect-[4/3]",
};

export default function ProductScreenshot({
  code,
  name,
  aspect = "16/10",
  className = "",
}: Props) {
  return (
    <div
      className={`relative w-full overflow-hidden border-[1.5px] border-navy bg-bg-elev ${aspectClass[aspect]} ${className}`}
    >
      {/* Top chrome */}
      <div className="absolute inset-x-6 top-4 flex items-center justify-between">
        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-red">
          · {code}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
          Preview
        </p>
      </div>

      {/* Faint grid */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 h-full w-full opacity-[0.18]"
      >
        <defs>
          <pattern
            id={`grid-${code}`}
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="var(--navy)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${code})`} />
      </svg>

      {/* Centerpiece */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          stroke="var(--navy)"
          strokeWidth="1"
          className="opacity-30"
        >
          <circle cx="32" cy="32" r="26" />
          <line x1="4" y1="32" x2="60" y2="32" />
          <line x1="32" y1="4" x2="32" y2="60" />
          <circle cx="32" cy="32" r="2.5" fill="var(--red)" stroke="none" />
        </svg>
        <p className="font-serif text-[clamp(24px,3vw,32px)] font-light tracking-[-0.01em] text-navy/45">
          {name}
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
          Product visual · to be supplied
        </p>
      </div>
    </div>
  );
}
