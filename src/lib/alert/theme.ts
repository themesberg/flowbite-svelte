import { tv, type VariantProps } from "tailwind-variants";

type AlertVariants = VariantProps<typeof alert>;

const alert = tv({
  base: "p-4 gap-3 text-sm",
  variants: {
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: "bg-primary-50 dark:bg-gray-800 text-primary-800 dark:text-primary-400",
      secondary: "bg-secondary-50 dark:bg-secondary-800 text-secondary-800 dark:text-secondary-400",
      gray: "bg-gray-100 text-gray-500 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300",
      red: "bg-red-100 text-red-500 focus:ring-red-400 dark:bg-red-200 dark:text-red-600",
      orange: "bg-orange-100 text-orange-500 focus:ring-orange-400 dark:bg-orange-200 dark:text-orange-600",
      amber: "bg-amber-100 text-amber-500 focus:ring-amber-400 dark:bg-amber-200 dark:text-amber-600",
      yellow: "bg-yellow-100 text-yellow-500 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600",
      lime: "bg-lime-100 text-lime-500 focus:ring-lime-400 dark:bg-lime-200 dark:text-lime-600",
      green: "bg-green-100 text-green-500 focus:ring-green-400 dark:bg-green-200 dark:text-green-600",
      emerald: "bg-emerald-100 text-emerald-500 focus:ring-emerald-400 dark:bg-emerald-200 dark:text-emerald-600",
      teal: "bg-teal-100 text-teal-500 focus:ring-teal-400 dark:bg-teal-200 dark:text-teal-600",
      cyan: "bg-cyan-100 text-cyan-500 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600",
      sky: "bg-sky-100 text-sky-500 focus:ring-sky-400 dark:bg-sky-200 dark:text-sky-600",
      blue: "bg-blue-100 text-blue-500 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600",
      indigo: "bg-indigo-100 text-indigo-500 focus:ring-indigo-400 dark:bg-indigo-200 dark:text-indigo-600",
      violet: "bg-violet-100 text-violet-500 focus:ring-violet-400 dark:bg-violet-200 dark:text-violet-600",
      purple: "bg-purple-100 text-purple-500 focus:ring-purple-400 dark:bg-purple-200 dark:text-purple-600",
      fuchsia: "bg-fuchsia-100 text-fuchsia-500 focus:ring-fuchsia-400 dark:bg-fuchsia-200 dark:text-fuchsia-600",
      pink: "bg-pink-100 text-pink-500 focus:ring-pink-400 dark:bg-pink-200 dark:text-pink-600",
      rose: "bg-rose-100 text-rose-500 focus:ring-rose-400 dark:bg-rose-200 dark:text-rose-600"
    },
    rounded: {
      true: "rounded-lg"
    },
    border: {
      true: "border"
    },
    icon: {
      true: "flex items-center"
    },
    dismissable: {
      true: "flex items-center"
    }
  },
  compoundVariants: [
    // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
    {
      border: true,
      color: "primary",
      class: "border-primary-500 dark:border-primary-200 divide-primary-500 dark:divide-primary-200"
    },
    {
      border: true,
      color: "secondary",
      class: "border-secondary-500 dark:border-secondary-200 divide-secondary-500 dark:divide-secondary-200"
    },
    {
      border: true,
      color: "gray",
      class: "border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800"
    },
    {
      border: true,
      color: "red",
      class: "border-red-300 dark:border-red-800 divide-red-300 dark:divide-red-800"
    },
    {
      border: true,
      color: "orange",
      class: "border-orange-300 dark:border-orange-800 divide-orange-300 dark:divide-orange-800"
    },
    {
      border: true,
      color: "amber",
      class: "border-amber-300 dark:border-amber-800 divide-amber-300 dark:divide-amber-800"
    },
    {
      border: true,
      color: "yellow",
      class: "border-yellow-300 dark:border-yellow-800 divide-yellow-300 dark:divide-yellow-800"
    },
    {
      border: true,
      color: "lime",
      class: "border-lime-300 dark:border-lime-800 divide-lime-300 dark:divide-lime-800"
    },
    {
      border: true,
      color: "green",
      class: "border-green-300 dark:border-green-800 divide-green-300 dark:divide-green-800"
    },
    {
      border: true,
      color: "emerald",
      class: "border-emerald-300 dark:border-emerald-800 divide-emerald-300 dark:divide-emerald-800"
    },
    {
      border: true,
      color: "teal",
      class: "border-teal-300 dark:border-teal-800 divide-teal-300 dark:divide-teal-800"
    },
    {
      border: true,
      color: "cyan",
      class: "border-cyan-300 dark:border-cyan-800 divide-cyan-300 dark:divide-cyan-800"
    },
    {
      border: true,
      color: "sky",
      class: "border-sky-300 dark:border-sky-800 divide-sky-300 dark:divide-sky-800"
    },
    {
      border: true,
      color: "blue",
      class: "border-blue-300 dark:border-blue-800 divide-blue-300 dark:divide-blue-800"
    },
    {
      border: true,
      color: "indigo",
      class: "border-indigo-300 dark:border-indigo-800 divide-indigo-300 dark:divide-indigo-800"
    },
    //  violet, purple, fuchsia, pink, rose
    {
      border: true,
      color: "violet",
      class: "border-violet-300 dark:border-violet-800 divide-violet-300 dark:divide-violet-800"
    },
    {
      border: true,
      color: "purple",
      class: "border-purple-300 dark:border-purple-800 divide-purple-300 dark:divide-purple-800"
    },
    {
      border: true,
      color: "fuchsia",
      class: "border-fuchsia-300 dark:border-fuchsia-800 divide-fuchsia-300 dark:divide-fuchsia-800"
    },
    {
      border: true,
      color: "pink",
      class: "border-pink-300 dark:border-pink-800 divide-pink-300 dark:divide-pink-800"
    },
    {
      border: true,
      color: "rose",
      class: "border-rose-300 dark:border-rose-800 divide-rose-300 dark:divide-rose-800"
    }
  ],
  defaultVariants: {
    color: "primary",
    rounded: true
  }
});

export { alert, type AlertVariants };
