# CLAUDE.md — GIS Corporate Website

## Project Overview
Corporate website for **PT. Gama Intisamudera** — heavy-lift logistics and project cargo company, est. 1995, Surabaya, Indonesia. Part of the Gama Group.

**Purpose:** Professional corporate web presence. Services showcase, project portfolio, quote requests, company information.
**Domain:** gamaintisamudera.com

## Tech Stack
- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS 4 (`@theme` tokens)
- **Animations:** motion (Framer Motion)
- **Icons:** lucide-react
- **Deployment:** Cloudflare Pages via GitHub Actions (static export `out/`, `.github/workflows/deploy.yml` on push to main)
- **Forms:** Formspree, form "GIS Website" in Dio's account (its own form since 24 Nov 2026; before that it shared the GLS form). The ID comes from the GitHub Actions repo secret `NEXT_PUBLIC_FORMSPREE_ID`, inlined at build time.
- **Shared data:** `@gama/website-data` from the public repo odnamta/gama-website-data (private until 24 Nov 2026, which broke every deploy from 8 Apr)
- **Default language: English** (Dio, 23 Feb 2026, confirmed 24 Nov 2026). Indonesian is the toggle. Do not flip it. Branch `pending/post-audit-cleanup-2026-05` (agent commit, 1 May 2026) tried to; its robots file and devDependencies parts shipped in 0.1.2. Keep the branch for reference only, never ship it.
- **Fonts:** Poppins (headings) + Inter (body) via `next/font/google`
- **i18n:** Client-side React Context, ID/EN toggle, `?lang=en` support

## Design System
- **Primary:** Green #0D4D25
- **Accent:** Yellow #F5C518
- **Surface:** #F5F5F0
- **Style:** Bold, industrial, Mammoet-inspired dark sections

## Pages
| Route | Page |
|-------|------|
| `/` | Home — hero, services, stats, projects, testimonials, news |
| `/about` | Company story, vision & mission, timeline, certifications |
| `/services` | 3 service categories overview |
| `/services/[slug]` | Service detail (freight-forwarding, project-cargo, mechanical-erection) |
| `/projects` | Project portfolio grid |
| `/projects/[slug]` | Project case study detail |
| `/equipment` | Heavy-lift equipment catalog |
| `/team` | Leadership team profiles |
| `/gallery` | Photo gallery |
| `/news` | Company and industry news |
| `/careers` | Open positions and culture |
| `/partners` | Client and partner logos |
| `/contact` | Quote request form (Formspree) |
| `/faq` | Frequently asked questions |

## Commands
```bash
npm run dev          # Dev server (localhost:3000)
npm run build        # Production build (static export to out/)
```

## Architecture
- All user-facing text through i18n — no hardcoded strings
- Data layer: `src/lib/data/` — static TS data files
- Shared components: `src/components/shared/` — reusable UI primitives
- Layout: PageWrapper wraps LanguageProvider + Navbar + Footer
- Mega-menu: Services dropdown with icons and descriptions
- Pages are Server Components; content extracted to `*Content.tsx` client components

## Rules
- `output: 'export'` — no server-side features (no API routes, no SSR)
- All images via next/image (unoptimized for static export)
- Mobile-first responsive design
- Lighthouse target: 95+ all metrics
- Indonesian locale default, English toggle
