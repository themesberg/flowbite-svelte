import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { ParagraphVariants } from "./theme";

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children: Snippet;
  italic?: boolean;
  firstUpper?: boolean;
  whitespace?: ParagraphVariants["whitespace"];
  size?: ParagraphVariants["size"];
  weight?: ParagraphVariants["weight"];
  space?: ParagraphVariants["space"];
  height?: ParagraphVariants["height"];
  align?: ParagraphVariants["align"];
  justify?: boolean;
}

export { type ParagraphProps };
