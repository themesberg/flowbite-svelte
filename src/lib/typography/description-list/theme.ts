import { tv, type VariantProps } from "tailwind-variants";

export type DescriptionListVariants = VariantProps<typeof descriptionList>;

export const descriptionList = tv({
  variants: {
    tag: {
      dt: "text-body md:text-lg",
      dd: "text-heading text-lg font-semibold"
    }
  },
  defaultVariants: {
    tag: "dt"
  }
});
