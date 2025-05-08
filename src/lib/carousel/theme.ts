import { select } from "$lib/forms/select";
import { tv, type VariantProps } from "tailwind-variants";

export type CarouselVariants = VariantProps<typeof carousel>;

export const carousel = tv({
  base: "grid overflow-hidden relative rounded-lg h-56 sm:h-64 xl:h-80 2xl:h-96",
  variants: {},
  compoundVariants: [],
  defaultVariants: {}
});

export const indicators = tv({
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
      top: {base: "top-5"},
      bottom: {base: "bottom-5"},
      withThumbnails: { base: "bottom-24"}
    }
  }
});

export const controlButton = tv({
  base: "flex absolute top-0 z-30 justify-center items-center px-4 h-full group focus:outline-hidden text-white dark:text-gray-300",
  variants: {
    forward: {
      true: "end-0",
      false: "start-0"
    }
  }
});

export const thumbnails = tv({
  base: "flex flex-row justify-center bg-gray-100 w-full"
});

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

export const slide = tv({
  base: "absolute block w-full! h-full object-cover"
});
