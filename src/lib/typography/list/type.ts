import type { Snippet } from "svelte";
import type { HTMLLiAttributes } from "svelte/elements";

type TagType = "ul" | "dl" | "ol" | undefined;
type PositionType = "inside" | "outside" | undefined;

interface ListProps {
  children: Snippet;
  tag?: TagType;
  position?: PositionType;
  ctxClass?: string;
  class?: string;
  isContenteditable?: boolean;
}

interface LiProps extends HTMLLiAttributes {
  children: Snippet;
  icon?: boolean;
}

export { type ListProps, type LiProps };
