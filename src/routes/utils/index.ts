import type Mdsvex from "*.md";

export { default as CompoDescription } from "./CompoDescription.svelte";
export { default as ExampleWrapper } from "./ExampleWrapper.svelte";
export { default as GitHubSource } from "./GitHubSource.svelte";
export { default as GitHubSourceList } from "./GitHubSourceList.svelte";
export { default as LlmLink } from "./LlmLink.svelte";
export { default as PageHeadSection } from "./PageHeadSection.svelte";
export { default as MetaTag } from "./MetaTag.svelte";
export { default as TableDefaultRow } from "./TableDefaultRow.svelte";
export { default as TableProp } from "./TableProp.svelte";
export { default as CompoAttributesViewer } from "./CompoAttributesViewer.svelte";
export { default as GitHubCompoLinks } from "./GitHubCompoLinks.svelte";
export { default as Toc } from "./Toc.svelte";
export { toKebabCase, getFilteredFileNames } from "./helpers";
export { default as Seealso } from "./Seealso.svelte";
export { createMarkdownDocLoader, type MarkdownModule } from "./markdown-loader";

// src/utils/posts.ts
type Metadata = Record<string, any>;

export type MarkdownEntry = {
  meta: Metadata;
  path: string;
};

export type PathEntry = {
  path: string;
};

// --- Path Utilities ---

export const basename = (path: string): string => path.substring(path.lastIndexOf("/") + 1).replace(/\.[^/.]+$/, "");

export const toSlug = (path: string): string => "/" + basename(path);

export const parentFolderSlug = (path: string): string => "/" + (path.split("/").at(-2) ?? "");

export const extractRouteName = (path: string): string => path.split("/").at(-2) ?? "";

export const sortByList =
  (order: string[]) =>
  ([aKey]: [string, unknown], [bKey]: [string, unknown]) => {
    const aIndex = order.indexOf(basename(aKey));
    const bIndex = order.indexOf(basename(bKey));
    if (aIndex === -1) return 1;
    if (bIndex === -1) return -1;
    return aIndex - bIndex;
  };

const resolveMarkdownFiles = async (files: Record<string, () => Promise<{ metadata: Metadata }>>): Promise<MarkdownEntry[]> => {
  const results = await Promise.all(
    Object.entries(files).map(async ([path, resolver]) => {
      try {
        const { metadata } = await resolver();
        return {
          meta: metadata,
          path: toSlug(path)
        };
      } catch (error) {
        console.error(`Failed to resolve markdown file: ${path}`, error);
        return null; // Return null for failed files
      }
    })
  );

  // Filter out failed files and return successful ones
  return results.filter((entry): entry is MarkdownEntry => entry !== null);
};

const resolvePaths = async (files: Record<string, unknown>, pathFn: (path: string) => string = toSlug): Promise<PathEntry[]> => {
  return Promise.all(
    Object.keys(files)
      .filter((path) => !path.includes("[...slug]"))
      .map(async (path) => ({ path: pathFn(path) }))
  );
};

export const fetchMarkdownPosts = async () => {
  try {
    const globs = {
      components: import.meta.glob<Mdsvex>("/src/routes/docs/components/*.md"),
      forms: import.meta.glob<Mdsvex>("/src/routes/docs/forms/*.md"),
      typography: import.meta.glob<Mdsvex>("/src/routes/docs/typography/*.md"),
      utilities: import.meta.glob<Mdsvex>("/src/routes/docs/utilities/*.md"),
      pages: import.meta.glob<Mdsvex>("/src/routes/docs/pages/*.md"),
      mcp: import.meta.glob<Mdsvex>("/src/routes/docs/mcp/*.md"),
      extend: import.meta.glob<Mdsvex>("/src/routes/docs/extend/*.md"),
      examples: import.meta.glob<Mdsvex>("/src/routes/docs/examples/*.md"),
      plugins: import.meta.glob<Mdsvex>("/src/routes/docs/plugins/*.md"),
      icons: import.meta.glob<Mdsvex>("/src/routes/icons/*.md"),
      illustrations: import.meta.glob<Mdsvex>("/src/routes/illustrations/*.md")
    };

    const pageOrder = ["introduction", "quickstart", "colors", "customization", "typescript", "compiler-speed", "how-to-contribute", "license"];

    const mcpOrder = ["overview", "local-setup", "remote-setup", "prompts"];

    const pagesResults = await Promise.all(
      Object.entries(globs.pages)
        .sort(sortByList(pageOrder))
        .map(async ([path, resolver]) => {
          try {
            const { metadata } = await resolver();
            return { meta: metadata, path: toSlug(path) };
          } catch (error) {
            console.error(`Failed to resolve page markdown file: ${path}`, error);
            return null;
          }
        })
    );
    const pages = pagesResults.filter((entry): entry is MarkdownEntry => entry !== null);

    const mcpResults = await Promise.all(
      Object.entries(globs.mcp)
        .sort(sortByList(mcpOrder))
        .map(async ([path, resolver]) => {
          try {
            const { metadata } = await resolver();
            return { meta: metadata, path: toSlug(path) };
          } catch (error) {
            console.error(`Failed to resolve MCP markdown file: ${path}`, error);
            return null;
          }
        })
    );
    const mcp = mcpResults.filter((entry): entry is MarkdownEntry => entry !== null);

    const otherSections = await Promise.all(
      Object.entries(globs)
        .filter(([key]) => key !== "pages" && key !== "mcp")
        .map(async ([key, files]) => {
          const entries = await resolveMarkdownFiles(files);
          return [key, entries] as const;
        })
    );

    return {
      pages,
      mcp,
      ...Object.fromEntries(otherSections)
    };
  } catch (error) {
    console.error("Error in fetchMarkdownPosts:", error);
    // Return empty structure for this category
    return {
      forms: [],
      components: [],
      typography: [],
      utilities: [],
      pages: [],
      mcp: [],
      extend: [],
      examples: [],
      plugins: [],
      icons: [],
      illustrations: []
    };
  }
};

export const fetchBuilders = async () => {
  const builderFiles = import.meta.glob("/src/routes/builder/**/+page.svelte");

  const allPaths = Object.keys(builderFiles)
    .map((path) => ({
      path: extractRouteName(path)
    }))
    .filter(
      (item, index, self) => item.path !== "builder" && item.path !== "layout" && item.path !== "layoutExamples" && item.path !== "utils" && self.findIndex((i) => i.path === item.path) === index
    );

  return allPaths;
};

export const fetchApiCheck = async () => {
  const globs = {
    components: import.meta.glob("/src/routes/api-check/components/*/+page.svelte")
  };

  const components = await resolvePaths(globs.components, parentFolderSlug);

  return {
    components
  };
};

export const fetchBlocksMarkdownPosts = async () => {
  try {
    const globs = {
      application: import.meta.glob<Mdsvex>("/src/routes/blocks/application/*.md"),
      quickstart: import.meta.glob<Mdsvex>("/src/routes/blocks/quickstart/*.md"),
      marketing: import.meta.glob<Mdsvex>("/src/routes/blocks/marketing/*.md"),
      publisher: import.meta.glob<Mdsvex>("/src/routes/blocks/publisher/*.md")
    };

    const entries = await Promise.all(
      Object.entries(globs).map(async ([key, files]) => {
        const resolved = await resolveMarkdownFiles(files);
        return [key, resolved] as const;
      })
    );

    return Object.fromEntries(entries);
  } catch (error) {
    console.error("Error in fetchBlocksMarkdownPosts:", error);
    return { application: [], quickstart: [], marketing: [], publisher: [] };
  }
};

export const fetchDashboardPosts = async () => {
  // Get all +page.svelte files
  const pageGlobs = import.meta.glob("/src/routes/admin-dashboard/**/+page.svelte");

  // Get authentication .svelte files (these are not +page.svelte)
  const authGlobs = import.meta.glob("/src/routes/admin-dashboard/authentication/*.svelte");

  // Extract routes from +page.svelte files
  const pageRoutes = Object.keys(pageGlobs)
    .map((path) => {
      let route = path
        .replace("/src/routes/admin-dashboard", "")
        .replace("/+page.svelte", "")
        .replace(/\/\([^)]+\)/g, "") // Remove route groups
        .replace(/^\//, "")
        .replace(/\/$/, "");

      if (route === "") {
        route = "admin-dashboard";
      } else {
        route = `admin-dashboard/${route}`;
      }
      return route;
    })
    .filter((route) => !route.includes("[") && !route.includes("]")); // Filter out dynamic routes

  // Extract routes from authentication .svelte files
  const authRoutes = Object.keys(authGlobs).map((path) => {
    const filename = path.split("/").pop()?.replace(".svelte", "") || "";
    return `admin-dashboard/authentication/${filename}`;
  });

  // Add specific error routes that we know exist
  const errorRoutes = ["admin-dashboard/errors/400", "admin-dashboard/errors/404", "admin-dashboard/errors/500"];

  // Combine all routes and remove duplicates
  const allRoutes = [...pageRoutes, ...authRoutes, ...errorRoutes].filter((route, index, self) => self.indexOf(route) === index).sort();

  return allRoutes;
};
