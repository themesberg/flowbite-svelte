import { tv } from "tailwind-variants";

export const megamenu = tv({
  slots: {
    base: "w-fit bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-lg border border-gray-100 dark:border-gray-600 divide-gray-100 dark:divide-gray-600",
    div: "flex flex-col md:flex-row p-4 max-w-(--breakpoint-md) justify-center mx-auto mt-2",
    ul: "grid grid-flow-row gap-y-4 md:gap-x-0 auto-col-max auto-row-max grid-cols-2 md:grid-cols-3 text-sm font-medium",
    extra: "md:w-1/3 mt-4 md:mt-0"
  },
  variants: {
    full: {
      true: { base: "border-y w-full ml-0 rounded-none" }
    },
    extra: {
      true: {}
    }
  },
  compoundVariants: [
    {
      full: true,
      extra: true,
      class: { ul: "grid-cols-2 md:w-2/3" }
    }
  ]
});

export type MegaMenuSlots = keyof typeof megamenu.slots;
export type MegaMenuTheme = Partial<Record<MegaMenuSlots, string>>;
