import { tv, type VariantProps } from "tailwind-variants";
import type { ClassValue } from "svelte/elements";

export type CarouselVariants = VariantProps<typeof carousel>;

export const carousel = tv({
  base: "grid overflow-hidden relative rounded-lg h-56 sm:h-64 xl:h-80 2xl:h-96",
  variants: {},
  compoundVariants: [],
  defaultVariants: {}
});

export type CarouselTheme = ClassValue;

export const carouselIndicators = tv({
  slots: {
    base: "absolute start-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:translate-x-1/2 rtl:space-x-reverse",
    indicator: "bg-gray-100 hover:bg-gray-300"
  },
  variants: {
    selected: {
      true: { indicator: "opacity-100" },
      false: { indicator: "opacity-60" }
    },
    position: {
      top: { base: "top-5" },
      bottom: { base: "bottom-5" },
      withThumbnails: { base: "bottom-24" }
    }
  }
});

export type CarouselIndicatorsSlots = keyof typeof carouselIndicators.slots;
export type CarouselIndicatorsTheme = Partial<Record<CarouselIndicatorsSlots, ClassValue>>;

export const controlButton = tv({
  slots: {
    base: "flex absolute top-0 z-30 justify-center items-center px-4 h-full group focus:outline-hidden text-white dark:text-gray-300",
    span: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-hidden sm:h-10 sm:w-10 dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70"
  },
  variants: {
    forward: {
      true: "end-0",
      false: "start-0"
    }
  }
});

export type ControlButtonSlots = keyof typeof controlButton.slots;
export type ControlButtonTheme = Partial<Record<ControlButtonSlots, ClassValue>>;

export const thumbnails = tv({
  base: "flex flex-row justify-center bg-gray-100 w-full"
});

export type ThumbnailsTheme = ClassValue;

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

export type ThumbnailTheme = ClassValue;

export const slide = tv({
  base: "absolute block w-full! h-full object-cover"
});

export type SlideTheme = ClassValue;
