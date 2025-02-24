import { tv } from "tailwind-variants";

const avatar = tv({
  base: "relative flex items-center justify-center bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300",
  variants: {
    cornerStyle: {
      rounded: "rounded-sm",
      circular: "rounded-full"
    },
    border: {
      true: "p-1 ring-2 ring-gray-300 dark:ring-gray-500",
      false: ""
    },
    stacked: {
      true: "border-2 -ms-4 border-white dark:border-gray-800",
      false: ""
    },
    size: {
      xs: "w-6 h-6",
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-20 h-20",
      xl: "w-36 h-36"
    }
  },
  defaultVariants: {
    cornerStyle: "circular",
    border: false,
    stacked: false,
    size: "md"
  }
});

export { avatar };
