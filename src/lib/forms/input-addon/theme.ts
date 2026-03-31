import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

export type InputAddonVariants = VariantProps<typeof inputAddon> & Classes<typeof inputAddon>;

export const inputAddon = tv({
  slots: {
    base: "text-body bg-neutral-secondary-medium inline-flex items-center border first:rounded-s-base last:rounded-e-base"
  },
  variants: {
    size: {
      sm: { base: "sm:text-xs px-2" },
      md: { base: "text-sm px-3" },
      lg: { base: "sm:text-base px-4" }
    },
    background: {
      base: {
        base: "border-default-medium"
      },
      tinted: {
        base: "border-default"
      }
    },
    grouped: {
      true: { base: "not-first:-ms-px" },
      false: {}
    }
  },
  defaultVariants: {
    size: "md",
    background: "base",
    grouped: false
  }
});
