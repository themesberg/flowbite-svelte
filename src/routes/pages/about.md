---
layout: pageLayout
breadcrumb_title: About
title: About Flowbite-Svelte
dir: Pages
description: Flowbite-Svelte About page
---

<MetaTag {breadcrumb_title} {title} {dir} {description}/>

<script>
  import { Htwo, MetaTag } from '../utils'
  import { Breadcrumb, BreadcrumbItem, Heading, A } from '$lib'
</script>

<Breadcrumb class="pt-28 py-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<Htwo label="Svelte" />

<p class="dark:text-white w-full text-lg py-2">
  Svelte is a modern and growing front-end compiler. Developers build boilerplate-free components using languages HTML, CSS and JavaScript. Svelte compiles your code to tiny, framework-less vanilla JS.</p>

<Htwo label="Flowbite Svelte" />

<p class="dark:text-white w-full text-lg py-2"><a class="text-blue-700" href="/">Flowbite-Svelte</a> is an official Flowbite component library for Svelte. All interactivities are handled by Svelte.
</p>


<p class="dark:text-white w-full text-lg py-2">This website uses Flowbite-Svelte components except the <A class="text-blue-700" href="https://github.com/shinokada/svelte-sidebar" target="_blank" rel="noreferrer">sidebar menu</A>.</p>

