// redirects.js - Separate file for redirect logic
// This file will only be imported in production/dev, not during tests

// vite function to get all md files from components dir
const allFiles = [
  import.meta.glob("/src/routes/docs/components/*.md"),
  import.meta.glob("/src/routes/docs/forms/*.md"),
  import.meta.glob("/src/routes/docs/plugins/*.md"),
  import.meta.glob("/src/routes/docs/typography/*.md"),
  import.meta.glob("/src/routes/docs/examples/*.md"),
  import.meta.glob("/src/routes/docs/utilities/*.md"),
  import.meta.glob("/src/routes/docs/pages/*.md"),
  import.meta.glob("/src/routes/docs/extend/*.md")
]
  .flatMap(Object.keys)
  .map((x) => x.replace(/\.[^/.]+$/, ""))
  .map((x) => x.split("/").slice(-2));

export function getRedirectPath(dir, file) {
  for (const [key, value] of allFiles) {
    if (value !== file) continue;
    if (dir === "" || dir === key) return `/docs/${key}/${value}`;
  }
  return null;
}
