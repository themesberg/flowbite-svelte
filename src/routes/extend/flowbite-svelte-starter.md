---
layout: pageLayout
breadcrumb_title: Flowbite Svelte Starters
title: Flowbite Svelte Starters
dir: Extend
description: Flowbite Svete Starters provide all necessary components to get started quickly 
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

<Heading class="mb-2" tag="h3" customSize="text-xl">Flowbite Svelte starter</Heading>

<p class="dark:text-white hover:text-blue-900 dark:hover:text-blue-500 w-full"><a href="https://github.com/themesberg/flowbite-svelte/starters/flowbite-svelte-starter/">Repo</a></p>
<p class="dark:text-white hover:text-blue-900 dark:hover:text-blue-500 w-full"><a href="">Demo</a></p>

<Heading class="mb-2" tag="h3" customSize="text-xl mt-2">Svelte starter</Heading>

<p class="dark:text-white hover:text-blue-900 dark:hover:text-blue-500 w-full"><a href="https://github.com/themesberg/flowbite-svelte/starters/svelte-starter/">Repo</a></p>
<p class="dark:text-white hover:text-blue-900 dark:hover:text-blue-500 w-full"><a href="">Demo</a></p>


<Heading class="mb-2" tag="h3" customSize="text-xl mt-2">Svelte TS starter</Heading>

<p class="dark:text-white hover:text-blue-900 dark:hover:text-blue-500 w-full"><a href="https://github.com/themesberg/flowbite-svelte/starters/svelte-ts-starter/">Repo</a></p>
<p class="dark:text-white hover:text-blue-900 dark:hover:text-blue-500 w-full"><a href="">Demo</a></p>

