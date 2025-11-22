import { error } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';

// Import all markdown and text files from static/llm directory
// This bundles them into the server build, making them available in serverless environments
const files = import.meta.glob('/static/llm/**/*.{md,txt}', {
  query: '?raw',
  import: 'default',
  eager: true
}) as Record<string, string>;

// Debug in development
if (import.meta.env.DEV) {
  console.log('Loaded LLM files:', Object.keys(files).length);
}

export async function GET({ params }: RequestEvent) {
  const parts = Array.isArray(params.slug)
    ? params.slug
    : [params.slug];

  const filePath = parts.join('/');
  
  // Prevent path traversal
  if (filePath.includes('..') || filePath.startsWith('/')) {
    throw error(400, 'Invalid file path');
  }

  // Try to find the file with .md or .txt extension
  const mdKey = `/static/llm/${filePath}.md`;
  const txtKey = `/static/llm/${filePath}.txt`;

  const content = files[mdKey] ?? files[txtKey];

  if (!content) {
    // Debug: show available files in development
    if (import.meta.env.DEV) {
      console.error('File not found:', filePath);
      console.error('Available files:', Object.keys(files).slice(0, 10));
    }
    throw error(404, `LLM file not found: ${filePath}`);
  }

  return new Response(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
    }
  });
}
