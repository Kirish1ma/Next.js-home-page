# Feature Home Page

Next.js rewrite skeleton for Kirishima's personal homepage.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Static export friendly config

## Scripts

```bash
npm install
npm run dev
npm run build
```

Recommend using pnpm for package management.

## Structure

- `app/`: routes, layout, global styles
- `components/layout/`: persistent layout components
- `components/sections/`: homepage sections
- `components/ui/`: shared UI primitives
- `data/`: content configuration
- `public/`: static assets

## Current scope

This is an MVP skeleton. It keeps the old site's 9-section concept, but complex interactions such as pagepiling, custom cursor, image galleries, preloader, and Swiper-driven carousel can be added later.
