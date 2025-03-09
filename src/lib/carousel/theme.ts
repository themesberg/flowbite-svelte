import { select } from "$lib/forms/select";
import { tv, type VariantProps } from "tailwind-variants";

export type CarouselVariants = VariantProps<typeof carousel>;

export const carousel = tv({
  slots: {
    base: "w-full flex max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700",
  },
  variants: {

  },
  compoundVariants: [

  ],
  defaultVariants: {
  }
});

export const indicators = tv({
  slots: {
    base: "absolute start-1/2 bottom-5 z-30 flex -translate-x-1/2 space-x-3 rtl:translate-x-1/2 rtl:space-x-reverse",
    indicator: "bg-gray-100 hover:bg-gray-300"
  },
  variants: {
    selected: {
      true: { indicator: "opacity-100" },
      false: { indicator: "opacity-60" }
    }
  }
})

export const controlButton = tv({
  base: "flex absolute top-0 z-30 justify-center items-center px-4 h-full group focus:outline-hidden text-white dark:text-gray-300",
  variants: {
    forward: {
      true: "end-0",
      false: "start-0"
    }
  }
})

export const thumbnails = tv({
  base: 'flex flex-row justify-center bg-gray-100 w-full'
});

export const slide = tv({
  base: "absolute block w-full! h-full object-cover"
})