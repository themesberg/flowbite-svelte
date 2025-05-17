import { tv, type VariantProps } from "tailwind-variants";

export type FloatingLabelInputVaratiants = VariantProps<typeof floatingLabelInput>;

export const floatingLabelInput = tv({
  slots: {
    base: "relative",
    input: "block w-full text-sm text-gray-900 bg-transparent appearance-none dark:text-white focus:outline-hidden focus:ring-0 peer",
    label: "absolute text-sm duration-300 transform scale-75 z-10 origin-left rtl:origin-right peer-placeholder-shown:scale-100 peer-focus:scale-75",
    clearbtn: "absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
  },
  variants: {
    variant: {
      filled: {
        base: "relative",
        input: "rounded-t-lg border-0 border-b-2 bg-gray-50 dark:bg-gray-700",
        label: "-translate-y-4 start-2.5 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-4"
      },
      outlined: {
        base: "relative",
        input: "rounded-lg border",
        label: "-translate-y-4 bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-4 start-1"
      },
      standard: {
        base: "relative z-0",
        input: "border-0 border-b-2",
        label: "-translate-y-6 -z-10 peer-focus:start-0 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-6"
      }
    },
    size: {
      small: {},
      default: {}
    },
    color: {
      default: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-primary-500 focus:border-primary-600",
        label: "text-gray-500 dark:text-gray-400 peer-focus:text-primary-600 dark:peer-focus:text-primary-500"
      },
      primary: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-primary-500 focus:border-primary-600",
        label: "text-primary-500 dark:text-primary-400 peer-focus:text-primary-600 dark:peer-focus:text-primary-500"
      },
      secondary: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-secondary-500 focus:border-secondary-600",
        label: "text-secondary-500 dark:text-secondary-400 peer-focus:text-secondary-600 dark:peer-focus:text-secondary-500"
      },
      gray: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-gray-500 focus:border-gray-600",
        label: "text-gray-500 dark:text-gray-400 peer-focus:text-gray-600 dark:peer-focus:text-gray-500"
      },
      red: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-red-500 focus:border-red-600",
        label: "text-red-500 dark:text-red-400 peer-focus:text-red-600 dark:peer-focus:text-red-500"
      },
      orange: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-orange-500 focus:border-orange-600",
        label: "text-orange-500 dark:text-orange-400 peer-focus:text-orange-600 dark:peer-focus:text-orange-500"
      },
      amber: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-amber-500 focus:border-amber-600",
        label: "text-amber-500 dark:text-amber-400 peer-focus:text-amber-600 dark:peer-focus:text-amber-500"
      },
      yellow: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-yellow-500 focus:border-yellow-600",
        label: "text-yellow-500 dark:text-yellow-400 peer-focus:text-yellow-600 dark:peer-focus:text-yellow-500"
      },
      lime: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-lime-500 focus:border-lime-600",
        label: "text-lime-500 dark:text-lime-400 peer-focus:text-lime-600 dark:peer-focus:text-lime-500"
      },
      green: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-green-500 focus:border-green-600",
        label: "text-green-500 dark:text-green-400 peer-focus:text-green-600 dark:peer-focus:text-green-500"
      },
      emerald: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-emerald-500 focus:border-emerald-600",
        label: "text-emerald-500 dark:text-emerald-400 peer-focus:text-emerald-600 dark:peer-focus:text-emerald-500"
      },
      teal: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-teal-500 focus:border-teal-600",
        label: "text-teal-500 dark:text-teal-400 peer-focus:text-teal-600 dark:peer-focus:text-teal-500"
      },
      cyan: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-cyan-500 focus:border-cyan-600",
        label: "text-cyan-500 dark:text-cyan-400 peer-focus:text-cyan-600 dark:peer-focus:text-cyan-500"
      },
      sky: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-sky-500 focus:border-sky-600",
        label: "text-sky-500 dark:text-sky-400 peer-focus:text-sky-600 dark:peer-focus:text-sky-500"
      },
      blue: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600",
        label: "text-blue-500 dark:text-blue-400 peer-focus:text-blue-600 dark:peer-focus:text-blue-500"
      },
      indigo: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-indigo-500 focus:border-indigo-600",
        label: "text-indigo-500 dark:text-indigo-400 peer-focus:text-indigo-600 dark:peer-focus:text-indigo-500"
      },
      violet: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-violet-500 focus:border-violet-600",
        label: "text-violet-600 dark:text-violet-500 peer-focus:text-violet-600 dark:peer-focus:text-violet-500"
      },
      purple: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-purple-500 focus:border-purple-600",
        label: "text-purple-600 dark:text-purple-500 peer-focus:text-purple-600 dark:peer-focus:text-purple-500"
      },
      fuchsia: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-fuchsia-500 focus:border-fuchsia-600",
        label: "text-fuchsia-600 dark:text-fuchsia-500 peer-focus:text-fuchsia-600 dark:peer-focus:text-fuchsia-500"
      },
      pink: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-pink-500 focus:border-pink-600",
        label: "text-pink-600 dark:text-pink-500 peer-focus:text-pink-600 dark:peer-focus:text-pink-500"
      },
      rose: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-rose-500 focus:border-rose-600",
        label: "text-rose-600 dark:text-rose-500 peer-focus:text-rose-600 dark:peer-focus:text-rose-500"
      }
    }
  },
  compoundVariants: [
    {
      variant: "filled",
      size: "small",
      class: {
        input: "px-2.5 pb-1.5 pt-4",
        label: "top-3"
      }
    },
    {
      variant: "filled",
      size: "default",
      class: {
        input: "px-2.5 pb-2.5 pt-5",
        label: "top-4"
      }
    },
    {
      variant: "outlined",
      size: "small",
      class: {
        input: "px-2.5 pb-1.5 pt-3",
        label: "top-1"
      }
    },
    {
      variant: "outlined",
      size: "default",
      class: {
        input: "px-2.5 pb-2.5 pt-4",
        label: "top-2"
      }
    },
    {
      variant: "standard",
      size: "small",
      class: {
        input: "py-2 px-0",
        label: "top-3"
      }
    },
    {
      variant: "standard",
      size: "default",
      class: {
        input: "py-2.5 px-0",
        label: "top-3"
      }
    },
    {
      variant: "filled",
      color: "primary",
      class: {
        input: "dark:focus:border-primary-500 focus:border-primary-600"
      }
    }
  ],
  defaultVariants: {
    variant: "standard",
    size: "default",
    color: "primary"
  }
});
