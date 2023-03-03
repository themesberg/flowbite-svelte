---
layout: pageLayout
breadcrumb_title: Flowbite Svelte Blocks
title: Flowbite Svelte Blocks
dir: Extend
description: Flowbite-Svete-Blocks provides all necessary components to get started quickly 
---

<MetaTag {breadcrumb_title} {title} {dir} {description}/>

<script>
  import { CompoDescription, Htwo, MetaTag } from '../utils'
  import { Breadcrumb, BreadcrumbItem, Heading, A, List, Li, Img} from '$lib'
</script>

<Breadcrumb class="pt-16 py-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<CompoDescription>{description}</CompoDescription>

<List tag="ul" class="space-y-1 my-4">
  <Li><A href="https://github.com/shinokada/flowbite-svelte-blocks">GitHub Repo</A></Li>
  <Li><A href="https://shinokada.github.io/flowbite-svelte-blocks/">Docs</A></Li>
  <Li><A href="https://flowbite-svelte-blocks.vercel.app/">Demo</A></Li>
</List>

<Htwo label="Installation" />

After installing Flowbite-Svelte, run the following to install Flowbite-Svelte-Blocks:

```sh
npm i -D shinokada/flowbite-svelte-blocks
```

<Img src="/images/flowbite-svelte-blocks-optimized.png" alt="Flowbite Svelte Blocks" />