/*
 * Founder/leadership card for /about (SPEC.md §6 — about page).
 * Photo placeholder is a serif-initials block; swap for <Image> once client
 * sends headshots (SPEC.md §11.3).
 */
import MonoLabel from "./MonoLabel";

type Props = {
  name: string;
  role: string;
  service: string;
  bio: string;
  initials: string;
};

export default function FounderCard({
  name,
  role,
  service,
  bio,
  initials,
}: Props) {
  return (
    <article className="flex flex-col gap-6 bg-white p-8 md:p-10">
      <div
        aria-hidden="true"
        className="relative flex aspect-[4/5] items-center justify-center overflow-hidden border border-navy bg-bg-elev"
      >
        <span className="font-serif text-[clamp(64px,12vw,112px)] font-light tracking-[-0.02em] text-navy">
          {initials}
        </span>
        {/* Subtle navy crosshair in the corner — same visual language as the logo */}
        <span className="absolute right-3 top-3 text-navy/40">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square">
            <line x1="7" y1="2" x2="7" y2="12" />
            <line x1="2" y1="7" x2="12" y2="7" />
          </svg>
        </span>
      </div>
      <div>
        <MonoLabel variant="mute" size="xs">{service}</MonoLabel>
        <h3 className="mt-3 font-serif text-[28px] font-normal leading-[1.1] tracking-[-0.01em] text-ink">
          {name}
        </h3>
        <p className="mt-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-navy">
          {role}
        </p>
      </div>
      <p className="font-sans text-[14px] leading-[1.6] text-ink-dim">{bio}</p>
    </article>
  );
}
