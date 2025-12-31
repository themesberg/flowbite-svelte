import type { Classes } from "$lib/theme-provider/themeUtils";
import { tv, type VariantProps } from "tailwind-variants";

export type CarouselVariants = VariantProps<typeof carousel> & Classes<typeof carousel>;
export type CarouselIndicatorsVariants = VariantProps<typeof carouselIndicators> & Classes<typeof carouselIndicators>;
export type ControlButtonVariants = VariantProps<typeof controlButton> & Classes<typeof controlButton>;
export type ThumbnailsVariants = VariantProps<typeof thumbnails> & Classes<typeof thumbnails>;

/**
 * Carousel component theme
 *
 * Anatomical Selectors:
 * - data-scope="carousel" - Applied to the root carousel container
 * - data-part="base" - The main carousel container (matches 'base' slot)
 * - data-part="slide" - The slide element (matches 'slide' slot)
 */
export const carousel = tv({
  slots: {
    base: "grid overflow-hidden relative rounded-base h-56 sm:h-64 xl:h-80 2xl:h-96",
    slide: ""
  },
  variants: {},
  compoundVariants: [],
  defaultVariants: {}
});

/**
 * Carousel Indicators component theme
 *
 * Anatomical Selectors:
 * - data-scope="carousel-indicators" - Applied to the indicators container
 * - data-part="base" - The indicators container (matches 'base' slot)
 * - data-part="button" - Each indicator button
 * - data-part="indicator" - The indicator visual element (matches 'indicator' slot)
 */
export const carouselIndicators = tv({
  slots: {
    base: "absolute start-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:translate-x-1/2 rtl:space-x-reverse",
    indicator: "bg-gray-100 hover:bg-gray-300",
    active: "",
    inactive: ""
  },
  variants: {
    selected: {
      true: { indicator: "opacity-100" },
      false: { indicator: "opacity-60" }
    },
    position: {
      top: { base: "top-5" },
      bottom: { base: "bottom-5" }
    }
  }
});

/**
 * Control Button component theme
 *
 * Anatomical Selectors:
 * - data-scope="control-button" - Applied to the control button
 * - data-part="base" - The button element (matches 'base' slot)
 * - data-part="icon" - The icon container span (matches 'span' slot)
 * - data-part="svg" - The SVG icon element
 */
export const controlButton = tv({
  slots: {
    base: "flex absolute top-0 z-30 justify-center items-center px-4 h-full group focus:outline-hidden text-white dark:text-gray-300",
    span: "inline-flex h-8 w-8 items-center justify-center rounded-base bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-hidden sm:h-10 sm:w-10 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
  },
  variants: {
    forward: {
      true: "end-0",
      false: "start-0"
    }
  }
});

/**
 * Thumbnails component theme
 *
 * Anatomical Selectors:
 * - data-scope="thumbnails" - Applied to the thumbnails container
 * - data-part="base" - The thumbnails container (matches 'base' slot)
 * - data-part="button" - Each thumbnail button
 * - data-part="img" - Thumbnail images (matches 'img' slot)
 */
export const thumbnails = tv({
  slots: {
    base: "flex flex-row justify-center bg-gray-100 w-full",
    img: ""
  }
});

/**
 * Thumbnail component theme
 *
 * Anatomical Selectors:
 * - data-scope="thumbnail" - Applied to the thumbnail image
 * - data-part="image" - The thumbnail image element
 */
export const thumbnail = tv({
  base: "",
  variants: {
    selected: {
      true: "opacity-100",
      false: "opacity-60"
    }
  },
  defaultVariants: {
    selected: false
  }
});

export type SlideVariants = VariantProps<typeof slide>;

/**
 * Slide component theme
 *
 * Anatomical Selectors:
 * - data-scope="slide" - Applied to the slide image
 * - data-part="image" - The slide image element
 */
export const slide = tv({
  base: "absolute block w-full h-full",
  variants: {
    fit: {
      contain: "object-contain",
      cover: "object-cover",
      fill: "object-fill",
      none: "object-none",
      "scale-down": "object-scale-down"
    }
  },
  defaultVariants: {
    fit: "cover"
  }
});
