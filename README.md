# BeJo Landing Page

Marketing site for **BeJo**, the payment-notification app for Indonesian QRIS
merchants. Live at **https://bejo.temanproduk.com**.

## Stack

- **Vite** + **React** + **TypeScript**
- **Tailwind CSS** with **shadcn/ui** components
- Multi-page build: `index.html` (landing), `privacy.html`, `data-deletion.html`,
  `contact.html`

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Hosting & Deploy

Hosted on **Cloudflare Pages**, connected to this repo.

- **Production branch:** `main`. Every push to `main` triggers a Cloudflare
  build (`npm run build`) and deploys `dist/` to `bejo.temanproduk.com`.
- **Preview deployments:** pushes to any other branch (and pull requests) get
  their own preview URL on `*.pages.dev`, without touching production.

Cloudflare build settings:

| Setting | Value |
|--------|-------|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `20` (via `NODE_VERSION` env var or a `.node-version` file) |

The custom domain and TLS are managed in the Cloudflare Pages project
(**Custom domains**); no `CNAME` file is needed.

## Structure

```
public/            static assets (brand icons, .nojekyll)
src/
  components/      Header, Footer, PhoneMockup, Legal, ui/ (shadcn)
  hooks/           useParallax, useReveal
  pages/           Home, Privacy, DataDeletion, Contact
  entry-*.tsx      one React entry per HTML page
  index.css        Tailwind + brand design tokens
```
