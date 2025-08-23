import type Mdsvex from "*.md";

export { default as CompoDescription } from "./CompoDescription.svelte";
export { default as ExampleWrapper } from "./ExampleWrapper.svelte";
export { default as GitHubSource } from "./GitHubSource.svelte";
export { default as GitHubSourceList } from "./GitHubSourceList.svelte";
export { default as PageHeadSection } from "./PageHeadSection.svelte";
export { default as MetaTag } from "./MetaTag.svelte";
export { default as TableDefaultRow } from "./TableDefaultRow.svelte";
export { default as TableProp } from "./TableProp.svelte";
export { default as CompoAttributesViewer } from "./CompoAttributesViewer.svelte";
export { default as GitHubCompoLinks } from "./GitHubCompoLinks.svelte";
export { default as Toc } from "./Toc.svelte";
export { toKebabCase, getFilteredFileNames } from "./helpers";
export { default as Seealso } from "./Seealso.svelte";

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
  return Promise.all(
    Object.entries(files).map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      return {
        meta: metadata,
        path: toSlug(path)
      };
    })
  );
};

const resolvePaths = async (files: Record<string, unknown>, pathFn: (path: string) => string = toSlug): Promise<PathEntry[]> => {
  return Promise.all(
    Object.keys(files)
      .filter((path) => !path.includes("[...slug]"))
      .map(async (path) => ({ path: pathFn(path) }))
  );
};

export const fetchMarkdownPosts = async () => {
  const globs = {
    components: import.meta.glob<Mdsvex>("/src/routes/docs/components/*.md"),
    forms: import.meta.glob<Mdsvex>("/src/routes/docs/forms/*.md"),
    typography: import.meta.glob<Mdsvex>("/src/routes/docs/typography/*.md"),
    utilities: import.meta.glob<Mdsvex>("/src/routes/docs/utilities/*.md"),
    pages: import.meta.glob<Mdsvex>("/src/routes/docs/pages/*.md"),
    extend: import.meta.glob<Mdsvex>("/src/routes/docs/extend/*.md"),
    examples: import.meta.glob<Mdsvex>("/src/routes/docs/examples/*.md"),
    plugins: import.meta.glob<Mdsvex>("/src/routes/docs/plugins/*.md"),
    icons: import.meta.glob<Mdsvex>("/src/routes/icons/*.md"),
    illustrations: import.meta.glob<Mdsvex>("/src/routes/illustrations/*.md")
  };

  const pageOrder = ["introduction", "quickstart", "colors", "customization", "typescript", "compiler-speed", "how-to-contribute", "license"];

  const pages = await Promise.all(
    Object.entries(globs.pages)
      .sort(sortByList(pageOrder))
      .map(async ([path, resolver]) => {
        const { metadata } = await resolver();
        return { meta: metadata, path: toSlug(path) };
      })
  );

  const otherSections = await Promise.all(
    Object.entries(globs)
      .filter(([key]) => key !== "pages")
      .map(async ([key, files]) => {
        const entries = await resolveMarkdownFiles(files);
        return [key, entries] as const;
      })
  );

  return {
    pages,
    ...Object.fromEntries(otherSections)
  };
};

export const fetchBuilders = async () => {
  const builderFiles = import.meta.glob("/src/routes/builder/**/+page.svelte");

  const allPaths = Object.keys(builderFiles)
    .map((path) => ({
      path: extractRouteName(path)
    }))
    .filter((item, index, self) => item.path !== "builder" && item.path !== "layout" && item.path !== "layoutExamples" && item.path !== "utils" && self.findIndex((i) => i.path === item.path) === index);

  return allPaths;
};

export const fetchApiCheck = async () => {
  const globs = {
    components: import.meta.glob("/src/routes/api-check/components/*/+page.svelte"),
    forms: import.meta.glob("/src/routes/api-check/forms/*/+page.svelte"),
    typography: import.meta.glob("/src/routes/api-check/typography/*/+page.svelte"),
    extend: import.meta.glob("/src/routes/api-check/extend/*/+page.svelte"),
    pages: import.meta.glob("/src/routes/api-check/pages/*/+page.svelte")
  };

  const components = await resolvePaths(globs.components, parentFolderSlug);
  const forms = await resolvePaths(globs.forms, parentFolderSlug);
  const typography = await resolvePaths(globs.typography, parentFolderSlug);
  const extend = await resolvePaths(globs.extend, parentFolderSlug);
  const pages = await resolvePaths(globs.pages, parentFolderSlug);

  return {
    components,
    forms,
    typography,
    extend,
    pages
  };
};

export const fetchBlocksMarkdownPosts = async () => {
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
};
