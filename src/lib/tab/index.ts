import TabItem from './TabItem.svelte';
import Tabs from './Tabs.svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes, HTMLLiAttributes } from 'svelte/elements';
import { type Writable } from 'svelte/store';
import { tabs, tabItem } from './theme';

interface TabsProps extends HTMLAttributes<HTMLUListElement> {
  children: Snippet;
  tabStyle?: 'full' | 'pill' | 'underline' | 'none';
  ulClass?: string;
  contentClass?: string;
  divider?: boolean;
  class?: string;
  ctxActive?: string;
  ctxInactive?: string;
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
}

interface TabCtxType {
  activeClass?: string;
  inactiveClass?: string;
  selected: Writable<HTMLElement>;
}

export { TabItem, tabItem, Tabs, tabs, type TabsProps, type TabitemProps, type TabCtxType };
