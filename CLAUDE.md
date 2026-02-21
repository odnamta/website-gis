# CLAUDE.md — GLS Corporate Website

## Project Overview
Corporate website for **PT Gama Lintas Samudera** — international freight forwarding agency based in Surabaya, Indonesia. Part of the Gama Group.

**Purpose:** Professional corporate web presence for GLS. Services showcase, quote requests, company information.

## Tech Stack
- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS 4 + `@theme` (navy blue + gold)
- **Animations:** motion (Framer Motion)
- **Icons:** lucide-react
- **Deployment:** Vercel (static export)
- **Forms:** Formspree
- **Analytics:** @vercel/analytics
- **Fonts:** Poppins (headings) + Inter (body) via `next/font/google`
- **i18n:** Client-side React Context, ID/EN toggle, `?lang=en` support

## Design System
- **Primary:** Navy #0B1D3E
- **Accent:** Gold #C5963A
- **Surface:** Slate #F8FAFC
- **Font heading:** `font-heading` (Poppins)
- **Font body:** `font-sans` (Inter)

## Pages (10 routes + dynamic)
| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About |
| `/services` | Services overview |
| `/services/[slug]` | Service detail (6 sub-pages) |
| `/routes` | Routes & coverage |
| `/case-studies` | Case studies grid |
| `/case-studies/[slug]` | Case study detail |
| `/news` | News |
| `/careers` | Careers |
| `/partners` | Partners |
| `/contact` | Contact / quote form |
| `/faq` | FAQ |

## Commands
```bash
npm run dev          # Dev server
npm run build        # Production build (static export)
```

## Architecture
- All user-facing text through i18n (no hardcoded strings)
- Data layer: `src/lib/data/` — 12 data files
- Shared components: `src/components/shared/` — 12 reusable components
- Layout: PageWrapper wraps LanguageProvider + Navbar + Footer
- Mega-menu: Services dropdown with icons and descriptions

## Rules
- `output: 'export'` — no server-side features
- All images optimized via next/image (unoptimized for static export)
- Mobile-first responsive design
- Lighthouse target: 95+
