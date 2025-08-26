import type { PageLoad } from "./$types";
import { redirect } from '@sveltejs/kit';

export const load: PageLoad = async ({ params , url}) => {
  const post = await import(`../${params.slug}.md`);
  if(!post.metadata)  {
    redirect(307, url)
  }
  const { title, dir } = post.metadata;
  const content = post.default;

  return {
    content,
    title,
    dir
  };
};
