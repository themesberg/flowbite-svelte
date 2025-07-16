import { tv } from "tailwind-variants";
import type { ClassValue } from "svelte/elements";

export const layout = tv({
  base: "grid grid-cols-1 sm:grid-cols-2"
});

export type LayoutTheme = ClassValue;
