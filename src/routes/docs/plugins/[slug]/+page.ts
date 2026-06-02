import type { PageLoad, EntryGenerator } from "./$types";
import { createMarkdownDocLoader } from "$utils/markdown-loader";

// Create a whitelist of allowed plugins markdown files
const pluginsFiles = import.meta.glob("../*.md");
const loadPluginsDoc = createMarkdownDocLoader(pluginsFiles, "Plugins");

export const entries: EntryGenerator = () => {
  return Object.keys(pluginsFiles).map((path) => ({
    slug: path.replace("../", "").replace(".md", "")
  }));
};

export const load: PageLoad = async ({ params }) => {
  return loadPluginsDoc(params.slug);
};
