import { tv, type VariantProps } from "tailwind-variants";

export type DrawerVariants = VariantProps<typeof drawer>;

export const drawer = tv({
  slots: {
    base: "overflow-y-auto z-50 p-4 bg-white dark:bg-gray-800",
    backdrop: "fixed top-0 start-0 z-50 w-full h-full"
  },
  variants: {
    position: {
      fixed: { base: "fixed", backdrop: "fixed" },
      absolute: { base: "absolute", backdrop: "absolute" }
    },
    placement: {
      left: { base: "inset-y-0 start-0" },
      right: { base: "inset-y-0 end-0" },
      top: { base: "inset-x-0 top-0" },
      bottom: { base: "inset-x-0 bottom-0" }
    },
    width: {
      default: { base: "w-80" },
      full: { base: "w-full" },
      half: { base: "w-1/2" }
    },
    backdrop: {
      true: { backdrop: "bg-gray-900 opacity-75" }
    }
  },
  defaultVariants: {
    position: "fixed",
    placement: "left",
    width: "default"
  }
});

export const drawerhead = tv({
  slots: {
    base: "flex items-center justify-between",
    button: "ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
    svg: "h-4 w-4"
  }
});

export type DrawerSlots = keyof typeof drawer.slots;
export type DrawerTheme = Partial<Record<DrawerSlots, string>>;

export type DrawerHeadSlots = keyof typeof drawerhead.slots;
export type DrawerHeadTheme = Partial<Record<DrawerHeadSlots, string>>;
