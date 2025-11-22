import { error } from '@sveltejs/kit';
import fs from 'fs';
import path from 'path';

export function GET({ params }) {
  const parts = Array.isArray(params.slug)
    ? params.slug
    : [params.slug];

  const filePath = parts.join('/');
  
  // Construct the full path to the static directory
  const staticDir = path.join(process.cwd(), 'static', 'llm');
  
  // Try .md first, then .txt
  const mdPath = path.join(staticDir, `${filePath}.md`);
  const txtPath = path.join(staticDir, `${filePath}.txt`);

  let content: string;

  try {
    if (fs.existsSync(mdPath)) {
      content = fs.readFileSync(mdPath, 'utf-8');
    } else if (fs.existsSync(txtPath)) {
      content = fs.readFileSync(txtPath, 'utf-8');
    } else {
      throw error(404, `LLM file not found: ${filePath}`);
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
    throw error(500, 'Error reading file');
  }
}
