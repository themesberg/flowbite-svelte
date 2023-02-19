# Svelte TS Starter

[![](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/shinokada)


This Svelte TS starter template provides a foundation for developing with Svelte and Vite, including preconfigured support for Typescript, TailwindCSS, Flowbite-Svelte, and Svelte-Spa-Router. Additionally, it includes a sample implementation of fetching data from a backend API, making it easy to integrate with your own server-side infrastructure.

- Vite
- Svelte
- Typescript
- Tailwind CSS
- Flowbite-Svelte
- Svelte-Spa-Router

## Installation

```bash
git clone git@github.com:shinokada/svelte-ts-starter.git my-app
cd my-app
pnpm i
```

## Backend API env value

Update your backend API value in `.env`:

```text
API_ENDPOINT=http://localhost:3000/api
API_SECRET=1234
```

## Start a local server

```bash
npm run dev
```

## How to use this for GitHub page

There is the `github-page` branch. Please note that it is not gh-pages.
Checkout to this branch and install packages, build and deploy.

```
git checkout github-page
pnpm i
npm run build
npm run deploy
```

This will deploy your GitHub page to `https://<username>.github.io/<repository name>` URL. Don’t forget to change the username and repository name to your personal Github username and repository.
It may take a couple of minutes. You can check the progress in GitHub Actions tab.

## DIY GitHub pages

```bash
pnpm i -D gh-pages
```

Add the following to the package.json scripts:

```json
 "deploy": "npx gh-pages -d dist"
```

Update vite.config.ts

```
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/svelte-ts-starter/",
  plugins: [svelte()],
})
```

Build and deploy:

```bash
npm run build
npm run deploy
```
