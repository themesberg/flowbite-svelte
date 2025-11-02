import { tv, type VariantProps } from "tailwind-variants";

export type SplitPaneVariants = VariantProps<typeof splitpane>;
export type PaneVariants = VariantProps<typeof pane>;
export type DividerVariants = VariantProps<typeof divider>;

export const splitpane = tv({
  base: "relative flex h-full w-full overflow-hidden select-none",
  variants: {
    direction: {
      horizontal: "",
      vertical: "flex-col"
    }
  },
  defaultVariants: {
    direction: "horizontal"
  }
});

export const pane = tv({
  base: "flex flex-col relative overflow-hidden shrink-0 min-w-0 min-h-0"
});

export const divider = tv({
  base: "bg-gray-300 shrink-0 relative z-10 transition-colors duration-200 hover:bg-gray-400 focus:bg-gray-400 focus:outline focus:outline-2 focus:outline-blue-500 focus:-outline-offset-2",
  variants: {
    direction: {
      horizontal: "w-1 cursor-col-resize",
      vertical: "h-1 cursor-row-resize"
    },
    isDragging: {
      true: "bg-blue-500",
      false: ""
    }
  },
  defaultVariants: {
    direction: "horizontal",
    isDragging: false
  }
});

export const dividerHitArea = tv({
  base: "absolute bg-transparent",
  variants: {
    direction: {
      horizontal: "w-3 h-full -left-1 top-0",
      vertical: "h-3 w-full -top-1 left-0"
    }
  },
  defaultVariants: {
    direction: "horizontal"
  }
});