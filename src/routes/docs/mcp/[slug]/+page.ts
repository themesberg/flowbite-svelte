import type { PageLoad, EntryGenerator } from "./$types";
import { createMarkdownDocLoader } from "$utils/markdown-loader";

// Create a whitelist of allowed MCP markdown files
const mcpFiles = import.meta.glob("../*.md");
const loadMcpDoc = createMarkdownDocLoader(mcpFiles, "MCP");

export const entries: EntryGenerator = () => {
  return Object.keys(mcpFiles).map((path) => ({
    slug: path.replace("../", "").replace(".md", "")
  }));
};

export const load: PageLoad = async ({ params }) => {
  return loadMcpDoc(params.slug);
};
