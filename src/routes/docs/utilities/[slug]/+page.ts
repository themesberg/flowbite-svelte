import type { PageLoad, EntryGenerator } from "./$types";
import { createMarkdownDocLoader } from "$utils/markdown-loader";

// Create a whitelist of allowed utilities markdown files
const utilitiesFiles = import.meta.glob("../*.md");
const loadUtilitiesDoc = createMarkdownDocLoader(utilitiesFiles, "Utilities");

export const entries: EntryGenerator = () => {
  return Object.keys(utilitiesFiles).map((path) => ({
    slug: path.replace("../", "").replace(".md", "")
  }));
};

export const load: PageLoad = async ({ params }) => {
  return loadUtilitiesDoc(params.slug);
};
