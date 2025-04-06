
// src/routes/builder/[slug]/+page.js
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  try {
    // Correct path to import components from the builder directory
    const post = await import(`../../builder/${params.slug}.svelte`);
    const content = post.default;

    return {
      content,
      slug: params.slug
    };
  } catch (error) {
    console.error(`Error loading component: ${error.message}`);
    // Return a fallback or throw error for proper error handling
    throw error;
  }
}