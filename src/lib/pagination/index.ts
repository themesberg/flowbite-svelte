import { paginationItem, pagination } from './theme';
import type { Snippet } from 'svelte';
import Pagination from './Pagination.svelte';
import { type VariantProps } from 'tailwind-variants';
import PaginationItem from './PaginationItem.svelte';
import type { HTMLAnchorAttributes, HTMLButtonAttributes, HTMLLiAttributes } from 'svelte/elements';

// type PaginationItemProps = PaginationItemAttributes & ((HTMLAnchorAttributes & { href: string, disabled?: never }) | (HTMLButtonAttributes & { href?: never }));

type PaginationItemType = VariantProps<typeof paginationItem>;
// interface PaginationItemAttributes {
//   children?: Snippet;
//   name?: string;
//   href?: string;
//   active?: boolean;
//   rel?: string;
//   size?: PaginationItemType['size'];
// }

interface PaginationItemSpecificProps {
  children?: Snippet;
  name?: string;
  href?: string;
  active?: boolean;
  rel?: string;
  size?: PaginationItemType['size'];
}

type PaginationItemProps = PaginationItemSpecificProps &
  Omit<HTMLButtonAttributes, keyof PaginationItemSpecificProps> &
  Omit<HTMLAnchorAttributes, keyof PaginationItemSpecificProps> & {
    href?: string;
  };

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

export { Pagination, PaginationItem, paginationItem, pagination, type PaginationItemProps, type PaginationProps, type PaginationItemSpecificProps };
