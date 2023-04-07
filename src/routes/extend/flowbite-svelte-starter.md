---
layout: pageLayout
breadcrumb_title: Flowbite Svelte Starters
title: Flowbite Svelte Starters
dir: Extend
description: Flowbite Svete Starters provide all necessary components to get started quickly
---

<MetaTag {breadcrumb_title} {title} {dir} {description}/>

<script>
  import { Htwo, MetaTag, PageHeadSection } from '../utils'
  import { Breadcrumb, BreadcrumbItem, Heading, A, List, Li } from '$lib'
</script>

<PageHeadSection {dir} {breadcrumb_title} {title} {description} />

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
