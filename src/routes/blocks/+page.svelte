<script lang="ts">
  // import { MetaTag } from './utils';
  import { MetaTags } from 'svelte-meta-tags';
  import type { PageData } from './$types';
  import { SectionComponent } from './utils';

  export let data: PageData;

  let title = 'Flowbite Svelte Blocks - UI Component Library';
  const description = 'Get started with 250 free and premium UI components built with the utility classes from Tailwind CSS to upgrade your web development stack and customize the colors, fonts, and dark mode using the configurator.';
  let default_title = 'Svelte UI Components';
  const image = `https://open-graph-vercel.vercel.app/api/flowbite-svelte-blocks?title=${default_title}`;
</script>

<MetaTags
  {title}
  {description}
  facebook={{ appId: '453670756870545' }}
  openGraph={{
    type: 'website',
    url: `https://flowbite-svelte-blocks.codewithshin.com/`,
    title: `${title}`,
    description: `${description}`,
    images: [{ url: image, width: 1200, height: 630, alt: `${title}` }],
    siteName: 'Flowbite Svelte Blocks'
  }}
  twitter={{
    handle: '@shinokada',
    cardType: 'summary_large_image',
    title: `${title}`,
    description: `${description}`,
    image,
    imageAlt: `${title} logo`
  }} />

<div class="mx-auto max-w-8xl pt-8 px-4 lg:px-20 mx-auto max-w-8xl">
  <div class="col-span-2 mb-2 lg:mb-0">
    <h1 class="mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Flowbite Blocks in Svelte</h1>
    <p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400">Get started with 122 free and premium UI components built with the utility classes from Tailwind CSS to upgrade your web development stack and customize the colors, fonts, and dark mode using the configurator.</p>
  </div>
</div>
<SectionComponent {data} section={undefined} />
