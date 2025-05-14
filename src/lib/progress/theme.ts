import { tv } from "tailwind-variants";

export const progressbar = tv({
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
      primary: {
        labelInsideDiv: "bg-primary-600",
        insideDiv: "bg-primary-600"
      },
      secondary: {
        labelInsideDiv: "bg-secondary-600",
        insideDiv: "bg-secondary-600"
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

export const progressradial = tv({
  slots: {
    base: "relative inline-flex",
    labelInsideDiv: "absolute inset-0 flex items-center justify-center text-sm font-medium",
    circleBackground: "opacity-25",
    circleForeground: "transition-all",
    outsideDiv: "flex flex-col items-center mb-2 text-center",
    outsideSpan: "text-base font-medium",
    outsideProgress: "text-sm font-medium ml-1"
  },
  variants: {
    color: {
      primary: {
        circleBackground: "stroke-primary-600",
        circleForeground: "stroke-primary-600"
      },
      secondary: {
        circleBackground: "stroke-secondary-600",
        circleForeground: "stroke-secondary-600"
      },
      gray: {
        circleBackground: "stroke-gray-600 dark:stroke-gray-300",
        circleForeground: "stroke-gray-600 dark:stroke-gray-300"
      },
      red: {
        circleBackground: "stroke-red-600 dark:stroke-red-500",
        circleForeground: "stroke-red-600 dark:stroke-red-500"
      },
      orange: {
        circleBackground: "stroke-orange-600 dark:stroke-orange-500",
        circleForeground: "stroke-orange-600 dark:stroke-orange-500"
      },
      amber: {
        circleBackground: "stroke-amber-600 dark:stroke-amber-500",
        circleForeground: "stroke-amber-600 dark:stroke-amber-500"
      },
      yellow: {
        circleBackground: "stroke-yellow-400",
        circleForeground: "stroke-yellow-400"
      },
      lime: {
        circleBackground: "stroke-lime-600 dark:stroke-lime-500",
        circleForeground: "stroke-lime-600 dark:stroke-lime-500"
      },
      green: {
        circleBackground: "stroke-green-600 dark:stroke-green-500",
        circleForeground: "stroke-green-600 dark:stroke-green-500"
      },
      emerald: {
        circleBackground: "stroke-emerald-600 dark:stroke-emerald-500",
        circleForeground: "stroke-emerald-600 dark:stroke-emerald-500"
      },
      teal: {
        circleBackground: "stroke-teal-600 dark:stroke-teal-500",
        circleForeground: "stroke-teal-600 dark:stroke-teal-500"
      },
      cyan: {
        circleBackground: "stroke-cyan-600 dark:stroke-cyan-500",
        circleForeground: "stroke-cyan-600 dark:stroke-cyan-500"
      },
      sky: {
        circleBackground: "stroke-sky-600 dark:stroke-sky-500",
        circleForeground: "stroke-sky-600 dark:stroke-sky-500"
      },
      blue: {
        circleBackground: "stroke-blue-600",
        circleForeground: "stroke-blue-600"
      },
      indigo: {
        circleBackground: "stroke-indigo-600 dark:stroke-indigo-500",
        circleForeground: "stroke-indigo-600 dark:stroke-indigo-500"
      },
      violet: {
        circleBackground: "stroke-violet-600 dark:stroke-violet-500",
        circleForeground: "stroke-violet-600 dark:stroke-violet-500"
      },
      purple: {
        circleBackground: "stroke-purple-600 dark:stroke-purple-500",
        circleForeground: "stroke-purple-600 dark:stroke-purple-500"
      },
      fuchsia: {
        circleBackground: "stroke-fuchsia-600 dark:stroke-fuchsia-500",
        circleForeground: "stroke-fuchsia-600 dark:stroke-fuchsia-500"
      },
      pink: {
        circleBackground: "stroke-pink-600 dark:stroke-pink-500",
        circleForeground: "stroke-pink-600 dark:stroke-pink-500"
      },
      rose: {
        circleBackground: "stroke-rose-600 dark:stroke-rose-500",
        circleForeground: "stroke-rose-600 dark:stroke-rose-500"
      }
    },
    labelInside: {
      true: {}
    }
  }
});
