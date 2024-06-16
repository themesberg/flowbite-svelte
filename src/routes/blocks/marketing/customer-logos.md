---
layout: blockComponentLayout
title: Svelte Customer Logos - Flowbite Svelte Blocks
breadcrumb_title: Customer Logos
no_of_components: 1 free component
dir: marketing
description: This website section can be used as a social proof incentive to convince your potential clients by showcasing popular companies that you've collaborated with.
---

<script>
  import { TableProp, TableDefaultRow, CompoAttributesViewer } from '../utils'
  const components = 'HeroHeader, Section'
</script>

## Default example

Use this example to show a list of logos of the companies that have used your product or worked with to provide strong social proof to your website visitors.

```svelte example
<script>
  import { Section, HeroHeader } from 'flowbite-svelte-blocks';
  import { Airbnb, Google, Mailchimp, Mashable, Microsoft, Spotify } from '../utils';
</script>

<Section name="logos">
  <HeroHeader>
    <svelte:fragment slot="h2">You’ll be in good company</svelte:fragment>
    <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
      <a href="/" class="flex justify-center items-center">
        <Airbnb />
      </a>
      <a href="/" class="flex justify-center items-center">
        <Google />
      </a>
      <a href="/" class="flex justify-center items-center">
        <Microsoft />
      </a>

      <a href="/" class="flex justify-center items-center">
        <Spotify />
      </a>
      <a href="/" class="flex justify-center items-center">
        <Mailchimp />
      </a>
      <a href="/" class="flex justify-center items-center">
        <Mashable />
      </a>
    </div></HeroHeader>
</Section>
```

<CompoAttributesViewer {components}/>
