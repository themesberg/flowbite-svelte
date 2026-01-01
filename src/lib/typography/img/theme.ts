import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Variants
export type ImgVariants = VariantProps<typeof img> & Classes<typeof img>;

export const img = tv({
  slots: {
    image: "max-w-full h-auto",
    base: "",
    caption: "mt-2 text-sm text-center text-gray-500 dark:text-gray-400"
  },
  variants: {
    size: {
      xs: { image: "max-w-xs", base: "max-w-xs" },
      sm: { image: "max-w-sm", base: "max-w-sm" },
      md: { image: "max-w-md", base: "max-w-md" },
      lg: { image: "max-w-lg", base: "max-w-lg" },
      xl: { image: "max-w-xl", base: "max-w-xl" },
      "2xl": { image: "max-w-2xl", base: "max-w-2xl" },
      full: { image: "max-w-full", base: "max-w-full" }
    },
    effect: {
      grayscale: {
        image: "cursor-pointer rounded-lg grayscale filter transition-all duration-300 hover:grayscale-0"
      },
      blur: { image: "blur-xs transition-all duration-300 hover:blur-none" },
      invert: {
        image: "invert filter transition-all duration-300 hover:invert-0"
      },
      sepia: {
        image: "sepia filter transition-all duration-300 hover:sepia-0"
      },
      saturate: {
        image: "saturate-50 filter transition-all duration-300 hover:saturate-100"
      },
      "hue-rotate": {
        image: "hue-rotate-60 filter transition-all duration-300 hover:hue-rotate-0"
      }
    },
    align: {
      left: { image: "mx-0", base: "mx-0" },
      center: { image: "mx-auto", base: "mx-auto" },
      right: { image: "ml-auto mr-0", base: "ml-auto mr-0" }
    }
  }
});
