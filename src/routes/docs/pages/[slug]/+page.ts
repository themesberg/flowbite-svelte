import type { PageLoad, EntryGenerator } from "./$types";
import { createMarkdownDocLoader } from "$utils/markdown-loader";

// Create a whitelist of allowed pages markdown files
const pagesFiles = import.meta.glob("../*.md");
const loadPageDoc = createMarkdownDocLoader(pagesFiles, "Page");

export const entries: EntryGenerator = () => {
  return Object.keys(pagesFiles).map((path) => ({
    slug: path.replace("../", "").replace(".md", "")
  }));
};

export const load: PageLoad = async ({ params }) => {
  return loadPageDoc(params.slug);
};
