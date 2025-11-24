import type { PageLoad } from "./$types";
import { createMarkdownDocLoader } from "$utils/markdown-loader";

// Create a whitelist of allowed pages markdown files
const pagesFiles = import.meta.glob("../*.md");
const loadPageDoc = createMarkdownDocLoader(pagesFiles, "Page");

export const load: PageLoad = async ({ params }) => {
  return loadPageDoc(params.slug);
};
