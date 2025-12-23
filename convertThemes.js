#!/usr/bin/env node
/**
 * Convert Tailwind CSS v4 @theme blocks to runtime CSS variables
 *
 * Usage: node convertThemes.js
 */

import { readFileSync, writeFileSync, readdirSync } from "fs";
import { join } from "path";

const themesDir = "./static/themes";
const files = readdirSync(themesDir).filter((f) => f.endsWith(".css") && !f.endsWith("-runtime.css"));

function convertThemeFile(content) {
  // Replace @theme { with :root {
  let converted = content.replace(/@theme\s*{/, ":root {");

  return converted;
}

files.forEach((file) => {
  const inputPath = join(themesDir, file);
  const outputPath = join(themesDir, file.replace(".css", "-runtime.css"));

  console.log(`Converting ${file}...`);

  const content = readFileSync(inputPath, "utf-8");
  const converted = convertThemeFile(content);

  writeFileSync(outputPath, converted);
  console.log(`✓ Created ${file.replace(".css", "-runtime.css")}`);
});

console.log("\n✓ All themes converted!");
console.log("\nNow update themeStore.svelte.ts to use the -runtime.css versions.");
