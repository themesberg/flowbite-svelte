import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Variants
export type SearchVariants = VariantProps<typeof search> & Classes<typeof search>;

export const search = tv({
  slots: {
    base: "relative w-full",
    iconWrapper: "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none",
    icon: "text-body",
    rightContent: "absolute inset-y-0 end-0 flex items-center text-body",
    input:
      "block w-full bg-neutral-secondary-medium border border-default-medium text-heading rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body disabled:cursor-not-allowed disabled:opacity-50",
    close: "absolute right-2 top-1/2 -translate-y-1/2 text-body hover:text-heading",
    closeIcon: ""
  },
  variants: {
    size: {
      sm: {
        input: "text-xs p-2 ps-9 pe-9 ",
        icon: "w-3 h-3"
        // leftDiv: 'ps-2.5',
      },
      md: {
        input: "text-sm p-2.5 ps-10 pe-10",
        icon: "w-4 h-4"
        // leftDiv: 'ps-10',
      },
      lg: {
        input: "sm:text-base p-3 ps-11 pe-11",
        icon: "w-6 h-6"
        // leftDiv: 'ps-11',
      }
    }
  },
  defaultVariants: {
    size: "lg"
  }
});
