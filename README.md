# Abdul Qadeer Portfolio

Professional portfolio website built with Next.js, TypeScript, and Tailwind CSS for a Team Lead React Native Engineer profile.

## Tech Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS v4
- `next/font` for optimized typography

## Local Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

This project requires Node.js `>=20.9.0`.

Open `http://localhost:3000` in your browser.

## Production Build

To verify the production bundle locally:

```bash
npm run build
npm run start
```

## Deploying to Vercel

1. Push this repository to GitHub.
2. Sign in to Vercel and choose `Add New -> Project`.
3. Import the GitHub repository.
4. Keep the default framework preset as `Next.js`.
5. Leave build settings at their defaults:
   - Build Command: `next build`
   - Output: default Next.js output
6. Click `Deploy`.

After deployment, Vercel will automatically create production builds for pushes to the connected branch.

## Content Updates

Main content lives in `app/page.tsx`.

## Commands

- `npm run dev` starts the local development server.
- `npm run build` creates the production build.
- `npm run start` runs the production server.
- `npm run lint` runs ESLint.
