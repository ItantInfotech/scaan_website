import Link from "next/link";
import Logo from "./Logo";
import MadeInIndiaBadge from "./MadeInIndiaBadge";

/*
 * SPEC.md §5.9. Four-column footer (brand / Products / Company / Legal) on
 * pure white. Copyright in mono left, Made-in-India badge right.
 */
const PRODUCTS = [
  { href: "/products/onecommand", label: "OneCommand" },
  { href: "/products/indea", label: "INDEA" },
  { href: "/products/atma", label: "ATMA" },
  { href: "/products/heart", label: "HEART" },
  { href: "/products/uniti", label: "UNITI" },
  { href: "/products/memorial", label: "MEMORIAL" },
];

const COMPANY = [
  { href: "/about", label: "About" },
  { href: "/approach", label: "Approach" },
  { href: "/security", label: "Security" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

const LEGAL = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/responsible-disclosure", label: "Responsible Disclosure" },
];

function Column({
  heading,
  items,
}: {
  heading: string;
  items: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-ink-mute">
        {heading}
      </p>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="font-sans text-[14px] text-ink transition-colors hover:text-navy"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto max-w-(--container-wrap) px-5 py-20 md:px-9">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-6 max-w-[28ch] font-sans text-[14px] leading-[1.6] text-ink-dim">
              Indigenous defence software for the Indian Defence Forces and
              Government of India.
            </p>
          </div>
          <Column heading="Products" items={PRODUCTS} />
          <Column heading="Company" items={COMPANY} />
          <Column heading="Legal" items={LEGAL} />
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-(--container-wrap) flex-col items-center justify-between gap-4 px-5 py-6 md:flex-row md:px-9">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
            © {year} Scaan Technologies Pvt. Ltd. · All rights reserved.
          </p>
          <MadeInIndiaBadge />
        </div>
      </div>
    </footer>
  );
}
