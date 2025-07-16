import { tv } from "tailwind-variants";
import type { ClassValue } from "svelte/elements";

export const mark = tv({
  base: "text-white dark:bg-blue-500 bg-blue-600 px-2 rounded-sm"
});

export type MarkTheme = ClassValue;
