import type { PageLoad } from "./$types";
import { error } from "@sveltejs/kit";

interface MarkdownModule {
  default: any;
  metadata: {
    title: string;
    dir: string;
    [key: string]: any;
  };
}

// Create a whitelist of allowed utilities markdown files
const utilitiesFiles = import.meta.glob("../*.md");

export const load: PageLoad = async ({ params }) => {
  const { slug } = params;
  
  // Construct the file path
  const filePath = `../${slug}.md`;
  
  // Check if the file exists in our whitelist
  if (!utilitiesFiles[filePath]) {
    throw error(404, {
      message: `Utilities documentation page "${slug}" not found`
    });
  }
  
  // Safely import the file
  const post = await utilitiesFiles[filePath]() as MarkdownModule;
  
  // Validate metadata exists
  if (!post.metadata || typeof post.metadata !== 'object') {
    throw error(500, {
      message: `Invalid metadata for utilities doc: ${slug}`
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
