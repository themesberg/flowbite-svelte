#!/usr/bin/env node
/**
 * Convert Tailwind CSS v4 @theme blocks to runtime CSS variables
 *
 * Usage: node convertThemes.js
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from "fs";
import { join } from "path";

const themesDir = "./static/themes";
if (!existsSync(themesDir)) {
  console.error(`Error: Directory ${themesDir} does not exist`);
  process.exit(1);
}
const files = readdirSync(themesDir).filter((f) => f.endsWith(".css") && !f.endsWith("-runtime.css"));

function convertThemeFile(content) {
  // Replace @theme { with :root {
  let converted = content.replace(/@theme\s*\{/g, ":root {");

  return converted;
}

files.forEach((file) => {
  const inputPath = join(themesDir, file);
  const outputPath = join(themesDir, file.replace(".css", "-runtime.css"));

  console.log(`Converting ${file}...`);

  try {
    const content = readFileSync(inputPath, "utf-8");
    const converted = convertThemeFile(content);
    writeFileSync(outputPath, converted);
    console.log(`✓ Created ${file.replace(".css", "-runtime.css")}`);
  } catch (error) {
    console.error(`✗ Failed to convert ${file}:`, error.message);
  }
});

console.log("\n✓ All themes converted!");
console.log("\nNow update themeStore.svelte.ts to use the -runtime.css versions.");
