const filePath = (path) => '/' + path.split('/').pop()?.split('.').shift();

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
  // vite function to get all md files from components dir
  const componentFiles = import.meta.glob('/src/routes/docs/components/*.md');
  const formFiles = import.meta.glob('/src/routes/docs/forms/*.md');
  const typographyFiles = import.meta.glob('/src/routes/docs/typography/*.md');
  const utilFiles = import.meta.glob('/src/routes/docs/utilities/*.md');
  const pageFiles = import.meta.glob('/src/routes/docs/pages/*.md');
  const extendFiles = import.meta.glob('/src/routes/docs/extend/*.md');
  const experimentalFiles = import.meta.glob('/src/routes/docs/experimental/*.md');
  // returns an array of files
  const iterableComponentFiles = Object.entries(componentFiles);
  const iterableFormFiles = Object.entries(formFiles);
  const iterableTypographyFiles = Object.entries(typographyFiles);
  const iterableUtilFiles = Object.entries(utilFiles);
  const iterablePageFiles = Object.entries(pageFiles);
  const iterableExtendFiles = Object.entries(extendFiles);
  const iterableExperimentalFiles = Object.entries(experimentalFiles);

  // returns an array of paths, /accordion from /src/routes/components/accordion.md
  const allComponents = await Promise.all(
    iterableComponentFiles.map(async ([path]) => {
      return filePath(path);
    })
  );
  // returns an array of paths, /radio from /src/routes/forms/radio.md
  const allForms = await Promise.all(
    iterableFormFiles.map(async ([path]) => {
      return filePath(path);
    })
  );
  // returns an array of paths, /hr from /src/routes/typography/hr.md
  const allTypographys = await Promise.all(
    iterableTypographyFiles.map(async ([path]) => {
      return filePath(path);
    })
  );
  // returns an array of paths, /closebutton from /src/routes/utilities/closebutton.md
  const allUtils = await Promise.all(
    iterableUtilFiles.map(async ([path]) => {
      return filePath(path);
    })
  );
  // returns an array of paths, /introduction from /src/routes/pages/introduction.md
  const allPages = await Promise.all(
    iterablePageFiles.map(async ([path]) => {
      return filePath(path);
    })
  );
  // returns an array of paths, /icons from /src/routes/extend/icons.md
  const allExtends = await Promise.all(
    iterableExtendFiles.map(async ([path]) => {
      return filePath(path);
    })
  );
  // returns an array of paths, /icons from /src/routes/extend/icons.md
  const allExperimental = await Promise.all(
    iterableExperimentalFiles.map(async ([path]) => {
      return filePath(path);
    })
  );
  // check if pathname is included itn allComponents

  // if (allComponents.includes(filePath(event.url.pathname)) && !event.url.pathname.startsWith('/docs')) {
  if (allComponents.includes(event.url.pathname)) {
    // redirect
    return Response.redirect(`${event.url.origin}/docs/components${event.url.pathname}`, 301);
  } else if (allForms.includes(event.url.pathname)) {
    return Response.redirect(`${event.url.origin}/docs/forms${event.url.pathname}`, 301);
  } else if (allTypographys.includes(event.url.pathname)) {
    return Response.redirect(`${event.url.origin}/docs/typography${event.url.pathname}`, 301);
  } else if (allPages.includes(event.url.pathname)) {
    return Response.redirect(`${event.url.origin}/docs/pages${event.url.pathname}`, 301);
  } else if (allExtends.includes(event.url.pathname)) {
    return Response.redirect(`${event.url.origin}/docs/extend${event.url.pathname}`, 301);
  } else if (allExperimental.includes(event.url.pathname)) {
    return Response.redirect(`${event.url.origin}/docs/experimental${event.url.pathname}`, 301);
  } else if (allUtils.includes(event.url.pathname)) {
    return Response.redirect(`${event.url.origin}/docs/utilities${event.url.pathname}`, 301);
  }
  // redirect
  else if (allComponents.includes(filePath(event.url.pathname)) && !event.url.pathname.startsWith('/docs')) {
    return Response.redirect(`${event.url.origin}/docs${event.url.pathname}`, 301);
  } else if (allForms.includes(filePath(event.url.pathname)) && !event.url.pathname.startsWith('/docs')) {
    return Response.redirect(`${event.url.origin}/docs${event.url.pathname}`, 301);
  } else if (
    allTypographys.includes(filePath(event.url.pathname)) &&
    !event.url.pathname.startsWith('/docs')
  ) {
    return Response.redirect(`${event.url.origin}/docs${event.url.pathname}`, 301);
  } else if (allPages.includes(filePath(event.url.pathname)) && !event.url.pathname.startsWith('/docs')) {
    return Response.redirect(`${event.url.origin}/docs${event.url.pathname}`, 301);
  } else if (allExtends.includes(filePath(event.url.pathname)) && !event.url.pathname.startsWith('/docs')) {
    return Response.redirect(`${event.url.origin}/docs${event.url.pathname}`, 301);
  } else if (
    allExperimental.includes(filePath(event.url.pathname)) &&
    !event.url.pathname.startsWith('/docs')
  ) {
    return Response.redirect(`${event.url.origin}/docs${event.url.pathname}`, 301);
  } else if (allUtils.includes(filePath(event.url.pathname)) && !event.url.pathname.startsWith('/docs')) {
    return Response.redirect(`${event.url.origin}/docs${event.url.pathname}`, 301);
  }

  return await resolve(event);
};
