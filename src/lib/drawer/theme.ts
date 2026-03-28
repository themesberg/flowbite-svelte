import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";
import { dialog } from "$lib/dialog/theme";

export type DrawerVariants = VariantProps<typeof drawer> & Classes<typeof drawer> & Classes<typeof dialog>;

export const drawer = tv({
  extend: dialog,
  slots: {
    base: "p-4 max-h-none max-w-none bg-neutral-primary-soft transform-gpu will-change-transform"
  },
  variants: {
    placement: {
      left: { base: "me-auto h-full border-e border-default" },
      right: { base: "ms-auto h-full border-s border-default" },
      top: { base: "mb-auto w-full! border-b border-default" },
      bottom: { base: "mt-auto w-full! border-t border-default" }
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
    closeButton: "text-body bg-transparent hover:text-heading hover:bg-neutral-tertiary rounded-base w-9 h-9 absolute top-2.5 end-2.5 flex items-center justify-center",
    closeIcon: "w-5 h-5"
  }
});

export type DrawerHandleVariants = VariantProps<typeof drawerhandle> & Classes<typeof drawerhandle>;

export const drawerhandle = tv({
  slots: {
    base: "p-4 absolute flex select-none cursor-grab active:cursor-grabbing focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 dark:focus-visible:ring-gray-500",
    handle: "absolute rounded-lg bg-neutral-quaternary"
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
