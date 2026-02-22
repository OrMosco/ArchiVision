# ArchiVision — Architecture & Design Studio Portfolio

A modern, fully-animated single-page portfolio app for an architecture studio, built with **React + Vite + TypeScript**.

## Features

- **Navbar** — Fixed header with scroll detection, transparent-to-frosted-glass transition, and mobile hamburger menu
- **Hero** — Full-viewport section with CSS animated geometric shapes and framer-motion entrance animation
- **Projects** — Responsive grid of 6 project cards with gradient visuals and hover overlays
- **About** — Two-column layout with key stats and a vertical milestone timeline
- **Services** — Four service cards with Lucide icons and staggered scroll animations
- **Contact** — Form with client-side validation, loading state, and success confirmation
- **Footer** — Multi-column footer with navigation, services, and contact links

## Tech Stack

- [React 19](https://react.dev/)
- [Vite 7](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Framer Motion](https://www.framer.com/motion/) — scroll-triggered and entrance animations
- [Lucide React](https://lucide.dev/) — icon library
- [Google Fonts](https://fonts.google.com/) — Playfair Display + Inter

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production build outputs to `dist/`.

## Design Tokens

All design variables are defined in `src/index.css` as CSS custom properties:

| Token | Value |
|---|---|
| `--primary` | `#1a1a2e` (deep navy) |
| `--accent` | `#c8a96e` (warm gold) |
| `--light` | `#f8f6f0` (off-white) |
| `--font-heading` | Playfair Display |
| `--font-body` | Inter |
