# Ram Sankar Koripalli — Portfolio

A fast, animated single-page portfolio built with **React + Vite + Tailwind CSS + Framer Motion**, deployed to GitHub Pages at **[ram797.github.io](https://ram797.github.io)**.

Dark, cinematic design with a Texas A&M maroon → violet accent, scroll-triggered
animations, an animated aurora background, and full mobile responsiveness.

## Sections

Hero · About · Experience (timeline) · Skills · Projects · Education · Contact

## Tech stack

| Concern        | Choice                                  |
| -------------- | --------------------------------------- |
| Framework      | React 18                                |
| Build tool     | Vite 5                                   |
| Styling        | Tailwind CSS 3 (design tokens in config)|
| Animation      | Framer Motion                           |
| Icons          | react-icons (Feather / Simple Icons)    |
| Fonts          | Inter + Space Grotesk (self-hosted via @fontsource) |
| Hosting        | GitHub Pages via GitHub Actions         |

## Local development

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Editing content

**All site content lives in one place:** [`src/data/content.js`](src/data/content.js).
Update your summary, experience, projects, skills, education, and links there —
every section reads from this file, so no component edits are needed for content
changes.

To add a new section:

1. Create `src/components/sections/MySection.jsx` (reuse `Section`,
   `SectionHeading`, and `Reveal` from `src/components/ui/`).
2. Import and drop it into [`src/App.jsx`](src/App.jsx).
3. Add a `{ id, label }` entry to `navLinks` in `content.js` for nav + scroll-spy.

Design tokens (colors, fonts, gradients, shadows) live in
[`tailwind.config.js`](tailwind.config.js) and the component classes in
[`src/index.css`](src/index.css).

## Images

Source images live in `src/assets/` (optimized `.webp`). The downloadable résumé
and static icons live in `public/`.

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes `dist/` to GitHub Pages.

> **One-time setup:** In the repository's **Settings → Pages**, set
> **Source** to **GitHub Actions**.

---

Built with React, Vite & Framer Motion.
