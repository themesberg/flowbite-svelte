import nav from "$lib/generated/nav.json";
import type { PageServerLoad } from "./$types";

export const prerender = true;

const json = (r: Response) => r.json();

export const load: PageServerLoad = async ({ fetch }) => {
  try {
    const githubAPI = "https://api.github.com/repos/themesberg/flowbite-svelte";

    const [github, contributors] = await Promise.all([fetch(githubAPI).then(json), fetch(githubAPI + "/contributors?per_page=21").then(json)]);

    const today = new Date().toISOString().slice(0, 10);
    const npm = await fetch(`https://api.npmjs.org/downloads/point/2020-01-01:${today}/flowbite-svelte`).then(json);
    const discord = await fetch("https://discord.com/api/v9/invites/4eeurUVvTy?with_counts=true&with_expiration=true").then(json);

    return {
      posts: nav.posts,
      builders: nav.builders,
      dashboard: nav.dashboard,
      contributors,
      github,
      npm,
      discord
    };
  } catch (error) {
    console.error(`Error in load function for /: ${error}`);
    return {
      posts: nav.posts,
      builders: nav.builders,
      dashboard: nav.dashboard,
      contributors: [],
      github: {},
      npm: {},
      discord: {}
    };
  }
};
