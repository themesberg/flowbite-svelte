import { tv, type VariantProps } from "tailwind-variants";

export type RadioVariants = VariantProps<typeof radio>;

export const radio = tv({
  slots: {
    input: "flex items-center w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2",
    label: "flex items-center"
  },
  variants: {
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: {
        input: "text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600"
      },
      secondary: {
        input: "text-secondary-600 focus:ring-secondary-500 dark:focus:ring-secondary-600"
      },
      gray: {
        input: "text-gray-600 focus:ring-gray-500 dark:focus:ring-gray-600"
      },
      red: { input: "text-red-600 focus:ring-red-500 dark:focus:ring-red-600" },
      orange: {
        input: "text-orange-500 focus:ring-orange-500 dark:focus:ring-orange-600"
      },
      amber: {
        input: "text-amber-600 focus:ring-amber-500 dark:focus:ring-amber-600"
      },
      yellow: {
        input: "text-yellow-400 focus:ring-yellow-500 dark:focus:ring-yellow-600"
      },
      lime: {
        input: "text-lime-600 focus:ring-lime-500 dark:focus:ring-lime-600"
      },
      green: {
        input: "text-green-600 focus:ring-green-500 dark:focus:ring-green-600"
      },
      emerald: {
        input: "text-emerald-600 focus:ring-emerald-500 dark:focus:ring-emerald-600"
      },
      teal: {
        input: "text-teal-600 focus:ring-teal-500 dark:focus:ring-teal-600"
      },
      cyan: {
        input: "text-cyan-600 focus:ring-cyan-500 dark:focus:ring-cyan-600"
      },
      sky: { input: "text-sky-600 focus:ring-sky-500 dark:focus:ring-sky-600" },
      blue: {
        input: "text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-600"
      },
      indigo: {
        input: "text-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600"
      },
      violet: {
        input: "text-violet-600 focus:ring-violet-500 dark:focus:ring-violet-600"
      },
      purple: {
        input: "text-purple-600 focus:ring-purple-500 dark:focus:ring-purple-600"
      },
      fuchsia: {
        input: "text-fuchsia-600 focus:ring-fuchsia-500 dark:focus:ring-fuchsia-600"
      },
      pink: {
        input: "text-pink-600 focus:ring-pink-500 dark:focus:ring-pink-600"
      },
      rose: {
        input: "text-rose-600 focus:ring-rose-500 dark:focus:ring-rose-600"
      }
    },
    tinted: {
      true: { input: "dark:bg-gray-600 dark:border-gray-500" },
      false: { input: "dark:bg-gray-700 dark:border-gray-600" }
    },
    custom: {
      true: { input: "sr-only peer" },
      false: { input: "relative" }
    },
    inline: {
      true: { label: "inline-flex" },
      false: { label: "flex" }
    }
  },
  defaultVariants: {
    color: "primary"
  }
});

export const radiobutton = tv({
  base: "",
  variants: {
    inline: {
      true: "inline-flex",
      false: "flex"
    }
  },
  defaultVariants: {
    inline: true
  }
});
