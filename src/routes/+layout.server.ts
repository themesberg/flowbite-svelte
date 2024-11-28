import { ANALYTICS_ID_RUNES_LIB } from "$env/static/private";
import type { MetaProps } from "runes-meta-tags";
import { splitAndCapitalize, removeHyphensAndCapitalize } from "./utils/helpers";
export const load = ({ url }) => {
  const title = splitAndCapitalize(url.pathname) ? `${splitAndCapitalize(url.pathname)} - ${removeHyphensAndCapitalize(__NAME__)}` : `${removeHyphensAndCapitalize(__NAME__)}`;
  const description = splitAndCapitalize(url.pathname) ? `${splitAndCapitalize(url.pathname)} component for Svelte 5 Runes.` : "A UI library for Svelte 5 Runes.";
  const image = splitAndCapitalize(url.pathname) ? `https://open-graph-vercel.vercel.app/api/flowbite-svelte?title=${splitAndCapitalize(url.pathname)}` : "https://open-graph-vercel.vercel.app/api/flowbite-svelte";
  // console.log('url: ', splitAndCapitalize(url.pathname));
  const layoutMetaTags: MetaProps = {
    title,
    description,
    keywords: "svelte, runes, ui, components, library",
    twitter: {
      card: "summary_large_image",
      site: "@shinokada",
      handle: "@shinokada",
      title,
      description,
      image,
      imageAlt: title
    },
    og: {
      type: "website",
      title,
      description,
      url: url.href,
      image,
      imageAlt: title,
      siteName: "Flowbite Svelte",
      imageWidth: "1200",
      imageHeight: "630"
    }
  };
  return {
    layoutMetaTags,
    ANALYTICS_ID_RUNES_LIB
  };
};
