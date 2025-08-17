import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme/themeUtils";
import { dialog } from "$lib/dialog/theme";

export type DrawerVariants = VariantProps<typeof drawer> & Classes<typeof drawer> & Classes<typeof dialog>;

export const drawer = tv({
  extend: dialog,
  slots: {
    base: "p-4 max-h-none max-w-none",
    handle: "absolute h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-gray-300 dark:bg-gray-600"
  },
  variants: {
    placement: {
      left: { base: "me-auto h-full !left-0", handle: "right-3 top-1/2 h-8" },
      right: { base: "ms-auto h-full", handle: "left-3 top-1/2 h-8" },
      top: { base: "mb-auto !w-full", handle: "left-1/2 bottom-3 w-8" },
      bottom: { base: "mt-auto !w-full", handle: "left-1/2 top-3 w-8" }
    },
    width: {
      default: { base: "w-80" },
      full: { base: "w-full" },
      half: { base: "w-1/2" }
    },
    modal: {
      false: { base: "fixed inset-0" },
      true: { base: "" }
    }
  },
  defaultVariants: {
    placement: "left",
    width: "default"
  }
});

export type DrawerheadVariants = VariantProps<typeof drawerhead> & Classes<typeof drawerhead>;

export const drawerhead = tv({
  slots: {
    base: "flex items-center justify-between",
    button: "ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
    svg: "h-4 w-4"
  }
});
