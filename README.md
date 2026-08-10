# mariaalexissales.github.io

[![CI](https://github.com/mariaalexissales/mariaalexissales.github.io/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/mariaalexissales/mariaalexissales.github.io/actions/workflows/ci.yml)
[![Deploy](https://github.com/mariaalexissales/mariaalexissales.github.io/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/mariaalexissales/mariaalexissales.github.io/actions/workflows/deploy.yml)

My developer portfolio. Single page, built with Vite, React and MUI, deployed to GitHub Pages.

**[mariaalexissales.github.io](https://mariaalexissales.github.io/)**

## Features

- **Dark and light schemes with no repaint.** Both palettes are MUI `colorSchemes` compiled to CSS
  variables, so the toggle swaps custom properties instead of re-rendering. A pre-hydration script
  applies the stored choice before first paint, so there is no flash on a cold load.
- **Content is data.** Every section reads a typed module in `src/data/`. Adding a job, project or
  certificate is one entry in an array. No JSX is touched.
- **Conditional project links.** `Project.liveUrl` is optional and its button label is
  overridable, so a Pages demo, a Steam Workshop listing and a repo-only project all render from
  the same card.
- **Experience timeline.** `@mui/lab` `Timeline` with a fixed date gutter on desktop that folds
  into the card on mobile, so every entry starts on the same edge. Entries are a discriminated
  union on `kind`, and the dot comes from an exhaustive `switch`, so a new kind without a dot
  fails the build.
- **Accessible by default.** Skip link, a focus ring tuned for both schemes, labelled icon
  buttons, and every text/background pair at 4.5:1 or better.
- **Motion is opt-in.** Card lift, button glow and smooth scrolling all sit behind
  `prefers-reduced-motion: no-preference`.

## Tech stack

| Layer | Choice |
|---|---|
| Build | Vite 8, TypeScript 6 |
| UI | React 19, MUI 9 (`@mui/material`, `@mui/icons-material`, `@mui/lab`) |
| Styling | Emotion, MUI CSS theme variables |
| Fonts | Space Grotesk, Inter, Space Mono, self-hosted via Fontsource |
| CI/CD | GitHub Actions to GitHub Pages |

## Design

The palette is shared with my [go-ledger](https://github.com/mariaalexissales/go-ledger) console:
near-black grounds, violet chrome, magenta emphasis, cyan accent, and a holographic gradient on
the headline and section rules.

| Token | Dark | Light |
|---|---|---|
| background (default / paper) | `#0A0711` / `#150E24` | `#F4F1FA` / `#EAE4F5` |
| primary, violet | `#B78CFF` | `#5B2FBF` |
| secondary, magenta | `#E85FFF` | `#A81FB0` |
| accent, cyan | `#6FE3FF` | `#0E6E8C` |
| text (primary / secondary) | `#E9E3F5` / `#8478A6` | `#1A1226` / `#655A85` |

The schemes are not the same hues at different lightness. Violet `#B78CFF` measures 2.6:1 on
white, so light mode drops to `#5B2FBF`. Magenta and gold are darkened further because most text
sits on a card, not the page. Light mode also inverts the usual Material stacking: its surfaces
descend in lightness, so cards sit recessed into the page instead of lifted off it.

## Architecture

```
src/
├── main.tsx              InitColorSchemeScript + ThemeProvider + CssBaseline + fonts
├── App.tsx               composition only: SkipLink / Navbar / sections / Footer
├── theme/
│   ├── tokens.ts         raw color ramps and font stacks, no MUI imports
│   ├── theme.ts          createTheme with both colorSchemes and component overrides
│   └── mui.d.ts          palette augmentation for the ramp and the holo gradient
├── data/                 typed content: types, hero, techStack, projects,
│                         experience, certifications
└── components/
    ├── layout/           Navbar (sticky, blurred) · Footer
    ├── common/           Section · ThemeToggle · SkipLink · SocialIcon ·
    │                     GradientText · GlowButton
    └── sections/         Hero · TechStack · Projects · ExperienceTimeline · Certifications
```

## Running locally

```bash
npm ci
```

```bash
npm run dev
```

`npm run lint` for ESLint, `npm run build` to type-check and build, `npm run preview` to serve the
build. Needs Node 20.19+. CI runs 22.

## Deployment

Pushes to `main` run `.github/workflows/deploy.yml`, which builds and publishes `dist/` as a Pages
artifact.

Settings → Pages → Source has to be set to **GitHub Actions**. On "Deploy from a branch" GitHub
serves the repo root verbatim, so the browser gets the source `index.html`, asks for
`/src/main.tsx`, refuses to run it as a module, and the page renders empty.
