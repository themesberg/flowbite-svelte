import { tv, type VariantProps } from "tailwind-variants";
import type { ClassValue } from "svelte/elements";

export type ListVariants = VariantProps<typeof list>;

export const list = tv({
  base: "",
  variants: {
    tag: {
      ul: "list-disc",
      dl: "list-none",
      ol: "list-decimal"
    },
    position: {
      inside: "list-inside",
      outside: "list-outside"
    }
  },
  defaultVariants: {
    position: "inside",
    tag: "ul"
  }
});

export type ListTheme = ClassValue;
