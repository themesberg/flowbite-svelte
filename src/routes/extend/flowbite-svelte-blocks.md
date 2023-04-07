---
layout: pageLayout
breadcrumb_title: Flowbite Svelte Blocks
title: Flowbite Svelte Blocks
dir: Extend
description: Flowbite-Svete-Blocks provides all necessary components to get started quickly
---

<MetaTag {breadcrumb_title} {title} {dir} {description}/>

<script>
  import { PageHeadSection, Htwo, MetaTag } from '../utils'
  import { Breadcrumb, BreadcrumbItem, Heading, A, List, Li, Img} from '$lib'
  const libFiles ={
  "GitHub Repo": "https://github.com/shinokada/flowbite-svelte-blocks",
  Docs: "https://shinokada.github.io/flowbite-svelte-blocks/",
  Demo: "https://flowbite-svelte-blocks.vercel.app/"
  }

</script>

<PageHeadSection {dir} {breadcrumb_title} {title} {description} {libFiles}/>

<Htwo label="Installation" />

After installing Flowbite-Svelte, run the following to install Flowbite-Svelte-Blocks:

```sh
npm i -D shinokada/flowbite-svelte-blocks
```

<Img src="/images/flowbite-svelte-blocks-optimized.png" alt="Flowbite Svelte Blocks" />
