import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

export type DialogVariants = VariantProps<typeof dialog> & Classes<typeof dialog>;

export const dialog = tv({
  slots: {
    base: "backdrop:bg-gray-900/50 open:flex flex-col bg-white dark:bg-gray-800",
    form: "flex flex-col w-full border-inherit dark:border-inherit divide-inherit dark:divide-inherit",
    close: "absolute top-2.5 end-2.5"
  },
  variants: {
    // position: {
    //     fixed: { base: "fixed" },
    //     absolute: { base: "absolute" }
    // },
  },
  defaultVariants: {
    // position: "fixed"
  }
});
