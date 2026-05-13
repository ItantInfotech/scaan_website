/*
 * SPEC.md §4.2. Live-status badge for the hero ("Mission-Grade · Sovereign").
 * 1.5px navy border on white; JetBrains Mono uppercase 10px, tracking 0.22em.
 * 7px red dot at left pulses every 2.4s — pulse keyframe lives in globals.css.
 */
type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function Stamp({ className = "", children }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 border-[1.5px] border-navy bg-white px-3 py-1.5 ${className}`}
    >
      <span
        aria-hidden="true"
        className="block h-[7px] w-[7px] rounded-full bg-red motion-safe:animate-[pulse_2.4s_ease-in-out_infinite]"
      />
      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-navy">
        {children}
      </span>
    </span>
  );
}
