import { tv, type VariantProps } from "tailwind-variants";
import type { ClassValue } from "svelte/elements";

export type HeadingVariants = VariantProps<typeof heading>;

export const heading = tv({
  base: "font-bold text-gray-900 dark:text-white",
  variants: {
    tag: {
      h1: "text-5xl font-extrabold",
      h2: "text-4xl",
      h3: "text-3xl",
      h4: "text-2xl",
      h5: "text-xl",
      h6: "text-lg"
    }
  },
  defaultVariants: {
    tag: "h1"
  }
});

export type HeadingTheme = ClassValue;
