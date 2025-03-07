import type { Snippet } from "svelte";
import type { HTMLAttributes, HTMLLiAttributes } from "svelte/elements";
import { type Writable } from "svelte/store";
import type { TabsVaraints } from "./theme";

interface TabsProps extends HTMLAttributes<HTMLUListElement> {
  children: Snippet;
  tabStyle?: TabsVaraints["tabStyle"];
  ulClass?: string;
  contentClass?: string;
  divider?: boolean;
}

interface TabitemProps extends HTMLLiAttributes {
  children?: Snippet;
  titleSlot?: Snippet;
  open?: boolean;
  title?: string;
  activeClass?: string;
  inactiveClass?: string;
  disabled?: boolean;
  tabStyle?: TabsVaraints["tabStyle"];
}

interface TabCtxType {
  activeClass?: string;
  inactiveClass?: string;
  tabStyle?: TabsVaraints["tabStyle"];
  selected: Writable<HTMLElement>;
  panelId: string;
}

export { type TabsProps, type TabitemProps, type TabCtxType };
