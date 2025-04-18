import Input from "./Input.svelte";
import type { SizeType } from "$lib/types";
import { input } from "./theme";

function clampSize(s: SizeType) {
  return s && s === "xs" ? "sm" : s === "xl" ? "lg" : s;
}

export { Input, input, clampSize };
