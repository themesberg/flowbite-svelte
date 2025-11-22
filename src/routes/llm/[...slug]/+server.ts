import { error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import type { RequestEvent } from '@sveltejs/kit';

export async function GET({ params }: RequestEvent) {
  const parts = Array.isArray(params.slug)
    ? params.slug
    : [params.slug];

  const staticDir = path.join(process.cwd(), 'static', 'llm');
  const filePath = parts.join('/');

  const resolvedPath = path.resolve(staticDir, filePath);
  const relative = path.relative(staticDir, resolvedPath);

  // Verify the resolved path is still within staticDir
  if (relative.startsWith('..') || path.isAbsolute(relative)) {
    throw error(400, 'Invalid file path');
  }

  const mdPath = `${resolvedPath}.md`;
  const txtPath = `${resolvedPath}.txt`;

  try {
    let content: string;
    try {
      content = await fs.promises.readFile(mdPath, 'utf-8');
    } catch (err: any) {
      if (err?.code !== 'ENOENT') throw err;
      try {
        content = await fs.promises.readFile(txtPath, 'utf-8');
      } catch (err2: any) {
        if (err2?.code !== 'ENOENT') throw err2;
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
