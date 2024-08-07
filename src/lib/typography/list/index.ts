import List from './List.svelte';
import Li from './Li.svelte';
import { type VariantProps, tv } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLLiAttributes } from 'svelte/elements';
import { list } from './theme';

type TagType = VariantProps<typeof list>['tag'];
type PositionType = VariantProps<typeof list>['position'];

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

export { List, Li, list, type ListProps, type LiProps };
