import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Variants
export type TagsVariants = VariantProps<typeof tags> & Classes<typeof tags>;

export const tags = tv({
  slots: {
    base: "border border-default rounded-base flex flex-wrap focus-within:ring-brand focus-within:ring-1 focus-within:border-brand scrollbar-hidden bg-neutral-primary-soft p-2",
    item: "flex items-center rounded-base bg-neutral-secondary-soft text-heading border border-default my-1 ml-1 p-2 text-sm max-w-full min-w-fit",
    label: "items-center",
    close: "my-auto ml-1",
    input: "block text-sm my-1 mx-2.5 p-0 bg-transparent border-none outline-none text-heading w-full min-w-fit focus:ring-0 placeholder:text-body disabled:cursor-not-allowed disabled:opacity-50",
    info: "mt-1 text-sm text-blue-500 dark:text-blue-400",
    warning: "mt-1 text-sm text-fg-warning",
    error: "mt-1 text-sm text-fg-danger"
  }
});
