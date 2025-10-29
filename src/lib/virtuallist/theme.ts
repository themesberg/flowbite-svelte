import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme/themeUtils";

// Variants
export type VirtualListVariants = VariantProps<typeof virtualList> & Classes<typeof virtualList>;

export const virtualList = tv({
  slots: {
    container: "overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent",
    spacer: "relative",
    content: "absolute top-0 left-0 right-0",
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
