import { tv, type VariantProps } from "tailwind-variants";

export type SearchVariants = VariantProps<typeof search>;

export const search = tv({
  slots: {
    base: "relative w-full",
    leftDiv: "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none",
    icon: "text-gray-500 dark:text-gray-400",
    content: "absolute inset-y-0 end-0 flex items-center text-gray-500 dark:text-gray-400",
    input: "block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    clearbtn: "absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
  },
  variants: {
    size: {
      sm: {
        input: "text-xs p-2 ps-9 pe-9 ",
        icon: "w-3 h-3"
        // leftDiv: 'ps-2.5',
      },
      md: {
        input: "text-sm p-2.5 ps-10 pe-10",
        icon: "w-4 h-4"
        // leftDiv: 'ps-10',
      },
      lg: {
        input: "sm:text-base p-3 ps-11 pe-11",
        icon: "w-6 h-6"
        // leftDiv: 'ps-11',
      }
    }
  },
  defaultVariants: {
    size: "lg"
  }
});
