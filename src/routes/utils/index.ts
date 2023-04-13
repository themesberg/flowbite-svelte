export { default as CompoDescription } from './CompoDescription.svelte';
export { default as DocBadge } from './DocBadge.svelte';
export { default as DocBadgeList } from './DocBadgeList.svelte';
export { default as ExampleDiv } from './ExampleDiv.svelte';
export { default as GitHubSource } from './GitHubSource.svelte';
export { default as GitHubSourceList } from './GitHubSourceList.svelte';
export { default as PageHeadSection } from './PageHeadSection.svelte';
export { default as MetaTag } from './MetaTag.svelte';
export { default as TableDefaultRow } from './TableDefaultRow.svelte';
export { default as TableProp } from './TableProp.svelte';

const filePath = (path: string) => '/' + path.split('/').pop()?.split('.').shift();
const fileDir = (path: string) => '/' + path.split('/').slice(0, -1).pop();

export const fetchMarkdownPosts = async () => {
  const componentFiles = import.meta.glob('/src/routes/components/*.md');
  const formFiles = import.meta.glob('/src/routes/forms/*.md');
  const typographyFiles = import.meta.glob('/src/routes/typography/*.md');
  const utilFiles = import.meta.glob('/src/routes/utilities/*.md');
  const pageFiles = import.meta.glob('/src/routes/pages/*.md');
  const extendFiles = import.meta.glob('/src/routes/extend/*.md');
  const exampleFiles = import.meta.glob('/src/routes/examples/*/*.svelte');
  const experimentalFiles = import.meta.glob('/src/routes/experimental/*.md');
  // returns an array of files
  const iterableComponentFiles = Object.entries(componentFiles);
  const iterableFormFiles = Object.entries(formFiles);
  const iterableTypographyFiles = Object.entries(typographyFiles);
  const iterableUtilFiles = Object.entries(utilFiles);
  const iterablePageFiles = Object.entries(pageFiles);
  const iterableExtendFiles = Object.entries(extendFiles);
  const iterableExampleFiles = Object.entries(exampleFiles);
  const iterableExperimentalFiles = Object.entries(experimentalFiles);

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
  // returns an array of paths, /about from /src/routes/pages/about.md
  const allPages = await Promise.all(
    iterablePageFiles.map(async ([path, resolver]) => {
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
        path: fileDir(path)
      };
    })
  );

  // Experimental pages
  const allExperimental = await Promise.all(
    iterableExperimentalFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      return {
        meta: metadata,
        path: filePath(path)
      };
    })
  );

  return {
    pages: allPages,
    components: allComponents,
    forms: allForms,
    typography: allTypographys,
    examples: allExamples,
    extend: allExtends,
    utilities: allUtils,
    experimental: allExperimental
  };
};
