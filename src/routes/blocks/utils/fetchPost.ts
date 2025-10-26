import type Mdsvex from "*.md";

export { default as CompoDescription } from "./CompoDescription.svelte";
export { default as GitHubSource } from "./GitHubSource.svelte";
export { default as GitHubSourceList } from "./GitHubSourceList.svelte";
export { default as PageHeadSection } from "./PageHeadSection.svelte";
export { default as MetaTag } from "./MetaTag.svelte";
export { default as TableDefaultRow } from "./TableDefaultRow.svelte";
export { default as TableProp } from "./TableProp.svelte";
export { default as Toc } from "./Toc.svelte";

const basename = (path: string) => path.split("/").pop()?.split(".").shift() ?? "";
const filePath = (path: string) => "/" + basename(path);

export const fetchMarkdownPosts = async () => {
  const applicationFiles = import.meta.glob<Mdsvex>("/src/routes/application/*.md");
  const marketingFiles = import.meta.glob<Mdsvex>("/src/routes/marketing/*.md");
  const publisherFiles = import.meta.glob<Mdsvex>("/src/routes/publisher/*.md");

  // returns an array of files
  const iterableApplicationFiles = Object.entries(applicationFiles);
  const iterableMarketingFiles = Object.entries(marketingFiles);
  const iterablePublisherFiles = Object.entries(publisherFiles);

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

  return {
    application: allApplications,
    marketing: allMarketings,
    publisher: allPublishers
  };
};

export const fetchComponentData = async () => {
  const josonFiles = import.meta.glob("/src/routes/component-data/*.json");
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
