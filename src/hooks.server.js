// list of directories that do not require redirection check
const dirsToSkip = ["/docs/", "/blocks/", "/api/"];

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
  const pathname = event.url.pathname;

  // Redirect old AI integration page to new MCP overview
  if (pathname === "/docs/pages/ai-integration") {
    return Response.redirect(`${event.url.origin}/docs/mcp/overview`, 301);
  }

  // Skip redirect logic entirely in test mode to avoid import.meta.glob issues
  const isTest = process.env.VITEST === "true" || process.env.NODE_ENV === "test";
  
  if (!isTest && pathname !== "/" && !dirsToSkip.some((x) => pathname.startsWith(x))) {
    const parts = pathname.split("/");
    const file = parts.pop();
    const dir = parts.slice(1).join("/");

    // Dynamically import redirects only when needed and not in test mode
    try {
      const { getRedirectPath } = await import("./redirects.js");
      const redirectPath = getRedirectPath(dir, file);
      
      if (redirectPath) {
        return Response.redirect(`${event.url.origin}${redirectPath}`, 301);
      }
    } catch (e) {
      // Silently fail if redirects can't be loaded (e.g., in test environment)
      console.warn("Redirects module failed to load:", e.message);
    }
  }
  
  return await resolve(event);
};
