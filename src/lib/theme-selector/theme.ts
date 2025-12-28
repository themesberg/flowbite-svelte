import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme/themeUtils";

// Variants
export type ThemeSelectorVariants = VariantProps<typeof themeSelector> & Classes<typeof themeSelector>;

export const themeSelector = tv({
  slots: {
    button: "gap-2 rounded-sm border-0 px-1 py-1 shadow-none focus:ring-gray-100 dark:focus:ring-gray-700",
    dropdown: "w-52 px-2",
    item: "mb-1 inline-flex w-full items-center justify-between rounded-xl",
    itemLabel: "theme-select-button inline-flex w-full items-center justify-between rounded",
    colorSwatchContainer: "flex items-center rounded-xs",
    colorSwatch: "h-3.5 w-[1.125rem]"
  },
  variants: {
    active: {
      true: {
        item: "bg-brand-50 dark:bg-brand-900/20"
      },
      false: {
        item: ""
      }
    },
    swatchPosition: {
      first: {
        colorSwatch: "rounded-s-xs"
      },
      middle: {
        colorSwatch: ""
      },
      last: {
        colorSwatch: "rounded-e-xs"
      }
    }
  },
  defaultVariants: {
    active: false
  }
});
