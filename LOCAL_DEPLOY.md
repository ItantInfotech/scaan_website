# Local Setup Guide

Step-by-step instructions to run this site on a new development machine, starting from the point where the code has been copied to disk.

When this guide is done, you should have:
- The dev server running at `http://localhost:3000`
- All 16 routes returning 200
- Hot reload working (edit a file, see the page update)

If you hit something not covered here, check the **Troubleshooting** section at the bottom.

---

## §1 · Prerequisites

You need two things installed on the machine. The site won't run without them.

| Tool | Minimum version | Why |
|---|---|---|
| **Node.js** | 22.x or newer (LTS recommended) | The JavaScript runtime. Next.js 16 requires Node 20+; 22 is the current LTS. |
| **pnpm** | 10.x or newer | The package manager. The repo uses `pnpm-lock.yaml`; npm or yarn will produce different `node_modules` and may break the build. |

### 1.1 · Install Node.js

Skip if `node --version` already shows v22 or higher.

**macOS** (recommended via Homebrew):

```bash
brew install node@22
```

Or use `nvm` (lets you switch Node versions per project):

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
nvm install 22
nvm use 22
```

**Linux** (Ubuntu/Debian via NodeSource):

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
```

Or `nvm` (same as macOS commands above).

**Windows:**

- Install via [nodejs.org](https://nodejs.org/) — pick the LTS installer.
- Or use [nvm-windows](https://github.com/coreybutler/nvm-windows) to manage versions.

### 1.2 · Install pnpm

The simplest path (Node 22+ ships with `corepack`, which can manage pnpm):

```bash
corepack enable
corepack prepare pnpm@latest --activate
```

Alternative (install via npm):

```bash
npm install -g pnpm
```

### 1.3 · Verify both are installed

```bash
node --version       # expect v22.x.x or higher
pnpm --version       # expect 10.x.x or higher
```

If either command fails or shows an older version, fix that before continuing — the rest won't work.

---

## §2 · One-time setup

### 2.1 · Open a terminal in the project directory

```bash
cd /path/to/scaan_website
```

Confirm you're in the right place:

```bash
ls
# you should see: app/  components/  content/  package.json  SPEC.md  CLAUDE.md  ...
```

### 2.2 · Install dependencies

```bash
pnpm install
```

This reads `package.json` and `pnpm-lock.yaml`, downloads ~350 packages into `node_modules/`, and finishes in 30–60 seconds on a warm cache. First run on a fresh machine may take 1–2 minutes.

**Expected output ends with something like:**

```
dependencies:
+ next 16.2.6
+ react 19.2.4
+ react-dom 19.2.4
devDependencies:
+ @tailwindcss/postcss 4.3.0
+ ...
Done in ~45s
```

If `pnpm install` fails, see Troubleshooting §5.1.

### 2.3 · Verify the install

```bash
ls node_modules/.bin/next
```

Should print a path. If it doesn't, the install didn't complete — re-run `pnpm install`.

---

## §3 · Run the dev server

### 3.1 · Start it

```bash
pnpm dev
```

You should see:

```
> scaan_website@0.1.0 dev
> next dev

▲ Next.js 16.2.6 (Turbopack)
- Local:        http://localhost:3000
- Network:      http://10.x.x.x:3000
✓ Ready in ~270ms
```

The "Ready in" time may be longer on the first run (Turbopack compiles on demand).

### 3.2 · Open it in a browser

Visit **http://localhost:3000** — you should see the Scaan Technologies homepage.

**What to expect:**
- The hero headline reads "Indigenous. *Intelligent.* Mission-Ready. ·01" (the italic *Intelligent.* in navy and a small red `·01` superscript).
- A small red dot pulses to the left of the "Mission-Grade · Sovereign" stamp at the top.
- Below the fold, sections fade in as you scroll.
- The navy band near the bottom marquees "AI & ML · Geospatial & C2 · …" indefinitely.

### 3.3 · Try the other routes

The site has 16 routes. Quick sanity check:

| Path | What it shows |
|---|---|
| `/` | Homepage |
| `/about` | Founders, vision, values |
| `/products` | Product index (6 cards) |
| `/products/onecommand` | OneCommand product page |
| `/products/indea` | INDEA product page |
| `/capabilities` | Eight disciplines |
| `/security` | Security posture |
| `/careers` | Recruitment |
| `/contact` | Contact form |
| `/privacy` | Privacy Policy (draft banner) |

Type each into the browser bar — every one should return a styled page, not a 404.

### 3.4 · Test hot reload

Open any file in `content/` (e.g., `content/products.ts`), change a word in any product description, save the file. The browser tab should update within ~500ms without you reloading. If hot reload isn't working, see Troubleshooting §5.4.

### 3.5 · Stop the server

In the terminal where the dev server is running, press **`Ctrl + C`**.

To start it again later, run `pnpm dev` from the project directory.

---

## §4 · Useful commands

Run any of these from the project root:

| Command | What it does | When to use |
|---|---|---|
| `pnpm dev` | Dev server with hot reload, Turbopack | Day-to-day development |
| `pnpm build` | Production build. Catches TypeScript errors that `pnpm dev` is lenient about. | Before pushing, and to test prod behaviour |
| `pnpm start` | Run the production build (after `pnpm build`) | Reproduce prod-only issues locally |
| `pnpm lint` | ESLint pass | Before pushing |

### Test the production build

```bash
pnpm build       # ~30–60 seconds
pnpm start       # serves the built site at localhost:3000
```

The production build is what gets deployed. If `pnpm build` fails, **fix the errors** — `pnpm dev` will tolerate things prod won't.

---

## §5 · Troubleshooting

### 5.1 · `pnpm install` failed

**Network failure / proxy:** if you're behind a corporate proxy, set it:

```bash
pnpm config set proxy http://your-proxy:port
pnpm config set https-proxy http://your-proxy:port
```

**ETARGET / version mismatch:** delete the lockfile and try again (last resort — produces a non-canonical install):

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

**Permission errors on macOS/Linux:** never use `sudo pnpm install`. If pnpm complains about permissions, run:

```bash
sudo chown -R $(whoami) ~/.local/share/pnpm
```

### 5.2 · `Error: Cannot find module 'next'`

`pnpm install` didn't complete. Re-run it.

### 5.3 · Port 3000 already in use

Another process is on port 3000. Find and stop it:

```bash
# macOS / Linux:
lsof -ti:3000 | xargs kill

# Or run on a different port:
pnpm dev --port 3001
```

### 5.4 · Hot reload not working

- Confirm you're editing a file inside the project directory (not a symlink target outside the repo).
- Confirm the dev server is still running in the other terminal — look for "Compiled in Xms" lines when you save.
- macOS Spotlight can interfere with file watching. Try `pnpm dev` with `--turbopack` disabled if you're on an older system: edit `package.json` `"dev": "next dev"` to drop any flags.

### 5.5 · TypeScript errors that didn't exist on the original machine

Different Node / TypeScript versions sometimes produce different errors. Confirm:

```bash
node --version    # ≥ v22
pnpm --version    # ≥ 10
```

If both are correct and you still see errors, do a clean install:

```bash
rm -rf node_modules .next
pnpm install
pnpm build
```

### 5.6 · Fonts look wrong / fallback to system serif

The first build downloads Google Fonts (Fraunces, Manrope, JetBrains Mono) and self-hosts them. If the build machine can't reach `fonts.gstatic.com`, fonts fall back. Check the build log for `next/font` warnings.

### 5.7 · Browser shows a blank page

- Open the browser DevTools console (`F12` or `Cmd+Option+I`) and check for errors.
- Check the dev server terminal for compile errors — they'll be highlighted in red.
- Try a hard reload (`Cmd+Shift+R` / `Ctrl+Shift+R`).
- If nothing helps, stop the server, run `rm -rf .next`, restart with `pnpm dev`.

### 5.8 · "Module not found" after `git pull`

A new dependency was added but you haven't installed it. Run `pnpm install`.

---

## §6 · Environment variables

The site currently runs **without any environment variables**. There is no `.env` file in the repo.

Once production deployment / Sentry / analytics are wired (see `Phase4.md`), variables like the following will be added:

```
SENTRY_DSN=...
SENTRY_AUTH_TOKEN=...
SENTRY_ORG=scaan
SENTRY_PROJECT=scaan-website
```

When that happens, copy `.env.example` (which will be added at that point) to `.env.local` and fill in the values. Until then, no setup is needed.

---

## §7 · Editor setup (recommended, not required)

The site is plain TypeScript + React + Tailwind v4. Any editor works. If you use **VS Code**, install these extensions for the best experience:

| Extension | What it does |
|---|---|
| **Tailwind CSS IntelliSense** (`bradlc.vscode-tailwindcss`) | Autocomplete for Tailwind classes, hover for the resolved CSS |
| **ESLint** (`dbaeumer.vscode-eslint`) | Inline lint warnings |
| **Prettier** (`esbenp.prettier-vscode`) | Code formatting (optional — there's no Prettier config in the repo yet) |

No `.vscode/` workspace config ships with the repo; you can add one locally without affecting others.

---

## §8 · Where to go next

The local setup is done. Depending on what you're working on:

| Goal | Read |
|---|---|
| Understand what's already built and the design system rules | `CLAUDE.md`, `SPEC.md` |
| Pick up Phase 4 (launch prep) work | `Phase4.md` |
| Pick up deferred Phase 3 work (sitemap, OG, analytics, audit) | `Phase3-later.md` |
| Understand what's blocked on the client | `REQUIREMENTS_FROM_CLIENT.md` |
| Start a fresh task | Run `grep -rn '\[' content/ app/` to see every remaining placeholder |

---

*End of local setup guide.*
