import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

export const virtualMasonry = tv({
  slots: {
    base: "overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent",
    spacer: "relative",
    content: "relative w-full",
    item: ""
  },
  variants: {
    contained: {
      true: { item: "[contain:layout_style_paint]" },
      false: {}
    }
  },
  defaultVariants: {
    contained: false
  }
});

// Variants
export type VirtualMasonryVariants = VariantProps<typeof virtualMasonry> & Classes<typeof virtualMasonry>;
