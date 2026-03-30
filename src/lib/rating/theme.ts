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
    label: "text-sm font-medium text-fg-brand hover:underline w-14 truncate",
    barTrack: "mx-4 w-2/4 h-4 bg-neutral-quaternary rounded-base",
    barFill: "h-4 bg-warning rounded-base",
    percentage: "text-sm font-medium text-body"
  }
});

export const rating = tv({
  slots: {
    base: "flex items-center",
    value: "ms-2 text-sm font-bold text-heading"
  }
});

export const review = tv({
  slots: {
    base: "md:grid md:grid-cols-3 md:gap-8",
    userInfo: "mb-6 flex items-center space-x-4 rtl:space-x-reverse",
    userDetails: "space-y-1 font-medium text-heading",
    addressWrapper: "flex items-center text-sm text-body",
    avatar: "h-10 w-10 rounded-full",
    metadata: "space-y-4 text-sm text-body",
    metadataItem: "flex items-center"
  }
});

export const scoreRating = tv({
  slots: {
    badge: "bg-brand-softer w-8 text-fg-brand-strong text-sm font-semibold inline-flex items-center p-1.5 rounded-base",
    title: "ms-2 font-medium text-heading",
    separator: "text-sm w-24 font-medium text-body",
    subtitle: "text-sm w-24 font-medium text-body",
    reviewLink: "ms-auto text-sm font-medium text-fg-brand hover:underline max-w-48 truncate",
    bar: "bg-brand h-2.5 rounded-base"
  }
});
