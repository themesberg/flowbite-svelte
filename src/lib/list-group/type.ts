import type { Component, Snippet } from "svelte";
import type { HTMLAnchorAttributes, HTMLAttributes, HTMLButtonAttributes } from "svelte/elements";
import type { ListgroupItemVariants, ListgroupVariants } from "./theme";
import type { AnchorButtonAttributes } from "$lib/types";

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

interface ListgroupProps extends ListgroupVariants, Omit<HTMLAttributes<HTMLUListElement>, "children"> {
  children?: Snippet<[item: ListGroupItemType | string | undefined]>;
  items?: (ListGroupItemType | string)[];
  active?: boolean;
  onclick?: (event?: MouseEvent) => void;
  itemClass?: string;
  aClasss?: string;
  btnClass?: string;
  iconClass?: string;
}

type ListgroupItemProps = Omit<ListgroupItemVariants, "state"> & AnchorButtonAttributes & {
  current?: boolean;
  disabled?: boolean;
  Icon?: Component;
  iconClass?: string;
  name?: string
}


export { type ListgroupItemProps, type ListGroupItemType, type ListgroupProps };

