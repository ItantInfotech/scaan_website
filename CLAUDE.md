# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository status

This is a **pre-implementation repo.** Only `SPEC.md` exists — no code, no `package.json`, no git history. The website has not been scaffolded yet. The first implementation task is to bootstrap the Next.js project per §9 of the spec.

There is no build, lint, or test command yet. They will be the standard Next.js / Tailwind toolchain once scaffolded (`pnpm dev`, `pnpm build`, `pnpm lint`).

## Sources of truth

- **`SPEC.md`** — the build specification. Read it before any non-trivial change. Section numbers below refer to it.
- **`scaan-technologies-home-white-navy-red.html`** — referenced as the visual prototype. **Not yet in this repo** — request it from the user before building visuals. When the spec and the prototype disagree:
  - **Visual detail** (treatment, spacing, interaction): prototype wins.
  - **Copy or structure**: spec wins.

## What this site is (and isn't)

Scaan Technologies is an indigenous defence-tech company selling to the Indian Defence Forces and Government of India. The site is a **lead-gen / credibility marketing site**, not a SaaS product surface.

**Non-goals (do not propose these):**
- Pricing pages, signup flows, public dashboards
- Public product trials (demos are sales-gated)
- Public blog/news at v1
- Client-side-routed SPA framework for marketing pages (kills SEO)
- WordPress

**Tone:** Authoritative, calm, defence-grade gravitas. No startup-speak, no playful copy, no heavy motion (defence buyers read it as unserious).

## Tech stack (locked by spec §2)

- Next.js 14+ **App Router**, TypeScript
- Tailwind CSS with custom design tokens in `tailwind.config.ts` (see §9 of spec for the exact `theme.extend` shape)
- Fonts via `next/font/google`: **Fraunces** (display serif, variable), **Manrope** (body), **JetBrains Mono** (tactical labels)
- Inline SVG icons — no icon library
- Animations: CSS transitions + a single shared `IntersectionObserver` for scroll reveals. No animation library.
- Forms: Server Action / API route + transactional email (Resend, Postmark, or AWS SES)
- Analytics: Plausible or self-hosted Umami — **not** Google Analytics (privacy concern for the audience)
- **Avoid Google reCAPTCHA** on forms (same reason). Use Turnstile or similar.

Acceptable alternative if the user prefers: Astro + Tailwind. Do not silently substitute another framework.

## Brand system — non-negotiable rules

The brand runs on a **strict three-color hierarchy**: white base, navy accent, red punctuation. Full token table is in §3.1; the rules that govern *every* component:

- **Navy (`#0E2452`) does ~80% of accent work.** Italics in headlines, all icons (stroke-only, `currentColor`), primary buttons, logo, product codes, the capabilities band background.
- **Red (`#B12A2F`) does ~20% and only as punctuation.** Logo crosshair, the pulsing live-status dot, section numbers (`01 /`, `02 /`…), "Phase I/II/III/IV" labels, hover-only highlights, the 2px top-border that animates in on product card hover. **Never** large red fills, never red for paragraph emphasis, never red as an alert color.
- **Italics in display headlines always carry navy + weight 400.** That's the primary emphasis mechanism. Use 1–2 italics per headline maximum.
- **The Indian tricolor in the "Made in India" badge stays exact** (`#FF9933` / `#FFFFFF` / `#138808`). It's a national symbol, not a brand element — do not re-color it.
- **Navy and red hex values are placeholders inferred from "navy & red like the logo."** Flag to the user that the official brand hex codes should be confirmed before production — they're a single find-and-replace later.

Icons: 24×24 viewBox, **stroke-only**, `stroke-width: 1.3–1.5`, color via `currentColor` so the container's navy bleeds through.

Background atmosphere: fixed layer with two low-opacity radial gradients (navy top-left, faint red bottom-right) + an SVG topographic-line overlay. **No paper grain / noise** — that was the discarded parchment variant.

## Component library (§4)

Build these as reusable React components before composing pages. The spec defines them precisely; key cross-cutting notes:

- Button text is always **JetBrains Mono uppercase, 11px, letter-spacing 0.16em, weight 700**, with a CSS-built right-arrow indicator (`.arr` in prototype).
- Mono labels (coordinates, file numbers, section numbers, phase labels) are JetBrains Mono 10–11px uppercase with letter-spacing 0.18–0.22em.
- Grids that look hairline-divided (product cards, pillar cards) use the **`grid-background-color` trick**: 1px gaps with a `var(--line-hi)` background showing through.
- `<Reveal>` wraps anything that fades up on scroll; it must share a single `IntersectionObserver` per page (threshold 0.12, rootMargin -40px). Supports `data-delay="1..5"` for 80ms-stagger.

## Accessibility & performance (load-bearing, not aspirational)

- Target **WCAG 2.1 AA** — defence/government buyers care.
- Keep a visible navy 2px focus ring. **Never** remove focus indicators.
- All non-essential animation must be gated by `@media (prefers-reduced-motion: reduce)`.
- Performance budget: **LCP ≤ 2.5s on 4G, CLS ≤ 0.1, client JS ≤ 100KB compressed on homepage.** This is a marketing site — most of it should be static HTML/CSS.
- No third-party scripts beyond the analytics pixel without justification.

## Implementation phasing (§10)

Build order matters because the homepage drives the design system that every other page reuses:

1. **Phase 1 — Homepage only.** Scaffold + tokens + fonts → component library in isolation → compose homepage section by section → scroll reveals + hero animations → mobile menu drawer.
2. **Phase 2 — `/about`, `/contact` (with form), `/products/onecommand`, `/products/indea`.**
3. **Phase 3 — Remaining product pages (ATMA, HEART, UNITI, MEMORIAL), `/capabilities`, `/security`, `/careers`, SEO pass.**
4. **Phase 4 — Launch prep:** real copy/photos, confirmed brand hex codes, perf budget verification, monitoring (Sentry), DNS/SSL.

Other pages should be scaffolded as routes with placeholder sections that reuse the homepage header/footer — detailed specs land per page once the homepage ships.

## Open questions to surface (don't silently decide these)

These are flagged in §16 of the spec. If the user's request would commit to one of them, ask first:

1. Are the navy/red hex codes the actual brand colors or placeholders?
2. Is there an existing logo SVG, or is the prototype's typographic mark the final logo?
3. Hosting: Vercel global vs. Indian-hosted (AWS Mumbai / CtrlS / Tata Communications) — the audience may push toward Indian infrastructure.
4. Are product names (OneCommand, INDEA, ATMA, HEART, UNITI, MEMORIAL) final?
5. Contact form destination — transactional email only, or CRM integration (HubSpot / Salesforce / Zoho)?
6. Careers: ATS-backed (Lever / Greenhouse) or static "email us" page for v1?
