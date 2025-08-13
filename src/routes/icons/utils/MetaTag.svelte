<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";
  type Props = {
    path: string;
    description: string;
    title: string;
    subtitle: string;
  };
  let { path, description, title, subtitle }: Props = $props();

  let imgsrc = `flowbite-svelte.com/og?package=Flowbite%20Svelte%20Icons?title=${subtitle}`;

  let og_url: string = `https://flowbite-svelte.com/icons/${path}`;
</script>

<MetaTags
  {title}
  {description}
  openGraph={{
    type: "website",
    url: `${og_url}`,
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
    siteName: "Flowbite Svelte Icons"
  }}
  twitter={{
    creator: "@shinokada",
    cardType: "summary_large_image",
    title: `${title}`,
    description: `${description}`,
    image: imgsrc,
    imageAlt: `${title}`
  }}
/>
