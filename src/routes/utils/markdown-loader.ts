import { error } from "@sveltejs/kit";
import type { SvelteComponent } from "svelte";

export interface MarkdownModule {
  default: typeof SvelteComponent;
  metadata: {
    title: string;
    dir: string;
    [key: string]: any;
  };
}

/**
 * Creates a secure markdown document loader that validates slugs against a whitelist
 * and ensures proper metadata structure.
 *
 * @param filesMap - The result of import.meta.glob() containing whitelisted markdown files
 * @param kindLabel - A human-readable label for error messages (e.g., "component", "form", "MCP")
 * @returns A loader function that safely loads and validates markdown documents
 */
export function createMarkdownDocLoader(filesMap: Record<string, () => Promise<unknown>>, kindLabel: string) {
  return async (slug: string) => {
    // Construct the file path
    const filePath = `../${slug}.md`;

    // Check if the file exists in our whitelist
    if (!filesMap[filePath]) {
      throw error(404, {
        message: `${kindLabel} documentation page "${slug}" not found`
      });
    }

    // Safely import the file
    let post = (await filesMap[filePath]()) as MarkdownModule;

    // In development, HMR can cause a race condition where the module is loaded
    // before mdsvex has finished recompiling the frontmatter metadata. Retry with
    // increasing delays to let the compilation complete.
    if (import.meta.env.DEV && (!post.metadata || typeof post.metadata !== "object")) {
      console.warn(`[markdown-loader] Metadata not ready for "${slug}", retrying...`);
      for (let i = 0; i < 3; i++) {
        await new Promise((resolve) => setTimeout(resolve, 100 * (i + 1)));
        post = (await filesMap[filePath]()) as MarkdownModule;
        if (post.metadata && typeof post.metadata === "object") break;
      }
    }

    // Validate metadata exists
    if (!post.metadata || typeof post.metadata !== "object") {
      throw error(500, {
        message: `Invalid metadata for ${kindLabel} doc: ${slug}`
      });
    }

    const { title, dir } = post.metadata;
    const content = post.default;

    // Validate required fields
    if (!title || !dir) {
      throw error(500, {
        message: `Missing required metadata fields (title, dir) for: ${slug}`
      });
    }

    return {
      content,
      title,
      dir
    };
  };
}
