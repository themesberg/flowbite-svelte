import type { Snippet } from "svelte";
import type { HTMLAnchorAttributes } from "svelte/elements";
import type { AnchorVariants } from "./theme";

interface AnchorProps extends HTMLAnchorAttributes {
  children: Snippet;
  color?: AnchorVariants["color"];
}

export { type AnchorProps };
