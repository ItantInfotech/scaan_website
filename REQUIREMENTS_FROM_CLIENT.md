# Requirements From Client — Phase 4 (Launch Prep)

This is the complete list of things needed from Scaan Technologies before the website can ship to production. Each item describes **what is needed**, **where it lands in the site** (so you can see the placeholder it replaces), **who on your side is the likely owner**, and **why** it matters.

Items are grouped by **priority**, not by department. The ordering reflects what blocks launch most directly. Section §1 must be resolved to go live; §2 should be in place before public marketing; §3 can ship with placeholders and be filled in within the first weeks after launch.

---

## How to deliver

For most items below, a shared Google Drive folder works well. For text content, plain `.txt`, `.docx`, or a Google Doc per page. For images, original-quality files (don't pre-resize). The website team will integrate and version-control everything from there.

For decisions (items marked **Decision**), a one-line answer in an email is enough.

Where a particular role is named ("counsel", "brand lead", "security team"), that's a suggestion based on what the item typically involves — feel free to route internally however makes sense.

---

## §1 · Critical — these block launch

### 1.1 · Confirm the production domain

- [ ] Confirm `scaan.tech` is registered and DNS is under your control. If a different domain (`.in`, `.co.in`, etc.) is preferred, name it.
- [ ] Provide registrar credentials access or a contact at the registrar so DNS records can be updated.
- [ ] Confirm the canonical URL: `https://scaan.tech` (no www) vs `https://www.scaan.tech`.

**Why it matters:** Sitemap, OG images, JSON-LD, and analytics all bake the domain into output. Site can be built without this; cannot be launched.

**Likely owner:** IT / Operations

**Currently in code:** `scaan.tech` assumed throughout. Search any file for `scaan.tech` to see usage.

---

### 1.2 · Hosting decision

- [ ] **Decision:** Vercel (global edge, fast to deploy, no Indian region) **OR** Indian-hosted (AWS Mumbai / CtrlS / Tata Communications). Defence audience may push toward Indian infrastructure — see SPEC.md §16.3.

**Why it matters:** Decides the deployment pipeline and SSL provider. Vercel is auto; Indian hosts need a manual deploy + cert setup.

**Likely owner:** Founders / IT

---

### 1.3 · Logo files

- [ ] **SVG** single-color (navy) version
- [ ] **SVG** full-color version (if different)
- [ ] **PNG fallbacks** at 1×, 2×, 3× for favicons and OG images
- [ ] Confirmation the typographic mark currently in the site (`<Logo>` component — navy bordered square with red `+` crosshair, "SCAAN" wordmark) is acceptable as final, **OR** supply a different lockup

**Why it matters:** Logo appears in header, footer, OG image, JSON-LD `logo` field, and favicon. Currently rendered via CSS as a typographic placeholder.

**Likely owner:** Brand / design lead

**Currently in code:** `components/Logo.tsx`

---

### 1.4 · Brand colour hex codes — confirm or replace

The site currently uses inferred values:

- Navy: `#0E2452`
- Red: `#B12A2F`

- [ ] Confirm these are the official brand hex values from your brand guidelines, **OR** supply the correct codes. A simple find-and-replace will update the site.

**Why it matters:** SPEC.md §16.1 flags this explicitly. Affects every page. The site can be soft-launched with placeholders; should be locked before any printed materials reference the site.

**Likely owner:** Brand / design lead

**Currently in code:** CSS custom properties at the top of `app/globals.css`

---

### 1.5 · Email infrastructure

The site currently references seven email addresses. Confirm each one is provisioned and routing to the right human inbox:

- [ ] `sales@scaan.tech` — receives all contact-form submissions
- [ ] `careers@scaan.tech` — careers page "Email Careers" button
- [ ] `partners@scaan.tech` — listed on /contact desks
- [ ] `media@scaan.tech` — listed on /contact desks
- [ ] `privacy@scaan.tech` — listed in Privacy Policy
- [ ] `legal@scaan.tech` — listed in Terms of Use
- [ ] `security@scaan.tech` — Responsible Disclosure intake

If any of these should route to a different name (e.g., `careers@` aliased to `hr@`), note it.

**Why it matters:** The contact form opens a draft to `sales@scaan.tech` in the user's mail client. If the address doesn't exist, inquiries vanish.

**Likely owner:** IT / Operations

**Currently in code:** `components/ContactForm.tsx` (sales), `content/contact.tsx` (desks), `content/legal/*.tsx` (policy contacts)

---

### 1.6 · Legal copy from counsel

All three legal pages currently carry a visible red "Draft · Placeholder pending counsel review" banner. The placeholder text reads like reasonable boilerplate but **has not been written or reviewed by a lawyer**.

- [ ] **Privacy Policy** — full text from counsel covering Indian DPDP Act compliance (and GDPR where applicable). Specifically needs:
  - [ ] Retention window for inquiry data (currently `[retention window — confirm with counsel]`)
- [ ] **Terms of Use** — full text from counsel. Specifically needs:
  - [ ] Liability cap (currently `[Liability cap — confirm with counsel]`)
  - [ ] Governing law forum (currently `[Mumbai / Pune — confirm forum with counsel]`)
- [ ] **Responsible Disclosure** — confirm the scope, safe-harbour, and process language. Specifically needs:
  - [ ] PGP fingerprint for `security@scaan.tech` (currently `[PGP fingerprint to be added — security team to provision]`)
  - [ ] Confirmation we should mention "no paid bug bounty" — adjust if you'd prefer to leave that out

**Why it matters:** Defence/government buyers will scrutinise these. The "DRAFT" banner has to come off before the site is fully public.

**Likely owner:** Legal counsel + (for PGP) Security team

**Currently in code:** `content/legal/privacy.tsx`, `content/legal/terms.tsx`, `content/legal/responsible-disclosure.tsx`

---

## §2 · High priority — needed before public marketing

### 2.1 · Founder profiles for the About page

The /about page currently shows three placeholder cards: `[Founder One]`, `[Founder Two]`, `[Founder Three]`. There is also a visible mono note saying "· Founder profiles to be confirmed".

For each founder, please provide:

- [ ] **Full name**
- [ ] **Role** (e.g., "Co-founder · CEO")
- [ ] **Service / professional history tag** (current placeholders: "Indian Army · 22 yrs", "Engineering · 18 yrs", etc.)
- [ ] **Initials** for the placeholder treatment (or skip if real photo is ready)
- [ ] **Photo** — high-res, consistent treatment, ideally on a neutral background
- [ ] **Bio** — 2–3 sentences, in the tone of the site (calm, authoritative, no buzzwords)

If there are not three founders, or if there are more, that's fine — the layout adapts.

**Why it matters:** Defence buyers want to know who is running the company. The About page is the primary credentialing surface.

**Likely owner:** Founders + admin / EA

**Currently in code:** `content/about.tsx` (FOUNDERS array)

---

### 2.2 · About-page narrative

The vision and values sections currently use illustrative copy. Please supply:

- [ ] **Hero lede** — currently a generic paragraph about "indigenous defence-tech company"
- [ ] **Vision statement** — two paragraphs (currently illustrative)
- [ ] **Values** — confirm or replace the four pillars currently listed:
  1. Veterans First
  2. Indigenous by Default
  3. Code That Ships
  4. Long-Horizon Stewardship
  - For each pillar, a 1–2 sentence body paragraph

**Why it matters:** Sets the tone for every buyer interaction.

**Likely owner:** Founders / marketing lead

**Currently in code:** `content/about.tsx` (ABOUT_HERO, VISION, VALUES)

---

### 2.3 · Product copy — verbatim text for all six products

Each product page currently uses illustrative copy at every level. The structure is locked, but the text needs to come from someone who knows the product. Per product (× 6: OneCommand, INDEA, ATMA, HEART, UNITI, MEMORIAL):

- [ ] **Tagline** (single line, italics on emphasis word per house style)
- [ ] **Description** (one paragraph, ~3 sentences)
- [ ] **At-a-glance** — confirm or replace the four label/value pairs (Deployment, Operators, Coverage, Posture, etc.)
- [ ] **Three capability sections**, each with:
  - [ ] Capability name
  - [ ] Headline (with italic emphasis)
  - [ ] Body (1–2 paragraphs)
  - [ ] Bullets (4 per capability)
- [ ] **Four deployment-fact cells**, each with:
  - [ ] Label
  - [ ] Headline
  - [ ] Body (2 sentences)
- [ ] **Three use cases**, each with:
  - [ ] Formation / customer type (anonymised is fine — currently uses "Naval Command Centre", "Strategic Forces", etc.)
  - [ ] Title
  - [ ] Body (1–2 sentences)
- [ ] **CTA copy** — headline + body paragraph

**Also confirm:**

- [ ] **Product names final?** Currently: OneCommand, INDEA, ATMA, HEART, UNITI, MEMORIAL. SPEC.md §16.4 lists this as open.
- [ ] **Category labels final?** ("Command · Geospatial", "Sovereign AI", "Training Lifecycle", etc.)
- [ ] **SCN-NN codes final?** SCN-01 through SCN-06.

**Why it matters:** Product pages are the technical surface for buyer evaluation. Placeholder copy will read as unconvincing to a procurement officer.

**Likely owner:** Product leads for each platform

**Currently in code:** `content/products/onecommand.tsx`, `indea.tsx`, `atma.tsx`, `heart.tsx`, `uniti.tsx`, `memorial.tsx`

---

### 2.4 · Product screenshots / mockups

Every product page currently renders a placeholder visual (navy-bordered tile with crosshair + "Product visual · to be supplied"). Per product, please supply:

- [ ] **One hero screenshot or mockup** — 16:10 aspect ratio ideally
- [ ] **Three capability screenshots** — 4:3 aspect ratio (one per capability section)

Wireframes are acceptable for v1 — even rough sketches read as "real" once they replace the placeholder.

**Why it matters:** The placeholders are intentional design language, not broken — but real visuals tell the product story far more effectively.

**Likely owner:** Product / design leads

**Currently in code:** `components/ProductScreenshot.tsx` (replace with `next/image` when assets arrive)

---

### 2.5 · Office addresses

The /contact page currently lists:

- Mumbai HQ — `[Street address]`, Mumbai · Maharashtra · India
- Pune — `[Street address]`, Pune · Maharashtra · India

A visible mono note says "· Street addresses to be confirmed".

- [ ] **Mumbai HQ** — full street address as it should appear publicly
- [ ] **Pune** — full street address
- [ ] If the offices have visit-by-appointment-only policies, confirm the existing "Visits by appointment only" header is accurate

The JSON-LD Organization schema on the homepage also references the Mumbai HQ address — same value.

**Why it matters:** Defence buyers verify physical presence. Empty address fields read as a shell company.

**Likely owner:** Operations / EA

**Currently in code:** `content/contact.tsx` (OFFICES array)

---

### 2.6 · Homepage tagline + hero copy

Currently the homepage hero reads:

> Indigenous.
> *Intelligent.*
> Mission-Ready. ·01

with a sub-paragraph beginning "Mission-grade, sovereign platforms for the Indian Defence Forces and Government of India…"

- [ ] Confirm the tagline as final, **OR** propose alternative wording
- [ ] Confirm the hero sub-paragraph copy

The same tagline is referenced in `<title>`, OG image, and metadata description.

**Why it matters:** This is the most-seen sentence on the entire site.

**Likely owner:** Founders / marketing lead

**Currently in code:** `app/page.tsx` (hero), `app/layout.tsx` (metadata)

---

### 2.7 · Capabilities and Security copy review

The /capabilities and /security pages currently use the same illustrative-but-plausible tone as the rest of the site. Particularly for /security, defence buyers will scrutinise every claim.

- [ ] **/capabilities** — eight discipline cards (AI/ML, Geospatial/C2, Secure Cloud, Mobile, Offline-First, Cybersecurity, DevSecOps, Enterprise Engineering). Confirm the eight, the order, and the per-discipline body copy.
- [ ] **/security** — Specifically:
  - [ ] **Compliance section** — currently says `[Specific certifications to be confirmed by Scaan security team — ISO 27001, customer-specific MoD requirements, others as applicable]`. Replace with actual certification posture.
  - [ ] **SDLC, VAPT, Supply Chain sections** — confirm each claim. The site says specific things ("third-party assessment before major releases", "indigenous-only build path certified end-to-end") that need to be true.

**Why it matters:** Overclaiming on security copy is the worst possible foot to start an engagement on. Get the security team to sign off line-by-line.

**Likely owner:** Engineering lead + Security team

**Currently in code:** `content/capabilities.tsx`, `content/security.tsx`

---

### 2.8 · Careers — specific roles and veterans-pathway specifics

The /careers page currently lists six role areas ("Engineering — Geospatial / C2", "Engineering — AI / ML", etc.) with seniority levels but no specific job descriptions.

- [ ] Confirm the six role areas are accurate for hiring direction
- [ ] **Decision:** ATS integration (Lever / Greenhouse / Workday) **OR** keep static "email careers@" CTA for v1. SPEC.md §16.6 lists this as open. Static is fine and is what's currently built.
- [ ] **Veterans Pathway section** — currently lists four programme elements (structured transition programme, mentorship, roles across product/customer/engineering, clearance pathways). Confirm these are real commitments, not aspirations. If aspirations, soften the language.

**Why it matters:** Promising a "structured transition programme" that doesn't exist will burn trust with the veteran community fast.

**Likely owner:** HR / Founders

**Currently in code:** `content/careers.tsx`

---

## §3 · Medium priority — can ship with placeholders, fill in post-launch

### 3.1 · Customer / partner logos for an optional "Trusted by" strip

SPEC.md §11.5 mentions this as optional. The site doesn't currently include a trust-logo strip, but if you have any publicly-acknowledgeable customers or partners:

- [ ] List of customer/partner names that have agreed to public association
- [ ] Logo SVGs (preferred) or transparent PNGs at 2× minimum

**Note:** Empty trust strips read worse than no strip. If there are fewer than 4–5 logos, leave this out.

**Likely owner:** Marketing / Sales

---

### 3.2 · LinkedIn / social profiles for JSON-LD

- [ ] **LinkedIn URL** for Scaan Technologies — referenced in the homepage JSON-LD `sameAs` field for SEO
- [ ] Any other public profiles (X/Twitter, GitHub if applicable) you want indexed alongside the company

**Why it matters:** Helps search engines correctly disambiguate Scaan Technologies from similarly-named entities.

**Likely owner:** Marketing

---

### 3.3 · Office / event photography (post-launch)

The site does not currently include office or event imagery, but space exists if you want to add it later. If you have:

- [ ] Office interior shots (Mumbai HQ + Pune R&D)
- [ ] Founder team photo (group shot)
- [ ] Briefing or operational-context photos (if non-classified imagery is available)

These would slot into /about and /careers naturally.

**Likely owner:** Marketing / in-house photographer

---

### 3.4 · Open role JDs (when there are actual openings)

The /careers page lists role *areas* but not specific JDs. When live openings exist, supply per role:

- [ ] Job title and seniority
- [ ] One-paragraph summary
- [ ] Location (Mumbai / Pune / remote within India)
- [ ] Application instructions (mailto or, if ATS chosen, link)

These can land any time post-launch; the page reads fine without them.

**Likely owner:** HR

---

## §4 · Accounts to provision

Each of these needs an account or service set up on your side. The website team will wire them in once credentials are available.

### 4.1 · Analytics

- [ ] **Plausible Analytics** account at plausible.io with `scaan.tech` registered as a site. Provide the script snippet they give you. (~$10/mo for low traffic.)
- [ ] **OR** alternatively, host Umami at `analytics.scaan.tech`. Free but requires a small Postgres + Node deployment.

SPEC.md §2 + §15 explicitly rules out Google Analytics for the defence audience.

**Likely owner:** IT / Marketing

---

### 4.2 · Error tracking — Sentry

Per SPEC.md §10.4:

- [ ] Sentry account at sentry.io (or a self-hosted Sentry)
- [ ] Create a Next.js project; provide the DSN

A free tier is available and adequate for a marketing site.

**Likely owner:** Engineering

---

### 4.3 · Uptime monitoring

Per SPEC.md §10.4:

- [ ] Choose: Better Uptime / Uptime Robot / Pingdom / similar
- [ ] Configure to ping the homepage every 5 minutes
- [ ] Alert destination — Slack channel, on-call phone, or email distribution

Most providers have a free tier that covers a marketing site.

**Likely owner:** IT / Engineering

---

### 4.4 · Email provider for the seven `*@scaan.tech` addresses

If you are not already using Google Workspace, Microsoft 365, or Zoho Mail, decide and set up before launch. This is independent of the website code but is the destination for every contact-form submission.

- [ ] Email provider chosen and configured for `scaan.tech`
- [ ] Each of the seven addresses listed in §1.5 above is reachable

**Likely owner:** IT / Operations

---

## §5 · Decisions (no asset needed, just an answer)

### 5.1 · Hosting

See §1.2 above. Restated here for the decision log.

### 5.2 · OG image — dynamic or static

The site can either render its OG preview image dynamically in code, or use a static PNG. Default: dynamic. If a designer is supplying a specific PNG layout, name them — otherwise dynamic is fine and what's planned.

- [ ] **Decision:** dynamic (default) **OR** static PNG supplied separately

### 5.3 · CRM integration

SPEC.md §16.5: should contact-form submissions also land in a CRM (HubSpot / Salesforce / Zoho), or is the `sales@` inbox enough?

- [ ] **Decision:** mailto-to-inbox only **OR** also integrate with CRM (name which)

Current implementation is mailto-to-inbox only. Adding CRM later is straightforward.

### 5.4 · Cookie banner

Plausible doesn't set tracking cookies, so a cookie banner is **not legally required**. Confirm you're comfortable shipping without one — most defence-audience sites prefer no banner.

- [ ] **Decision:** no cookie banner (recommended) **OR** add one anyway

---

## §6 · Summary checklist

A flat list for tracking — copy this into your project tracker:

**Critical (§1):**
- [ ] 1.1 Domain confirmed
- [ ] 1.2 Hosting decision made
- [ ] 1.3 Logo files delivered
- [ ] 1.4 Brand hex codes confirmed
- [ ] 1.5 Seven email addresses provisioned
- [ ] 1.6 Legal copy from counsel (privacy, terms, RD)

**High priority (§2):**
- [ ] 2.1 Founder profiles (× 3 or N)
- [ ] 2.2 About-page narrative (hero, vision, values)
- [ ] 2.3 Product copy verbatim (× 6 products)
- [ ] 2.4 Product screenshots (× 6 products, ~4 visuals each)
- [ ] 2.5 Office street addresses
- [ ] 2.6 Homepage tagline + hero confirmed
- [ ] 2.7 /capabilities + /security copy reviewed
- [ ] 2.8 Careers role areas + veterans pathway confirmed

**Medium priority (§3):**
- [ ] 3.1 Customer/partner logos (if any)
- [ ] 3.2 LinkedIn URL + other social profiles
- [ ] 3.3 Office / event photography
- [ ] 3.4 Specific open-role JDs

**Accounts (§4):**
- [ ] 4.1 Plausible (or Umami host)
- [ ] 4.2 Sentry
- [ ] 4.3 Uptime monitoring
- [ ] 4.4 Email provider for scaan.tech

**Decisions (§5):**
- [ ] 5.1 Hosting (covered in §1.2)
- [ ] 5.2 OG image — dynamic vs static
- [ ] 5.3 CRM yes/no
- [ ] 5.4 Cookie banner yes/no

---

*Once §1 and §2 are resolved, the site can ship to production. §3, §4, and §5 can be filled in week-by-week after launch.*
