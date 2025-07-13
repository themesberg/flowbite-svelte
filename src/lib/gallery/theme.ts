import { tv } from "tailwind-variants";
const gallery = tv({
  slots: {
    image: "h-auto max-w-full rounded-lg",
    div: "grid"
  }
});

export { gallery };

export type GallerySlots = keyof typeof gallery.slots;
export type GalleryTheme = Partial<Record<GallerySlots, string>>;