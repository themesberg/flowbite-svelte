import TabItem from './TabItem.svelte';
import Tabs from './Tabs.svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes, HTMLLiAttributes } from 'svelte/elements';
import { writable, type Writable } from 'svelte/store';
import { tabs, tabItem } from './theme';

interface TabsProps extends HTMLAttributes<HTMLUListElement> {
  children: Snippet;
  tabStyle?: 'full' | 'pill' | 'underline' | 'none';
  ulClass?: string | undefined | null;
  contentClass?: string | undefined | null;
  divider?: boolean;
  activeClass?: string | undefined | null;
  inactiveClass?: string | undefined | null;
  class?: string | undefined | null;
}

interface TabitemProps extends HTMLLiAttributes {
  children?: Snippet;
  titleSlot?: Snippet;
  open?: boolean;
  title?: string | undefined | null;
  activeClass?: string | undefined | null;
  inactiveClass?: string | undefined | null;
  class?: string | undefined | null;
  disabled?: boolean;
}

interface TabCtxType {
  activeClass: string | undefined | null;
  inactiveClass: string | undefined | null;
  selected: Writable<HTMLElement>;
}

export {
  TabItem,
  tabItem,
  Tabs,
  tabs,
  type TabsProps,
  type TabitemProps,
  type TabCtxType
};
