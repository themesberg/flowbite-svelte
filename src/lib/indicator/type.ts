import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { IndicatorVariants } from "./theme";

interface IndicatorProps extends HTMLAttributes<HTMLDivElement> {
  children?: Snippet;
  color?: IndicatorVariants["color"];
  cornerStyle?: IndicatorVariants["cornerStyle"];
  size?: IndicatorVariants["size"];
  border?: boolean;
  placement?: IndicatorVariants["placement"];
  offset?: boolean;
}

export { type IndicatorProps };
