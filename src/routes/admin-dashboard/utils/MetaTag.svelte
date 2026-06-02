<script lang="ts">
  import { MetaTags } from "runes-meta-tags";

  interface Props {
    path: string;
    description: string;
    title: string;
    subtitle?: string;
  }
  let { path, description, title, subtitle: _subtitle = "" }: Props = $props();

  // slug mirrors pathToSlug() in generate-admin-dashboard-og-images.js
  let imgsrc = $derived(`https://flowbite-svelte.com/og/admin-dashboard${path.replace(/\//g, "-")}.png`);
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
