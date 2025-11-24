import type { PageLoad } from "./$types";
import { createMarkdownDocLoader } from "$utils/markdown-loader";

// Create a whitelist of allowed form markdown files
const formFiles = import.meta.glob("../*.md");
const loadFormDoc = createMarkdownDocLoader(formFiles, "Form");

export const load: PageLoad = async ({ params }) => {
  return loadFormDoc(params.slug);
};
