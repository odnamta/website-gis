# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Changed
- Refactored all 11 pages from `'use client'` to Server Components with exported `metadata`
- Extracted page content into dedicated `*Content.tsx` client components
- Added `<label>` elements (sr-only) to all contact form fields for accessibility
- Added `aria-label` to tracking input field

### Added
- Per-page SEO metadata (title, description, canonical, openGraph) for all routes
- README.md with project overview and documentation
- CHANGELOG.md

## 2026-02-21

### Fixed
- `9c6be7f` — Stats labels, client section, favicon, OG image deep review fixes
- `ccff7e3` — Remove white background from logo, switch to transparent PNG

### Changed
- `ed7a090` — Accessibility, i18n, and UX improvements
- `a57995b` — Hide leadership section until team data is ready
- `b93ba76` — Anonymize team placeholder names until real data is ready

### Added
- `9d7599b` — Integrate real GLS gold phoenix logo

## 2026-02-20

### Changed
- `874df58` — Reframe narrative: Gama Group 1995 heritage, GLS launched 2026

### Fixed
- `de58e86` — Update phone number to +6282233181811
- `c76529a` — Correct street name typo (Nasir, not Nazir)
- `ad0a003` — Update office address to Jl. Laksda M. Nazir 12 A
- `a1f8aaf` — Update domain references to gls-id.com

### Added
- `356a645` — Initial GLS corporate website scaffold
