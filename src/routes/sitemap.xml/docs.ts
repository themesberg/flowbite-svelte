// /src/routes/sitemap.xml/docs.ts
import nav from "$lib/generated/nav.json";

export function getDocsSlugs() {
  const slugsByCategory: Record<string, string[]> = {};

  // Process each posts section (components, forms, etc.)
  for (const [category, items] of Object.entries(nav.posts)) {
    if (Array.isArray(items)) {
      slugsByCategory[category] = items.map((item) => (item.path.startsWith("/") ? item.path.slice(1) : item.path));
    }
  }

  // Process blocks sections (application, marketing, publisher, quickstart)
  for (const [category, items] of Object.entries(nav.blocks as Record<string, { path: string }[]>)) {
    if (Array.isArray(items)) {
      const key = `blocks-${category}`; // e.g. 'blocks-application'
      slugsByCategory[key] = items.map((item) => (item.path.startsWith("/") ? item.path.slice(1) : item.path));
    }
  }

  // Builders
  slugsByCategory["builders"] = nav.builders.map((item) => item.path);

  // Dashboard routes (already full paths like "admin-dashboard/...")
  slugsByCategory["dashboard"] = nav.dashboard;

  return slugsByCategory;
}
