import type { Classes } from "$lib/theme/themeUtils";
import { tv, type VariantProps } from "tailwind-variants";

// Variants
export type AccordionVariants = VariantProps<typeof accordion>;
export type AccordionItemVariants = VariantProps<typeof accordionItem> & Classes<typeof accordionItem>;
/**
 AccordionItemVariants:
{
  flush?: boolean;
  open?: boolean;
  classes?: {
    button?: ClassValue;
    contentWrapper?: ClassValue;
    content?: ClassValue;
    active?: ClassValue;
    inactive?: ClassValue;
  }
}
  */

export const accordion = tv({
  base: "rounded-base border border-default overflow-hidden",
  variants: {
    flush: {
      true: "border-0",
      false: "shadow-xs"
    }
  }
});

export const accordionItem = tv({
  slots: {
    base: "group",
    button: "flex items-center justify-between w-full p-5 font-medium rtl:text-right text-body group-first:rounded-t-base border border-t-0 border-x-0 border-b-default gap-3",
    contentWrapper: "",
    content: "p-4 md:p-5 group-last:border group-last:border-t-default group-last:border-x-0",
    active: "",
    inactive: ""
  },
  variants: {
    flush: {
      true: {
        button: "border-0 border-b border-default",
        contentWrapper: "",
        content: "py-5 border-b border-default text-body"
      },
      false: {
        button: "rounded-t-base hover:text-heading hover:bg-neutral-secondary-medium",
        contentWrapper: "border border-s-0 border-e-0 border-t-0 border-b-default",
        content: "p-4 md:p-5"
      }
    },
    open: {
      true: {},
      false: {}
    }
  },
  compoundVariants: [
    {
      flush: true,
      open: true,
      class: {
        button: "text-heading"
      }
    },
    {
      flush: true,
      open: false,
      class: {
        button: "text-body"
      }
    }
  ],
  defaultVariants: {
    flush: false,
    open: false
  }
});
