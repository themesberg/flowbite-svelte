#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files that should NOT be converted (they handle the transformation logic)
const EXCLUDE_FILES = ["include-files.js", "convert-imports.mjs", "find-imports.mjs", "helpers.ts"];

// Directories to exclude
const EXCLUDE_DIRS = [".svelte-kit", "node_modules", "dist", "build", ".git", "llm", "utils"];

/**
 * Check if a file should be excluded
 */
function shouldExcludeFile(filePath) {
  const relativePath = path.relative(__dirname, filePath);
  return EXCLUDE_FILES.some((excluded) => relativePath.includes(excluded));
}

/**
 * Recursively find all .svelte, .ts, .js, .md files
 */
function findFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) {
    return fileList;
  }

  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip excluded directories
      if (!file.startsWith(".") && !EXCLUDE_DIRS.includes(file)) {
        findFiles(filePath, fileList);
      }
    } else if (file.endsWith(".svelte") || file.endsWith(".ts") || file.endsWith(".js") || file.endsWith(".md")) {
      // Skip test files, spec files, and excluded files
      if (!file.includes(".test.") && !file.includes(".spec.") && !shouldExcludeFile(filePath)) {
        fileList.push(filePath);
      }
    }
  });

  return fileList;
}

/**
 * Convert flowbite-svelte imports to $lib
 * Special handling for helpers.ts to preserve the transformation function
 */
function convertImports(content, filePath) {
  const fileName = path.basename(filePath);

  // Special handling for helpers.ts - only convert the actual imports, not the string replacements
  if (fileName === "helpers.ts" && filePath.includes("src/routes/utils/helpers.ts")) {
    // Don't convert lines that are part of the replaceLibImport function
    // These lines contain strings like: .replace(/from ["']\$lib["']/g, "from 'flowbite-svelte'")
    // We want to preserve those
    return content;
  }

  // Don't convert if the file contains transformation logic in include-files.js
  if (filePath.includes("include-files.js")) {
    return content;
  }

  let converted = content.replace(/from\s+["']flowbite-svelte["']/g, 'from "$lib"');

  converted = converted.replace(/import\s*\(\s*["']flowbite-svelte["']\s*\)/g, 'import("$lib")');

  return converted;
}

/**
 * Main function
 */
function main() {
  const srcDir = path.join(__dirname, "src");

  if (!fs.existsSync(srcDir)) {
    console.error(`Error: src directory not found`);
    process.exit(1);
  }

  console.log('Converting all "flowbite-svelte" imports to "$lib"...');
  console.log("Excluding: llm, node_modules, .svelte-kit, dist, build");
  console.log("\nPreserving transformation logic in:");
  console.log("  - src/routes/utils/helpers.ts");
  console.log("  - include-files.js");
  console.log("");

  const allFiles = findFiles(srcDir);

  console.log(`Found ${allFiles.length} files to check\n`);

  let convertedCount = 0;
  let unchangedCount = 0;
  let skippedCount = 0;
  const convertedFiles = [];
  const skippedFiles = [];

  allFiles.forEach((filePath) => {
    try {
      const content = fs.readFileSync(filePath, "utf-8");
      const converted = convertImports(content, filePath);

      if (content !== converted) {
        const fileName = path.basename(filePath);
        const relativePath = path.relative(process.cwd(), filePath);

        // Check if it's a transformation utility file that should be skipped
        if (fileName === "helpers.ts" && filePath.includes("src/routes/utils/helpers.ts")) {
          console.log(`⊘ Skipped (transformation utility): ${relativePath}`);
          skippedFiles.push(relativePath);
          skippedCount++;
        } else {
          fs.writeFileSync(filePath, converted, "utf-8");
          console.log(`✓ Converted: ${relativePath}`);
          convertedFiles.push(relativePath);
          convertedCount++;
        }
      } else {
        unchangedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  });

  console.log("\n=== Summary ===");
  console.log(`✓ Converted: ${convertedCount} files`);
  console.log(`⊘ Skipped: ${skippedCount} files (transformation utilities)`);
  console.log(`- Unchanged: ${unchangedCount} files`);
  console.log(`Total: ${allFiles.length} files`);

  if (convertedCount > 0) {
    console.log('\n✅ Done! All imports have been converted from "flowbite-svelte" to "$lib"');
    console.log("\nNote: Markdown setup sections were converted because mdsvexamples executes them.");
    console.log('The displayed code will still show "flowbite-svelte" via the transformation in include-files.js');
  } else {
    console.log('\n✅ All files already use "$lib" imports!');
  }

  if (skippedCount > 0) {
    console.log("\nSkipped files (contain transformation logic):");
    skippedFiles.forEach((file) => {
      console.log(`  - ${file}`);
    });
  }

  console.log("\n📝 Next steps:");
  console.log("   1. Restart your dev server: pnpm dev");
  console.log("   2. Verify with: node find-imports.mjs");
}

main();
