---
layout: componentLayout
breadcrumb_title: Quickstart - Flowbite Svelte
title: Quickstart - Flowbite Svelte
component_title: Quickstart
dir: Pages
description: Learn how to get started with the free and open-source Flowbite Svelte UI component library based on the utility classes from Tailwind CSS
---

<script lang="ts">
  import { A, P, List, Li } from '$lib'
  import { LlmLink } from '../../utils'
</script>

You can install Flowbite Svelte by using the <A href='/docs/extend/flowbite-svelte-starter'>flowbite-svelte-start</A> or from scratch.

## Getting started

Learn how to get started with Flowbite Svelte by following the quickstart guide and start leveraging the interactive Svelte components coupled with Flowbite and Tailwind CSS.

### Using SvelteKit

You can install SvelteKit or Svelte to start your app. For SvelteKit:

```bash example
// install tailwindcss also
npx sv create my-app
cd my-app
pnpm install
```

### Using Svelte

If you want to get started with Svelte:

```bash
npm create vite@latest myapp -- --template svelte
cd myapp
pnpm install
```

#### Install Tailwind CSS

If your svelte project doesn't have `tailwindcss` installed, install it using NPM:

```bash
npx sv add tailwindcss
pnpm install
```

Run a local development server by running:

```bash
pnpm dev
```

### Install Flowbite Svelte

Run the following command to install all Flowbite dependencies and libraries:

```sh
pnpm i -D flowbite-svelte flowbite
```

### Optional

Install `flowbite-svelte-icons` for the examples to work properly:

```sh
pnpm i -D flowbite-svelte-icons
```

### Configuration

Update your main CSS file to support Tailwind CSS and the Flowbite plugin. You can also customize the primary color by modifying the appropriate color values. See more details in the [introduction page](/docs/pages/introduction#configuration).

#### SvelteKit Projects

The location of your main CSS file determines the correct path for `@source` directives:

**If your CSS file is at `src/app.css`:**

```css
@import "tailwindcss";
@plugin 'flowbite/plugin';
@custom-variant dark (&:where(.dark, .dark *));
/* ... */
@source "../node_modules/flowbite-svelte/dist";
@source "../node_modules/flowbite-svelte-icons/dist";
```

**If your CSS file is at `src/routes/+layout.css`:**
```css
@import "tailwindcss";
@plugin 'flowbite/plugin';
@custom-variant dark (&:where(.dark, .dark *));
/* ... */
@source "../../node_modules/flowbite-svelte/dist";
@source "../../node_modules/flowbite-svelte-icons/dist";
```

#### Other Project Types

For non-SvelteKit projects (Vite, Svelte standalone, etc.), adjust the path based on your CSS file location relative to `node_modules`.

Now you should be able to work with the Flowbite Svelte library and import components such as the navbar, dropdown, modal, and more.

<div class="h-8" ></div>

Now you are ready to go! Add the following to `src/routes/+page.svelte` and if you see the following image, then your setting is complete.

```svelte example
<script lang="ts">
  import { Alert } from "flowbite-svelte";
</script>

<div class="p-8">
  <Alert>
    <span class="font-medium">Info alert!</span>
    Change a few things up and try submitting again.
  </Alert>
</div>
```

## Starters

You can use one of starter repo for a quick start.

<List tag='ul' class='space-y-1 my-4'>
<Li><A href='https://github.com/shinokada/flowbite-svelte-starter'>Flowbite-SvelteKit starter</A></Li>
<Li><A href='https://github.com/ZekyTheWolf/LIST-Starter'>Laravel, Inertia, Svelte, Typescript with Flowbite starter</A></Li>
</List>

## LLM Link

<LlmLink />