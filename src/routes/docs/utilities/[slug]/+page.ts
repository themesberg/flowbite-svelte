import type { PageLoad } from "./$types";

const delay = (ms: number) => new Promise<void>((res) => setTimeout(res, ms));

export const load: PageLoad = async ({ params }) => {
  const post = await import(`../${params.slug}.md`);

  if(!post.metadata)  {
    await delay(2000)
  }
  const { title, dir } = post.metadata;
  const content = post.default;

  return {
    content,
    title,
    dir
  };
};
