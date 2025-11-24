import { error } from "@sveltejs/kit";
import type { RequestEvent } from "@sveltejs/kit";

// Pre-load all markdown and text files at build time
// This works on both localhost and Vercel
const mdFiles = import.meta.glob("../**/*.md", {
  query: "?raw",
  import: "default",
  eager: true
}) as Record<string, string>;

const txtFiles = import.meta.glob("../**/*.txt", {
  query: "?raw",
  import: "default",
  eager: true
}) as Record<string, string>;

// Combine both file maps
const allFiles = { ...mdFiles, ...txtFiles };

// Debug in development
if (import.meta.env.DEV) {
  console.log("Loaded LLM files:", Object.keys(allFiles).length);
  console.log("Sample keys:", Object.keys(allFiles).slice(0, 5));
}

export async function GET({ params }: RequestEvent) {
  const parts = Array.isArray(params.slug) ? params.slug : [params.slug];

  const filePath = parts.join("/");

  // Prevent path traversal
  if (filePath.includes("..") || filePath.startsWith("/")) {
    throw error(400, "Invalid file path");
  }

  let content: string | undefined;

  // Check if the path already has an extension
  if (filePath.endsWith(".md") || filePath.endsWith(".txt")) {
    // Path includes extension, use it directly
    const key = `../${filePath}`;
    content = allFiles[key];
  } else {
    // Path doesn't have extension, try adding .md or .txt
    const mdKey = `../${filePath}.md`;
    const txtKey = `../${filePath}.txt`;
    content = allFiles[mdKey] ?? allFiles[txtKey];
  }

  if (!content) {
    // Debug: show available files in development
    if (import.meta.env.DEV) {
      console.error("File not found:", filePath);
      console.error("Tried keys:", {
        mdKey: `../${filePath}.md`,
        txtKey: `../${filePath}.txt`
      });
      console.error("Available files sample:", Object.keys(allFiles).slice(0, 10));
    }
    throw error(404, `LLM file not found: ${filePath}`);
  }

  return new Response(content, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600" // Cache for 1 hour
    }
  });
}
