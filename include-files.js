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
        const deps = new Set();
        const processedContent = content.replace(
          /{@include\s+([^\s}]+)}/g,
          (match, filepath) => {
            try {
              // Resolve path relative to the examples tree and enforce containment
              if (path.isAbsolute(filepath)) {
                console.warn(`Absolute include paths are not allowed: ${filepath}`);
                return `<!-- Absolute include paths are not allowed: ${filepath} -->`;
              }
              const fullPath = path.resolve(exampleRoot, relativeDir, name, filepath);
              const isInside = path.relative(exampleRoot, fullPath);
              if (isInside.startsWith('..') || path.isAbsolute(isInside)) {
                console.warn(`Include path escapes examplesDir: ${fullPath}`);
                return `<!-- Include path escapes examplesDir: ${filepath} -->`;
              }

              // Check if file exists
              if (!fs.existsSync(fullPath)) {
                console.warn(`Include file not found: ${fullPath}`);
                return `<!-- File not found: ${filepath} -->`;
               }

              const fileContent = fs.readFileSync(fullPath, 'utf-8');
              deps.add(fullPath);            
              
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