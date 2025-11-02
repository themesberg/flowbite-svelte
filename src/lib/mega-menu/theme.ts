import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme/themeUtils";

// Variants
export type MegaMenuVariants = VariantProps<typeof megamenu> & Classes<typeof megamenu>;

export const megamenu = tv({
  slots: {
    base: "w-fit bg-white shadow-md dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg border border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600",
    div: "flex flex-col md:flex-row p-4 max-w-(--breakpoint-md) justify-center mx-auto mt-2",
    ul: "grid grid-flow-row gap-y-4 md:gap-x-0 auto-col-max auto-row-max grid-cols-2 md:grid-cols-3 text-sm font-medium",
    extra: "md:w-1/3 mt-4 md:mt-0"
  },
  variants: {
    full: {
      true: { base: "border-y shadow-xs w-full ml-0 rounded-none" }
    },
    hasExtra: {
      true: {}
    }
  },
  compoundVariants: [
    {
      full: true,
      hasExtra: true,
      class: { ul: "grid-cols-2 md:w-2/3" }
    }
  ]
});
