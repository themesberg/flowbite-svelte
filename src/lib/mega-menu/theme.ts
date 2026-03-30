import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Variants
export type MegaMenuVariants = VariantProps<typeof megamenu> & Classes<typeof megamenu>;

export const megamenu = tv({
  slots: {
    base: "w-fit min-w-[520px] bg-neutral-primary-soft shadow text-body rounded-base border border-default divide-default",
    content: "flex flex-col md:flex-row p-4 max-w-(--breakpoint-md) justify-center mx-auto mt-2",
    list: "grid grid-flow-row gap-y-4 gap-x-6 auto-col-max auto-row-max grid-cols-2 md:grid-cols-3 text-sm font-medium",
    footer: "md:w-1/3 mt-4 md:mt-0"
  },
  variants: {
    full: {
      true: { base: "border-y shadow-xs w-full ml-0 rounded-none" }
    },
    hasAddon: {
      true: {}
    }
  },
  compoundVariants: [
    {
      full: true,
      hasAddon: true,
      class: { list: "grid-cols-2 md:w-2/3" }
    }
  ]
});
