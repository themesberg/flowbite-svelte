import { tv, type VariantProps } from "tailwind-variants";

// Variants
export type ButtonGroupVariants = VariantProps<typeof buttonGroup>;

export const buttonGroup = tv({
  base: "inline-flex rounded-lg shadow-xs",
  variants: {
    size: {
      sm: "scale-90",
      md: "scale-100",
      lg: "scale-110"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
