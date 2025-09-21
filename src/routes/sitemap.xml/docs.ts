// /src/routes/sitemap.xml/docs.ts
import { fetchMarkdownPosts, fetchBuilders, fetchBlocksMarkdownPosts, fetchDashboardMarkdownPosts } from "../utils";

// console.log('fetchBlocksMarkdownPosts', fetchBlocksMarkdownPosts());

export async function getDocsSlugs() {
  // Fetch your markdown posts
  const posts = await fetchMarkdownPosts();
  const builders = await fetchBuilders();
  const blocks = await fetchBlocksMarkdownPosts();
  const dashboard = await fetchDashboardMarkdownPosts();

  // console.log('builders', builders);
  // console.log('blocks', blocks);
  console.log('dashboard', dashboard);
  
  const slugsByCategory: Record<string, string[]> = {};
  
  // Process each category
  Object.entries(posts).forEach(([category, items]) => {
    if (Array.isArray(items)) {
      slugsByCategory[category] = items.map(item => {
        // Remove leading slash from path
        // e.g., '/introduction' becomes 'introduction'
        return item.path.startsWith('/') ? item.path.slice(1) : item.path;
      });
    }
  });

  // Process blocks (application, quickstart, marketing, publisher)
  Object.entries(blocks).forEach(([category, items]) => {
    if (Array.isArray(items)) {
      const blocksCategoryKey = `blocks-${category}`; // e.g., 'blocks-application'
      slugsByCategory[blocksCategoryKey] = items.map(item => {
        // Remove leading slash from path
        return item.path.startsWith('/') ? item.path.slice(1) : item.path;
      });
    }
  });

  // Process builders (simple array with path property)
  if (Array.isArray(builders)) {
    slugsByCategory['builders'] = builders.map(item => item.path);
  }

  if (Array.isArray(dashboard)) {
    slugsByCategory['dashboard'] = dashboard.map(item => item.path);
  }
  
  return slugsByCategory;
}


// Individual category functions (if you prefer separate calls)
export async function getDocsPagesSlugs() {
  const posts = await fetchMarkdownPosts();
  return posts.pages?.map(item => 
    item.path.startsWith('/') ? item.path.slice(1) : item.path
  ) || [];
}
