# Changelog

## [0.1.2] - 2026-11-24

### Fixed
- `public/robots.txt` still named the GLS sitemap (left over from the GLS scaffold). The live file comes from `src/app/robots.ts` and was already right, but the stale file is corrected so it cannot leak back.

### Changed
- `@types/*` and `typescript` moved to devDependencies.
- Default language stays English (Dio's decision, confirmed 24 Nov 2026).

## [0.1.1] - 2026-11-24

### Fixed
- Quote requests went to the Formspree form named "GLS Quote Request", the same form the GLS site uses, so GIS requests reached the inbox labelled as GLS. The site now has its own form, "GIS Website", set through the repo secret `NEXT_PUBLIC_FORMSPREE_ID`.
- A build without a form ID showed visitors "success" while nothing was sent. It now shows the error state.
- Deploys had failed since 8 Apr 2026 because `@gama/website-data` came from a private repo; that repo is public now, so this is the first deploy since then.

## [0.1.0] - 2026-02-21

### Added
- Initial website with 12 pages
- Green/yellow design system (heavy-lift industrial aesthetic)
- Bilingual support (Indonesian + English)
- 3 service detail pages
- 4 project case studies
- Equipment catalog
- Leadership team page
- Photo gallery
- Contact form via Formspree
- Static export for Vercel deployment
