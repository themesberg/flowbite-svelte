<script lang="ts">
  import { MetaTags } from 'svelte-meta-tags';
  export let breadcrumb_title: string = '';
  export let description: string = '';
  export let title: string = '';

  // title = title.replaceAll(' ', '-');
  let imgsrc = `https://open-graph-vercel.vercel.app/api/flowbite-svelte-blocks?title=${encodeURIComponent(breadcrumb_title)}`;
  let url: string = 'https://flowbite-svelte-blocks.codewithshin.com/';
  export let dir: string = '';
  let dirstring = dir.toLowerCase();
  let breadcrumb = breadcrumb_title.toLowerCase().replaceAll(' ', '-');
  if (breadcrumb_title === '') {
    breadcrumb_title = title.split('-')[0];
  }
</script>

<MetaTags
  title={breadcrumb_title}
  titleTemplate="%s - Flowbite Svelte Blocks"
  {description}
  facebook={{
    appId: '672622757749720'
  }}
  openGraph={{
    type: 'website',
    url: `https://flowbite-svelte-blocks.codewithshin.com/${dirstring}/${breadcrumb}`,
    title: `${title}`,
    description: `${description}`,
    images: [
      {
        url: imgsrc,
        width: 1200,
        height: 630,
        alt: `${title}`
      }
    ],
    siteName: 'Flowbite-Svelte-Blocks'
  }}
  twitter={{
    handle: '@shinokada',
    cardType: 'summary_large_image',
    title: `${title}`,
    description: `${description}`,
    image: imgsrc,
    imageAlt: `${title}`
  }} />
