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
  import { TableProp, TableDefaultRow } from '../../utils'
  import { P, A } from '$lib'
  import { props as bannerProps } from '../../props/Banner.json'
</script>



Get started with the sticky banner component coded with Tailwind CSS and Flowbite to show marketing, informational and CTA messages to your website visitors fixed to the top or bottom part of the page as the user scroll down the main content area.

Explore the following examples based on various styles, sizes, and positionings to leverage the sticky banner component and increase marketing conversions with a responsive element supporting dark mode.

## Setup

```svelte example hideOutput
<script>
  import { Banner } from "flowbite-svelte"
</script>
```

## Default sticky banner

Use this free example to show a text message for announcement with a CTA link, an icon element and a close button to dismiss the banner.

```svelte example class="flex flex-col relative" hideScript 
<script>
  import { Banner, Skeleton, ImagePlaceholder } from "flowbite-svelte"
</script>

<Skeleton class="py-4"/>
<ImagePlaceholder class="py-4"/>

<Banner id="default-banner" position="absolute">
  <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
    <span class="inline-flex p-1 mr-3 bg-gray-200 rounded-full dark:bg-gray-600">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
        </svg>
        <span class="sr-only">Light bulb</span>
    </span>
    <span>New brand identity has been launched for the <a href="https://flowbite.com" class="inline font-medium text-blue-600 underline dark:text-blue-500 underline-offset-2 decoration-600 dark:decoration-500 decoration-solid hover:no-underline">Flowbite Library</a></span>
  </p>
</Banner>
```

## Bottom banner position

This example can be used to position the sticky banner to the bottom side of the page instead of the top side.

```svelte example class="flex flex-col relative" hideScript
<script>
  import { Banner, Skeleton, ImagePlaceholder } from "flowbite-svelte"
</script>

<Skeleton class="py-4"/>
<ImagePlaceholder class="py-4"/>

<Banner id="bottom-banner" position="absolute" bannerType="bottom">
  <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
      <span class="inline-flex p-1 mr-3 bg-gray-200 rounded-full dark:bg-gray-600">
          <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path clip-rule="evenodd" fill-rule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"></path>
          </svg>
          <span class="sr-only">Discount coupon</span>
      </span>
      <span>Get 5% commission per sale <a href="https://flowbite.com" class="flex items-center ml-0 text-sm font-medium text-blue-600 md:ml-1 md:inline-flex dark:text-blue-500 hover:underline">Become a partner <svg aria-hidden="true" class="w-4 h-4 ml-1 text-blue-600 dark:text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillrule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" cliprule="evenodd"></path></svg></a></span>
  </p>
</Banner>
```

## Marketing CTA banner

Use this free example to show a text message for announcement with a CTA link. 

```svelte example class="flex flex-col relative" hideScript
<script>
  import { Banner, Skeleton, ImagePlaceholder } from "flowbite-svelte"
</script>

<Skeleton class="py-4"/>
<ImagePlaceholder class="py-4"/>

<Banner id="cta-banner" position="absolute" bannerType="cta">
  <a href="https://flowbite.com/" class="flex items-center mb-2 border-gray-200 md:pr-4 md:mr-4 md:border-r md:mb-0 dark:border-gray-600">
      <img src="https://flowbite.com/docs/images/logo.svg" class="h-6 mr-2" alt="Flowbite Logo">
      <span class="self-center text-lg font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a>
  <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
    Build websites even faster with components on top of Tailwind CSS
  </p>
</Banner>
```

## Newsletter sign-up banner 

This example can be used to encourage your website visitors to sign up to your email newsletter by showing an inline form inside the sticky banner on the top side of your page.

```svelte example class="flex flex-col relative" hideScript
<script>
  import { Banner, Skeleton, ImagePlaceholder } from "flowbite-svelte"
</script>

<Skeleton class="py-4"/>
<ImagePlaceholder class="py-4"/>

<Banner id="signup-banner" position="absolute" bannerType="signup">
  <form action="/" class="flex flex-col items-center w-full md:flex-row">
    <label for="email" class="flex-shrink-0 mb-2 mr-auto text-sm font-medium text-gray-500 md:mb-0 md:mr-4 dark:text-gray-400 md:m-0">Sign up for our newsletter</label>
    <input type="email" id="email" placeholder="Enter your email" class="bg-white border border-gray-300 text-gray-900 md:w-64 mb-2 md:mb-0 md:mr-4 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</button>
</form>
</Banner>
```

## Informational banner

This example can be used to share important information with your website visitors by showing a heading and a paragraph inside the sticky banner and two CTA buttons with links.

```svelte example class="flex flex-col relative" hideScript
<script>
  import { Banner, Skeleton, ImagePlaceholder } from "flowbite-svelte"
</script>

<Skeleton class="py-4"/>
<ImagePlaceholder class="py-4"/>

<Banner id="info-banner" position="absolute" bannerType="info">
  <div slot="header" class="mb-4 md:mb-0 md:mr-4">
    <h2 class="mb-1 text-base font-semibold text-gray-900 dark:text-white">Integration is the key</h2>
    <p class="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">You can integrate Flowbite with many tools.</p>
  </div>
  <a href="/" class="inline-flex items-center px-3 py-2 mr-3 text-xs font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><svg class="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"></path></svg> 
  Learn more
  </a>
  <a href="/" class="inline-flex px-3 py-2 mr-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
    Get started <svg class="h-4 w-4 ml-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"></path></svg>
  </a>
</Banner>
```

## Props

The component has the following props, type, and default values. See <A href="/docs/pages/typescript">types page</A> for type information.

If you want to custom CSS, use `bannerType="custom"` and add your CSS to `outerDiv` and `innerDiv`. 

Use the slot name `header` to insert your elements before the inner div.

<TableProp>
<TableDefaultRow items={bannerProps} rowState='hover' />
</TableProp>

## References

<P>
  <A href="https://flowbite.com/docs/components/banner/" target="_blank" rel="noreferrer" class="link">
  Flowbite Banner
  </A>
</P>
