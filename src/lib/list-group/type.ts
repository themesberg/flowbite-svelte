import type { Snippet } from "svelte";
import type { HTMLAnchorAttributes } from "svelte/elements";
import type { Component } from "svelte";

/* eslint-disable  @typescript-eslint/no-explicit-any */
interface ListGroupItemType {
  name: string;
  Icon?: Component;
  onclick?: () => void;
  href?: string;
  active?: boolean;
  current?: boolean;
  disabled?: boolean;
  [key: string]: any;
}

interface ListgroupProps {
  children?: Snippet<[item: ListGroupItemType | string | undefined]>;
  items?: (ListGroupItemType | string)[];
  active?: boolean;
  onclick?: (event?: MouseEvent) => void;
  rounded?: boolean;
  border?: boolean;
  class?: string;
  itemClass?: string;
  aClasss?: string;
  btnClass?: string;
  iconClass?: string;
}

interface ListgroupItemProps extends HTMLAnchorAttributes {
  children: Snippet;
  onclick?: (event?: MouseEvent) => void;
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
  aClasss?: string;
  btnClass?: string;
  iconClass?: string;
}

export { type ListgroupProps, type ListgroupItemProps, type ListGroupItemType };
