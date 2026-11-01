# Muhammad Nandha Chrismawan

**Software Developer · Surabaya, Indonesia**

My personal portfolio: a place to explain the software I build, the work I
contribute to, and the experience behind it. I focus on web interfaces, API
integration, and frontend application architecture.

[GitHub](https://github.com/nandhach/) ·
[LinkedIn](https://www.linkedin.com/in/nandhachrismawan/) ·
[Email](mailto:nandhachrismawan@gmail.com)

## Inside the portfolio

- **Home** — introduction and selected technologies.
- **About** — PENS education, frontend internships, and freelance experience.
- **Projects** — five bilingual case studies with explicit responsibilities,
  implementation decisions, outcomes, and delivery limitations.
- **Achievements** — certifications, internship recognition, copyright records,
  and an IES exhibition certificate, with searchable tags and certificate dialogs.
- **Contact** — direct email, GitHub, and LinkedIn links.

English and Indonesian are available under `/en` and `/id`; English is the default.
The layout supports light/dark themes, desktop navigation, and a mobile menu.

### Selected work

| Project                       | Context                                                                                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| FMS — Fleet Management System | Individual final-project frontend; modular architecture, shared API integration, SSE, limited-connectivity PWA. Internal academic demonstration. |
| Spectra                       | Sole frontend developer in a two-person freelance team; deployed assessment platform used at two annual events.                                  |
| Ride-hailing                  | Web frontend in a four-person internship team; REST, maps, and Socket.IO. Local internal-testing MVP.                                            |
| NKRI                          | Internship contributions to an internal communication prototype: design tokens, authentication UX, browser media, and conversation management.   |
| Chat App                      | Individual learning project using Convex and Clerk/Svix; local-only.                                                                             |

Case studies distinguish my contributions from backend, mobile, and other team
members' work. Project technology lists describe implementation, not a blanket
claim of proficiency in every technology.

## Implementation

- Next.js **14.1**, App Router; React **18**; TypeScript.
- Tailwind CSS **v3**, Framer Motion, React Icons.
- `next-intl` for locale-aware routes and interface copy.
- Local TypeScript data and Markdown for portfolio content.
- ESLint and Prettier for source consistency.

Core content does not require a database or CMS. Projects and achievements are
read through local services at build time. Project detail Markdown is loaded by
locale and stable slug. The portfolio exports static HTML/CSS/JS to `out/` for
GitHub Pages; achievement filters run in the browser, preserving query URLs.

```text
app/[locale]/           Pages, page metadata, shared locale layout
app/_legacy/            Archived route/API entrypoints; excluded from routing
common/constants/       Profile, skills, experience, education, navigation
common/components/      Shared layout and UI elements
common/types/           Content contracts
contents/               Projects, achievements, bilingual case studies
messages/               English and Indonesian interface copy
modules/                Feature components
services/               Local content services and retained integrations
public/images/          Avatar, neutral covers, logos, certificates
docs/                   Editing, visual, asset, and setup guides
scripts/                Static export finalization and artifact checks
.github/workflows/      Manually triggered GitHub Pages deployment
```

## Local development

Use Node.js compatible with Next.js 14 (minimum **18.17**) and npm. Use a currently
supported Node.js release for your environment. The repository contains both
`package-lock.json` and `bun.lockb`; the documented workflow uses npm.

1. Clone `https://github.com/nandhach/portfolio-v1.git`, then open that folder.
2. Install the locked dependencies:

   ```sh
   npm ci
   ```

3. Copy `.env.example` to `.env.local` if you need explicit domain configuration.
   The core portfolio works with the localhost metadata fallback.
4. To preview manually on your machine:

   ```sh
   npm run dev
   ```

5. Open `http://localhost:3000/en` or `http://localhost:3000/id`.

The preview commands are for the maintainer. Agent verification in this repository
uses source checks and builds; it does not launch a local server or browser.

### Checks

```sh
npm run lint
npx --no-install tsc --noEmit
npm run build
npm run check:export
git diff --check
```

There is no automated test script. Visual and interaction checks are performed
manually. Detailed setup, optional integrations, and known build messages are
documented in [Setup & troubleshooting](docs/SETUP.md).

## Editing this portfolio

The following guides are written in Indonesian for day-to-day maintenance:

- [Content management](docs/CONTENT_MANAGEMENT.md) — exact files, field contracts,
  complete editing recipes, bilingual content, adding and hiding entries.
- [Micro visual customization](docs/VISUAL_CUSTOMIZATION.md) — spacing, type,
  colors, responsive layout, card anatomy, dialogs, hover/focus, motion.
- [Asset guide](docs/ASSET_GUIDE.md) — image preparation, SVG covers, logo mapping,
  certificates, optional PDFs, filename encoding.
- [Setup & troubleshooting](docs/SETUP.md) — environment variables, commands,
  diagnostics, manual verification.
- [GitHub Pages deployment](docs/GITHUB_PAGES.md) — static export, workflow,
  project base path, deployment steps, release checks.

Start with `common/constants/profile.ts` for identity and skills,
`contents/projects.ts` for project cards, `contents/achievements.ts` for
achievements, and `messages/{en,id}.json` for translated copy.

## Retained integrations

Contents, Dashboard, Chat, Smart Talk, template legal pages, all API handlers,
and the former middleware are archived in the private `app/_legacy/` folder.
These URLs are unavailable. Modules and dependencies remain as source references;
no integration credentials are required for the static site. Contact uses direct
links. Restoring server features requires a server-capable host and a separate
integration review.

## GitHub Pages

Prepared target: **https://nandhach.github.io/portfolio-v1/**. Deployment has not
been executed as part of repository preparation.

1. Push the reviewed changes to the default branch when ready.
2. In repository **Settings → Pages**, choose **GitHub Actions** as the source.
3. In **Actions → Deploy portfolio to GitHub Pages → Run workflow**, select the
   default branch and run it manually.
4. Open the deployment URL after the build and deploy jobs succeed.

The workflow derives the origin and base path from GitHub Pages, installs with
`npm ci`, checks the code and exported URLs, then uploads only `out/`. No custom
deployment token or integration secrets are needed. Pushes alone do not deploy.
Static export does not support `next start`; use `npm run dev` for local editing.
For a lightweight preview, build with `DOMAIN=http://localhost:3000` and an empty
`NEXT_PUBLIC_BASE_PATH`, then run `npm run preview` at http://localhost:3000/en/.
Preview serves existing `out/` files; source changes require a rebuild.
See [deployment instructions](docs/GITHUB_PAGES.md) for build commands, custom
domains, troubleshooting, and the manual release checklist.

## Credits and reuse

The initial UI foundation was adapted from
[Satria Bahari's portfolio](https://github.com/satriabahari/satriabahari.my.id).
This repository personalizes that foundation for my identity, bilingual content,
local content model, case studies, and achievement presentation.

The inherited README stated an MIT license; no `LICENSE` file is currently
included in this checkout. Preserve applicable upstream notices and confirm the
license terms before redistributing the code. Personal certificates, logos,
photographs, and project materials are not automatically covered by a software
license.
