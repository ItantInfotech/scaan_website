/*
 * SPEC.md §4.3. Tactical mono label — JetBrains Mono, 10–11px, uppercase,
 * letter-spacing 0.18–0.22em. Variant drives color: section numbers/phase
 * labels use `red`, file numbers/coordinates use `navy`, captions use `mute`.
 */
type Variant = "navy" | "red" | "mute" | "white";
type Size = "xs" | "sm";

type Props = {
  variant?: Variant;
  size?: Size;
  as?: "span" | "p" | "div";
  className?: string;
  children: React.ReactNode;
};

const variantClass: Record<Variant, string> = {
  navy: "text-navy",
  red: "text-red",
  mute: "text-ink-mute",
  white: "text-white/90",
};

const sizeClass: Record<Size, string> = {
  xs: "text-[10px] tracking-[0.22em]",
  sm: "text-[11px] tracking-[0.18em]",
};

export default function MonoLabel({
  variant = "navy",
  size = "sm",
  as: As = "span",
  className = "",
  children,
}: Props) {
  return (
    <As
      className={`font-mono font-semibold uppercase ${sizeClass[size]} ${variantClass[variant]} ${className}`}
    >
      {children}
    </As>
  );
}
