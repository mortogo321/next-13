# next-13

A Next.js App Router demo: a movie browser built against The Movie Database (TMDB) API, using server components and streaming loading states.

## What's inside

- `/` — lists popular movies fetched server-side from the TMDB API, rendered in a responsive grid.
- `/movie/[id]` — dynamic route with movie detail (title, release date, runtime, status, overview), including a route-level `loading.tsx` skeleton and `generateStaticParams` for static generation of movie pages.
- `/api/hello` — a minimal Route Handler example.

This is a standalone frontend demo — it calls the public TMDB API directly from the server and does not need its own backend.

## Tech stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

## Quickstart

```bash
yarn install

# create .env.local with a TMDB API key
echo "API_KEY=your_tmdb_api_key" > .env.local

yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

Environment variables:

- `API_KEY` — an API key from [The Movie Database](https://www.themoviedb.org/documentation/api), used server-side to fetch movie data.

## Routes

| Route | Description |
| --- | --- |
| `/` | Popular movies grid |
| `/movie/[id]` | Movie detail page |
| `/api/hello` | Sample Route Handler |
