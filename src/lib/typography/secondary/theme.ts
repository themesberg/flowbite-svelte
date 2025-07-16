import { tv } from "tailwind-variants";
import type { ClassValue } from "svelte/elements";

export const secondary = tv({
  base: "text-gray-500 dark:text-gray-400 font-semibold"
});

export type SecondaryTheme = ClassValue;
