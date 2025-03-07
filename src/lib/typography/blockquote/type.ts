import type { Snippet } from "svelte";
import type { HTMLBlockquoteAttributes } from "svelte/elements";
import type { BlockquoteVariants } from "./theme";

interface BlockquoteProps extends HTMLBlockquoteAttributes {
  children: Snippet;
  border?: boolean;
  italic?: boolean;
  bg?: boolean;
  alignment?: BlockquoteVariants["alignment"];
  size?: BlockquoteVariants["size"];
}

export { type BlockquoteProps };
