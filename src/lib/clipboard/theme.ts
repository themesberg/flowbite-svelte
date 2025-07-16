import { tv, type VariantProps } from "tailwind-variants";
import type { ClassValue } from "svelte/elements";

export type ClipboardVariants = VariantProps<typeof clipboard>;

export const clipboard = tv({
  base: "gap-2",
  variants: {
    embedded: {
      true: "px-1 py-1 focus-within:ring-0 bg-transparent hover:bg-transparent text-inherit",
      false: ""
    }
  },
  defaultVariants: {
    embedded: false
  }
});

export type ClipboardTheme = ClassValue;
