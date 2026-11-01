import type { LayoutLoad } from "./$types";
import nav from "$generated/nav.json";

export const prerender = true;

export const load: LayoutLoad = async () => {
  return {
    posts: {
      posts: nav.posts,
      builders: nav.builders
    }
  };
};
