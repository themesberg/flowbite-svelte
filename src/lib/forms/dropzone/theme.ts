import { tv } from "tailwind-variants";
import type { ClassValue } from "svelte/elements";

export const dropzone = tv({
  base: "flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
});

export type DropzoneTheme = ClassValue;
