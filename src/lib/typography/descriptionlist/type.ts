import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { DescriptionListVariants } from "./theme";

interface DescriptionListProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  tag: DescriptionListVariants["tag"];
}

export { type DescriptionListProps };
