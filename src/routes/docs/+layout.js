import navData from "$generated/nav.json";

export const prerender = true;

/** @type {import('./$types').LayoutLoad} */
export const load = () => {
  return { posts: navData };
};
