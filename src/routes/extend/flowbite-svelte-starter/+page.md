---
layout: docLayout
---

<script>
  import Htwo from '../../utils/Htwo.svelte'
  import { Breadcrumb, BreadcrumbItem } from '$lib'
  
</script>

<Breadcrumb class="pb-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>Extend</BreadcrumbItem>
  <BreadcrumbItem>Flowbite-Svelte-Starter</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Flowbite-Svelte-Starter</h1>

<Htwo label="Demo" />

<p class="dark:text-white" ><a class="text-blue-700" href="https://flowbite-svelte-starter.vercel.app/">Flowbite-Svelte-Starter Demo</a></p>

<Htwo label="Features" />

<ul class="dark:text-white">
<li>Svelte</li>
<li>SvelteKit</li>
<li>Tailwind CSS</li>
<li>Flowbite</li>
<li>Flowbite-Svelte</li>
<li>Flowbite-Svelte-Blocks</li>
<li>ESlint</li>
<li>Typescript</li>
<li>Playwright</li>
<li>Prettier</li>
<li>Svelte-heros(Heroicons)</li>
<li>Darkmode activated</li>
</ul>

<Htwo label="Installation" />

```sh
npx degit shinokada/flowbite-svelte-starter my-demo
cd my-demo
pnpm i // or npm i
pnpm run dev // or npm run dev
```

<Htwo label="Other examples/themes" />

<Htwo label="Svelte-Sidebar-Example" />

If you want to see [a svelte-sidebar demo](https://flowbite-svelte-starter.vercel.app/):

```sh
git checkout svelte-sidebar-example
```

<Htwo label="Jaco example" />

```sh
git checkout jaco
```

<Htwo label="Plain" />

```sh
git checkout plain
```
