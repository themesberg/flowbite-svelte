import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

export type ListgroupVariants = VariantProps<typeof listGroup> & Classes<typeof listGroup>;
export type ListgroupItemVariants = VariantProps<typeof listGroupItem> & Classes<typeof listGroupItem>;

export const listGroup = tv({
  slots: {
    base: "flex bg-neutral-primary-soft text-heading divide-default",
    item: "",
    icon: ""
  },
  variants: {
    rounded: {
      true: { base: "rounded-base" },
      false: { base: "" }
    },
    border: {
      true: { base: "border border-default" },
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
      class: { base: "" }
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
    icon: "w-4 h-4 me-1.5"
  },
  variants: {
    state: {
      normal: "",
      current: "text-fg-brand bg-neutral-secondary-medium",
      disabled: "text-fg-disabled"
    },
    active: {
      true: "",
      false: ""
    },
    horizontal: {
      true: "first:rounded-s-base last:rounded-e-base",
      false: "first:rounded-t-base last:rounded-b-base"
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
      class: "hover:bg-neutral-secondary-medium hover:text-fg-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:text-fg-brand"
    }
  ]
});
