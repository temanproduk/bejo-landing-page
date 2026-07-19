# BeJo Landing Page

Marketing site for **BeJo**, the payment-notification app for Indonesian QRIS
merchants. Live at **https://bejo.temanproduk.com**.

## Stack

- **Vite** + **React** + **TypeScript**
- **Tailwind CSS** with **shadcn/ui** components
- Multi-page build: `index.html` (landing), `privacy.html`, `data-deletion.html`

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Deploy

Every push to `main` triggers the GitHub Actions workflow
(`.github/workflows/deploy.yml`), which builds the site and publishes `dist/`
to GitHub Pages. The custom domain is set via `public/CNAME`.

## Structure

```
public/            static assets (brand icons, CNAME, .nojekyll)
src/
  components/      Header, Footer, PhoneMockup, Legal, ui/ (shadcn)
  hooks/           useParallax, useReveal
  pages/           Home, Privacy, DataDeletion
  entry-*.tsx      one React entry per HTML page
  index.css        Tailwind + brand design tokens
```
