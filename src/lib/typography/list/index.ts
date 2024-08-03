import List from './List.svelte';
import Li from './Li.svelte';
import { type VariantProps, tv } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLLiAttributes } from 'svelte/elements';

const listVariants = tv({
  base: '',
  variants: {
    tag: {
      ul: 'list-disc',
      dl: 'list-none',
      ol: 'list-decimal'
    },
    position: {
      inside: 'list-inside',
      outside: 'list-outside'
    }
  },
  defaultVariants: {
    position: 'inside',
    tag: 'ul'
  }
  // tag: {
  //   ul: 'list-disc',
  //   ol: 'list-decimal',
  //   dl: 'list-none'
  // }
});

type TagType = VariantProps<typeof listVariants>['tag'];
type PositionType = VariantProps<typeof listVariants>['position'];

interface ListProps {
  children: Snippet;
  tag?: TagType;
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
