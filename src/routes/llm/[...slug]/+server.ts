import { error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';
import type { RequestEvent } from '@sveltejs/kit';

export async function GET({ params }: RequestEvent) {
  const parts = Array.isArray(params.slug)
    ? params.slug
    : [params.slug];

  const filePath = parts.join('/');

  // In production, static files might be in a different location
  // Try multiple possible locations for the static directory
  const possibleStaticDirs = [
    path.join(process.cwd(), 'static', 'llm'),
    path.join(process.cwd(), 'build', 'client', 'static', 'llm'),
    path.join(process.cwd(), '.svelte-kit', 'output', 'client', 'static', 'llm'),
    path.join(process.cwd(), 'client', 'static', 'llm'),
  ];

  let staticDir: string | null = null;
  for (const dir of possibleStaticDirs) {
    if (fs.existsSync(dir)) {
      staticDir = dir;
      break;
    }
  }

  if (!staticDir) {
    console.error('Static directory not found. Tried:', possibleStaticDirs);
    throw error(500, 'Static directory not found');
  }

  const resolvedPath = path.resolve(staticDir, filePath);
  const relative = path.relative(staticDir, resolvedPath);

  // Verify the resolved path is still within staticDir
  if (relative.startsWith('..') || path.isAbsolute(relative)) {
    throw error(400, 'Invalid file path');
  }

  // Try .md first, then .txt
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
        console.error('File not found in:', { mdPath, txtPath, staticDir });
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
