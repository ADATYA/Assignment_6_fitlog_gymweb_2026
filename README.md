# FitLog — Workout Library

FitLog is a dark, no-nonsense gym companion built with Next.js. Browse a library of twelve lifts, open a workout for full specs and instructions, lock lifts into today's plan (capped at five), save others for later, and watch minutes and calories add up as you log the day.

**Live link:** _add your deployed URL here_

## Technologies used

- [Next.js 14](https://nextjs.org/) (App Router)
- React 18
- Tailwind CSS 3
- lucide-react (icons)
- Oswald + Inter (Google Fonts)
- Deployed on Vercel

## Features

1. **Workout library** — responsive 3-column grid of cards (image, muscle tags, equipment, duration / calories / rating) fetched from the FitLog API, with a loading animation and an automatic fallback API.
2. **Sort and search** — sort by Duration, Calories or Rating, and search by workout name or muscle tag.
3. **Workout detail page** — two-column layout with key specs, four-step instructions, and "Add to today's plan" / "Save for later" actions.
4. **My Plan page** — live Exercises / Minutes / Calories metrics, Today's Plan and Saved tabs, Mark as Done, remove (X), and a friendly empty state.
5. **Navbar badges + toasts** — Plan and Saved counters update instantly and link to `/my-plan`; every action shows a toast.
6. **Smart limits and persistence** — the plan is capped at five lifts, and plan/saved/done state survives reloads via `localStorage`.
7. **Custom 404 page** and a layout that adapts to mobile, tablet and desktop.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Project structure

```
app/            routes: / , /workout/[id], /my-plan, not-found
components/     Navbar, Footer, WorkoutCard, Stats, Spinner, Providers (toast + store)
lib/api.js      API client with primary + alternative endpoint
```

## API

- All workouts: `https://api.abcz.workers.dev/api/fitlog`
- Single workout: `https://api.abcz.workers.dev/api/fitlog/:id`
- Fallback: `https://api.api-store.workers.dev/api/fitlog`

## Deployment

Live demo : https://peppy-jelly-b88081.netlify.app/

