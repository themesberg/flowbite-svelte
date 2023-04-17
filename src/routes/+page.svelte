<script lang="ts">
  import { Button } from '$lib';
  import { MetaTags } from 'svelte-meta-tags';
  import Footer from './utils/Footer.svelte';
  import type { PageData } from './$types';
  import CompoCard from './utils/CompoCard.svelte';
  import Input from '$lib/forms/Input.svelte';
  import Hero from './Hero.svelte';
  import Featured from './utils/landing/Featured.svelte';

  export let data: PageData;

  let components = [...data.forms, ...data.components, ...data.typography, ...data.experimental].sort(
    (a, b) => a.meta.component_title.localeCompare(b.meta.component_title)
  );
  let title = 'Flowbite-Svelte';
  let description =
    'Flowbite Svelte is an open-source UI component library built with Svelte components, Tailwind CSS utility classes and based on the Flowbite design system and components.';
  let default_title = 'Svelte UI Components';
  const image = `https://open-graph-vercel.vercel.app/api/flowbite-svelte?title=${default_title}`;
</script>

<MetaTags
  {title}
  {description}
  facebook={{ appId: '453670756870545' }}
  openGraph={{
    type: 'website',
    url: `https://flowbite-svelte.com/`,
    title: `${title}`,
    description: `${description}`,
    images: [{ url: image, width: 1200, height: 630, alt: `${title}` }],
    site_name: 'Flowbite Svelte'
  }}
  twitter={{
    handle: '@shinokada',
    cardType: 'summary_large_image',
    title: `${title}`,
    description: `${description}`,
    image,
    imageAlt: `${title} logo`
  }} />

<main
  class="flex-auto mx-auto max-w-8xl min-w-0 lg:static lg:max-h-full lg:overflow-visible divide-y dark:divide-gray-700">
  <!-- hero -->
  <Hero />
  <Featured />
  <div class="w-full px-4 lg:px-20 space-y-8 lg:space-y-12">
    <div class="flex flex-col items-center pt-6 sm:pt-8 lg:pt-24 gap-4 sm:gap-4">
      <h2 class="tracking-tight font-extrabold text-3xl lg:text-4xl text-gray-900 dark:text-white">
        Svelte components
      </h2>
      <p class="text-lg font-normal text-gray-500 dark:text-gray-400 max-w-3xl mx-auto text-center">
        Explore the whole collection of <span class="font-medium text-gray-900 dark:text-white"
          >over 56 open-source</span> UI components and interactive elements built with Svelte and Flowbite.
      </p>
    </div>

    <div class="grid grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-10">
      {#each components as { path, meta: { dir, component_title } }}
        <CompoCard name={component_title} {dir} {path} />
      {/each}
    </div>
  </div>
  <Footer />
</main>
