/** @type {import('./$types').LayoutServerLoad} \*/
export async function load ({ fetch }) {
  try {
    const response = await fetch('/blocks/api');
    
    return {
      posts: await response.json(),
    };
  } catch (error) {
    console.error(`Error in load function for /: ${error}`);
  }
}