import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme/themeUtils";

// Variants
export type TagsVariants = VariantProps<typeof tags> & Classes<typeof tags>;

export const tags = tv({
  slots: {
    base: "border bg-gray-50 border-gray-300 rounded-lg flex focus-within:ring-primary-500 focus-within:ring-1 focus-within:border-primary-500 scrollbar-hidden",
    tag: "flex items-center rounded-lg bg-gray-100 text-gray-900 border border-gray-300 my-1 ml-1 px-2 text-sm max-w-full min-w-fit",
    span: "items-center",
    close: "my-auto ml-1",
    input: "block text-sm m-2.5 p-0 bg-transparent border-none outline-none text-gray-900 h-min w-full min-w-fit focus:ring-0 placeholder-gray-400",
    info: "mt-1 text-sm text-blue-500 dark:text-blue-400",
    warning: "mt-1 text-sm text-yellow-400 dark:text-yellow-300",
    error: "mt-1 text-sm text-red-500 dark:text-red-400"
  }
});
