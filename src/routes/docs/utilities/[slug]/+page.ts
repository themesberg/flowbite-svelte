import type { PageLoad } from "./$types";
import { createMarkdownDocLoader } from "$utils/markdown-loader";

// Create a whitelist of allowed utilities markdown files
const utilitiesFiles = import.meta.glob("../*.md");
const loadUtilitiesDoc = createMarkdownDocLoader(utilitiesFiles, "Utilities");

export const load: PageLoad = async ({ params }) => {
  return loadUtilitiesDoc(params.slug);
};
