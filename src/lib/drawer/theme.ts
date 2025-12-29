import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme/themeUtils";
import { dialog } from "$lib/dialog/theme";

export type DrawerVariants = VariantProps<typeof drawer> & Classes<typeof drawer> & Classes<typeof dialog>;

export const drawer = tv({
  extend: dialog,
  slots: {
    base: "p-4 max-h-none max-w-none border border-gray-200 dark:border-gray-700 transform-gpu will-change-transform"
  },
  variants: {
    placement: {
      left: { base: "me-auto h-full" },
      right: { base: "ms-auto h-full" },
      top: { base: "mb-auto w-full!" },
      bottom: { base: "mt-auto w-full!" }
    },
    width: {
      default: { base: "w-80" },
      full: { base: "w-full" },
      half: { base: "w-1/2" }
    },
    modal: {
      false: { base: "fixed inset-0" },
      true: { base: "" }
    },
    shifted: {
      true: {},
      false: {}
    }
  },
  compoundVariants: [
    {
      shifted: false,
      modal: false,
      class: { base: "z-50" }
    },
    {
      shifted: true,
      placement: "left",
      class: { base: "-translate-x-full" }
    },
    {
      shifted: true,
      placement: "right",
      class: { base: "translate-x-full" }
    },
    {
      shifted: true,
      placement: "top",
      class: { base: "-translate-y-full" }
    },
    {
      shifted: true,
      placement: "bottom",
      class: { base: "translate-y-full" }
    }
  ],
  defaultVariants: {
    placement: "left",
    width: "default",
    modal: true
  }
});

export type DrawerheadVariants = VariantProps<typeof drawerhead> & Classes<typeof drawerhead>;

export const drawerhead = tv({
  slots: {
    base: "flex items-center justify-between",
    button:
      "ms-auto inline-flex h-8 w-8 items-center justify-center rounded-base bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
    svg: "h-4 w-4"
  }
});

export type DrawerHandleVariants = VariantProps<typeof drawerhandle> & Classes<typeof drawerhandle>;

export const drawerhandle = tv({
  slots: {
    base: "p-4 absolute flex select-none cursor-grab active:cursor-grabbing focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 dark:focus-visible:ring-gray-500",
    handle: "absolute rounded-lg bg-gray-300 dark:bg-gray-600"
  },
  variants: {
    placement: {
      left: { base: "inset-y-0 right-0 touch-pan-x", handle: "w-1 h-8 top-1/2 -translate-y-1/2" },
      right: { base: "inset-y-0 left-0 touch-pan-x", handle: "w-1 h-8 top-1/2 -translate-y-1/2" },
      top: { base: "inset-x-0 bottom-0 touch-pan-y", handle: "w-8 h-1 left-1/2 -translate-x-1/2" },
      bottom: { base: "inset-x-0 top-0 touch-pan-y", handle: "w-8 h-1 left-1/2 -translate-x-1/2" }
    }
  }
});
