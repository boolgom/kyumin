# Kyumin — Personal portfolio

A personal portfolio built with Next.js App Router, React, TypeScript, and CSS.

## Local development

Use Node.js 24 and pnpm 11.

```bash
pnpm install
pnpm dev --hostname 127.0.0.1 --port 3100
```

## Content and routes

The homepage leads with the two acquisitions, followed by separate Career, Projects, and Made at home sections. Career lists company roles from 2014 to the present; Projects lists product and engineering work from 2009 to 2026. Both are chronological, with home builds kept outside the timelines.

Every project has a permanent `/projects/[slug]/` route with its own title, description and sharing metadata, role, dates, technical notes, photographs, related links, and a copy-link button with a manual fallback.

The 13 project slugs are: accelerometer-tracking, ipad-ebook, little-mask, entry, entry-python, vision-secretary, commerce-automation, traw, goodnotes-ai-meetings, rect, aluminum-tv, korean-bbq-table, and framed-display.

- `src/content/portfolio.ts`: public copy, project dates, image captions, and external links.
- `src/components/career.tsx`: chronological company roles and current company.
- `src/components/projects.tsx`: chronological product and engineering projects.
- `src/components/builds.tsx`: home builds, kept outside the timeline.
- `src/app/projects/[slug]/page.tsx`: project pages and route metadata.
- `src/components/project-gallery.tsx`: original images and captions.
- `src/components/share-project.tsx`: copy-link behavior and manual fallback.
- `src/app/globals.css`: responsive layout and typography.
- `public/images/projects/`: 14 unchanged images from the owner's project document and the owner-supplied Vision-secretary demo image.

Copy is based on the owner's career history and project document. The owner confirmed Little Mask as 2012, commerce automation as 2019, and Rect.work as 2026. Home builds have no invented dates. Entry Python is labeled with the Entry employment period because its individual release date was not supplied.

Entry's public-education adoption role is owner-supplied. Its current elementary and middle-school textbook adoption is supported by [Entry's official introduction](https://playentry.org/about). Little Mask's ranking is explicitly **Round 2** of the Imagine Cup Windows Phone Game category.

The current venture is disclosed only as a hardware company, with the owner's co-founder and CEO role. Do not add its product, audience, customers, or other private details. Personal contact details, birth dates, equity, other people's biographies, and the source application document are not included in the public site. Unverified patent status is omitted. Small historical screenshots retain their original resolution; no invented product screenshots are used.

## Validation and static hosting

```bash
pnpm typecheck
pnpm build
```

`output: "export"`, `trailingSlash: true`, and `generateStaticParams` produce the homepage and all 13 project pages in `out/`. Images use `unoptimized: true` so they work without an image server. Serve `out/` with a static server instead of `next start`:

```bash
python3 -m http.server 3101 --bind 127.0.0.1 --directory out
```

The GitHub Actions workflow in `.github/workflows/pages.yml` builds and deploys on every push to `master`, or by manual dispatch. Set the repository's Pages source to GitHub Actions first. GitHub Pages requires a public repository on GitHub Free, or a supported paid plan for a private repository.

The workflow reads the configured Pages URL and sets `NEXT_PUBLIC_BASE_PATH` and `NEXT_PUBLIC_SITE_URL` at build time. This supports both `https://boolgom.github.io/kyumin/` and a custom domain, including image URLs, canonical URLs, and project links. Local development uses the root path. To check the default Pages build locally:

```bash
NEXT_PUBLIC_BASE_PATH=/kyumin NEXT_PUBLIC_SITE_URL=https://boolgom.github.io/kyumin pnpm build
```

For a custom domain, first add it in GitHub Settings → Pages. In GoDaddy DNS, point the chosen hostname to GitHub Pages using the [official GitHub DNS instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site). Run the deployment workflow again after changing the domain so the generated paths and metadata match. Enable Enforce HTTPS when the certificate is ready.

The UI uses plain CSS and system fonts. The only custom client component is the share-link control; the site does not require a database, authentication, or state-management library.
