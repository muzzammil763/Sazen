# Sazen — Agent Guide

Sazen is an independent Astro static website for the studio's five apps: Rafeeq, Budget AI, 99 Names – Asmaul Husna, FM Crafts, and SalahLog. The project lives alongside Budget-AI in `Muzamil/Projects/Sazen` and uses Cloudflare Pages (`sazen.pages.dev`).

Read `docs/agents/site.md` before changing structure, app content, visuals, or deployment. Keep this file, that guide, and README.md consistent when adding/removing/renaming files or changing features.

## Rules

- Keep the hero phone frames fully visible on the page background, without a clipping backdrop or a bottom badge over the screens.
- Match Budget AI's website typography and aesthetic while retaining the actual Sazen logo and banner.
- Reuse real app icons/screenshots and keep their sources in `docs/asset-sources.json`; do not invent app screens, ratings, download counts, testimonials, or product claims.
- 99 Names and Asmaul Husna are one app, package `com.muzamil.asmaulhusna`.
- Keep website links and Google Play package IDs in `src/data/apps.ts`.
- Budget AI manual tracking is free. AI is paid with 5 free AI messages per month.
- Do not imply all apps share one data policy. Link to each app's official support and privacy information.
- Keep assets local, responsive layouts accessible, and content usable without JavaScript.
- No analytics, contact submissions, accounts, backend or client secrets are needed.
- Use `master` directly. Commit with a Conventional Commit prefix and a co-author trailer; push after verification. Keep credentials, `.env`, generated build output and dependency folders out of Git.

## Verification

```sh
npm run build
npm run check
```

For UI changes, verify desktop/mobile, dark mode, category filters, navigation, screenshot modal and keyboard behavior. This project has no Dart code; Budget AI's Flutter checks apply only when that app is changed.

Deploy with `npm run deploy`. Preserve the intended public Sazen Pages project; do not deploy to one of the individual app websites.
