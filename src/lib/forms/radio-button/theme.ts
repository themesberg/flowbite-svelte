import { tv, type VariantProps } from "tailwind-variants";
export const radioButton = tv({
  base: "",
  variants: {
    inline: {
      true: "inline-flex",
      false: "flex"
    }
  },
  defaultVariants: {
    inline: true
  }
});
