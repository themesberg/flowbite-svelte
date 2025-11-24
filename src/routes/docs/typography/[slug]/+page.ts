import type { PageLoad } from "./$types";
import { createMarkdownDocLoader } from "$utils/markdown-loader";

// Create a whitelist of allowed typography markdown files
const typographyFiles = import.meta.glob("../*.md");
const loadTypographyDoc = createMarkdownDocLoader(typographyFiles, "Typography");

export const load: PageLoad = async ({ params }) => {
  return loadTypographyDoc(params.slug);
};
