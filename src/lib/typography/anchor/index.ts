import A from './A.svelte';
import type { Snippet } from 'svelte';
import type { HTMLAnchorAttributes } from 'svelte/elements';
import { anchor } from './theme';
import { type VariantProps } from 'tailwind-variants';

type ColorType = VariantProps<typeof anchor>['color'];

interface AnchorProps extends HTMLAnchorAttributes {
  children: Snippet;
  color?: ColorType;
  class?: string | undefined | null;
}

export { A, anchor, type AnchorProps };
