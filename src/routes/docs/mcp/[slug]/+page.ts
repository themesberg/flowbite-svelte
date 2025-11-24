import type { PageLoad } from "./$types";
import { createMarkdownDocLoader } from "$utils/markdown-loader";

// Create a whitelist of allowed MCP markdown files
const mcpFiles = import.meta.glob("../*.md");
const loadMcpDoc = createMarkdownDocLoader(mcpFiles, "MCP");

export const load: PageLoad = async ({ params }) => {
  return loadMcpDoc(params.slug);
};
