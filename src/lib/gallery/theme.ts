import { tv, type VariantProps } from "tailwind-variants";
import type { ClassValue } from "svelte/elements";
import type { Classes } from "$lib/theme/themeUtils";

// Variants
export type GalleryVariants = VariantProps<typeof gallery> & Classes<typeof gallery>;
// Theme
export type GallerySlots = keyof typeof gallery.slots;
export type GalleryTheme = Partial<Record<GallerySlots, ClassValue>>;

export const gallery = tv({
  slots: {
    image: "h-auto max-w-full rounded-lg",
    div: "grid"
  }
});
