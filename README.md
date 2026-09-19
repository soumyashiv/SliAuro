# Aurora — landing page hero

Vite + React 19 + TypeScript + Tailwind CSS v4 (`@tailwindcss/vite`) + framer-motion.

## Run it

```bash
npm install
./fetch-video.sh   # downloads the hero video to public/hero.mp4
npm run dev
```

Without `public/hero.mp4` the page still renders (black background behind the hero content).

## Pages

Pages are picked from the URL hash (no router dependency), so the existing `#product`, `#docs`, `#contact` links work as they are.

| URL | Page |
| --- | --- |
| `/` | Hero (home) |
| `/#product` | Product |
| `/#docs` | Docs |
| `/#contact` | Contact |
| `/#get-started` | Get Started |

The Contact and Get Started forms are front-end only. Each has a `TODO` in its submit handler where your backend call goes.

## Structure

- `index.html` — Google Fonts (Plus Jakarta Sans, Inter)
- `src/index.css` — `@import "tailwindcss";`, base reset, focus rings
- `src/App.tsx` — chooses the page from the URL hash
- `src/hooks/useRoute.ts` — hash-based route hook
- `src/theme.ts` — shared fonts and style tokens for the inner pages
- `src/components/Navbar.tsx` — fixed nav, car line-art logo, active-page underline
- `src/components/Hero.tsx` — video background, overlays, trusted-by badge, headline, CTAs, socials
- `src/components/PageShell.tsx`, `Button.tsx`, `Field.tsx` — shared inner-page pieces
- `src/pages/` — `Product.tsx`, `Docs.tsx`, `Contact.tsx`, `GetStarted.tsx`
