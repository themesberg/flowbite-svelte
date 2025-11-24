import type { PageLoad } from "./$types";
import { createMarkdownDocLoader } from "$utils/markdown-loader";

// Create a whitelist of allowed examples markdown files
const examplesFiles = import.meta.glob("../*.md");
const loadExamplesDoc = createMarkdownDocLoader(examplesFiles, "Examples");

export const load: PageLoad = async ({ params }) => {
  return loadExamplesDoc(params.slug);
};
