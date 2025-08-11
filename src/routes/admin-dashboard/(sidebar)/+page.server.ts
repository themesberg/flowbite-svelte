const json = (r: Response) => r.json();
// export const prerender = true;
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
  try {
    const posts = await fetch("/api/posts").then(json);
    // console.log('posts: ', posts);
    return { posts };
  } catch (error) {
    console.error(`Error in load function for /: ${error}`);
  }
};
