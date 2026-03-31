import { tv, type VariantProps } from "tailwind-variants";

export type ListVariants = VariantProps<typeof list>;

export const list = tv({
  base: "text-body",
  variants: {
    tag: {
      ul: "list-disc",
      dl: "[&>*]:list-none list-none",
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
