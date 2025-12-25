import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme/themeUtils";

export type ListgroupVariants = VariantProps<typeof listGroup> & Classes<typeof listGroup>;
export type ListgroupItemVariants = VariantProps<typeof listGroupItem> & Classes<typeof listGroupItem>;

export const listGroup = tv({
  slots: {
    base: "flex bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 divide-gray-200 dark:divide-gray-600",
    item: "",
    icon: ""
  },
  variants: {
    rounded: {
      true: { base: "rounded-lg" },
      false: { base: "" }
    },
    border: {
      true: { base: "border border-gray-200 dark:border-gray-700" },
      false: { base: "" }
    },
    horizontal: {
      true: { base: "flex-row divide-x" },
      false: { base: "flex-col divide-y" }
    }
  },
  compoundVariants: [
    {
      border: true,
      class: { base: "divide-gray-200 dark:divide-gray-700" }
    }
  ],
  defaultVariants: {
    rounded: true,
    border: true,
    horizontal: false
  }
});

export const listGroupItem = tv({
  slots: {
    base: "py-2 px-4 w-full text-sm font-medium list-none flex items-center text-left gap-2",
    icon: "me-2.5 h-15 w-15"
  },
  variants: {
    state: {
      normal: "",
      current: "text-white bg-primary-700 dark:text-white dark:bg-gray-800",
      disabled: "text-gray-900 bg-gray-100 dark:bg-gray-600 dark:text-gray-400 opacity-50"
    },
    active: {
      true: "",
      false: ""
    },
    horizontal: {
      true: "first:rounded-s-lg last:rounded-e-lg",
      false: "first:rounded-t-lg last:rounded-b-lg"
    }
  },
  compoundVariants: [
    {
      active: true,
      state: "disabled",
      class: "cursor-not-allowed"
    },
    {
      active: true,
      state: "normal",
      class:
        "hover:bg-gray-100 hover:text-primary-700 dark:hover:bg-gray-600 dark:hover:text-white focus:z-40 focus:outline-hidden focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:focus:ring-gray-500 dark:focus:text-white"
    }
    // {
    //   horizontal: true,
    //   class: "focus:first:rounded-s-lg focus:last:rounded-e-lg"
    // },
    // {
    //   horizontal: false,
    //   class: "focus:first:rounded-t-lg focus:last:rounded-b-lg"
    // }
  ]
});
