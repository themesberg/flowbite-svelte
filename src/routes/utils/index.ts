import type Mdsvex from "*.md";

export { default as CompoDescription } from "./CompoDescription.svelte";
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
export { default as Seealso } from './Seealso.svelte'

const basename = (path: string) => path.split("/").pop()?.split(".").shift() ?? "";
const filePath = (path: string) => "/" + basename(path);
/**
 * Extracts the route name from a SvelteKit file path
 * @param {string} path - The file path (e.g. '/src/routes/builder/video/+page.svelte')
 * @returns {string} - The extracted route name (e.g. 'video')
 */
const extractRouteName = (path: string): string => {
  // Split the path by '/'
  const parts = path.split("/");

  // Find the index of the part containing '+page.svelte'
  const pageIndex = parts.findIndex((part) => part.includes("+page.svelte"));

  // Return the part before '+page.svelte', or empty string if not found
  return pageIndex > 0 ? parts[pageIndex - 1] : "";
};

// Example usage:
// extractRouteName('/src/routes/builder/video/+page.svelte') => 'video'
// extractRouteName('/src/routes/builder/form/+page.svelte') => 'form'

/* eslint-disable  @typescript-eslint/no-explicit-any */
const sortByList = (order: string[]) => (a: [string, any], b: [string, any]) => [a[0], b[0]].map((x) => order.indexOf(basename(x))).reduce((x, y) => (x < 0 ? 1 : y < 0 ? -1 : x - y));

export const fetchMarkdownPosts = async () => {
  const componentFiles = import.meta.glob<Mdsvex>("/src/routes/docs/components/*.md");
  const formFiles = import.meta.glob<Mdsvex>("/src/routes/docs/forms/*.md");
  const typographyFiles = import.meta.glob<Mdsvex>("/src/routes/docs/typography/*.md");
  const utilFiles = import.meta.glob<Mdsvex>("/src/routes/docs/utilities/*.md");
  const pageFiles = import.meta.glob<Mdsvex>("/src/routes/docs/pages/*.md");
  const extendFiles = import.meta.glob<Mdsvex>("/src/routes/docs/extend/*.md");
  const exampleFiles = import.meta.glob<Mdsvex>("/src/routes/docs/examples/*.md");
  // const experimentalFiles = import.meta.glob<Mdsvex>('/src/routes/docs/experimental/*.md');
  const pluginsFiles = import.meta.glob<Mdsvex>("/src/routes/docs/plugins/*.md");
  const iconFiles = import.meta.glob<Mdsvex>("/src/routes/icons/*.md");
  // returns an array of files
  const iterableComponentFiles = Object.entries(componentFiles);
  const iterableFormFiles = Object.entries(formFiles);
  const iterableTypographyFiles = Object.entries(typographyFiles);
  const iterableUtilFiles = Object.entries(utilFiles);
  const iterablePageFiles = Object.entries(pageFiles);
  const iterableExtendFiles = Object.entries(extendFiles);
  const iterableExampleFiles = Object.entries(exampleFiles);
  // const iterableExperimentalFiles = Object.entries(experimentalFiles);
  const iterablePluginsFiles = Object.entries(pluginsFiles);
  const iterableIconFiles = Object.entries(iconFiles);

  const allComponents = await Promise.all(
    iterableComponentFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      return {
        meta: metadata,
        path: filePath(path)
      };
    })
  );

  // returns an array of paths, /radio from /src/routes/forms/radio.md
  const allForms = await Promise.all(
    iterableFormFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      return {
        meta: metadata,
        path: filePath(path)
      };
    })
  );
  // returns an array of paths, /hr from /src/routes/typography/hr.md
  const allTypographys = await Promise.all(
    iterableTypographyFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      return {
        meta: metadata,
        path: filePath(path)
      };
    })
  );

  // returns an array of paths, /closebutton from /src/routes/utilities/closebutton.md
  const allUtils = await Promise.all(
    iterableUtilFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      return {
        meta: metadata,
        path: filePath(path)
      };
    })
  );

  const allPlugins = await Promise.all(
    iterablePluginsFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      return {
        meta: metadata,
        path: filePath(path)
      };
    })
  );

  const allIcons = await Promise.all(
    iterableIconFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      return {
        meta: metadata,
        path: filePath(path)
      };
    })
  );

  // returns an array of paths, /introduction from /src/routes/pages/introduction.md
  const pageOrder: string[] = ["introduction", "quickstart", "colors", "customization", "typescript", "compiler-speed", "how-to-contribute", "license"];
  const allPages = await Promise.all(
    iterablePageFiles.sort(sortByList(pageOrder)).map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      return {
        meta: metadata,
        path: filePath(path)
      };
    })
  );
  // returns an array of paths, /icons from /src/routes/extend/icons.md
  const allExtends = await Promise.all(
    iterableExtendFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      return {
        meta: metadata,
        path: filePath(path)
      };
    })
  );

  // Example pages
  const allExamples = await Promise.all(
    iterableExampleFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      return {
        meta: metadata,
        path: filePath(path)
      };
    })
  );

  const builders = await fetchBuilders();

  return {
    pages: allPages,
    components: allComponents,
    forms: allForms,
    typography: allTypographys,
    builders,
    icons: allIcons,
    examples: allExamples,
    extend: allExtends,
    utilities: allUtils,
    plugins: allPlugins
    // experimental: allExperimental
  };
};

export const fetchBuilders = async () => {
  const builderFiles = import.meta.glob("/src/routes/builder/**/*.svelte");

  const iterableBuilderFiles = Object.entries(builderFiles);
  const allBuilders = await Promise.all(
    iterableBuilderFiles.map(async ([path, _]) => {
      return {
        path: extractRouteName(path)
      };
    })
  );
  return allBuilders;
};

export const fetchApiCheck = async () => {
  const apicheckComponents = import.meta.glob("/src/routes/api-check/components/*.svelte");
  const apicheckForm = import.meta.glob("/src/routes/api-check/forms/*.svelte");
  const apicheckTypography = import.meta.glob("/src/routes/api-check/typography/*.svelte");

  const iterableApiComponents = Object.entries(apicheckComponents);
  const componentsApicheck = await Promise.all(
    iterableApiComponents.map(async ([path, _]) => {
      return {
        path: filePath(path)
      };
    })
  );

  const iterableApiForm = Object.entries(apicheckForm);
  const formApicheck = await Promise.all(
    iterableApiForm.map(async ([path, _]) => {
      return {
        path: filePath(path)
      };
    })
  );

  const iterableApiTypofraphy = Object.entries(apicheckTypography);
  const typographyApicheck = await Promise.all(
    iterableApiTypofraphy.map(async ([path, _]) => {
      return {
        path: filePath(path)
      };
    })
  );
  return {
    components: componentsApicheck,
    forms: formApicheck,
    typography: typographyApicheck
  };
};
