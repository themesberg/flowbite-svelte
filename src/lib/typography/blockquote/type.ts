import type { Snippet } from "svelte";
import type { HTMLBlockquoteAttributes } from "svelte/elements";

type SizeType = "sm" | "lg" | "xl" | "2xl" | "base" | "xs" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "8xl" | "9xl" | undefined;
type AlignmentType = "left" | "center" | "right" | undefined;

interface BlockquoteProps extends HTMLBlockquoteAttributes {
  children: Snippet;
  border?: boolean;
  italic?: boolean;
  bg?: boolean;
  alignment?: AlignmentType;
  size?: SizeType;
}

export { type BlockquoteProps };
