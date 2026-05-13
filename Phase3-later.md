# Phase 3 — Tasks 3.9 to 3.12 (deferred)

This file is self-contained. Read it cold next week and you should know what to build, where to put it, and how to start — without re-reading the whole conversation that produced the rest of the site.

If anything here is contradicted by `SPEC.md`, `SPEC.md` wins.

---

## 0 · Current state of the repo (so you know what you're working with)

Before opening any task below, skim these:

- **`SPEC.md`** — the build specification. Source of truth for product/brand decisions.
- **`CLAUDE.md`** — operating guide for Claude Code; covers the brand non-negotiables (navy 80% / red 20% / italic-navy emphasis), the locked stack, and the open client-side questions.

What's already shipped (so you don't accidentally rebuild it):

- Next.js 16 + React 19 + Tailwind v4 + Turbopack, pnpm-managed
- Design tokens in `app/globals.css` (`--navy`, `--red`, `--ink`, `--bg-elev`, `--line`, etc.)
- Fonts: Fraunces (serif, italic), Manrope (sans), JetBrains Mono — wired via `next/font/google` in `app/layout.tsx`
- Component library in `components/` — Header, Footer, Logo, Button, Stamp, MonoLabel, SectionHeader, ProductCard, PillarCard, ApproachStep/Bar, CapabilitiesTicker, Reveal, MadeInIndiaBadge, TopoBg, FounderCard, ProsePage, ProductHero, ProductScreenshot, CapabilityBlock, RelatedProducts, ContactForm
- Content lives in `content/` (typed `readonly` arrays; `.tsx` when JSX is needed)
- All 16 routes below already work — every one returns HTTP 200, every footer link resolves:

| Route | What |
|---|---|
| `/` | Homepage |
| `/about` | Founders, vision, values |
| `/products` | Product index |
| `/products/onecommand` … `/memorial` | Six product detail pages (SCN-01 to SCN-06) |
| `/capabilities` | Eight disciplines deep-dive |
| `/security` | Defence-grade security posture |
| `/careers` | Static recruitment (mailto link) |
| `/contact` | Contact form (mailto submission, see below) |
| `/privacy`, `/terms`, `/responsible-disclosure` | Draft legal pages with "draft pending counsel review" banner |

Run the site locally:

```bash
cd /Users/pushanpuri/Work/scaan_website
pnpm dev
# open http://localhost:3000
```

Build production locally (used during Task 3.12):

```bash
pnpm build
pnpm start
```

---

## 1 · Constants you will need

### 1.1 Canonical route list (used by sitemap, OG previews, audit)

```ts
const ROUTES = [
  "/",
  "/about",
  "/contact",
  "/capabilities",
  "/security",
  "/careers",
  "/products",
  "/products/onecommand",
  "/products/indea",
  "/products/atma",
  "/products/heart",
  "/products/uniti",
  "/products/memorial",
  "/privacy",
  "/terms",
  "/responsible-disclosure",
];
```

### 1.2 Production base URL

`https://scaan.tech` is the **placeholder** the site assumes. **Confirm** the registered production domain before shipping any of these tasks — they all bake the URL into output. Per SPEC.md §16.3, the hosting decision (Vercel global vs Indian-hosted) is also still open.

### 1.3 Brand colors (already in tokens, but you'll need the hex in OG image rendering)

- `--navy: #0E2452`
- `--red: #B12A2F`
- `--ink: #0E1116`
- `--bg: #FFFFFF`
- `--bg-elev: #F7F8FB`

---

## 2 · Task 3.9 — sitemap, robots, JSON-LD homepage Organization schema

### What it is

Three SEO foundation artifacts:

1. **`sitemap.xml`** — list of every public URL for search engine crawlers.
2. **`robots.txt`** — crawler rules; block `/api/*`, allow the rest (SPEC.md §13).
3. **JSON-LD Organization schema** on the homepage — structured data so Google/Bing surface the business identity correctly.

### Where in the codebase

Next.js 16's App Router uses file conventions for SEO files:

- Create `app/sitemap.ts` (NOT `.tsx`). Next.js auto-renders it to `/sitemap.xml`.
- Create `app/robots.ts` (NOT `.tsx`). Next.js auto-renders to `/robots.txt`.
- JSON-LD goes inline in `app/page.tsx` (homepage only) as a `<script type="application/ld+json">` rendered server-side.

If unsure about the conventions, read the bundled docs:

```
node_modules/next/dist/docs/01-app/01-getting-started/14-metadata-and-og-images.md
node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/metadata/sitemap.md
node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/metadata/robots.md
```

### How to start

**Step 1 — sitemap.** Replace the placeholder base URL once the production domain is confirmed (§1.2). Skeleton:

```ts
// app/sitemap.ts
import type { MetadataRoute } from "next";

const BASE = "https://scaan.tech"; // CONFIRM with client
const ROUTES = [/* paste from §1.1 above */];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((path) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "/" ? 1.0 : 0.7,
  }));
}
```

**Step 2 — robots.** Per SPEC.md §13: allow all, block `/api/*`.

```ts
// app/robots.ts
import type { MetadataRoute } from "next";

const BASE = "https://scaan.tech"; // CONFIRM with client

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
```

**Step 3 — JSON-LD.** Add to `app/page.tsx` (homepage). Render inside the page component, *not* in the root layout, so it only appears on `/`. Use `dangerouslySetInnerHTML` with `JSON.stringify` — this is the canonical pattern and not actually dangerous for static JSON.

```tsx
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Scaan Technologies",
  url: "https://scaan.tech", // CONFIRM
  logo: "https://scaan.tech/logo.png", // CONFIRM — asset doesn't exist yet
  email: "sales@scaan.tech",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
    streetAddress: "[street address — confirm]",
  },
  sameAs: [
    "[LinkedIn URL — confirm with client]",
  ],
};

// In the component, before the first <section>:
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
/>
```

### Decisions / blockers

- **Production domain** (§1.2). Sitemap and JSON-LD bake the URL in.
- **LinkedIn URL** for `sameAs`. Client hasn't supplied one yet (SPEC.md §11 list does not include this — surface it when asking).
- **Logo asset.** No logo file exists yet (SPEC.md §11.1 lists it as outstanding). For now use the typographic mark URL or omit the `logo` field until the SVG/PNG arrives.
- **Street address** for the Mumbai HQ in the `address` block. Currently `[Street address]` on `/contact`.

### Verification

1. Visit `http://localhost:3000/sitemap.xml` — should return XML listing all 16 routes.
2. Visit `http://localhost:3000/robots.txt` — should show `Allow: /`, `Disallow: /api/`, and a `Sitemap:` line.
3. View page source of `/` — should contain a `<script type="application/ld+json">` block. Paste the JSON into [Google's Rich Results Test](https://search.google.com/test/rich-results) — should validate as a valid `Organization`.

---

## 3 · Task 3.10 — Default OG image (1200×630)

### What it is

The Open Graph image that previews when scaan.tech is shared on LinkedIn, X, Slack, etc. Spec §13 calls for a 1200×630 PNG with brand mark, tagline, and navy/red treatment.

### Where in the codebase

Two paths — pick **one**:

**Path A (recommended): dynamic, via Next.js file convention.**

Create `app/opengraph-image.tsx` (NOT `.png`). Next.js will render the React component to a PNG at build / request time using `ImageResponse` from `next/og`. No asset workflow, the design is in code.

**Path B: static PNG.**

Drop a 1200×630 PNG into `public/og-image.png` and reference it from `app/layout.tsx` metadata:

```ts
export const metadata: Metadata = {
  // ...
  openGraph: {
    images: ["/og-image.png"],
  },
};
```

Use Path A unless you have a specific reason to commit a static asset (e.g., design done in Figma and exported by a designer).

### How to start (Path A)

Read the bundled doc first: `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/metadata/opengraph-image.md`

Skeleton:

```tsx
// app/opengraph-image.tsx
import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Scaan Technologies — Indigenous defence software for India";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          padding: "80px",
          fontFamily: "serif",
        }}
      >
        {/* Mono meta row */}
        <div
          style={{
            fontSize: 18,
            color: "#8A8D95",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          <span style={{ color: "#B12A2F", marginRight: 12 }}>·</span>
          Scaan Technologies
        </div>

        {/* Headline */}
        <div
          style={{
            marginTop: 60,
            fontSize: 96,
            color: "#0E1116",
            lineHeight: 1.0,
            letterSpacing: "-0.025em",
          }}
        >
          Indigenous.
          <br />
          <span style={{ color: "#0E2452", fontStyle: "italic" }}>
            Intelligent.
          </span>
          <br />
          Mission-Ready.
        </div>

        {/* Mono footer */}
        <div
          style={{
            marginTop: "auto",
            fontSize: 18,
            color: "#0E2452",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          scaan.tech
        </div>
      </div>
    ),
    { ...size },
  );
}
```

Note: `ImageResponse` uses a Satori renderer with limited CSS. No CSS variables, no `gap` in some contexts, no `var()`. Inline styles only. Fonts: either system-default or load via `fonts:` option in `ImageResponse` constructor (requires fetching woff from public/ or a CDN). For Phase 3, system serif is acceptable as a starting point.

### Decisions / blockers

- **Tagline copy** — spec uses "Indigenous. Intelligent. Mission-Ready." which is the homepage hero. Reasonable default.
- **Logo** — when the SVG arrives (SPEC.md §11.1), inline its paths into the OG image so the logo mark renders too.

### Verification

1. Run `pnpm dev`, visit `http://localhost:3000/opengraph-image` — browser should download / preview a 1200×630 PNG.
2. After deploying, paste the production URL into [opengraph.xyz](https://www.opengraph.xyz/) — confirm the preview renders correctly across LinkedIn, X, Slack, Discord.
3. Confirm Twitter/X preview specifically: per-route Twitter cards may need `twitter-image.tsx` too if you want different framing. For Phase 3, the OG image is good enough.

---

## 4 · Task 3.11 — Privacy-respecting analytics

### What it is

Pageview analytics that does **not** use Google Analytics. SPEC.md §2 + §15 both call this out — the defence audience cares about not being tracked by a US-based ad-tech provider. Two acceptable options:

1. **Plausible Analytics** (plausible.io) — paid SaaS (~$10/mo for low volume), simple to install, no cookie banner needed.
2. **Self-hosted Umami** (umami.is) — open-source, free, requires hosting it somewhere (small Postgres + Node app).

**Recommended for v1: Plausible.** Lower operational overhead, faster to ship.

### Where in the codebase

Add the Plausible script to `app/layout.tsx`, inside the `<head>` or right before `</body>`. Use Next.js `<Script>` from `next/script` so it loads after hydration without blocking.

### How to start (Plausible)

**Step 1 — get the account.**

1. Sign up at plausible.io.
2. Add `scaan.tech` (or whichever is the production domain) as a site.
3. Copy the snippet they give you — it's of the form `<script defer data-domain="scaan.tech" src="https://plausible.io/js/script.js"></script>`.

**Step 2 — wire it.**

```tsx
// app/layout.tsx
import Script from "next/script";

// Inside the body, before <Header />:
<Script
  defer
  data-domain="scaan.tech"
  src="https://plausible.io/js/script.js"
  strategy="afterInteractive"
/>
```

**Step 3 — no cookie banner.** Plausible doesn't set cookies. You don't need a consent banner. This is the whole reason we picked it over Google Analytics.

### Decisions / blockers

- **Domain registered** — Plausible needs a real domain; localhost won't surface in their dashboard. The script can be wired before the domain goes live, but verification has to wait.
- **If Umami chosen instead:** you'll need somewhere to host it. Options: a small Hetzner/DigitalOcean droplet (~$5/mo), Railway, or fly.io. Same script-tag pattern, different `src`.
- **Subdomain tracking:** if marketing ever runs on `www.scaan.tech` and product on `app.scaan.tech`, configure Plausible accordingly. Not relevant for v1.

### Verification

1. Deploy.
2. Open scaan.tech in an incognito window, click around 3–4 pages.
3. Open the Plausible dashboard — pageviews should appear within ~60 seconds.
4. Verify no third-party cookies are set: DevTools → Application → Cookies. Should be empty.
5. Verify the script doesn't break `prefers-reduced-motion`, doesn't bloat the homepage JS budget (it's ~1KB compressed, well under the 100KB limit).

---

## 5 · Task 3.12 — Lighthouse + WCAG 2.1 AA audit

### What it is

Pre-launch quality pass per SPEC.md §12 and §14. This is auditing + fixing, not a fixed-scope build — the output is a punch list of findings and the fixes for each.

### Performance targets (SPEC.md §14)

| Metric | Budget |
|---|---|
| LCP | ≤ 2.5s on simulated 4G |
| CLS | ≤ 0.1 |
| Homepage client JS | ≤ 100KB compressed |
| Fonts | preloaded, `font-display: swap` (already wired via `next/font`) |

### Accessibility target (SPEC.md §12)

WCAG 2.1 AA. Specific checks already implemented (verify they still pass):

- Visible navy focus ring (`globals.css` `:focus-visible`)
- Skip-to-main link in `app/layout.tsx`
- `aria-label` on the Logo
- `aria-hidden="true"` on decorative SVGs
- `prefers-reduced-motion` gates animations (`globals.css` + `Reveal.tsx` short-circuit)
- One `<h1>` per page (by structure)
- Color contrast: navy on white is 14.5:1 (AAA), red on white is 6.4:1 (AA)

### How to start

**Step 1 — production build.** Lighthouse against `pnpm dev` is misleading. Run:

```bash
pnpm build
pnpm start
# in another terminal:
npx lighthouse http://localhost:3000 --view --preset=desktop
npx lighthouse http://localhost:3000 --view --form-factor=mobile --throttling-method=simulate
```

Run each across at least the homepage + one product page + `/contact`.

**Step 2 — axe DevTools.** Install the axe-core browser extension (Chrome/Firefox) and run it on every public page. Triage findings by impact.

**Step 3 — manual keyboard sweep.** Tab through the homepage, contact form, and mobile drawer. Confirm:
- Every interactive element receives focus
- Focus order matches visual order
- Focus rings are visible (navy 2px outline)
- Mobile drawer traps focus while open (currently doesn't — flag as fix needed)
- Escape closes the mobile drawer (currently doesn't — flag as fix needed)

**Step 4 — reduced-motion sweep.** Enable "Reduce Motion" in macOS System Settings → Accessibility → Display. Reload every page. Confirm content appears immediately and no `Reveal` blocks stay invisible.

**Step 5 — perf budget.** Check the homepage JS bundle size:

```bash
pnpm build
# Read the size column from Next.js's per-route output
```

If a route ships more than 100KB First Load JS, dig into why. Common culprits: a client component that should be a server component, or an unused import.

### Known fixes likely needed (best guesses, verify each)

These are issues I'd expect to find — confirm with actual Lighthouse output before fixing:

- **Mobile drawer focus trap and Escape handler** — `components/Header.tsx` opens a drawer but doesn't trap focus or listen for Escape. WCAG-affecting for modal-like overlays.
- **`ContactForm` honeypot** — visible to screen readers despite `aria-hidden`; consider also moving it via CSS to `position: fixed; left: -9999px;` rather than `absolute` so it doesn't affect layout reflow on focus.
- **Reduce-motion: `Reveal` short-circuits** — already implemented in `components/Reveal.tsx`, but worth re-verifying with the actual system setting.
- **Image LCP** — once real product screenshots arrive, ensure they go through `next/image` with explicit `width`/`height` (CLS) and `priority` on the hero (LCP). All `ProductScreenshot` placeholders are inline SVG so no LCP impact today.

### Verification

The pass is "done" when:

1. Lighthouse Performance ≥ 90 on the homepage (mobile + desktop)
2. Lighthouse Accessibility ≥ 95 on every public route
3. axe DevTools reports zero "serious" or "critical" issues
4. Keyboard nav covers every interactive element with visible focus
5. `prefers-reduced-motion` reveals all `.reveal` blocks immediately
6. Homepage First Load JS ≤ 100KB (per `pnpm build` output)

Expect this to take 2–4 hours of iteration. Findings should be tracked as separate small fixes, not bundled into one giant commit.

---

## 6 · Dependencies between tasks

Roughly:

- **3.9 and 3.10** both need the production domain confirmed (§1.2). Can be drafted with the placeholder and updated later.
- **3.11** needs the domain registered AND deployed before it produces data.
- **3.12** should be the **last** task. Run it after 3.9–3.11 are wired, because they each add markup or scripts that could affect Lighthouse scores.

Recommended order:

1. Wait for: production domain registration (SPEC.md §16.3 / §16.7).
2. Then: **3.9** → **3.10** in parallel (different files, no shared edits).
3. Then: **3.11** (after the site is live on the real domain so Plausible can verify).
4. Finally: **3.12** against the deployed production build.

---

## 7 · Things that came up while building Phase 1 / 2 / 3 you should know

A handful of things bit me during the original build. Documenting so you don't trip on the same wires:

- **`&apos;` in plain TS strings renders literally.** It only works inside JSX text. Use a regular apostrophe `'` (or unicode `’`) in `.tsx` content arrays. Affected files were `content/about.tsx`, `content/products/onecommand.tsx` — both fixed.
- **`backdrop-filter` creates a containing block for `position: fixed` descendants.** The mobile drawer was originally nested inside `<header>` (which uses `backdrop-blur-[14px]`) and got trapped at the 72px header height. Fix: render the drawer as a sibling of `<header>`, not a child. See the comment in `components/Header.tsx`.
- **`<Reveal>`'s SSR fallback.** `.reveal { opacity: 0 }` would hide all content for no-JS visitors. Fix: a `<noscript>` style block in `app/layout.tsx`'s `<head>` overrides it. Don't remove the noscript tag.
- **Tailwind v4 uses CSS `@theme`, not `tailwind.config.ts`.** Tokens live in `app/globals.css`. The spec §9 shows a v3-style JS config — that's outdated. Match the v4 `@theme inline` pattern that's already in `globals.css`.
- **Playwright `fullPage` screenshots don't trigger `IntersectionObserver`.** During visual verification, scroll programmatically before screenshotting or sections appear blank. Not a real-user problem.

---

*End of deferred-tasks spec.*
