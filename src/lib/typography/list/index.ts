import List from './List.svelte';
import Li from './Li.svelte';
import { type VariantProps, tv } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLLiAttributes } from 'svelte/elements';

const listVariants = tv({
  base: '',
  variants: {
    list: {
      disc: 'list-disc',
      none: 'list-none',
      decimal: 'list-decimal'
    },
    position: {
      inside: 'list-inside',
      outside: 'list-outside'
    },
    tag: {
      ul: 'list-disc',
      ol: 'list-decimal',
      dl: 'list-none'
    }
  },
  defaultVariants: {
    position: 'inside',
    tag: 'ul'
  }
});

type TagType = VariantProps<typeof listVariants>['tag'];
type ListType = VariantProps<typeof listVariants>['list'];
type PositionType = VariantProps<typeof listVariants>['position'];

interface ListProps {
  children: Snippet;
  tag?: TagType;
  list?: ListType;
  position?: PositionType;
  ctxclass?: string | undefined | null;
  class?: string | undefined;
}

interface LiProps extends HTMLLiAttributes {
  children: Snippet;
  icon?: boolean;
  class?: string | undefined;
}

export { List, Li, listVariants, type ListProps, type LiProps };
