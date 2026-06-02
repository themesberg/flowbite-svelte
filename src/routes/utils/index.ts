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

const resolvePaths = async (files: Record<string, unknown>, pathFn: (path: string) => string = toSlug): Promise<PathEntry[]> => {
  return Promise.all(
    Object.keys(files)
      .filter((path) => !path.includes("[...slug]"))
      .map(async (path) => ({ path: pathFn(path) }))
  );
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
