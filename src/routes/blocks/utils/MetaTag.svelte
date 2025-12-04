<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";
  interface Props {
    breadcrumb_title?: string;
    description?: string;
    title?: string;
    dir?: string;
  }
  let { breadcrumb_title, description, title, dir }: Props = $props();

  let imgsrc = $derived(`https://flowbite-svelte.com/og?package=Flowbite%20Svelte%20Blocks&title=${encodeURIComponent(breadcrumb_title || "")}`);
  let dirstring = $derived(dir?.toLowerCase());
  let breadcrumb = $derived(breadcrumb_title?.toLowerCase().replaceAll(" ", "-"));
  let finalBreadcrumbTitle = $derived(breadcrumb_title && breadcrumb_title.length > 0 ? breadcrumb_title : (title?.split("-")[0] ?? "Flowbite Svelte Blocks"));
</script>

<MetaTags
  title={finalBreadcrumbTitle}
  titleTemplate="%s - Flowbite Svelte Blocks"
  {description}
  facebook={{
    appId: "672622757749720"
  }}
  openGraph={{
    type: "website",
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
    siteName: "Flowbite-Svelte-Blocks"
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
