import { tv } from "tailwind-variants";

export const input = tv({
  slots: {
    base: "relative w-full",
    input: "block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right focus:outline-none",
    left: "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400 pointer-events-none start-0 ps-2.5",
    right: "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400 end-0 p-2.5"
  },
  variants: {
    size: {
      sm: { input: "text-xs ps-9 pe-9 p-2" },
      md: { input: "text-sm ps-10 pe-10 p-2.5" },
      lg: { input: "sm:text-base ps-11 pe-11 p-3" }
    },
    color: {
      default: {
        input: "border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-50 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
      },
      tinted: {
        input: "border border-gray-300 dark:border-gray-500 bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400"
      },
      primary: {
        input: "border border-primary-200 dark:border-primary-400 focus:ring-primary-500 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 bg-primary-50 text-primary-900 placeholder-primary-700 dark:text-primary-400 dark:placeholder-primary-500 dark:bg-gray-700"
      },
      secondary: {
        input: "border border-secondary-200 dark:border-secondary-400 focus:ring-secondary-500 focus:border-secondary-600 dark:focus:ring-secondary-500 dark:focus:border-secondary-500 bg-secondary-50 text-secondary-900 placeholder-secondary-700 dark:text-secondary-400 dark:placeholder-secondary-500 dark:bg-gray-700"
      },
      green: {
        input: "border border-green-200 dark:border-green-400 focus:ring-green-500 focus:border-green-600 dark:focus:ring-green-500 dark:focus:border-green-500 bg-green-50 text-green-900 placeholder-green-700 dark:text-green-400 dark:placeholder-green-500 dark:bg-gray-700"
      },
      emerald: {
        input: "border border-emerald-200 dark:border-emerald-400 focus:ring-emerald-500 focus:border-emerald-600 dark:focus:ring-emerald-500 dark:focus:border-emerald-500 bg-emerald-50 text-emerald-900 placeholder-emerald-700 dark:text-emerald-400 dark:placeholder-emerald-500 dark:bg-gray-700"
      },
      red: {
        input: "border border-red-200 dark:border-red-400 focus:ring-red-500 focus:border-red-600 dark:focus:ring-red-500 dark:focus:border-red-500 bg-red-50 text-red-900 placeholder-red-700 dark:text-red-400 dark:placeholder-red-500 dark:bg-gray-700"
      },
      blue: {
        input: "border border-blue-200 dark:border-blue-400 focus:ring-blue-500 focus:border-blue-600 dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-blue-50 text-blue-900 placeholder-blue-700 dark:text-blue-400 dark:placeholder-blue-500 dark:bg-gray-700"
      },
      yellow: {
        input: "border border-yellow-200 dark:border-yellow-400 focus:ring-yellow-500 focus:border-yellow-600 dark:focus:ring-yellow-500 dark:focus:border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 dark:text-yellow-400 dark:placeholder-yellow-500 dark:bg-gray-700"
      },
      orange: {
        input: "border border-orange-200 dark:border-orange-400 focus:ring-orange-500 focus:border-orange-600 dark:focus:ring-orange-500 dark:focus:border-orange-500 bg-orange-50 text-orange-900 placeholder-orange-700 dark:text-orange-400 dark:placeholder-orange-500 dark:bg-gray-700"
      },
      gray: {
        input: "border border-gray-200 dark:border-gray-400 focus:ring-gray-500 focus:border-gray-600 dark:focus:ring-gray-500 dark:focus:border-gray-500 bg-gray-50 text-gray-900 placeholder-gray-700 dark:text-gray-400 dark:placeholder-gray-500 dark:bg-gray-700"
      },
      teal: {
        input: "border border-teal-200 dark:border-teal-400 focus:ring-teal-500 focus:border-teal-600 dark:focus:ring-teal-500 dark:focus:border-teal-500 bg-teal-50 text-teal-900 placeholder-teal-700 dark:text-teal-400 dark:placeholder-teal-500 dark:bg-gray-700"
      },
      cyan: {
        input: "border border-cyan-200 dark:border-cyan-400 focus:ring-cyan-500 focus:border-cyan-600 dark:focus:ring-cyan-500 dark:focus:border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 dark:text-cyan-400 dark:placeholder-cyan-500 dark:bg-gray-700"
      },
      sky: {
        input: "border border-sky-200 dark:border-sky-400 focus:ring-sky-500 focus:border-sky-600 dark:focus:ring-sky-500 dark:focus:border-sky-500 bg-sky-50 text-sky-900 placeholder-sky-700 dark:text-sky-400 dark:placeholder-sky-500 dark:bg-gray-700"
      },
      indigo: {
        input: "border border-indigo-200 dark:border-indigo-400 focus:ring-indigo-500 focus:border-indigo-600 dark:focus:ring-indigo-500 dark:focus:border-indigo-500 bg-indigo-50 text-indigo-900 placeholder-indigo-700 dark:text-indigo-400 dark:placeholder-indigo-500 dark:bg-gray-700"
      },
      lime: {
        input: "border border-lime-200 dark:border-lime-400 focus:ring-lime-500 focus:border-lime-600 dark:focus:ring-lime-500 dark:focus:border-lime-500 bg-lime-50 text-lime-900 placeholder-lime-700 dark:text-lime-400 dark:placeholder-lime-500 dark:bg-gray-700"
      },
      amber: {
        input: "border border-amber-200 dark:border-amber-400 focus:ring-amber-500 focus:border-amber-600 dark:focus:ring-amber-500 dark:focus:border-amber-500 bg-amber-50 text-amber-900 placeholder-amber-700 dark:text-amber-400 dark:placeholder-amber-500 dark:bg-gray-700"
      },
      violet: {
        input: "border border-violet-200 dark:border-violet-400 focus:ring-violet-500 focus:border-violet-600 dark:focus:ring-violet-500 dark:focus:border-violet-500 bg-violet-50 text-violet-900 placeholder-violet-700 dark:text-violet-400 dark:placeholder-violet-500 dark:bg-gray-700"
      },
      purple: {
        input: "border border-purple-200 dark:border-purple-400 focus:ring-purple-500 focus:border-purple-600 dark:focus:ring-purple-500 dark:focus:border-purple-500 bg-purple-50 text-purple-900 placeholder-purple-700 dark:text-purple-400 dark:placeholder-purple-500 dark:bg-gray-700"
      },
      fuchsia: {
        input: "border border-fuchsia-200 dark:border-fuchsia-400 focus:ring-fuchsia-500 focus:border-fuchsia-600 dark:focus:ring-fuchsia-500 dark:focus:border-fuchsia-500 bg-fuchsia-50 text-fuchsia-900 placeholder-fuchsia-700 dark:text-fuchsia-400 dark:placeholder-fuchsia-500 dark:bg-gray-700"
      },
      pink: {
        input: "border border-pink-200 dark:border-pink-400 focus:ring-pink-500 focus:border-pink-600 dark:focus:ring-pink-500 dark:focus:border-pink-500 bg-pink-50 text-pink-900 placeholder-pink-700 dark:text-pink-400 dark:placeholder-pink-500 dark:bg-gray-700"
      },
      rose: {
        input: "border border-rose-200 dark:border-rose-400 focus:ring-rose-500 focus:border-rose-600 dark:focus:ring-rose-500 dark:focus:border-rose-500 bg-rose-50 text-rose-900 placeholder-rose-700 dark:text-rose-400 dark:placeholder-rose-500 dark:bg-gray-700"
      }
    },
    group: {
      false: { input: "rounded-lg" },
      true: {
        input: "first:rounded-s-lg last:rounded-e-lg [&:not(:first-child)]:-ms-px"
      }
    }
  },
  defaultVariants: {
    size: "md",
    color: "default"
  }
});
