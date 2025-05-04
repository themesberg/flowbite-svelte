/** @type {import('./$types').LayoutLoad} */
export const load = async ({ fetch }) => {
  try {
    const response = await fetch("/api/posts");
    // const { posts, builders } = await fetch("/api/posts").then(json);

    return { posts: await response.json() };
  } catch (error) {
    console.error(`Error in load function for /: ${error}`);
  }
};
