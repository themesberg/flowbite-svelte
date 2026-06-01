<script lang="ts">
  import { MetaTags } from "svelte-meta-tags";
  import { page } from "$app/stores";

  let { breadcrumb_title = "", description = "", title = "", dir = "", pkg = "Flowbite Svelte" } = $props();

  let ogSlug = $derived($page.url.pathname === "/" ? "docs-pages-introduction" : $page.url.pathname.slice(1).replace(/\//g, "-"));
  let imgsrc = $derived(`https://flowbite-svelte.com/og/${ogSlug}.png`);

  let dirstring = $derived(dir ? dir.toLowerCase() : "");
  let breadcrumb = $derived(breadcrumb_title && breadcrumb_title.length > 0 ? breadcrumb_title.toLowerCase().replaceAll(" ", "-") : "");
</script>

<MetaTags
  title={breadcrumb_title}
  titleTemplate="%s - Flowbite"
  {description}
  facebook={{
    appId: "453670756870545"
  }}
  openGraph={{
    type: "website",
    url: `https://flowbite-svelte-blocks.codewithshin.com/${dirstring}${breadcrumb ? `/${breadcrumb}` : ""}`,
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
    siteName: "Flowbite Svelte"
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
