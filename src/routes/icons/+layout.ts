import type { LayoutLoad } from './$types';
export const load: LayoutLoad = async ({ fetch }) => {
  try {
    const response = await fetch("/api/posts");

    return { posts: await response.json() };
  } catch (error) {
    console.error(`Error in load function for /: ${error}`);
  }
};
