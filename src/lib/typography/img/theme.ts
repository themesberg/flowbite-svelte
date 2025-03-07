import { tv, type VariantProps } from "tailwind-variants";

export type ImgVariants = VariantProps<typeof img>;

export const img = tv({
  slots: {
    base: "max-w-full h-auto",
    figure: "",
    figureCaption: "mt-2 text-sm text-center text-gray-500 dark:text-gray-400"
  },
  variants: {
    size: {
      xs: { base: "max-w-xs", figure: "max-w-xs" },
      sm: { base: "max-w-sm", figure: "max-w-sm" },
      md: { base: "max-w-md", figure: "max-w-md" },
      lg: { base: "max-w-lg", figure: "max-w-lg" },
      xl: { base: "max-w-xl", figure: "max-w-xl" },
      "2xl": { base: "max-w-2xl", figure: "max-w-2xl" },
      full: { base: "max-w-full", figure: "max-w-full" },
      none: { base: "", figure: "" }
    },
    effect: {
      grayscale: {
        base: "cursor-pointer rounded-lg grayscale filter transition-all duration-300 hover:grayscale-0"
      },
      blur: { base: "blur-xs transition-all duration-300 hover:blur-none" },
      invert: {
        base: "invert filter transition-all duration-300 hover:invert-0"
      },
      sepia: {
        base: "sepia filter transition-all duration-300 hover:sepia-0"
      },
      saturate: {
        base: "saturate-50 filter transition-all duration-300 hover:saturate-100"
      },
      "hue-rotate": {
        base: "hue-rotate-60 filter transition-all duration-300 hover:hue-rotate-0"
      },
      none: {
        base: "transition-all duration-300"
      }
    },
  }
});
