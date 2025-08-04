export { default as Input } from "./Input.svelte";
export { input } from "./theme";
import type { SizeType } from "$lib/types";

export function clampSize(s: SizeType) {
  return s && s === "xs" ? "sm" : s === "xl" ? "lg" : s;
}
