# Sazen

The Sazen studio and app collection website, built with Astro and deployed to Cloudflare Pages at **https://sazen.pages.dev**.

Matches Budget AI's marketing stack and visual vocabulary: locally hosted Boldonse and Google Sans fonts, bold headings, monochrome controls, rounded surfaces, pastel app stages, real screenshots, and automatic light/dark themes.

## App collection

| App | Sazen page | App website | Android package |
| --- | --- | --- | --- |
| Rafeeq | `/apps/rafeeq` | https://rafeeq.pages.dev | `com.satechdev.rafeeqapp` |
| Budget AI | `/apps/budget-ai` | https://budgetai-app.pages.dev | `com.budgetai.android` |
| 99 Names – Asmaul Husna | `/apps/99-names` | https://99asmaulhusna.pages.dev | `com.muzamil.asmaulhusna` |
| FM Crafts | `/apps/fm-crafts` | https://fmcrafts.web.app | `com.fmcrafts.fmcrafts` |
| SalahLog | `/apps/salahlog` | The Sazen page serves as its landing page | `com.track_prayer` |

99 Names and Asmaul Husna are one app. The local `asmaul_husna` folder contains build artifacts for the `99-Names` project. Budget AI is included as requested even though the developer page fetched on 23 October 2026 listed only the other four apps. Its package URL comes from Budget AI's own website source.

All five apps have icons, three full screenshots, a Google Play link, and an individual page. The collection has category filters; app pages have a keyboard-accessible screenshot dialog. The homepage includes Sazen's official banner, studio introduction, FAQs, and support links. `/privacy` explains website-only privacy; each app's store listing remains the source for its own policies. Content and navigation work without JavaScript; filters and image enlargement enhance the page when JavaScript is available.

## Development

Use Node 22.12 or newer.

```sh
npm ci
npm run dev
```

```sh
npm run build
npm run check
npm run preview
```

`check` verifies generated page metadata, local asset references, page links, anchors, structured data, and deployment support files. Browser QA should cover 320px, 390px, 768px and desktop widths; filters; the mobile menu; all app galleries; Escape/focus behavior; dark mode; reduced motion; and no-JavaScript content. Flutter checks do not apply to this independent Astro project.

## Publishing

Production branch: `master`. The Cloudflare Pages project is `sazen`.

```sh
npx wrangler@4 login
npm run deploy
```

The deploy script builds and checks the site before uploading `dist/`. The existing `sazen` Pages project is already created. For a new Pages project, use `npx wrangler@4 pages project create NAME --production-branch master --force`: current Wrangler otherwise delegates new project creation to Workers and returns a `workers.dev` address. The flag is only needed at creation. No API tokens or environment secrets belong in this repository. Wrangler uses the local authenticated account.

For a different Pages project, change the deploy script's `--project-name` and set `SITE_URL` at build time (or change the default in `astro.config.mjs`). Canonical links, social links, sitemap and robots all derive from that origin. Alternative project names, if ever needed: `sazen-apps`, `sazen-studio`, `madebysazen`; their availability must be checked with Cloudflare.

## Maintenance

- `src/data/apps.ts`: app copy, package IDs, website links, screenshot captions, and categories.
- `src/pages/index.astro`: homepage, filters and studio content.
- `src/pages/apps/[slug].astro`: generated app landing pages.
- `src/components/Gallery.astro`: full screenshot galleries.
- `src/layouts/Base.astro`: shared navigation, footer, SEO, and accessible modal.
- `src/styles/global.css`: visual system, responsive layout, light/dark themes.
- `public/images/`: locally served, optimized real app assets.
- `docs/asset-sources.json`: asset provenance, using paths relative to the sibling Projects folder and public Google Play CDN URLs.

There are no accounts, forms, cookies, analytics scripts, remote fonts, or backend services. Keep Budget AI pricing accurate: free manual tracking; paid AI with 5 free messages monthly. See [AGENTS.md](AGENTS.md) and [the site guide](docs/agents/site.md).

Store-link verification on 23 October 2026: the four existing app websites returned HTTP 200. Budget AI’s configured Google Play package URL returned HTTP 404, so its CTA says “Check Google Play”; the intended package link is retained, alongside its working website. Confirm publication/region availability in Play Console.
