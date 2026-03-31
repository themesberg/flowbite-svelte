import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Variants
export type HrVariants = VariantProps<typeof hr> & Classes<typeof hr>;

export const hr = tv({
  slots: {
    base: "h-px my-8 border-0 bg-neutral-quaternary",
    wrapper: "relative inline-flex items-center justify-center w-full",
    content: "absolute px-4 -translate-x-1/2 rtl:translate-x-1/2 bg-neutral-primary start-1/2",
    bg: ""
  },
  variants: {
    withChildren: {
      true: {
        base: "w-full"
      }
    }
  },
  defaultVariants: {
    withChildren: false
  }
});
