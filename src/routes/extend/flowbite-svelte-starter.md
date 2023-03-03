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
  import { Breadcrumb, BreadcrumbItem, Heading, A, List, Li } from '$lib'
</script>

<Breadcrumb class="pt-16 py-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<CompoDescription>{description}</CompoDescription>

<Heading class="mb-2" tag="h2" customSize="text-xl">Flowbite Svelte starter</Heading>

<List tag="ul" class="space-y-1 my-4">
  <Li><A href="https://github.com/themesberg/flowbite-svelte/tree/main/starters/flowbite-svelte-starter/">GitHub Repo</A></Li>
  <Li><A href="https://flowbite-svelte-starter.vercel.app/">Demo</A></Li>
</List>

<Heading class="mb-2" tag="h2" customSize="text-xl mt-2">Svelte starter</Heading>

<List tag="ul" class="space-y-1 my-4">
  <Li><A href="https://github.com/themesberg/flowbite-svelte/tree/main/starters/svelte-starter">GitHub Repo</A></Li>
  <Li><A href="https://shinokada.github.io/svelte-starter/">Demo</A></Li>
</List>


<Heading class="mb-2" tag="h2" customSize="text-xl mt-2">Svelte TS starter</Heading>

<p class="dark:text-white hover:text-blue-900 dark:hover:text-blue-500 w-full"><a href="https://github.com/themesberg/flowbite-svelte/tree/main/starters/svelte-ts-starter/">Repo</a></p>
<p class="dark:text-white hover:text-blue-900 dark:hover:text-blue-500 w-full"><a href="https://shinokada.github.io/svelte-ts-starter/">Demo</a></p>

<List tag="ul" class="space-y-1 my-4">
  <Li><A href="https://github.com/themesberg/flowbite-svelte/tree/main/starters/svelte-ts-starter/">GitHub Repo</A></Li>
  <Li><A href="https://shinokada.github.io/svelte-ts-starter/">Demo</A></Li>
</List>