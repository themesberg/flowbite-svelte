import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

export type DarkmodeVariants = VariantProps<typeof darkmode> & Classes<typeof darkmode>;

export const darkmode = tv({
  slots: {
    base: "inline-flex hover:text-heading items-center justify-center text-body w-8 h-8 hover:bg-neutral-secondary-soft focus:outline-none focus:ring-2 focus:ring-neutral-tertiary rounded-base text-sm p-2",
    icon: ""
  }
});
