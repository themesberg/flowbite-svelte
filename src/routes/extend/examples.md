---
layout: pageLayout
breadcrumb_title: Examples
title: Flowbite Examples
dir: Extend
description: Flowbite Svete Examples 
---

<MetaTag {breadcrumb_title} {title} {dir} {description}/>

<script>
  import { CompoDescription, Htwo, MetaTag } from '../utils'
  import { Breadcrumb, BreadcrumbItem, Heading, A } from '$lib'
</script>

<Breadcrumb class="pt-16 py-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<CompoDescription>{description}</CompoDescription>

<Htwo label="Starters" />

<Heading class="mb-2" tag="h3" customSize="text-2xl">Flowbite SvelteKit responsive sidebar layout</Heading>

<p class="dark:text-white hover:text-blue-900 dark:hover:text-blue-500  w-full"><a href="https://github.com/themesberg/flowbite-svelte/examples/flowbite-sveltekit-responsive-sidebar-layout/">Repo</a></p>
<p class="dark:text-white hover:text-blue-900 dark:hover:text-blue-500 w-full"><a href="">Demo</a></p>
