import type { Snippet } from "svelte";
import type { HTMLLabelAttributes } from "svelte/elements";
import type { LabelVariants } from "./theme";

interface LabelProps extends HTMLLabelAttributes {
  children: Snippet;
  color?: LabelVariants["color"];
  show?: boolean;
}

export { type LabelProps };
