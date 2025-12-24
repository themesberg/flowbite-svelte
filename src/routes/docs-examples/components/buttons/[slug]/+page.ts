import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const load: PageLoad = async ({ params }) => {
  try {
    const post = await import(`../${params.slug}.svelte`);
    const content = post.default;

    return {
      content
    };
  } catch (_err) {
    throw error(404, `Button example "${params.slug}" not found`);
  }
};
