import { ANALYTICS_ID } from '$env/static/private';
import type { MetaProps } from 'runes-meta-tags';
import {splitAndCapitalize} from './utils/helpers';
export const load = ({ url }) => {
  let title = splitAndCapitalize(url.pathname) ? `${splitAndCapitalize(url.pathname)} - Svelte 5 UI Lib` : 'Svelte 5 UI Lib';
  let description = splitAndCapitalize(url.pathname) ? `${splitAndCapitalize(url.pathname)} component for Svelte 5 Runes.` : 'A UI library for Svelte 5 Runes.';
  let image = splitAndCapitalize(url.pathname) ? `https://open-graph-vercel.vercel.app/api/svelte-5-ui-lib?title=${splitAndCapitalize(url.pathname)}` : 'https://open-graph-vercel.vercel.app/api/svelte-5-ui-lib';
  // console.log('url: ', splitAndCapitalize(url.pathname));
  const layoutMetaTags: MetaProps = {
    title,
    description,
    keywords: 'svelte, runes, ui, components, library',
    twitter: {
      card: 'summary_large_image',
      site: '@shinokada',
      handle: '@shinokada',
      title,
      description,
      image,
      imageAlt: title,
    },
    og: {
      type: 'website',
      title,
      description,
      url: url.href,
      image,
      imageAlt: title,
      siteName: 'Svelte 5 UI Lib',
      imageWidth: '1200',
      imageHeight: '630'
    }
  };
  return {
		layoutMetaTags,
		ANALYTICS_ID
  };
};
