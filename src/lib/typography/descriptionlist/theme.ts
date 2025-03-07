import { tv, type VariantProps } from "tailwind-variants";

export type DescriptionListVariants = VariantProps<typeof descriptionList>;

export const descriptionList = tv({
  variants: {
    tag: {
      dt: "text-gray-500 md:text-lg dark:text-gray-400",
      dd: "text-lg font-semibold"
    }
  },
  defaultVariants: {
    tag: "dt"
  }
});
