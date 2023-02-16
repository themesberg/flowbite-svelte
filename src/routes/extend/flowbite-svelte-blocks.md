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
  import { Breadcrumb, BreadcrumbItem, Heading, A } from '$lib'
</script>

<Breadcrumb class="pt-16 py-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<CompoDescription>{description}</CompoDescription>

<ul class="dark:text-white" >
<li>
<a class="text-blue-700 text-md" href="https://github.com/shinokada/flowbite-svelte-blocks">GitHub Repo: Flowbite-Svelte-Blocks</a></li>
<li><a class="text-blue-700 text-md" href="https://shinokada.github.io/flowbite-svelte-blocks/">Docs</a></li>
</ul>


<Htwo label="Installation" />

After installing Flowbite-Svelte, run the following to install Flowbite-Svelte-Blocks:

```sh
npm i -D shinokada/flowbite-svelte-blocks
```
