export const load = async ({ fetch }) => {
  try {
    const response = await fetch('/api/type')

    return await response.json()
  } catch (error) {
    console.error(`Error in load function for /: ${error}`);
  }
}