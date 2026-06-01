// scripts/generate-og-images.js
// Generates static OG images for all doc/blocks/icons/illustrations pages.
// Run with: pnpm og
// Output:   static/og/<slug>.png
// MetaTag:  update imgsrc to `/og/<slug>.png`

import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from "fs";
import { join, relative, dirname } from "path";
import { fileURLToPath } from "url";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

// ─── Fonts (from @fontsource/noto-sans devDependency) ─────────────────────────
function loadFonts() {
  const base = join(ROOT, "node_modules/@fontsource/noto-sans/files");
  return [
    { name: "Noto Sans", data: readFileSync(join(base, "noto-sans-latin-400-normal.woff2")), weight: 400, style: "normal" },
    { name: "Noto Sans", data: readFileSync(join(base, "noto-sans-latin-700-normal.woff2")), weight: 700, style: "normal" },
  ];
}

// ─── Constants ────────────────────────────────────────────────────────────────
const WIDTH = 1200;
const HEIGHT = 630;
const OUT_DIR = join(ROOT, "static/og");

// ─── Frontmatter parser ───────────────────────────────────────────────────────
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

// ─── Derive slug from file path ───────────────────────────────────────────────
// e.g. src/routes/docs/components/accordion.md → docs-components-accordion
function slugFromPath(filePath) {
  const rel = relative(join(ROOT, "src/routes"), filePath);
  return rel
    .replace(/\.md$/, "")
    .replace(/\//g, "-")
    .replace(/[^a-z0-9-]/gi, "-")
    .toLowerCase();
}

// ─── Font size + line-break logic ─────────────────────────────────────────────
function titleLayout(title) {
  const len = title.length;
  if (len <= 8)  return { fontSize: 148, lines: [title] };
  if (len <= 16) return { fontSize: 120, lines: [title] };
  if (len <= 26) return { fontSize: 96,  lines: [title] };
  // Split into two lines near the middle word boundary
  const mid = Math.floor(len / 2);
  let splitAt = title.lastIndexOf(" ", mid);
  if (splitAt === -1) splitAt = title.indexOf(" ", mid);
  if (splitAt === -1) return { fontSize: 80, lines: [title] };
  return {
    fontSize: 88,
    lines: [title.slice(0, splitAt).trim(), title.slice(splitAt + 1).trim()],
  };
}

// ─── Logo paths ───────────────────────────────────────────────────────────────
const LOGO_PATHS = [
  { d: "M73.5582 38.8281C73.3358 40.3595 72.3261 42.4399 71.1677 44.2486C69.7061 46.5309 67.3867 48.1294 64.7322 48.6845L53.0391 51.1296C51.1598 51.5226 49.4556 52.5062 48.1761 53.9365L40.5091 62.5065C39.0682 64.1171 38.0611 63.733 38.0611 61.5728C38.0436 61.6529 34.2559 71.421 44.2938 77.2108C48.1507 79.4355 53.7025 78.6362 57.5594 76.4115L77.995 64.6242C85.6375 60.216 91.0335 52.7586 92.8271 44.1261C92.898 43.7846 92.9528 43.4419 93.012 43.0995L73.5582 38.8281Z", fill: "#F83C00" },
  { d: "M68.2584 27.0537C72.1153 29.2783 73.6911 32.5903 73.6911 37.0396C73.6911 37.6436 73.6436 38.2404 73.5583 38.828L81.7924 42.365L93.0121 43.0993C94.4487 34.7848 91.6333 26.2265 86.586 19.4238C82.7877 14.3045 77.9001 9.86189 72.0242 6.47262C67.2511 3.71946 62.2909 1.9055 57.3074 0.910156L51.7082 8.16118L49.9395 16.4873L68.2584 27.0537Z", fill: "#F83C00" },
  { d: "M2.35055 33.1554C2.78851 31.8614 3.33029 30.4156 4.00667 28.8711C7.53979 20.8029 14.3483 15.4219 22.7245 12.6782C31.1006 9.93467 40.2463 10.8964 47.8802 15.2996L49.9393 16.4873L57.3073 0.910235C33.8726 -3.77029 9.92159 9.9976 2.38034 33.0651Z", fill: "#F83C00" },
  { d: "M56.7594 76.4112C52.9026 78.6359 48.1507 78.6359 44.2939 76.4112C43.7704 76.1092 43.2768 75.7697 42.81 75.4021L36.027 80.0655L30.1807 89.5128C36.6698 94.913 45.0962 96.6491 53.5167 95.6836C59.8535 94.9569 66.1484 92.9495 72.0242 89.5603C76.7974 86.8071 80.8499 83.4225 84.2045 79.6084L80.7186 71.1384L75.0784 65.8447L56.7594 76.4112Z", fill: "#F83C00" },
  { d: "M42.8101 75.4019C39.8385 73.0612 38.0612 69.4711 38.0612 65.6258V33.2168C38.0612 31.4056 38.5948 31.0978 40.1648 32.0034C37.7467 30.6086 32.1606 25.8205 25.2633 29.7989C21.4065 32.0236 18.2305 36.9342 18.2305 41.3834V64.9581C18.2305 73.7746 22.7969 82.9713 29.3832 88.8393L30.1807 89.5126L42.8101 75.4019Z", fill: "#A72F09" },
  { d: "M83.7314 15.9369C84.6342 16.9629 85.6166 18.1545 86.6173 19.512C91.8446 26.6029 93.7977 35.5839 91.988 44.2028C90.1781 52.8217 84.7717 60.2537 77.1377 64.657L75.0786 65.8447L84.2047 79.6084C99.9793 61.6728 100.02 34.0663 83.7948 16.0078Z", fill: "#F83C00" },
  { d: "M19.0306 41.384C19.0306 36.9348 21.4065 32.8234 25.2634 30.5988C25.7869 30.2968 26.328 30.0396 26.8801 29.8195L26.2291 21.6191L21.6558 12.2368C13.7301 15.1511 7.31911 21.1739 3.94584 28.9422C1.40729 34.7882 0 41.2383 0 48.0167C0 53.5231 0.907647 58.7216 2.5366 63.5311L11.6217 64.75L19.0306 62.517V41.384Z", fill: "#D03504" },
  { d: "M26.88 29.8195C30.3947 28.4189 34.3955 28.6762 37.7287 30.5988L38.0612 30.7906L64.7473 46.1832C66.6194 47.263 66.4492 48.3255 64.3334 48.7679L65.8728 48.4461C67.8986 48.0225 69.7492 46.9873 71.1645 45.4787C73.5979 42.8849 74.4912 39.7555 74.4912 37.0398C74.4912 32.5905 72.1153 28.4792 68.2585 26.2546L47.8229 14.4672C40.1804 10.059 31.0179 9.11901 22.6382 11.8835L21.6558 12.2368L26.88 29.8195Z", fill: "#A72E08" },
  { d: "M57.9666 94.9574C56.6259 95.2255 55.1017 95.4797 53.4247 95.6667C44.6642 96.6439 35.9025 93.8433 29.3362 87.968C22.7698 82.0927 19.0307 73.699 19.0307 64.8925V62.5171L2.53662 63.5311C10.1967 86.1472 34.1068 99.9859 57.8734 94.9768Z", fill: "#F83C00" },
];

// ─── Build satorio vnode ──────────────────────────────────────────────────────
function buildLayout({ title, pkg, description }) {
  const { fontSize, lines } = titleLayout(title);
  const LINE_HEIGHT = fontSize * 1.08;
  const badgeWidth = Math.max(160, pkg.length * 14 + 48);
  const desc = description.length > 85 ? description.slice(0, 82) + "…" : description;

  const titleBlockHeight = lines.length * LINE_HEIGHT;
  // Centre title+badge+desc vertically in the space between divider (192px) and bottom strip (578px)
  const availableHeight = 578 - 210;
  const contentHeight = titleBlockHeight + 20 + 44 + 20 + 40; // title + gap + badge + gap + desc
  const titleY = 210 + Math.max(0, Math.floor((availableHeight - contentHeight) / 2));

  return {
    type: "div",
    props: {
      style: {
        width: "1200px", height: "630px",
        display: "flex", flexDirection: "column",
        backgroundColor: "#141630",
        position: "relative", overflow: "hidden",
      },
      children: [
        // Bottom-left glow
        {
          type: "div",
          props: {
            style: {
              position: "absolute", bottom: "0", left: "0",
              width: "700px", height: "500px",
              background: "radial-gradient(ellipse at 0% 100%, rgba(248,60,0,0.10) 0%, transparent 70%)",
            },
          },
        },
        // Left accent bar
        {
          type: "div",
          props: {
            style: {
              position: "absolute", left: "80px", top: "100px",
              width: "6px", height: "410px", borderRadius: "3px",
              background: "linear-gradient(to bottom, #F83C00, #6b1700)",
            },
          },
        },
        // Header: logo + package name
        {
          type: "div",
          props: {
            style: {
              position: "absolute", top: "100px", left: "116px",
              display: "flex", flexDirection: "row", alignItems: "center", gap: "16px",
            },
            children: [
              {
                type: "svg",
                props: {
                  width: "60", height: "60", viewBox: "0 0 96 96", fill: "none",
                  children: LOGO_PATHS.map(({ d, fill }) => ({ type: "path", props: { d, fill } })),
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    fontSize: "26px", fontWeight: 500, color: "#F83C00",
                    letterSpacing: "2px", fontFamily: "Noto Sans",
                  },
                  children: pkg.toUpperCase(),
                },
              },
            ],
          },
        },
        // Divider
        {
          type: "div",
          props: {
            style: {
              position: "absolute", top: "192px", left: "116px", right: "80px",
              height: "1px", backgroundColor: "rgba(255,255,255,0.10)",
            },
          },
        },
        // Title
        {
          type: "div",
          props: {
            style: {
              position: "absolute", top: `${titleY}px`, left: "116px", right: "80px",
              display: "flex", flexDirection: "column",
            },
            children: lines.map((line) => ({
              type: "div",
              props: {
                style: {
                  fontSize: `${fontSize}px`, fontWeight: 700, color: "#ffffff",
                  letterSpacing: `${-Math.round(fontSize * 0.02)}px`,
                  lineHeight: 1.08, fontFamily: "Noto Sans",
                },
                children: line,
              },
            })),
          },
        },
        // Badge
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              top: `${titleY + titleBlockHeight + 20}px`,
              left: "116px", width: `${badgeWidth}px`, height: "44px",
              borderRadius: "6px",
              border: "1px solid rgba(248,60,0,0.35)",
              backgroundColor: "rgba(248,60,0,0.10)",
              display: "flex", alignItems: "center", justifyContent: "center",
            },
            children: [{
              type: "div",
              props: {
                style: { fontSize: "20px", fontWeight: 500, color: "#F83C00", fontFamily: "Noto Sans" },
                children: pkg,
              },
            }],
          },
        },
        // Description
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              top: `${titleY + titleBlockHeight + 84}px`,
              left: "116px", right: "80px",
              fontSize: "26px", fontWeight: 400, color: "#7478a8",
              lineHeight: 1.45, fontFamily: "Noto Sans",
            },
            children: desc,
          },
        },
        // Bottom strip
        {
          type: "div",
          props: {
            style: {
              position: "absolute", bottom: "0", left: "0", right: "0", height: "52px",
              backgroundColor: "#0d0f20",
              display: "flex", flexDirection: "row", alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: "116px", paddingRight: "80px",
            },
            children: [
              {
                type: "div",
                props: { style: { fontSize: "20px", color: "#3d4170", fontFamily: "Noto Sans" }, children: "flowbite-svelte.com" },
              },
              {
                type: "div",
                props: { style: { fontSize: "20px", color: "#3d4170", fontFamily: "Noto Sans" }, children: "Open source · MIT" },
              },
            ],
          },
        },
      ],
    },
  };
}

// ─── Render one PNG ───────────────────────────────────────────────────────────
async function renderImage(data, fonts) {
  const svg = await satori(buildLayout(data), { width: WIDTH, height: HEIGHT, fonts });
  const resvg = new Resvg(svg, { fitTo: { mode: "width", value: WIDTH } });
  return resvg.render().asPng();
}

// ─── Page sources ─────────────────────────────────────────────────────────────
const SOURCES = [
  { dir: "src/routes/docs",          defaultPkg: "Flowbite Svelte" },
  { dir: "src/routes/blocks",        defaultPkg: "Flowbite Svelte Blocks" },
  { dir: "src/routes/icons",         defaultPkg: "Flowbite Svelte Icons" },
  { dir: "src/routes/illustrations", defaultPkg: "Flowbite Svelte Illustrations" },
];

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  mkdirSync(OUT_DIR, { recursive: true });

  const [fontRegular, fontBold] = await Promise.all([
    loadFont(
      "https://fonts.gstatic.com/s/notosans/v36/o-0bIpQlx3QUlC5A4PNjXhFVZNyBx2pqPIif.woff2",
      "NotoSans-Regular.woff2"
    ),
    loadFont(
      "https://fonts.gstatic.com/s/notosans/v36/o-0NIpQlx3QUlC5A4PNjFhFVZNyBx2pqPIif.woff2",
      "NotoSans-Bold.woff2"
    ),
  ]);
  const fonts = [
    { name: "Noto Sans", data: fontRegular, weight: 400, style: "normal" },
    { name: "Noto Sans", data: fontBold,    weight: 700, style: "normal" },
  ];

  const pages = [];

  for (const { dir, defaultPkg } of SOURCES) {
    const absDir = join(ROOT, dir);
    let files;
    try {
      files = collectMdFiles(absDir);
    } catch {
      console.warn(`Skipping ${dir} (not found)`);
      continue;
    }

    for (const file of files) {
      const content = readFileSync(file, "utf-8");
      const fm = parseFrontmatter(content);
      const title = fm.component_title || fm.breadcrumb_title;
      if (!title) continue;
      pages.push({
        title,
        pkg: fm.pkg || defaultPkg,
        description: fm.description || "",
        slug: slugFromPath(file),
      });
    }
  }

  console.log(`Generating ${pages.length} OG images…\n`);

  let done = 0;
  for (const page of pages) {
    const outPath = join(OUT_DIR, `${page.slug}.png`);
    try {
      const png = await renderImage(page, fonts);
      writeFileSync(outPath, png);
      done++;
      process.stdout.write(`\r  ${done}/${pages.length}  ${page.slug}                    `);
    } catch (err) {
      console.error(`\nFailed: ${page.slug} — ${err.message}`);
    }
  }

  console.log(`\n\nDone! ${done} images → static/og/`);

  // Write manifest so MetaTag.svelte can resolve slugs at build time
  const manifest = {};
  for (const { title, pkg, slug } of pages) {
    manifest[`${title}::${pkg}`] = `/og/${slug}.png`;
  }
  writeFileSync(
    join(ROOT, "src/routes/og-manifest.json"),
    JSON.stringify(manifest, null, 2)
  );
  console.log(`Manifest → src/routes/og-manifest.json`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});