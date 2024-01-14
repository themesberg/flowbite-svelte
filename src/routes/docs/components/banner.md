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
  import { Banner } from 'flowbite-svelte';
</script>
```

## Default sticky banner

Use this free example to show a text message for announcement with a CTA link, an icon element and a close button to dismiss the banner.

```svelte example class="flex flex-col relative"
<script>
  import { Banner, Skeleton, ImagePlaceholder } from 'flowbite-svelte';
  import { BullhornSolid } from 'flowbite-svelte-icons';
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner id="default-banner" position="absolute">
  <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
    <span class="inline-flex p-1 me-3 bg-gray-200 rounded-full dark:bg-gray-600">
      <BullhornSolid class="w-3 h-3 text-gray-500 dark:text-gray-400" />
      <span class="sr-only">Light bulb</span>
    </span>
    <span>
      New brand identity has been launched for the <a href="https://flowbite.com" class="inline font-medium text-primary-600 underline dark:text-primary-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline"> Flowbite Library </a>
    </span>
  </p>
</Banner>
```

## Bottom banner position

This example can be used to position the sticky banner to the bottom side of the page instead of the top side.

```svelte example class="flex flex-col relative"
<script>
  import { Banner, Skeleton, ImagePlaceholder } from 'flowbite-svelte';
  import { SalePercentSolid, ArrowRightSolid } from 'flowbite-svelte-icons';
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner id="bottom-banner" position="absolute" bannerType="bottom">
  <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
    <span class="inline-flex p-1 me-3 bg-gray-200 rounded-full dark:bg-gray-600">
      <SalePercentSolid class="w-4 h-4 text-gray-500 dark:text-gray-400" />
      <span class="sr-only">Discount coupon</span>
    </span>
    <span>
      Get 5% commission per sale <a href="https://flowbite.com" class="flex items-center ms-0 text-sm font-medium text-primary-600 md:ms-1 md:inline-flex dark:text-primary-500 hover:underline">
        Become a partner <ArrowRightSolid class="w-3 h-3 ms-2" />
      </a>
    </span>
  </p>
</Banner>
```

## Marketing CTA banner

Use this free example to show a text message for announcement with a CTA link.

```svelte example class="flex flex-col relative"
<script>
  import { Banner, Skeleton, ImagePlaceholder } from 'flowbite-svelte';
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner id="cta-banner" position="absolute" bannerType="cta">
  <a href="https://flowbite-svelte.com/" class="flex items-center mb-2 border-gray-200 md:pe-4 md:me-4 md:border-e md:mb-0 dark:border-gray-600">
    <img src="https://flowbite-svelte.com/images/flowbite-svelte-icon-logo.svg" class="h-6 me-2" alt="Flowbite Logo" />
    <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a>
  <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">Build websites even faster with components on top of Tailwind CSS</p>
</Banner>
```

## Newsletter sign-up banner

This example can be used to encourage your website visitors to sign up to your email newsletter by showing an inline form inside the sticky banner on the top side of your page.

```svelte example class="flex flex-col relative"
<script>
  import { Banner, Skeleton, ImagePlaceholder } from 'flowbite-svelte';
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner id="signup-banner" position="absolute" bannerType="signup">
  <form action="/" class="flex flex-col items-center w-full md:flex-row">
    <label for="email" class="flex-shrink-0 mb-2 me-auto text-sm font-medium text-gray-500 md:mb-0 md:me-4 dark:text-gray-400 md:m-0"> Sign up for our newsletter </label>
    <input type="email" id="email" placeholder="Enter your email" class="bg-white border border-gray-300 text-gray-900 md:w-64 mb-2 md:mb-0 md:me-4 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
    <button type="submit" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"> Subscribe </button>
  </form>
</Banner>
```

## Informational banner

This example can be used to share important information with your website visitors by showing a heading and a paragraph inside the sticky banner and two CTA buttons with links.

```svelte example class="flex flex-col relative"
<script>
  import { Banner, Skeleton, ImagePlaceholder } from 'flowbite-svelte';
  import { OpenBookSolid, ArrowRightSolid } from 'flowbite-svelte-icons';
</script>

<Skeleton class="py-4" />
<ImagePlaceholder class="py-4" />

<Banner id="info-banner" position="absolute" bannerType="info">
  <div slot="header" class="mb-4 md:mb-0 md:me-4">
    <h2 class="mb-1 text-base font-semibold text-gray-900 dark:text-white">Integration is the key</h2>
    <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">You can integrate Flowbite with many tools.</p>
  </div>
  <a href="/" class="inline-flex items-center px-3 py-2 me-3 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
    <OpenBookSolid class="w-3 h-3 me-2" />
    Learn more
  </a>
  <a href="/" class="inline-flex px-3 py-2 me-2 text-xs font-medium text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
    Get started <ArrowRightSolid class="w-3 h-3 ms-2" />
  </a>
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
