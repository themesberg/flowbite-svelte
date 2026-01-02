#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Directories to exclude
const EXCLUDE_DIRS = ["node_modules", ".svelte-kit", "dist", "build", ".git", "llm", "utils"];

function searchFiles(dir, results = []) {
  if (!fs.existsSync(dir)) return results;

  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip excluded directories
      if (!file.startsWith(".") && !EXCLUDE_DIRS.includes(file)) {
        searchFiles(filePath, results);
      }
    } else if (file.endsWith(".svelte") || file.endsWith(".ts") || file.endsWith(".js") || file.endsWith(".md")) {
      const content = fs.readFileSync(filePath, "utf-8");
      if (content.includes('from "flowbite-svelte"') || content.includes("from 'flowbite-svelte'")) {
        const relativePath = path.relative(__dirname, filePath);
        const lines = content.split("\n");
        const matchingLines = [];

        lines.forEach((line, index) => {
          if (line.includes('from "flowbite-svelte"') || line.includes("from 'flowbite-svelte'")) {
            matchingLines.push({ lineNum: index + 1, line: line.trim() });
          }
        });

        results.push({ file: relativePath, matches: matchingLines });
      }
    }
  });

  return results;
}

console.log('🔍 Searching for "flowbite-svelte" imports in ENTIRE project...');
console.log("Excluding: node_modules, .svelte-kit, dist, build\n");

const results = searchFiles(__dirname);

if (results.length === 0) {
  console.log('✅ No "flowbite-svelte" imports found!');
} else {
  console.log(`❌ Found ${results.length} file(s) with "flowbite-svelte" imports:\n`);
  results.forEach(({ file, matches }) => {
    console.log(`📄 ${file}`);
    matches.forEach(({ lineNum, line }) => {
      console.log(`   Line ${lineNum}: ${line}`);
    });
    console.log("");
  });

  console.log("\n💡 To fix these, run: node convert-imports.mjs");
}
