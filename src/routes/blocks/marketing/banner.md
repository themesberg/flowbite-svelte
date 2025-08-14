---
layout: componentLayout
title: Svelte Banner - Flowbite Svelte Blocks
breadcrumb_title: Banners
no_of_components: 1 free component
dir: marketing
pkg: Flowbite Svelte Blocks
description: The banner component can be used to show extra information or enable interactions with the user without affecting the main content area of the website.
---

<script>
  import { TableProp, TableDefaultRow, CompoAttributesViewer } from '../utils'
  import componentData1 from '../component-data/Banner.json'
  const components = 'Banner'
</script>

## Default banner

Use this example of a dismissable banner component to show extra information relative to the main content area of the page based on a sticky positition.

```svelte example class="h-48"
<script lang="ts">
  import { Banner } from "$lib";
  import { CloseButton } from "flowbite-svelte";

  export let visible = true;
</script>

{#if visible}
  <Banner>
    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
      Supercharge your hiring by taking advantage of our <a class="text-primary-600 dark:text-primary-500 font-medium underline hover:no-underline" href="/">limited-time sale</a>
      for Designer Search + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
    </p>
    <CloseButton onclick={() => (visible = false)} class="rounded-lg p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white" />
  </Banner>
{/if}
```

<CompoAttributesViewer {components}/>
