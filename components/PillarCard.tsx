/*
 * SPEC.md §4.6. White card, min-height 240px; numbered red mono label at top
 * ("01 — Defence-First Engineering"), Fraunces 28px headline with navy italic
 * emphasis below, then body paragraph (max 42ch). 2-col grid with 1px hairline
 * gaps (bg-line-hi on the parent).
 */
type Props = {
  number: string;
  label: string;
  children: React.ReactNode;
  body: React.ReactNode;
};

export default function PillarCard({ number, label, children, body }: Props) {
  return (
    <div className="flex min-h-[240px] flex-col gap-5 bg-white p-10 md:p-12">
      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-red">
        {number} —{" "}
        <span className="text-ink-mute font-semibold">{label}</span>
      </p>
      <h3 className="font-serif text-[28px] font-normal leading-[1.15] tracking-[-0.01em] text-ink">
        {children}
      </h3>
      <p className="max-w-[42ch] font-sans text-[15px] leading-[1.6] text-ink-dim">
        {body}
      </p>
    </div>
  );
}
