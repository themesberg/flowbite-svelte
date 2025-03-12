import type { Snippet } from "svelte";
import type { HTMLLiAttributes, HTMLOlAttributes } from "svelte/elements";
import type { ListVariants } from "./theme";

interface ListProps extends HTMLOlAttributes {
  children: Snippet;
  tag?: ListVariants["tag"];
  position?: ListVariants["position"];
  ctxClass?: string;
  isContenteditable?: boolean;
}

interface LiProps extends HTMLLiAttributes {
  children: Snippet;
  icon?: boolean;
}

export { type ListProps, type LiProps };
