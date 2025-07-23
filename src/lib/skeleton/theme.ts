import { tv, type VariantProps } from "tailwind-variants";
import type { ClassValue } from "svelte/elements";
import type { Classes } from "$lib/theme/themeUtils";

// Variants
export type CardPlaceholderVariants = VariantProps<typeof cardPlaceholder> & Classes<typeof cardPlaceholder>;
export type ImagePlaceholderVariants = VariantProps<typeof imagePlaceholder> & Classes<typeof imagePlaceholder>;
export type ListPlaceholderVariants = VariantProps<typeof listPlaceholder> & Classes<typeof listPlaceholder>;
export type SkeletonVariants = VariantProps<typeof skeleton> & Classes<typeof skeleton>;
export type TestimonialPlaceholderVariants = VariantProps<typeof testimonialPlaceholder> & Classes<typeof testimonialPlaceholder>;
export type TextPlaceholderVariants = VariantProps<typeof textPlaceholder> & Classes<typeof textPlaceholder>;
export type VideoPlaceholderVariants = VariantProps<typeof videoPlaceholder>;
export type WidgetPlaceholderVariants = VariantProps<typeof widgetPlaceholder> & Classes<typeof widgetPlaceholder>;

// Theme
export type CardPlaceholderSlots = keyof typeof cardPlaceholder.slots;
export type CardPlaceholderTheme = Partial<Record<CardPlaceholderSlots, ClassValue>>;
export type ImagePlaceholderSlots = keyof typeof imagePlaceholder.slots;
export type ImagePlaceholderTheme = Partial<Record<ImagePlaceholderSlots, ClassValue>>;
export type ListPlaceholderSlots = keyof typeof listPlaceholder.slots;
export type ListPlaceholderTheme = Partial<Record<ListPlaceholderSlots, ClassValue>>;
export type SkeletonSlots = keyof typeof skeleton.slots;
export type SkeletonTheme = Partial<Record<SkeletonSlots, ClassValue>>;
export type TestimonialPlaceholderSlots = keyof typeof testimonialPlaceholder.slots;
export type TestimonialPlaceholderTheme = Partial<Record<TestimonialPlaceholderSlots, ClassValue>>;
export type TextPlaceholderSlots = keyof typeof textPlaceholder.slots;
export type TextPlaceholderTheme = Partial<Record<TextPlaceholderSlots, ClassValue>>;
export type VideoPlaceholderTheme = ClassValue;
export type WidgetPlaceholderSlots = keyof typeof widgetPlaceholder.slots;
export type WidgetPlaceholderTheme = Partial<Record<WidgetPlaceholderSlots, ClassValue>>;

export const cardPlaceholder = tv({
  slots: {
    base: "p-4 rounded-sm border border-gray-200 shadow-sm animate-pulse md:p-6 dark:border-gray-700",
    area: "mb-4 flex h-48 items-center justify-center rounded-sm bg-gray-300 dark:bg-gray-700",
    icon: "text-gray-200 dark:text-gray-600",
    line: "rounded-full bg-gray-200 dark:bg-gray-700",
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

export const listPlaceholder = tv({
  slots: {
    base: "p-4 space-y-4 max-w-md rounded-sm border border-gray-200 divide-y divide-gray-200 shadow-sm animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700",
    item: "flex items-center justify-between",
    content: "",
    title: "mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600",
    subTitle: "h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700",
    extra: "h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"
  },
  variants: {
    size: {
      sm: {
        base: "p-3 space-y-3 max-w-sm md:p-4",
        title: "mb-2 h-2 w-20",
        subTitle: "h-1.5 w-28",
        extra: "h-2 w-10"
      },
      md: {}, // default size
      lg: {
        base: "p-5 space-y-5 max-w-lg md:p-7",
        title: "mb-3 h-3 w-28",
        subTitle: "h-2.5 w-36",
        extra: "h-3 w-14"
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
export const testimonialPlaceholder = tv({
  slots: {
    base: "animate-pulse",
    lineA: "rounded-full bg-gray-200 dark:bg-gray-700",
    lineB: "rounded-full bg-gray-300 dark:bg-gray-700",
    svg: "me-2 h-10 w-10 text-gray-200 dark:text-gray-700",
    content: "mt-4 flex items-center justify-center"
  }
});

// TextPlaceholder
export const textPlaceholder = tv({
  slots: {
    base: "space-y-2.5 animate-pulse",
    div: "flex items-center space-x-2 rtl:space-x-reverse",
    lineA: "rounded-full bg-gray-200 dark:bg-gray-700",
    lineB: "rounded-full bg-gray-300 dark:bg-gray-600"
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
    wrapper: "mt-4 flex items-baseline space-x-6 rtl:space-x-reverse",
    hLine: "rounded-full bg-gray-200 dark:bg-gray-700",
    vLine: "w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"
  }
});
