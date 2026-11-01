// Checks the docs / docs-examples mirror:
//  1. every `{#include X}` in a docs .md resolves to an existing example file
//  2. every example file is included by its .md or imported by another example/source file
//  3. every docs-examples/<dir>/<name>/ folder has a docs/<dir>/<name>.md
// Exit 1 on any problem. Run: node scripts/check-docs-mirror.mjs
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, dirname, resolve, basename, extname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DOCS = join(ROOT, "src/routes/docs");
const EX = join(ROOT, "src/routes/docs-examples");

const walk = (dir) =>
  readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const mdFiles = walk(DOCS).filter((f) => f.endsWith(".md"));
const exFiles = walk(EX);
const used = new Set();
const problems = [];

// 1. includes from md
for (const md of mdFiles) {
  const rel = relative(DOCS, md);
  const base = join(EX, dirname(rel), basename(rel, ".md"));
  for (const m of readFileSync(md, "utf8").matchAll(/{#include\s+([^\s}]+)}/g)) {
    const target = resolve(base, m[1]);
    if (existsSync(target)) used.add(target);
    else problems.push(`missing example: ${relative(ROOT, md)} -> ${m[1]}`);
  }
}

// 2. imports between examples (relative imports inside docs-examples)
for (const f of exFiles) {
  if (![".svelte", ".ts", ".js"].includes(extname(f))) continue;
  for (const m of readFileSync(f, "utf8").matchAll(/from\s+["'](\.[^"']+)["']|import\s*\(\s*["'](\.[^"']+)["']/g)) {
    const t = resolve(dirname(f), m[1] ?? m[2]);
    for (const c of [t, t + ".svelte", t + ".ts", t + ".js"]) if (existsSync(c)) used.add(c);
  }
}

// also anything under src/routes referencing docs-examples paths by name
const otherSrc = [...walk(join(ROOT, "src")), ...walk(join(ROOT, "e2e"))].filter((f) => !f.startsWith(EX) && /\.(svelte|ts|js|md)$/.test(f));
const blob = otherSrc.map((f) => readFileSync(f, "utf8")).join("\n");
for (const f of exFiles) {
  const rel = relative(EX, f);
  if (!used.has(f) && blob.includes("docs-examples/" + rel)) used.add(f);
}

// exempt: barrels (index.ts), live route files (+page/+layout...) and their md content
const exempt = (f) => basename(f) === "index.ts" || basename(f).startsWith("+") || relative(EX, f).split("/").includes("md");
for (const f of exFiles) if (!used.has(f) && !exempt(f)) problems.push(`orphan example: ${relative(ROOT, f)}`);

// 3. folder mirror
for (const d of new Set(exFiles.map((f) => dirname(f)))) {
  const rel = relative(EX, d);
  if (!rel) continue;
  const top = rel.split("/")[0];
  const mdPath = join(DOCS, rel + ".md");
  // nested example subfolders are allowed under a page folder
  const parts = rel.split("/");
  const hasMd = parts.some((_, i) => existsSync(join(DOCS, parts.slice(0, i + 1).join("/") + ".md")));
  if (!hasMd) problems.push(`example folder without docs page: ${relative(ROOT, d)} (expected ${relative(ROOT, mdPath)})`);
  void top;
}

console.log(`docs: ${mdFiles.length} md, examples: ${exFiles.length} files, referenced: ${used.size}`);
if (problems.length) {
  console.error(problems.join("\n"));
  console.error(`\n${problems.length} problem(s)`);
  process.exit(1);
}
console.log("docs mirror OK");
