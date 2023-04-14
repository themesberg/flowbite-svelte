<script lang="ts">
  import { Button } from '$lib';
  // import * as Block from './blocks/+server';
  import { MetaTags } from 'svelte-meta-tags';
  import Footer from './utils/Footer.svelte';
  import type { PageData } from './$types';
  import CompoCard from './utils/CompoCard.svelte';

  export let data: PageData;

  let components = [...data.forms, ...data.components, ...data.typography, ...data.experimental].sort(
    (a, b) => a.meta.breadcrumb_title.localeCompare(b.meta.breadcrumb_title)
  );
  let title = 'Flowbite-Svelte';
  let description =
    'Flowbite Svelte is an open-source UI component library built with Svelte components, Tailwind CSS utility classes and based on the Flowbite design system and components.';
  let default_title = 'Svelte UI Components';
</script>

<MetaTags
  {title}
  {description}
  facebook={{
    appId: '453670756870545'
  }}
  openGraph={{
    type: 'website',
    url: `https://flowbite-svelte.com/`,
    title: `${title}`,
    description: `${description}`,
    images: [
      {
        url: `https://open-graph-vercel.vercel.app/api/flowbite-svelte?title=${default_title}`,
        width: 1200,
        height: 630,
        alt: `${title}`
      }
    ],
    site_name: 'Flowbite Svelte'
  }}
  twitter={{
    handle: '@shinokada',
    cardType: 'summary_large_image',
    title: `${title}`,
    description: `${description}`,
    image: `https://open-graph-vercel.vercel.app/api/flowbite-svelte?title=${default_title}`,
    imageAlt: `${title} logo`
  }} />

<div class="relative bg-white overflow-hidden mt-4 lg:mb-8 mx-auto dark:bg-gray-900 2xl:px-8 p-4">
  <div class="max-w-full mx-auto">
    <div class="relative z-10 xl:pb-8 bg-transparent lg:max-w-2xl lg:w-full">
      <div class="my-auto mx-auto max-w-7xl xl:pl-8 xl:pt-8">
        <div class="sm:text-center lg:text-left">
          <h1 class="max-w-md text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            <span class="block xl:inline">Flowbite Svelte</span>
            <span class="block text-primary-700 dark:text-primary-700 xl:inline">UI Component</span>
          </h1>
          <p
            class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg lg:max-w-sm sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 dark:text-white">
            Speed up your web development with Flowbite Svelte. Flowbite Svelte is an official Flowbite
            component library for Svelte. All interactivities are handled by Svelte.
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <Button size="lg" href="'/pages/getting-started'" color="primary">Getting started</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="px-16 py-4 lg:p-0 lg:pr-4 lg:absolute lg:inset-y-0 lg:right-0 lg:w-5/12 lg:pt-8">
    <img class="" src="/images/office1.webp" alt="Header" />
  </div>
</div>

<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 mb-10">
  {#each components as { path, meta: { dir, breadcrumb_title } }}
    <CompoCard name={breadcrumb_title} {dir} {path} />
  {/each}
</div>

<Footer />
