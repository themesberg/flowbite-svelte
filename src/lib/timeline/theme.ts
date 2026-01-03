import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Variants
export type TimelineVariants = VariantProps<typeof timeline>;
export type ActivityItemVariants = VariantProps<typeof activityItem> & Classes<typeof activityItem>;
export type GroupVariants = VariantProps<typeof group> & Classes<typeof group>;
export type GroupItemVariants = VariantProps<typeof groupItem> & Classes<typeof groupItem>;
export type TimelineItemVariants = VariantProps<typeof timelineItem> & Classes<typeof timelineItem>;

export const activity = tv({
  base: "relative border-s border-gray-200 dark:border-gray-700"
});

export const activityItem = tv({
  slots: {
    item: "mb-10 ms-6",
    indicator: "flex absolute -start-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900",
    img: "rounded-full shadow-lg",
    card: "p-4 bg-white rounded-lg border border-gray-200 shadow-xs dark:bg-gray-700 dark:border-gray-600",
    header: "justify-between items-center mb-3 sm:flex",
    time: "mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0",
    title: "text-sm font-normal text-gray-500 lex dark:text-gray-300",
    text: "p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300"
  }
});

export const group = tv({
  slots: {
    card: "p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700",
    time: "text-lg font-semibold text-gray-900 dark:text-white",
    list: "mt-3 divide-y divider-gray-200 dark:divide-gray-700"
  }
});

export const groupItem = tv({
  slots: {
    base: "",
    link: "block items-center p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700",
    img: "me-3 mb-3 w-12 h-12 rounded-full sm:mb-0",
    content: "text-gray-600 dark:text-gray-400",
    title: "text-base font-normal",
    badge: "inline-flex items-center bg-gray-100 border border-gray-200 text-xs font-medium px-1.5 py-0.5 rounded",
    icon: "me-1 h-3 w-3"
  }
});

const colorVariants = {
  primary: {
    dot: "bg-primary-200 dark:bg-primary-900",
    ring: "ring-white dark:ring-gray-900",
    icon: "text-primary-600 dark:text-primary-400",
    connector: "border-primary-200 dark:border-primary-700"
  },
  green: {
    dot: "bg-green-200 dark:bg-green-900",
    ring: "ring-white dark:ring-gray-900",
    icon: "text-green-600 dark:text-green-400",
    connector: "border-green-200 dark:border-green-700"
  },
  orange: {
    dot: "bg-orange-200 dark:bg-orange-900",
    ring: "ring-white dark:ring-gray-900",
    icon: "text-orange-600 dark:text-orange-400",
    connector: "border-orange-200 dark:border-orange-700"
  },
  red: {
    dot: "bg-red-200 dark:bg-red-900",
    ring: "ring-white dark:ring-gray-900",
    icon: "text-red-600 dark:text-red-400",
    connector: "border-red-200 dark:border-red-700"
  },
  blue: {
    dot: "bg-blue-200 dark:bg-blue-900",
    ring: "ring-white dark:ring-gray-900",
    icon: "text-blue-600 dark:text-blue-400",
    connector: "border-blue-200 dark:border-blue-700"
  },
  purple: {
    dot: "bg-purple-200 dark:bg-purple-900",
    ring: "ring-white dark:ring-gray-900",
    icon: "text-purple-600 dark:text-purple-400",
    connector: "border-purple-200 dark:border-purple-700"
  },
  gray: {
    dot: "bg-gray-200 dark:bg-gray-700",
    ring: "ring-white dark:ring-gray-900",
    icon: "text-gray-600 dark:text-gray-400",
    connector: "border-gray-200 dark:border-gray-700"
  }
};

export const timeline = tv({
  variants: {
    order: {
      group: "p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700",
      horizontal: "sm:flex",
      activity: "relative",
      vertical: "relative",
      default: "relative border-s border-gray-200 dark:border-gray-700"
    }
  },
  defaultVariants: {
    order: "default"
  }
});

export const timelineItem = tv({
  slots: {
    base: "relative",
    indicator: "",
    dot: "absolute w-2 h-2 bg-gray-200 rounded-full mt-1.5 -start-5 border border-buffer",
    time: "",
    title: "",
    icon: "w-4 h-4",
    connector: "absolute top-6 left-3 w-px h-full"
  },
  variants: {
    order: {
      default: {
        base: "mb-10 ms-4",
        indicator: "absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700",
        time: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
        title: "text-lg font-semibold text-gray-900 dark:text-white"
      },
      vertical: {
        base: "mb-10 ms-6 relative",
        indicator: "flex absolute -left-4 top-1.5 justify-center items-center w-6 h-6 rounded-full ring-8",
        time: "mb-1 pl-4 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
        title: "flex ml-4 items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white",
        connector: "absolute top-7 -left-1.5 w-px h-full"
      },
      horizontal: {
        base: "relative mb-6 sm:mb-0",
        indicator: "flex items-center",
        time: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
        title: "text-lg font-semibold text-gray-900 dark:text-white"
      },
      activity: {
        base: "mb-10 ms-6 relative",
        indicator: "flex absolute -left-4 top-1.5 justify-center items-center w-6 h-6 rounded-full ring-8",
        time: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
        title: "text-lg font-semibold text-gray-900 dark:text-white",
        connector: "absolute top-7 -left-4 w-px h-full"
      },
      group: {
        base: "",
        indicator: "p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700",
        time: "text-lg font-semibold text-gray-900 dark:text-white",
        title: "text-lg font-semibold text-gray-900 dark:text-white"
      }
    },
    color: {
      primary: {},
      green: {},
      orange: {},
      red: {},
      blue: {},
      purple: {},
      gray: {}
    },
    isLast: {
      true: {},
      false: {}
    }
  },
  compoundVariants: [
    // Vertical color variants
    {
      order: "vertical",
      color: "primary",
      class: {
        indicator: colorVariants.primary.dot + " " + colorVariants.primary.ring,
        icon: colorVariants.primary.icon,
        connector: "bg-primary-200 dark:bg-primary-700"
      }
    },
    {
      order: "vertical",
      color: "green",
      class: {
        indicator: colorVariants.green.dot + " " + colorVariants.green.ring,
        icon: colorVariants.green.icon,
        connector: "bg-green-200 dark:bg-green-700"
      }
    },
    {
      order: "vertical",
      color: "orange",
      class: {
        indicator: colorVariants.orange.dot + " " + colorVariants.orange.ring,
        icon: colorVariants.orange.icon,
        connector: "bg-orange-200 dark:bg-orange-700"
      }
    },
    {
      order: "vertical",
      color: "red",
      class: {
        indicator: colorVariants.red.dot + " " + colorVariants.red.ring,
        icon: colorVariants.red.icon,
        connector: "bg-red-200 dark:bg-red-700"
      }
    },
    {
      order: "vertical",
      color: "blue",
      class: {
        indicator: colorVariants.blue.dot + " " + colorVariants.blue.ring,
        icon: colorVariants.blue.icon,
        connector: "bg-blue-200 dark:bg-blue-700"
      }
    },
    {
      order: "vertical",
      color: "purple",
      class: {
        indicator: colorVariants.purple.dot + " " + colorVariants.purple.ring,
        icon: colorVariants.purple.icon,
        connector: "bg-purple-200 dark:bg-purple-700"
      }
    },
    {
      order: "vertical",
      color: "gray",
      class: {
        indicator: colorVariants.gray.dot + " " + colorVariants.gray.ring,
        icon: colorVariants.gray.icon,
        connector: "bg-gray-200 dark:bg-gray-700"
      }
    },
    // Horizontal color variants
    {
      order: "horizontal",
      color: "primary",
      class: {
        indicator: colorVariants.primary.dot + " " + colorVariants.primary.ring,
        icon: colorVariants.primary.icon
      }
    },
    {
      order: "horizontal",
      color: "green",
      class: {
        indicator: colorVariants.green.dot + " " + colorVariants.green.ring,
        icon: colorVariants.green.icon
      }
    },
    {
      order: "horizontal",
      color: "orange",
      class: {
        indicator: colorVariants.orange.dot + " " + colorVariants.orange.ring,
        icon: colorVariants.orange.icon
      }
    },
    {
      order: "horizontal",
      color: "red",
      class: {
        indicator: colorVariants.red.dot + " " + colorVariants.red.ring,
        icon: colorVariants.red.icon
      }
    },
    {
      order: "horizontal",
      color: "blue",
      class: {
        indicator: colorVariants.blue.dot + " " + colorVariants.blue.ring,
        icon: colorVariants.blue.icon
      }
    },
    {
      order: "horizontal",
      color: "purple",
      class: {
        indicator: colorVariants.purple.dot + " " + colorVariants.purple.ring,
        icon: colorVariants.purple.icon
      }
    },
    {
      order: "horizontal",
      color: "gray",
      class: {
        indicator: colorVariants.gray.dot + " " + colorVariants.gray.ring,
        icon: colorVariants.gray.icon
      }
    },
    // Hide connector on last item
    {
      isLast: true,
      class: {
        connector: "hidden"
      }
    }
  ],
  defaultVariants: {
    order: "default",
    color: "primary",
    isLast: false
  }
});
