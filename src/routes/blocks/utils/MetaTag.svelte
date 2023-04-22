<script lang="ts">
  import { MetaTags } from 'svelte-meta-tags';
  export let withoutLink: boolean = false;
  export let breadcrumb_title: string = '';
  export let description: string = '';
  export let title: string = '';
  // title = title.replaceAll(' ', '-');
  let imgsrc = `https://open-graph-vercel.vercel.app/api/flowbite-svelte-blocks?title=${encodeURIComponent(
    breadcrumb_title
  )}`;
  let url: string = 'https://flowbite-svelte-blocks.vercel.app/';
  export let dir: string = '';
  let breadcrumb = breadcrumb_title.toLowerCase().replaceAll(' ', '-');
  let urlLink = withoutLink ? '' : breadcrumb;
  if (dir) {
    let dirstring = dir.toLowerCase() + '/';
    url = `https://flowbite-svelte-blocks.vercel.app/${dirstring}${urlLink}`;
  }
</script>

<MetaTags
  title={breadcrumb_title}
  titleTemplate="%s Flowbite-Svelte-Block"
  {description}
  facebook={{
    appId: '672622757749720'
  }}
  openGraph={{
    type: 'website',
    url: `${url}`,
    title: `Flowbite-Svelte-Blocks ${title}`,
    description: `${description}`,
    images: [
      {
        url: imgsrc,
        width: 1200,
        height: 630,
        alt: `${title}`
      }
    ],
    site_name: 'Flowbite-Svelte-Blocks'
  }}
  twitter={{
    handle: '@shinokada',
    cardType: 'summary_large_image',
    title: `Flowbite-Svelte-Blocks ${title}`,
    description: `${description}`,
    image: imgsrc,
    imageAlt: `${title}`
  }}
/>
