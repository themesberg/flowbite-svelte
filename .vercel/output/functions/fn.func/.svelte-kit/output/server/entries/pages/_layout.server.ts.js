import { s as splitAndCapitalize, r as removeHyphensAndCapitalize } from "../../chunks/helpers.js";
const ANALYTICS_ID_RUNES_LIB = "G-ABCD1234";
const load = ({ url }) => {
  const title = splitAndCapitalize(url.pathname) ? `${splitAndCapitalize(url.pathname)} - ${removeHyphensAndCapitalize("svelte-5-ui-lib")}` : `${removeHyphensAndCapitalize("svelte-5-ui-lib")}`;
  const description = splitAndCapitalize(url.pathname) ? `${splitAndCapitalize(url.pathname)} component for Svelte 5 Runes.` : "A UI library for Svelte 5 Runes.";
  const image = splitAndCapitalize(url.pathname) ? `https://open-graph-vercel.vercel.app/api/svelte-5-ui-lib?title=${splitAndCapitalize(url.pathname)}` : "https://open-graph-vercel.vercel.app/api/svelte-5-ui-lib";
  const layoutMetaTags = {
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
      siteName: "Svelte 5 UI Lib",
      imageWidth: "1200",
      imageHeight: "630"
    }
  };
  return {
    layoutMetaTags,
    ANALYTICS_ID_RUNES_LIB
  };
};
export {
  load
};
