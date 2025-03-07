import type { Snippet } from "svelte";
import type { HTMLAnchorAttributes, HTMLButtonAttributes, HTMLLiAttributes } from "svelte/elements";
import type { PaginationItemVariants, PaginationVariants } from "./theme";

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

type HTMLButtonOrAnchorAttributes = HTMLButtonAttributes & HTMLAnchorAttributes;

interface PaginationItemProps extends PaginationItemVariants, HTMLButtonOrAnchorAttributes {
  children?: Snippet;
  // name?: string;
  // href?: string;
  // rel?: string;
}

interface PaginationProps extends PaginationVariants, HTMLLiAttributes {
  prevContent?: Snippet;
  nextContent?: Snippet;
  pages?: PaginationItemProps[];
  previous?: () => void;
  next?: () => void;
  ariaLabel?: string;
}

export { type PaginationItemProps, type PaginationProps, type PaginationItemSpecificProps };
