import type { LayoutServerLoad } from "./$types";
const json = (r: Response) => r.json();

export const load: LayoutServerLoad = async ({ fetch }) => {
  try {
    const posts = await fetch("/api/posts").then(json);
    // console.log('posts: ', posts);
    return { posts };
  } catch (error) {
    console.error(`Error in load function for /: ${error}`);
  }
};
