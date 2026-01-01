import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme-provider/themeUtils";

// Variants
export type ToggleVariants = VariantProps<typeof toggle> & Classes<typeof toggle>;

export const toggle = tv({
  slots: {
    track: "me-3 shrink-0 bg-gray-200 rounded-full peer-focus:ring-4 peer-checked:after:translate-x-full peer-checked:rtl:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:bg-gray-600 dark:border-gray-500 relative ",
    label: "flex items-center",
    input: "w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 rounded-sm dark:bg-gray-700 dark:border-gray-600 sr-only peer"
  },
  variants: {
    disabled: {
      true: { label: "cursor-not-allowed opacity-50" }
    },
    checked: {
      true: "",
      false: ""
    },
    off_state_label: {
      true: { track: "ms-3" }
    },
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: {
        track: "peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 peer-checked:bg-primary-600"
      },
      secondary: {
        track: "peer-focus:ring-secondary-300 dark:peer-focus:ring-secondary-800 peer-checked:bg-secondary-600"
      },
      gray: {
        track: "peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 peer-checked:bg-gray-500"
      },
      red: {
        track: "peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600"
      },
      orange: {
        track: "peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500"
      },
      amber: {
        track: "peer-focus:ring-amber-300 dark:peer-focus:ring-amber-800 peer-checked:bg-amber-600"
      },
      yellow: {
        track: "peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400"
      },
      lime: {
        track: "peer-focus:ring-lime-300 dark:peer-focus:ring-lime-800 peer-checked:bg-lime-500"
      },
      green: {
        track: "peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600"
      },
      emerald: {
        track: "peer-focus:ring-emerald-300 dark:peer-focus:ring-emerald-800 peer-checked:bg-emerald-600"
      },
      teal: {
        track: "peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600"
      },
      cyan: {
        track: "peer-focus:ring-cyan-300 dark:peer-focus:ring-cyan-800 peer-checked:bg-cyan-600"
      },
      sky: {
        track: "peer-focus:ring-sky-300 dark:peer-focus:ring-sky-800 peer-checked:bg-sky-600"
      },
      blue: {
        track: "peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600"
      },
      indigo: {
        track: "peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 peer-checked:bg-indigo-600"
      },
      violet: {
        track: "peer-focus:ring-violet-300 dark:peer-focus:ring-violet-800 peer-checked:bg-violet-600"
      },
      purple: {
        track: "peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600"
      },
      fuchsia: {
        track: "peer-focus:ring-fuchsia-300 dark:peer-focus:ring-fuchsia-800 peer-checked:bg-fuchsia-600"
      },
      pink: {
        track: "peer-focus:ring-pink-300 dark:peer-focus:ring-pink-800 peer-checked:bg-pink-600"
      },
      rose: {
        track: "peer-focus:ring-rose-300 dark:peer-focus:ring-rose-800 peer-checked:bg-rose-600"
      }
    },
    size: {
      small: {
        track: "w-9 h-5 after:top-[2px] after:start-[2px] after:h-4 after:w-4"
      },
      default: {
        track: "w-11 h-6 after:top-0.5 after:start-[2px] after:h-5 after:w-5"
      },
      large: {
        track: "w-14 h-7 after:top-0.5 after:start-[4px]  after:h-6 after:w-6"
      }
    }
  },
  defaultVariants: {
    color: "primary"
  }
});
