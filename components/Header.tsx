"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import Button from "./Button";

/*
 * SPEC.md §5.1. Sticky 72px header with rgba(255,255,255,0.88) + 14px backdrop
 * blur and a 1px bottom hairline. Below 900px the nav collapses into a slide-in
 * drawer from the right (SPEC.md §8). Drawer items are >=48px tall and the
 * primary CTA pins to the bottom.
 */
const NAV = [
  { href: "/products", label: "Products" },
  { href: "/capabilities", label: "Capabilities" },
  { href: "/approach", label: "Approach" },
  { href: "/security", label: "Security" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
] as const;

export default function Header() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <header
        className="sticky top-0 z-40 h-[72px] border-b border-line backdrop-blur-[14px]"
        style={{ background: "rgba(255,255,255,0.88)" }}
      >
        <div className="mx-auto flex h-full max-w-(--container-wrap) items-center justify-between px-5 md:px-9">
        <Logo />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 lg:flex"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-[14px] font-medium text-ink transition-colors hover:text-navy"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="solid">
            Request a Demo
          </Button>
        </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen((v) => !v)}
            className="flex h-12 w-12 items-center justify-center text-navy lg:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
              {open ? (
                <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
                  <line x1="4" y1="4" x2="18" y2="18" />
                  <line x1="18" y1="4" x2="4" y2="18" />
                </g>
              ) : (
                <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
                  <line x1="3" y1="6" x2="19" y2="6" />
                  <line x1="3" y1="11" x2="19" y2="11" />
                  <line x1="3" y1="16" x2="19" y2="16" />
                </g>
              )}
            </svg>
          </button>
        </div>
      </header>

      {/*
        Mobile drawer rendered as a sibling, NOT a child, of <header>.
        The header uses backdrop-filter, which creates a containing block for
        position: fixed descendants — putting the drawer inside it would trap
        it in the 72px-tall header. Sibling placement lets the drawer use
        the viewport as its containing block.
      */}
      <div
        id="mobile-drawer"
        aria-hidden={!open}
        className={`fixed inset-0 z-30 lg:hidden ${open ? "" : "pointer-events-none"}`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-navy/40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-white pt-[72px] shadow-xl transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <nav aria-label="Mobile" className="flex flex-1 flex-col gap-1 px-6 py-8">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex h-12 items-center font-sans text-[16px] font-medium text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="border-t border-line p-6">
            <Button href="/contact" variant="solid" className="w-full justify-between">
              Request a Demo
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
