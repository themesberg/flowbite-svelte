import type { Classes } from "$lib/theme/themeUtils";
import type { ClassValue } from "svelte/elements";
import { tv, type VariantProps } from "tailwind-variants";

export type AccordionVariants = VariantProps<typeof accordion>;
export type AccordionItemVariants = VariantProps<typeof accordionItem> & Classes<typeof accordionItem>;

export const accordion = tv({
  base: "w-full",
  variants: {
    color: {
      primary: "text-primary-500 dark:text-primary-400",
      secondary: "text-secondary-500 dark:text-secondary-400"
    },
    flush: {
      true: "",
      false: "border border-gray-200 dark:border-gray-700 rounded-t-xl"
    }
  }
});

export const accordionItem = tv({
  slots: {
    base: "group",
    button: "flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl border-gray-200 dark:border-gray-700 border-b",
    content: "border-b border-gray-200 dark:border-gray-700",
    active: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800",
    inactive: "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
  },
  variants: {
    flush: {
      true: {
        button: "py-5",
        content: "py-5"
      },
      false: {
        button: "p-5 border-s border-e group-first:border-t",
        content: "p-5 border-s border-e"
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
        button: "text-gray-900 dark:text-white"
      }
    },
    {
      flush: true,
      open: false,
      class: {
        button: "text-gray-500 dark:text-gray-400"
      }
    }
  ],
  defaultVariants: {
    flush: false,
    open: false
  }
});

export type AccordionTheme = ClassValue;

export type AccordionItemSlots = keyof typeof accordionItem.slots;
export type AccordionItemTheme = Partial<Record<AccordionItemSlots, ClassValue>>;
