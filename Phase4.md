# Phase 4 — Launch Prep

This file is self-contained. Read it cold and you should know exactly what each launch-prep task is, where it lands in the codebase, how to start, and what verifies it as done — without having seen the rest of the work that built the site.

If anything here contradicts `SPEC.md`, `SPEC.md` wins.

**Other reference files in the repo:**

- `SPEC.md` — build specification. Source of truth for product/brand decisions.
- `CLAUDE.md` — operating guide; covers the brand non-negotiables (navy 80% / red 20% / italic-navy emphasis), the locked stack, and open client-side questions.
- `REQUIREMENTS_FROM_CLIENT.md` — the list of items needed from Scaan to do this work. Most Phase 4 tasks below are blocked until §1 and §2 of that file are resolved.
- `Phase3-later.md` — deferred Phase 3 work (sitemap, OG image, analytics, Lighthouse audit). These tasks **interleave** with Phase 4. See §3 below for the recommended sequence.

---

## §0 · Repo orientation (so you know what you're working with)

### What's already shipped

- **Stack:** Next.js 16 + React 19 + Tailwind v4 + Turbopack, pnpm-managed.
- **Routes — all 16 already work** (every footer link resolves, every page returns 200):

| Path | Built in |
|---|---|
| `/` | Homepage with all sections |
| `/about` | Founders, vision, values |
| `/products` | Product index |
| `/products/onecommand` … `/memorial` | Six product detail pages (SCN-01 to SCN-06) |
| `/capabilities` | Eight disciplines deep-dive |
| `/security` | Defence-grade posture surface |
| `/careers` | Static recruitment (mailto link) |
| `/contact` | Form (submits via `mailto:sales@scaan.tech`) |
| `/privacy`, `/terms`, `/responsible-disclosure` | Draft legal pages with red "draft pending counsel review" banner |

- **Component library** in `components/`: Header, Footer, Logo, Button, Stamp, MonoLabel, SectionHeader, ProductCard, PillarCard, ApproachStep/Bar, CapabilitiesTicker, Reveal, MadeInIndiaBadge, TopoBg, FounderCard, ProsePage, ProductHero, ProductScreenshot, CapabilityBlock, RelatedProducts, ContactForm.
- **Content** in `content/` — typed `readonly` arrays. `.tsx` extensions where JSX (italic emphasis, inline SVG icons) is needed.
- **Design tokens** in `app/globals.css` as CSS custom properties (`--navy`, `--red`, `--ink`, etc.) wired into Tailwind v4's `@theme inline` block.

### Run it

```bash
cd /Users/pushanpuri/Work/scaan_website
pnpm dev
# open http://localhost:3000
```

### Build production locally (used during 4.7 smoke test)

```bash
pnpm build
pnpm start
```

### Find every placeholder marker in the code

The placeholders are deliberately bracketed so they're greppable:

```bash
grep -rn '\[' content/ app/ | grep -v 'node_modules'
```

This surfaces `[Founder One]`, `[Street address]`, `[retention window — confirm with counsel]`, and the other client-blocked items in one pass.

---

## §1 · Prerequisites (must be resolved before starting)

- [ ] `REQUIREMENTS_FROM_CLIENT.md` §1 (critical) and §2 (high priority) resolved
- [ ] Production domain registered, DNS controllable
- [ ] Hosting decision made (Vercel vs Indian-hosted — `SPEC.md §16.3`)
- [ ] Brand hex codes confirmed (`SPEC.md §16.1`)
- [ ] Logo files delivered (`SPEC.md §11.1`)
- [ ] Legal copy from counsel for all three legal pages

If any of these are missing, **stop and request before starting Phase 4 tasks.** The work below assumes they're in place.

---

## §2 · Tasks

### 4.1 — Replace placeholder copy with client content

#### What it is

Swap every illustrative copy block written during Phase 2/3 for the verbatim text supplied by Scaan. Touches roughly 20 content files. The page chrome and layouts don't change — only `content/*.tsx` and a handful of strings in `app/*/page.tsx`.

#### Where in the codebase

Every file under `content/`. Specifically:

| Area | File |
|---|---|
| About page (founders, vision, values) | `content/about.tsx` |
| Product index data | `content/products.ts` |
| OneCommand product page | `content/products/onecommand.tsx` |
| INDEA product page | `content/products/indea.tsx` |
| ATMA product page | `content/products/atma.tsx` |
| HEART product page | `content/products/heart.tsx` |
| UNITI product page | `content/products/uniti.tsx` |
| MEMORIAL product page | `content/products/memorial.tsx` |
| Contact page (hero, offices, desks) | `content/contact.tsx` |
| Pillars on homepage | `content/pillars.tsx` |
| Approach phases on homepage | `content/approach.ts` |
| Trust strip on homepage | `content/trust-items.tsx` |
| Contact desks shown on homepage CTA | `content/contacts.ts` |
| Capabilities deep-dive | `content/capabilities.tsx` |
| Security posture | `content/security.tsx` |
| Careers page | `content/careers.tsx` |
| Privacy Policy | `content/legal/privacy.tsx` |
| Terms of Use | `content/legal/terms.tsx` |
| Responsible Disclosure | `content/legal/responsible-disclosure.tsx` |

Plus the homepage hero copy in `app/page.tsx` and site-wide metadata in `app/layout.tsx`.

#### How to start

**Step 1 — Find every placeholder.**

```bash
grep -rn '\[' content/ app/ | grep -v 'node_modules'
```

You should see entries like:

```
content/about.tsx: name: "[Founder One]",
content/contact.tsx: address: ["[Street address]", "Mumbai · Maharashtra · India"],
content/legal/privacy.tsx: [retention window — confirm with counsel]
content/legal/terms.tsx: [Liability cap — confirm with counsel]
content/legal/responsible-disclosure.tsx: [PGP fingerprint to be added — security team to provision]
content/security.tsx: [Specific certifications to be confirmed by Scaan security team — ...]
```

**Step 2 — Replace in place.**

Open the file, find the bracketed marker, paste the client content. The TypeScript shapes are already declared (`Founder`, `Product`, `Capability`, etc.) — keep field types correct.

**House style rules (enforced by spec §3 — do not break):**

- Italic emphasis in display headlines is always `<Em>…</Em>` (or `<em className="italic font-normal text-navy">…</em>`). Renders navy + weight 400.
- Italics are used **at most 1–2 times per headline**.
- Long-form prose lives in `<>...</>` fragments — multiple paragraphs each in their own `<p>`.
- Bullet lists are plain `string[]`, rendered by the page consumer.

**Step 3 — Remove the "draft" banners on legal pages.**

`components/ProsePage.tsx` accepts an `isDraft` prop. The three legal page files pass it `true` by default (via ProsePage's default). Once counsel-signed copy is in, edit `app/privacy/page.tsx`, `app/terms/page.tsx`, `app/responsible-disclosure/page.tsx` to pass `isDraft={false}`.

#### Decisions / blockers

Every item in `REQUIREMENTS_FROM_CLIENT.md` §2.1 through §2.8.

#### Verification

- [ ] `grep -rn '\[' content/ app/ | grep -v 'node_modules'` returns no remaining `[ ... ]` markers (or only acceptable ones — verify each)
- [ ] All three legal pages render without the red "Draft · Placeholder pending counsel review" banner
- [ ] Founder names on `/about` match the supplied list — no `[Founder One]`
- [ ] Office addresses on `/contact` are real street addresses, and the "Street addresses to be confirmed" note at the bottom of the section is removed
- [ ] Run `pnpm build` — no TypeScript errors

---

### 4.2 — Replace placeholder visual assets

#### What it is

Three visual placeholders are currently in the code. Each is a rendered React component, not a missing image — pages don't break without real assets. Replace them now that real files are in hand:

1. **Logo** — currently a CSS-rendered typographic mark (`SCAAN` wordmark + red `+` crosshair in navy border). Real logo SVG goes here.
2. **Founder photos** — currently navy-bordered tiles with serif initials. Real headshots go here.
3. **Product screenshots** — currently navy-bordered tiles with crosshair + "Product visual · to be supplied". Real product screenshots go here.

#### Where in the codebase

- Logo: `components/Logo.tsx`
- Founder photos: `components/FounderCard.tsx`
- Product screenshots: `components/ProductScreenshot.tsx` (and per-page usage in `app/products/*/page.tsx`)
- Favicons: `app/icon.png`, `app/apple-icon.png` (Next.js file conventions — see `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/metadata/`)

Place actual image files in `public/`:

```
public/
├── logo.svg                  # full-color logo
├── logo-mono.svg             # single-color (navy) variant
├── og-fallback.png           # 1200×630 fallback (Phase3-later.md §3)
├── founders/
│   ├── founder-one.jpg       # ~800×1000, 4:5 ratio
│   ├── founder-two.jpg
│   └── founder-three.jpg
└── products/
    ├── onecommand-hero.png   # ~1600×1000, 16:10
    ├── onecommand-01.png     # ~1200×900, 4:3 (capability 01)
    ├── onecommand-02.png
    ├── onecommand-03.png
    ├── indea-hero.png
    ├── ... (same shape for atma, heart, uniti, memorial)
```

Filenames are suggestions — anything stable will work. Update the component imports to match.

#### How to start

**Step 1 — Logo swap.**

Replace the CSS-rendered crosshair square in `components/Logo.tsx` with `next/image`:

```tsx
import Image from "next/image";

// Inside the component, replace the existing <span> + inline-SVG block with:
<Image
  src="/logo.svg"
  alt=""        // empty alt — the wordmark adjacent carries the accessible name
  width={34}
  height={34}
  priority      // logo is above-the-fold on every page
/>
```

Keep the `<Link>` wrapper and the `SCAAN` wordmark — the wordmark is what screen readers announce via the `aria-label` on the Link.

**Step 2 — Founder photo swap.**

In `components/FounderCard.tsx`, the placeholder tile that renders the initials needs to become an `<Image>`:

```tsx
import Image from "next/image";

type Props = {
  name: string;
  role: string;
  service: string;
  bio: string;
  photoSrc: string;   // NEW — replaces the `initials` field
};

// Inside the component, replace the entire <div aria-hidden="true"> tile with:
<Image
  src={photoSrc}
  alt={`${name} — ${role}`}
  width={800}
  height={1000}
  className="border border-navy"
/>
```

Then update `content/about.tsx` — replace each `initials: "VS"` with `photoSrc: "/founders/founder-one.jpg"`.

If you want to keep the initials fallback for founders without a photo yet, make `photoSrc` optional and branch on its presence.

**Step 3 — Product screenshot swap.**

`components/ProductScreenshot.tsx` is currently a hand-rolled placeholder. Two options:

- **Option A:** Replace the body of `ProductScreenshot` with `<Image>` when a `src` prop is supplied; fall back to the placeholder when it isn't. This keeps every product page working through the transition.
- **Option B:** Add a new `<ProductImage>` component and update each `app/products/*/page.tsx` to use it. Cleaner separation, more files to touch.

Option A is the faster path:

```tsx
type Props = {
  code: string;
  name: string;
  aspect?: "16/10" | "16/9" | "4/3";
  src?: string;        // NEW — when present, render the real image
  alt?: string;        // NEW — required if src present
  className?: string;
};

// At the top of the component body:
if (src) {
  return (
    <div className={`relative overflow-hidden border-[1.5px] border-navy ${aspectClass[aspect]} ${className}`}>
      <Image
        src={src}
        alt={alt ?? ""}
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />
    </div>
  );
}
// existing placeholder body follows
```

Then pass `src` from each product page where you have a screenshot:

```tsx
// in app/products/onecommand/page.tsx, ProductHero call:
<ProductHero
  code={product.code}
  // ...
/>
// — ProductHero internally uses ProductScreenshot. Update ProductHero to
// accept a `heroImage` prop and pass it through, or do the substitution
// inline at the page level. Pick the path that touches the fewest files.
```

Same pattern for the three capability blocks per product (use `visualCode` / `visualName` + a new `visualSrc` prop on `CapabilityBlock`).

**Step 4 — Favicons.**

Drop `app/icon.png` (any size, Next.js generates the rest) and `app/apple-icon.png` (180×180). Reference: `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/metadata/app-icons.md`.

#### Decisions / blockers

`REQUIREMENTS_FROM_CLIENT.md` §1.3 (logo), §2.1 (founder photos), §2.4 (product screenshots).

#### Verification

- [ ] `/` and every other route loads the real logo in the header and footer
- [ ] `/about` shows real founder photos, not initials
- [ ] Each `/products/*` route shows real screenshots in the hero and at each capability block (or the placeholder if a particular screenshot is still pending)
- [ ] Browser tab favicon resolves
- [ ] Run `pnpm build` and check the Next.js output — `next/image` should report no warnings about missing dimensions or `fill` without parent

---

### 4.3 — Lock brand hex codes

#### What it is

The site currently uses `--navy: #0E2452` and `--red: #B12A2F` — these were inferred from "navy & red like the logo" and explicitly flagged in `SPEC.md §16.1` as placeholders to confirm. Two outcomes are possible:

1. Client confirms the existing values — no code change needed. Just remove the flag from `CLAUDE.md`.
2. Client supplies new hex codes — single-file find-and-replace.

#### Where in the codebase

`app/globals.css` — the design tokens block at the top:

```css
:root {
  /* ... */
  --navy: #0E2452;
  --navy-hi: #1B3870;
  --navy-soft: #4863A0;
  --red: #B12A2F;
  --red-hi: #D14045;
  --red-soft: #E68185;
  /* ... */
}
```

#### How to start

**If client confirms current values:** No code change. Update `CLAUDE.md` to remove the "values are inferred placeholders" note.

**If client supplies new hex codes:**

1. Update `--navy` and `--red` in `app/globals.css`.
2. Derive `--navy-hi` (lighter), `--navy-soft` (much lighter, used for soft accents), `--red-hi` (brighter), `--red-soft` (pale). The current pattern: hi ≈ ~10% lighter, soft ≈ ~30% lighter. Use a colour-mixing tool or pick by eye against the existing samples.
3. Verify nothing else hardcodes the hex values:

```bash
grep -rn -E '#0[Ee]2452|#B12A2F|#1[Bb]3870|#4863A0|#D14045|#E68185' app/ components/ content/
```

Should return zero matches (everything goes through CSS vars).

#### Decisions / blockers

`REQUIREMENTS_FROM_CLIENT.md` §1.4.

#### Verification

- [ ] Hex codes confirmed (either kept or replaced)
- [ ] `grep` above returns zero hardcoded hex matches
- [ ] Run `pnpm dev`, visually confirm the homepage hero italic-navy "Intelligent." still has the right tone, and the red `·01` superscript still pops
- [ ] If the new red has lower contrast on white, run `/security` page through axe — the navy/white contrast was 14.5:1 (AAA), red on white was 6.4:1 (AA). New values must still pass WCAG 2.1 AA for body-sized text

---

### 4.4 — Set up Sentry (error tracking)

#### What it is

Capture client-side and server-side errors in production for triage. Per `SPEC.md §10.4` ("Set up monitoring … error tracking via Sentry").

#### Where in the codebase

Sentry's Next.js SDK generates / modifies:

- `sentry.client.config.ts`
- `sentry.server.config.ts`
- `sentry.edge.config.ts`
- `next.config.ts` (wrapped with `withSentryConfig`)
- `.env.local` (`SENTRY_DSN`, `SENTRY_AUTH_TOKEN`, `SENTRY_ORG`, `SENTRY_PROJECT`)
- `instrumentation.ts` (Next.js 16 hook for SDK init)

#### How to start

**Step 1 — Create the Sentry project.**

1. Sign up at sentry.io (or use existing org).
2. Create a new project. Platform: **Next.js**.
3. Copy the DSN it gives you.

**Step 2 — Install via the wizard.**

```bash
pnpm add @sentry/nextjs
pnpm dlx @sentry/wizard@latest -i nextjs
```

The wizard will:
- Ask for the DSN you just copied.
- Generate the config files listed above.
- Wrap `next.config.ts` with `withSentryConfig`.
- Create example throw-an-error pages (delete these after smoke testing).

**Step 3 — Add to `.env.local`** (the wizard prompts for this):

```
SENTRY_DSN=https://...@...ingest.sentry.io/...
SENTRY_AUTH_TOKEN=...     # for source map upload during build
SENTRY_ORG=scaan
SENTRY_PROJECT=scaan-website
```

Also add these to your deployment environment (Vercel project env vars or equivalent).

**Step 4 — Sample rate.**

For a marketing site at expected volume, set the trace sample rate low to keep cost predictable. In `sentry.client.config.ts`:

```ts
Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 0.1,           // 10% of transactions
  replaysSessionSampleRate: 0,     // disabled — privacy-respecting
  replaysOnErrorSampleRate: 0.1,   // record only when an error fires
});
```

`SPEC.md §15` mandates no third-party trackers. Sentry only fires on errors and on a 10% trace sample with no PII — acceptable. Replays are off by default; if you want them, disable masking is **not** safe for a defence-audience site.

#### Decisions / blockers

`REQUIREMENTS_FROM_CLIENT.md` §4.2 (account provisioned).

#### Verification

- [ ] Add a temporary `<button>` that throws on click somewhere reachable.
- [ ] Run `pnpm build && pnpm start`.
- [ ] Click the button. Within ~30 seconds an event should appear in the Sentry dashboard.
- [ ] Source maps should be uploaded (verify in the build log — `Successfully uploaded source maps...`). The Sentry event should show original TypeScript file names, not minified bundle names.
- [ ] Delete the throw-on-click button before shipping.

---

### 4.5 — Set up uptime monitoring

#### What it is

Page-the-team-when-the-site-is-down. Per `SPEC.md §10.4`.

Pick a provider — Better Uptime, Uptime Robot, Pingdom, Cronitor, or any equivalent. Free tiers are adequate for a marketing site.

#### Where in the codebase

**No code changes.** This is configured entirely on the monitoring provider's side.

#### How to start

**Step 1 — Create the account.** Pick one provider. Better Uptime and Uptime Robot both have free tiers that cover what's needed.

**Step 2 — Configure the monitor.**

- **URL:** `https://scaan.tech/` (and optionally one per critical route — at minimum `/contact` since that's where leads land)
- **Interval:** 5 minutes
- **Expected status:** 200
- **Expected response contains** (optional but recommended): `Scaan Technologies` — catches broken-but-still-200 deploys
- **Locations:** at least one from India region; mix in Europe or US-East if your hosting is global

**Step 3 — Configure alerts.**

- **Where:** Slack channel, on-call phone, or email distribution — match how the team operates.
- **When:** Trigger after **two** consecutive failed checks (not one), to absorb transient network blips.
- **Repeat:** Re-alert every 30 minutes until acknowledged.

#### Decisions / blockers

`REQUIREMENTS_FROM_CLIENT.md` §4.3 (provider + alert destination decided).

#### Verification

- [ ] Monitor reports "Up" for ≥1 hour after configuration
- [ ] Trigger a test alert (most providers have a "Send test notification" button) — confirm it reaches the configured destination
- [ ] Test the failure path: in a safe window, take the site offline for ~3 minutes. Confirm the alert fires after ~10–15 minutes. Restore. Confirm a "back up" alert is also sent.

---

### 4.6 — DNS, SSL, production deploy

#### What it is

Move from local development to a deployed production URL with a valid SSL cert. The path depends on the hosting decision (`SPEC.md §16.3`).

#### Where in the codebase

Mostly **outside the codebase** — registrar, hosting provider, and (for Vercel) the Vercel dashboard.

In-repo files that change:

- `.env.production` or environment variables in the hosting dashboard (`SENTRY_DSN`, etc.)
- `next.config.ts` — confirm `output: "standalone"` if self-hosting (not needed for Vercel)
- Possibly add `app/sitemap.ts` and `app/robots.ts` from `Phase3-later.md §2` before this step

#### How to start — Vercel path (recommended unless mandated otherwise)

**Step 1 — Push the repo to GitHub** (or another git host Vercel supports). If the repo isn't on GitHub yet:

```bash
git remote add origin git@github.com:scaan-technologies/scaan-website.git
git push -u origin main
```

**Step 2 — Connect to Vercel.**

1. Sign up / log in at vercel.com.
2. "Add New Project" → import the GitHub repo.
3. Vercel auto-detects Next.js and proposes a build config — accept the defaults.
4. Add environment variables (`SENTRY_DSN`, `SENTRY_AUTH_TOKEN`, `SENTRY_ORG`, `SENTRY_PROJECT`) in the project settings.
5. Trigger the initial deploy.

**Step 3 — Custom domain.**

1. In the Vercel project, "Settings → Domains" → add `scaan.tech` and `www.scaan.tech`.
2. Vercel will display the DNS records you need (typically an `A` record to `76.76.21.21` for the apex, and a `CNAME` to `cname.vercel-dns.com` for `www`).
3. Set these records at your registrar.
4. DNS propagation typically takes 5–30 minutes. SSL is auto-provisioned via Let's Encrypt.

**Step 4 — Redirect canonical.**

Decide whether `scaan.tech` or `www.scaan.tech` is canonical (per `REQUIREMENTS_FROM_CLIENT.md §1.1`). Configure the non-canonical one to 301 to the canonical one (Vercel domain settings).

#### How to start — Indian-hosted path (AWS Mumbai / CtrlS / Tata Comms)

This is more work. The site can run as a Node.js app (`pnpm build && pnpm start`) or be deployed as a containerised standalone build.

**Step 1 — Build standalone.** In `next.config.ts`:

```ts
const nextConfig: NextConfig = {
  output: "standalone",
};
```

`pnpm build` then produces `.next/standalone/` — a self-contained Node app you can `docker build` from.

**Step 2 — Provision.** Pick:
- **AWS Mumbai (ap-south-1):** ECS Fargate is the simplest. ECR for images, ALB for the load balancer, ACM for the SSL cert.
- **CtrlS / Tata Communications:** likely a managed VM. Install Node 22+, run `pnpm start`, front with Nginx for SSL termination.

**Step 3 — SSL.** AWS ACM auto-provisions. Self-hosted: Let's Encrypt via `certbot`, renewal handled by a cron.

**Step 4 — DNS.** Point `scaan.tech` `A` record at the ALB (or the server IP for self-hosted).

**Step 5 — CI/CD.** GitHub Actions building on push to `main`, pushing to ECR / SSH-ing to the server. Out of scope for this doc — set it up once the deploy mechanism is chosen.

#### Decisions / blockers

`REQUIREMENTS_FROM_CLIENT.md` §1.1 (domain), §1.2 (hosting).

#### Verification

- [ ] `https://scaan.tech/` returns the homepage with a valid SSL cert (green padlock; check with `openssl s_client -connect scaan.tech:443`)
- [ ] All 16 routes from §0 above return 200 in production:
  ```bash
  for path in / /about /products /products/onecommand /products/indea /products/atma /products/heart /products/uniti /products/memorial /capabilities /security /careers /contact /privacy /terms /responsible-disclosure; do
    printf "%-40s " "$path"; curl -sI "https://scaan.tech$path" | head -1
  done
  ```
- [ ] HTTP 80 redirects to HTTPS 443
- [ ] HSTS header present (Vercel default; self-hosted needs manual config)
- [ ] Canonical domain redirect works (non-canonical → canonical 301)

---

### 4.7 — Production smoke test

#### What it is

Final sweep across the deployed site before declaring launch. Catches anything that worked locally but fails in production (broken env vars, missing assets, wrong domain in JSON-LD, etc.).

This is the last task in Phase 4. Run it after **everything else is done** — both Phase 4 (4.1 to 4.6) and the deferred Phase 3 tasks (`Phase3-later.md` 3.9 to 3.12).

#### Where in the codebase

Not a code task. A walkthrough script.

#### How to start

**Run this script against the production URL.** If any step fails, fix and re-run from the failure point.

1. **All 16 routes return 200** — see the `curl` loop in §4.6 verification.
2. **Sitemap + robots resolve:**
   - `https://scaan.tech/sitemap.xml` — XML with all 16 routes
   - `https://scaan.tech/robots.txt` — disallows `/api/`, references sitemap
3. **JSON-LD validates:** paste the homepage source into [Google's Rich Results Test](https://search.google.com/test/rich-results). Should validate as a valid `Organization`.
4. **OG preview validates:** paste the homepage URL into [opengraph.xyz](https://www.opengraph.xyz/). Confirm preview renders correctly for LinkedIn, X, Slack, Discord.
5. **Hero animations fire** on a hard reload (the three H1 lines fade up at 0/120/240ms).
6. **Reveal blocks fire on scroll** — open `/about`, scroll. Each section should fade up as it enters viewport.
7. **Mobile drawer works** — narrow viewport to ~375px wide, tap hamburger. Drawer slides in from right, contains nav + "Request a Demo" CTA pinned at the bottom. Tap close. Drawer slides out.
8. **Contact form opens a mail draft** — fill all required fields on `/contact`, click "Open Draft". User's default mail client should open with a pre-filled draft to `sales@scaan.tech` (subject `[Scaan Contact · <Reason>] <Name> — <Org>`, structured body). Send the draft from your own mail client. Confirm `sales@scaan.tech` receives the email.
9. **Email desks resolve** — click each of the four email links on `/contact` and the seven addresses listed across legal pages. Each should open a mail-to draft.
10. **`prefers-reduced-motion` respected** — enable Reduce Motion in macOS System Settings → Accessibility → Display. Reload `/`. Reveals should appear instantly; no fade-up; no marquee scrolling on the Capabilities band.
11. **Plausible records pageviews** — open the production URL in an incognito window, click through 4–5 pages. Within 60 seconds, those pageviews should appear in Plausible's dashboard.
12. **Sentry receives a test error** (after 4.4 wired) — temporarily add a throw-on-click button, click it, confirm event lands in Sentry, then revert.
13. **Lighthouse production scores** — run Lighthouse against the deployed URL:
    - Performance ≥ 90 on mobile + desktop for `/`
    - Accessibility ≥ 95 on every public route
    - Best Practices ≥ 95
    - SEO ≥ 95
    See `Phase3-later.md §5` for the detailed pass.
14. **Print stylesheet** — `Cmd+P` on `/` and `/about`. The page should print cleanly; the topographic background should not dominate; the header should not repeat on every page. If broken, add `@media print` rules in `app/globals.css`.
15. **Mobile sanity** — open the production URL on an actual phone (iOS Safari + Chrome Android). Verify the hero scales, the mobile drawer opens, the contact form is usable. Emulators miss touch behaviour.

#### Verification

The smoke test is the verification. Each step is a checkable assertion; the launch is done when all 15 pass.

---

## §3 · Recommended execution order

Phase 4 and the deferred Phase 3 tasks interleave. Here's the cleanest sequence:

1. **4.1** Replace placeholder copy *(content-only; no infra dependency)*
2. **4.2** Replace placeholder visual assets *(same)*
3. **4.3** Lock brand hex codes *(same)*
4. **Phase 3 deferred 3.9** Sitemap, robots, JSON-LD *(needs domain — see Phase3-later.md §2)*
5. **Phase 3 deferred 3.10** OG image *(needs final logo)*
6. **4.4** Sentry *(can start anytime; depends on deploy for verification)*
7. **4.6** DNS / SSL / production deploy *(blocked on 4.1–4.5 being ready)*
8. **Phase 3 deferred 3.11** Plausible analytics *(needs deployed site to verify)*
9. **4.5** Uptime monitoring *(needs deployed URL)*
10. **Phase 3 deferred 3.12** Lighthouse + WCAG audit *(needs production build)*
11. **4.7** Final smoke test *(after everything)*

You can parallelise content work (4.1) with asset prep (4.2) — different files, different owners.

---

## §4 · Gotchas you'll likely re-encounter

Already documented in `Phase3-later.md §7`, restated here so you don't have to context-switch:

- **`&apos;` in plain TS strings renders literally.** Only works inside JSX text. Use a regular `'` (or `'`) in `content/*.tsx` array values.
- **Tailwind v4 uses CSS `@theme`**, not `tailwind.config.ts`. Tokens live in `app/globals.css`.
- **`backdrop-filter` creates a containing block for `position: fixed` descendants.** The mobile drawer is intentionally rendered as a sibling of `<header>` (not a child) because `<header>` uses `backdrop-blur-[14px]`. Don't nest it back in.
- **The `<noscript>` style in `app/layout.tsx`** forces `.reveal` blocks visible when JavaScript is disabled. Don't remove it — search engines and no-JS visitors depend on it.
- **Playwright `fullPage` screenshots don't trigger `IntersectionObserver`.** During visual verification, scroll programmatically with `browser_evaluate` before taking a screenshot.

---

*End of Phase 4 spec.*
