export const load = async ({ fetch }) => {
  const response = await fetch('/api/type')

  return await response.json()
}