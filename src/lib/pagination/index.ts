import { paginationItem, pagination } from './theme';
import type { Snippet } from 'svelte';
import Pagination from './Pagination.svelte';
import { type VariantProps } from 'tailwind-variants';
import PaginationItem from './PaginationItem.svelte';
import type { HTMLAnchorAttributes, HTMLButtonAttributes, HTMLLiAttributes } from 'svelte/elements';

type PaginationItemProps = PaginationItemAttributes & ((HTMLAnchorAttributes & { href: string }) | (HTMLButtonAttributes & { href?: never }));

type PaginationItemType = VariantProps<typeof paginationItem>;
interface PaginationItemAttributes {
  children?: Snippet;
  name?: string;
  href?: string;
  active?: boolean;
  rel?: string;
  size?: PaginationItemType['size'];
}

interface PaginationProps extends HTMLLiAttributes {
  prevContent?: Snippet;
  nextContent?: Snippet;
  pages?: PaginationItemProps[];
  previous?: () => void;
  next?: () => void;
  table?: boolean;
  size?: PaginationItemType['size'];
  ariaLabel?: string;
}

export { Pagination, PaginationItem, paginationItem, pagination, type PaginationItemProps, type PaginationProps };
