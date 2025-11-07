import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme/themeUtils";

// Variants
export type VirtualMasonryVariants = VariantProps<typeof virtualMasonry> & Classes<typeof virtualMasonry>;

export const virtualMasonry = tv({
  slots: {
    container: "overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent",
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