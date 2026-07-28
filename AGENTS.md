# Agent Instructions — amazepms

## Project Overview

Next.js 16 marketing site (App Router) for a property management system. JavaScript only (no TypeScript).

## Key Stack

- **Next.js 16** with App Router (`src/app/`)
- **React 19** with **React Compiler** enabled (`next.config.mjs` → `reactCompiler: true`)
- **Tailwind CSS v4** (PostCSS plugin `@tailwindcss/postcss`, no `tailwind.config` file)
- **HeroUI** (`@heroui/react` + `@heroui/styles`) for UI components
- **Framer Motion** (`motion` package) for animations
- `@/*` path alias → `./src/*`

## Commands

```bash
npm run dev        # dev server on :3000
npm run build      # production build
npm run lint       # eslint (core-web-vitals preset)
```

No test runner or typecheck is configured. `npm run build` is the best compile-time check.

## App Structure

```
src/
  app/
    layout.js          # Root layout (Inter font, Navbar + Footer wrap all pages)
    page.js            # Home — Banner, Clients, FeatureShowcase
    globals.css        # Tailwind v4 + HeroUI styles
    features/page.jsx
    solutions/page.jsx
    contact/page.jsx
  Components/
    Banner/            # Hero banner + DashboardMockup
    Clients/           # Client logo marquee
    FeatureShowcase/   # Sticky scroll section with stat cards, animated chart, dashboard preview
    Navbar/            # Nav with MyNavLink helper
    Footer/
  assets/              # Static images (logo, client logos)
```

## Gotchas

- **Tailwind v4 has no `tailwind.config.js`**. Theme customization is done via `@theme` block in `globals.css`. Do not look for a config file that doesn't exist.
- **React Compiler is on**. Avoid wrapping things in `useMemo`/`useCallback` unnecessarily — the compiler handles optimization.
- **No TypeScript**. The project uses `.js`/`.jsx` with `jsconfig.json` for path aliases.
- **No `.env` files committed**. They're gitignored. Check with the user if any env vars are needed for a feature.
- **HeroUI styles** must be imported via `globals.css` (`@import "@heroui/styles"`). Do not import them per-component.
