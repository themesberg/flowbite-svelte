import type { PageLoad, EntryGenerator } from "./$types";
import { createMarkdownDocLoader } from "$utils/markdown-loader";

// Create a whitelist of allowed form markdown files
const formFiles = import.meta.glob("../*.md");
const loadFormDoc = createMarkdownDocLoader(formFiles, "Form");

export const entries: EntryGenerator = () => {
  return Object.keys(formFiles).map((path) => ({
    slug: path.replace("../", "").replace(".md", "")
  }));
};

export const load: PageLoad = async ({ params }) => {
  return loadFormDoc(params.slug);
};
