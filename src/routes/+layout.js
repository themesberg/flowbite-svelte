export const load = async ({ fetch }) => {
  const response = await fetch('/utils');

  return await response.json()
};