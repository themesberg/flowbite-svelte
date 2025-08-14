---
layout: componentLayout
title: Svelte Hero Sections - Flowbite Svelte Blocks
breadcrumb_title: Hero Sections
no_of_components: 2 free components
dir: marketing
pkg: Flowbite Svelte Blocks
description: Get started with a collection of hero sections coded with Tailwind CSS to showcase the most important parts of your website based on multiple styles and layouts.
---

<script>
  import { TableProp, TableDefaultRow, CompoAttributesViewer } from '../utils'
  const components = 'News, HeroHeader, HeroBody, Section'
</script>

## Default hero section

Use this default example with an announcement badge, heading, CTA buttons, and customer logos to showcase what your website offers.

```svelte example
<script>
  import { Section, News, HeroHeader, HeroBody } from "flowbite-svelte-blocks";
  import { Button } from "flowbite-svelte";
  import { ArrowRightOutline, VideoCameraSolid } from "flowbite-svelte-icons";
  import { Youtube, ProductHunt, Reddit } from "../utils";
</script>

<Section name="heroDefault">
  <News>
    <span class="bg-primary-600 mr-3 rounded-full px-4 py-1.5 text-xs text-white">New</span>
    <span class="text-sm font-medium">Flowbite is out! See what's new</span>
  </News>
  <HeroHeader>
    {#snippet h1()}We invest in the world’s potential{/snippet}
    {#snippet paragraph()}Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.{/snippet}
  </HeroHeader>

  <div class="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 lg:mb-16">
    <a href="/">
      <Button size="lg" color="red">
        Learn more <ArrowRightOutline size="md" class="-mr-1 ml-2" />
      </Button>
    </a>
    <a href="/">
      <Button size="lg" color="light">
        <VideoCameraSolid size="xs" class="mr-2 -ml-1" />
        Watch video
      </Button>
    </a>
  </div>
  <HeroBody>
    {#snippet head()}FEATURED IN{/snippet}

    <div class="mt-8 flex flex-wrap items-center justify-center text-gray-500 sm:justify-between">
      <a href="/" class="mr-5 mb-5 hover:text-gray-800 lg:mb-0 dark:hover:text-gray-400">
        <Youtube />
      </a>
      <a href="/" class="mr-5 mb-5 hover:text-gray-800 lg:mb-0 dark:hover:text-gray-400">
        <ProductHunt />
      </a>
      <a href="/" class="mr-5 mb-5 hover:text-gray-800 lg:mb-0 dark:hover:text-gray-400">
        <Reddit />
      </a>
    </div>
  </HeroBody>
</Section>
```

## Visual image with heading

Use this example to show an image next to the heading and CTA buttons to improve the visual impact of the website's first visit.

```svelte example
<script>
  import { Section, HeroHeader } from "flowbite-svelte-blocks";
  import { Button } from "flowbite-svelte";
  import { ArrowRightOutline } from "flowbite-svelte-icons";
</script>

<Section name="heroVisual">
  <div class="mr-auto place-self-center lg:col-span-7">
    <HeroHeader h1Class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white" pClass="text-left max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 sm:px-0 lg:px-0 xl:px-0">
      {#snippet h1()}Payments tool for software companies{/snippet}
      {#snippet paragraph()}From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.{/snippet}
      <a href="/"><Button size="xl" color="red" class="mr-3 inline-flex items-center justify-center">Get started<ArrowRightOutline size="md" class="-mr-1 ml-2" /></Button></a>
      <a href="/"><Button color="light" size="xl" class="inline-flex items-center justify-center">Speak to Sales</Button></a>
    </HeroHeader>
  </div>
  <div class="hidden lg:col-span-5 lg:mt-0 lg:flex">
    <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
  </div>
</Section>
```

<CompoAttributesViewer {components}/>
