#!/usr/bin/env node

/**
 * Comprehensive fix for route files
 * This handles common patterns in route files
 */

import { readFileSync, writeFileSync } from "fs";
import { resolve } from "path";

// Common patterns in route files
const routeFixes = [
  // PlusPlaceholder.svelte
  {
    file: "src/routes/utils/PlusPlaceholder.svelte",
    find: "  const colclass = `grid-cols-${colnum}`;",
    replace: "  const colclass = $derived(`grid-cols-${colnum}`);"
  },

  // CompoCard.svelte (both instances)
  {
    file: "src/routes/utils/CompoCard.svelte",
    find: "  path = path.toLowerCase();\n  dir = dir.toLowerCase();",
    replace: "  const lowerPath = $derived(path.toLowerCase());\n  const lowerDir = $derived(dir.toLowerCase());"
  },
  {
    file: "src/routes/blocks/utils/CompoCard.svelte",
    find: "  path = path.toLowerCase();\n  dir = dir.toLowerCase();",
    replace: "  const lowerPath = $derived(path.toLowerCase());\n  const lowerDir = $derived(dir.toLowerCase());"
  },

  // JSONView.svelte (multiple instances)
  {
    file: "src/routes/utils/JSONView.svelte",
    find: "  let expanded = $state(initiallyExpanded);",
    replace: "  let expanded = $state(false);\n  $effect(() => {\n    expanded = initiallyExpanded;\n  });"
  },
  {
    file: "src/routes/admin-dashboard/utils/JSONView.svelte",
    find: "  let expanded = $state(initiallyExpanded);",
    replace: "  let expanded = $state(false);\n  $effect(() => {\n    expanded = initiallyExpanded;\n  });"
  },

  // GitHubSourceList.svelte
  {
    file: "src/routes/utils/GitHubSourceList.svelte",
    find: "  const paths = Object.keys(libFiles);",
    replace: "  const paths = $derived(Object.keys(libFiles));"
  },
  {
    file: "src/routes/blocks/utils/GitHubSourceList.svelte",
    find: "  const paths = Object.keys(libFiles);",
    replace: "  const paths = $derived(Object.keys(libFiles));"
  },

  // MetaTag.svelte variations
  {
    file: "src/routes/utils/MetaTag.svelte",
    find: "  let imgsrc = `https://flowbite-svelte.com/og?title=${encodeURIComponent(breadcrumb_title)}&package=${encodeURIComponent(pkg)}`;",
    replace: "  let imgsrc = $derived(`https://flowbite-svelte.com/og?title=${encodeURIComponent(breadcrumb_title)}&package=${encodeURIComponent(pkg)}`);\n"
  },
  {
    file: "src/routes/utils/MetaTag.svelte",
    find: '  let dirstring = dir.toLowerCase();\n  let breadcrumb = breadcrumb_title.toLowerCase().replaceAll(" ", "-");',
    replace: '  let dirstring = $derived(dir.toLowerCase());\n  let breadcrumb = $derived(breadcrumb_title.toLowerCase().replaceAll(" ", "-"));'
  },

  // TableDefaultRow.svelte
  {
    file: "src/routes/utils/TableDefaultRow.svelte",
    find: '  let trClass: string = $state("");\n  let trLastClass: string = $state("");\n  if (rowState === "striped") {',
    replace: '  let trClass = $derived<string>(() => {\n    if (rowState === "striped") {'
  },
  {
    file: "src/routes/blocks/utils/TableDefaultRow.svelte",
    find: '  let trClass: string = $state("");\n  let trLastClass: string = $state("");\n  if (rowState === "striped") {',
    replace: '  let trClass = $derived<string>(() => {\n    if (rowState === "striped") {'
  },

  // TableProp.svelte
  {
    file: "src/routes/utils/TableProp.svelte",
    find: '  setContext("category", category);',
    replace: '  $effect(() => {\n    setContext("category", category);\n  });'
  },
  {
    file: "src/routes/blocks/utils/TableProp.svelte",
    find: '  setContext("category", category);',
    replace: '  $effect(() => {\n    setContext("category", category);\n  });'
  },
  {
    file: "src/routes/utils/TableProp.svelte",
    find: "  let header = headerNames[category];",
    replace: "  let header = $derived(headerNames[category]);"
  },
  {
    file: "src/routes/blocks/utils/TableProp.svelte",
    find: "  let header = headerNames[category];",
    replace: "  let header = $derived(headerNames[category]);"
  },

  // CompoAttributesViewer.svelte
  {
    file: "src/routes/utils/CompoAttributesViewer.svelte",
    find: "  const fileNames = getFilteredFileNames(dirName);",
    replace: "  const fileNames = $derived(getFilteredFileNames(dirName));"
  },
  {
    file: "src/routes/utils/CompoAttributesViewer.svelte",
    find: '  let componentArray = components ? components.split(", ") : [];',
    replace: '  let componentArray = $derived(components ? components.split(", ") : []);'
  },
  {
    file: "src/routes/blocks/utils/CompoAttributesViewer.svelte",
    find: "  const fileNames = getFilteredFileNames(dirName);",
    replace: "  const fileNames = $derived(getFilteredFileNames(dirName));"
  },
  {
    file: "src/routes/blocks/utils/CompoAttributesViewer.svelte",
    find: '  let componentArray = components ? components.split(", ") : [];',
    replace: '  let componentArray = $derived(components ? components.split(", ") : []);'
  },

  // GitHubCompoLinks.svelte
  {
    file: "src/routes/utils/GitHubCompoLinks.svelte",
    find: "  if (components) {",
    replace: "  $effect(() => {\n    if (components) {"
  },

  // Components.svelte
  {
    file: "src/routes/landing/Components.svelte",
    find: "  let components = [...data.posts.forms, ...data.posts.components, ...data.posts.typography].sort((a, b) => a.meta.component_title.localeCompare(b.meta.component_title));",
    replace: "  let components = $derived([...data.posts.forms, ...data.posts.components, ...data.posts.typography].sort((a, b) => a.meta.component_title.localeCompare(b.meta.component_title)));"
  },

  // ComponentsLayout.svelte
  {
    file: "src/routes/layouts/ComponentsLayout.svelte",
    find: "  const posts: Record<string, any[]> = data.posts?.posts ?? {};",
    replace: "  const posts = $derived<Record<string, any[]>>(data.posts?.posts ?? {});"
  },
  {
    file: "src/routes/layouts/ComponentsLayout.svelte",
    find: "  const builders: Array<{ path: string }> = data.posts?.builders ?? [];",
    replace: "  const builders = $derived<Array<{ path: string }>>(data.posts?.builders ?? []);"
  },
  {
    file: "src/routes/layouts/ComponentsLayout.svelte",
    find: '  let noToc = ["blocks", "builder"].includes(submenu ?? "");',
    replace: '  let noToc = $derived(["blocks", "builder"].includes(submenu ?? ""));'
  }
];

let fixedCount = 0;
let notFoundCount = 0;
let errorCount = 0;

console.log("Fixing route files...\n");

routeFixes.forEach(({ file, find, replace }) => {
  try {
    const filePath = resolve(file);
    let content;

    try {
      content = readFileSync(filePath, "utf8");
    } catch (err) {
      console.log(`⊘ File not found (skipping): ${file}`);
      notFoundCount++;
      return;
    }

    if (content.includes(find)) {
      content = content.replace(find, replace);
      writeFileSync(filePath, content, "utf8");
      console.log(`✓ Fixed: ${file}`);
      fixedCount++;
    } else {
      console.log(`⊘ Pattern not found (may already be fixed): ${file}`);
      notFoundCount++;
    }
  } catch (err) {
    console.error(`✗ Error fixing ${file}:`, err.message);
    errorCount++;
  }
});

console.log(`\n✅ Fixed ${fixedCount} files`);
console.log(`⊘ Skipped ${notFoundCount} files (not found or already fixed)`);
if (errorCount > 0) {
  console.log(`❌ ${errorCount} files had errors`);
}

console.log("\nNote: Some complex route files may need manual review.");
console.log('Run "pnpm check" to see remaining warnings.');
