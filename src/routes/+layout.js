export const load = async ({ fetch }) => {
  const response = await fetch('/api');

  return await response.json()
};