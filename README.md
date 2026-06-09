# Netpro

React application scaffold for the Netpro website.

## Stack

- Vite + React + TypeScript
- Tailwind CSS v4
- shadcn/ui with the Radix Nova preset
- TanStack Router
- TanStack Query
- Zustand
- Sonner
- pnpm

## Scripts

```bash
pnpm install
pnpm run dev
pnpm run build
pnpm run lint
```

## Environment

Copy `.env.example` to `.env` and set these values for the target host:

```bash
VITE_SITE_ORIGIN=https://netpro.africa
VITE_APP_BASE_PATH=/
```

- Use `VITE_APP_BASE_PATH=/` when the site is served from the domain root.
- Use a subfolder path such as `VITE_APP_BASE_PATH=/netpro/` when cPanel serves the site from a subdirectory.

## Deployment

### Vercel

1. Import the repository into Vercel.
2. Keep the framework preset as `Vite`.
3. Set `VITE_SITE_ORIGIN` to the final production URL.
4. Leave `VITE_APP_BASE_PATH=/` unless you intentionally deploy under a subpath.
5. Deploy. The included `vercel.json` handles SPA route rewrites.

### cPanel

1. Set `VITE_SITE_ORIGIN` to the public URL that will serve the site.
2. Set `VITE_APP_BASE_PATH=/` for `public_html`, or a subfolder such as `/netpro/` when uploading into a nested directory.
3. Run `pnpm run build`.
4. Upload the contents of `dist/` into the cPanel document root or chosen subfolder.
5. Keep the generated `.htaccess` file in place. It enables client-side route fallback for TanStack Router.

The build now generates deployment artifacts directly into `dist/`:

- `.htaccess` for cPanel / Apache SPA rewrites
- `404.html` as an additional SPA fallback
- `robots.txt` with the correct sitemap URL
- `sitemap.xml` using the configured site origin and base path

## Pages

- `/`
- `/services`
- `/projects`
- `/about-us`
- `/contact-us`
- `/careers`
- `/blog`

## Architecture

The project follows a modular frontend structure:

- `src/app`: app boundary, providers, and route composition
- `src/features`: page-level feature modules
- `src/shared`: reusable layout, config, API helpers, stores, and shared components
- `src/components/ui`: shadcn/ui source components
- `src/lib`: shared low-level utilities

The current implementation is a skeleton. Replace the placeholder page modules with real content, forms, API integrations, and domain-specific components as each section matures.
