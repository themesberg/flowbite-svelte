export const handle = async ({ event, resolve }) => {
  // vite function to get all md files from components dir
  const allPostFiles = import.meta.glob('/src/routes/components/*.md')
  // returns an array of files
  const iterablePostFiles = Object.entries(allPostFiles)
  // returns an array of paths, /accordion etc.
  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path]) => {
      const postPath = path.slice(22, -3)
      return postPath
    })
  )
  // check if pathname is included itn allPosts
  if (allPosts.includes(event.url.pathname)) {
    // redirect
    return Response.redirect(`${event.url.origin}/components${event.url.pathname}`, 301)
  }

  return await resolve(event);
}