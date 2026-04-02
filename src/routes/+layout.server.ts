import { FATHOM_ID } from "$env/static/private";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ fetch }) => {
  let npmVersion: string | null = null;
  try {
    const res = await fetch("https://registry.npmjs.org/flowbite-svelte/next", {
      headers: { Accept: "application/json" }
    });
    if (res.ok) {
      const data = await res.json();
      npmVersion = data.version ?? null;
    }
  } catch {
    // fall back to build-time version
  }
  return { FATHOM_ID, npmVersion };
};
