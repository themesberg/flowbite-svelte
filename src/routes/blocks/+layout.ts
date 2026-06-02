import type { LayoutLoad } from "./$types";
import nav from "$lib/generated/nav.json";

export const prerender = true;

export const load: LayoutLoad = async ({ parent }) => {
  const parentData = await parent();

  return {
    ...parentData,
    blocks: nav.blocks
  };
};
