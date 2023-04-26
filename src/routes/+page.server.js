/** @type {import('./$types').PageServerLoad} */
export const load = async ({ fetch }) => {
  try {
    const posts = await fetch('/api/posts').then((r) => r.json());
    const url2 = 'https://api.github.com/repos/themesberg/flowbite-svelte/contributors?per_page=21';
    const contributors = await fetch(url2).then((r) => r.json());

    return { posts, contributors };
  } catch (error) {
    console.error(`Error in load function for /: ${error}`);
  }
};
