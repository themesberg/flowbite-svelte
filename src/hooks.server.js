// vite function to get all md files from components dir
const allFiles = [
  import.meta.glob('/src/routes/docs/components/*.md'),
  import.meta.glob('/src/routes/docs/forms/*.md'),
  import.meta.glob('/src/routes/docs/typography/*.md'),
  import.meta.glob('/src/routes/docs/examples/*.md'),
  import.meta.glob('/src/routes/docs/utilities/*.md'),
  import.meta.glob('/src/routes/docs/pages/*.md'),
  import.meta.glob('/src/routes/docs/extend/*.md'),
  import.meta.glob('/src/routes/docs/experimental/*.md')
]
  .flatMap(Object.keys)
  .map((x) => x.replace(/\.[^/.]+$/, ''))
  .map((x) => x.split('/').slice(-2));

// list of directories that do not require redirection check
const dirsToSkip = ['/docs/', '/blocks/', '/api/'];

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
  const pathname = event.url.pathname;

  if (pathname !== '/' && !dirsToSkip.some((x) => pathname.startsWith(x))) {
    const parts = pathname.split('/'),
      file = parts.pop(),
      dir = parts.slice(1).join('/');

    // needs to check redirections
    for (const [key, value] of allFiles) {
      if (value !== file) continue;

      if (dir === '' || dir === key)
        return Response.redirect(`${event.url.origin}/docs/${key}/${value}`, 301);
    }
  }
  return await resolve(event);
};
