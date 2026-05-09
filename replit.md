# Curious Earth

A content-rich science and nature website covering Astronomy, Biology, Geology, Ecology, and Weather — designed for Google AdSense approval with 70 full-length educational articles, professional design, custom Earth-themed favicon, dedicated Authors / Editorial Standards / FAQ / Glossary pages, sitemap.xml + robots.txt, and required legal pages.

## Run & Operate

- `pnpm --filter @workspace/curious-earth run dev` — run the Curious Earth site (via workflow)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- No backend or database needed — 100% static content

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 18 + Vite, Tailwind CSS v4, wouter (routing), shadcn/ui components
- Fonts: Playfair Display (serif headings) + Source Sans 3 (body) via Google Fonts
- No API server, no database — fully static

## Where things live

- `artifacts/curious-earth/src/App.tsx` — routing setup (Home, About, Contact, 3 legal pages, 5 category routes, 5 dynamic article routes)
- `artifacts/curious-earth/src/data/articles.ts` — single source of truth for all 25 articles, plus typed schema and helper functions (`articlesByCategory`, `getArticle`, `featuredByCategory`)
- `artifacts/curious-earth/src/components/ArticlePage.tsx` — generic article renderer (uses `useRoute("/:category/:slug")`)
- `artifacts/curious-earth/src/components/CategoryPage.tsx` — generic category index (featured + grid)
- `artifacts/curious-earth/src/components/Layout.tsx` — sticky nav, mobile menu, rich footer (links to /privacy, /terms, /disclaimer, /contact), scroll progress, back-to-top
- `artifacts/curious-earth/src/pages/` — home, about, contact, privacy, terms, disclaimer, not-found (NO per-category page files — those are now generic)

## Architecture decisions

- **Data-driven articles.** All 25 articles live in `src/data/articles.ts` as structured objects (sections, stats, pull quotes, takeaways, references). New articles are added by appending to the array — no new components needed.
- **Generic renderers.** `ArticlePage` and `CategoryPage` render any article/category from data. Routing is `/:category` (index) and `/:category/:slug` (article).
- **Per-category visual presets.** `ASTRONOMY`, `BIOLOGY`, etc. are spread into each article record so all articles in a category share gradient/accent/badge styling.
- wouter's `<Link>` renders directly as `<a>` — never nest an `<a>` inside it.
- Tailwind CSS v4 with HSL CSS custom properties for theming; dark mode variables defined in `.dark` class.
- Using `import.meta.env.BASE_URL` in the WouterRouter base for proper proxy routing.

## Product

- 15 static routes: Home, About, Contact, Privacy, Terms, Disclaimer, Editorial Standards, Authors, FAQ, Glossary, plus 5 category indexes — and dynamic article routes.
- 70 articles (14 per category), each 500–1,200+ words.
  - *Astronomy:* stellar lifecycle, black holes, exoplanets, dark matter, solar system tour, galaxies, neutron stars/pulsars, the Moon, comets & asteroids, Big Bang cosmology, gravitational waves, the Sun, meteors & meteorites, search for life
  - *Biology:* photosynthesis, DNA, evolution, immune system, animal migration, the cell, human microbiome, science of sleep, viruses, the brain, mitochondria, animal communication, CRISPR, microbial life
  - *Geology:* plate tectonics, volcanoes, earthquakes, atmosphere, minerals, caves & karst, glaciers & ice sheets, fossils & deep time, rock cycle, deep ocean, mountain building, water cycle, ice ages, geothermal energy
  - *Ecology:* food webs, climate crisis, coral reefs, mass extinction, soil, rainforests, wetlands, invasive species, pollinators, plastic pollution, freshwater ecosystems, urban ecology, ocean acidification, biodiversity hotspots
  - *Weather:* hurricanes, tornadoes, lightning, El Niño, polar vortex, clouds & precipitation, jet stream, fog/dew/frost, monsoons, drought, high & low pressure, weather vs. climate, ozone layer, atmospheric circulation
- Custom Earth-themed SVG favicon and OpenGraph/SEO meta tags in `index.html`.
- `public/sitemap.xml` and `public/robots.txt` for search engine discovery (sitemap uses placeholder domain `curiousearth.example.com` — update before launch).
- Features: sticky nav, scroll progress, newsletter CTA, did-you-know facts strip, category cards, featured + sidebar article cards, related-articles section on each article, contact form, FAQs, "Write for Us" section, rich footer.

## User preferences

- Site intended for Google AdSense approval — prioritizes original, accurate, long-form content.
- Forest green primary (`hsl(149 55% 23%)`), warm amber accent (`hsl(38 92% 50%)`), cream background, dark navy foreground.

## Gotchas

- Never nest `<a>` inside wouter's `<Link>` — Link already renders as `<a>`.
- Tailwind v4 uses `@theme inline` and `@import "tailwindcss"` — do not use the v3 config style.
- The category route order in `App.tsx` matters: define `/:category` before `/:category/:slug` so category indexes render at the bare path.

## Pointers

- See the `pnpm-workspace` skill for workspace structure and TypeScript setup.
- See `react-vite` skill for Vite config patterns.
