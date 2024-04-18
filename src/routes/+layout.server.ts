import { ANALYTICS_ID } from '$env/static/private';
import type { MetaProps } from 'runes-meta-tags';

export const load = ({ url }) => {
  const layoutMetaTags: MetaProps = {
    title: 'Runatics',
    description: 'A simple Google analyics component for Svelte Runes project.',
    keywords: 'svelte, runes, google, analytics',
    twitter: {
      card: 'summary_large_image',
      site: '@shinokada',
      handle: '@shinokada',
      title: 'Runatics',
      description: 'Meta tags for Runes.',
      image: 'https://open-graph-vercel.vercel.app/api/runatics',
      imageAlt: 'Runatics'
    },
    og: {
      type: 'website',
      title: 'Runatics',
      description: 'A simple Google analyics component for Svelte Runes project.',
      url: url.href,
      image: 'https://open-graph-vercel.vercel.app/api/runatics',
      imageAlt: 'Runatics',
      siteName: 'Runatics',
      imageWidth: '1200',
      imageHeight: '630'
    }
  };
  return {
		layoutMetaTags,
		ANALYTICS_ID
  };
};
