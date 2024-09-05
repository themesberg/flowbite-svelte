// scripts/generateFileList.ts
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function walkDir(dir: string): Promise<string[]> {
  const files = await fs.readdir(dir);
  const paths = await Promise.all(
    files.map(async (file) => {
      const filePath = path.join(dir, file);
      const stats = await fs.stat(filePath);
      if (stats.isDirectory()) {
        return walkDir(filePath);
      } else if (path.extname(filePath) === '.svelte') {
        return filePath;
      }
      return [];
    })
  );
  return paths.flat();
}

async function generateFileList() {
  const rootDir = path.resolve(__dirname, '../src/lib');
  const fileList = await walkDir(rootDir);
  
  const relativePaths = fileList.map(file => 
    path.relative(path.resolve(__dirname, '..'), file).replace(/\\/g, '/')
  );

  const output = `export const fileList = ${JSON.stringify(relativePaths, null, 2)} as const;`;

  await fs.writeFile(
    path.resolve(__dirname, '../src/generatedFileList.ts'),
    output
  );

  console.log('File list generated successfully.');
}

generateFileList().catch(console.error);