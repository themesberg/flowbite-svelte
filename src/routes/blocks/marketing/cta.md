---
layout: componentLayout
title: Svelte CTA Sections - Flowbite Svelte Blocks
breadcrumb_title: CTA Sections
no_of_components: 3 free components
dir: marketing
pkg: Flowbite Svelte Blocks
description: The CTA (call to action) website sections can be used anywhere on your website to encourage your users to take any action, such as creating a new account.
---

<script>
  import { TableProp, TableDefaultRow, CompoAttributesViewer } from '../utils'
  const components = 'Cta, Section'
</script>

## Default CTA section

Use this example to show a simple heading, paragraph, and a couple of CTA buttons to encourage users to take action.

```svelte example
<script lang="ts">
  import { Section, Cta } from "flowbite-svelte-blocks";
  import { Button } from "flowbite-svelte";
  import { VideoCameraSolid } from "flowbite-svelte-icons";
</script>

<Section name="cta">
  <Cta>
    {#snippet h2()}Let's find more that brings us together.{/snippet}
    <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups, Watch and Marketplace.</p>
    <div class="flex flex-wrap items-center gap-4">
      <Button href="/" color="red" size="lg">Get started</Button>
      <Button href="/" color="light" size="lg">
        <VideoCameraSolid class="mr-2 -ml-1" size="sm" />
        View more
      </Button>
    </div>
  </Cta>
</Section>
```

## Image with CTA button

Use this example to show an image or app screenshot next to the CTA button to provide additional visual impact.

```svelte example
<script lang="ts">
  import { Section, Cta } from "flowbite-svelte-blocks";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
</script>

<Section name="ctawithimg">
  <Cta ctatype="image">
    {#snippet img()}
      <img class="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard" />
      <img class="hidden w-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard" />
    {/snippet}
    {#snippet h2()}Let's create more tools and ideas that brings us together.{/snippet}
    <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
    <a href="/" class="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4">
      Get started
      <ArrowRightOutline size="md" class="-mr-1 ml-2" />
    </a>
  </Cta>
</Section>
```

## Heading with CTA button

Use this simple yet effective CTA section with a heading, short paragraph, and a button to encourage users to start a free trial.

```svelte example
<script lang="ts">
  import { Section, Cta } from "flowbite-svelte-blocks";
</script>

<Section name="cta">
  <Cta ctatype="heading">
    {#snippet h2()}Start your free trial today{/snippet}
    <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Try Flowbite Platform for 30 days. No credit card required.</p>
    <a href="/" class="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mr-2 mb-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white focus:ring-4 focus:outline-none">Free trial for 30 days</a>
  </Cta>
</Section>
```

<CompoAttributesViewer {components}/>
