import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

export type CommandPaletteVariants = VariantProps<typeof commandPalette> & Classes<typeof commandPalette>;

export const commandPalette = tv({
  slots: {
    base: "w-full mx-auto mt-20 max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-2xl ring-1 ring-black/5 dark:ring-white/10 overflow-hidden transform transition-all",
    search: "rounded-b-none border-0 py-3",
    list: "max-h-80 scroll-py-2 overflow-y-auto border-t border-gray-200 dark:border-gray-700",
    item: "cursor-pointer select-none px-4 py-2 text-sm text-gray-900 dark:text-gray-100 " + "aria-selected:bg-primary-600 aria-selected:text-white",
    itemDescription: "text-xs truncate text-gray-500 dark:text-gray-400 aria-selected:text-primary-100",
    emptyState: "px-4 py-14 text-center border-t border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400",
    footer: "flex flex-wrap items-center justify-between gap-2 bg-gray-50 dark:bg-gray-900/50 " + "px-4 py-2.5 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700",
    kbd: "inline-flex items-center gap-1 rounded border border-gray-300 dark:border-gray-600 " + "bg-white dark:bg-gray-800 px-2 py-1 font-sans text-xs"
  },

  variants: {
    selected: { true: {} }
  },
  defaultVariants: {}
});
