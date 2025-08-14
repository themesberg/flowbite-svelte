import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "$lib/theme/themeUtils";

// Variants
export type TableVariants = VariantProps<typeof table> & Classes<typeof table>;
export type TableSearchVariants = Omit<VariantProps<typeof tableSearch>, "color"> & Classes<typeof tableSearch>;

// Export color type for use in props
export type TableSearchColor = "default" | "blue" | "green" | "red" | "yellow" | "purple" | "indigo" | "pink" | "custom" | undefined;

export const table = tv({
  slots: {
    div: "relative overflow-x-auto",
    table: "w-full text-left text-sm"
  },
  variants: {
    color: {
      // default, primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      default: { table: "text-gray-500 dark:text-gray-400" },
      primary: { table: "text-primary-100 dark:text-primary-100" },
      secondary: { table: "text-secondary-100 dark:text-secondary-100" },
      gray: { table: "text-gray-100 dark:text-gray-100" },
      red: { table: "text-red-100 dark:text-red-100" },
      orange: { table: "text-orange-100 dark:text-orange-100" },
      amber: { table: "text-amber-100 dark:text-amber-100" },
      yellow: { table: "text-yellow-100 dark:text-yellow-100" },
      lime: { table: "text-lime-100 dark:text-lime-100" },
      green: { table: "text-green-100 dark:text-green-100" },
      emerald: { table: "text-emerald-100 dark:text-emerald-100" },
      teal: { table: "text-teal-100 dark:text-teal-100" },
      cyan: { table: "text-cyan-100 dark:text-cyan-100" },
      sky: { table: "text-sky-100 dark:text-sky-100" },
      blue: { table: "text-blue-100 dark:text-blue-100" },
      indigo: { table: "text-indigo-100 dark:text-indigo-100" },
      violet: { table: "text-violet-100 dark:text-violet-100" },
      purple: { table: "text-purple-100 dark:text-purple-100" },
      fuchsia: { table: "text-fuchsia-100 dark:text-fuchsia-100" },
      pink: { table: "text-pink-100 dark:text-pink-100" },
      rose: { table: "text-rose-100 dark:text-rose-100" }
    },
    shadow: {
      true: { div: "shadow-md sm:rounded-lg" }
    }
  }
});

export const tableBodyRow = tv({
  base: "",
  variants: {
    color: {
      default: "bg-white dark:bg-gray-800 dark:border-gray-700",
      primary: "bg-white bg-primary-500 border-primary-400",
      secondary: "bg-white bg-secondary-500 border-secondary-400",
      gray: "bg-gray-500 border-gray-400",
      red: "bg-red-500 border-red-400",
      orange: "bg-orange-500 border-orange-400",
      amber: "bg-amber-500 border-amber-400",
      yellow: "bg-yellow-500 border-yellow-400",
      lime: "bg-lime-500 border-lime-400",
      green: "bg-white bg-green-500 border-green-400",
      emerald: "bg-emerald-500 border-emerald-400",
      teal: "bg-teal-500 border-teal-400",
      cyan: "bg-cyan-500 border-cyan-400",
      sky: "bg-sky-500 border-sky-400",
      blue: "bg-white bg-blue-500 border-blue-400",
      indigo: "bg-indigo-500 border-indigo-400",
      violet: "bg-violet-500 border-violet-400",
      purple: "bg-purple-500 border-purple-400",
      fuchsia: "bg-fuchsia-500 border-fuchsia-400",
      pink: "bg-pink-500 border-pink-400",
      rose: "bg-rose-500 border-rose-400"
    },
    hoverable: {
      true: ""
    },
    striped: {
      true: ""
    },
    border: {
      true: "border-b last:border-b-0"
    }
  },
  compoundVariants: [
    {
      hoverable: true,
      color: "default",
      class: "hover:bg-gray-50 dark:hover:bg-gray-600"
    },
    {
      hoverable: true,
      color: "primary",
      class: "hover:bg-primary-400 dark:hover:bg-primary-400"
    },
    {
      hoverable: true,
      color: "secondary",
      class: "hover:bg-secondary-400 dark:hover:bg-secondary-400"
    },
    {
      hoverable: true,
      color: "gray",
      class: "hover:bg-gray-400 dark:hover:bg-gray-400"
    },
    {
      hoverable: true,
      color: "red",
      class: "hover:bg-red-400 dark:hover:bg-red-400"
    },
    {
      hoverable: true,
      color: "orange",
      class: "hover:bg-orange-400 dark:hover:bg-orange-400"
    },
    {
      hoverable: true,
      color: "amber",
      class: "hover:bg-amber-400 dark:hover:bg-amber-400"
    },
    {
      hoverable: true,
      color: "yellow",
      class: "hover:bg-yellow-400 dark:hover:bg-yellow-400"
    },
    {
      hoverable: true,
      color: "lime",
      class: "hover:bg-lime-400 dark:hover:bg-lime-400"
    },
    {
      hoverable: true,
      color: "green",
      class: "hover:bg-green-400 dark:hover:bg-green-400"
    },
    {
      hoverable: true,
      color: "emerald",
      class: "hover:bg-emerald-400 dark:hover:bg-emerald-400"
    },
    {
      hoverable: true,
      color: "teal",
      class: "hover:bg-teal-400 dark:hover:bg-teal-400"
    },
    {
      hoverable: true,
      color: "cyan",
      class: "hover:bg-cyan-400 dark:hover:bg-cyan-400"
    },
    {
      hoverable: true,
      color: "sky",
      class: "hover:bg-sky-400 dark:hover:bg-sky-400"
    },
    {
      hoverable: true,
      color: "blue",
      class: "hover:bg-blue-400 dark:hover:bg-blue-400"
    },
    {
      hoverable: true,
      color: "indigo",
      class: "hover:bg-indigo-400 dark:hover:bg-indigo-400"
    },
    {
      hoverable: true,
      color: "violet",
      class: "hover:bg-violet-400 dark:hover:bg-violet-400"
    },
    {
      hoverable: true,
      color: "purple",
      class: "hover:bg-purple-400 dark:hover:bg-purple-400"
    },
    {
      hoverable: true,
      color: "fuchsia",
      class: "hover:bg-fuchsia-400 dark:hover:bg-fuchsia-400"
    },
    {
      hoverable: true,
      color: "pink",
      class: "hover:bg-pink-400 dark:hover:bg-pink-400"
    },
    {
      hoverable: true,
      color: "rose",
      class: "hover:bg-rose-400 dark:hover:bg-rose-400"
    },
    {
      striped: true,
      color: "default",
      class: "odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-700"
    },
    {
      striped: true,
      color: "primary",
      class: "odd:bg-primary-500 even:bg-primary-600 dark:odd:bg-primary-500 dark:even:bg-primary-600"
    },
    {
      striped: true,
      color: "secondary",
      class: "odd:bg-secondary-500 even:bg-secondary-600 dark:odd:bg-secondary-500 dark:even:bg-secondary-600"
    },
    {
      striped: true,
      color: "gray",
      class: "odd:bg-gray-500 even:bg-gray-600 dark:odd:bg-gray-500 dark:even:bg-gray-600"
    },
    // default, primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
    {
      striped: true,
      color: "red",
      class: "odd:bg-red-500 even:bg-red-600 dark:odd:bg-red-500 dark:even:bg-red-600"
    },
    {
      striped: true,
      color: "orange",
      class: "odd:bg-orange-500 even:bg-orange-600 dark:odd:bg-orange-500 dark:even:bg-orange-600"
    },
    {
      striped: true,
      color: "amber",
      class: "odd:bg-amber-500 even:bg-amber-600 dark:odd:bg-amber-500 dark:even:bg-amber-600"
    },
    {
      striped: true,
      color: "yellow",
      class: "odd:bg-yellow-500 even:bg-yellow-600 dark:odd:bg-yellow-500 dark:even:bg-yellow-600"
    },
    {
      striped: true,
      color: "lime",
      class: "odd:bg-lime-500 even:bg-lime-600 dark:odd:bg-lime-500 dark:even:bg-lime-600"
    },
    {
      striped: true,
      color: "green",
      class: "odd:bg-green-500 even:bg-green-600 dark:odd:bg-green-500 dark:even:bg-green-600"
    },
    {
      striped: true,
      color: "emerald",
      class: "odd:bg-emerald-500 even:bg-emerald-600 dark:odd:bg-emerald-500 dark:even:bg-emerald-600"
    },
    {
      striped: true,
      color: "teal",
      class: "odd:bg-teal-500 even:bg-teal-600 dark:odd:bg-teal-500 dark:even:bg-teal-600"
    },
    {
      striped: true,
      color: "cyan",
      class: "odd:bg-cyan-500 even:bg-cyan-600 dark:odd:bg-cyan-500 dark:even:bg-cyan-600"
    },
    {
      striped: true,
      color: "sky",
      class: "odd:bg-sky-500 even:bg-sky-600 dark:odd:bg-sky-500 dark:even:bg-sky-600"
    },
    {
      striped: true,
      color: "blue",
      class: "odd:bg-blue-500 even:bg-blue-600 dark:odd:bg-blue-500 dark:even:bg-blue-600"
    },
    {
      striped: true,
      color: "indigo",
      class: "odd:bg-indigo-500 even:bg-indigo-600 dark:odd:bg-indigo-500 dark:even:bg-indigo-600"
    },
    {
      striped: true,
      color: "violet",
      class: "odd:bg-violet-500 even:bg-violet-600 dark:odd:bg-violet-500 dark:even:bg-violet-600"
    },
    {
      striped: true,
      color: "purple",
      class: "odd:bg-purple-500 even:bg-purple-600 dark:odd:bg-purple-500 dark:even:bg-purple-600"
    },
    {
      striped: true,
      color: "fuchsia",
      class: "odd:bg-fuchsia-500 even:bg-fuchsia-600 dark:odd:bg-fuchsia-500 dark:even:bg-fuchsia-600"
    },
    {
      striped: true,
      color: "pink",
      class: "odd:bg-pink-500 even:bg-pink-600 dark:odd:bg-pink-500 dark:even:bg-pink-600"
    },
    {
      striped: true,
      color: "rose",
      class: "odd:bg-rose-500 even:bg-rose-600 dark:odd:bg-rose-500 dark:even:bg-rose-600"
    }
  ]
});

export const tableHead = tv({
  base: "text-xs uppercase",
  variants: {
    color: {
      // default, primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose

      default: "text-gray-700 dark:text-gray-400 bg-gray-50 dark:bg-gray-700",
      primary: "text-white dark:text-white bg-primary-700 dark:bg-primary-700",
      secondary: "text-white dark:text-white bg-secondary-700 dark:bg-secondary-700",
      gray: "text-white dark:text-white bg-gray-700 dark:bg-gray-700",
      red: "text-white dark:text-white bg-red-700 dark:bg-red-700",
      orange: "text-white dark:text-white bg-orange-700 dark:bg-orange-700",
      amber: "text-white dark:text-white bg-amber-700 dark:bg-amber-700",
      yellow: "text-white dark:text-white bg-yellow-700 dark:bg-yellow-700",
      lime: "text-white dark:text-white bg-lime-700 dark:bg-lime-700",
      green: "text-white dark:text-white bg-green-700 dark:bg-green-700",
      emerald: "text-white dark:text-white bg-emerald-700 dark:bg-emerald-700",
      teal: "text-white dark:text-white bg-teal-700 dark:bg-teal-700",
      cyan: "text-white dark:text-white bg-cyan-700 dark:bg-cyan-700",
      sky: "text-white dark:text-white bg-sky-700 dark:bg-sky-700",
      blue: "text-white dark:text-white bg-blue-700 dark:bg-blue-700",
      indigo: "text-white dark:text-white bg-indigo-700 dark:bg-indigo-700",
      violet: "text-white dark:text-white bg-violet-700 dark:bg-violet-700",
      purple: "text-white dark:text-white bg-purple-700 dark:bg-purple-700",
      fuchsia: "text-white dark:text-white bg-fuchsia-700 dark:bg-fuchsia-700",
      pink: "text-white dark:text-white bg-pink-700 dark:bg-pink-700",
      rose: "text-white dark:text-white bg-rose-700 dark:bg-rose-700"
    },
    border: {
      true: "",
      false: ""
    },
    striped: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      color: "default",
      border: true,
      class: "" //"bg-transparent dark:bg-transparent"
    },
    {
      color: "default",
      striped: true,
      class: "" //"bg-transparent dark:bg-transparent border-gray-700"
    },
    {
      striped: true,
      color: "blue",
      class: "border-blue-400"
    },
    {
      striped: true,
      color: "green",
      class: "border-green-400"
    },
    {
      striped: true,
      color: "red",
      class: "border-red-400"
    },
    {
      striped: true,
      color: "yellow",
      class: "border-yellow-400"
    },
    {
      striped: true,
      color: "purple",
      class: "border-purple-400"
    },
    {
      striped: true,
      color: "indigo",
      class: "border-indigo-400"
    },
    {
      striped: true,
      color: "pink",
      class: "border-pink-400"
    }
  ]
});

export const tableBodyCell = tv({
  base: "px-6 py-4 whitespace-nowrap font-medium"
});

export const tableHeadCell = tv({
  base: "px-6 py-3"
});

export const tableSearch = tv({
  slots: {
    root: "relative overflow-x-auto shadow-md sm:rounded-lg",
    inner: "p-4",
    search: "relative mt-1",
    svgDiv: "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none",
    svg: "w-5 h-5",
    input: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
    table: "w-full text-left text-sm"
  },
  variants: {
    color: {
      default: {
        svg: "text-gray-500 dark:text-gray-400",
        table: "text-gray-500 dark:text-gray-400"
      },
      blue: {
        svg: "text-blue-500 dark:text-blue-400",
        table: "text-blue-100 dark:text-blue-100"
      },
      green: {
        svg: "text-green-500 dark:text-green-400",
        table: "text-green-100 dark:text-green-100"
      },
      red: {
        svg: "text-red-500 dark:text-red-400",
        table: "text-red-100 dark:text-red-100"
      },
      yellow: {
        svg: "text-yellow-500 dark:text-yellow-400",
        table: "text-yellow-100 dark:text-yellow-100"
      },
      purple: {
        svg: "text-purple-500 dark:text-purple-400",
        table: "text-purple-100 dark:text-purple-100"
      },
      indigo: {
        svg: "text-indigo-500 dark:text-indigo-400",
        table: "text-indigo-100 dark:text-indigo-100"
      },
      pink: {
        svg: "text-pink-500 dark:text-pink-400",
        table: "text-pink-100 dark:text-pink-100"
      }
    },
    striped: {
      true: {
        table: "[&_tbody_tr:nth-child(odd)]:bg-white [&_tbody_tr:nth-child(odd)]:dark:bg-gray-900 [&_tbody_tr:nth-child(even)]:bg-gray-50 [&_tbody_tr:nth-child(even)]:dark:bg-gray-800"
      },
      false: {}
    },
    hoverable: {
      true: {
        table: "[&_tbody_tr]:hover:bg-gray-50 [&_tbody_tr]:dark:hover:bg-gray-600"
      },
      false: {}
    }
  },
  defaultVariants: {
    color: "default",
    striped: false,
    hoverable: false
  }
});
