import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

function getAllSvelteFiles(dir, fileList = []) {
  try {
    const files = readdirSync(dir);

    files.forEach((file) => {
      const filePath = join(dir, file);
      const stat = statSync(filePath);

      if (stat.isDirectory()) {
        getAllSvelteFiles(filePath, fileList);
      } else if (file.endsWith(".svelte")) {
        fileList.push(filePath);
      }
    });
  } catch (err) {
    console.error(`Error reading ${dir}:`, err.message);
  }

  return fileList;
}

const srcDir = "./src/lib";
const files = getAllSvelteFiles(srcDir);

console.log("Files containing warnThemeDeprecation:\n");

let count = 0;
files.forEach((file) => {
  try {
    const content = readFileSync(file, "utf8");
    if (content.includes("warnThemeDeprecation")) {
      // Check if it's already wrapped in $effect
      const lines = content.split("\n");
      let hasUnwrappedCall = false;

      for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes("warnThemeDeprecation(")) {
          // Check previous line for $effect
          const prevLine = i > 0 ? lines[i - 1] : "";
          if (!prevLine.includes("$effect")) {
            hasUnwrappedCall = true;
            break;
          }
        }
      }

      if (hasUnwrappedCall) {
        count++;
        console.log(file);
      }
    }
  } catch (err) {
    console.error(`Error reading ${file}:`, err.message);
  }
});

console.log(`\n\nTotal files needing fixes: ${count}`);
