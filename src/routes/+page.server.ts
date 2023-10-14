const json = (r: Response) => r.json();

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ fetch }) => {
  try {
    const today = new Date().toISOString().slice(0, 10);
    const githubAPI = 'https://api.github.com/repos/themesberg/flowbite-svelte';

    const postsPromise = fetch('/api/posts');
    const contributorsPromise = fetch(githubAPI + '/contributors?per_page=21');
    const githubPromise = fetch(githubAPI);
    const npmPromise = fetch(`https://api.npmjs.org/downloads/point/2020-01-01:${today}/flowbite-svelte`);
    const discordPromise = fetch('https://discord.com/api/v9/invites/4eeurUVvTy?with_counts=true&with_expiration=true');

    // Wait for all the promises to resolve and store the responses in an array.
    const allFetchResponce = await Promise.all([postsPromise, contributorsPromise, githubPromise, npmPromise, discordPromise]);

    // Parse the JSON content of each response and store them in separate variables.
    const [posts, contributors, github, npm, discord] = await Promise.all(
      allFetchResponce.map((res) => {
        return res.json();
      })
    );
    return { posts, contributors, github, npm, discord };
  } catch (error) {
    console.error(`Error in load function for /: ${error}`);
  }
};
