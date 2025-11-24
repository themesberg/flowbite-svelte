import type { PageLoad } from "./$types";
import { createMarkdownDocLoader } from "$utils/markdown-loader";

// Create a whitelist of allowed component markdown files
const componentFiles = import.meta.glob("../*.md");
const loadComponentDoc = createMarkdownDocLoader(componentFiles, "Component");

export const load: PageLoad = async ({ params }) => {
  return loadComponentDoc(params.slug);
};
