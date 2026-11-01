// Generates src/generated/component-data/*.json from src/lib via svelte-lib-helpers,
// then overlays hand-maintained files from src/data/component-data-overrides/.
// Overrides cover components whose generated output is wrong or incomplete
// (Button, P, MultiSelect, TableSearch) and ones with no generator source
// (Chart, EnhancedImg, Indicators, theme).
import { execFileSync } from "node:child_process";
import { cpSync, rmSync, rmdirSync, mkdirSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = join(ROOT, "src/generated/component-data");
const OVERRIDES = join(ROOT, "src/data/component-data-overrides");

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

execFileSync(
  process.execPath,
  [join(ROOT, "node_modules/svelte-lib-helpers/index.js"), "component-data-prop-value", "themesberg/flowbite-svelte", "--dest", OUT + "/"],
  { cwd: ROOT, stdio: "inherit" }
);

// the helper always creates this default dir, even with --dest
try {
  rmdirSync(join(ROOT, "src/routes/component-data"));
} catch {
  /* not empty or missing: leave it */
}

cpSync(OVERRIDES, OUT, { recursive: true });
console.log(`component-data → ${OUT} (${readdirSync(OUT).length} files, ${readdirSync(OVERRIDES).length} overrides)`);
