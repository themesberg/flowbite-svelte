export async function load({ params }) {
  const post = await import(`../${params.slug}.svelte`);
  const content = post.default;

  return {
    content
  };
}
