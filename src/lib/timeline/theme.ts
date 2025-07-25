import { tv, type VariantProps } from "tailwind-variants";
import type { ClassValue } from "svelte/elements";
import type { Classes } from "$lib/theme/themeUtils";

// Variants 
export type TimelineVariants = VariantProps<typeof timeline>;
export type ActivityItemVariants = VariantProps<typeof activityItem> & Classes<typeof activityItem>;
export type GroupVariants = VariantProps<typeof group> & Classes<typeof group>;
export type GroupItemVariants = VariantProps<typeof groupItem> & Classes<typeof groupItem>;
export type TimelineItemVariants = VariantProps<typeof timelineItem> & Classes<typeof timelineItem>;

// Theme
export type ActivityTheme = ClassValue;
export type ActivityItemSlots = keyof typeof activityItem.slots;
export type ActivityItemTheme = Partial<Record<ActivityItemSlots, ClassValue>>;
export type GroupSlots = keyof typeof group.slots;
export type GroupTheme = Partial<Record<GroupSlots, ClassValue>>;
export type GroupItemSlots = keyof typeof groupItem.slots;
export type GroupItemTheme = Partial<Record<GroupItemSlots, ClassValue>>;
export type TimelineTheme = ClassValue;
export type TimelineItemSlots = keyof typeof timelineItem.slots;
export type TimelineItemTheme = Partial<Record<TimelineItemSlots, ClassValue>>;

export const activity = tv({
  base: "relative border-s border-gray-200 dark:border-gray-700"
});

export const activityItem = tv({
  slots: {
    li: "mb-10 ms-6",
    span: "flex absolute -start-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900",
    img: "rounded-full shadow-lg",
    outer: "p-4 bg-white rounded-lg border border-gray-200 shadow-xs dark:bg-gray-700 dark:border-gray-600",
    inner: "justify-between items-center mb-3 sm:flex",
    time: "mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0",
    title: "text-sm font-normal text-gray-500 lex dark:text-gray-300",
    text: "p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300"
  }
});

export const group = tv({
  slots: {
    div: "p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700",
    time: "text-lg font-semibold text-gray-900 dark:text-white",
    ol: "mt-3 divide-y divider-gray-200 dark:divide-gray-700"
  }
});

export const groupItem = tv({
  slots: {
    base: '',
    a: "block items-center p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700",
    img: "me-3 mb-3 w-12 h-12 rounded-full sm:mb-0",
    div: "text-gray-600 dark:text-gray-400",
    title: "text-base font-normal",
    span: "inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400",
    svg: "me-1 h-3 w-3"
  }
});

export const timeline = tv({
  variants: {
    order: {
      group: "p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700",
      horizontal: "sm:flex",
      activity: "relative border-s border-gray-200 dark:border-gray-700",
      vertical: "relative border-s border-gray-200 dark:border-gray-700",
      default: "relative border-s border-gray-200 dark:border-gray-700"
    }
  },
  defaultVariants: {
    order: "default"
  }
});

export const timelineItem = tv({
  slots: {
    base: "",
    div: "",
    time: "",
    h3: "",
    svg: "w-3 h-3 text-primary-600 dark:text-primary-400"
  },
  variants: {
    order: {
      default: {
        base: "mb-10 ms-4",
        div: "absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700",
        time: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
        h3: "text-lg font-semibold text-gray-900 dark:text-white"
      },
      vertical: {
        base: "mb-10 ms-6",
        div: "flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900",
        time: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
        h3: "flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
      },
      horizontal: {
        base: "relative mb-6 sm:mb-0",
        div: "flex items-center",
        time: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
        h3: "text-lg font-semibold text-gray-900 dark:text-white"
      },
      activity: {
        base: "mb-10 ms-6",
        div: "flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900",
        time: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
        h3: "text-lg font-semibold text-gray-900 dark:text-white"
      },
      group: {
        base: "",
        div: "p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700",
        time: "text-lg font-semibold text-gray-900 dark:text-white",
        h3: "text-lg font-semibold text-gray-900 dark:text-white"
      }
    }
  },
  defaultVariants: {
    order: "default"
  }
});
