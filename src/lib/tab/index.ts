import TabItem from './TabItem.svelte';
import Tabs from './Tabs.svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes, HTMLLiAttributes } from 'svelte/elements';
import { writable, type Writable } from 'svelte/store';

interface TabsProps extends HTMLAttributes<HTMLUListElement> {
  children: Snippet;
  style?: 'full' | 'pill' | 'underline' | 'none';
  defaultClass?: string | undefined | null;
  contentClass?: string | undefined | null;
  divider?: boolean;
  activeClasses?: string | undefined | null;
  inactiveClasses?: string | undefined | null;
  class?: string | undefined | null;
}

interface TabitemProps extends HTMLLiAttributes {
  children?: Snippet;
  titleSlot?: Snippet;
  open?: boolean;
  title?: string | undefined | null;
  activeClasses?: string | undefined | null;
  inactiveClasses?: string | undefined | null;
  defaultClass?: string | undefined | null;
  class?: string | undefined | null;
  disabled?: boolean;
}

interface TabCtxType {
  activeClasses: string | undefined | null;
  inactiveClasses: string | undefined | null;
  selected: Writable<HTMLElement>;
}

export { TabItem, Tabs, type TabsProps, type TabitemProps, type TabCtxType };
