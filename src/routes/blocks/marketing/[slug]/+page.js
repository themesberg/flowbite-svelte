import nav from "$lib/generated/nav.json";

/** @type {import('./$types').EntryGenerator} */
export const entries = () => nav.blocks.marketing.map((entry) => ({ slug: entry.path.slice(1) }));

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const post = await import(`../${params.slug}.md`);
  const { title, dir, no_of_components } = post.metadata;
  const content = post.default;

  return {
    content,
    title,
    dir,
    no_of_components
  };
}
