#  — Personal Portfolio

A premium, multi-page personal portfolio: React + Vite, hand-tuned CSS (matte black / graphite / electric purple, glassmorphism), Framer Motion, Lenis smooth scroll, and a React Three Fiber hero object.

## Pages

- `/` — Home: hero + condensed previews of every section, each linking to its own page
- `/about` — full story, animated counters, particle background
- `/portfolio` — filterable project grid (Web / UI / Game / Branding / AI)
- `/skills` — futuristic skill cards that expand into a holographic detail panel (rotating gradient ring, particle burst, animated progress bar)
- `/experience` — animated vertical timeline
- `/contact` — form + socials + glowing map panel

Every route change animates with a fade + blur + scale + slide page transition (Framer Motion `AnimatePresence`), and the navbar is a sticky glass header with per-route active states.

## Getting Started

```bash
npm install
npm run dev       # start dev server
npm run build     # production build to /dist
npm run preview   # preview the production build
```

## Structure

```
src/
  pages/        # one file per route (Home, About, Portfolio, Skills, Experience, Contact)
  components/   # shared UI: Navbar, Footer, Hero, PageHeader, PageTransition, 3D crystal, cursor glow, etc.
  data/         # single source of truth for skills, projects, timeline, about copy
  hooks/        # useLenis (smooth scroll)
```

## Notes

- The contact form is UI-only — wire `handleSubmit` in `src/pages/Contact.jsx` to a backend or service like Formspree/Resend to actually send messages.
- The About page portrait is an abstract SVG placeholder (per the brief, no personal photo is used) — swap it for a real image or 3D render whenever you're ready.
- Deploy the `/dist` folder to any static host (Vercel, Netlify, Cloudflare Pages). Since this is a client-side SPA, make sure your host rewrites unknown paths to `index.html` (Vercel/Netlify do this by default for SPAs).
