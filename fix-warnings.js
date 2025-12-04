#!/usr/bin/env node

import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

function getAllSvelteFiles(dir, fileList = []) {
  const files = readdirSync(dir);
  
  files.forEach(file => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllSvelteFiles(filePath, fileList);
    } else if (file.endsWith('.svelte')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

function fixFile(filePath) {
  let content = readFileSync(filePath, 'utf8');
  
  // Pattern to match warnThemeDeprecation calls at the top level
  // This regex looks for the call that's NOT already inside $effect
  const pattern = /^(\s+)warnThemeDeprecation\(\n((?:.*\n)*?\s+)\);$/gm;
  
  let modified = false;
  content = content.replace(pattern, (match, indent, body) => {
    // Check if it's already inside an $effect
    const beforeMatch = content.substring(0, content.indexOf(match));
    const lastEffect = beforeMatch.lastIndexOf('$effect(');
    const lastEffectEnd = beforeMatch.lastIndexOf('});');
    
    // If there's a recent $effect that hasn't closed, skip
    if (lastEffect > lastEffectEnd && lastEffect > beforeMatch.length - 200) {
      return match;
    }
    
    modified = true;
    return `${indent}$effect(() => {\n${indent}  warnThemeDeprecation(\n${body});\n${indent}});`;
  });
  
  if (modified) {
    writeFileSync(filePath, content, 'utf8');
    console.log(`✓ Fixed: ${filePath}`);
    return true;
  }
  
  return false;
}

const srcDir = './src/lib';
const files = getAllSvelteFiles(srcDir);

console.log(`Found ${files.length} .svelte files`);
console.log('Fixing warnThemeDeprecation calls...\n');

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`\n✅ Fixed ${fixedCount} files`);
