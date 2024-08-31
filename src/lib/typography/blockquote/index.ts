import { type VariantProps } from 'tailwind-variants';
import Blockquote from './Blockquote.svelte';
import type { Snippet } from 'svelte';
import type { HTMLBlockquoteAttributes } from 'svelte/elements';
import { blockquote } from './theme';

type SizeType = VariantProps<typeof blockquote>['size'];
type AlignmentType = VariantProps<typeof blockquote>['alignment'];

interface BlockquoteProps extends HTMLBlockquoteAttributes {
  children: Snippet;
  border?: boolean;
  italic?: boolean;
  bg?: boolean;
  alignment?: AlignmentType;
  size?: SizeType;
}

export { Blockquote, blockquote, type BlockquoteProps };
