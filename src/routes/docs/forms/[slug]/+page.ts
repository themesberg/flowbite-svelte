import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const post = await import(`../${params.slug}.md`);
  const { title, dir } = post.metadata;
  const content = post.default;

  return {
    content,
    title,
    dir
  };
}
