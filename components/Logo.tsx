import Link from "next/link";

/*
 * SPEC.md §4.9: 34×34 navy-bordered square with red `+` crosshair inside;
 * "SCAAN" wordmark in navy Manrope 700, letter-spacing 0.22em; subtitle
 * "TECHNOLOGIES · IN" in mono mute, 9px.
 */
type Props = {
  href?: string;
  className?: string;
};

export default function Logo({ href = "/", className = "" }: Props) {
  return (
    <Link
      href={href}
      aria-label="Scaan Technologies — home"
      className={`group inline-flex items-center gap-3 ${className}`}
    >
      <span
        aria-hidden="true"
        className="relative flex h-[34px] w-[34px] items-center justify-center border-[1.5px] border-navy"
      >
        <span className="absolute inset-0 flex items-center justify-center text-red">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="square"
          >
            <line x1="7" y1="1" x2="7" y2="13" />
            <line x1="1" y1="7" x2="13" y2="7" />
          </svg>
        </span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-sans font-bold text-navy text-[15px] tracking-[0.22em]">
          SCAAN
        </span>
        <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] text-ink-mute">
          Technologies · IN
        </span>
      </span>
    </Link>
  );
}
