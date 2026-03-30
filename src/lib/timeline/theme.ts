import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Variants
export type TimelineVariants = VariantProps<typeof timeline>;
export type ActivityItemVariants = VariantProps<typeof activityItem> & Classes<typeof activityItem>;
export type GroupVariants = VariantProps<typeof group> & Classes<typeof group>;
export type GroupItemVariants = VariantProps<typeof groupItem> & Classes<typeof groupItem>;
export type TimelineItemVariants = VariantProps<typeof timelineItem> & Classes<typeof timelineItem>;

export const activity = tv({
  base: "relative border-s border-default"
});

export const activityItem = tv({
  slots: {
    item: "mb-10 ms-6",
    indicator: "flex absolute -start-3 justify-center items-center w-6 h-6 bg-brand-softer rounded-full ring-8 ring-buffer",
    img: "rounded-full shadow-lg",
    card: "p-4 bg-neutral-primary-soft rounded-base border border-default shadow-xs",
    header: "items-center justify-between mb-3 sm:flex",
    time: "bg-brand-softer border border-brand-subtle text-fg-brand-strong text-xs font-medium px-1.5 py-0.5 rounded sm:order-last mb-1 sm:mb-0",
    title: "text-body",
    text: "p-3 text-xs italic font-normal text-body border border-default-medium rounded-base bg-neutral-secondary-medium"
  }
});

export const group = tv({
  slots: {
    card: "p-5 mb-4 bg-neutral-secondary-soft border border-default rounded-base",
    time: "text-lg font-semibold text-heading",
    list: "mt-3 divide-y divide-default"
  }
});

export const groupItem = tv({
  slots: {
    base: "",
    link: "block items-center p-3 sm:flex hover:bg-neutral-tertiary",
    img: "me-3 mb-3 w-12 h-12 rounded-full sm:mb-0",
    content: "text-body",
    title: "text-base font-normal",
    badge: "inline-flex items-center bg-neutral-primary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded",
    icon: "me-1 h-3 w-3"
  }
});

const colorVariants = {
  primary: {
    dot: "bg-brand-softer",
    ring: "ring-buffer",
    icon: "text-fg-brand-strong",
    connector: "bg-brand-medium"
  },
  green: {
    dot: "bg-green-200 dark:bg-green-900",
    ring: "ring-buffer",
    icon: "text-green-600 dark:text-green-400",
    connector: "bg-green-200 dark:bg-green-700"
  },
  orange: {
    dot: "bg-orange-200 dark:bg-orange-900",
    ring: "ring-buffer",
    icon: "text-orange-600 dark:text-orange-400",
    connector: "bg-orange-200 dark:bg-orange-700"
  },
  red: {
    dot: "bg-red-200 dark:bg-red-900",
    ring: "ring-buffer",
    icon: "text-red-600 dark:text-red-400",
    connector: "bg-red-200 dark:bg-red-700"
  },
  blue: {
    dot: "bg-blue-200 dark:bg-blue-900",
    ring: "ring-buffer",
    icon: "text-blue-600 dark:text-blue-400",
    connector: "bg-blue-200 dark:bg-blue-700"
  },
  purple: {
    dot: "bg-purple-200 dark:bg-purple-900",
    ring: "ring-buffer",
    icon: "text-purple-600 dark:text-purple-400",
    connector: "bg-purple-200 dark:bg-purple-700"
  },
  gray: {
    dot: "bg-neutral-quaternary",
    ring: "ring-buffer",
    icon: "text-body",
    connector: "bg-neutral-quaternary"
  }
};

export const timeline = tv({
  variants: {
    order: {
      group: "p-5 mb-4 bg-neutral-secondary-soft border border-default rounded-base",
      horizontal: "sm:flex",
      activity: "relative border-s border-default",
      vertical: "relative",
      default: "relative border-s border-default"
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
    dot: "absolute w-2 h-2 bg-neutral-quaternary rounded-full mt-1.5 -start-5 border border-buffer",
    time: "",
    title: "",
    icon: "w-4 h-4",
    connector: "absolute top-6 start-3 w-px h-full"
  },
  variants: {
    order: {
      default: {
        base: "mb-10 ms-4",
        indicator: "absolute w-3 h-3 bg-neutral-quaternary rounded-full mt-1.5 -start-1.5 border border-buffer",
        time: "text-sm font-normal leading-none text-body",
        title: "text-lg font-semibold text-heading my-2"
      },
      vertical: {
        base: "mb-10 ms-6 relative",
        indicator: "flex absolute -start-3 top-1.5 justify-center items-center w-6 h-6 rounded-full ring-8",
        time: "bg-neutral-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded",
        title: "flex items-center mb-1 text-lg font-semibold text-heading my-2",
        connector: "absolute top-7 -start-1.5 w-px h-full"
      },
      horizontal: {
        base: "relative mb-6 sm:mb-0",
        indicator: "flex items-center",
        time: "bg-neutral-secondary-medium border border-default-medium text-heading text-xs font-medium px-1.5 py-0.5 rounded",
        title: "text-lg font-semibold text-heading my-2"
      },
      activity: {
        base: "mb-10 ms-6 relative",
        indicator: "flex absolute -start-3 top-1.5 justify-center items-center w-6 h-6 rounded-full ring-8 ring-buffer bg-brand-softer",
        time: "text-sm font-normal leading-none text-body",
        title: "text-lg font-semibold text-heading",
        connector: "absolute top-7 -start-3 w-px h-full"
      },
      group: {
        base: "",
        indicator: "p-5 mb-4 bg-neutral-secondary-soft border border-default rounded-base",
        time: "text-lg font-semibold text-heading",
        title: "text-lg font-semibold text-heading"
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
        connector: colorVariants.primary.connector
      }
    },
    {
      order: "vertical",
      color: "green",
      class: {
        indicator: colorVariants.green.dot + " " + colorVariants.green.ring,
        icon: colorVariants.green.icon,
        connector: colorVariants.green.connector
      }
    },
    {
      order: "vertical",
      color: "orange",
      class: {
        indicator: colorVariants.orange.dot + " " + colorVariants.orange.ring,
        icon: colorVariants.orange.icon,
        connector: colorVariants.orange.connector
      }
    },
    {
      order: "vertical",
      color: "red",
      class: {
        indicator: colorVariants.red.dot + " " + colorVariants.red.ring,
        icon: colorVariants.red.icon,
        connector: colorVariants.red.connector
      }
    },
    {
      order: "vertical",
      color: "blue",
      class: {
        indicator: colorVariants.blue.dot + " " + colorVariants.blue.ring,
        icon: colorVariants.blue.icon,
        connector: colorVariants.blue.connector
      }
    },
    {
      order: "vertical",
      color: "purple",
      class: {
        indicator: colorVariants.purple.dot + " " + colorVariants.purple.ring,
        icon: colorVariants.purple.icon,
        connector: colorVariants.purple.connector
      }
    },
    {
      order: "vertical",
      color: "gray",
      class: {
        indicator: colorVariants.gray.dot + " " + colorVariants.gray.ring,
        icon: colorVariants.gray.icon,
        connector: colorVariants.gray.connector
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
