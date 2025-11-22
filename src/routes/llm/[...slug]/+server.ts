import { error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import type { RequestEvent } from '@sveltejs/kit';

export async function GET({ params }: RequestEvent) {
  const parts = Array.isArray(params.slug)
    ? params.slug
    : [params.slug];

  const filePath = parts.join('/');
  // Sanitize path to prevent directory traversal
  if (filePath.includes('..') || path.isAbsolute(filePath)) {
    throw error(400, 'Invalid file path');
  }

  // Construct the full path to the static directory
  const staticDir = path.join(process.cwd(), 'static', 'llm');
  const fullPath = path.join(staticDir, filePath);

  // Verify the resolved path is still within staticDir
  if (!fullPath.startsWith(staticDir)) {
    throw error(400, 'Invalid file path');
  }
  // Try .md first, then .txt
  const mdPath = `${fullPath}.md`;
  const txtPath = `${fullPath}.txt`;

  try {
    let content: string;
    try {
      content = await fs.promises.readFile(mdPath, 'utf-8');
    } catch {
      try {
        content = await fs.promises.readFile(txtPath, 'utf-8');
      } catch {
        throw error(404, `LLM file not found: ${filePath}`);
      }
    }

    return new Response(content, {
      headers: {
        'Content-Type': 'text/markdown; charset=utf-8'
      }
    });
  } catch (err) {
    if (err && typeof err === 'object' && 'status' in err) {
      throw err;
    }
    console.error('Error reading LLM file:', filePath, err);
    throw error(500, 'Error reading file');
  }
}
