<script lang="ts">
  import { MetaTags } from "runes-meta-tags";

  interface Props {
    path: string;
    description: string;
    title: string;
    subtitle: string;
  }
  let { path, description, title, subtitle }: Props = $props();

  let imgsrc = $derived(`https://flowbite-svelte.com/og?package=Flowbite%20Svelte%20Admin%20Dashboard&title=${subtitle}`);
  let og_url = $derived(`https://flowbite-svelte.com/admin-dashboard${path}`);
</script>

<MetaTags
  {title}
  {description}
  og={{
    type: "website",
    url: `${og_url}`,
    title: `${title}`,
    description: `${description}`,
    image: imgsrc,
    imageWidth: 1200,
    imageHeight: 630,
    imageAlt: `${title}`,
    siteName: "Flowbite Svelte Admin Dashboard"
  }}
  twitter={{
    creator: "@shinokada",
    card: "summary_large_image",
    title: `${title}`,
    description: `${description}`,
    image: imgsrc,
    imageAlt: `${title}`
  }}
/>
