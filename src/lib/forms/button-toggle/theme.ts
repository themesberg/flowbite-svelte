import { tv, type VariantProps } from "tailwind-variants";
import type { ClassValue } from "svelte/elements";
import type { Classes } from "$lib/theme/themeUtils";

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

export type ButtonToggleGroupTheme = ClassValue;

export const buttonToggle = tv({
  slots: {
    button: "relative flex items-center transition-all duration-200 focus:outline-none border-r last:border-r-0 dark:bg-white dark:text-gray-800",
    content: "flex items-center w-full overflow-hidden relative",
    text: "transition-all duration-200 ml-0",
    icon: "absolute left-0 flex-shrink-0 text-green-600"
  },
  variants: {
    selected: {
      true: {
        text: "ml-5"
      },
      false: {}
    },
    size: {
      sm: {
        button: "p-1 px-2 text-sm"
      },
      md: {
        button: "p-2 px-4 text-base"
      },
      lg: {
        button: "p-3 px-5 text-lg"
      },
      xl: {
        button: "p-4 px-6 text-xl"
      }
    },
    roundedSize: {
      sm: {
        button: "first:rounded-s-sm last:rounded-e-sm"
      },
      md: {
        button: "first:rounded-s-md last:rounded-e-md"
      },
      lg: {
        button: "first:rounded-s-lg last:rounded-e-lg"
      },
      xl: {
        button: "first:rounded-s-xl last:rounded-e-xl"
      },
      full: {
        button: "first:rounded-s-full last:rounded-e-full"
      }
    },
    color: {
      primary: {
        button: "data-[selected=true]:bg-primary-200 data-[selected=false]:hover:bg-gray-100"
      },
      secondary: {
        button: "data-[selected=true]:bg-secondary-200 data-[selected=false]:hover:bg-gray-100"
      },
      gray: {
        button: "data-[selected=true]:bg-gray-200 data-[selected=false]:hover:bg-gray-100"
      },
      red: {
        button: "data-[selected=true]:bg-red-200 data-[selected=false]:hover:bg-red-50"
      },
      orange: {
        button: "data-[selected=true]:bg-orange-200 data-[selected=false]:hover:bg-orange-50"
      },
      amber: {
        button: "data-[selected=true]:bg-amber-200 data-[selected=false]:hover:bg-amber-50"
      },
      yellow: {
        button: "data-[selected=true]:bg-yellow-200 data-[selected=false]:hover:bg-yellow-50"
      },
      lime: {
        button: "data-[selected=true]:bg-lime-200 data-[selected=false]:hover:bg-lime-50"
      },
      green: {
        button: "data-[selected=true]:bg-green-200 data-[selected=false]:hover:bg-green-50"
      },
      emerald: {
        button: "data-[selected=true]:bg-emerald-200 data-[selected=false]:hover:bg-emerald-50"
      },
      teal: {
        button: "data-[selected=true]:bg-teal-200 data-[selected=false]:hover:bg-teal-50"
      },
      cyan: {
        button: "data-[selected=true]:bg-cyan-200 data-[selected=false]:hover:bg-cyan-50"
      },
      sky: {
        button: "data-[selected=true]:bg-sky-200 data-[selected=false]:hover:bg-sky-50"
      },
      blue: {
        button: "data-[selected=true]:bg-blue-200 data-[selected=false]:hover:bg-blue-50"
      },
      indigo: {
        button: "data-[selected=true]:bg-indigo-200 data-[selected=false]:hover:bg-indigo-50"
      },
      violet: {
        button: "data-[selected=true]:bg-violet-200 data-[selected=false]:hover:bg-violet-50"
      },
      purple: {
        button: "data-[selected=true]:bg-purple-200 data-[selected=false]:hover:bg-purple-50"
      },
      fuchsia: {
        button: "data-[selected=true]:bg-fuchsia-200 data-[selected=false]:hover:bg-fuchsia-50"
      },
      pink: {
        button: "data-[selected=true]:bg-pink-200 data-[selected=false]:hover:bg-pink-50"
      },
      rose: {
        button: "data-[selected=true]:bg-rose-200 data-[selected=false]:hover:bg-rose-50"
      },
      none: {}
    }
  },
  defaultVariants: {
    selected: false,
    color: "primary",
    size: "md",
    roundedSize: "md"
  }
});

// export type ButtonToggleTheme = {
//   button?: ClassValue;
//   content?: ClassValue;
//   text?: ClassValue;
// };

export type ButtonToggleSlots = keyof typeof buttonToggle.slots;
export type ButtonToggleTheme = Partial<Record<ButtonToggleSlots, ClassValue>>;

export type ButtonToggleVariants = VariantProps<typeof buttonToggle> & Classes<typeof buttonToggle>;
