---
layout: componentLayout
title: Svelte Sticky Banner - Flowbite
breadcrumb_title: Svelte Sticky Banner
component_title: Banner
dir: Components
description: Use the banner component to show marketing messages and CTA buttons at the top or bottom side of your website based on the utility classes from Tailwind CSS
thumnailSize: w-64
---

<script>
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

Get started with the sticky banner component coded with Tailwind CSS and Flowbite to show marketing, informational and CTA messages to your website visitors fixed to the top or bottom part of the page as the user scroll down the main content area.

Explore the following examples based on various styles, sizes, and positionings to leverage the sticky banner component and increase marketing conversions with a responsive element supporting dark mode.

## Setup

```svelte example hideOutput
<script>
  import { Banner } from "flowbite-svelte";
</script>
```

## Default sticky banner

Use this free example to show a text message for announcement with a CTA link, an icon element and a close button to dismiss the banner.

```svelte example class="flex flex-col relative"
<script>
  import { Banner, Skeleton, ImagePlaceholder } from "flowbite-svelte";
  import { BullhornSolid } from "flowbite-svelte-icons";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner id="default-banner" position="absolute">
  <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
    <span class="me-3 inline-flex rounded-full bg-gray-200 p-1 dark:bg-gray-600">
      <BullhornSolid class="h-3 w-3 text-gray-500 dark:text-gray-400" />
      <span class="sr-only">Light bulb</span>
    </span>
    <span>
      New brand identity has been launched for the <a href="https://flowbite.com" class="text-primary-600 dark:text-primary-500 inline font-medium underline decoration-solid decoration-2 underline-offset-2 hover:no-underline dark:decoration-1">Flowbite Library</a>
    </span>
  </p>
</Banner>
```

## Bottom banner position

This example can be used to position the sticky banner to the bottom side of the page instead of the top side.

```svelte example class="flex flex-col relative"
<script>
  import { Banner, Skeleton, ImagePlaceholder } from "flowbite-svelte";
  import { SalePercentSolid, ArrowRightOutline } from "flowbite-svelte-icons";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner id="bottom-banner" position="absolute" bannerType="bottom">
  <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
    <span class="me-3 inline-flex rounded-full bg-gray-200 p-1 dark:bg-gray-600">
      <SalePercentSolid class="h-4 w-4 text-gray-500 dark:text-gray-400" />
      <span class="sr-only">Discount coupon</span>
    </span>
    <span>
      Get 5% commission per sale <a href="https://flowbite.com" class="text-primary-600 dark:text-primary-500 ms-0 flex items-center text-sm font-medium hover:underline md:ms-1 md:inline-flex">
        Become a partner <ArrowRightOutline class="ms-2 h-3 w-3" />
      </a>
    </span>
  </p>
</Banner>
```

## Marketing CTA banner

Use this free example to show a text message for announcement with a CTA link.

```svelte example class="flex flex-col relative"
<script>
  import { Banner, Skeleton, ImagePlaceholder } from "flowbite-svelte";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner id="cta-banner" position="absolute" bannerType="cta">
  <a href="https://flowbite-svelte.com/" class="mb-2 flex items-center border-gray-200 md:me-4 md:mb-0 md:border-e md:pe-4 dark:border-gray-600">
    <img src="https://flowbite-svelte.com/images/flowbite-svelte-icon-logo.svg" class="me-2 h-6" alt="Flowbite Logo" />
    <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a>
  <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">Build websites even faster with components on top of Tailwind CSS</p>
</Banner>
```

## Newsletter sign-up banner

This example can be used to encourage your website visitors to sign up to your email newsletter by showing an inline form inside the sticky banner on the top side of your page.

```svelte example class="flex flex-col relative"
<script>
  import { Banner, Skeleton, ImagePlaceholder } from "flowbite-svelte";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner id="signup-banner" position="absolute" bannerType="signup">
  <form action="/" class="flex w-full flex-col items-center md:flex-row">
    <label for="email" class="me-auto mb-2 shrink-0 text-sm font-medium text-gray-500 md:m-0 md:me-4 md:mb-0 dark:text-gray-400">Sign up for our newsletter</label>
    <input type="email" id="email" placeholder="Enter your email" class="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-2 block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 md:me-4 md:mb-0 md:w-64 dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400" required />
    <button type="submit" class="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:ring-4 focus:outline-hidden sm:w-auto">Subscribe</button>
  </form>
</Banner>
```

## Informational banner

This example can be used to share important information with your website visitors by showing a heading and a paragraph inside the sticky banner and two CTA buttons with links.

```svelte example class="flex flex-col relative"
<script>
  import { Banner, Skeleton, ImagePlaceholder } from "flowbite-svelte";
  import { BookOpenOutline, ArrowRightOutline } from "flowbite-svelte-icons";
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner id="info-banner" position="absolute" bannerType="info">
  {#snippet header()}
    <div class="mb-4 md:me-4 md:mb-0">
      <h2 class="mb-1 text-base font-semibold text-gray-900 dark:text-white">Integration is the key</h2>
      <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">You can integrate Flowbite with many tools.</p>
    </div>
  {/snippet}
  <a href="/" class="hover:text-primary-700 me-3 inline-flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 focus:outline-hidden dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700">
    <BookOpenOutline class="me-2 h-3 w-3" />
    Learn more
  </a>
  <a href="/" class="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 me-2 inline-flex rounded-lg px-3 py-2 text-xs font-medium text-white focus:ring-4 focus:outline-hidden">
    Get started <ArrowRightOutline class="ms-2 h-3 w-3" />
  </a>
</Banner>
```

## Transition

The `transition` and `params` props allow you to apply transition effects to components when they enter or leave the view. Svelte provides built-in transitions like `fly`, `slide`, `blur-sm`, `fade`, and `scale`.

This example demonstrates a sliding transition using the slide transition from svelte/transition:

```svelte example class="flex flex-col relative"
<script>
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { Banner, Skeleton, ImagePlaceholder } from "flowbite-svelte";
  import { BullhornSolid } from "flowbite-svelte-icons";

  const params = { delay: 250, duration: 500, easing: quintOut };
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner id="default-banner" position="absolute" transition={slide} {params}>
  <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
    <span class="me-3 inline-flex rounded-full bg-gray-200 p-1 dark:bg-gray-600">
      <BullhornSolid class="h-3 w-3 text-gray-500 dark:text-gray-400" />
      <span class="sr-only">Light bulb</span>
    </span>
    <span>
      New brand identity has been launched for the <a href="https://flowbite.com" class="text-primary-600 dark:text-primary-500 inline font-medium underline decoration-solid decoration-2 underline-offset-2 hover:no-underline dark:decoration-1">Flowbite Library</a>
    </span>
  </p>
</Banner>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### Banner styling

- Use the `classDiv` prop to overwrite `divClass`.
- Use the `classInner` prop to overwrite `innerClass`.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Banner](https://flowbite.com/docs/components/banner/)

<GitHubCompoLinks />
