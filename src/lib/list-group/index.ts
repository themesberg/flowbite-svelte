import Listgroup from './Listgroup.svelte';
import ListgroupItem from './ListgroupItem.svelte';
import type { Snippet } from 'svelte';
import type { ListGroupItemType } from '../types';
import type { HTMLAnchorAttributes } from 'svelte/elements';
import type { Component } from 'svelte';
import { listGroup, listGroupItem } from './theme'

interface ListgroupProps {
  children?: Snippet;
  items?: ListGroupItemType[] | string[];
  active?: boolean;
  onclick?: () => void;
  rounded?: boolean;
  border?: boolean;
  class?: string | undefined | null;
}

interface ListgroupItemProps extends HTMLAnchorAttributes {
  children: Snippet;
  onclick?: () => void;
  active?: boolean;
  current?: boolean;
  disabled?: boolean;
  name?: string | undefined | null;
  icon?: Component;
  href?: string | undefined | null;
  currentClass?: string | undefined | null;
  normalClass?: string | undefined | null;
  disabledClass?: string | undefined | null;
  focusClass?: string | undefined | null;
  hoverClass?: string | undefined | null;
  liClass?: string | undefined | null;
  class?: string | undefined | null;
}

export { Listgroup, ListgroupItem, listGroup, listGroupItem, type ListgroupProps, type ListgroupItemProps };
