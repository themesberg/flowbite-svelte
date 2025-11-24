import type { PageLoad } from "./$types";
import { createMarkdownDocLoader } from "$utils/markdown-loader";

// Create a whitelist of allowed plugins markdown files
const pluginsFiles = import.meta.glob("../*.md");
const loadPluginsDoc = createMarkdownDocLoader(pluginsFiles, "Plugins");

export const load: PageLoad = async ({ params }) => {
  return loadPluginsDoc(params.slug);
};
