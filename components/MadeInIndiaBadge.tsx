/*
 * SPEC.md §4.10 + §3.1: 1px navy border on white; mono uppercase
 * "Made in India" text in navy; tiny tricolor bar at left (14×10px,
 * three equal stacked bands). The tricolor is a national symbol —
 * do not re-color it with brand tokens.
 */
type Props = { className?: string };

export default function MadeInIndiaBadge({ className = "" }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-2 border border-navy bg-white px-2 py-1 ${className}`}
    >
      <span
        aria-hidden="true"
        className="flex h-[10px] w-[14px] flex-col border border-navy"
      >
        <b className="block h-1/3 flex-1" style={{ background: "var(--tri-saffron)" }} />
        <b className="block h-1/3 flex-1" style={{ background: "var(--tri-white)" }} />
        <b className="block h-1/3 flex-1" style={{ background: "var(--tri-green)" }} />
      </span>
      <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-navy">
        Made in India
      </span>
    </span>
  );
}
