/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch }) => {
  try {
    const response = await fetch('/api/posts');

    return await response.json();
  } catch (error) {
    console.error(`Error in load function for /: ${error}`);
  }
};
