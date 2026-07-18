# mariaalexissales.github.io

[![CI](https://github.com/mariaalexissales/mariaalexissales.github.io/actions/workflows/ci.yml/badge.svg?branch=vite-react-migration)](https://github.com/mariaalexissales/mariaalexissales.github.io/actions/workflows/ci.yml)

My software developer portfolio — currently being rebuilt from a static HTML/CSS/JS site into **Vite + React + TypeScript + MUI**, as a learning project.

> **The rule of this rebuild:** I write ~90% of the code myself to learn web development. AI assistance (Claude) is limited to config plumbing (dependencies, CI/CD) and per-milestone code review.

## Tech stack

| Layer | Choice |
|---|---|
| Build | Vite 8, TypeScript ~6.0 |
| UI | React 19, MUI v9.2 (`@mui/material` + `@mui/icons-material`), `@mui/lab` Timeline |
| Styling | Emotion, MUI CSS theme variables (`colorSchemes`) |
| Fonts | Space Grotesk (headings) · Inter (body) · Space Mono (chips/dates/eyebrows) |
| Deploy | GitHub Actions → GitHub Pages |

## Design

Y2K/retro-futuristic palette — deep purple-black, lavender, pink, holographic gradients — with a **light/dark mode toggle** (MUI `useColorScheme`, persisted, respects `prefers-color-scheme`). Strategy: build a clean MUI site first, layer the y2k flourishes (gradient text, glow buttons, holo dividers) in a dedicated polish milestone.

| Token | Dark | Light |
|---|---|---|
| background (default / paper) | `#0d0814` / `#171024` | `#faf9f7` / `#ffffff` |
| primary (lavender / violet) | `#c084fc` | `#7c3aed` |
| secondary (pink) | `#f472b6` | `#db2777` |
| info (holo sky) | `#7dd3fc` | `#0284c7` |
| text (primary / secondary) | `#f4f1fa` / `#b3a8cc` | `#16121f` / `#4f4767` |
| gradient.holo | `linear-gradient(120deg, #f472b6, #c084fc 45%, #7dd3fc)` | `linear-gradient(120deg, #db2777, #7c3aed 45%, #0284c7)` |

Same hue family, different tone per scheme — lavender `#c084fc` fails contrast on white (~2.6:1), which is exactly why MUI's `colorSchemes` exist.

## Architecture

```
src/
├── main.tsx                 InitColorSchemeScript + ThemeProvider + CssBaseline + fonts
├── App.tsx                  composition only: Navbar / sections / Footer
├── theme/theme.ts           createTheme({ cssVariables, colorSchemes: { light, dark } })
├── data/                    typed content: types.ts, hero, techStack, projects,
│                            experience, certifications  (data-driven — no content in JSX)
└── components/
    ├── layout/              Navbar (sticky AppBar + ThemeToggle) · Footer (socials incl. Upwork)
    ├── common/              Section · ThemeToggle · UpworkIcon · GradientText · GlowButton
    └── sections/            Hero · TechStack · Projects · ExperienceTimeline · Certifications
```

Sections: **Hero/About · Tech Stack · Projects** (cards with GitHub + live-demo links) **· Experience** (`@mui/lab` timeline, alternating on desktop) **· Certifications**. The `Project` type has an optional `liveUrl` so GitHub Pages demos — and future deployed projects — plug in without schema changes.

## Milestone timeline

~5 hrs/week · one milestone per week · **Jul 20 – Sep 27, 2026**

| # | Week | Milestone | Focus | Status |
|---|---|---|---|---|
| M1 | Jul 20–26 | **Theme foundation** | `theme.ts` with both color schemes, fonts, providers in `main.tsx`, delete Vite demo | 🟡 in progress |
| M2 | Jul 27–Aug 2 | **Shell + toggle** | Navbar, Footer, `Section` wrapper, working `ThemeToggle` via `useColorScheme` | ⬜ |
| M3 | Aug 3–9 | **Data layer + assets** | `types.ts` (interfaces, unions, `satisfies`), populate data files, migrate assets into `public/` & `src/assets/` | ⬜ |
| M4 | Aug 10–16 | **Hero + Tech Stack** | Responsive Grid (`size={{ xs, md }}` syntax), socials incl. custom Upwork icon | ⬜ |
| M5 | Aug 17–23 | **Projects + Certifications** | Cards, conditional live-demo button, write 4 project descriptions | ⬜ |
| M6 | Aug 24–30 | **Experience timeline** | `@mui/lab` Timeline, discriminated-union dots, write experience entries | ⬜ |
| M7 | Aug 31–Sep 6 | **Deploy + cutover** | Actions → Pages workflow, flip Pages source, merge to `main`, go live | ⬜ |
| M8 | Sep 7–13 | **Y2K polish** | GradientText, GlowButton, holo dividers, blur navbar, a11y/Lighthouse pass | ⬜ |
| M9 | Sep 14–27 | **Capstone kickoff** | Separate Next.js + NestJS project, later featured in Projects via `liveUrl` | ⬜ |

<details>
<summary><strong>Milestone details — what gets built, what gets learned, done-when</strong></summary>

### M1 · Theme foundation
- **Build:** `index.html` title/meta · font imports + `InitColorSchemeScript`/`ThemeProvider`/`CssBaseline` in `main.tsx` · `theme.ts` from the palette above · delete demo counter, `App.css`, `ColorModeContext.tsx` · throwaway `<ThemeProbe />`
- **Learn:** theme as a typed config object, `ThemeOptions`, side-effect imports
- **Done when:** probe renders in both schemes (flip `defaultMode` by hand); `npm run build` green

### M2 · Shell + working toggle
- **Build:** `Section.tsx` (`{ id, eyebrow, title, children }`) · Navbar · Footer skeleton · `ThemeToggle.tsx` handling `mode === undefined` on first render, with `aria-label`
- **Learn:** props interfaces, `ReactNode`, narrowing `'light' | 'dark' | 'system' | undefined`
- **Done when:** toggle persists across reload; fresh incognito visit follows OS scheme; nav anchors scroll

### M3 · Data layer + asset migration
- **Build:** `types.ts` (`TechItem`, `Project`, `Certification`, `ExperienceEntry`, `SocialLink` discriminated union) · populate all `src/data/*.ts` from the old site · resume PDFs → `public/resume/`, images → `src/assets/` (rename cert files, drop `~`) · debug list proving imports resolve
- **Learn:** interface vs type alias, optional fields, string-literal unions (no `enum` — banned by `erasableSyntaxOnly`), discriminated unions, `Record`, `satisfies`, `import type`
- **Done when:** `tsc -b` green; every image/PDF resolves in dev

### M4 · Hero + Tech Stack
- **Build:** Hero with Avatar, headline, socials (GitHub/LinkedIn/email/resume/Upwork via custom `SvgIcon`), illustration · TechStack grouped tiles from `Record<TechCategory, TechItem[]>`
- **Learn:** responsive `sx`, iterating a `Record` with `keyof`, extending `IconButtonProps`
- **Done when:** content parity with the old hero/stack; clean at 375px and 1280px

### M5 · Projects + Certifications
- **Build:** project cards (`CardMedia` / `CardContent` / `CardActions`) with conditional **Live demo** button on `liveUrl` · certification cards → `credentialUrl` · **write descriptions for the 4 project screenshots** · optional generic `SectionGrid<T>`
- **Learn:** conditional rendering on optionals, generics in props, `Omit` / `Pick`
- **Done when:** every link click-verified; sensible keyboard focus order

### M6 · Experience timeline
- **Build:** `@mui/lab` Timeline — `position="alternate"` on desktop, left-aligned on mobile via `useMediaQuery` · `TimelineDot` icon/color from `entry.kind` via exhaustive `switch` with `never` default · **write the experience entries**
- **Learn:** the discriminated-union payoff, exhaustiveness checking, `useMediaQuery`
- **Done when:** alternating desktop / left-aligned mobile; dots follow `kind`

### M7 · Deploy + cutover
- **Build (Claude: workflow file; me: execution):** `deploy.yml` (build → `configure-pages` → `upload-pages-artifact` → `deploy-pages`) · cutover **in order**: ① branch pre-flight + delete legacy files (`styles.css`, `theme-toggle.js`, root `assets/`, leftover scaffold files) ② Settings → Pages → Source: **GitHub Actions** ③ PR-merge to `main` ④ verify prod
- **Learn:** CI/CD, the Pages artifact model, Actions permissions & environments
- **Done when:** the live site is the new one; both modes, resume PDFs, cert links, mobile all verified. Rollback = revert merge + flip source back

### M8 · Y2K polish
- **Build:** module augmentation adding `palette.gradient.holo` · `GradientText` (background-clip text) · `GlowButton` (layered box-shadow glow, `prefers-reduced-motion`-guarded) · holo divider strips · navbar `backdropFilter: blur(12px)` · card hover lift/glow · favicon from my logo · optional no-flash inline script
- **Learn:** module augmentation, `styled()` vs `sx`, `shouldForwardProp`, reduced motion
- **Done when:** Lighthouse accessibility ≥ 95; WCAG AA holds in both modes

### M9 · Next.js + NestJS capstone
- **Build (separate repo):** NestJS API with one resource (controller/service/DTO + class-validator, SQLite + Prisma) · Next.js App Router frontend (server-component fetch + one client form) · API on Render/Railway, frontend on Vercel · then add it to `projects.ts` with a `liveUrl`
- **Learn:** decorators, dependency injection, server vs client components, App Router

</details>

## Key decisions

| Decision | Choice | Why |
|---|---|---|
| Dark mode | MUI built-in `colorSchemes` + `useColorScheme`, not a hand-rolled context | Persistence, OS fallback, and cross-tab sync for free; `modeStorageKey="theme"` even carries over visitors' saved preference from the old site |
| Timeline | `@mui/lab` | Beta-tagged but API frozen for years; hand-rolling costs a week of CSS |
| Project links | `liveUrl?` (not `githubPagesUrl`) | Future projects may live on Vercel etc. — the name must generalize |
| Assets | `public/` for stable-URL files (resume, favicon); `src/assets/` for imported images | Hashed filenames + dead-asset detection for anything imported |
| Cutover | Flip Pages source to GitHub Actions **before** merging to `main` | Merging first would break the live site (branch `index.html` references unbuilt `/src/main.tsx`) |

## Gotchas I'm watching for

1. **Grid API trap** — pre-2025 tutorials show `<Grid item xs={12}>`; that API is gone. Use `<Grid size={{ xs: 12, md: 6 }}>`.
2. **`enum` won't compile here** (`erasableSyntaxOnly`) — string-literal unions instead. Type-only imports must be `import type { ... }` (`verbatimModuleSyntax`).
3. **Styling rule:** with CSS variables on, always `theme.vars.palette.*` and `theme.applyStyles('dark', …)` — never `theme.palette.mode` conditionals (silently render light values).
4. Both `@emotion/react` **and** `@emotion/styled` are required; missing `styled` fails at runtime, not install.
5. Icon imports as paths (`@mui/icons-material/GitHub`) keep Vite dev cold-start fast.
6. MUI X is also on v9 — easy to land on the wrong docs.

## Running locally

```bash
npm ci            # install
npm run dev       # dev server with HMR
npm run lint      # eslint
npm run build     # type-check (tsc -b) + production build
npm run preview   # serve the production build locally
```

Requires Node 20.19+ (CI uses 22).
