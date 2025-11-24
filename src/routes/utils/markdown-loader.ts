import { error } from "@sveltejs/kit";
import type { SvelteComponent } from 'svelte';

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
export function createMarkdownDocLoader(
  filesMap: Record<string, () => Promise<unknown>>,
  kindLabel: string
) {
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
    const post = await filesMap[filePath]() as MarkdownModule;
    
    // Validate metadata exists
    if (!post.metadata || typeof post.metadata !== 'object') {
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
