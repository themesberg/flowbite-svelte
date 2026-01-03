import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Variants
export type CardPlaceholderVariants = VariantProps<typeof cardPlaceholder> & Classes<typeof cardPlaceholder>;
export type ImagePlaceholderVariants = VariantProps<typeof imagePlaceholder> & Classes<typeof imagePlaceholder>;
export type ListPlaceholderVariants = VariantProps<typeof listPlaceholder> & Classes<typeof listPlaceholder>;
export type SkeletonVariants = VariantProps<typeof skeleton> & Classes<typeof skeleton>;
export type TestimonialPlaceholderVariants = VariantProps<typeof testimonialPlaceholder> & Classes<typeof testimonialPlaceholder>;
export type TextPlaceholderVariants = VariantProps<typeof textPlaceholder> & Classes<typeof textPlaceholder>;
export type VideoPlaceholderVariants = VariantProps<typeof videoPlaceholder>;
export type WidgetPlaceholderVariants = VariantProps<typeof widgetPlaceholder> & Classes<typeof widgetPlaceholder>;

export const cardPlaceholder = tv({
  slots: {
    base: "p-4 rounded-sm border border-gray-200 shadow-sm animate-pulse md:p-6 dark:border-gray-700",
    imagePlaceholder: "mb-4 flex h-48 items-center justify-center rounded-sm bg-gray-300 dark:bg-gray-700",
    imageIcon: "text-gray-200 dark:text-gray-600",
    skeletonLine: "rounded-full bg-gray-200 dark:bg-gray-700",
    footer: "mt-4 flex items-center space-x-3 rtl:space-x-reverse"
  },
  variants: {
    size: {
      sm: { base: "max-w-sm" },
      md: { base: "max-w-md" },
      lg: { base: "max-w-lg" },
      xl: { base: "max-w-xl" },
      "2xl": { base: "max-w-2xl" }
    }
  }
});

// ImagePlaceholder

export const imagePlaceholder = tv({
  slots: {
    base: "space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center",
    imagePlaceholder: "flex w-full items-center justify-center rounded-sm bg-gray-300 sm:w-96 dark:bg-gray-700",
    imageIcon: "text-gray-200",
    content: "w-full",
    skeletonLine: "rounded-full bg-gray-200 dark:bg-gray-700"
  },
  variants: {
    size: {
      sm: {
        imagePlaceholder: "h-32",
        content: "space-y-2"
      },
      md: {
        imagePlaceholder: "h-48",
        content: "space-y-3"
      },
      lg: {
        imagePlaceholder: "h-64",
        content: "space-y-4"
      }
    },
    rounded: {
      none: {
        imagePlaceholder: "rounded-none",
        skeletonLine: "rounded-none"
      },
      sm: {
        imagePlaceholder: "rounded-xs",
        skeletonLine: "rounded-xs"
      },
      md: {
        imagePlaceholder: "rounded-sm",
        skeletonLine: "rounded-sm"
      },
      lg: {
        imagePlaceholder: "rounded-lg",
        skeletonLine: "rounded-lg"
      },
      full: {
        imagePlaceholder: "rounded-full",
        skeletonLine: "rounded-full"
      }
    }
  }
});

// ListPlaceholder

export const listPlaceholder = tv({
  slots: {
    base: "p-4 space-y-4 max-w-md rounded-sm border border-gray-200 divide-y divide-gray-200 shadow-sm animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700",
    listItem: "flex items-center justify-between",
    itemContent: "",
    primaryLine: "mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600",
    secondaryLine: "h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700",
    valueLine: "h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"
  },
  variants: {
    size: {
      sm: {
        base: "p-3 space-y-3 max-w-sm md:p-4",
        primaryLine: "mb-2 h-2 w-20",
        secondaryLine: "h-1.5 w-28",
        valueLine: "h-2 w-10"
      },
      md: {}, // default size
      lg: {
        base: "p-5 space-y-5 max-w-lg md:p-7",
        primaryLine: "mb-3 h-3 w-28",
        secondaryLine: "h-2.5 w-36",
        valueLine: "h-3 w-14"
      }
    },
    rounded: {
      none: { base: "rounded-none" },
      sm: { base: "rounded-xs" },
      md: { base: "rounded-sm" },
      lg: { base: "rounded-lg" },
      full: { base: "rounded-full p-8 md:p-16" }
    }
  }
});

// Skeleton
export const skeleton = tv({
  slots: {
    base: "animate-pulse",
    skeletonLine: "rounded-full bg-gray-200 dark:bg-gray-700"
  },
  variants: {
    size: {
      sm: {
        base: "max-w-sm"
      },
      md: {
        base: "max-w-md"
      },
      lg: {
        base: "max-w-lg"
      },
      xl: {
        base: "max-w-xl"
      },
      "2xl": {
        base: "max-w-2xl"
      }
    }
  }
});

// TestimonialPlaceholder
export const testimonialPlaceholder = tv({
  slots: {
    base: "animate-pulse",
    primaryLine: "rounded-full bg-gray-200 dark:bg-gray-700",
    secondaryLine: "rounded-full bg-gray-300 dark:bg-gray-700",
    avatarIcon: "me-2 h-10 w-10 text-gray-200 dark:text-gray-700",
    authorInfo: "mt-4 flex items-center justify-center"
  }
});

// TextPlaceholder
export const textPlaceholder = tv({
  slots: {
    base: "space-y-2.5 animate-pulse",
    lineGroup: "flex items-center space-x-2 rtl:space-x-reverse",
    primaryLine: "rounded-full bg-gray-200 dark:bg-gray-700",
    secondaryLine: "rounded-full bg-gray-300 dark:bg-gray-600"
  },
  variants: {
    size: {
      sm: { base: "max-w-sm" },
      md: { base: "max-w-md" },
      lg: { base: "max-w-lg" },
      xl: { base: "max-w-xl" },
      "2xl": { base: "max-w-2xl" }
    }
  }
});

// VideoPlaceholder
export const videoPlaceholder = tv({
  base: "flex justify-center items-center h-56 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700",
  variants: {
    size: {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl"
    }
  }
});

// WidgetPlaceholder
export const widgetPlaceholder = tv({
  slots: {
    base: "p-4 max-w-sm rounded-sm border border-gray-200 shadow-sm animate-pulse md:p-6 dark:border-gray-700",
    chartContainer: "mt-4 flex items-baseline space-x-6 rtl:space-x-reverse",
    labelLine: "rounded-full bg-gray-200 dark:bg-gray-700",
    chartBar: "w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"
  }
});
