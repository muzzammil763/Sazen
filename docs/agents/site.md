# Sazen site architecture and features

## Structure

```text
astro.config.mjs              Static build, production origin, clean URL output
src/data/apps.ts             Five apps, copy, features, captions, store/website URLs
src/layouts/Base.astro        SEO, header, mobile menu, footer, screenshot dialog
src/components/Arrow.astro   Shared arrow glyph
src/components/Play.astro    Play link glyph
src/components/Gallery.astro Three real screenshots, enlargement buttons
src/pages/index.astro        Hero, app ribbon, filtered catalog, banner/about, FAQs, CTA
src/pages/apps/[slug].astro  Five individual app pages, galleries, related apps
src/pages/privacy.astro      Website privacy and individual app policy pointers
src/pages/404.astro          Helpful not-found page
src/pages/robots.txt.ts      Crawl rules derived from configured origin
src/pages/sitemap.xml.ts     Home, all app pages, privacy
src/styles/global.css       Shared layout, type, responsive rules, dark/reduced-motion
public/fonts/               Budget AI's self-hosted Boldonse and Google Sans
public/images/              Official Sazen logo/banner; 5 icons and 15 screenshots
public/{favicon,apple-touch-icon,og}.png  Brand and social assets
public/_headers             Cloudflare cache and security response headers
scripts/check-site.mjs       Build-output route, asset, anchor and metadata checks
docs/asset-sources.json      Local project paths and official Play asset sources
```

The site is a static Astro build without framework hydration, server APIs, or third-party runtime dependencies. Plain browser scripts handle filters, the mobile menu and a native `<dialog>`. `dist/` is the Cloudflare upload directory; it is not committed.

## Experience

The home hero shows three real app screens and all five app icons. The phone composition scales proportionally on the page background, with complete frames visible at every breakpoint. It has no colored clipping backdrop, orbit rings, or bottom badge covering the screens. The collection includes Rafeeq, Budget AI, 99 Names – Asmaul Husna, FM Crafts, and SalahLog. Category filters use buttons with pressed states and a live result count. They are hidden until JavaScript initializes, so the full catalog remains available without scripts. Following an app anchor after filtering reveals that app again.

Every card links to an individual Sazen page, the exact Google Play package URL and its app website. SalahLog uses `/apps/salahlog` as its website. Each individual page has feature highlights, three full screenshot images, an accessible enlargement dialog, download/support links, and links to the other four apps. Mobile galleries scroll horizontally without creating page overflow.

Shared navigation uses native `<details>` on mobile. Screenshot dialogs close by Escape, close button, or backdrop; native dialog behavior manages focus. Motion respects the OS reduced-motion preference. Color themes follow the system, with readable pastel stages in both light and dark modes.

The original Sazen developer banner is presented in About and supplies the social image. The footer links to individual app pages, Google Play and website privacy. No app policies are consolidated into a studio-wide claim.

## Content provenance

The local Budget AI, Rafeeq, 99-Names and FM-CRAFTS websites supply app content and screenshots. SalahLog images come from the public Google Play listing for `com.track_prayer`. Sazen branding comes from developer ID `5262989636703605828`, fetched directly on 23 October 2026. Older search caches still call the studio SA Apps Dev; use the verified current name Sazen.

`99-Names` and `asmaul_husna` identify the same Android package and must not be duplicated. No local SalahLog source or separate landing website was found, so its Sazen page is the landing destination. Budget AI's store URL is taken from its own website project; it was not listed on the fetched developer collection at implementation time.

Assets are optimized as WebP and served locally. Source path provenance is relative to `Muzamil/Projects`, not a build-time dependency; Sazen is self-contained.

## Deployment and verification

Run `npm run build` then `npm run check`. The latter validates all generated local references, not external service availability. Verify real browser behavior after UI changes. Production publication uses Cloudflare Pages project `sazen`, branch `master`, `dist/` output. `SITE_URL` can override the origin, with metadata, robots and sitemap following it automatically.

Do not store Cloudflare/GitHub tokens in files. No changes to Budget AI's Flutter app or other sibling projects are needed for site updates.

Store-link verification on 23 October 2026: the four existing app websites returned HTTP 200. Budget AI’s configured Google Play package URL returned HTTP 404, so its CTA says “Check Google Play”; the intended package link is retained, alongside its working website. Confirm publication/region availability in Play Console.

Cloudflare CLI note: Wrangler 4.152 automatically delegates new Pages projects to Workers. The Sazen Pages project was explicitly created with `pages project create sazen --production-branch master --force` to preserve the requested `pages.dev` domain. Routine deployments use the existing project without that flag.
