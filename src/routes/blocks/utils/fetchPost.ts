import type Mdsvex from '*.md';

export { default as CompoDescription } from './CompoDescription.svelte';
// export { default as DocBadge } from './DocBadge.svelte';
// export { default as DocBadgeList } from './DocBadgeList.svelte';
export { default as GitHubSource } from './GitHubSource.svelte';
export { default as GitHubSourceList } from './GitHubSourceList.svelte';
export { default as PageHeadSection } from './PageHeadSection.svelte';
export { default as MetaTag } from './MetaTag.svelte';
export { default as TableDefaultRow } from './TableDefaultRow.svelte';
export { default as TableProp } from './TableProp.svelte';
export { default as Toc } from './Toc.svelte';

const basename = (path: string) => path.split('/').pop()?.split('.').shift() ?? '';
const filePath = (path: string) => '/' + basename(path);
const fileDir = (path: string) => '/' + path.split('/').slice(0, -1).pop();
const sortByList = (order: string[]) => (a: [string, any], b: [string, any]) => [a[0], b[0]].map((x) => order.indexOf(basename(x))).reduce((x, y) => (x < 0 ? 1 : y < 0 ? -1 : x - y));

export const fetchMarkdownPosts = async () => {
  const applicationFiles = import.meta.glob<Mdsvex>('/src/routes/blocks/application/*.md');
  const exampleFiles = import.meta.glob<Mdsvex>('/src/routes/blocks/example/*.md');
  const marketingFiles = import.meta.glob<Mdsvex>('/src/routes/blocks/marketing/*.md');
  const publisherFiles = import.meta.glob<Mdsvex>('/src/routes/blocks/publisher/*.md');

  // returns an array of files
  const iterableApplicationFiles = Object.entries(applicationFiles);
  const iterableMarketingFiles = Object.entries(marketingFiles);
  const iterablePublisherFiles = Object.entries(publisherFiles);
  // const iterableExampleFiles = Object.entries(exampleFiles);

  const allApplications = await Promise.all(
    iterableApplicationFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      return {
        meta: metadata,
        path: filePath(path)
      };
    })
  );
  // returns an array of paths, /radio from /src/routes/forms/radio.md
  const allMarketings = await Promise.all(
    iterableMarketingFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      return {
        meta: metadata,
        path: filePath(path)
      };
    })
  );
  // returns an array of paths, /hr from /src/routes/typography/hr.md
  const allPublishers = await Promise.all(
    iterablePublisherFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      return {
        meta: metadata,
        path: filePath(path)
      };
    })
  );

  // const allExamples = await Promise.all(
  //   iterableExampleFiles.map(async ([path, resolver]) => {
  //     const { metadata } = await resolver();
  //     return {
  //       meta: metadata,
  //       path: filePath(path)
  //     };
  //   })
  // );

  return {
    application: allApplications,
    // example: allExamples,
    marketing: allMarketings,
    publisher: allPublishers
  };
};

export const fetchComponentData = async () => {
  const josonFiles = import.meta.glob('/src/routes/blocks/component-data/*.json');
  // const iterableJsonFiles = Object.entries(josonFiles);

  // const allJsonFiles = await Promise.all(
  //   iterableJsonFiles.map(async ([path, resolver]) => {
  //     const { metadata } = await resolver();
  //     return {
  //       meta: metadata,
  //       path: filePath(path)
  //     };
  //   })
  // );
  // console.log('josonFiles', josonFiles);

  return {
    jsonfiles: josonFiles
  };
};
