import { FATHOM_ID } from "$env/static/private";
import type { LayoutServerLoad } from "./$types";

let cachedNpmVersion: string | null = null;
let cachedAt = 0;
const NPM_VERSION_TTL_MS = 5 * 60_000;

export const load: LayoutServerLoad = async ({ fetch }) => {
  if (Date.now() - cachedAt < NPM_VERSION_TTL_MS) {
    return { FATHOM_ID, npmVersion: cachedNpmVersion };
  }

  let npmVersion: string | null = cachedNpmVersion;
  let timeout: ReturnType<typeof setTimeout> | null = null;
  try {
    const controller = new AbortController();
    timeout = setTimeout(() => controller.abort(), 1500);
    const res = await fetch("https://registry.npmjs.org/flowbite-svelte/next", {
      headers: { Accept: "application/json" },
      signal: controller.signal
    });
    if (res.ok) {
      const data = await res.json();
      npmVersion = typeof data?.version === "string" ? data.version : null;
      cachedNpmVersion = npmVersion;
      cachedAt = Date.now();
    }
  } catch {
    // fall back to build-time version
  } finally {
    if (timeout) clearTimeout(timeout);
  }
  return { FATHOM_ID, npmVersion };
};
