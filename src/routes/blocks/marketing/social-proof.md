---
layout: blockComponentLayout
title: Svelte Social Proof - Flowbite Svelte Blocks
breadcrumb_title: Social Proof
no_of_components: 1 free component
dir: marketing
description: Get started with this website section to offer social proof to your website visitors by providing statistical numbers about your product's usage worldwide.
---

<script>
  import { TableProp, TableDefaultRow, CompoAttributesViewer } from '../utils'
  const components = 'Social, Section'
</script>

## Default example

Use this example of statistical numbers that you can use to showcase the adoption rate of your product by the community.

```svelte example
<script lang="ts">
  import { Section, Social } from 'flowbite-svelte-blocks';
</script>

<Section name="social">
  <Social>
    <div class="flex flex-col items-center justify-center">
      <dt class="mb-2 text-3xl md:text-4xl font-extrabold">73M+</dt>
      <dd class="font-light text-gray-500 dark:text-gray-400">developers</dd>
    </div>
    <div class="flex flex-col items-center justify-center">
      <dt class="mb-2 text-3xl md:text-4xl font-extrabold">1B+</dt>
      <dd class="font-light text-gray-500 dark:text-gray-400">contributors</dd>
    </div>
    <div class="flex flex-col items-center justify-center">
      <dt class="mb-2 text-3xl md:text-4xl font-extrabold">4M+</dt>
      <dd class="font-light text-gray-500 dark:text-gray-400">organizations</dd>
    </div>
  </Social>
</Section>
```

<CompoAttributesViewer {components}/>
