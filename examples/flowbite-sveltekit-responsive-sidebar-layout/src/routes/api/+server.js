import { json } from '@sveltejs/kit';

export const GET = async () => {
  const allPosts = await fetchMarkdownPosts();
  return json(allPosts);
};

const fetchMarkdownPosts = async () => {
  const articleFiles = import.meta.glob('/src/routes/blog/*.md');
  const pageFiles = import.meta.glob('/src/routes/pages/*.md');
  const svelteFiles = import.meta.glob('/src/routes/svelte/*.svelte');

  // returns an array of files
  const iterableArticleFiles = Object.entries(articleFiles);
  const iterablePageFiles = Object.entries(pageFiles);
  const iterableSvelteFiles = Object.entries(svelteFiles);

  const articles = await Promise.all(
    iterableArticleFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const filePath = path.slice(17, -3);
      return {
        meta: metadata,
        path: filePath
      };
    })
  );

  const pages = await Promise.all(
    iterablePageFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const filePath = path.slice(18, -3);
      return {
        meta: metadata,
        path: filePath
      };
    })
  );

  const sveltefiles = await Promise.all(
    iterableSvelteFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const filePath = path.slice(18, -7);
      return {
        meta: metadata,
        path: filePath
      };
    })
  );

  return { pages, articles, sveltefiles };
};
