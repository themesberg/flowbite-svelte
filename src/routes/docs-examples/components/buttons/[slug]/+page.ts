import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";

export const load: PageLoad = async ({ params }) => {
  // Basic slug validation to prevent path traversal
  if (!/^[a-zA-Z0-9_-]+$/.test(params.slug)) {
    throw error(400, "Invalid slug");
  }
  try {
    const post = await import(`../${params.slug}.svelte`);
    const content = post.default;

    return {
      content
    };
  } catch (err) {
    console.error(`Failed to load button example "${params.slug}":`, err);
    throw error(404, `Button example "${params.slug}" not found`);
  }
};
