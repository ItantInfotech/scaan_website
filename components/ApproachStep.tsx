/*
 * SPEC.md §4.7. Four-step horizontal bar — wrapper handles the 2px navy
 * top/bottom borders and the 1px navy hairline column dividers (gap-px +
 * bg-navy trick). Each ApproachStep is a single cell; the consumer marks
 * the last one with `last` so the red-chevron decoration is hidden.
 *
 * The chevron is a 16px square positioned straddling the divider on the
 * right edge of every non-last step.
 */
type StepProps = {
  phase: "I" | "II" | "III" | "IV";
  name: string;
  body: React.ReactNode;
  last?: boolean;
};

export function ApproachStep({ phase, name, body, last = false }: StepProps) {
  return (
    <div className="relative bg-white p-8 md:p-10">
      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-red">
        Phase {phase}
      </p>
      <h4 className="mt-4 font-serif text-[26px] font-normal leading-none tracking-[-0.01em] text-navy">
        {name}
      </h4>
      <p className="mt-4 max-w-[36ch] font-sans text-[14px] leading-[1.6] text-ink-dim">
        {body}
      </p>
      {!last ? (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 translate-x-1/2 items-center justify-center bg-white md:flex"
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="square"
            className="text-red"
          >
            <polyline points="3,1 7,5 3,9" />
          </svg>
        </span>
      ) : null}
    </div>
  );
}

type BarProps = {
  className?: string;
  children: React.ReactNode;
};

export function ApproachBar({ className = "", children }: BarProps) {
  return (
    <div
      className={`grid grid-cols-1 gap-px border-y-2 border-navy bg-navy sm:grid-cols-2 lg:grid-cols-4 ${className}`}
    >
      {children}
    </div>
  );
}
