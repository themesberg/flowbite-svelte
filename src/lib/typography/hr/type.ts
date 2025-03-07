import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

interface HrProps extends HTMLAttributes<HTMLElement> {
  children?: Snippet;
  divClass?: string;
  iconDivClass?: string;
  textSpanClass?: string;
  innerDivClass?: string;
}

export { type HrProps };
