import { tv, type VariantProps } from "tailwind-variants";

export type BlockquoteVariants = VariantProps<typeof blockquote>;

export const blockquote = tv({
  base: "font-semibold text-heading",
  variants: {
    border: {
      true: "border-s-4 border-default",
      false: ""
    },
    italic: {
      true: "italic",
      false: ""
    },
    bg: {
      true: "bg-neutral-secondary-soft",
      false: ""
    },
    alignment: {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
      "8xl": "text-8xl",
      "9xl": "text-9xl"
    }
  },
  defaultVariants: {
    border: false,
    italic: true,
    bg: false,
    alignment: "left",
    size: "lg"
  }
});
