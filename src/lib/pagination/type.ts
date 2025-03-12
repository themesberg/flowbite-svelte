import type { Snippet } from "svelte";
import type { HTMLAnchorAttributes, HTMLButtonAttributes, HTMLLiAttributes } from "svelte/elements";

type PaginationItemType = {
  size?: "default" | "large";
  active?: boolean | null;
  group?: boolean | null;
  table?: boolean | null;
};

interface PaginationItemSpecificProps {
  children?: Snippet;
  name?: string;
  href?: string;
  active?: boolean;
  rel?: string;
  size?: "default" | "large" | undefined;
}

type HTMLAttributesWithoutAbort = Omit<HTMLButtonAttributes, "on:abort"> & Omit<HTMLAnchorAttributes, "on:abort">;

interface PaginationItemProps extends HTMLAttributesWithoutAbort {
  children?: Snippet;
  name?: string;
  href?: string;
  active?: boolean;
  rel?: string;
  size?: "default" | "large" | undefined;
  class?: string;
}

interface PaginationProps extends HTMLLiAttributes {
  prevContent?: Snippet;
  nextContent?: Snippet;
  pages?: PaginationItemProps[];
  previous?: () => void;
  next?: () => void;
  table?: boolean;
  size?: PaginationItemType["size"];
  ariaLabel?: string;
}

export { type PaginationItemProps, type PaginationProps, type PaginationItemSpecificProps };
