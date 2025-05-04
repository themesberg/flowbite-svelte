import { tv } from "tailwind-variants";

export const datepicker = tv({
  slots: {
    base: "inline-block rounded-lg bg-white dark:bg-gray-700 shadow-lg p-4",
    input: "w-full rounded-md border px-4 py-2 text-sm focus:ring-2 focus:outline-none outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white",
    titleVariant: "mb-2 text-lg font-semibold text-gray-900 dark:text-white",
    polite: "text-sm rounded-lg text-gray-900 dark:text-white bg-white dark:bg-gray-700 font-semibold py-2.5 px-5 hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-200",
    button: "absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 focus:outline-hidden dark:text-gray-400",
    actionButtons: "mt-4 flex justify-between",
    columnHeader: "text-center text-sm font-medium text-gray-500 dark:text-gray-400",
    grid: "grid grid-cols-7 gap-1 w-64",
    nav: "mb-4 flex items-center justify-between",
    dayButton: "h-8 w-full hover:bg-gray-100 dark:hover:bg-gray-600 block flex-1 leading-9 border-0 rounded-lg cursor-pointer text-center text-gray-900 dark:text-white font-semibold text-sm day"
  },
  variants: {
    color: {
      primary: { input: "focus:ring-primary-500 dark:focus:ring-primary-400", dayButton: "bg-primary-100 dark:bg-primary-900" },
      blue: { input: "focus:ring-blue-500 dark:focus:ring-blue-400", dayButton: "bg-blue-100 dark:bg-blue-900" },
      red: { input: "focus:ring-red-500 dark:focus:ring-red-400", dayButton: "bg-red-100 dark:bg-red-900" },
      green: { input: "focus:ring-green-500 dark:focus:ring-green-400", dayButton: "bg-green-100 dark:bg-green-900" },
      yellow: { input: "focus:ring-yellow-500 dark:focus:ring-yellow-400", dayButton: "bg-yellow-100 dark:bg-yellow-900" },
      purple: { input: "focus:ring-purple-500 dark:focus:ring-purple-400", dayButton: "bg-purple-100 dark:bg-purple-900" },
      dark: { input: "focus:ring-gray-500 dark:focus:ring-gray-400", dayButton: "bg-gray-100 dark:bg-gray-900" },
      light: { input: "focus:ring-gray-500 dark:focus:ring-gray-400", dayButton: "bg-gray-100 dark:bg-gray-900" },
      alternative: { input: "focus:ring-alternative-500 dark:focus:ring-alternative-400", dayButton: "bg-alternative-100 dark:bg-alternative-900" },
      secondary: { input: "focus:ring-secondary-500 dark:focus:ring-secondary-400", dayButton: "bg-secondary-100 dark:bg-secondary-900" },
      gray: { input: "focus:ring-gray-500 dark:focus:ring-gray-400", dayButton: "bg-gray-100 dark:bg-gray-900" },
      orange: { input: "focus:ring-orange-500 dark:focus:ring-orange-400", dayButton: "bg-orange-100 dark:bg-orange-900" },
      amber: { input: "focus:ring-amber-500 dark:focus:ring-amber-400", dayButton: "bg-amber-100 dark:bg-amber-900" },
      lime: { input: "focus:ring-lime-500 dark:focus:ring-lime-400", dayButton: "bg-lime-100 dark:bg-lime-900" },
      emerald: { input: "focus:ring-emerald-500 dark:focus:ring-emerald-400", dayButton: "bg-emerald-100 dark:bg-emerald-900" },
      teal: { input: "focus:ring-teal-500 dark:focus:ring-teal-400", dayButton: "bg-teal-100 dark:bg-teal-900" },
      cyan: { input: "focus:ring-cyan-500 dark:focus:ring-cyan-400", dayButton: "bg-cyan-100 dark:bg-cyan-900" },
      sky: { input: "focus:ring-sky-500 dark:focus:ring-sky-400", dayButton: "bg-sky-100 dark:bg-sky-900" },
      indigo: { input: "focus:ring-indigo-500 dark:focus:ring-indigo-400", dayButton: "bg-indigo-100 dark:bg-indigo-900" },
      violet: { input: "focus:ring-violet-500 dark:focus:ring-violet-400", dayButton: "bg-violet-100 dark:bg-violet-900" },
      fuchsia: { input: "focus:ring-fuchsia-500 dark:focus:ring-fuchsia-400", dayButton: "bg-fuchsia-100 dark:bg-fuchsia-900" },
      pink: { input: "focus:ring-pink-500 dark:focus:ring-pink-400", dayButton: "bg-pink-100 dark:bg-pink-900" },
      rose: { input: "focus:ring-rose-500 dark:focus:ring-rose-400", dayButton: "bg-rose-100 dark:bg-rose-900" }
    },
    inline: {
      false: { base: "absolute z-10 mt-1" }
    },
    current: {
      true: { dayButton: "text-gray-400 dark:text-gray-500" }
    },
    today: {
      true: { dayButton: "font-bold" }
    }
  },
  compoundVariants: []
});
