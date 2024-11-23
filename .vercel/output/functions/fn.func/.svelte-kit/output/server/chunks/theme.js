import { tv } from "tailwind-variants";
import "clsx";
const accordion = tv({
  base: "w-full text-gray-500 dark:text-gray-400",
  variants: {
    flush: {
      true: "",
      false: "border border-gray-200 dark:border-gray-700 rounded-t-xl"
    }
  }
});
const accordionitem = tv({
  slots: {
    base: "group",
    button: "flex items-center justify-between w-full font-medium text-left group-first:rounded-t-xl border-gray-200 dark:border-gray-700 border-b",
    content: "border-b border-gray-200 dark:border-gray-700",
    active: "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800",
    inactive: "text-gray-500 dark:text-gray-400 hover:bg-gray-100 hover:dark:bg-gray-800"
  },
  variants: {
    flush: {
      true: {
        button: "py-5",
        content: "py-5"
      },
      false: {
        button: "p-5 border-s border-e group-first:border-t",
        content: "p-5 border-s border-e"
      }
    },
    open: {
      true: {},
      false: {}
    }
  },
  compoundVariants: [
    {
      flush: true,
      open: true,
      class: {
        button: "text-gray-900 dark:text-white"
      }
    },
    {
      flush: true,
      open: false,
      class: {
        button: "text-gray-500 dark:text-gray-400"
      }
    }
  ],
  defaultVariants: {
    flush: false,
    open: false
  }
});
const alert = tv({
  base: "p-4 gap-3 text-sm",
  variants: {
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: "bg-primary-50 dark:bg-gray-800 text-primary-800 dark:text-primary-400",
      secondary: "bg-secondary-50 dark:bg-secondary-800 text-secondary-800 dark:text-secondary-400",
      gray: "bg-gray-100 text-gray-500 hover:bg-gray-200 focus:ring-gray-400 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white",
      red: "bg-red-100 text-red-500 hover:bg-red-200 focus:ring-red-400 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
      orange: "bg-orange-100 text-orange-500 hover:bg-orange-200 focus:ring-orange-400 dark:bg-orange-200 dark:text-orange-600 dark:hover:bg-orange-300",
      amber: "bg-amber-100 text-amber-500 hover:bg-amber-200 focus:ring-amber-400 dark:bg-amber-200 dark:text-amber-600 dark:hover:bg-amber-300",
      yellow: "bg-yellow-100 text-yellow-500 hover:bg-yellow-200 focus:ring-yellow-400 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
      lime: "bg-lime-100 text-lime-500 hover:bg-lime-200 focus:ring-lime-400 dark:bg-lime-200 dark:text-lime-600 dark:hover:bg-lime-300",
      green: "bg-green-100 text-green-500 hover:bg-green-200 focus:ring-green-400 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
      emerald: "bg-emerald-100 text-emerald-500 hover:bg-emerald-200 focus:ring-emerald-400 dark:bg-emerald-200 dark:text-emerald-600 dark:hover:bg-emerald-300",
      teal: "bg-teal-100 text-teal-500 hover:bg-teal-200 focus:ring-teal-400 dark:bg-teal-200 dark:text-teal-600 dark:hover:bg-teal-300",
      cyan: "bg-cyan-100 text-cyan-500 hover:bg-cyan-200 focus:ring-cyan-400 dark:bg-cyan-200 dark:text-cyan-600 dark:hover:bg-cyan-300",
      sky: "bg-sky-100 text-sky-500 hover:bg-sky-200 focus:ring-sky-400 dark:bg-sky-200 dark:text-sky-600 dark:hover:bg-sky-300",
      blue: "bg-blue-100 text-blue-500 hover:bg-blue-200 focus:ring-blue-400 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300",
      indigo: "bg-indigo-100 text-indigo-500 hover:bg-indigo-200 focus:ring-indigo-400 dark:bg-indigo-200 dark:text-indigo-600 dark:hover:bg-indigo-300",
      violet: "bg-violet-100 text-violet-500 hover:bg-violet-200 focus:ring-violet-400 dark:bg-violet-200 dark:text-violet-600 dark:hover:bg-violet-300",
      purple: "bg-purple-100 text-purple-500 hover:bg-purple-200 focus:ring-purple-400 dark:bg-purple-200 dark:text-purple-600 dark:hover:bg-purple-300",
      fuchsia: "bg-fuchsia-100 text-fuchsia-500 hover:bg-fuchsia-200 focus:ring-fuchsia-400 dark:bg-fuchsia-200 dark:text-fuchsia-600 dark:hover:bg-fuchsia-300",
      pink: "bg-pink-100 text-pink-500 hover:bg-pink-200 focus:ring-pink-400 dark:bg-pink-200 dark:text-pink-600 dark:hover:bg-pink-300",
      rose: "bg-rose-100 text-rose-500 hover:bg-rose-200 focus:ring-rose-400 dark:bg-rose-200 dark:text-rose-600 dark:hover:bg-rose-300"
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
const avatar = tv({
  base: "relative flex items-center justify-center bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300",
  variants: {
    cornerStyle: {
      rounded: "rounded",
      circular: "rounded-full"
    },
    border: {
      true: "p-1 ring-2 ring-gray-300 dark:ring-gray-500",
      false: ""
    },
    stacked: {
      true: "border-2 -ms-4 border-white dark:border-gray-800",
      false: ""
    },
    size: {
      xs: "w-6 h-6",
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-20 h-20",
      xl: "w-36 h-36"
    }
  },
  defaultVariants: {
    cornerStyle: "circular",
    border: false,
    stacked: false,
    size: "md"
  }
});
const badge = tv({
  slots: {
    hrefClass: "flex align-middle",
    base: "font-medium inline-flex items-center justify-center px-2.5 py-0.5"
  },
  variants: {
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: { base: "bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-300" },
      secondary: { base: "bg-secondary-100 text-secondary-800 dark:bg-secondary-900 dark:text-secondary-300" },
      gray: { base: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300" },
      red: { base: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" },
      orange: { base: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300" },
      amber: { base: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300" },
      yellow: { base: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" },
      lime: { base: "bg-lime-100 text-lime-800 dark:bg-lime-900 dark:text-lime-300" },
      green: { base: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" },
      emerald: { base: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300" },
      teal: { base: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300" },
      cyan: { base: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300" },
      sky: { base: "bg-sky-100 text-sky-800 dark:bg-sky-900 dark:text-sky-300" },
      blue: { base: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
      indigo: { base: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300" },
      violet: { base: "bg-violet-100 text-violet-800 dark:bg-violet-900 dark:text-violet-300" },
      fuchsia: { base: "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900 dark:text-fuchsia-300" },
      purple: { base: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300" },
      pink: { base: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300" },
      rose: { base: "bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-300" }
    },
    size: {
      small: "text-xs",
      large: "text-sm"
    },
    border: {
      true: "border"
    },
    rounded: {
      true: "rounded-full",
      false: "rounded"
    }
  },
  compoundVariants: [
    {
      border: true,
      color: "primary",
      class: "bg-primary-100 text-primary-800 dark:bg-primary-700/50 dark:text-primary-400 border-primary-400 dark:border-primary-400"
    },
    {
      border: true,
      color: "secondary",
      class: "bg-secondary-100 text-secondary-800 dark:bg-secondary-700/50 dark:text-secondary-400 border-secondary-400 dark:border-secondary-400"
    },
    {
      border: true,
      color: "gray",
      class: "bg-gray-100 text-gray-800 dark:bg-gray-700/50 dark:text-gray-400 border-gray-400 dark:border-gray-400"
    },
    {
      border: true,
      color: "red",
      class: "bg-red-100 text-red-800 dark:bg-red-700/50 dark:text-red-400 border-red-400 dark:border-red-400"
    },
    {
      border: true,
      color: "orange",
      class: "bg-orange-100 text-orange-800 dark:bg-orange-700/50 dark:text-orange-400 border-orange-400 dark:border-orange-400"
    },
    {
      border: true,
      color: "amber",
      class: "bg-amber-100 text-amber-800 dark:bg-amber-700/50 dark:text-amber-400 border-amber-400 dark:border-amber-400"
    },
    {
      border: true,
      color: "yellow",
      class: "bg-yellow-100 text-yellow-800 dark:bg-yellow-700/50 dark:text-yellow-300 border-yellow-300 dark:border-yellow-300"
    },
    {
      border: true,
      color: "lime",
      class: "bg-lime-100 text-lime-800 dark:bg-lime-700/50 dark:text-lime-400 border-lime-400 dark:border-lime-400"
    },
    {
      border: true,
      color: "green",
      class: "bg-green-100 text-green-800 dark:bg-green-700/50 dark:text-green-400 border-green-400 dark:border-green-400"
    },
    {
      border: true,
      color: "emerald",
      class: "bg-emerald-100 text-emerald-800 dark:bg-emerald-700/50 dark:text-emerald-400 border-emerald-400 dark:border-emerald-400"
    },
    {
      border: true,
      color: "teal",
      class: "bg-teal-100 text-teal-800 dark:bg-teal-700/50 dark:text-teal-400 border-teal-400 dark:border-teal-400"
    },
    {
      border: true,
      color: "cyan",
      class: "bg-cyan-100 text-cyan-800 dark:bg-cyan-700/50 dark:text-cyan-400 border-cyan-400 dark:border-cyan-400"
    },
    {
      border: true,
      color: "sky",
      class: "bg-sky-100 text-sky-800 dark:bg-sky-700/50 dark:text-sky-400 border-sky-400 dark:border-sky-400"
    },
    {
      border: true,
      color: "blue",
      class: "bg-blue-100 text-blue-800 dark:bg-blue-700/50 dark:text-blue-400 border-blue-400 dark:border-blue-400"
    },
    {
      border: true,
      color: "indigo",
      class: "bg-indigo-100 text-indigo-800 dark:bg-indigo-700/50 dark:text-indigo-400 border-indigo-400 dark:border-indigo-400"
    },
    {
      border: true,
      color: "violet",
      class: "bg-violet-100 text-violet-800 dark:bg-violet-700/50 dark:text-violet-400 border-violet-400 dark:border-violet-400"
    },
    {
      border: true,
      color: "purple",
      class: "bg-purple-100 text-purple-800 dark:bg-purple-700/50 dark:text-purple-400 border-purple-400 dark:border-purple-400"
    },
    {
      border: true,
      color: "fuchsia",
      class: "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-700/50 dark:text-fuchsia-400 border-fuchsia-400 dark:border-fuchsia-400"
    },
    {
      border: true,
      color: "pink",
      class: "bg-pink-100 text-pink-800 dark:bg-pink-700/50 dark:text-pink-400 border-pink-400 dark:border-pink-400"
    },
    {
      border: true,
      color: "rose",
      class: "bg-rose-100 text-rose-800 dark:bg-rose-700/50 dark:text-rose-400 border-rose-400 dark:border-rose-400"
    },
    {
      href: true,
      color: "primary",
      class: "hover:bg-primary-200"
    },
    {
      href: true,
      color: "secondary",
      class: "hover:bg-secondary-200"
    },
    {
      href: true,
      color: "gray",
      class: "hover:bg-gray-200"
    },
    {
      href: true,
      color: "red",
      class: "hover:bg-red-200"
    },
    {
      href: true,
      color: "orange",
      class: "hover:bg-orange-200"
    },
    {
      href: true,
      color: "amber",
      class: "hover:bg-amber-200"
    },
    {
      href: true,
      color: "yellow",
      class: "hover:bg-yellow-200"
    },
    {
      href: true,
      color: "lime",
      class: "hover:bg-lime-200"
    },
    {
      href: true,
      color: "green",
      class: "hover:bg-green-200"
    },
    {
      href: true,
      color: "emerald",
      class: "hover:bg-emerald-200"
    },
    {
      href: true,
      color: "teal",
      class: "hover:bg-teal-200"
    },
    {
      href: true,
      color: "cyan",
      class: "hover:bg-cyan-200"
    },
    {
      href: true,
      color: "sky",
      class: "hover:bg-sky-200"
    },
    {
      href: true,
      color: "blue",
      class: "hover:bg-blue-200"
    },
    {
      href: true,
      color: "indigo",
      class: "hover:bg-indigo-200"
    },
    {
      href: true,
      color: "violet",
      class: "hover:bg-violet-200"
    },
    {
      href: true,
      color: "purple",
      class: "hover:bg-purple-200"
    },
    {
      href: true,
      color: "fuchsia",
      class: "hover:bg-fuchsia-200"
    },
    {
      href: true,
      color: "pink",
      class: "hover:bg-pink-200"
    },
    {
      href: true,
      color: "rose",
      class: "hover:bg-rose-200"
    }
  ],
  defaultVariants: {
    color: "primary",
    size: "small",
    rounded: false
  }
});
const banner = tv({
  slots: {
    base: "z-10 flex justify-between p-4 dark:bg-gray-700 dark:border-gray-600",
    insideDiv: "flex items-center"
  },
  variants: {
    position: {
      // "static" | "fixed" | "absolute" | "relative" | "sticky"
      static: { base: "static" },
      fixed: { base: "fixed" },
      absolute: { base: "absolute" },
      relative: { base: "relative" },
      sticky: { base: "sticky" }
    },
    bannerType: {
      // "default" | "bottom" | "cta" | "signup" | "info"
      default: {
        base: "top-0 start-0 w-full border-b border-gray-200 bg-gray-50",
        insideDiv: "mx-auto"
      },
      bottom: {
        base: "bottom-0 start-0 w-full border-t border-gray-200 bg-gray-50",
        insideDiv: "mx-auto"
      },
      cta: {
        base: "flex-col md:flex-row w-[calc(100%-2rem)] -translate-x-1/2 rtl:translate-x-1/2 bg-white border border-gray-100 rounded-lg shadow-sm lg:max-w-7xl start-1/2 top-6",
        insideDiv: "flex-col items-start mb-3 me-4 md:items-center md:flex-row md:mb-0"
      },
      signup: {
        base: "top-0 start-0 w-full border-b border-gray-200 bg-gray-50",
        insideDiv: "flex-shrink-0 w-full mx-auto sm:w-auto"
      },
      info: {
        base: "top-0 start-0 flex-col w-full border-b border-gray-200 md:flex-row bg-gray-50",
        insideDiv: "flex-shrink-0"
      }
    },
    color: {
      // 'primary' secondary, | 'gray' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'
      primary: { base: "bg-primary-50 dark:bg-primary-900" },
      secondary: { base: "bg-secondary-50 dark:bg-secondary-900" },
      gray: { base: "bg-gray-50 dark:bg-gray-700" },
      red: { base: "bg-red-50 dark:bg-red-900" },
      orange: { base: "bg-orange-50 dark:bg-orange-900" },
      amber: { base: "bg-amber-50 dark:bg-amber-900" },
      yellow: { base: "bg-yellow-50 dark:bg-yellow-900" },
      lime: { base: "bg-lime-50 dark:bg-lime-900" },
      green: { base: "bg-green-50 dark:bg-green-900" },
      emerald: { base: "bg-emerald-50 dark:bg-emerald-900" },
      teal: { base: "bg-teal-50 dark:bg-teal-900" },
      cyan: { base: "bg-cyan-50 dark:bg-cyan-900" },
      sky: { base: "bg-sky-50 dark:bg-sky-900" },
      blue: { base: "bg-blue-50 dark:bg-blue-900" },
      indigo: { base: "bg-indigo-50 dark:bg-indigo-900" },
      violet: { base: "bg-violet-50 dark:bg-violet-900" },
      purple: { base: "bg-purple-50 dark:bg-purple-900" },
      fuchsia: { base: "bg-fuchsia-50 dark:bg-fuchsia-900" },
      pink: { base: "bg-pink-50 dark:bg-pink-900" },
      rose: { base: "bg-rose-50 dark:bg-rose-900" }
    }
  },
  defaultVariants: {
    position: "sticky",
    bannerType: "default"
  }
});
const bottomNav = tv({
  slots: {
    outer: "w-full z-30 border-gray-200 dark:bg-gray-700 dark:border-gray-600",
    inner: "grid h-full max-w-lg mx-auto"
  },
  variants: {
    position: {
      static: { outer: "static" },
      fixed: { outer: "fixed" },
      absolute: { outer: "absolute" },
      relative: { outer: "relative" },
      sticky: { outer: "sticky" }
    },
    navType: {
      default: { outer: "bottom-0 start-0 h-16 bg-white border-t" },
      border: { outer: "bottom-0 start-0 h-16 bg-white border-t" },
      application: {
        outer: "h-16 max-w-lg -translate-x-1/2 rtl:translate-x-1/2 bg-white border rounded-full bottom-4 start-1/2"
      },
      pagination: {
        outer: "bottom-0 h-16 -translate-x-1/2 rtl:translate-x-1/2 bg-white border-t start-1/2"
      },
      group: {
        outer: "bottom-0 -translate-x-1/2 rtl:translate-x-1/2 bg-white border-t start-1/2"
      },
      card: { outer: "bottom-0 start-0 h-16 bg-white border-t" },
      meeting: {
        outer: "bottom-0 start-0 grid h-16 grid-cols-1 px-8 bg-white border-t md:grid-cols-3",
        inner: "flex items-center justify-center mx-auto"
      },
      video: {
        outer: "bottom-0 start-0 grid h-24 grid-cols-1 px-8 bg-white border-t md:grid-cols-3",
        inner: "flex items-center w-full"
      }
    }
  },
  defaultVariants: {
    position: "fixed",
    navType: "default"
  }
});
const bottomNavItem = tv({
  slots: {
    base: "inline-flex flex-col items-center justify-center",
    span: "text-sm"
  },
  variants: {
    navType: {
      default: {
        base: "px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group",
        span: "text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
      },
      border: {
        base: "px-5 border-gray-200 border-x hover:bg-gray-50 dark:hover:bg-gray-800 group dark:border-gray-600",
        span: "text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
      },
      application: {
        base: "",
        span: "sr-only"
      },
      pagination: {
        base: "px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group",
        span: "sr-only"
      },
      group: {
        base: "p-4 hover:bg-gray-50 dark:hover:bg-gray-800 group",
        span: "sr-only"
      },
      card: {
        base: "px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group",
        span: "text-gray-500 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-500"
      },
      meeting: {
        base: "",
        span: ""
      },
      video: {
        base: "",
        span: ""
      }
    },
    appBtnPosition: {
      left: {
        base: "px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
      },
      middle: { base: "px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group" },
      right: {
        base: "px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
      }
    }
  },
  defaultVariants: {
    navType: "default",
    appBtnPosition: "middle",
    active: false
  }
});
const bottomnavheader = tv({
  slots: {
    innerDiv: "grid max-w-xs grid-cols-3 gap-1 p-1 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600",
    outerDiv: "w-full"
  }
});
const bottomnavheaderitem = tv({
  base: "px-5 py-1.5 text-xs font-medium rounded-lg",
  variants: {
    active: {
      true: "text-white bg-gray-900 dark:bg-gray-300 dark:text-gray-900",
      false: "text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700"
    }
  }
});
const breadcrumb = tv({
  slots: {
    base: "flex",
    list: "inline-flex items-center space-x-1 rtl:space-x-reverse md:space-x-3 rtl:space-x-reverse",
    item: "inline-flex items-center",
    icon: "h-6 w-6 text-gray-400 rtl:-scale-x-100"
  },
  variants: {
    solid: {
      true: {
        base: "px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700"
      },
      false: ""
    },
    home: {
      true: "",
      false: ""
    },
    hasHref: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      home: true,
      class: {
        item: "inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",
        icon: "me-2 h-4 w-4"
      }
    },
    {
      home: false,
      hasHref: true,
      class: {
        item: "ms-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ms-2 dark:text-gray-400 dark:hover:text-white"
      }
    },
    {
      home: false,
      hasHref: false,
      class: {
        item: "ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400"
      }
    }
  ],
  defaultVariants: {
    solid: false
  }
});
const buttonGroup = tv({
  base: "inline-flex rounded-lg shadow-sm",
  variants: {
    size: {
      sm: "scale-90",
      md: "scale-100",
      lg: "scale-110"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
const button = tv({
  base: "text-center font-medium inline-flex items-center justify-center",
  variants: {
    color: {
      // "primary" | "dark" | "alternative" | "light" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose"
      primary: "text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus-within:ring-primary-300 dark:focus-within:ring-primary-800",
      dark: "text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 focus-within:ring-gray-300 dark:focus-within:ring-gray-700",
      alternative: "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 hover:text-primary-700 focus-within:text-primary-700 dark:focus-within:text-white dark:hover:text-white focus-within:ring-gray-200 dark:focus-within:ring-gray-700",
      light: "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 focus-within:ring-gray-200 dark:focus-within:ring-gray-700",
      secondary: "text-white bg-secondary-700 hover:bg-secondary-800 dark:bg-secondary-600 dark:hover:bg-secondary-700 focus-within:ring-secondary-300 dark:focus-within:ring-secondary-800",
      gray: "text-white bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 focus-within:ring-gray-300 dark:focus-within:ring-gray-800",
      red: "text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 focus-within:ring-red-300 dark:focus-within:ring-red-900",
      orange: "text-white bg-orange-700 hover:bg-orange-800 dark:bg-orange-600 dark:hover:bg-orange-700 focus-within:ring-orange-300 dark:focus-within:ring-orange-900",
      amber: "text-white bg-amber-700 hover:bg-amber-800 dark:bg-amber-600 dark:hover:bg-amber-700 focus-within:ring-amber-300 dark:focus-within:ring-amber-900",
      yellow: "text-white bg-yellow-400 hover:bg-yellow-500 focus-within:ring-yellow-300 dark:focus-within:ring-yellow-900",
      lime: "text-white bg-lime-700 hover:bg-lime-800 dark:bg-lime-600 dark:hover:bg-lime-700 focus-within:ring-lime-300 dark:focus-within:ring-lime-800",
      green: "text-white bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 focus-within:ring-green-300 dark:focus-within:ring-green-800",
      emerald: "text-white bg-emerald-700 hover:bg-emerald-800 dark:bg-emerald-600 dark:hover:bg-emerald-700 focus-within:ring-emerald-300 dark:focus-within:ring-emerald-800",
      teal: "text-white bg-teal-700 hover:bg-teal-800 dark:bg-teal-600 dark:hover:bg-teal-700 focus-within:ring-teal-300 dark:focus-within:ring-teal-800",
      cyan: "text-white bg-cyan-700 hover:bg-cyan-800 dark:bg-cyan-600 dark:hover:bg-cyan-700 focus-within:ring-cyan-300 dark:focus-within:ring-cyan-800",
      sky: "text-white bg-sky-700 hover:bg-sky-800 dark:bg-sky-600 dark:hover:bg-sky-700 focus-within:ring-sky-300 dark:focus-within:ring-sky-800",
      blue: "text-white bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus-within:ring-blue-300 dark:focus-within:ring-blue-800",
      indigo: "text-white bg-indigo-700 hover:bg-indigo-800 dark:bg-indigo-600 dark:hover:bg-indigo-700 focus-within:ring-indigo-300 dark:focus-within:ring-indigo-800",
      violet: "text-white bg-violet-700 hover:bg-violet-800 dark:bg-violet-600 dark:hover:bg-violet-700 focus-within:ring-violet-300 dark:focus-within:ring-violet-800",
      purple: "text-white bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700",
      fuchsia: "text-white bg-fuchsia-700 hover:bg-fuchsia-800 dark:bg-fuchsia-600 dark:hover:bg-fuchsia-700",
      pink: "text-white bg-pink-700 hover:bg-pink-800 dark:bg-pink-600 dark:hover:bg-pink-700",
      rose: "text-white bg-rose-700 hover:bg-rose-800 dark:bg-rose-600 dark:hover:bg-rose-700"
    },
    size: {
      xs: "px-3 py-2 text-xs",
      sm: "px-4 py-2 text-sm",
      md: "px-5 py-2.5 text-sm",
      lg: "px-5 py-3 text-base",
      xl: "px-6 py-3.5 text-base"
    },
    group: {
      true: "focus-within:ring-2 focus-within:z-10",
      false: "focus-within:ring-4 focus-within:outline-none"
    },
    outline: {
      true: "border border-gray-300 dark:border-gray-400"
    },
    shadow: {
      true: "shadow-lg"
    },
    disabled: {
      true: "cursor-not-allowed opacity-50"
    },
    pill: {
      true: "rounded-full"
    },
    checked: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    // {
    //   outline: true,
    //   class: 'border dark:border-gray-900'
    // },
    // dark, alternative, light
    // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
    {
      shadow: true,
      color: "dark",
      class: "shadow-gray-500/50 dark:shadow-gray-800/80"
    },
    {
      shadow: true,
      color: "alternative",
      class: "shadow-gray-500/50 dark:shadow-gray-800/80"
    },
    {
      shadow: true,
      color: "light",
      class: "shadow-gray-500/50 dark:shadow-gray-800/80"
    },
    {
      shadow: true,
      color: "primary",
      class: "shadow-primary-500/50 dark:shadow-primary-800/80"
    },
    {
      shadow: true,
      color: "secondary",
      class: "shadow-secondary-500/50 dark:shadow-secondary-800/80"
    },
    {
      shadow: true,
      color: "gray",
      class: "shadow-gray-500/50 dark:shadow-gray-800/80"
    },
    {
      shadow: true,
      color: "red",
      class: "shadow-red-500/50 dark:shadow-red-800/80"
    },
    {
      shadow: true,
      color: "orange",
      class: "shadow-orange-500/50 dark:shadow-orange-800/80"
    },
    {
      shadow: true,
      color: "amber",
      class: "shadow-amber-500/50 dark:shadow-amber-800/80"
    },
    {
      shadow: true,
      color: "yellow",
      class: "shadow-yellow-500/50 dark:shadow-yellow-800/80"
    },
    {
      shadow: true,
      color: "lime",
      class: "shadow-lime-500/50 dark:shadow-lime-800/80"
    },
    {
      shadow: true,
      color: "green",
      class: "shadow-green-500/50 dark:shadow-green-800/80"
    },
    {
      shadow: true,
      color: "emerald",
      class: "shadow-emerald-500/50 dark:shadow-emerald-800/80"
    },
    {
      shadow: true,
      color: "teal",
      class: "shadow-teal-500/50 dark:shadow-teal-800/80"
    },
    {
      shadow: true,
      color: "cyan",
      class: "shadow-cyan-500/50 dark:shadow-cyan-800/80"
    },
    {
      shadow: true,
      color: "sky",
      class: "shadow-sky-500/50 dark:shadow-sky-800/80"
    },
    {
      shadow: true,
      color: "blue",
      class: "shadow-blue-500/50 dark:shadow-blue-800/80"
    },
    {
      shadow: true,
      color: "indigo",
      class: "shadow-indigo-500/50 dark:shadow-indigo-800/80"
    },
    {
      shadow: true,
      color: "violet",
      class: "shadow-violet-500/50 dark:shadow-violet-800/80"
    },
    {
      shadow: true,
      color: "purple",
      class: "shadow-purple-500/50 dark:shadow-purple-800/80"
    },
    {
      shadow: true,
      color: "fuchsia",
      class: "shadow-fuchsia-500/50 dark:shadow-fuchsia-800/80"
    },
    {
      shadow: true,
      color: "pink",
      class: "shadow-pink-500/50 dark:shadow-pink-800/80"
    },
    {
      shadow: true,
      color: "rose",
      class: "shadow-rose-500/50 dark:shadow-rose-800/80"
    },
    {
      color: "alternative",
      group: true,
      class: "dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600"
    },
    {
      color: "alternative",
      group: true,
      class: "dark:bg-transparent dark:border-gray-600 dark:hover:border-gray-700"
    },
    {
      outline: true,
      color: "dark",
      group: true,
      class: "bg-gray-900 border-gray-800 dark:border-white dark:bg-gray-600"
    },
    {
      outline: true,
      color: "dark",
      group: true,
      class: "dark:text-gray-400 dark:border-gray-700"
    },
    {
      outline: true,
      group: true,
      class: "[&:not(:first-child)]:-ms-px"
    },
    {
      color: "alternative",
      group: true,
      class: "[&:not(:first-child)]:-ms-px"
    },
    {
      color: "light",
      group: true,
      class: "[&:not(:first-child)]:-ms-px"
    },
    {
      group: true,
      pill: true,
      class: "rounded-none first:rounded-s-full last:rounded-e-full"
    },
    {
      group: true,
      pill: false,
      class: "rounded-none first:rounded-s-lg last:rounded-e-lg"
    },
    {
      group: false,
      pill: true,
      class: "rounded-full"
    },
    {
      group: false,
      pill: false,
      class: "rounded-lg"
    }
  ]
});
const gradientButton = tv({
  slots: {
    base: "inline-flex items-center justify-center transition-all duration-75 ease-in text-white bg-gradient-to-r ",
    outlineWrapper: "inline-flex items-center justify-center w-full !border-0"
  },
  variants: {
    color: {
      blue: {
        base: "from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-blue-300 dark:focus:ring-blue-800"
      },
      green: {
        base: "from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-green-300 dark:focus:ring-green-800"
      },
      cyan: { base: "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-cyan-300 dark:focus:ring-cyan-800" },
      teal: { base: "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-teal-300 dark:focus:ring-teal-800" },
      lime: { base: "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-lime-300 dark:focus:ring-lime-800" },
      red: { base: "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-red-300 dark:focus:ring-red-800" },
      pink: { base: "text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-pink-300 dark:focus:ring-pink-800" },
      purple: { base: "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-purple-300 dark:focus:ring-purple-800" },
      purpleToBlue: { base: "text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800" },
      cyanToBlue: { base: "text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-cyan-300 dark:focus:ring-cyan-800" },
      greenToBlue: { base: "text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-green-200 dark:focus:ring-green-800" },
      purpleToPink: { base: "text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-purple-200 dark:focus:ring-purple-800" },
      pinkToOrange: { base: "text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-pink-200 dark:focus:ring-pink-800" },
      tealToLime: { base: "text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l focus:ring-lime-200 dark:focus:ring-teal-700" },
      redToYellow: { base: "text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-red-100 dark:focus:ring-red-400" }
    },
    outline: {
      true: {
        base: "p-0.5",
        outlineWrapper: "bg-white !text-gray-900 dark:bg-gray-900 dark:!text-white hover:bg-transparent hover:!text-inherit group-hover:!bg-opacity-0 group-hover:!text-inherit"
      }
    },
    pill: {
      true: {
        base: "rounded-full",
        outlineWrapper: "rounded-full"
      },
      false: {
        base: "rounded-lg",
        outlineWrapper: "rounded-lg"
      }
    },
    shadow: {
      true: {
        base: "shadow-lg"
      }
    },
    group: {
      true: "rounded-none",
      false: ""
    },
    disabled: {
      true: { base: "opacity-50 cursor-not-allowed" }
    }
  },
  compoundVariants: [
    {
      shadow: true,
      color: "blue",
      class: { base: "shadow-blue-500/50 dark:shadow-blue-800/80" }
    },
    {
      shadow: true,
      color: "green",
      class: { base: "shadow-green-500/50 dark:shadow-green-800/80" }
    },
    {
      shadow: true,
      color: "cyan",
      class: { base: "shadow-cyan-500/50 dark:shadow-cyan-800/80" }
    },
    {
      shadow: true,
      color: "teal",
      class: { base: "shadow-teal-500/50 dark:shadow-teal-800/80" }
    },
    {
      shadow: true,
      color: "lime",
      class: { base: "shadow-lime-500/50 dark:shadow-lime-800/80" }
    },
    {
      shadow: true,
      color: "red",
      class: { base: "shadow-red-500/50 dark:shadow-red-800/80" }
    },
    {
      shadow: true,
      color: "pink",
      class: { base: "shadow-pink-500/50 dark:shadow-pink-800/80" }
    },
    {
      shadow: true,
      color: "purple",
      class: { base: "shadow-purple-500/50 dark:shadow-purple-800/80" }
    },
    {
      shadow: true,
      color: "purpleToBlue",
      class: { base: "shadow-blue-500/50 dark:shadow-blue-800/80" }
    },
    {
      shadow: true,
      color: "cyanToBlue",
      class: { base: "shadow-cyan-500/50 dark:shadow-cyan-800/80" }
    },
    {
      shadow: true,
      color: "greenToBlue",
      class: { base: "shadow-green-500/50 dark:shadow-green-800/80" }
    },
    {
      shadow: true,
      color: "purpleToPink",
      class: { base: "shadow-purple-500/50 dark:shadow-purple-800/80" }
    },
    {
      shadow: true,
      color: "pinkToOrange",
      class: { base: "shadow-pink-500/50 dark:shadow-pink-800/80" }
    },
    {
      shadow: true,
      color: "tealToLime",
      class: { base: "shadow-lime-500/50 dark:shadow-teal-800/80" }
    },
    {
      shadow: true,
      color: "redToYellow",
      class: { base: "shadow-red-500/50 dark:shadow-red-800/80" }
    },
    {
      group: true,
      pill: true,
      class: "first:rounded-s-full last:rounded-e-full"
    },
    {
      group: true,
      pill: false,
      class: "first:rounded-s-lg last:rounded-e-lg"
    }
  ]
});
const card = tv({
  slots: {
    base: "w-full flex max-w-sm bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700",
    image: "rounded-t-lg",
    content: ""
  },
  variants: {
    size: {
      xs: { base: "max-w-xs" },
      sm: { base: "max-w-sm" },
      md: { base: "max-w-lg" },
      lg: { base: "max-w-2xl" },
      xl: { base: "max-w-screen-xl" }
    },
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      gray: { base: "border-gray-200 dark:bg-gray-800 dark:border-gray-700" },
      primary: { base: "border-primary-200 bg-primary-400 dark:bg-primary-800 dark:border-primary-700" },
      secondary: { base: "border-secondary-200 bg-secondary-400 dark:bg-secondary-800 dark:border-secondary-700" },
      red: { base: "border-red-200 bg-red-400 dark:bg-red-800 dark:border-red-700" },
      orange: { base: "border-orange-200 bg-orange-400 dark:bg-orange-800 dark:border-orange-700" },
      amber: { base: "border-amber-200 bg-amber-400 dark:bg-amber-800 dark:border-amber-700" },
      yellow: { base: "border-yellow-200 bg-yellow-400 dark:bg-yellow-800 dark:border-yellow-700" },
      lime: { base: "border-lime-200 bg-lime-400 dark:bg-lime-800 dark:border-lime-700" },
      green: { base: "border-green-200 bg-green-400 dark:bg-green-800 dark:border-green-700" },
      emerald: { base: "border-emerald-200 bg-emerald-400 dark:bg-emerald-800 dark:border-emerald-700" },
      teal: { base: "border-teal-200 bg-teal-400 dark:bg-teal-800 dark:border-teal-700" },
      cyan: { base: "border-cyan-200 bg-cyan-400 dark:bg-cyan-800 dark:border-cyan-700" },
      sky: { base: "border-sky-200 bg-sky-400 dark:bg-sky-800 dark:border-sky-700" },
      blue: { base: "border-blue-200 bg-blue-400 dark:bg-blue-800 dark:border-blue-700" },
      indigo: { base: "border-indigo-200 bg-indigo-400 dark:bg-indigo-800 dark:border-indigo-700" },
      violet: { base: "border-violet-200 bg-violet-400 dark:bg-violet-800 dark:border-violet-700" },
      purple: { base: "border-purple-200 bg-purple-400 dark:bg-purple-800 dark:border-purple-700" },
      fuchsia: { base: "border-fuchsia-200 bg-fuchsia-400 dark:bg-fuchsia-800 dark:border-fuchsia-700" },
      pink: { base: "border-pink-200 bg-pink-400 dark:bg-pink-800 dark:border-pink-700" },
      rose: { base: "border-rose-200 bg-rose-400 dark:bg-rose-800 dark:border-rose-700" }
    },
    shadow: {
      sm: { base: "shadow-md" },
      normal: { base: "shadow" },
      md: { base: "shadow-md" },
      lg: { base: "shadow-lg" },
      xl: { base: "shadow-xl" },
      "2xl": { base: "shadow-2xl" },
      inner: { base: "shadow-inner" }
    },
    padding: {
      xs: { content: "p-2" },
      sm: { content: "p-4 md:p-6" },
      md: { content: "p-4 sm:p-5 md:p-7" },
      lg: { content: "p-4 sm:p-6 md:p-8" },
      xl: { content: "p-4 sm:p-8 md:p-10" },
      none: { content: "p-0" }
    },
    horizontal: {
      true: {
        base: "md:flex-row",
        image: "object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none"
      }
    },
    reverse: {
      true: { base: "flex-col-reverse", image: "rounded-b-lg rounded-tl-none" },
      false: { base: "flex-col", image: "rounded-t-lg" }
    },
    href: {
      true: "",
      false: ""
    },
    hasImage: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      horizontal: true,
      reverse: true,
      class: { base: "md:flex-row-reverse", image: "md:rounded-e-lg" }
    },
    {
      horizontal: true,
      reverse: false,
      class: { base: "md:flex-row", image: "md:rounded-s-lg" }
    },
    // gray, primary, secondary, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
    {
      href: true,
      color: "gray",
      class: { base: "cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700" }
    },
    {
      href: true,
      color: "primary",
      class: { base: "cursor-pointer hover:bg-primary-500 dark:hover:bg-primary-700" }
    },
    {
      href: true,
      color: "secondary",
      class: { base: "cursor-pointer hover:bg-secondary-500 dark:hover:bg-secondary-700" }
    },
    {
      href: true,
      color: "red",
      class: { base: "cursor-pointer hover:bg-red-500 dark:hover:bg-red-700" }
    },
    {
      href: true,
      color: "orange",
      class: { base: "cursor-pointer hover:bg-orange-500 dark:hover:bg-orange-700" }
    },
    {
      href: true,
      color: "amber",
      class: { base: "cursor-pointer hover:bg-amber-500 dark:hover:bg-amber-700" }
    },
    {
      href: true,
      color: "yellow",
      class: { base: "cursor-pointer hover:bg-yellow-500 dark:hover:bg-yellow-700" }
    },
    {
      href: true,
      color: "lime",
      class: { base: "cursor-pointer hover:bg-lime-500 dark:hover:bg-lime-700" }
    },
    {
      href: true,
      color: "green",
      class: { base: "cursor-pointer hover:bg-green-500 dark:hover:bg-green-700" }
    },
    {
      href: true,
      color: "emerald",
      class: { base: "cursor-pointer hover:bg-emerald-500 dark:hover:bg-emerald-700" }
    },
    {
      href: true,
      color: "teal",
      class: { base: "cursor-pointer hover:bg-teal-500 dark:hover:bg-teal-700" }
    },
    {
      href: true,
      color: "cyan",
      class: { base: "cursor-pointer hover:bg-cyan-500 dark:hover:bg-cyan-700" }
    },
    {
      href: true,
      color: "sky",
      class: { base: "cursor-pointer hover:bg-sky-500 dark:hover:bg-sky-700" }
    },
    {
      href: true,
      color: "blue",
      class: { base: "cursor-pointer hover:bg-blue-500 dark:hover:bg-blue-700" }
    },
    {
      href: true,
      color: "indigo",
      class: { base: "cursor-pointer hover:bg-indigo-500 dark:hover:bg-indigo-700" }
    },
    {
      href: true,
      color: "violet",
      class: { base: "cursor-pointer hover:bg-violet-500 dark:hover:bg-violet-700" }
    },
    {
      href: true,
      color: "purple",
      class: { base: "cursor-pointer hover:bg-purple-500 dark:hover:bg-purple-700" }
    },
    {
      href: true,
      color: "fuchsia",
      class: { base: "cursor-pointer hover:bg-fuchsia-500 dark:hover:bg-fuchsia-700" }
    },
    {
      href: true,
      color: "pink",
      class: { base: "cursor-pointer hover:bg-pink-500 dark:hover:bg-pink-700" }
    },
    {
      href: true,
      color: "rose",
      class: { base: "cursor-pointer hover:bg-rose-500 dark:hover:bg-rose-700" }
    }
  ],
  defaultVariants: {
    size: "sm",
    shadow: "normal",
    padding: "lg",
    horizontal: false,
    reverse: false
  }
});
const darkmode = tv({
  base: "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5"
});
const android = tv({
  slots: {
    div: "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-xl h-[600px] w-[300px] shadow-xl",
    slot: "rounded-xl overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800",
    top: "w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute",
    leftTop: "h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg",
    leftMid: "h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg",
    leftBot: "h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg",
    right: "h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"
  }
});
const defaultMockup = tv({
  slots: {
    div: "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]",
    slot: "rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800",
    top: "h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg",
    leftTop: "h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg",
    leftBot: "h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg",
    right: "h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"
  }
});
const desktop = tv({
  slots: {
    inner: "rounded-xl overflow-hidden h-[140px] md:h-[262px]",
    bot: "relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]",
    botUnder: "relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]",
    div: "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]"
  }
});
const ios = tv({
  slots: {
    div: "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl",
    slot: "rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800",
    top: "w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute",
    leftTop: "h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg",
    leftBot: "h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg",
    right: "h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"
  }
});
const laptop = tv({
  slots: {
    div: "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]",
    inner: "rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800",
    bot: "relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]",
    botCen: "absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"
  }
});
const smartwatch = tv({
  slots: {
    div: "relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-t-[2.5rem] h-[63px] max-w-[133px]",
    slot: "rounded-[2rem] overflow-hidden h-[193px] w-[188px]",
    rightTop: "h-[41px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[40px] rounded-r-lg",
    rightBot: "h-[32px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[88px] rounded-r-lg",
    top: "relative mx-auto border-gray-900 dark:bg-gray-800 dark:border-gray-800 border-[10px] rounded-[2.5rem] h-[213px] w-[208px]",
    bot: "relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-b-[2.5rem] h-[63px] max-w-[133px]"
  }
});
const tablet = tv({
  slots: {
    div: "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]",
    slot: "rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800",
    leftTop: "h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg",
    leftMid: "h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg",
    leftBot: "h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg",
    right: "h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"
  }
});
const dropdown = tv({
  slots: {
    base: "z-10 w-44 mt-2 divide-y divide-gray-300 dark:divide-gray-500 overflow-hidden rounded-lg bg-white shadow dark:bg-gray-700",
    backdrop: "fixed top-0 start-0 w-full h-full"
  }
});
const dropdowndivider = tv({
  base: "my-1 h-px bg-gray-100 dark:bg-gray-500"
});
const dropdownHeader = tv({
  base: "px-4 py-3 text-sm text-gray-900 dark:text-white"
});
const dropdownFooter = tv({
  base: "overflow-hidden rounded-b-lg py-1"
});
const dropdownli = tv({
  slots: {
    anchor: "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",
    activeAnchor: "block px-4 py-2 text-primary-700 dark:text-primary-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  }
});
const dropdownul = tv({
  base: "py-2 text-sm text-gray-700 dark:text-gray-200"
});
const drawer = tv({
  slots: {
    base: "overflow-y-auto z-50 p-4 bg-white dark:bg-gray-800",
    backdrop: "fixed top-0 start-0 z-50 w-full h-full"
  },
  variants: {
    position: {
      fixed: { base: "fixed" },
      absolute: { base: "absolute" }
    },
    placement: {
      left: { base: "inset-y-0 start-0" },
      right: { base: "inset-y-0 end-0" },
      top: { base: "inset-x-0 top-0" },
      bottom: { base: "inset-x-0 bottom-0" }
    },
    width: {
      default: { base: "w-80" },
      full: { base: "w-full" },
      half: { base: "w-1/2" }
    },
    backdrop: {
      true: { backdrop: "bg-gray-900 bg-opacity-75" }
    }
  },
  defaultVariants: {
    position: "fixed",
    placement: "left",
    width: "default"
  }
});
const drawerhead = tv({
  slots: {
    base: "flex items-center",
    button: "ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white",
    svg: "h-3 w-3"
  }
});
const footer = tv({
  base: "bg-white dark:bg-gray-800",
  variants: {
    footerType: {
      default: "p-4 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6",
      sitemap: "bg-gray-800",
      socialmedia: "p-4 sm:p-6",
      logo: "p-4 rounded-lg shadow md:px-6 md:py-8",
      sticky: "fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600"
    }
  }
});
const footerBrand = tv({
  slots: {
    base: "flex items-center",
    span: "self-center text-2xl font-semibold whitespace-nowrap dark:text-white",
    img: "me-3 h-8"
  }
});
const footerCopyright = tv({
  slots: {
    base: "block text-sm text-gray-500 sm:text-center dark:text-gray-400",
    link: "hover:underline",
    bySpan: "ms-1"
  }
});
const footerIcon = tv({
  base: "text-gray-500 hover:text-gray-900 dark:hover:text-white"
});
const footerUl = tv({
  base: "text-gray-600 dark:text-gray-400"
});
const footerLi = tv({
  slots: {
    base: "me-4 last:me-0 md:me-6",
    link: "hover:underline"
  }
});
const gallery = tv({
  slots: {
    image: "h-auto max-w-full rounded-lg",
    div: "grid"
  }
});
const indicator = tv({
  slots: {
    base: "flex-shrink-0"
  },
  variants: {
    color: {
      // 'primary' secondary 'gray' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'
      primary: { base: "bg-primary-500" },
      secondary: { base: "bg-secondary-500" },
      gray: { base: "bg-gray-200" },
      red: { base: "bg-red-500" },
      orange: { base: "bg-orange-600" },
      amber: { base: "bg-amber-500" },
      yellow: { base: "bg-yellow-300" },
      lime: { base: "bg-lime-500" },
      green: { base: "bg-green-500" },
      emerald: { base: "bg-emerald-500" },
      teal: { base: "bg-teal-500" },
      cyan: { base: "bg-cyan-500" },
      sky: { base: "bg-sky-500" },
      blue: { base: "bg-blue-500" },
      indigo: { base: "bg-indigo-500" },
      violet: { base: "bg-violet-500" },
      purple: { base: "bg-purple-500" },
      fuchsia: { base: "bg-fuchsia-500" },
      pink: { base: "bg-pink-500" },
      rose: { base: "bg-rose-500" }
    },
    size: {
      xs: { base: "w-2 h-2" },
      sm: { base: "w-2.5 h-2.5" },
      md: { base: "w-3 h-3" },
      lg: { base: "w-3.5 h-3.5" },
      xl: { base: "w-6 h-6" }
    },
    cornerStyle: {
      rounded: { base: "rounded" },
      circular: { base: "rounded-full" }
    },
    border: {
      true: { base: "border border-gray-300 dark:border-gray-300" },
      false: {}
    },
    hasChildren: {
      true: { base: "inline-flex items-center justify-center" },
      false: {}
    },
    placement: {
      default: { base: "" },
      "top-left": { base: "absolute top-0 start-0" },
      "top-center": {
        base: "absolute top-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2"
      },
      "top-right": { base: "absolute top-0 end-0" },
      "center-left": { base: "absolute top-1/2 -translate-y-1/2 start-0" },
      center: {
        base: "absolute top-1/2 -translate-y-1/2 start-1/2 -translate-x-1/2 rtl:translate-x-1/2"
      },
      "center-right": { base: "absolute top-1/2 -translate-y-1/2 end-0" },
      "bottom-left": { base: "absolute bottom-0 start-0" },
      "bottom-center": {
        base: "absolute bottom-0 start-1/2 -translate-x-1/2 rtl:translate-x-1/2"
      },
      "bottom-right": { base: "absolute bottom-0 end-0" }
    },
    offset: {
      true: {},
      false: {}
    }
  },
  compoundVariants: [
    {
      placement: "top-left",
      offset: true,
      class: { base: "-translate-x-1/3 rtl:translate-x-1/3 -translate-y-1/3" }
    },
    {
      placement: "top-center",
      offset: true,
      class: { base: "-translate-y-1/3" }
    },
    {
      placement: "top-right",
      offset: true,
      class: { base: "translate-x-1/3 rtl:-translate-x-1/3 -translate-y-1/3" }
    },
    {
      placement: "center-left",
      offset: true,
      class: { base: "-translate-x-1/3 rtl:translate-x-1/3" }
    },
    {
      placement: "center-right",
      offset: true,
      class: { base: "translate-x-1/3 rtl:-translate-x-1/3" }
    },
    {
      placement: "bottom-left",
      offset: true,
      class: { base: "-translate-x-1/3 rtl:translate-x-1/3 translate-y-1/3" }
    },
    {
      placement: "bottom-center",
      offset: true,
      class: { base: "translate-y-1/3" }
    },
    {
      placement: "bottom-right",
      offset: true,
      class: { base: "translate-x-1/3 rtl:-translate-x-1/3 translate-y-1/3" }
    }
  ],
  defaultVariants: {
    color: "primary",
    size: "md",
    cornerStyle: "circular",
    border: false,
    offset: true,
    hasChildren: false
  }
});
const kbd = tv({
  base: "text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
});
const listGroup = tv({
  base: "bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 divide-y divide-gray-200 dark:divide-gray-600",
  variants: {
    rounded: {
      true: "rounded-lg",
      false: ""
    },
    border: {
      true: "border border-gray-200 dark:border-gray-700",
      false: ""
    }
  },
  compoundVariants: [
    {
      border: true,
      class: "divide-gray-200 dark:divide-gray-700"
    }
  ],
  defaultVariants: {
    rounded: true,
    border: true
  }
});
const listGroupItem = tv({
  base: "py-2 px-4 w-full text-sm font-medium list-none",
  variants: {
    state: {
      normal: "",
      current: "",
      disabled: ""
    },
    active: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      active: true,
      state: "disabled",
      class: "cursor-not-allowed"
    },
    {
      active: true,
      state: "normal",
      class: "hover:bg-gray-100 hover:text-primary-700 dark:hover:bg-gray-600 dark:hover:text-white focus:z-40 focus:outline-none focus:ring-2 focus:ring-primary-700 focus:text-primary-700 dark:focus:ring-gray-500 dark:focus:text-white"
    }
  ]
});
const megamenu = tv({
  slots: {
    base: "w-full border rounded-lg",
    div: "flex flex-col md:flex-row p-4 max-w-screen-md justify-center mx-auto mt-2",
    ul: "grid grid-flow-row gap-y-4 md:gap-x-0 auto-col-max auto-row-max grid-cols-2 md:grid-cols-3 text-sm font-medium",
    footerDiv: "md:w-1/3 mt-4 md:mt-0"
  },
  variants: {
    full: {}
  }
});
const closeButtonVariants = tv({
  base: "focus:outline-none whitespace-normal",
  variants: {
    // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
    color: {
      primary: "text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300",
      secondary: "text-secondary-500 focus:ring-secondary-400 hover:bg-secondary-200 dark:hover:bg-secondary-800 dark:hover:text-secondary-300",
      gray: "text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300",
      red: "text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300",
      orange: "text-orange-500 focus:ring-orange-400 hover:bg-orange-200 dark:hover:bg-orange-800 dark:hover:text-orange-300",
      amber: "text-amber-500 focus:ring-amber-400 hover:bg-amber-200 dark:hover:bg-amber-800 dark:hover:text-amber-300",
      yellow: "text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300",
      lime: "text-lime-500 focus:ring-lime-400 hover:bg-lime-200 dark:hover:bg-lime-800 dark:hover:text-lime-300",
      green: "text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300",
      emerald: "text-emerald-500 focus:ring-emerald-400 hover:bg-emerald-200 dark:hover:bg-emerald-800 dark:hover:text-emerald-300",
      teal: "text-teal-500 focus:ring-teal-400 hover:bg-teal-200 dark:hover:bg-teal-800 dark:hover:text-teal-300",
      cyan: "text-cyan-500 focus:ring-cyan-400 hover:bg-cyan-200 dark:hover:bg-cyan-800 dark:hover:text-cyan-300",
      sky: "text-sky-500 focus:ring-sky-400 hover:bg-sky-200 dark:hover:bg-sky-800 dark:hover:text-sky-300",
      blue: "text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300",
      indigo: "text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300",
      violet: "text-violet-500 focus:ring-violet-400 hover:bg-violet-200 dark:hover:bg-violet-800 dark:hover:text-violet-300",
      purple: "text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300",
      fuchsia: "text-fuchsia-500 focus:ring-fuchsia-400 hover:bg-fuchsia-200 dark:hover:bg-fuchsia-800 dark:hover:text-fuchsia-300",
      pink: "text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300",
      rose: "text-rose-500 focus:ring-rose-400 hover:bg-rose-200 dark:hover:bg-rose-800 dark:hover:text-rose-300"
    },
    size: {
      xs: "m-0.5 rounded-sm focus:ring-1 p-0.5",
      sm: "m-0.5 rounded focus:ring-1 p-0.5",
      md: "m-0.5 rounded-lg focus:ring-2 p-1.5",
      lg: "m-0.5 rounded-lg focus:ring-2 p-2.5"
    }
  },
  defaultVariants: {
    color: "gray",
    size: "md"
  },
  slots: {
    svg: ""
  },
  compoundVariants: [
    {
      size: "xs",
      class: {
        svg: "w-3 h-3"
      }
    },
    {
      size: "sm",
      class: {
        svg: "w-3.5 h-3.5"
      }
    },
    {
      size: ["md", "lg"],
      class: {
        svg: "w-5 h-5"
      }
    }
  ]
});
const modal = tv({
  slots: {
    base: "fixed top-0 start-0 end-0 h-modal md:inset-0 md:h-full z-50 w-full p-4 flex pointer-events-none",
    div: "flex relative w-full max-h-full",
    content: "w-full divide-y text-gray-800 dark:text-gray-300 border-gray-300 dark:border-gray-800 divide-gray-300 dark:divide-gray-800 bg-white dark:bg-gray-800 pointer-events-auto",
    backdrop: "fixed inset-0 z-50 bg-gray-900 bg-opacity-50 dark:bg-opacity-80 pointer-events-auto",
    header: "flex justify-between items-center p-4 md:p-5 rounded-t-lg",
    footer: "flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse rounded-b-lg",
    body: "p-4 md:p-5 space-y-4 flex-1 overflow-y-auto overscroll-contain",
    closeBtn: "absolute top-3 end-2.5",
    h3: "text-xl font-semibold text-gray-900 dark:text-white p-0"
  },
  variants: {
    // position: {
    //   fixed: { base: 'fixed' },
    //   absolute: { base: 'absolute' }
    // },
    position: {
      "top-left": { base: "justify-start items-start" },
      "top-center": { base: "justify-center items-start" },
      "top-right": { base: "justify-end items-start" },
      "center-left": { base: "justify-start items-center" },
      center: { base: "justify-center items-center" },
      "center-right": { base: "justify-end items-center" },
      "bottom-left": { base: "justify-start items-end" },
      "bottom-center": { base: "justify-center items-end" },
      "bottom-right": { base: "justify-end items-end" },
      default: { base: "justify-center items-center" }
    },
    size: {
      xs: { div: "max-w-md" },
      sm: { div: "max-w-lg" },
      md: { div: "max-w-2xl" },
      lg: { div: "max-w-4xl" },
      xl: { div: "max-w-7xl" }
    },
    backdrop: {
      true: { backdrop: "bg-gray-900 bg-opacity-75" }
    },
    rounded: {
      true: { content: "rounded" }
    },
    shadow: {
      true: { content: "shadow-md" }
    }
  }
});
const navbar = tv({
  slots: {
    base: "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 border-gray-100 dark:border-gray-700 divide-gray-100 dark:divide-gray-700 px-2 sm:px-4 py-2.5 w-full",
    container: "mx-auto flex flex-wrap items-center justify-between",
    toggleButton: "inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
    menuContainer: "w-full",
    activeLink: "block py-2 px-3 text-white bg-primary-700 rounded dark:text-white",
    inactiveLink: "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
  },
  variants: {
    fluid: {
      true: {
        container: "w-full"
      },
      false: {
        container: "container"
      }
    },
    breakPoint: {
      md: {
        container: "max-w-screen-xl",
        toggleButton: "md:hidden",
        menuContainer: "md:block md:w-auto"
      },
      lg: {
        container: "max-w-screen-xl",
        toggleButton: "lg:hidden",
        menuContainer: "lg:block lg:w-auto"
      },
      xl: {
        container: "max-w-screen-xl",
        toggleButton: "xl:hidden",
        menuContainer: "xl:block xl:w-auto"
      },
      xxl: {
        container: "w-full",
        toggleButton: "2xl:hidden",
        menuContainer: "2xl:block 2xl:w-auto"
      }
    },
    navStatus: {
      true: {
        menuContainer: "block"
      },
      false: {
        menuContainer: "hidden"
      }
    }
  },
  defaultVariants: {
    fluid: false,
    breakPoint: "md",
    navStatus: false
  }
});
const navUl = tv({
  base: "font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-transparent rtl:space-x-reverse dark:bg-gray-800 dark:border-gray-700",
  variants: {
    breakPoint: {
      md: "md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 md:dark:bg-gray-900",
      lg: "lg:mt-0 lg:flex-row lg:space-x-8 lg:border-0 lg:p-0 lg:dark:bg-gray-900",
      xl: "xl:mt-0 xl:flex-row xl:space-x-8 xl:border-0 lg:p-0 xl:dark:bg-gray-900",
      xxl: "2xl:mt-0 2xl:flex-row 2xl:space-x-8 2xl:border-0 2xl:p-0 2xl:dark:bg-gray-900"
    }
  }
});
const navbrand = tv({
  slots: {
    base: "flex items-center space-x-3 rtl:space-x-reverse",
    span: "self-center whitespace-nowrap text-2xl font-semibold text-primary-900 dark:text-white sm:text-3xl"
  }
});
const navLi = tv({
  slots: {
    base: "list-none",
    link: "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white"
  },
  variants: {
    active: {
      true: {
        link: "bg-primary-700 text-white"
      }
    },
    breakPoint: {
      md: {
        link: "md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 md:dark:hover:text-primary-500 md:dark:hover:bg-transparent"
      },
      lg: {
        link: "lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:text-primary-500 lg:dark:hover:bg-transparent"
      },
      xl: {
        link: "xl:hover:bg-transparent xl:border-0 xl:hover:text-primary-700 xl:p-0 xl:dark:hover:text-primary-500 xl:dark:hover:bg-transparent"
      },
      xxl: {
        link: "2xl:hover:bg-transparent 2xl:border-0 2xl:hover:text-primary-700 2xl:p-0 2xl:dark:hover:text-primary-500 2xl:dark:hover:bg-transparent"
      }
    }
  },
  compoundVariants: [
    {
      active: true,
      breakPoint: "md",
      class: {
        link: "md:bg-transparent md:text-primary-700 md:p-0 md:dark:text-primary-500"
      }
    },
    {
      active: true,
      breakPoint: "lg",
      class: {
        link: "lg:bg-transparent lg:text-primary-700 lg:p-0 lg:dark:text-primary-500"
      }
    },
    {
      active: true,
      breakPoint: "xl",
      class: {
        link: "xl:bg-transparent xl:text-primary-700 xl:p-0 xl:dark:text-primary-500"
      }
    },
    {
      active: true,
      breakPoint: "xxl",
      class: {
        link: "2xl:bg-transparent 2xl:text-primary-700 2xl:p-0 2xl:dark:text-primary-500"
      }
    }
  ],
  defaultVariants: {
    breakPoint: "md",
    active: false
  }
});
tv({
  base: "mx-auto flex flex-wrap justify-between items-center",
  variants: {
    fluid: {
      true: "w-full",
      false: "container"
    }
  }
});
const navhamburger = tv({
  base: "inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
  variants: {
    breakPoint: {
      md: "md:hidden",
      lg: "lg:hidden",
      xl: "xl:hidden",
      xxl: "2xl:hidden"
    }
  }
});
const paginationItem = tv({
  base: "flex items-center font-medium",
  variants: {
    size: {
      default: "h-8 px-3 text-sm",
      large: "h-10 px-4 text-base"
    },
    active: {
      true: "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
      false: "text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
    },
    group: {
      true: "",
      false: "rounded-lg"
    },
    table: {
      true: "rounded",
      false: "border"
    }
  },
  compoundVariants: [
    {
      group: false,
      table: false,
      class: "rounded-lg"
    }
  ],
  defaultVariants: {
    size: "default",
    active: false,
    group: false,
    table: false
  }
});
const pagination = tv({
  base: "inline-flex -space-x-px rtl:space-x-reverse items-center",
  variants: {
    table: {
      true: "divide-x rtl:divide-x-reverse dark divide-gray-700 dark:divide-gray-700",
      false: ""
    },
    size: {
      default: "",
      large: ""
    }
  },
  defaultVariants: {
    table: false,
    size: "default"
  }
});
const popover = tv({
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
const progressbar = tv({
  slots: {
    base: "w-full bg-gray-200 rounded-full dark:bg-gray-700",
    labelInsideDiv: "text-primary-100 text-xs font-medium text-center leading-none rounded-full",
    insideDiv: "rounded-full",
    outsideDiv: "mb-1 flex justify-between",
    oustsideSpan: "text-base font-medium text-blue-700 dark:text-white",
    outsideProgress: "text-sm font-medium text-blue-700 dark:text-white"
  },
  variants: {
    color: {
      // 'primary' | 'gray' | 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'emerald' | 'teal' | 'cyan' | 'sky' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose'
      primary: {
        labelInsideDiv: "bg-primary-600",
        insideDiv: "bg-primary-600"
      },
      gray: {
        labelInsideDiv: "bg-gray-600 dark:bg-gray-300",
        insideDiv: "bg-gray-600 dark:bg-gray-300"
      },
      red: {
        labelInsideDiv: "bg-red-600 dark:bg-red-500",
        insideDiv: "bg-red-600 dark:bg-red-500"
      },
      orange: {
        labelInsideDiv: "bg-orange-600 dark:bg-orange-500",
        insideDiv: "bg-orange-600 dark:bg-orange-500"
      },
      amber: {
        labelInsideDiv: "bg-amber-600 dark:bg-amber-500",
        insideDiv: "bg-amber-600 dark:bg-amber-500"
      },
      yellow: {
        labelInsideDiv: "bg-yellow-400",
        insideDiv: "bg-yellow-400"
      },
      lime: {
        labelInsideDiv: "bg-lime-600 dark:bg-lime-500",
        insideDiv: "bg-lime-600 dark:bg-lime-500"
      },
      green: {
        labelInsideDiv: "bg-green-600 dark:bg-green-500",
        insideDiv: "bg-green-600 dark:bg-green-500"
      },
      emerald: {
        labelInsideDiv: "bg-emerald-600 dark:bg-emerald-500",
        insideDiv: "bg-emerald-600 dark:bg-emerald-500"
      },
      teal: {
        labelInsideDiv: "bg-teal-600 dark:bg-teal-500",
        insideDiv: "bg-teal-600 dark:bg-teal-500"
      },
      cyan: {
        labelInsideDiv: "bg-cyan-600 dark:bg-cyan-500",
        insideDiv: "bg-cyan-600 dark:bg-cyan-500"
      },
      sky: {
        labelInsideDiv: "bg-sky-600 dark:bg-sky-500",
        insideDiv: "bg-sky-600 dark:bg-sky-500"
      },
      blue: {
        labelInsideDiv: "bg-blue-600",
        insideDiv: "bg-blue-600"
      },
      indigo: {
        labelInsideDiv: "bg-indigo-600 dark:bg-indigo-500",
        insideDiv: "bg-indigo-600 dark:bg-indigo-500"
      },
      violet: {
        labelInsideDiv: "bg-violet-600 dark:bg-violet-500",
        insideDiv: "bg-violet-600 dark:bg-violet-500"
      },
      purple: {
        labelInsideDiv: "bg-purple-600 dark:bg-purple-500",
        insideDiv: "bg-purple-600 dark:bg-purple-500"
      },
      fuchsia: {
        labelInsideDiv: "bg-fuchsia-600 dark:bg-fuchsia-500",
        insideDiv: "bg-fuchsia-600 dark:bg-fuchsia-500"
      },
      pink: {
        labelInsideDiv: "bg-pink-600 dark:bg-pink-500",
        insideDiv: "bg-pink-600 dark:bg-pink-500"
      },
      rose: {
        labelInsideDiv: "bg-rose-600 dark:bg-rose-500",
        insideDiv: "bg-rose-600 dark:bg-rose-500"
      }
    },
    labelInside: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      labelInside: true,
      class: {
        base: "text-primary-100 text-xs font-medium text-center leading-none rounded-full",
        labelInsideDiv: "p-0.5"
      }
    },
    {
      labelInside: false,
      class: { base: "rounded-full" }
    }
  ],
  defaultVariants: {
    color: "primary",
    labelInside: false
  }
});
const advancedrating = tv({
  // divClass = 'flex items-center mt-4', spanClass = 'text-sm font-medium text-gray-600 dark:text-gray-500', div2Class = 'mx-4 w-2/4 h-5 bg-gray-200 rounded dark:bg-gray-700', div3Class = 'h-5 bg-yellow-400 rounded', span2Class = 'text-sm font-medium text-gray-600 dark:text-gray-500',
  slots: {
    base: "flex items-center mt-4",
    span: "text-sm font-medium text-gray-600 dark:text-gray-500",
    div2: "mx-4 w-2/4 h-5 bg-gray-200 rounded dark:bg-gray-700",
    div3: "h-5 bg-yellow-400 rounded",
    span2: "text-sm font-medium text-gray-600 dark:text-gray-500"
  }
});
const rating = tv({
  slots: {
    base: "flex items-center",
    p: "ms-2 text-sm font-bold text-gray-900 dark:text-white"
  }
});
const review = tv({
  slots: {
    article: "md:grid md:grid-cols-3 md:gap-8",
    div: "mb-6 flex items-center space-x-4 rtl:space-x-reverse",
    div2: "space-y-1 font-medium dark:text-white",
    div3: "flex items-center text-sm text-gray-500 dark:text-gray-400",
    img: "h-10 w-10 rounded-full",
    ul: "space-y-4 text-sm text-gray-500 dark:text-gray-400",
    li: "flex items-center"
  }
});
const scorerating = tv({
  slots: {
    desc1: "bg-primary-100 w-8 text-primary-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-primary-200 dark:text-primary-800",
    desc2: "ms-2 font-medium text-gray-900 dark:text-white",
    desc3: "mx-2 w-1 h-1 mx-2 bg-gray-900 rounded-full dark:bg-gray-500",
    desc3span: "text-sm w-24 font-medium text-gray-500 dark:text-gray-400",
    desc3p: "text-sm w-24 font-medium text-gray-500 dark:text-gray-400",
    link: "ms-auto w-32 text-sm font-medium text-primary-600 hover:underline dark:text-primary-500",
    bar: "bg-primary-600 h-2.5 rounded dark:bg-primary-500"
  }
});
const sidebar = tv({
  slots: {
    base: "top-0 left-0 z-50 w-64 transition-transform bg-gray-50 dark:bg-gray-800",
    active: "flex items-center text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
    nonactive: "flex items-center text-base font-normal text-gray-900 rounded dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700",
    div: "overflow-y-auto h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800",
    backdrop: "fixed top-0 start-0 z-40 w-full h-full"
  },
  variants: {
    position: {
      fixed: { base: "fixed" },
      absolute: { base: "absolute" },
      static: { base: "static" }
    },
    isOpen: {
      true: "block",
      false: "hidden"
    },
    breakpoint: {
      sm: { base: "sm:block" },
      md: { base: "md:block" },
      lg: { base: "lg:block" },
      xl: { base: "xl:block" },
      "2xl": { base: "2xl:block" }
    },
    backdrop: {
      true: { backdrop: "bg-gray-900 bg-opacity-75" }
    }
  }
});
const sidebarbutton = tv({
  base: "inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
  variants: {
    breakpoint: {
      sm: "sm:hidden",
      md: "md:hidden",
      lg: "lg:hidden",
      xl: "xl:hidden",
      "2xl": "2xl:hidden"
    }
  }
});
const sidebarcta = tv({
  slots: {
    base: "p-4 mt-6 bg-primary-50 rounded-lg dark:bg-primary-900",
    div: "flex items-center mb-3",
    span: "bg-primary-100 text-primary-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-900"
  }
});
const sitebarbrand = tv({
  slots: {
    base: "flex items-center ps-2.5 mb-5",
    img: "h-6 me-3 sm:h-7",
    span: "self-center text-xl font-semibold whitespace-nowrap dark:text-white"
  }
});
const sidebardropdownwrapper = tv({
  slots: {
    base: "",
    btn: "flex items-center w-full text-base font-normal text-gray-900 rounded transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700",
    span: "flex-1 ms-3 text-left whitespace-nowrap",
    svg: "h-3 w-3 text-gray-800 dark:text-white",
    ul: "py-2 space-y-2"
  }
});
const cardPlaceholder = tv({
  slots: {
    base: "p-4 rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700",
    imageArea: "mb-4 flex h-48 items-center justify-center rounded bg-gray-300 dark:bg-gray-700",
    imageIcon: "text-gray-200 dark:text-gray-600",
    line: "rounded-full bg-gray-200 dark:bg-gray-700",
    footerArea: "mt-4 flex items-center space-x-3 rtl:space-x-reverse"
  },
  variants: {
    size: {
      sm: { base: "max-w-sm" },
      md: { base: "max-w-md" },
      lg: { base: "max-w-lg" },
      xl: { base: "max-w-xl" },
      "2xl": { base: "max-w-2xl" }
    }
  }
});
const imagePlaceholder = tv({
  slots: {
    base: "space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center",
    image: "flex w-full items-center justify-center rounded bg-gray-300 sm:w-96 dark:bg-gray-700",
    svg: "text-gray-200",
    content: "w-full",
    line: "rounded-full bg-gray-200 dark:bg-gray-700"
  },
  variants: {
    size: {
      sm: {
        image: "h-32",
        content: "space-y-2"
      },
      md: {
        image: "h-48",
        content: "space-y-3"
      },
      lg: {
        image: "h-64",
        content: "space-y-4"
      }
    },
    rounded: {
      none: {
        image: "rounded-none",
        line: "rounded-none"
      },
      sm: {
        image: "rounded-sm",
        line: "rounded-sm"
      },
      md: {
        image: "rounded",
        line: "rounded"
      },
      lg: {
        image: "rounded-lg",
        line: "rounded-lg"
      },
      full: {
        image: "rounded-full",
        line: "rounded-full"
      }
    }
  }
});
const listPlaceholder = tv({
  slots: {
    base: "p-4 space-y-4 max-w-md rounded border border-gray-200 divide-y divide-gray-200 shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700",
    item: "flex items-center justify-between",
    itemContent: "",
    itemTitle: "mb-2.5 h-2.5 w-24 rounded-full bg-gray-300 dark:bg-gray-600",
    itemSubtitle: "h-2 w-32 rounded-full bg-gray-200 dark:bg-gray-700",
    itemExtra: "h-2.5 w-12 rounded-full bg-gray-300 dark:bg-gray-700"
  },
  variants: {
    size: {
      sm: {
        base: "p-3 space-y-3 max-w-sm md:p-4",
        itemTitle: "mb-2 h-2 w-20",
        itemSubtitle: "h-1.5 w-28",
        itemExtra: "h-2 w-10"
      },
      md: {},
      // default size
      lg: {
        base: "p-5 space-y-5 max-w-lg md:p-7",
        itemTitle: "mb-3 h-3 w-28",
        itemSubtitle: "h-2.5 w-36",
        itemExtra: "h-3 w-14"
      }
    },
    rounded: {
      none: { base: "rounded-none" },
      sm: { base: "rounded-sm" },
      md: { base: "rounded" },
      lg: { base: "rounded-lg" },
      full: { base: "rounded-full p-8 md:p-16" }
    }
  }
});
const skeleton = tv({
  slots: {
    wrapper: "animate-pulse",
    line: "rounded-full bg-gray-200 dark:bg-gray-700"
  },
  variants: {
    size: {
      sm: {
        wrapper: "max-w-sm"
      },
      md: {
        wrapper: "max-w-md"
      },
      lg: {
        wrapper: "max-w-lg"
      },
      xl: {
        wrapper: "max-w-xl"
      },
      "2xl": {
        wrapper: "max-w-2xl"
      }
    }
  }
});
const testimonialPlaceholder = tv({
  slots: {
    wrapper: "animate-pulse",
    line1: "rounded-full bg-gray-200 dark:bg-gray-700",
    line2: "rounded-full bg-gray-300 dark:bg-gray-700",
    svg: "me-2 h-10 w-10 text-gray-200 dark:text-gray-700",
    subContent: "mt-4 flex items-center justify-center"
  }
});
const textPlaceholder = tv({
  slots: {
    baseWrapper: "space-y-2.5 animate-pulse",
    divWrapper: "flex items-center space-x-2 rtl:space-x-reverse",
    lineA: "rounded-full bg-gray-200 dark:bg-gray-700",
    lineB: "rounded-full bg-gray-300 dark:bg-gray-600"
  },
  variants: {
    size: {
      sm: { baseWrapper: "max-w-sm" },
      md: { baseWrapper: "max-w-md" },
      lg: { baseWrapper: "max-w-lg" },
      xl: { baseWrapper: "max-w-xl" },
      "2xl": { baseWrapper: "max-w-2xl" }
    }
  }
});
const videoPlaceholder = tv({
  base: "flex justify-center items-center h-56 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700",
  variants: {
    size: {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl"
    }
  }
});
const widgetPlaceholder = tv({
  slots: {
    base: "p-4 max-w-sm rounded border border-gray-200 shadow animate-pulse md:p-6 dark:border-gray-700",
    wrapper: "mt-4 flex items-baseline space-x-6 rtl:space-x-reverse",
    hLine: "rounded-full bg-gray-200 dark:bg-gray-700",
    vLine: "w-full rounded-t-lg bg-gray-200 dark:bg-gray-700"
  }
});
const spinner = tv({
  base: "inline-block animate-spin text-gray-300",
  variants: {
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: "fill-primary-600",
      secondary: "fill-secondary-600",
      gray: "fill-gray-600 dark:fill-gray-300",
      red: "fill-red-600",
      orange: "fill-orange-500",
      amber: "fill-amber-500",
      yellow: "fill-yellow-400",
      lime: "fill-lime-500",
      green: "fill-green-500",
      emerald: "fill-emerald-500",
      teal: "fill-teal-500",
      cyan: "fill-cyan-500",
      sky: "fill-sky-500",
      blue: "fill-blue-600",
      indigo: "fill-indigo-600",
      violet: "fill-violet-600",
      purple: "fill-purple-600",
      fuchsia: "fill-fuchsia-600",
      pink: "fill-pink-600",
      rose: "fill-rose-600"
    },
    size: {
      "4": "w-4 h-4",
      "5": "w-5 h-5",
      "6": "w-6 h-6",
      "8": "w-8 h-8",
      "10": "w-10 h-10",
      "12": "w-12 h-12",
      "16": "w-16 h-16"
    }
  },
  defaultVariants: {
    color: "primary",
    size: "8"
  }
});
const tabs = tv({
  slots: {
    base: "flex flex-wrap space-x-2 rtl:space-x-reverse",
    content: "p-4 bg-gray-50 rounded-lg dark:bg-gray-800 mt-4",
    divider: "h-px bg-gray-200 dark:bg-gray-700",
    active: "p-4 text-primary-600 bg-gray-100 rounded-t-lg dark:bg-gray-800 dark:text-primary-500",
    inactive: "p-4 text-gray-500 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
  },
  variants: {
    tabStyle: {
      full: {
        active: "p-4 w-full rounded-none group-first:rounded-s-lg group-last:rounded-e-lg text-gray-900 bg-gray-100 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:bg-gray-700 dark:text-white",
        inactive: "p-4 w-full rounded-none group-first:rounded-s-lg group-last:rounded-e-lg text-gray-500 dark:text-gray-400 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-primary-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
      },
      pill: {
        active: "py-3 px-4 text-white bg-primary-600 rounded-lg",
        inactive: "py-3 px-4 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
      },
      underline: {
        base: "-mb-px",
        active: "p-4 text-primary-600 border-b-2 border-primary-600 dark:text-primary-500 dark:border-primary-500 bg-transparent",
        inactive: "p-4 border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-gray-500 dark:text-gray-400 bg-transparent"
      },
      none: {
        active: "",
        inactive: ""
      }
    },
    hasDivider: {
      true: {}
    }
  },
  compoundVariants: [
    {
      tabStyle: ["full", "pill"],
      hasDivider: true,
      class: {
        divider: "hidden"
      }
    }
  ],
  defaultVariants: {
    tabStyle: "none",
    hasDivider: true
  }
});
const tabItem = tv({
  slots: {
    base: "group focus-within:z-10",
    button: "inline-block text-sm font-medium text-center disabled:cursor-not-allowed",
    content: "hidden"
  },
  variants: {
    open: {
      true: {
        button: "active"
      }
    },
    disabled: {
      true: {
        button: "cursor-not-allowed"
      }
    }
  },
  compoundVariants: [
    {
      open: true,
      class: {
        button: ""
        // We'll merge this with activeClasses from context
      }
    },
    {
      open: false,
      class: {
        button: ""
        // We'll merge this with inactiveClasses from context
      }
    }
  ],
  defaultVariants: {
    open: false,
    disabled: false
  }
});
const table = tv({
  slots: {
    base: "",
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
      true: { base: "shadow-md sm:rounded-lg" }
    }
  }
});
const tablebodyrow = tv({
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
      class: "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
    },
    {
      striped: true,
      color: "primary",
      class: "odd:bg-primary-500 even:bg-primary-600 odd:dark:bg-primary-500 even:dark:bg-primary-600"
    },
    {
      striped: true,
      color: "secondary",
      class: "odd:bg-secondary-500 even:bg-secondary-600 odd:dark:bg-secondary-500 even:dark:bg-secondary-600"
    },
    {
      striped: true,
      color: "gray",
      class: "odd:bg-gray-500 even:bg-gray-600 odd:dark:bg-gray-500 even:dark:bg-gray-600"
    },
    // default, primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
    {
      striped: true,
      color: "red",
      class: "odd:bg-red-500 even:bg-red-600 odd:dark:bg-red-500 even:dark:bg-red-600"
    },
    {
      striped: true,
      color: "orange",
      class: "odd:bg-orange-500 even:bg-orange-600 odd:dark:bg-orange-500 even:dark:bg-orange-600"
    },
    {
      striped: true,
      color: "amber",
      class: "odd:bg-amber-500 even:bg-amber-600 odd:dark:bg-amber-500 even:dark:bg-amber-600"
    },
    {
      striped: true,
      color: "yellow",
      class: "odd:bg-yellow-500 even:bg-yellow-600 odd:dark:bg-yellow-500 even:dark:bg-yellow-600"
    },
    {
      striped: true,
      color: "lime",
      class: "odd:bg-lime-500 even:bg-lime-600 odd:dark:bg-lime-500 even:dark:bg-lime-600"
    },
    {
      striped: true,
      color: "green",
      class: "odd:bg-green-500 even:bg-green-600 odd:dark:bg-green-500 even:dark:bg-green-600"
    },
    {
      striped: true,
      color: "emerald",
      class: "odd:bg-emerald-500 even:bg-emerald-600 odd:dark:bg-emerald-500 even:dark:bg-emerald-600"
    },
    {
      striped: true,
      color: "teal",
      class: "odd:bg-teal-500 even:bg-teal-600 odd:dark:bg-teal-500 even:dark:bg-teal-600"
    },
    {
      striped: true,
      color: "cyan",
      class: "odd:bg-cyan-500 even:bg-cyan-600 odd:dark:bg-cyan-500 even:dark:bg-cyan-600"
    },
    {
      striped: true,
      color: "sky",
      class: "odd:bg-sky-500 even:bg-sky-600 odd:dark:bg-sky-500 even:dark:bg-sky-600"
    },
    {
      striped: true,
      color: "blue",
      class: "odd:bg-blue-500 even:bg-blue-600 odd:dark:bg-blue-500 even:dark:bg-blue-600"
    },
    {
      striped: true,
      color: "indigo",
      class: "odd:bg-indigo-500 even:bg-indigo-600 odd:dark:bg-indigo-500 even:dark:bg-indigo-600"
    },
    {
      striped: true,
      color: "violet",
      class: "odd:bg-violet-500 even:bg-violet-600 odd:dark:bg-violet-500 even:dark:bg-violet-600"
    },
    {
      striped: true,
      color: "purple",
      class: "odd:bg-purple-500 even:bg-purple-600 odd:dark:bg-purple-500 even:dark:bg-purple-600"
    },
    {
      striped: true,
      color: "fuchsia",
      class: "odd:bg-fuchsia-500 even:bg-fuchsia-600 odd:dark:bg-fuchsia-500 even:dark:bg-fuchsia-600"
    },
    {
      striped: true,
      color: "pink",
      class: "odd:bg-pink-500 even:bg-pink-600 odd:dark:bg-pink-500 even:dark:bg-pink-600"
    },
    {
      striped: true,
      color: "rose",
      class: "odd:bg-rose-500 even:bg-rose-600 odd:dark:bg-rose-500 even:dark:bg-rose-600"
    }
  ]
});
const tablehead = tv({
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
    noborder: {
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
      noborder: true,
      class: "bg-transparent dark:bg-transparent"
    },
    {
      color: "default",
      striped: true,
      class: "bg-transparent dark:bg-transparent border-gray-700"
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
const tablebodycell = tv({
  base: "px-6 py-4 whitespace-nowrap font-medium"
});
const tableheadcell = tv({
  base: "px-6 py-3"
});
const activity = tv({
  base: "relative border-s border-gray-200 dark:border-gray-700"
});
const activityitem = tv({
  slots: {
    li: "mb-10 ms-6",
    span: "flex absolute -start-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900",
    img: "rounded-full shadow-lg",
    outerDiv: "p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-700 dark:border-gray-600",
    innerDiv: "justify-between items-center mb-3 sm:flex",
    time: "mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0",
    title: "text-sm font-normal text-gray-500 lex dark:text-gray-300",
    text: "p-3 text-xs italic font-normal text-gray-500 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300"
  }
});
const group = tv({
  slots: {
    div: "p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700",
    time: "text-lg font-semibold text-gray-900 dark:text-white",
    ol: "mt-3 divide-y divider-gray-200 dark:divide-gray-700"
  }
});
const groupitem = tv({
  slots: {
    a: "block items-center p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700",
    img: "me-3 mb-3 w-12 h-12 rounded-full sm:mb-0",
    div: "text-gray-600 dark:text-gray-400",
    title: "text-base font-normal",
    span: "inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400"
  }
});
const timeline = tv({
  variants: {
    order: {
      group: "p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700",
      horizontal: "sm:flex",
      activity: "relative border-s border-gray-200 dark:border-gray-700",
      vertical: "relative border-s border-gray-200 dark:border-gray-700",
      default: "relative border-s border-gray-200 dark:border-gray-700"
    }
  },
  defaultVariants: {
    order: "default"
  }
});
const timelineitem = tv({
  slots: {
    li: "",
    div: "",
    time: "",
    h3: "",
    svg: "w-3 h-3 text-primary-600 dark:text-primary-400"
  },
  variants: {
    order: {
      default: {
        li: "mb-10 ms-4",
        div: "absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700",
        time: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
        h3: "text-lg font-semibold text-gray-900 dark:text-white"
      },
      vertical: {
        li: "mb-10 ms-6",
        div: "flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900",
        time: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
        h3: "flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white"
      },
      horizontal: {
        li: "relative mb-6 sm:mb-0",
        div: "flex items-center",
        time: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
        h3: "text-lg font-semibold text-gray-900 dark:text-white"
      },
      activity: {
        li: "mb-10 ms-6",
        div: "flex absolute -start-3 justify-center items-center w-6 h-6 bg-primary-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-primary-900",
        time: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
        h3: "text-lg font-semibold text-gray-900 dark:text-white"
      },
      group: {
        li: "",
        div: "p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700",
        time: "text-lg font-semibold text-gray-900 dark:text-white",
        h3: "text-lg font-semibold text-gray-900 dark:text-white"
      }
    }
  },
  defaultVariants: {
    order: "default"
  }
});
const toast = tv({
  slots: {
    base: "flex w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 gap-3",
    icon: "w-8 h-8 inline-flex items-center justify-center shrink-0 rounded-lg",
    content: "w-full text-sm font-normal",
    close: "ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
  },
  variants: {
    position: {
      "top-left": { base: "absolute top-5 start-5" },
      "top-right": { base: "absolute top-5 end-5" },
      "bottom-left": { base: "absolute bottom-5 start-5" },
      "bottom-right": { base: "absolute bottom-5 end-5" }
    },
    color: {
      // primary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: {
        icon: "text-primary-500 bg-primary-100 dark:bg-primary-800 dark:text-primary-200",
        close: "text-primary-500 dark:text-primary-200 hover:text-primary-600 dark:hover:text-primary-500"
      },
      gray: {
        icon: "text-gray-500 bg-gray-100 dark:bg-gray-700 dark:text-gray-200",
        close: "text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-500"
      },
      red: {
        icon: "text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200",
        close: "text-red-500 dark:text-red-200 hover:text-red-600 dark:hover:text-red-500"
      },
      orange: {
        icon: "text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200",
        close: "text-orange-500 dark:text-orange-200 hover:text-orange-600 dark:hover:text-orange-500"
      },
      amber: {
        icon: "text-amber-500 bg-amber-100 dark:bg-amber-700 dark:text-amber-200",
        close: "text-amber-500 dark:text-amber-200 hover:text-amber-600 dark:hover:text-amber-500"
      },
      yellow: {
        icon: "text-yellow-500 bg-yellow-100 dark:bg-yellow-800 dark:text-yellow-200",
        close: "text-yellow-500 dark:text-yellow-200 hover:text-yellow-600 dark:hover:text-yellow-500"
      },
      lime: {
        icon: "text-lime-500 bg-lime-100 dark:bg-lime-700 dark:text-lime-200",
        close: "text-lime-500 dark:text-lime-200 hover:text-lime-600 dark:hover:text-lime-500"
      },
      green: {
        icon: "text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200",
        close: "text-green-500 dark:text-green-200 hover:text-green-600 dark:hover:text-green-500"
      },
      emerald: {
        icon: "text-emerald-500 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-200",
        close: "text-emerald-500 dark:text-emerald-200 hover:text-emerald-600 dark:hover:text-emerald-500"
      },
      teal: {
        icon: "text-teal-500 bg-teal-100 dark:bg-teal-800 dark:text-teal-200",
        close: "text-teal-500 dark:text-teal-200 hover:text-teal-600 dark:hover:text-teal-500"
      },
      cyan: {
        icon: "text-cyan-500 bg-cyan-100 dark:bg-cyan-800 dark:text-cyan-200",
        close: "text-cyan-500 dark:text-cyan-200 hover:text-cyan-600 dark:hover:text-cyan-500"
      },
      sky: {
        icon: "text-sky-500 bg-sky-100 dark:bg-sky-800 dark:text-sky-200",
        close: "text-sky-500 dark:text-sky-200 hover:text-sky-600 dark:hover:text-sky-500"
      },
      blue: {
        icon: "text-blue-500 bg-blue-100 dark:bg-blue-800 dark:text-blue-200",
        close: "text-blue-500 dark:text-blue-200 hover:text-blue-600 dark:hover:text-blue-500"
      },
      indigo: {
        icon: "text-indigo-500 bg-indigo-100 dark:bg-indigo-800 dark:text-indigo-200",
        close: "text-indigo-500 dark:text-indigo-200 hover:text-indigo-600 dark:hover:text-indigo-500"
      },
      violet: {
        icon: "text-violet-500 bg-violet-100 dark:bg-violet-800 dark:text-violet-200",
        close: "text-violet-500 dark:text-violet-200 hover:text-violet-600 dark:hover:text-violet-500"
      },
      purple: {
        icon: "text-purple-500 bg-purple-100 dark:bg-purple-800 dark:text-purple-200",
        close: "text-purple-500 dark:text-purple-200 hover:text-purple-600 dark:hover:text-purple-500"
      },
      fuchsia: {
        icon: "text-fuchsia-500 bg-fuchsia-100 dark:bg-fuchsia-800 dark:text-fuchsia-200",
        close: "text-fuchsia-500 dark:text-fuchsia-200 hover:text-fuchsia-600 dark:hover:text-fuchsia-500"
      },
      pink: {
        icon: "text-pink-500 bg-pink-100 dark:bg-pink-700 dark:text-pink-200",
        close: "text-pink-500 dark:text-pink-200 hover:text-pink-600 dark:hover:text-pink-500"
      },
      rose: {
        icon: "text-rose-500 bg-rose-100 dark:bg-rose-700 dark:text-rose-200",
        close: "text-rose-500 dark:text-rose-200 hover:text-rose-600 dark:hover:text-rose-500"
      }
    },
    align: {
      true: { base: "items-center" },
      false: { base: "items-start" }
    }
  }
});
const toolbar = tv({
  slots: {
    base: "flex justify-between items-center",
    content: "flex flex-wrap items-center"
  },
  variants: {
    embedded: {
      true: {},
      false: {
        base: "py-2 px-3"
      }
    },
    color: {
      default: {},
      primary: {
        base: "bg-primary-100 text-primary-800"
      },
      secondary: {
        base: "bg-secondary-100 text-secondary-800"
      }
      // Add more color variants as needed
    },
    separators: {
      true: {
        content: "sm:divide-x rtl:divide-x-reverse"
      }
    }
  },
  compoundVariants: [
    {
      embedded: true,
      color: "default",
      class: {
        base: "bg-transparent"
      }
    }
  ]
});
const toolbarGroup = tv({
  base: "flex items-center",
  variants: {
    spacing: {
      default: "space-x-1 rtl:space-x-reverse",
      tight: "space-x-0.5 rtl:space-x-reverse",
      loose: "space-x-2 rtl:space-x-reverse"
    },
    padding: {
      default: "sm:pe-4 sm:ps-4",
      none: ""
    },
    position: {
      middle: "",
      first: "sm:ps-0",
      last: "sm:pe-0"
    }
  },
  compoundVariants: [
    {
      position: ["first", "last"],
      class: "sm:px-0"
    }
  ]
});
const toolbarButton = tv({
  base: "focus:outline-none whitespace-normal",
  variants: {
    color: {
      dark: "text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",
      gray: "text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300",
      red: "text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300",
      yellow: "text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300",
      green: "text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300",
      indigo: "text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300",
      purple: "text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300",
      pink: "text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300",
      blue: "text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300",
      primary: "text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300",
      default: "focus:ring-gray-400 hover:bg-gray-100"
    },
    size: {
      xs: "m-0.5 rounded-sm focus:ring-1 p-0.5",
      sm: "m-0.5 rounded focus:ring-1 p-0.5",
      md: "m-0.5 rounded-lg focus:ring-2 p-1.5",
      lg: "m-0.5 rounded-lg focus:ring-2 p-2.5"
    },
    background: {
      true: "",
      false: ""
    }
  },
  compoundVariants: [
    {
      color: "default",
      background: true,
      class: "dark:hover:bg-gray-600"
    },
    {
      color: "default",
      background: false,
      class: "dark:hover:bg-gray-700"
    }
  ]
});
const tooltip = tv({
  slots: {
    base: "absolute bg-gray-800 text-white px-2 py-1 rounded text-sm z-50 pointer-events-none",
    arrowBase: "absolute w-2 h-2 rotate-45 bg-inherit"
  },
  variants: {
    color: {
      default: { base: "bg-gray-800" },
      primary: { base: "bg-primary-600" },
      secondary: { base: "bg-secondary-600" },
      gray: { base: "bg-gray-600" },
      red: { base: "bg-red-600" },
      orange: { base: "bg-orange-600" },
      amber: { base: "bg-amber-600" },
      yellow: { base: "bg-yellow-400" },
      lime: { base: "bg-lime-600" },
      green: { base: "bg-green-600" },
      emerald: { base: "bg-emerald-600" },
      teal: { base: "bg-teal-600" },
      cyan: { base: "bg-cyan-600" },
      sky: { base: "bg-sky-600" },
      blue: { base: "bg-blue-600" },
      indigo: { base: "bg-indigo-600" },
      violet: { base: "bg-violet-600" },
      purple: { base: "bg-purple-600" },
      fuchsia: { base: "bg-fuchsia-600" },
      pink: { base: "bg-pink-600" },
      rose: { base: "bg-rose-800" }
    },
    arrow: {
      true: { arrowBase: "visible" },
      false: { arrowBase: "hidden" }
    },
    position: {
      top: {},
      "top-start": {},
      "top-end": {},
      bottom: {},
      "bottom-start": {},
      "bottom-end": {},
      left: {},
      "left-start": {},
      "left-end": {},
      right: {},
      "right-start": {},
      "right-end": {}
    }
  },
  defaultVariants: {
    color: "default",
    arrow: true,
    position: "top"
  }
});
const label = tv({
  base: "text-sm rtl:text-right font-medium block",
  variants: {
    color: {
      disabled: "text-gray-500 dark:text-gray-500",
      primary: "text-primary-700 dark:text-primary-500",
      secondary: "text-secondary-700 dark:text-secondary-500",
      green: "text-green-700 dark:text-green-500",
      emerald: "text-emerald-700 dark:text-emerald-500",
      red: "text-red-700 dark:text-red-500",
      blue: "text-blue-700 dark:text-blue-500",
      yellow: "text-yellow-700 dark:text-yellow-500",
      orange: "text-orange-700 dark:text-orange-500",
      gray: "text-gray-700 dark:text-gray-200",
      teal: "text-teal-700 dark:text-teal-500",
      cyan: "text-cyan-700 dark:text-cyan-500",
      sky: "text-sky-700 dark:text-sky-500",
      indigo: "text-indigo-700 dark:text-indigo-500",
      lime: "text-lime-700 dark:text-lime-500",
      amber: "text-amber-700 dark:text-amber-500",
      violet: "text-violet-700 dark:text-violet-500",
      purple: "text-purple-700 dark:text-purple-500",
      fuchsia: "text-fuchsia-700 dark:text-fuchsia-500",
      pink: "text-pink-700 dark:text-pink-500",
      rose: "text-rose-700 dark:text-rose-500"
    }
  }
});
const checkbox = tv({
  slots: {
    base: "w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 me-2 rounded",
    label: ""
  },
  variants: {
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: {
        base: "text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600"
      },
      secondary: {
        base: "text-secondary-600 focus:ring-secondary-500 dark:focus:ring-secondary-600"
      },
      gray: {
        base: "text-gray-600 focus:ring-gray-600 dark:ring-offset-gray-800 dark:focus:ring-gray-600"
      },
      red: {
        base: "text-red-600 focus:ring-red-600 dark:ring-offset-red-600 dark:focus:ring-red-600"
      },
      orange: {
        base: "text-orange-600 focus:ring-orange-600 dark:ring-offset-orange-600 dark:focus:ring-orange-600"
      },
      amber: {
        base: "text-amber-600 focus:ring-amber-600 dark:ring-offset-amber-600 dark:focus:ring-amber-600"
      },
      yellow: {
        base: "text-yellow-400 focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400"
      },
      lime: {
        base: "text-lime-700 focus:ring-lime-700 dark:ring-offset-lime-700 dark:focus:ring-lime-700"
      },
      green: {
        base: "text-green-600 focus:ring-green-600 dark:ring-offset-green-600 dark:focus:ring-green-600"
      },
      emerald: {
        base: "text-emerald-600 focus:ring-emerald-600 dark:ring-offset-emerald-600 dark:focus:ring-emerald-600"
      },
      teal: {
        base: "text-teal-600 focus:ring-teal-600 dark:ring-offset-teal-600 dark:focus:ring-teal-600"
      },
      cyan: {
        base: "text-cyan-600 focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600"
      },
      sky: {
        base: "text-sky-600 focus:ring-sky-600 dark:ring-offset-sky-600 dark:focus:ring-sky-600"
      },
      blue: {
        base: "text-blue-700 focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-blue-700"
      },
      indigo: {
        base: "text-indigo-700 focus:ring-indigo-700 dark:ring-offset-indigo-700 dark:focus:ring-indigo-700"
      },
      violet: {
        base: "text-violet-600 focus:ring-violet-600 dark:ring-offset-violet-600 dark:focus:ring-violet-600"
      },
      purple: {
        base: "text-purple-600 focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600"
      },
      fuchsia: {
        base: "text-fuchsia-600 focus:ring-fuchsia-600 dark:ring-offset-fuchsia-600 dark:focus:ring-fuchsia-600"
      },
      pink: {
        base: "text-pink-600 focus:ring-pink-600 dark:ring-offset-pink-600 dark:focus:ring-pink-600"
      },
      rose: {
        base: "text-rose-600 focus:ring-rose-600 dark:ring-offset-rose-600 dark:focus:ring-rose-600"
      }
    },
    tinted: {
      true: { base: "dark:bg-gray-600 dark:border-gray-500" },
      false: { base: "dark:bg-gray-700 dark:border-gray-600" }
    },
    custom: {
      true: { base: "sr-only peer" }
    },
    rounded: {
      true: { base: "rounded" }
    },
    inline: {
      true: {
        label: "inline-flex",
        false: "flex items-center"
      }
    }
  },
  defaultVariants: {
    color: "primary"
  }
});
const dropzone = tv({
  base: "flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
});
const fileupload = tv({
  slots: {
    base: "block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right p-2.5 focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:placeholder-gray-400 border-gray-300 dark:border-gray-600 text-sm rounded-lg border !p-0 dark:text-gray-400",
    wrapper: "relative w-full",
    right: "flex absolute inset-y-0 items-center text-gray-500 dark:text-gray-400 end-0 p-2.5"
  },
  variants: {
    size: {
      sm: { base: "text-xs ps-9 pe-9 p-2" },
      md: { base: "text-sm ps-10 pe-10 p-2.5" },
      lg: { base: "sm:text-base ps-11 pe-11 p-3" }
    }
  }
});
const floatingLabelInput = tv({
  slots: {
    base: "relative",
    input: "block w-full text-sm text-gray-900 bg-transparent appearance-none dark:text-white focus:outline-none focus:ring-0 peer",
    label: "absolute text-sm duration-300 transform scale-75 z-10 origin-left rtl:origin-right peer-placeholder-shown:scale-100 peer-focus:scale-75"
  },
  variants: {
    inputStyle: {
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
        label: "text-gray-500 dark:text-gray-400 peer-focus:text-primary-600 peer-focus:dark:text-primary-500"
      },
      primary: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-primary-500 focus:border-primary-600",
        label: "text-primary-500 dark:text-primary-400 peer-focus:text-primary-600 peer-focus:dark:text-primary-500"
      },
      secondary: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-secondary-500 focus:border-secondary-600",
        label: "text-secondary-500 dark:text-secondary-400 peer-focus:text-secondary-600 peer-focus:dark:text-secondary-500"
      },
      gray: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-gray-500 focus:border-gray-600",
        label: "text-gray-500 dark:text-gray-400 peer-focus:text-gray-600 peer-focus:dark:text-gray-500"
      },
      red: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-red-500 focus:border-red-600",
        label: "text-red-500 dark:text-red-400 peer-focus:text-red-600 peer-focus:dark:text-red-500"
      },
      orange: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-orange-500 focus:border-orange-600",
        label: "text-orange-500 dark:text-orange-400 peer-focus:text-orange-600 peer-focus:dark:text-orange-500"
      },
      amber: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-amber-500 focus:border-amber-600",
        label: "text-amber-500 dark:text-amber-400 peer-focus:text-amber-600 peer-focus:dark:text-amber-500"
      },
      yellow: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-yellow-500 focus:border-yellow-600",
        label: "text-yellow-500 dark:text-yellow-400 peer-focus:text-yellow-600 peer-focus:dark:text-yellow-500"
      },
      lime: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-lime-500 focus:border-lime-600",
        label: "text-lime-500 dark:text-lime-400 peer-focus:text-lime-600 peer-focus:dark:text-lime-500"
      },
      green: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-green-500 focus:border-green-600",
        label: "text-green-500 dark:text-green-400 peer-focus:text-green-600 peer-focus:dark:text-green-500"
      },
      emerald: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-emerald-500 focus:border-emerald-600",
        label: "text-emerald-500 dark:text-emerald-400 peer-focus:text-emerald-600 peer-focus:dark:text-emerald-500"
      },
      teal: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-teal-500 focus:border-teal-600",
        label: "text-teal-500 dark:text-teal-400 peer-focus:text-teal-600 peer-focus:dark:text-teal-500"
      },
      cyan: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-cyan-500 focus:border-cyan-600",
        label: "text-cyan-500 dark:text-cyan-400 peer-focus:text-cyan-600 peer-focus:dark:text-cyan-500"
      },
      sky: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-sky-500 focus:border-sky-600",
        label: "text-sky-500 dark:text-sky-400 peer-focus:text-sky-600 peer-focus:dark:text-sky-500"
      },
      blue: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-blue-500 focus:border-blue-600",
        label: "text-blue-500 dark:text-blue-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
      },
      indigo: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-indigo-500 focus:border-indigo-600",
        label: "text-indigo-500 dark:text-indigo-400 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500"
      },
      violet: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-violet-500 focus:border-violet-600",
        label: "text-violet-600 dark:text-violet-500 peer-focus:text-violet-600 peer-focus:dark:text-violet-500"
      },
      purple: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-purple-500 focus:border-purple-600",
        label: "text-purple-600 dark:text-purple-500 peer-focus:text-purple-600 peer-focus:dark:text-purple-500"
      },
      fuchsia: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-fuchsia-500 focus:border-fuchsia-600",
        label: "text-fuchsia-600 dark:text-fuchsia-500 peer-focus:text-fuchsia-600 peer-focus:dark:text-fuchsia-500"
      },
      pink: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-pink-500 focus:border-pink-600",
        label: "text-pink-600 dark:text-pink-500 peer-focus:text-pink-600 peer-focus:dark:text-pink-500"
      },
      rose: {
        input: "border-gray-300 dark:border-gray-600 dark:focus:border-rose-500 focus:border-rose-600",
        label: "text-rose-600 dark:text-rose-500 peer-focus:text-rose-600 peer-focus:dark:text-rose-500"
      }
    }
  },
  compoundVariants: [
    {
      inputStyle: "filled",
      size: "small",
      class: {
        input: "px-2.5 pb-1.5 pt-4",
        label: "top-3"
      }
    },
    {
      inputStyle: "filled",
      size: "default",
      class: {
        input: "px-2.5 pb-2.5 pt-5",
        label: "top-4"
      }
    },
    {
      inputStyle: "outlined",
      size: "small",
      class: {
        input: "px-2.5 pb-1.5 pt-3",
        label: "top-1"
      }
    },
    {
      inputStyle: "outlined",
      size: "default",
      class: {
        input: "px-2.5 pb-2.5 pt-4",
        label: "top-2"
      }
    },
    {
      inputStyle: "standard",
      size: "small",
      class: {
        input: "py-2 px-0",
        label: "top-3"
      }
    },
    {
      inputStyle: "standard",
      size: "default",
      class: {
        input: "py-2.5 px-0",
        label: "top-3"
      }
    },
    {
      inputStyle: "filled",
      color: "primary",
      class: {
        input: "dark:focus:border-primary-500 focus:border-primary-600"
      }
    }
  ],
  defaultVariants: {
    inputStyle: "standard",
    size: "default",
    color: "primary"
  }
});
const helper = tv({
  base: "text-xs font-normal text-gray-500 dark:text-gray-300",
  variants: {
    color: {
      disabled: "text-gray-400 dark:text-gray-500",
      primary: "text-primary-500 dark:text-primary-400",
      secondary: "text-secondary-500 dark:text-secondary-400",
      green: "text-green-500 dark:text-green-400",
      emerald: "text-emerald-500 dark:text-emerald-400",
      red: "text-red-500 dark:text-red-400",
      blue: "text-blue-500 dark:text-blue-400",
      yellow: "text-yellow-500 dark:text-yellow-400",
      orange: "text-orange-500 dark:text-orange-400",
      gray: "text-gray-500 dark:text-gray-400",
      teal: "text-teal-500 dark:text-teal-400",
      cyan: "text-cyan-500 dark:text-cyan-400",
      sky: "text-sky-500 dark:text-sky-400",
      indigo: "text-indigo-500 dark:text-indigo-400",
      lime: "text-lime-500 dark:text-lime-400",
      amber: "text-amber-500 dark:text-amber-400",
      violet: "text-violet-500 dark:text-violet-400",
      purple: "text-purple-500 dark:text-purple-400",
      fuchsia: "text-fuchsia-500 dark:text-fuchsia-400",
      pink: "text-pink-500 dark:text-pink-400",
      rose: "text-rose-500 dark:text-rose-400"
    }
  }
});
const input = tv({
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
const select = tv({
  base: "block w-full",
  variants: {
    underline: {
      true: "text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer !px-0",
      false: "text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
    },
    size: {
      sm: "text-sm p-2",
      md: "text-sm p-2.5",
      lg: "text-base py-3 px-4"
    }
  },
  defaultVariants: {
    underline: false,
    size: "md"
  }
});
const radio = tv({
  slots: {
    input: "relative flex items-center w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 mr-2",
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
    }
  },
  defaultVariants: {
    color: "primary"
  }
});
const radioButton = tv({
  base: "",
  variants: {
    inline: {
      true: "inline-flex",
      false: "flex"
    }
  }
});
const range = tv({
  base: "w-full bg-gray-200 rounded-lg cursor-pointer dark:bg-gray-700",
  variants: {
    size: {
      sm: "h-1 range-sm",
      md: "h-2",
      lg: "h-3 range-lg"
    },
    color: {
      // other colors do not work
      gray: "",
      red: "",
      blue: "",
      indigo: "",
      violet: "",
      purple: "",
      fuchsia: "",
      pink: "",
      rose: ""
    },
    appearance: {
      auto: "range accent-red-500",
      none: "appearance-none"
    }
  },
  compoundVariants: [
    {
      appearance: "auto",
      color: "gray",
      class: "accent-gray-500"
    },
    {
      appearance: "auto",
      color: "red",
      class: "accent-red-500"
    },
    {
      appearance: "auto",
      color: "blue",
      class: "accent-blue-500"
    },
    {
      appearance: "auto",
      color: "indigo",
      class: "accent-indigo-500"
    },
    {
      appearance: "auto",
      color: "violet",
      class: "accent-violet-500"
    },
    {
      appearance: "auto",
      color: "purple",
      class: "accent-purple-500"
    },
    {
      appearance: "auto",
      color: "fuchsia",
      class: "accent-fuchsia-500"
    },
    {
      appearance: "auto",
      color: "pink",
      class: "accent-pink-500"
    },
    {
      appearance: "auto",
      color: "rose",
      class: "accent-rose-500"
    }
  ]
});
const search = tv({
  slots: {
    base: "relative w-full",
    leftDiv: "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none",
    icon: "text-gray-500 dark:text-gray-400",
    content: "absolute inset-y-0 end-0 flex items-center text-gray-500 dark:text-gray-400",
    input: "block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  },
  variants: {
    size: {
      sm: {
        input: "text-xs p-2 ps-9 pe-9 ",
        icon: "w-3 h-3"
        // leftDiv: 'ps-2.5',
      },
      md: {
        input: "text-sm p-2.5 ps-10 pe-10",
        icon: "w-4 h-4"
        // leftDiv: 'ps-10',
      },
      lg: {
        input: "sm:text-base p-3 ps-11 pe-11",
        icon: "w-6 h-6"
        // leftDiv: 'ps-11',
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
const textarea = tv({
  slots: {
    base: "block text-sm border-0 px-0 bg-inherit dark:bg-inherit focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
    wrapper: "rounded-lg bg-gray-50 dark:bg-gray-600 text-gray-900 dark:placeholder-gray-400 dark:text-white border border-gray-200 dark:border-gray-500",
    innerWrapper: "py-2 px-4 bg-white dark:bg-gray-800",
    headerCls: "py-2 px-3 border-gray-200 dark:border-gray-500",
    footerCls: "py-2 px-3 border-gray-200 dark:border-gray-500"
  },
  variants: {
    cols: {
      false: {
        base: "w-full",
        wrapper: "w-full"
      }
    },
    wrapped: {
      false: { base: "p-2.5 text-sm focus:ring-primary-500 border-gray-300 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 disabled:cursor-not-allowed disabled:opacity-50" }
    },
    hasHeader: {
      true: {
        headerCls: "border-b"
      },
      false: {
        innerWrapper: "rounded-t-lg"
      }
    },
    hasFooter: {
      true: {
        footerCls: "border-t"
      },
      false: {
        innerWrapper: "rounded-b-lg"
      }
    }
  }
});
const toggle = tv({
  slots: {
    span: "me-3 shrink-0 bg-gray-200 rounded-full peer-focus:ring-4 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:bg-gray-600 dark:border-gray-500 relative ",
    label: "flex items-center",
    input: "w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 rounded dark:bg-gray-700 dark:border-gray-600 sr-only peer"
  },
  variants: {
    disabled: {
      true: { label: "cursor-not-allowed opacity-50" }
    },
    checked: {
      true: "",
      false: ""
    },
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: {
        span: "peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 peer-checked:bg-primary-600"
      },
      secondary: {
        span: "peer-focus:ring-secondary-300 dark:peer-focus:ring-secondary-800 peer-checked:bg-secondary-600"
      },
      gray: {
        span: "peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 peer-checked:bg-gray-500"
      },
      red: {
        span: "peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600"
      },
      orange: {
        span: "peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500"
      },
      amber: {
        span: "peer-focus:ring-amber-300 dark:peer-focus:ring-amber-800 peer-checked:bg-amber-600"
      },
      yellow: {
        span: "peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400"
      },
      lime: {
        span: "peer-focus:ring-lime-300 dark:peer-focus:ring-lime-800 peer-checked:bg-lime-500"
      },
      green: {
        span: "peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600"
      },
      emerald: {
        span: "peer-focus:ring-emerald-300 dark:peer-focus:ring-emerald-800 peer-checked:bg-emerald-600"
      },
      teal: {
        span: "peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600"
      },
      cyan: {
        span: "peer-focus:ring-cyan-300 dark:peer-focus:ring-cyan-800 peer-checked:bg-cyan-600"
      },
      sky: {
        span: "peer-focus:ring-sky-300 dark:peer-focus:ring-sky-800 peer-checked:bg-sky-600"
      },
      blue: {
        span: "peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600"
      },
      indigo: {
        span: "peer-focus:ring-indigo-300 dark:peer-focus:ring-indigo-800 peer-checked:bg-indigo-600"
      },
      violet: {
        span: "peer-focus:ring-violet-300 dark:peer-focus:ring-violet-800 peer-checked:bg-violet-600"
      },
      purple: {
        span: "peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600"
      },
      fuchsia: {
        span: "peer-focus:ring-fuchsia-300 dark:peer-focus:ring-fuchsia-800 peer-checked:bg-fuchsia-600"
      },
      pink: {
        span: "peer-focus:ring-pink-300 dark:peer-focus:ring-pink-800 peer-checked:bg-pink-600"
      },
      rose: {
        span: "peer-focus:ring-rose-300 dark:peer-focus:ring-rose-800 peer-checked:bg-rose-600"
      }
    },
    size: {
      small: {
        span: "w-9 h-5 after:top-[2px] after:start-[2px] after:h-4 after:w-4"
      },
      default: {
        span: "w-11 h-6 after:top-0.5 after:start-[2px] after:h-5 after:w-5"
      },
      large: {
        span: "w-14 h-7 after:top-0.5 after:start-[4px]  after:h-6 after:w-6"
      }
    }
  },
  defaultVariants: {
    color: "primary"
  }
});
const anchor = tv({
  base: "inline-flex items-center hover:underline",
  variants: {
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: "text-primary-600 dark:text-primary-500",
      secondary: "text-secondary-600 dark:text-secondary-500",
      gray: "text-gray-600 dark:text-gray-500",
      red: "text-red-600 dark:text-red-500",
      orange: "text-orange-600 dark:text-orange-500",
      amber: "text-amber-600 dark:text-amber-500",
      yellow: "text-yellow-600 dark:text-yellow-500",
      lime: "text-lime-600 dark:text-lime-500",
      green: "text-green-600 dark:text-green-500",
      emerald: "text-emerald-600 dark:text-emerald-500",
      teal: "text-teal-600 dark:text-teal-500",
      cyan: "text-cyan-600 dark:text-cyan-500",
      sky: "text-sky-600 dark:text-sky-500",
      blue: "text-blue-600 dark:text-blue-500",
      indigo: "text-indigo-600 dark:text-indigo-500",
      violet: "text-violet-600 dark:text-violet-500",
      purple: "text-purple-600 dark:text-purple-500",
      fuchsia: "text-fuchsia-600 dark:text-fuchsia-500",
      pink: "text-pink-600 dark:text-pink-500",
      rose: "text-rose-600 dark:text-rose-500"
    }
  }
});
const blockquote = tv({
  base: "font-semibold text-gray-900 dark:text-white",
  variants: {
    border: {
      true: "border-s-4 border-gray-300 dark:border-gray-500",
      false: ""
    },
    italic: {
      true: "italic",
      false: ""
    },
    bg: {
      true: "bg-gray-50 dark:bg-gray-800",
      false: ""
    },
    alignment: {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
      "8xl": "text-8xl",
      "9xl": "text-9xl"
    }
  },
  defaultVariants: {
    border: false,
    italic: true,
    bg: false,
    alignment: "left",
    size: "lg"
  }
});
const descriptionList = tv({
  variants: {
    tag: {
      dt: "text-gray-500 md:text-lg dark:text-gray-400",
      dd: "text-lg font-semibold"
    }
  },
  defaultVariants: {
    tag: "dt"
  }
});
const heading = tv({
  base: "font-bold text-gray-900 dark:text-white",
  variants: {
    tag: {
      h1: "text-5xl font-extrabold",
      h2: "text-4xl",
      h3: "text-3xl",
      h4: "text-2xl",
      h5: "text-xl",
      h6: "text-lg"
    }
  },
  defaultVariants: {
    tag: "h1"
  }
});
const hr = tv({
  slots: {
    base: "h-px my-8 bg-gray-200 border-0 dark:bg-gray-700",
    container: "inline-flex items-center justify-center w-full",
    content: "absolute px-4 -translate-x-1/2 rtl:translate-x-1/2 bg-white start-1/2 dark:bg-gray-900"
  },
  variants: {
    withChildren: {
      true: {
        base: "w-full",
        container: "relative"
      }
    }
  },
  defaultVariants: {
    withChildren: false
  }
});
const img = tv({
  slots: {
    base: "max-w-full h-auto",
    figure: "",
    figureCaption: "mt-2 text-sm text-center text-gray-500 dark:text-gray-400"
  },
  variants: {
    size: {
      xs: { base: "max-w-xs", figure: "max-w-xs" },
      sm: { base: "max-w-sm", figure: "max-w-sm" },
      md: { base: "max-w-md", figure: "max-w-md" },
      lg: { base: "max-w-lg", figure: "max-w-lg" },
      xl: { base: "max-w-xl", figure: "max-w-xl" },
      "2xl": { base: "max-w-2xl", figure: "max-w-2xl" },
      full: { base: "max-w-full", figure: "max-w-full" },
      none: { base: "", figure: "" }
    },
    alignment: {
      left: {},
      center: { base: "mx-auto", figure: "mx-auto" },
      right: { base: "ms-auto", figure: "ms-auto" }
    },
    effect: {
      grayscale: {
        base: "cursor-pointer rounded-lg grayscale filter transition-all duration-300 hover:grayscale-0"
      },
      blur: { base: "blur-sm transition-all duration-300 hover:blur-none" },
      invert: {
        base: "invert filter transition-all duration-300 hover:invert-0"
      },
      sepia: {
        base: "sepia filter transition-all duration-300 hover:sepia-0"
      },
      saturate: {
        base: "saturate-50 filter transition-all duration-300 hover:saturate-100"
      },
      "hue-rotate": {
        base: "hue-rotate-60 filter transition-all duration-300 hover:hue-rotate-0"
      },
      none: {
        base: "transition-all duration-300"
      }
    },
    shadow: {
      sm: { base: "shadow-sm" },
      regular: { base: "shadow" },
      md: { base: "shadow-md" },
      lg: { base: "shadow-lg" },
      xl: { base: "shadow-xl" },
      "2xl": { base: "shadow-2xl" },
      inner: { base: "shadow-inner" },
      none: { base: "shadow-none" }
    },
    rounded: {
      sm: { base: "rounded-sm" },
      regular: { base: "rounded" },
      md: { base: "rounded-md" },
      lg: { base: "rounded-lg" },
      xl: { base: "rounded-xl" },
      "2xl": { base: "rounded-2xl" },
      "3xl": { base: "rounded-3xl" },
      full: { base: "rounded-full" },
      none: { base: "rounded-none" }
    }
  }
});
const layout = tv({
  base: "grid grid-cols-1 sm:grid-cols-2"
});
const list = tv({
  base: "",
  variants: {
    tag: {
      ul: "list-disc",
      dl: "list-none",
      ol: "list-decimal"
    },
    position: {
      inside: "list-inside",
      outside: "list-outside"
    }
  },
  defaultVariants: {
    position: "inside",
    tag: "ul"
  }
});
const mark = tv({
  base: "text-white dark:bg-blue-500 bg-blue-600 px-2 rounded"
});
const paragraph = tv({
  base: "text-gray-900 dark:text-white",
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
      "7xl": "text-7xl",
      "8xl": "text-8xl",
      "9xl": "text-9xl"
    },
    weight: {
      thin: "font-thin",
      extralight: "font-extralight",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
      black: "font-black"
    },
    space: {
      tighter: "tracking-tighter",
      tight: "tracking-tight",
      normal: "tracking-normal",
      wide: "tracking-wide",
      wider: "tracking-wider",
      widest: "tracking-widest"
    },
    height: {
      none: "leading-none",
      tight: "leading-tight",
      snug: "leading-snug",
      normal: "leading-normal",
      relaxed: "leading-relaxed",
      loose: "leading-loose",
      "3": "leading-3",
      "4": "leading-4",
      "5": "leading-5",
      "6": "leading-6",
      "7": "leading-7",
      "8": "leading-8",
      "9": "leading-9",
      "10": "leading-10"
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    },
    whitespace: {
      normal: "whitespace-normal",
      nowrap: "whitespace-nowrap",
      pre: "whitespace-pre",
      preline: "whitespace-pre-line",
      prewrap: "whitespace-pre-wrap"
    },
    italic: {
      true: "italic"
    },
    firstUpper: {
      true: "first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-left",
      false: ""
    },
    justify: {
      true: "text-justify",
      false: ""
    }
  }
});
const secondary = tv({
  base: "text-gray-500 dark:text-gray-400 font-semibold"
});
const span = tv({
  variants: {
    italic: {
      true: "italic"
    },
    underline: {
      true: "underline decoration-2 decoration-blue-400 dark:decoration-blue-600"
    },
    linethrough: {
      true: "line-through"
    },
    uppercase: {
      true: "uppercase"
    },
    gradient: {
      skyToEmerald: "text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400",
      purpleToBlue: "text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500",
      pinkToOrange: "text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-400",
      tealToLime: "text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-lime-300",
      redToYellow: "text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500",
      indigoToCyan: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-400",
      fuchsiaToRose: "text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-rose-500",
      amberToEmerald: "text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-emerald-500",
      violetToRed: "text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-red-500",
      blueToGreen: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-500 to-green-400",
      orangeToPurple: "text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500",
      yellowToRed: "text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-indigo-400 to-red-600",
      none: ""
    },
    highlight: {
      blue: "text-blue-600 dark:text-blue-500",
      green: "text-green-600 dark:text-green-500",
      red: "text-red-600 dark:text-red-500",
      yellow: "text-yellow-600 dark:text-yellow-500",
      purple: "text-purple-600 dark:text-purple-500",
      pink: "text-pink-600 dark:text-pink-500",
      indigo: "text-indigo-600 dark:text-indigo-500",
      teal: "text-teal-600 dark:text-teal-500",
      orange: "text-orange-600 dark:text-orange-500",
      cyan: "text-cyan-600 dark:text-cyan-500",
      fuchsia: "text-fuchsia-600 dark:text-fuchsia-500",
      amber: "text-amber-600 dark:text-amber-500",
      lime: "text-lime-600 dark:text-lime-500",
      none: ""
    },
    decoration: {
      solid: "underline decoratio-solid",
      double: "underline decoration-double",
      dotted: "underline decoration-dotted",
      dashed: "underline decoration-dashed",
      wavy: "underline decoration-wavy",
      none: "decoration-none"
    },
    decorationColor: {
      // blue, green, red, yellow, purple, pink, indigo, teal, orange, cyan, fuchsia, amber, lime, none
      // radio
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: "underline decoration-primary-400 dark:decoration-primary-600",
      secondary: "underline decoration-secondary-400 dark:decoration-secondary-600",
      gray: "underline decoration-gray-400 dark:decoration-gray-600",
      orange: "underline decoration-orange-400 dark:decoration-orange-600",
      red: "underline decoration-red-400 dark:decoration-red-600",
      yellow: "underline decoration-yellow-400 dark:decoration-yellow-600",
      lime: "underline decoration-lime-400 dark:decoration-lime-600",
      green: "underline decoration-green-400 dark:decoration-green-600",
      emerald: "underline decoration-emerald-400 dark:decoration-emerald-600",
      teal: "underline decoration-teal-400 dark:decoration-teal-600",
      cyan: "underline decoration-cyan-400 dark:decoration-cyan-600",
      sky: "underline decoration-sky-400 dark:decoration-sky-600",
      blue: "underline decoration-blue-400 dark:decoration-blue-600",
      indigo: "underline decoration-indigo-400 dark:decoration-indigo-600",
      violet: "underline decoration-violet-400 dark:decoration-violet-600",
      purple: "underline decoration-purple-400 dark:decoration-purple-600",
      fuchsia: "underline decoration-fuchsia-400 dark:decoration-fuchsia-600",
      pink: "underline decoration-pink-400 dark:decoration-pink-600",
      rose: "underline decoration-rose-400 dark:decoration-rose-600",
      none: "decoration-none"
    },
    decorationThickness: {
      "1": "underline decoration-1",
      "2": "underline decoration-2",
      "4": "underline decoration-4",
      "8": "underline decoration-8",
      "0": "decoration-0"
    }
  }
});
export {
  label as $,
  footerIcon as A,
  footer as B,
  footerBrand as C,
  footerLi as D,
  footerUl as E,
  gallery as F,
  indicator as G,
  kbd as H,
  listGroupItem as I,
  listGroup as J,
  megamenu as K,
  modal as L,
  navhamburger as M,
  dropdownFooter as N,
  navbar as O,
  navbrand as P,
  navLi as Q,
  navUl as R,
  pagination as S,
  paginationItem as T,
  sidebar as U,
  sidebardropdownwrapper as V,
  paragraph as W,
  heading as X,
  closeButtonVariants as Y,
  tabs as Z,
  tabItem as _,
  accordion as a,
  radio as a0,
  dropdown as a1,
  dropdownul as a2,
  dropdownli as a3,
  dropdownHeader as a4,
  tooltip as a5,
  imagePlaceholder as a6,
  skeleton as a7,
  breadcrumb as a8,
  spinner as a9,
  widgetPlaceholder as aA,
  timeline as aB,
  timelineitem as aC,
  activity as aD,
  activityitem as aE,
  group as aF,
  groupitem as aG,
  toast as aH,
  span as aI,
  dropzone as aJ,
  fileupload as aK,
  floatingLabelInput as aL,
  radioButton as aM,
  range as aN,
  select as aO,
  toolbar as aP,
  toolbarButton as aQ,
  toolbarGroup as aR,
  list as aS,
  blockquote as aT,
  mark as aU,
  secondary as aV,
  hr as aW,
  img as aX,
  layout as aY,
  descriptionList as aZ,
  toggle as aa,
  input as ab,
  textarea as ac,
  anchor as ad,
  checkbox as ae,
  helper as af,
  search as ag,
  textPlaceholder as ah,
  table as ai,
  tablebodycell as aj,
  tablebodyrow as ak,
  tableheadcell as al,
  tablehead as am,
  popover as an,
  progressbar as ao,
  advancedrating as ap,
  review as aq,
  scorerating as ar,
  rating as as,
  sidebarbutton as at,
  sidebarcta as au,
  sitebarbrand as av,
  cardPlaceholder as aw,
  listPlaceholder as ax,
  testimonialPlaceholder as ay,
  videoPlaceholder as az,
  accordionitem as b,
  alert as c,
  avatar as d,
  badge as e,
  banner as f,
  bottomNav as g,
  bottomNavItem as h,
  bottomnavheaderitem as i,
  bottomnavheader as j,
  button as k,
  gradientButton as l,
  buttonGroup as m,
  card as n,
  darkmode as o,
  android as p,
  defaultMockup as q,
  desktop as r,
  ios as s,
  laptop as t,
  smartwatch as u,
  tablet as v,
  drawer as w,
  drawerhead as x,
  dropdowndivider as y,
  footerCopyright as z
};
