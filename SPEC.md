# Scaan Technologies — Website Build Specification

**Version:** 1.0  
**Last updated:** 13 May 2026  
**Reference prototype:** `scaan-technologies-home-white-navy-red.html`  
**Tone:** Authoritative, calm, confident. No startup-speak. Defence-grade gravitas.

This spec is the source of truth for building the Scaan Technologies marketing website. The accompanying HTML prototype is the visual reference for treatment, spacing, and interaction patterns. When this document and the prototype disagree on visual detail, the prototype wins. When they disagree on copy or structure, this document wins.

---

## 1. Project Overview

**Company:** Scaan Technologies — indigenous defence-tech company building software for the Indian Defence Forces and Government of India.

**Site purpose:** Lead generation and credibility surface for defence and government buyers. Primary CTAs are "Request a Demo" and "Schedule a Briefing." Secondary goals: recruiting (Careers) and credentialing (About, Security).

**Audience:** Defence procurement officers, serving and retired military leaders, government CIOs, security-cleared partners, and prospective hires (engineers + veterans).

**Tagline:** *Indigenous. Intelligent. Mission-Ready.*

**Non-goals:**
- Not a SaaS self-serve site — no pricing pages, no signup flows, no public dashboards.
- No public product trials — demos are gated through a sales conversation.
- No public news/blog at v1. Can be added later if needed.

---

## 2. Tech Stack Recommendation

### Primary recommendation: Next.js 14+ (App Router) + Tailwind CSS

**Why:**
- SEO-first rendering (SSG for marketing pages)
- Easy to add API routes for the contact form when needed
- Strong ecosystem, easy deployment (Vercel or self-hosted)
- Plays well with the design-token approach below
- Future-proof if they ever add a customer portal or gated content

**Stack:**
- **Framework:** Next.js 14+ with App Router, TypeScript
- **Styling:** Tailwind CSS with custom design tokens (configured in `tailwind.config.ts`)
- **Fonts:** Self-hosted via `next/font/google` — Fraunces (variable), Manrope, JetBrains Mono
- **Icons:** Inline SVG (matches what's in the prototype — no icon library needed)
- **Animations:** CSS transitions + IntersectionObserver for scroll reveals. No animation library required.
- **Forms:** Server Action or API route + a transactional email service (Resend, Postmark, or AWS SES)
- **Analytics:** Plausible or self-hosted Umami (privacy-respecting; relevant for defence audience)
- **Deployment:** Vercel for staging; for production consider self-hosted on Indian infrastructure (Tata Communications, CtrlS, or AWS Mumbai region) given the audience.

### Acceptable alternative: Astro + Tailwind
Use only if the team strongly prefers it. Equally good for a content-heavy marketing site.

### Do not use
- WordPress (wrong tone, plugin sprawl, security surface).
- A heavy SPA framework with client-side routing for marketing pages (kills SEO).

---

## 3. Brand & Design System

### 3.1 Colors

The brand operates on a strict three-color hierarchy. All other tones are neutrals.

| Token | Hex | Role |
|---|---|---|
| `--bg` / white | `#FFFFFF` | Base background, the dominant color |
| `--bg-elev` | `#F7F8FB` | Slightly cool off-white for elevated surfaces (cards on hover, trust strip, closing CTA section) |
| `--bg-elev-2` | `#EEF1F6` | One step further elevated, rarely used |
| `--navy` | `#0E2452` | **2nd colour.** Primary accent. Italic emphasis, buttons, logo, icons, product codes, capabilities band background |
| `--navy-hi` | `#1B3870` | Hover/lighter navy |
| `--navy-soft` | `#4863A0` | Subdued navy for soft uses |
| `--red` | `#B12A2F` | **3rd colour.** Punctuation accent — live indicators, section numbers, phase labels, hover-only highlights |
| `--red-hi` | `#D14045` | Brighter red for the dark capabilities band |
| `--red-soft` | `#E68185` | Softest red, label tone on dark band |
| `--ink` | `#0E1116` | Body text and headlines |
| `--ink-dim` | `#4D505A` | Secondary text, body paragraphs |
| `--ink-mute` | `#8A8D95` | Tertiary text, mono labels, captions |
| `--line` | `rgba(14,36,82,0.12)` | Hairlines, dividers |
| `--line-hi` | `rgba(14,36,82,0.26)` | Stronger borders |

> **⚠ Confirm with client:** The hex values for navy and red are inferred from the description "navy & red like in the logo." Request the official brand hex codes from the logo file before going to production. The current values should ship as defaults but are subject to a single find-and-replace once confirmed.

### Color usage rules

- **Navy does ~80% of accent work.** Italic words in headlines, logo, primary buttons, all icons, hover states on navigation, product code labels (SCN-01, SCN-02...), trust icon strokes, pillar h3 emphasis, "Made in India" badge frame, the entire capabilities band background.
- **Red does ~20% of accent work and only as punctuation.** Logo mark crosshair (the small "+"), the live-status dot in the hero stamp (animated pulse), section numbers (`01 /`, `02 /`...), the "Phase I/II/III/IV" labels in the approach steps, the thin top-border that appears on product cards only on hover, hover state on the primary CTA.
- **Never** use red for large fills, paragraph emphasis, or anything that reads as an alert/warning.
- **The Indian tricolor in the "Made in India" footer badge is preserved** (`#FF9933`, `#FFFFFF`, `#138808`) because it is a national symbol, not a brand element. Do not replace it with brand colors.

### 3.2 Typography

Three families, used with intent. Self-host via `next/font/google`.

| Family | Use |
|---|---|
| **Fraunces** (variable serif, weights 300–600, italic supported) | All display type, all `h1`/`h2`/`h3`, product names. Used at light weights (300–400) for editorial gravitas. Italics carry the navy color for emphasis. |
| **Manrope** (weights 400–700) | Body copy, navigation, button text fallback, paragraphs |
| **JetBrains Mono** (weights 500–700) | Tactical labels: coordinates, file numbers, section numbers, button text, product codes, mono badges, footer copyright line |

### Type scale (desktop)

| Element | Family | Size | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| Hero H1 | Fraunces | `clamp(48px, 9vw, 132px)` | 300 | 0.9 | -0.035em |
| Section H2 | Fraunces | `clamp(34px, 5vw, 64px)` | 300 | 1.02 | -0.025em |
| Product card H3 | Fraunces | 42px | 400 | 1.0 | -0.02em |
| Pillar H3 | Fraunces | 28px | 400 | 1.15 | -0.01em |
| Step H4 | Fraunces | 26px | 400 | 1.0 | -0.01em |
| Body large | Manrope | 18px | 400 | 1.55 | normal |
| Body | Manrope | 14–16px | 400 | 1.55–1.6 | normal |
| Mono label | JetBrains Mono | 10–11px | 500–700 | 1.0 | 0.16–0.22em (uppercase) |

### Italic rule
Italics in display headlines always carry `color: var(--navy)` and `font-weight: 400`. This is the primary mechanism for emphasis on the page — it should be used 1–2 times per headline maximum.

### 3.3 Spacing & Layout

- **Max content width:** 1320px
- **Horizontal padding:** 36px desktop, 20px mobile
- **Vertical section padding:** 120px desktop, 80px tablet, 64px mobile
- **Section header to content gap:** 72px
- **Card internal padding:** 36px × 32px (product cards), 48px × 40px (pillars)
- **Grid gaps:** 1px (creates the hairline-divided grid look seen in product/pillar grids — backed by `var(--line-hi)` background)

### 3.4 Iconography

All icons are **inline SVG**, 24×24 viewBox, stroke-only (no fills), `stroke-width: 1.3–1.5`. Color comes from `currentColor` so they inherit the navy from their container. See the prototype's trust strip and trust-item `.ic` block for the exact pattern.

Required icon set (already in prototype):
- Shield (Made in India)
- Lock (Defence-Grade)
- Crosshair/grid (On-Prem · Air-Gapped)
- Sunburst/node (AI-Native)
- Star (Built with Veterans)

### 3.5 Texture & atmosphere

- A fixed background layer with two soft radial gradients (navy in top-left, faint red in bottom-right) at very low opacity.
- An SVG topographic-line overlay at low opacity (~0.18 navy, ~0.14 red) — fixed-position, behind all content. This gives the page its subtle "command-deck" texture.
- **No paper grain, no noise overlay** on the white theme — that's only for the parchment variant we discarded.

---

## 4. Component Library

Build these as reusable components.

### 4.1 `<Button>`
- Variants: `solid` (navy fill, white text, hover→red fill) and `outline` (navy 1.5px border, navy text, hover→navy fill + white text)
- Always uppercase, JetBrains Mono, 11px, letter-spacing 0.16em, font-weight 700
- Includes a small right-arrow indicator (`.arr` in prototype) — a 14px-wide line with a 7px arrowhead, both built from CSS
- Padding: 11px × 18px

### 4.2 `<Stamp>` (live-status badge)
- Used in hero for "Mission-Grade · Sovereign"
- 1.5px navy border, white fill, JetBrains Mono uppercase text, 10px, letter-spacing 0.22em
- Includes a 7px red dot on the left with a continuous pulse animation (`@keyframes pulse` — box-shadow ring expanding then fading every 2.4s)

### 4.3 `<MonoLabel>`
- Used for coordinates, file numbers, section numbers, "Phase I" labels
- JetBrains Mono, 10–11px, uppercase, navy or red depending on role
- Letter-spacing 0.18–0.22em

### 4.4 `<SectionHeader>`
- Two-column grid: 240px left column with section number (`<b>02 /</b> PORTFOLIO`), right column with the H2 and optional deck/lede paragraph
- Section number uses red on the number, mute on the label text
- Collapses to single column below 780px

### 4.5 `<ProductCard>`
- White card, navy hover-state radial gradient in top-right
- Top row: category in mono (mute), code (SCN-NN, navy) on the right
- Middle: product name in Fraunces 42px, optional subtitle in mono parentheses
- Description paragraph (max 32ch)
- "Learn More →" link in mono at bottom, navy→red on hover
- A 2px red top border that animates `scaleX(0)` → `scaleX(1)` on hover (transform-origin: left)
- Cards sit in a 3-column grid with 1px hairline gaps (uses the grid-background-color trick)

### 4.6 `<PillarCard>`
- White card, larger (`min-height: 240px`)
- Top: numbered red mono label ("01 — Defence-First Engineering")
- Middle: Fraunces 28px headline with navy italic emphasis
- Body paragraph (max 42ch)
- 2-column grid with 1px hairline gaps

### 4.7 `<ApproachStep>`
- Used in the four-step Understand → Co-Build → Deploy → Sustain bar
- 2px navy borders top and bottom
- 1px navy hairline dividers between columns
- Red mono "Phase I" label, Fraunces 26px navy step name, body paragraph
- A 16px square decoration with a red chevron between steps (absolute-positioned, hidden on last child)

### 4.8 `<CapabilitiesTicker>`
- Full-bleed navy band, white text
- Horizontal scrolling marquee (CSS keyframe `scroll` 36s linear infinite)
- Two duplicate spans inside `.cap-track` for seamless loop
- 42px Fraunces white text with red diamond (◆) separators in italic
- Fade masks on left and right via `::before` and `::after` linear gradients

### 4.9 `<Logo>`
- 34×34 navy-bordered square with a red `+` crosshair inside
- "SCAAN" wordmark in navy Manrope 700, letter-spacing 0.22em
- Subtitle "TECHNOLOGIES · IN" in mono mute, 9px

### 4.10 `<MadeInIndiaBadge>`
- 1px navy border on white
- Mono uppercase "Made in India" text in navy
- Tiny tricolor (saffron / white / green) bar to the left — three equal stacked `<b>` elements inside a 14×10px bordered container

### 4.11 `<Reveal>` wrapper
- Adds the scroll-triggered fade-up animation
- Uses `IntersectionObserver` (one shared observer per page, threshold 0.12, rootMargin -40px)
- Optional `data-delay="1|2|3|4|5"` for staggered reveals (delays in 80ms increments)

---

## 5. Page: Homepage — Detailed Breakdown

Below is the exact section flow with copy. The prototype HTML has the production-ready text — copy it verbatim.

### 5.1 Header (sticky)
- Logo (left) · Primary nav: Products / Capabilities / Approach / Security / About / Careers · CTA: "Request a Demo" (solid button, right)
- 72px height
- Sticky with `rgba(255,255,255,0.88)` background and 14px backdrop blur
- 1px bottom hairline

### 5.2 Hero
- Meta row at top: status stamp + coordinates (left), file reference (right)
- H1: three stacked lines, sequentially fade-up animated. "Indigenous." / "*Intelligent.*" (italic navy) / "Mission-Ready.·01" (the ·01 is a small red mono superscript)
- Hero sub-paragraph, 18px, mentions AI, geospatial, enterprise engineering (italic navy)
- Two CTAs: "Explore Products" solid · "Request a Demo" outline
- Right side: a vertical coordinate ladder (hidden below 1100px)
- Section bottom: 1px hairline border

### 5.3 Trust strip
- Light-elevated background (`var(--bg-elev)`)
- 5-column grid of trust badges, each: icon box + mono label + small description
- Items: Made in India / Defence-Grade / On-Prem · Air-Gapped / AI-Native / Built with Veterans
- Collapses to 2-column at 900px, 1-column at 520px

### 5.4 Products section — `02 / PORTFOLIO`
- Section header: "Six platforms. *One operational spine.*" + deck paragraph about the connected suite
- 3×2 grid of product cards (six total): OneCommand (MapPlan), INDEA, ATMA, HEART, UNITI, MEMORIAL
- Each card has a unique category line, code (SCN-01 through SCN-06), short description
- "View All Products →" outline button bottom-right

### 5.5 Why Scaan — `03 / WHY SCAAN`
- Section header: "Engineered for the *operational reality* — not the demo room."
- 2×2 grid of pillar cards:
  1. Defence-First Engineering
  2. Indigenous & Sovereign
  3. AI at the Core
  4. Mission-Grade Reliability

### 5.6 Our Approach — `04 / OUR APPROACH`
- Section header: "Discovery with operators. Indigenous secure development. *Long-horizon support.*"
- Four-column horizontal phase bar: Understand → Co-Build → Deploy → Sustain
- 2px navy borders top and bottom, 1px column dividers, red chevrons between steps

### 5.7 Capabilities band
- Full-bleed navy section with marquee ticker
- Items: AI & ML · Geospatial & C2 · Secure Cloud & On-Prem · Mobile · Offline-First · Cybersecurity · DevSecOps · Enterprise Engineering
- Center "Capabilities · Disciplines" label in red-soft mono above the marquee

### 5.8 Closing CTA — `05 / CONTACT`
- Light-elevated background
- Left: section number + big editorial headline "Building software for the *next operational decade.* Talk to us."
- Right: short paragraph + "Schedule a Briefing" solid CTA + 2×2 contact grid (Sales / Careers / Mumbai HQ / Pune)
- 1px hairline above contact grid

### 5.9 Footer
- Four-column: brand block / Products / Company / Legal
- Below: copyright in mono left, "Made in India" badge right
- Pure white background

---

## 6. Other Pages (Phase 2 / 3)

For now, scaffold these as routes with a placeholder section and the same header/footer. Detailed specs to follow per page once the homepage is shipped.

| Route | Priority | Brief |
|---|---|---|
| `/products/onecommand` | **P1** | Geospatial command and planning platform. Hero, capability blocks, screenshots, deployment story. Likely the most visually rich page. |
| `/products/indea` | **P1** | Sovereign AI platform. Sample interaction screens, security/sovereignty story, use cases. |
| `/products/atma` | P2 | Training lifecycle management. |
| `/products/heart` | P2 | Enterprise administration & operations. |
| `/products/uniti` | P2 | Unit operations & communications. |
| `/products/memorial` | P2 | Museum & memorial management. |
| `/about` | **P1** | Founders, vision, values, why Scaan exists. Strong page for defence buyers. |
| `/capabilities` | P2 | Disciplines deep-dive: AI, geospatial, cybersecurity, etc. |
| `/security` | P2 | VAPT, SDLC, deployment models, certifications (when applicable). |
| `/careers` | P2 | Open roles, life at Scaan, veterans pathway. |
| `/contact` | P1 | Form (gated), addresses, email desks. |
| `/privacy`, `/terms`, `/responsible-disclosure` | P3 | Legal pages. Plain prose. |

---

## 7. Interactions & Animations

Keep these subtle. Defence audience reads heavy motion as unserious.

| Where | What | Timing |
|---|---|---|
| Hero H1 | Three lines fade-up sequentially on load | 0ms, 120ms, 240ms · 900ms cubic-bezier(.2,.7,.2,1) |
| Scroll reveals | All `.reveal` elements fade up 20px when entering viewport | 900ms cubic-bezier · staggered up to 5 children via `data-delay` |
| Status dot | Red dot in hero stamp pulses with expanding box-shadow ring | 2.4s ease-in-out infinite |
| Product card hover | Background shifts to elev tone, navy radial in top-right fades in, 2px red top-border slides in left→right, "Learn More" turns red, arrow translates 4px right | 300–400ms |
| CTA hover | Solid navy button fills red, outline navy button fills navy + text white | 200ms |
| Capabilities marquee | Continuous horizontal scroll | 36s linear infinite |
| Reduce-motion | All non-essential animations disabled via `@media (prefers-reduced-motion: reduce)` | Required |

---

## 8. Responsive Behavior

Breakpoints (mobile-first preferred, but desktop-first is fine given the audience):
- `≥1100px` — full desktop layout, coordinate ladder visible
- `980px` — product grid drops from 3 to 2 columns
- `900px` — nav links collapse to a mobile menu (build a slide-in drawer); trust strip drops to 2 cols; approach steps drop to 2 cols
- `780px` — section header collapses to single column; pillars drop to 1 col
- `600px` — product grid 1 col
- `520px` — trust strip 1 col, approach steps 1 col

**Mobile menu:** not in prototype. Build a hamburger that slides in a full-height drawer from the right with the nav items stacked, large hit targets (min 48×48), and the CTA pinned to the bottom.

---

## 9. Project Structure

```
scaan-website/
├── app/
│   ├── layout.tsx                 # Root layout: fonts, metadata, header, footer
│   ├── page.tsx                   # Homepage
│   ├── globals.css                # Tailwind directives + design tokens
│   ├── about/page.tsx
│   ├── products/
│   │   ├── onecommand/page.tsx
│   │   ├── indea/page.tsx
│   │   └── ...
│   ├── contact/page.tsx
│   └── api/contact/route.ts       # Form handler
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   ├── Stamp.tsx
│   ├── SectionHeader.tsx
│   ├── ProductCard.tsx
│   ├── PillarCard.tsx
│   ├── ApproachStep.tsx
│   ├── CapabilitiesTicker.tsx
│   ├── Logo.tsx
│   ├── MadeInIndiaBadge.tsx
│   ├── Reveal.tsx
│   └── TopoBg.tsx                 # The fixed background layer
├── content/
│   ├── products.ts                # Product data (one source of truth)
│   ├── pillars.ts
│   ├── approach.ts
│   └── trust-items.ts
├── public/
│   ├── logo.svg                   # Get from client
│   ├── og-image.png               # Build a default OG image
│   └── favicons/
├── tailwind.config.ts             # Custom theme with all design tokens
└── README.md
```

### Tailwind config approach
Extend the theme with the exact tokens above. Example:

```ts
theme: {
  extend: {
    colors: {
      ink: { DEFAULT: '#0E1116', dim: '#4D505A', mute: '#8A8D95' },
      navy: { DEFAULT: '#0E2452', hi: '#1B3870', soft: '#4863A0' },
      red: { DEFAULT: '#B12A2F', hi: '#D14045', soft: '#E68185' },
      bg: { DEFAULT: '#FFFFFF', elev: '#F7F8FB', elev2: '#EEF1F6' },
    },
    fontFamily: {
      serif: ['var(--font-fraunces)'],
      sans: ['var(--font-manrope)'],
      mono: ['var(--font-jetbrains)'],
    },
    maxWidth: { wrap: '1320px' },
  }
}
```

---

## 10. Implementation Roadmap

### Phase 1 — Homepage (Week 1)
1. Scaffold Next.js project, configure Tailwind with tokens, set up fonts via `next/font/google`
2. Build the component library (§4) in isolation — get each looking right before composing them
3. Compose the homepage section by section, matching the prototype
4. Wire up scroll reveals + hero animations
5. Implement mobile menu drawer
6. Cross-browser test (Chrome, Safari, Firefox, Edge) and mobile (iOS Safari, Chrome Android)

### Phase 2 — Core supporting pages (Week 2)
1. `/about` — founders, vision, values
2. `/contact` — form with server action + transactional email
3. `/products/onecommand` and `/products/indea` (top two product pages)
4. Footer-linked legal pages with plain prose

### Phase 3 — Remaining product pages + polish (Week 3)
1. ATMA, HEART, UNITI, MEMORIAL detail pages
2. `/capabilities`, `/security`, `/careers`
3. SEO pass: per-page metadata, JSON-LD organization schema, sitemap, robots.txt
4. Lighthouse pass, accessibility audit, analytics integration

### Phase 4 — Launch prep
1. Replace placeholder copy with final content from client
2. Real photos, logo SVG, exact brand hex codes baked in
3. Performance budget check (target: LCP < 2.5s on 4G, CLS < 0.1)
4. Set up monitoring (uptime, error tracking via Sentry)
5. DNS, SSL, deploy

---

## 11. Assets Required From Client

A short list to send back over with the next email:

1. **Logo files** — SVG preferred (single-color version + full-color version), plus PNG fallbacks at 1x/2x/3x for favicons and og-image
2. **Exact brand hex codes** for navy and red from the official brand guidelines, if they exist
3. **Founder headshots** — high-res, consistent treatment, ideally on neutral background. Mentioned as TBD in the original profile doc.
4. **Product screenshots or mockups** for each of the six platforms (even rough wireframes work for v1)
5. **Customer logos or partner logos** if any are public — for an optional "Trusted by" strip (don't add this if there are none — empty social-proof strips are worse than no strip)
6. **Contact form destination** — which email desk receives Sales submissions; which receives Careers; whether there's a CRM (HubSpot, Salesforce, Zoho) to integrate with
7. **Domain decision** — `scaan.tech` is referenced in the profile; confirm registrar and whether DNS is theirs to manage
8. **Hosting preference** — Indian-hosted (recommended given audience) vs Vercel global. If Indian-hosted, get sign-off on AWS Mumbai, CtrlS, or similar before building deployment.
9. **Legal copy** — Privacy Policy, Terms of Use, Responsible Disclosure. They may already have these from counsel.

---

## 12. Accessibility Requirements

Target: **WCAG 2.1 AA.** Defence and government buyers care about this.

- All interactive elements keyboard-navigable, visible focus rings (use a navy outline at 2px offset, do not remove the focus indicator)
- Color contrast: navy on white is 14.5:1 (passes AAA). Red on white is 6.4:1 (passes AA). Red-soft on dark navy needs verification — keep red-soft uses to large text (24px+) only.
- All icons that convey meaning have `aria-label`; purely decorative icons have `aria-hidden="true"` (matches prototype)
- Animations respect `prefers-reduced-motion`
- Form labels are visible, not placeholder-only
- All images have meaningful alt text (decorative images get empty alt)
- Skip-to-main-content link at top of body
- Logical heading hierarchy — one `h1` per page, no skipped levels

---

## 13. SEO & Metadata

Per-page `<title>` and meta description. Default OG card. Structured data on at least the homepage.

### Homepage metadata
- **Title:** `Scaan Technologies — Indigenous defence software for India`
- **Description:** `Mission-grade, sovereign platforms for the Indian Defence Forces and Government of India. AI, geospatial, and enterprise engineering — built in India.`
- **OG image:** 1200×630 with the brand mark, tagline, and navy/red color treatment

### JSON-LD on homepage
Use `Organization` schema with `name`, `url`, `logo`, `address` (Mumbai HQ), `sameAs` (LinkedIn), `email` (sales@scaan.tech).

### Sitemap
Auto-generated `sitemap.xml` covering all public routes.

### Robots
Allow all crawlers by default. Block `/api/*`. Once a careers/jobs section exists, consider whether to allow indexing of individual roles.

---

## 14. Performance Budget

- **LCP** ≤ 2.5s on simulated 4G
- **CLS** ≤ 0.1
- **JS shipped to the client** ≤ 100KB compressed for homepage (this is a marketing site — most of it should be static HTML/CSS)
- **Fonts** preloaded with `font-display: swap`
- **Images** all served via `next/image` with appropriate sizes; SVGs inlined where small
- **No third-party scripts** beyond the analytics pixel until justified

---

## 15. Security & Privacy

Relevant given the audience.

- Force HTTPS, HSTS preload
- CSP header tight (no inline scripts beyond what's strictly needed; nonce-based if necessary)
- Form submissions rate-limited; basic spam protection (Turnstile or similar — avoid Google reCAPTCHA given the audience)
- No third-party trackers. Use a privacy-respecting analytics platform (Plausible / self-hosted Umami).
- Cookie banner only if analytics requires it; with Plausible you can skip the banner entirely.
- Email addresses in the footer/contact should be obfuscated client-side at minimum (or routed through a contact form).

---

## 16. Open Questions

Flag these back to the user / client before kicking off coding:

1. Are the brand hex codes (`#0E2452` navy, `#B12A2F` red) the actual logo colors, or placeholders to be confirmed?
2. Does the company have an existing logo SVG to drop in, or does the typographic mark in the prototype need to be the final logo?
3. Is there a preferred Indian hosting partner, or is Vercel acceptable for production?
4. Are the product names in the prototype final, or subject to change? (OneCommand, INDEA, ATMA, HEART, UNITI, MEMORIAL — taken from the profile doc)
5. Is there a contact form CRM/destination to integrate with, or just transactional email?
6. Should the Careers section list real openings via an ATS (Lever, Greenhouse), or is it a static "we're hiring, email us" page for v1?

---

## 17. Reference Materials

- **Visual prototype:** `scaan-technologies-home-white-navy-red.html` — the source of truth for visual treatment
- **Original company profile:** `Scaan-Technologies-Website-Profile.docx` — for any copy or product details not captured here
- **Earlier prototypes for context:** dark theme and parchment variants exist but are deprecated; do not implement those

---

*End of specification.*
