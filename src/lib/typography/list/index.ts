import List from "./List.svelte";
import Li from "./Li.svelte";
import type { Snippet } from "svelte";
import type { HTMLLiAttributes } from "svelte/elements";
import { list } from "./theme";

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

export { List, Li, list, type ListProps, type LiProps };
