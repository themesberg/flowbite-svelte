// /src/routes/sitemap.xml/docs.ts
import { fetchMarkdownPosts, fetchBuilders, fetchBlocksMarkdownPosts, fetchDashboardPosts } from "../utils";

export async function getDocsSlugs() {
  // Fetch your markdown posts
  const posts = await fetchMarkdownPosts();
  const builders = await fetchBuilders();
  const blocks = await fetchBlocksMarkdownPosts();
  const dashboard = await fetchDashboardPosts();

  console.log("dashboard", dashboard);

  const slugsByCategory: Record<string, string[]> = {};

  // Process each category
  Object.entries(posts).forEach(([category, items]) => {
    if (Array.isArray(items)) {
      slugsByCategory[category] = items.map((item) => {
        // Remove leading slash from path
        // e.g., '/introduction' becomes 'introduction'
        return item.path.startsWith("/") ? item.path.slice(1) : item.path;
      });
    }
  });

  // Process blocks (application, quickstart, marketing, publisher)
  Object.entries(blocks).forEach(([category, items]) => {
    if (Array.isArray(items)) {
      const blocksCategoryKey = `blocks-${category}`; // e.g., 'blocks-application'
      slugsByCategory[blocksCategoryKey] = items.map((item) => {
        // Remove leading slash from path
        return item.path.startsWith("/") ? item.path.slice(1) : item.path;
      });
    }
  });

  // Process builders (simple array with path property)
  if (Array.isArray(builders)) {
    slugsByCategory["builders"] = builders.map((item) => item.path);
  }

  if (Array.isArray(dashboard)) {
    slugsByCategory["dashboard"] = dashboard;
  }

  return slugsByCategory;
}
