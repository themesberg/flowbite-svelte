export const load = async ({ fetch }) => {
  const response = await fetch('/api/posts');

  return await response.json()
};