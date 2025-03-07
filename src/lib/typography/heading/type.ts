import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { HeadingVariants } from "./theme";

interface HeadingProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  tag?: HeadingVariants["tag"];
}

export { type HeadingProps };
