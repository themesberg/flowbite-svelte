<script lang="ts">
  import { MetaTags } from 'svelte-meta-tags';
  import type { PageData } from './$types';
  import Components from './landing/Components.svelte';
  import Featured from './landing/Featured.svelte';
  import Hero from './landing/Hero.svelte';
  import Footer from './utils/Footer.svelte';
  import Contributors from './landing/Contributors.svelte';
  import DesignFigma from './landing/DesignFigma.svelte';
  import GetStarted from './landing/GetStarted.svelte';
  import SocialProof from './landing/SocialProof.svelte';
  import CTA from './landing/CTA.svelte';

  export let data: PageData;

  let title = 'Flowbite Svelte - UI Component Library';
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

<main class="flex-auto min-w-0 lg:static lg:max-h-full lg:overflow-visible divide-y dark:divide-gray-700">
  <Hero />
  <Featured />
  <Components {data} />
  <CTA />
  <SocialProof />
  <DesignFigma />
  <Contributors {data} />
  <GetStarted />
  <Footer />
</main>
