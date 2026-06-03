import type { PageLoad, EntryGenerator } from "./$types";
import nav from "$lib/generated/nav.json";

export const entries: EntryGenerator = () => nav.posts.illustrations.map((entry) => ({ slug: entry.path.slice(1) }));

export const load: PageLoad = async ({ params }) => {
  const post = await import(`../${params.slug}.md`);
  const { title, dir } = post.metadata;
  const content = post.default;

  return {
    content,
    title,
    dir
  };
};
