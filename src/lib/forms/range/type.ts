import type { HTMLInputAttributes } from "svelte/elements";
import type { RangeVariants } from "./theme";


interface RangeProps extends RangeVariants, Omit<HTMLInputAttributes, "size" | "color"> {
  value?: number | string;
}

export { type RangeProps };
