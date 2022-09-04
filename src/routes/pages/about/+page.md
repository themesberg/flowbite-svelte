---
layout: pageLayout
---

<script>
  import Htwo from '../../utils/Htwo.svelte'
  import { Breadcrumb, BreadcrumbItem, Heading } from '$lib'
  
</script>

<Breadcrumb class="pb-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>About</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">About Flowbite-Svelte</Heading>

<Htwo label="Svelte" />

<p class="dark:text-white w-full text-lg py-2">
  Svelte is a modern and growing front-end compiler. Developers build boilerplate-free components using languages HTML, CSS and JavaScript. Svelte compiles your code to tiny, framework-less vanilla JS.</p>

<Htwo label="Flowbite Svelte" />

<p class="dark:text-white w-full text-lg py-2"><a class="text-blue-700" href="/">Flowbite-Svelte</a> is an official Flowbite component library for Svelte. All interactivities are handled by Svelte.
</p>


<p class="dark:text-white w-full text-lg py-2">This website uses Flowbite-Svelte components except the <a class="text-blue-700" href="https://github.com/shinokada/svelte-sidebar" target="_blank">sidebar menu</a>.</p>

