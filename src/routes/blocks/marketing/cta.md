---
layout: blockComponentLayout
title: Svelte CTA Sections - Flowbite Svelte Blocks
breadcrumb_title: CTA Sections
no_of_components: 3 free components
dir: marketing
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
  import { Section, Cta } from 'flowbite-svelte-blocks';
  import { Button } from 'flowbite-svelte';
  import { VideoCameraSolid } from 'flowbite-svelte-icons';
</script>

<Section name="cta">
  <Cta>
    <svelte:fragment slot="h2">Let's find more that brings us together.</svelte:fragment>
    <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Flowbite helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups, Watch and Marketplace.</p>
    <div class="flex flex-wrap items-center gap-4">
      <Button href="/" color="red" size="lg">Get started</Button>
      <Button href="/" color="light" size="lg"
        ><VideoCameraSolid class="mr-2 -ml-1" size="sm" />
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
  import { Section, Cta } from 'flowbite-svelte-blocks';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
</script>

<Section name="ctawithimg">
  <Cta ctatype="image">
    <svelte:fragment slot="img">
      <img class="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard" />
      <img class="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard" />
    </svelte:fragment>
    <svelte:fragment slot="h2">Let's create more tools and ideas that brings us together.</svelte:fragment>
    <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
    <a href="/" class="inline-flex items-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
      Get started
      <ArrowRightOutline size="md" class="ml-2 -mr-1" />
    </a>
  </Cta>
</Section>
```

## Heading with CTA button

Use this simple yet effective CTA section with a heading, short paragraph, and a button to encourage users to start a free trial.

```svelte example
<script lang="ts">
  import { Section, Cta } from 'flowbite-svelte-blocks';
</script>

<Section name="cta">
  <Cta ctatype="heading">
    <svelte:fragment slot="h2">Start your free trial today</svelte:fragment>
    <p class="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Try Flowbite Platform for 30 days. No credit card required.</p>
    <a href="/" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Free trial for 30 days</a>
  </Cta>
</Section>
```

<CompoAttributesViewer {components}/>
