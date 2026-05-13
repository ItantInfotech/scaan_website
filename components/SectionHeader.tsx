import MonoLabel from "./MonoLabel";

/*
 * SPEC.md §4.4. Two-column grid (240px label + flex H2 + lede), collapses to
 * single column below 780px. Section number is red, label text is mute.
 */
type Props = {
  number: string;
  label: string;
  children: React.ReactNode;
  lede?: React.ReactNode;
  className?: string;
};

export default function SectionHeader({
  number,
  label,
  children,
  lede,
  className = "",
}: Props) {
  return (
    <div
      className={`grid gap-x-12 gap-y-6 md:grid-cols-[240px_1fr] ${className}`}
    >
      <div className="pt-2">
        <MonoLabel size="sm">
          <b className="text-red font-bold">{number} /</b>{" "}
          <span className="text-ink-mute">{label}</span>
        </MonoLabel>
      </div>
      <div>
        <h2 className="font-serif font-light text-[clamp(34px,5vw,64px)] leading-[1.02] tracking-[-0.025em] text-ink">
          {children}
        </h2>
        {lede ? (
          <p className="mt-6 max-w-[60ch] font-sans text-lg leading-[1.55] text-ink-dim">
            {lede}
          </p>
        ) : null}
      </div>
    </div>
  );
}
