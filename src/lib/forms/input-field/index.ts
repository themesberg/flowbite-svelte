export { default as Input } from "./Input.svelte";
import type { SizeType } from "$lib/types";
export { input } from "./theme";

export function clampSize(s: SizeType) {
  return s && s === "xs" ? "sm" : s === "xl" ? "lg" : s;
}
