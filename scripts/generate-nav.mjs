// scripts/generate-nav.mjs
// Generates static nav data for /docs/** layout.
// Run with: pnpm nav
// Output:   src/lib/generated/nav.json

import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// ─── Frontmatter parser (copied verbatim from generate-og-images.js) ──────────
function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const result = {};
  for (const line of match[1].split("\n")) {
    const colon = line.indexOf(":");
    if (colon === -1) continue;
    const key = line.slice(0, colon).trim();
    const value = line.slice(colon + 1).trim();
    result[key] = value;
  }
  return result;
}

// ─── Recursively collect .md files ────────────────────────────────────────────
function collectMdFiles(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      collectMdFiles(full, files);
    } else if (entry.endsWith(".md")) {
      files.push(full);
    }
  }
  return files;
}

// ─── Derive slug from filename ────────────────────────────────────────────────
function basename(filePath) {
  return filePath.substring(filePath.lastIndexOf("/") + 1).replace(/\.[^/.]+$/, "");
}

// ─── Sort helper (mirrors sortByList from utils/index.ts) ─────────────────────
function sortByOrder(entries, order) {
  return entries.sort((a, b) => {
    const aIdx = order.indexOf(a._key);
    const bIdx = order.indexOf(b._key);
    if (aIdx === -1 && bIdx === -1) return 0;
    if (aIdx === -1) return 1;
    if (bIdx === -1) return -1;
    return aIdx - bIdx;
  });
}

// ─── Build posts (mirrors fetchMarkdownPosts) ─────────────────────────────────
function buildPosts() {
  const pageOrder = ["introduction", "quickstart", "colors", "customization", "typescript", "license"];
  const mcpOrder = ["overview", "local-setup", "remote-setup", "prompts"];

  const SECTIONS = [
    { key: "pages", dir: "src/routes/docs/pages", order: pageOrder },
    { key: "mcp", dir: "src/routes/docs/mcp", order: mcpOrder },
    { key: "components", dir: "src/routes/docs/components" },
    { key: "forms", dir: "src/routes/docs/forms" },
    { key: "typography", dir: "src/routes/docs/typography" },
    { key: "utilities", dir: "src/routes/docs/utilities" },
    { key: "extend", dir: "src/routes/docs/extend" },
    { key: "examples", dir: "src/routes/docs/examples" },
    { key: "plugins", dir: "src/routes/docs/plugins" },
    { key: "icons", dir: "src/routes/icons" },
    { key: "illustrations", dir: "src/routes/illustrations" }
  ];

  const result = {};

  for (const { key, dir, order } of SECTIONS) {
    const absDir = join(ROOT, dir);
    let files;
    try {
      files = collectMdFiles(absDir);
    } catch {
      console.warn(`  [nav] Skipping section "${key}" — directory not found: ${dir}`);
      result[key] = [];
      continue;
    }

    let entries = files
      .map((file) => {
        const content = readFileSync(file, "utf-8");
        const meta = parseFrontmatter(content);
        if (!meta.component_title) return null;
        return {
          _key: basename(file),
          meta,
          path: "/" + basename(file)
        };
      })
      .filter(Boolean);

    if (order) {
      entries = sortByOrder(entries, order);
    }

    // Strip internal _key before writing
    result[key] = entries.map(({ _key, ...rest }) => rest);
  }

  return result;
}

// ─── Build blocks (mirrors fetchBlocksMarkdownPosts) ────────────────────────
// Block .md files use `breadcrumb_title` (not `component_title`).
// Skip +page.md category index files (they have category:true).
function buildBlocks() {
  const SECTIONS = [
    { key: "application", dir: "src/routes/blocks/application" },
    { key: "marketing", dir: "src/routes/blocks/marketing" },
    { key: "publisher", dir: "src/routes/blocks/publisher" },
    { key: "quickstart", dir: "src/routes/blocks/quickstart" }
  ];

  const result = {};

  for (const { key, dir } of SECTIONS) {
    const absDir = join(ROOT, dir);
    let files;
    try {
      files = collectMdFiles(absDir);
    } catch {
      console.warn(`  [nav] Skipping blocks section "${key}" — directory not found: ${dir}`);
      result[key] = [];
      continue;
    }

    const entries = files
      .map((file) => {
        // Skip category index pages (+page.md)
        if (basename(file) === "+page") return null;
        const content = readFileSync(file, "utf-8");
        const meta = parseFrontmatter(content);
        // Block .md files use breadcrumb_title, and category:true marks index pages
        if (!meta.breadcrumb_title || meta.category === "true") return null;
        return { meta, path: "/" + basename(file) };
      })
      .filter(Boolean);

    result[key] = entries;
  }

  return result;
}

// ─── Build builders (mirrors fetchBuilders) ───────────────────────────────────
function buildBuilders() {
  const builderDir = join(ROOT, "src/routes/builder");
  const EXCLUDE = new Set(["builder", "layout", "layoutExamples", "utils"]);
  const seen = new Set();
  const result = [];

  let entries;
  try {
    entries = readdirSync(builderDir, { withFileTypes: true });
  } catch {
    console.warn("  [nav] builder directory not found");
    return result;
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const name = entry.name;
    if (EXCLUDE.has(name)) continue;
    if (seen.has(name)) continue;
    seen.add(name);
    result.push({ path: name });
  }

  return result;
}

// ─── Build dashboard routes (mirrors fetchDashboardPosts) ─────────────────────
function buildDashboard() {
  const dashDir = join(ROOT, "src/routes/admin-dashboard");
  const routes = new Set();

  // Walk for +page.svelte files
  function walkPages(dir, prefix = "") {
    let entries;
    try {
      entries = readdirSync(dir, { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      const name = entry.name;
      if (entry.isDirectory()) {
        // Skip dynamic route directories
        if (name.startsWith("[")) continue;
        // Route groups like (sidebar) don't contribute to the path
        const isGroup = name.startsWith("(") && name.endsWith(")");
        const nextPrefix = isGroup ? prefix : prefix ? `${prefix}/${name}` : name;
        walkPages(join(dir, name), nextPrefix);
      } else if (name === "+page.svelte") {
        const route = prefix === "" ? "admin-dashboard" : `admin-dashboard/${prefix}`;
        routes.add(route);
      }
    }
  }

  walkPages(dashDir);

  // Authentication .svelte files (non-page-svelte convention)
  const authDir = join(dashDir, "authentication");
  try {
    for (const entry of readdirSync(authDir, { withFileTypes: true })) {
      if (entry.isFile() && entry.name.endsWith(".svelte") && !entry.name.startsWith("+")) {
        const filename = entry.name.replace(".svelte", "");
        routes.add(`admin-dashboard/authentication/${filename}`);
      }
    }
  } catch {
    // authentication dir not found — skip
  }

  // Known static error routes
  for (const r of ["admin-dashboard/errors/400", "admin-dashboard/errors/404", "admin-dashboard/errors/500"]) {
    routes.add(r);
  }

  return [...routes].sort();
}

// ─── Main ─────────────────────────────────────────────────────────────────────
function main() {
  console.log("Generating src/lib/generated/nav.json…");

  const posts = buildPosts();
  const blocks = buildBlocks();
  const builders = buildBuilders();
  const dashboard = buildDashboard();

  const nav = { posts, blocks, builders, dashboard };

  const outDir = join(ROOT, "src/lib/generated");
  mkdirSync(outDir, { recursive: true });

  const outPath = join(outDir, "nav.json");
  writeFileSync(outPath, JSON.stringify(nav, null, 2));

  // Summary
  const sectionCounts = Object.entries(posts)
    .map(([k, v]) => `${k}:${v.length}`)
    .join(", ");
  console.log(`  posts  — { ${sectionCounts} }`);
  const blockCounts = Object.entries(blocks)
    .map(([k, v]) => `${k}:${v.length}`)
    .join(", ");
  console.log(`  blocks — { ${blockCounts} }`);
  console.log(`  builders  — ${builders.length} entries`);
  console.log(`  dashboard — ${dashboard.length} routes`);
  console.log(`Done → ${outPath}`);
}

main();
