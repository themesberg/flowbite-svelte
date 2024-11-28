import type { Snippet } from "svelte";
import type { HTMLAttributes, HTMLLiAttributes } from "svelte/elements";
import { type Writable } from "svelte/store";

interface TabsProps extends HTMLAttributes<HTMLUListElement> {
  children: Snippet;
  tabStyle?: "full" | "pill" | "underline" | "none";
  ulClass?: string;
  contentClass?: string;
  divider?: boolean;
  class?: string;
}

interface TabitemProps extends HTMLLiAttributes {
  children?: Snippet;
  titleSlot?: Snippet;
  open?: boolean;
  title?: string;
  activeClass?: string;
  inactiveClass?: string;
  class?: string;
  disabled?: boolean;
  tabStyle?: "full" | "pill" | "underline" | "none";
}

interface TabCtxType {
  activeClass?: string;
  inactiveClass?: string;
  tabStyle?: "full" | "pill" | "underline" | "none";
  selected: Writable<HTMLElement>;
  panelId: string;
}

export { type TabsProps, type TabitemProps, type TabCtxType };
