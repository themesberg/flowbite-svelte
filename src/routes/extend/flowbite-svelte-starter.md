---
layout: componentLayout
breadcrumb_title: Flowbite Svelte Starters
title: Flowbite Svelte Starters
dir: Extend
description: Flowbite Svete Starters provide all necessary components to get started quickly
---

<MetaTag {breadcrumb_title} {title} {dir} {description}/>

<script>
  import { MetaTag, PageHeadSection } from '../utils'
  import { A, List, Li } from '$lib'
</script>

<PageHeadSection {dir} {breadcrumb_title} {title} {description} />

## Flowbite Svelte starter

<List tag="ul" class="space-y-1 my-4">
  <Li><A href="https://github.com/themesberg/flowbite-svelte/tree/main/starters/flowbite-svelte-starter/">GitHub Repo</A></Li>
  <Li><A href="https://flowbite-svelte-starter.vercel.app/">Demo</A></Li>
</List>

## Svelte starter

<List tag="ul" class="space-y-1 my-4">
  <Li><A href="https://github.com/themesberg/flowbite-svelte/tree/main/starters/svelte-starter">GitHub Repo</A></Li>
  <Li><A href="https://shinokada.github.io/svelte-starter/">Demo</A></Li>
</List>

## Svelte TS starter

<p class="dark:text-white hover:text-blue-900 dark:hover:text-blue-500 w-full"><a href="https://github.com/themesberg/flowbite-svelte/tree/main/starters/svelte-ts-starter/">Repo</a></p>
<p class="dark:text-white hover:text-blue-900 dark:hover:text-blue-500 w-full"><a href="https://shinokada.github.io/svelte-ts-starter/">Demo</a></p>

<List tag="ul" class="space-y-1 my-4">
  <Li><A href="https://github.com/themesberg/flowbite-svelte/tree/main/starters/svelte-ts-starter/">GitHub Repo</A></Li>
  <Li><A href="https://shinokada.github.io/svelte-ts-starter/">Demo</A></Li>
</List>
