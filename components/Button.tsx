import Link from "next/link";

/*
 * SPEC.md §4.1. Mono uppercase 11px / 0.16em / weight 700, with the .arr CSS
 * arrow indicator. Two variants:
 *  - solid:   navy fill → red fill on hover
 *  - outline: navy 1.5px border, navy text → navy fill + white text on hover
 * Renders as <a> (next/link) when `href` is set, otherwise <button>.
 */
type Variant = "solid" | "outline";

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type AnchorProps = CommonProps & {
  href: string;
  type?: never;
  onClick?: never;
};

type ButtonProps = CommonProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

type Props = AnchorProps | ButtonProps;

const base =
  "group inline-flex items-center gap-3 border-[1.5px] px-[18px] py-[11px] font-mono text-[11px] font-bold uppercase tracking-[0.16em] transition-colors duration-200";

const variantClass: Record<Variant, string> = {
  solid:
    "border-navy bg-navy text-white hover:border-red hover:bg-red",
  outline:
    "border-navy bg-transparent text-navy hover:bg-navy hover:text-white",
};

const arrowClass =
  "arr transition-transform duration-200 ease-out group-hover:translate-x-1";

export default function Button(props: Props) {
  const { variant = "solid", className = "", children } = props;
  const cls = `${base} ${variantClass[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={cls}>
        <span>{children}</span>
        <span aria-hidden="true" className={arrowClass} />
      </Link>
    );
  }

  const { type = "button", onClick } = props as ButtonProps;
  return (
    <button type={type} onClick={onClick} className={cls}>
      <span>{children}</span>
      <span aria-hidden="true" className={arrowClass} />
    </button>
  );
}
