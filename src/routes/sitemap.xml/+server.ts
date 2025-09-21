import * as sitemap from 'super-sitemap';
import { error } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import * as docs from './docs';

export const GET: RequestHandler = async () => {
  let docsSlugs;
  try {
    docsSlugs = await docs.getDocsSlugs();
    console.log('Generated docs slugs:', docsSlugs );
  } catch (err) {
    console.error('Could not load docs data for sitemap:', err);
    throw error(500, 'Could not load data for param values.');
  }

  return await sitemap.response({
    origin: 'https://flowbite-svelte.com',
    excludeRoutePatterns: [
      '^/component-data.*',
      '^/docs-examples.*',
      '^/docs/examples.*',
      '^/fonts.*',
      '^/admin-dashboard.*',
      '^/testdir.*', 
      '^/layouts/component.*',
    ],
    paramValues: {
      '/docs/pages/[slug]': docsSlugs['pages'] || [],
      '/docs/components/[slug]': docsSlugs['components'] || [],
      '/docs/forms/[slug]': docsSlugs['forms'] || [],
      '/docs/typography/[slug]': docsSlugs['typography'] || [],
      '/docs/utilities/[slug]': docsSlugs['utilities'] || [],
      '/docs/extend/[slug]': docsSlugs['extend'] || [],
      // '/docs/examples/[slug]': docsSlugs['examples'] || [],
      '/docs/plugins/[slug]': docsSlugs['plugins'] || [],
      '/icons/[slug]': docsSlugs['icons'] || [],
      '/illustrations/[slug]': docsSlugs['illustrations'] || [],

      '/blocks/application/[slug]': docsSlugs['blocks-application'] || [],
      '/blocks/marketing/[slug]': docsSlugs['blocks-marketing'] || [],
      '/blocks/publisher/[slug]': docsSlugs['blocks-publisher'] || [],
      // '/builder': docsSlugs['builders'] || [],
      // paramValues can be a 1D array of strings
      // '/docs/': fetchMarkdownPosts(), // e.g. ['hello-world', 'another-post']
      // '/blog/tag/[tag]': blogTags, // e.g. ['red', 'green', 'blue']
    },
  });
};