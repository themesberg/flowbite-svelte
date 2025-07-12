import { tv, type VariantProps } from "tailwind-variants";

export const buttonToggleGroup = tv({
  base: "inline-flex border border-gray-300 overflow-hidden",
  variants: {
    roundedSize: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full"
    }
  }
});

export type ButtonToggleGroupTheme = string;

export const buttonToggle = tv({
  base: "relative flex items-center transition-all duration-200  focus:outline-none border-r last:border-r-0 dark:bg-white dark:text-gray-800",
  variants: {
    selected: {
      true: "",
      false: ""
    },
    size: {
      sm: "p-1 px-2 text-sm",
      md: "p-2 px-4 text-base",
      lg: "p-3 px-5 text-lg",
      xl: "p-4 px-6 text-xl"
    },
    roundedSize: {
      sm: "first:rounded-s-sm last:rounded-e-sm",
      md: "first:rounded-s-md last:rounded-e-md",
      lg: "first:rounded-s-lg last:rounded-e-lg",
      xl: "first:rounded-s-xl last:rounded-e-xl",
      full: "first:rounded-s-full last:rounded-e-full"
    },
    color: {
      primary: "data-[selected=true]:bg-primary-200 data-[selected=false]:hover:bg-gray-100",
      secondary: "data-[selected=true]:bg-secondary-200 data-[selected=false]:hover:bg-gray-100",
      gray: "data-[selected=true]:bg-gray-200 data-[selected=false]:hover:bg-gray-100",
      red: "data-[selected=true]:bg-red-200 data-[selected=false]:hover:bg-red-50",
      orange: "data-[selected=true]:bg-orange-200 data-[selected=false]:hover:bg-orange-50",
      amber: "data-[selected=true]:bg-amber-200 data-[selected=false]:hover:bg-amber-50",
      yellow: "data-[selected=true]:bg-yellow-200 data-[selected=false]:hover:bg-yellow-50",
      lime: "data-[selected=true]:bg-lime-200 data-[selected=false]:hover:bg-lime-50",
      green: "data-[selected=true]:bg-green-200 data-[selected=false]:hover:bg-green-50",
      emerald: "data-[selected=true]:bg-emerald-200 data-[selected=false]:hover:bg-emerald-50",
      teal: "data-[selected=true]:bg-teal-200 data-[selected=false]:hover:bg-teal-50",
      cyan: "data-[selected=true]:bg-cyan-200 data-[selected=false]:hover:bg-cyan-50",
      sky: "data-[selected=true]:bg-sky-200 data-[selected=false]:hover:bg-sky-50",
      blue: "data-[selected=true]:bg-blue-200 data-[selected=false]:hover:bg-blue-50",
      indigo: "data-[selected=true]:bg-indigo-200 data-[selected=false]:hover:bg-indigo-50",
      violet: "data-[selected=true]:bg-violet-200 data-[selected=false]:hover:bg-violet-50",
      purple: "data-[selected=true]:bg-purple-200 data-[selected=false]:hover:bg-purple-50",
      fuchsia: "data-[selected=true]:bg-fuchsia-200 data-[selected=false]:hover:bg-fuchsia-50",
      pink: "data-[selected=true]:bg-pink-200 data-[selected=false]:hover:bg-pink-50",
      rose: "data-[selected=true]:bg-rose-200 data-[selected=false]:hover:bg-rose-50",
      none: ""
    }
  },
  defaultVariants: {
    selected: false,
    color: "primary",
    size: "md",
    roundedSize: "md"
  }
});

export type ButtonToggleTheme = string;

export const buttonToggleContent = tv({
  base: "flex items-center w-full overflow-hidden relative"
});

export type ButtonToggleContentTheme = string;

export const buttonToggleText = tv({
  base: "transition-all duration-200 ml-0",
  variants: {
    selected: {
      true: "ml-5",
      false: ""
    }
  },
  defaultVariants: {
    selected: false
  }
});

export type ButtonToggleTextTheme = string;

export type ButtonToggleVariants = VariantProps<typeof buttonToggle>;
export type ButtonToggleContentVariants = VariantProps<typeof buttonToggleContent>;
export type ButtonToggleTextVariants = VariantProps<typeof buttonToggleText>;
