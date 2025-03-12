import { tv, type VariantProps } from "tailwind-variants";

// card placeholder
type CardPlaceholderVariants = VariantProps<typeof cardPlaceholder>;
const cardPlaceholder = tv({
  slots: {
    base: "p-4 rounded-sm border border-gray-200 shadow-sm animate-pulse md:p-6 dark:border-gray-700",
    imageArea: "mb-4 flex h-48 items-center justify-center rounded-sm bg-gray-300 dark:bg-gray-700",
    imageIcon: "text-gray-200 dark:text-gray-600",
    line: "rounded-full bg-gray-200 dark:bg-gray-700",
    footerArea: "mt-4 flex items-center space-x-3 rtl:space-x-reverse"
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
type ImagePlaceholderVariants = VariantProps<typeof imagePlaceholder>;
const imagePlaceholder = tv({
  slots: {
    base: "space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center",
    image: "flex w-full items-center justify-center rounded-sm bg-gray-300 sm:w-96 dark:bg-gray-700",
    svg: "text-gray-200",
    content: "w-full",
    line: "rounded-full bg-gray-200 dark:bg-gray-700"
  },
  variants: {
    size: {
      sm: {
        image: "h-32",
        content: "space-y-2"
      },
      md: {
        image: "h-48",
        content: "space-y-3"
      },
      lg: {
        image: "h-64",
        content: "space-y-4"
      }
    },
    rounded: {
      none: {
        image: "rounded-none",
        line: "rounded-none"
      },
      sm: {
        image: "rounded-xs",
        line: "rounded-xs"
      },
      md: {
        image: "rounded-sm",
        line: "rounded-sm"
      },
      lg: {
        image: "rounded-lg",
        line: "rounded-lg"
      },
      full: {
        image: "rounded-full",
        line: "rounded-full"
      }
    }
  }
});

// ListPlaceholder
type ListPlaceholderVariants = VariantProps<typeof listPlaceholder>;

const listPlaceholder = tv({
  slots: {
    base: "p-4 space-y-4 max-w-md rounded-sm border border-gray-200 divide-y divide-gray-200 shadow-sm animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700",
    item: "flex items-center justify-between",
    itemContent: "",
    itemTitle: "mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600",
    itemSubtitle: "h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700",
    itemExtra: "h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"
  },
  variants: {
    size: {
      sm: {
        base: "p-3 space-y-3 max-w-sm md:p-4",
        itemTitle: "mb-2 h-2 w-20",
        itemSubtitle: "h-1.5 w-28",
        itemExtra: "h-2 w-10"
      },
      md: {}, // default size
      lg: {
        base: "p-5 space-y-5 max-w-lg md:p-7",
        itemTitle: "mb-3 h-3 w-28",
        itemSubtitle: "h-2.5 w-36",
        itemExtra: "h-3 w-14"
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

type SkeletonVariants = VariantProps<typeof skeleton>;

// Skeleton
const skeleton = tv({
  slots: {
    wrapper: "animate-pulse",
    line: "rounded-full bg-gray-200 dark:bg-gray-700"
  },
  variants: {
    size: {
      sm: {
        wrapper: "max-w-sm"
      },
      md: {
        wrapper: "max-w-md"
      },
      lg: {
        wrapper: "max-w-lg"
      },
      xl: {
        wrapper: "max-w-xl"
      },
      "2xl": {
        wrapper: "max-w-2xl"
      }
    }
  }
});

// TestimonialPlaceholder
const testimonialPlaceholder = tv({
  slots: {
    wrapper: "animate-pulse",
    line1: "rounded-full bg-gray-200 dark:bg-gray-700",
    line2: "rounded-full bg-gray-300 dark:bg-gray-700",
    svg: "me-2 h-10 w-10 text-gray-200 dark:text-gray-700",
    subContent: "mt-4 flex items-center justify-center"
  }
});

// TextPlaceholder
type TextPlaceholderVariants = VariantProps<typeof textPlaceholder>;

const textPlaceholder = tv({
  slots: {
    baseWrapper: "space-y-2.5 animate-pulse",
    divWrapper: "flex items-center space-x-2 rtl:space-x-reverse",
    lineA: "rounded-full bg-gray-200 dark:bg-gray-700",
    lineB: "rounded-full bg-gray-300 dark:bg-gray-600"
  },
  variants: {
    size: {
      sm: { baseWrapper: "max-w-sm" },
      md: { baseWrapper: "max-w-md" },
      lg: { baseWrapper: "max-w-lg" },
      xl: { baseWrapper: "max-w-xl" },
      "2xl": { baseWrapper: "max-w-2xl" }
    }
  }
});

// VideoPlaceholder
type VideoPlaceholderVariants = VariantProps<typeof videoPlaceholder>;
const videoPlaceholder = tv({
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
const widgetPlaceholder = tv({
  slots: {
    base: "p-4 max-w-sm rounded-sm border border-gray-200 shadow-sm animate-pulse md:p-6 dark:border-gray-700",
    wrapper: "mt-4 flex items-baseline space-x-6 rtl:space-x-reverse",
    hLine: "rounded-full bg-gray-200 dark:bg-gray-700",
    vLine: "w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"
  }
});

export { cardPlaceholder, type CardPlaceholderVariants, imagePlaceholder, type ImagePlaceholderVariants, listPlaceholder, type ListPlaceholderVariants, skeleton, type SkeletonVariants, testimonialPlaceholder, textPlaceholder, type TextPlaceholderVariants, videoPlaceholder, type VideoPlaceholderVariants, widgetPlaceholder };
