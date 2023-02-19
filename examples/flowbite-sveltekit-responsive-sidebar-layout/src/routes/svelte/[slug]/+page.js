export async function load({ params }) {
  const post = await import(`../${params.slug}.svelte`);
  // const { title, dir } = post.metadata;
  console.log('post: ', post);
  const content = post.default;

  return {
    content
    // title,
    // dir
  };
}
