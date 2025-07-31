import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme/themeUtils";

// Variants
export type HrVariants = VariantProps<typeof hr> & Classes<typeof hr>;

export const hr = tv({
  slots: {
    base: "h-px my-8 bg-gray-200 border-0 dark:bg-gray-700",
    div: "inline-flex items-center justify-center w-full",
    content: "absolute px-4 -translate-x-1/2 rtl:translate-x-1/2 bg-white start-1/2 dark:bg-gray-900"
  },
  variants: {
    withChildren: {
      true: {
        base: "w-full",
        container: "relative"
      }
    }
  },
  defaultVariants: {
    withChildren: false
  }
});
