import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme/themeUtils";

export type CommandPaletteVariants = VariantProps<typeof commandPalette> & Classes<typeof commandPalette>;

export const commandPalette = tv({
  slots: {
    backdrop:
      "fixed inset-0 z-50 flex items-start justify-center bg-gray-900/50 dark:bg-gray-900/80 p-4 sm:p-6 md:p-20",
    panel:
      "w-full max-w-2xl bg-white dark:bg-gray-800 rounded-lg shadow-2xl ring-1 ring-black/5 dark:ring-white/10 overflow-hidden transform transition-all",
    inputWrapper: "relative",
    icon:
      "pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400 dark:text-gray-500",
    input:
      "w-full border-0 bg-transparent pl-11 pr-4 py-3 text-gray-900 dark:text-white " +
      "placeholder-gray-400 dark:placeholder-gray-500 focus:ring-0 focus:outline-none text-sm",
    list:
      "max-h-80 scroll-py-2 overflow-y-auto border-t border-gray-200 dark:border-gray-700",
    item:
      "cursor-pointer select-none px-4 py-2 text-sm text-gray-900 dark:text-gray-100 " +
      "aria-selected:bg-primary-600 aria-selected:text-white",
    itemDescription:
      "text-xs truncate text-gray-500 dark:text-gray-400 aria-selected:text-primary-100",
    empty:
      "px-4 py-14 text-center border-t border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400",
    footer:
      "flex flex-wrap items-center justify-between gap-2 bg-gray-50 dark:bg-gray-900/50 " +
      "px-4 py-2.5 text-xs text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700",
    kbd:
      "inline-flex items-center gap-1 rounded border border-gray-300 dark:border-gray-600 " +
      "bg-white dark:bg-gray-800 px-2 py-1 font-sans text-xs"
  },

  variants: {
    selected: {
      true: "bg-primary-600 text-white",
      false: "text-gray-900 dark:text-gray-100"
    }
  },

  defaultVariants: {}
});
