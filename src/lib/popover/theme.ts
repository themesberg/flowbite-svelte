import { tv } from "tailwind-variants";

export const popover = tv({
  slots: {
    base: "popover absolute rounded-lg shadow-md",
    title: "py-2 px-3 rounded-t-md border-b ",
    h3: "font-semibold",
    arrowBase: "absolute pointer-events-none block w-[10px] h-[10px] rotate-45 bg-inherit border-inherit shadow-md"
  },
  variants: {
    color: {
      default: {
        base: "bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700",
        title: "bg-gray-100 border-gray-200 dark:border-gray-600 dark:bg-gray-700",
        h3: "text-gray-900 dark:text-white"
      },
      primary: {
        base: "bg-primary-600 text-white",
        title: "bg-primary-700",
        h3: "text-white"
      },
      secondary: {
        base: "bg-secondary-600 text-white",
        title: "bg-secondary-700",
        h3: "text-white"
      },
      gray: {
        base: "bg-gray-600 text-white",
        title: "bg-gray-700",
        h3: "text-white"
      },
      red: {
        base: "bg-red-600 text-white",
        title: "bg-red-700",
        h3: "text-white"
      },
      orange: {
        base: "bg-orange-600 text-white",
        title: "bg-orange-700",
        h3: "text-white"
      },
      amber: {
        base: "bg-amber-600 text-white",
        title: "bg-amber-700",
        h3: "text-white"
      },
      yellow: {
        base: "bg-yellow-400 text-white",
        title: "bg-yellow-500",
        h3: "text-white"
      },
      lime: {
        base: "bg-lime-600 text-white",
        title: "bg-lime-700",
        h3: "text-white"
      },
      green: {
        base: "bg-green-600 text-white",
        title: "bg-green-700",
        h3: "text-white"
      },
      emerald: {
        base: "bg-emerald-600 text-white",
        title: "bg-emerald-700",
        h3: "text-white"
      },
      teal: {
        base: "bg-teal-600 text-white",
        title: "bg-teal-700",
        h3: "text-white"
      },
      cyan: {
        base: "bg-cyan-600 text-white",
        title: "bg-cyan-700",
        h3: "text-white"
      },
      sky: {
        base: "bg-sky-600 text-white",
        title: "bg-sky-700 text-white",
        h3: "text-white"
      },
      blue: {
        base: "bg-blue-600 text-white",
        title: "bg-blue-700 text-white",
        h3: "text-white"
      },
      indigo: {
        base: "bg-indigo-600 text-white",
        title: "bg-indigo-700",
        h3: "text-white"
      },
      violet: {
        base: "bg-violet-600 text-white",
        title: "bg-violet-700",
        h3: "text-white"
      },
      purple: {
        base: "bg-purple-600 text-white",
        title: "bg-purple-700",
        h3: "text-white"
      },
      fuchsia: {
        base: "bg-fuchsia-600 text-white",
        title: "bg-fuchsia-700",
        h3: "text-white"
      },
      pink: {
        base: "bg-pink-600 text-white",
        title: "bg-pink-700",
        h3: "text-white"
      },
      rose: {
        base: "bg-rose-800 text-white",
        title: "bg-rose-700",
        h3: "text-white"
      }
    },
    arrow: {
      true: "",
      false: ""
    },
    position: {
      top: "",
      bottom: "",
      left: "",
      right: "",
      "right-start": "",
      "right-end": "",
      "left-start": "",
      "left-end": "",
      "top-start": "",
      "top-end": "",
      "bottom-start": "",
      "bottom-end": ""
    }
  },
  compoundVariants: [
    {
      arrow: true,
      position: "bottom",
      color: "default",
      class: { arrowBase: "bg-gray-100 dark:bg-gray-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "primary",
      class: { arrowBase: "bg-primary-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "secondary",
      class: { arrowBase: "bg-secondary-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "gray",
      class: { arrowBase: "bg-gray-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "red",
      class: { arrowBase: "bg-red-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "orange",
      class: { arrowBase: "bg-orange-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "amber",
      class: { arrowBase: "bg-amber-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "yellow",
      class: { arrowBase: "bg-yellow-500 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "lime",
      class: { arrowBase: "bg-lime-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "green",
      class: { arrowBase: "bg-green-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "emerald",
      class: { arrowBase: "bg-emerald-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "teal",
      class: { arrowBase: "bg-teal-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "cyan",
      class: { arrowBase: "bg-cyan-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "sky",
      class: { arrowBase: "bg-sky-700   " }
    },
    {
      arrow: true,
      position: "bottom",
      color: "blue",
      class: { arrowBase: "bg-blue-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "indigo",
      class: { arrowBase: "bg-indigo-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "violet",
      class: { arrowBase: "bg-violet-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "purple",
      class: { arrowBase: "bg-purple-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "fuchsia",
      class: { arrowBase: "bg-fuchsia-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "pink",
      class: { arrowBase: "bg-pink-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom",
      color: "rose",
      class: { arrowBase: "bg-rose-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "default",
      class: { arrowBase: "bg-gray-100 dark:bg-gray-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "primary",
      class: { arrowBase: "bg-primary-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "secondary",
      class: { arrowBase: "bg-secondary-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "gray",
      class: { arrowBase: "bg-gray-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "red",
      class: { arrowBase: "bg-red-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "orange",
      class: { arrowBase: "bg-orange-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "amber",
      class: { arrowBase: "bg-amber-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "yellow",
      class: { arrowBase: "bg-yellow-500 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "lime",
      class: { arrowBase: "bg-lime-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "green",
      class: { arrowBase: "bg-green-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "emerald",
      class: { arrowBase: "bg-emerald-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "teal",
      class: { arrowBase: "bg-teal-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "cyan",
      class: { arrowBase: "bg-cyan-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "sky",
      class: { arrowBase: "bg-sky-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "blue",
      class: { arrowBase: "bg-blue-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "indigo",
      class: { arrowBase: "bg-indigo-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "violet",
      class: { arrowBase: "bg-violet-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "purple",
      class: { arrowBase: "bg-purple-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "fuchsia",
      class: { arrowBase: "bg-fuchsia-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "pink",
      class: { arrowBase: "bg-pink-700 shadow-none" }
    },
    {
      arrow: true,
      position: "right-start",
      color: "rose",
      class: { arrowBase: "bg-rose-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "default",
      class: { arrowBase: "bg-gray-100 dark:bg-gray-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "primary",
      class: { arrowBase: "bg-primary-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "secondary",
      class: { arrowBase: "bg-secondary-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "gray",
      class: { arrowBase: "bg-gray-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "red",
      class: { arrowBase: "bg-red-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "orange",
      class: { arrowBase: "bg-orange-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "amber",
      class: { arrowBase: "bg-amber-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "yellow",
      class: { arrowBase: "bg-yellow-500 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "lime",
      class: { arrowBase: "bg-lime-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "green",
      class: { arrowBase: "bg-green-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "emerald",
      class: { arrowBase: "bg-emerald-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "teal",
      class: { arrowBase: "bg-teal-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "cyan",
      class: { arrowBase: "bg-cyan-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "sky",
      class: { arrowBase: "bg-sky-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "blue",
      class: { arrowBase: "bg-blue-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "indigo",
      class: { arrowBase: "bg-indigo-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "violet",
      class: { arrowBase: "bg-violet-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "purple",
      class: { arrowBase: "bg-purple-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "fuchsia",
      class: { arrowBase: "bg-fuchsia-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "pink",
      class: { arrowBase: "bg-pink-700 shadow-none" }
    },
    {
      arrow: true,
      position: "left-start",
      color: "rose",
      class: { arrowBase: "bg-rose-700 shadow-none" }
    },
    // left, left-end, left-start
    {
      arrow: true,
      position: "left",
      color: "default",
      class: { arrowBase: "bg-white border-t border-r dark:bg-gray-800 shadow-none" }
    },
    {
      arrow: true,
      position: "left-end",
      color: "default",
      class: { arrowBase: "bg-white border-t border-r dark:bg-gray-800 shadow-none" }
    },
    // bottom-start, bottom-end
    // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose

    {
      arrow: true,
      position: "bottom-start",
      color: "default",
      class: { arrowBase: "bg-gray-100 dark:bg-gray-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "primary",
      class: { arrowBase: "bg-primary-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "secondary",
      class: { arrowBase: "bg-secondary-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "gray",
      class: { arrowBase: "bg-gray-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "red",
      class: { arrowBase: "bg-red-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "orange",
      class: { arrowBase: "bg-orange-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "amber",
      class: { arrowBase: "bg-amber-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "yellow",
      class: { arrowBase: "bg-yellow-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "lime",
      class: { arrowBase: "bg-lime-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "green",
      class: { arrowBase: "bg-green-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "emerald",
      class: { arrowBase: "bg-emerald-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "teal",
      class: { arrowBase: "bg-teal-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "cyan",
      class: { arrowBase: "bg-cyan-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "sky",
      class: { arrowBase: "bg-sky-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "blue",
      class: { arrowBase: "bg-blue-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "indigo",
      class: { arrowBase: "bg-indigo-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "violet",
      class: { arrowBase: "bg-violet-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "purple",
      class: { arrowBase: "bg-purple-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "fuchsia",
      class: { arrowBase: "bg-fuchsia-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "pink",
      class: { arrowBase: "bg-pink-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-start",
      color: "rose",
      class: { arrowBase: "bg-rose-700 shadow-none" }
    },
    //  bottom-end
    // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
    {
      arrow: true,
      position: "bottom-end",
      color: "default",
      class: { arrowBase: "bg-gray-100 dark:bg-gray-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "primary",
      class: { arrowBase: "bg-primary-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "secondary",
      class: { arrowBase: "bg-secondary-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "gray",
      class: { arrowBase: "bg-gray-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "red",
      class: { arrowBase: "bg-red-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "orange",
      class: { arrowBase: "bg-orange-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "amber",
      class: { arrowBase: "bg-amber-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "yellow",
      class: { arrowBase: "bg-yellow-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "lime",
      class: { arrowBase: "bg-lime-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "green",
      class: { arrowBase: "bg-green-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "emerald",
      class: { arrowBase: "bg-emerald-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "teal",
      class: { arrowBase: "bg-teal-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "cyan",
      class: { arrowBase: "bg-cyan-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "sky",
      class: { arrowBase: "bg-sky-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "blue",
      class: { arrowBase: "bg-blue-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "indigo",
      class: { arrowBase: "bg-indigo-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "violet",
      class: { arrowBase: "bg-violet-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "purple",
      class: { arrowBase: "bg-purple-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "fuchsia",
      class: { arrowBase: "bg-fuchsia-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "pink",
      class: { arrowBase: "bg-pink-700 shadow-none" }
    },
    {
      arrow: true,
      position: "bottom-end",
      color: "rose",
      class: { arrowBase: "bg-rose-700 shadow-none" }
    }
  ]
});
