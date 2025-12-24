import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme/themeUtils";

// Variants
export type GalleryVariants = VariantProps<typeof gallery> & Classes<typeof gallery>;

export const gallery = tv({
  slots: {
    image: "h-auto max-w-full rounded-base",
    div: "grid"
  }
});
