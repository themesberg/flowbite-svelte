import { tv, type VariantProps } from "tailwind-variants";

// Variants
export type ButtonGroupVariants = VariantProps<typeof buttonGroup>;

export const buttonGroup = tv({
  base: "inline-flex rounded-lg shadow-xs",
  variants: {
    size: {
      sm: "",
      md: "",
      lg: ""
    }
  },
  defaultVariants: {
    size: "md"
  }
});
