export const handle = async ({ event, resolve }) => {
  // vite function to get all md files from components dir
  const componentFiles = import.meta.glob('/src/routes/components/*.md')
  const formFiles = import.meta.glob('/src/routes/forms/*.md')
  const typographyFiles = import.meta.glob('/src/routes/typography/*.md')
  const utilFiles = import.meta.glob('/src/routes/utilities/*.md')
  const pageFiles = import.meta.glob('/src/routes/pages/*.md')
  const extendFiles = import.meta.glob('/src/routes/extend/*.md')
  // returns an array of files
  const iterableComponentFiles = Object.entries(componentFiles)
  const iterableFormFiles = Object.entries(formFiles)
  const iterableTypographyFiles = Object.entries(typographyFiles)
  const iterableUtilFiles = Object.entries(utilFiles)
  const iterablePageFiles = Object.entries(pageFiles)
  const iterableExtendFiles = Object.entries(extendFiles)
  // returns an array of paths, /accordion from /src/routes/components/accordion.md
  const allComponents = await Promise.all(
    iterableComponentFiles.map(async ([path]) => {
      const filePath = path.slice(22, -3)
      return filePath
    })
  )
  // returns an array of paths, /radio from /src/routes/forms/radio.md
  const allForms = await Promise.all(
    iterableFormFiles.map(async ([path]) => {
      const filePath = path.slice(17, -3)
      return filePath
    })
  )
  // returns an array of paths, /hr from /src/routes/typography/hr.md
  const allTypographys = await Promise.all(
    iterableTypographyFiles.map(async ([path]) => {
      const filePath = path.slice(22, -3)
      return filePath
    })
  )
  // returns an array of paths, /closebutton from /src/routes/utilities/closebutton.md
  const allUtils = await Promise.all(
    iterableUtilFiles.map(async ([path]) => {
      const filePath = path.slice(21, -3)
      return filePath
    })
  )
  // returns an array of paths, /about from /src/routes/pages/about.md
  const allPages = await Promise.all(
    iterablePageFiles.map(async ([path]) => {
      const filePath = path.slice(17, -3)
      return filePath
    })
  )
  // returns an array of paths, /icons from /src/routes/extend/icons.md
  const allExtends = await Promise.all(
    iterableExtendFiles.map(async ([path]) => {
      const filePath = path.slice(18, -3)
      return filePath
    })
  )

  // check if pathname is included itn allComponents
  if (allComponents.includes(event.url.pathname)) {
    // redirect
    return Response.redirect(`${event.url.origin}/components${event.url.pathname}`, 301)
  } else if (allForms.includes(event.url.pathname)) {
    return Response.redirect(`${event.url.origin}/forms${event.url.pathname}`, 301)
  } else if (allTypographys.includes(event.url.pathname)) {
    return Response.redirect(`${event.url.origin}/typography${event.url.pathname}`, 301)
  } else if (allPages.includes(event.url.pathname)) {
    return Response.redirect(`${event.url.origin}/pages${event.url.pathname}`, 301)
  } else if (allExtends.includes(event.url.pathname)) {
    return Response.redirect(`${event.url.origin}/extend${event.url.pathname}`, 301)
  } else if (allUtils.includes(event.url.pathname)) {
    return Response.redirect(`${event.url.origin}/utilities${event.url.pathname}`, 301)
  }

  return await resolve(event);
}