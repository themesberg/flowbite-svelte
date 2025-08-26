import fs from 'fs';
import path from 'path';

export function includeFiles({
    extensions =  [],
    docsDir = '',
    examplesDir = ''
}={}) {

  const docsRoot = path.resolve(docsDir);
  const exampleRoot = path.resolve(examplesDir);

  return {
    name: 'include-files',
    markup({ content, filename }) {
      if (!filename) return { code: content };

      const {dir, name, ext} = path.parse(filename);
      if(!extensions.includes(ext)) return { code: content };

      const relativeDir = path.relative(docsRoot, dir);
      // '../abc' skip files outside of docsRoot tree
      if(relativeDir[0] === '.') return { code:content };

      try {
        const processedContent = content.replace(
          /{@include\s+([^\s}]+)}/g,
          (match, filepath) => {
            try {
              // Resolve path relative to the current file
              const fullPath = path.join(exampleRoot, relativeDir, name, filepath);
              
              // Check if file exists
              if (!fs.existsSync(fullPath)) {
                console.warn(`Include file not found: ${fullPath}`);
                return `<!-- File not found: ${filepath} -->`;
              }
              
              const fileContent = fs.readFileSync(fullPath, 'utf-8');
              const extension = path.extname(filepath).slice(1);
              
              // Determine language for syntax highlighting
              const language = extension === 'svelte' ? 'svelte' : extension;
              
              return `${fileContent}\n`;
            } catch (error) {
              console.error(`Error including file ${filepath}:`, error);
              return `<!-- Error including file: ${filepath} -->`;
            }
          }
        );
        
        return { code: processedContent };
      } catch (error) {
        console.error('Error in include-files preprocessor:', error);
        return { code: content };
      }
    }
  };
}