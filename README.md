# gls-id.com

Corporate website for **PT Gama Lintas Samudera** — international freight forwarding company based in Surabaya, Indonesia. Part of the Gama Group.

Live at [gls-id.com](https://gls-id.com)

## Tech Stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS 4 (custom `@theme` tokens)
- **Animations:** Motion (Framer Motion)
- **Icons:** Lucide React
- **Analytics:** Vercel Analytics
- **Contact:** Formspree + WhatsApp
- **Deployment:** Vercel (static export)

## Getting Started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static files are exported to `out/`.

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, services overview, stats, testimonials |
| About | `/about` | Company story, vision & mission, certifications |
| Services | `/services` | 6 service categories overview |
| Service Detail | `/services/[slug]` | Individual service pages |
| Routes | `/routes` | Trade lanes and coverage map |
| Track | `/track` | Shipment tracking |
| Case Studies | `/case-studies` | Client success stories |
| News | `/news` | Company and industry news |
| Careers | `/careers` | Open positions and culture |
| Partners | `/partners` | Shipping lines, agents, associations |
| Contact | `/contact` | Quote request form |
| FAQ | `/faq` | Frequently asked questions |

## Bilingual

Full Indonesian + English support via React Context. Toggle in navbar or use `?lang=en`.

## Project Structure

```
src/
  app/           # Pages (App Router)
  components/    # Feature-grouped components
  lib/
    data/        # Static data (services, routes, FAQ, etc.)
    i18n/        # Translations and language context
public/
  logo.png       # Company logo
  images/        # Optimized images
```
