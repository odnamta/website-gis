# gamaintisamudera.com

Corporate website for **PT. Gama Intisamudera** — heavy-lift logistics, project cargo, and mechanical erection company based in Surabaya, Indonesia. Operating since 1995, part of the Gama Group.

## Tech Stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS 4 (custom `@theme` tokens)
- **Animations:** Motion (Framer Motion)
- **Icons:** Lucide React
- **Analytics:** Vercel Analytics
- **Contact:** Formspree
- **Deployment:** Vercel (static export)

## Getting Started

```bash
npm install
cp .env.example .env.local   # Set NEXT_PUBLIC_FORMSPREE_ID
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
| Home | `/` | Hero, services overview, stats, projects, testimonials |
| About | `/about` | Company story, vision & mission, timeline, certifications |
| Services | `/services` | 3 service categories overview |
| Service Detail | `/services/[slug]` | Freight forwarding, project cargo, mechanical erection |
| Projects | `/projects` | Project portfolio grid |
| Project Detail | `/projects/[slug]` | Individual project case studies |
| Equipment | `/equipment` | Heavy-lift equipment catalog |
| Team | `/team` | Leadership team profiles |
| Gallery | `/gallery` | Photo gallery |
| News | `/news` | Company and industry news |
| Careers | `/careers` | Open positions and culture |
| Partners | `/partners` | Client and partner logos |
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
    data/        # Static data (services, projects, equipment, team, etc.)
    i18n/        # Translations and language context
public/
  logo.png       # Company logo
  images/        # Optimized images
```

## Deploy

Push to `main` branch. Vercel auto-deploys on push.

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_FORMSPREE_ID` | Formspree form endpoint ID (required for contact form) |
