import Listgroup from './Listgroup.svelte';
import ListgroupItem from './ListgroupItem.svelte';
import type { Snippet } from 'svelte';
import type { ListGroupItemType } from '../types';
import type { HTMLAnchorAttributes } from 'svelte/elements';
import type { Component } from 'svelte';
import { listGroup, listGroupItem } from './theme';

interface ListgroupProps {
  children?: Snippet;
  items?: ListGroupItemType[] | string[];
  active?: boolean;
  onclick?: () => void;
  rounded?: boolean;
  border?: boolean;
  class?: string;
}

interface ListgroupItemProps extends HTMLAnchorAttributes {
  children: Snippet;
  onclick?: () => void;
  active?: boolean;
  current?: boolean;
  disabled?: boolean;
  name?: string;
  Icon?: Component;
  href?: string;
  currentClass?: string;
  normalClass?: string;
  disabledClass?: string;
  liClass?: string;
  class?: string;
}

export { Listgroup, ListgroupItem, listGroup, listGroupItem, type ListgroupProps, type ListgroupItemProps };
