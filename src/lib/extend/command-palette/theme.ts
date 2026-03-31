import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

export type CommandPaletteVariants = VariantProps<typeof commandPalette> & Classes<typeof commandPalette>;

export const commandPalette = tv({
  slots: {
    base: "w-full mx-auto mt-20 max-w-2xl bg-neutral-primary-soft rounded-lg shadow-2xl ring-1 ring-black/5 dark:ring-white/10 overflow-hidden transform transition-all",
    search: "rounded-b-none border-0 py-3",
    list: "max-h-80 scroll-py-2 overflow-y-auto border-t border-default",
    item: "cursor-pointer select-none px-4 py-2 text-sm text-heading " + "aria-selected:bg-brand aria-selected:text-white",
    itemDescription: "text-xs truncate text-body aria-selected:text-brand-softer",
    emptyState: "px-4 py-14 text-center border-t border-default text-sm text-body",
    footer: "flex flex-wrap items-center justify-between gap-2 bg-neutral-secondary-soft " + "px-4 py-2.5 text-xs text-body border-t border-default",
    kbd: "inline-flex items-center gap-1 rounded border border-default " + "bg-neutral-primary-soft px-2 py-1 font-sans text-xs"
  },

  variants: {
    selected: { true: {} }
  },
  defaultVariants: {}
});
