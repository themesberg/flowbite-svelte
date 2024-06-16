const json = (r: Response) => r.json();

/** @type {import('./$types').PageServerLoad} */
export const load = async ({ fetch }) => {
  try {
    const githubAPI = 'https://api.github.com/repos/themesberg/flowbite-svelte-blocks';
    const posts = await fetch('/blocks/api').then(json);
    const github = await fetch(githubAPI).then(json);
    // const contributors = await fetch(githubAPI + '/contributors?per_page=21').then(json);
    const today = new Date().toISOString().slice(0, 10);
    const npm = await fetch(`https://api.npmjs.org/downloads/point/2020-01-01:${today}/flowbite-svelte-blocks`).then(json);
    const discord = await fetch('https://discord.com/api/v9/invites/4eeurUVvTy?with_counts=true&with_expiration=true').then(json);

    // console.log('from page.server: ', posts)
    return { posts, github, npm, discord };
  } catch (error) {
    console.error(`Error in load function for /: ${error}`);
  }
};
