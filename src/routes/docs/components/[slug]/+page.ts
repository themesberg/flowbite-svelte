import type { PageLoad } from "./$types";

const delay = ms => new Promise(res => setTimeout(res, ms));

export const load: PageLoad = async ({ params , url}) => {
  const post = await import(`../${params.slug}.md`);
  if(!post.metadata)  {
    await delay(1000)
  }
  const { title, dir } = post.metadata;
  const content = post.default;

  return {
    content,
    title,
    dir
  };
};
