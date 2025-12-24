import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme/themeUtils";

export type InputAddonVariants = VariantProps<typeof inputAddon> & Classes<typeof inputAddon>;

export const inputAddon = tv({
  slots: {
    base: "text-gray-500 bg-gray-200 inline-flex items-center border first:rounded-s-base last:rounded-e-base"
  },
  variants: {
    size: {
      sm: { base: "sm:text-xs px-2" },
      md: { base: "text-sm px-3" },
      lg: { base: "sm:text-base px-4" }
    },
    background: {
      base: {
        base: "border-gray-300 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400 dark:border-e-gray-700 dark:last:border-e-gray-600"
      },
      tinted: {
        base: "border-gray-300 dark:border-gray-500 dark:bg-gray-500 dark:text-gray-300 dark:border-e-gray-600 dark:last:border-e-gray-500"
      }
    },
    grouped: {
      true: { base: "not-first:-ms-px" },
      false: {}
    }
  },
  defaultVariants: {
    size: "md",
    background: "base",
    grouped: false
  }
});
