export const handle = async ({ event, resolve }) => {
  // vite function to get all md files from components dir
  const componentFiles = import.meta.glob('/src/routes/components/*.md')
  const formFiles = import.meta.glob('/src/routes/forms/*.md')
  const typographyFiles = import.meta.glob('/src/routes/typography/*.md')
  const utilFiles = import.meta.glob('/src/routes/utils/*.md')
  const pageFiles = import.meta.glob('/src/routes/pages/*.md')
  const extendFiles = import.meta.glob('/src/routes/extend/*.md')
  // returns an array of files
  const iterableComponentFiles = Object.entries(componentFiles)
  const iterableFormFiles = Object.entries(formFiles)
  const iterableTypographyFiles = Object.entries(typographyFiles)
  const iterableUtilFiles = Object.entries(utilFiles)
  const iterablePageFiles = Object.entries(pageFiles)
  const iterableExtendFiles = Object.entries(extendFiles)
  // returns an array of paths, /accordion etc.
  const allComponents = await Promise.all(
    iterableComponentFiles.map(async ([path]) => {
      const compoPath = path.slice(22, -3)
      return compoPath
    })
  )
  const allForms = await Promise.all(
    iterableFormFiles.map(async ([path]) => {
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