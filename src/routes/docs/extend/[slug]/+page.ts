import type { PageLoad, EntryGenerator } from "./$types";
import { createMarkdownDocLoader } from "$utils/markdown-loader";

// Create a whitelist of allowed extend markdown files
const extendFiles = import.meta.glob("../*.md");
const loadExtendDoc = createMarkdownDocLoader(extendFiles, "Extend");

export const entries: EntryGenerator = () => {
  return Object.keys(extendFiles).map((path) => ({
    slug: path.replace("../", "").replace(".md", "")
  }));
};

export const load: PageLoad = async ({ params }) => {
  return loadExtendDoc(params.slug);
};
