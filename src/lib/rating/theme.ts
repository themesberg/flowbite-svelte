import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Variants
export type RatingVariants = VariantProps<typeof rating> & Classes<typeof rating>;
export type AdvancedRatingVariants = VariantProps<typeof advancedRating> & Classes<typeof advancedRating>;
export type ReviewVariants = VariantProps<typeof review> & Classes<typeof review>;
export type ScoreRatingVariants = VariantProps<typeof scoreRating> & Classes<typeof scoreRating>;

export const advancedRating = tv({
  slots: {
    base: "flex items-center mt-4",
    label: "text-sm font-medium text-gray-600 dark:text-gray-500",
    barTrack: "mx-4 w-2/4 h-5 bg-gray-200 rounded-sm dark:bg-gray-700",
    barFill: "h-5 bg-yellow-400 rounded-sm",
    percentage: "text-sm font-medium text-gray-600 dark:text-gray-500"
  }
});

export const rating = tv({
  slots: {
    base: "flex items-center",
    value: "ms-2 text-sm font-bold text-gray-900 dark:text-white"
  }
});

export const review = tv({
  slots: {
    base: "md:grid md:grid-cols-3 md:gap-8",
    userInfo: "mb-6 flex items-center space-x-4 rtl:space-x-reverse",
    userDetails: "space-y-1 font-medium dark:text-white",
    addressWrapper: "flex items-center text-sm text-gray-500 dark:text-gray-400",
    avatar: "h-10 w-10 rounded-full",
    metadata: "space-y-4 text-sm text-gray-500 dark:text-gray-400",
    metadataItem: "flex items-center"
  }
});

export const scoreRating = tv({
  slots: {
    badge: "bg-primary-100 w-8 text-primary-800 text-sm font-semibold inline-flex items-center p-1.5 rounded-sm dark:bg-primary-200 dark:text-primary-800",
    title: "ms-2 font-medium text-gray-900 dark:text-white",
    separator: "text-sm w-24 font-medium text-gray-500 dark:text-gray-400",
    subtitle: "text-sm w-24 font-medium text-gray-500 dark:text-gray-400",
    reviewLink: "ms-auto w-32 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500",
    bar: "bg-primary-600 h-2.5 rounded-sm dark:bg-primary-500"
  }
});
