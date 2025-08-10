import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const post = await import(`../${params.slug}.svelte`);
  const content = post.default;

  return {
    content
  };
};
