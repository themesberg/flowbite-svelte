// src/routes/blog/[slug]/+page.js
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const post = await import(`../${params.slug}.md`);
  const { title, dir } = post.metadata;
  const content = post.default;

  return {
    content,
    title,
    dir
  };

  throw error(404, 'Not found');
}
