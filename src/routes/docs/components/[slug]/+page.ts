import type { PageLoad, EntryGenerator } from "./$types";
import { createMarkdownDocLoader } from "$utils/markdown-loader";

// Create a whitelist of allowed component markdown files
const componentFiles = import.meta.glob("../*.md");
const loadComponentDoc = createMarkdownDocLoader(componentFiles, "Component");

export const entries: EntryGenerator = () => {
  return Object.keys(componentFiles).map((path) => ({
    slug: path.replace("../", "").replace(".md", "")
  }));
};

export const load: PageLoad = async ({ params }) => {
  return loadComponentDoc(params.slug);
};
