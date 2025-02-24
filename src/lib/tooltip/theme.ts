import { tv } from "tailwind-variants";
import type { Placement } from "@floating-ui/dom";

export const tooltip = tv({
  slots: {
    base: "absolute bg-gray-800 text-white px-2 py-1 rounded-sm text-sm z-50 pointer-events-none",
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
    } as Record<Placement, object>
  },
  defaultVariants: {
    color: "default",
    arrow: true,
    position: "top"
  }
});
