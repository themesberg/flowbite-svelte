import type { LayoutServerLoad } from './$types';
import { ANALYTICS_ID } from '$env/static/private';
const json = (r: Response) => r.json();
// export const prerender = true;

export const load: LayoutServerLoad = async ({ fetch }) => {
  try {
    const posts = await fetch('/api/posts').then(json);
    // console.log('posts: ', posts);
    return { ANALYTICS_ID, posts };
  } catch (error) {
    console.error(`Error in load function for /: ${error}`);
  }
};
