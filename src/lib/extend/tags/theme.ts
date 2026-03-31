import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Variants
export type TagsVariants = VariantProps<typeof tags> & Classes<typeof tags>;

export const tags = tv({
  slots: {
    base: "border border-default rounded-base flex focus-within:ring-brand focus-within:ring-1 focus-within:border-brand scrollbar-hidden bg-neutral-secondary-soft",
    item: "flex items-center rounded-base bg-neutral-tertiary text-heading border border-default my-1 ml-1 px-2 text-sm max-w-full min-w-fit",
    label: "items-center",
    close: "my-auto ml-1",
    input:
      "block text-sm m-2.5 p-0 bg-transparent border-none outline-none text-heading h-min w-full min-w-fit focus:ring-0 placeholder:text-body disabled:cursor-not-allowed disabled:opacity-50",
    info: "mt-1 text-sm text-blue-500 dark:text-blue-400",
    warning: "mt-1 text-sm text-yellow-400 dark:text-yellow-300",
    error: "mt-1 text-sm text-red-500 dark:text-red-400",
    inputWrapper: "relative w-full",
    option: "block w-full cursor-pointer px-3 py-2 text-left hover:bg-neutral-primary-medium",
    list: "z-10 max-h-48 w-full overflow-auto rounded border border-default bg-neutral-primary-soft shadow"
  }
});
