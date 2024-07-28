import A from './A.svelte';
import { type VariantProps, tv } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLAnchorAttributes } from 'svelte/elements';


const anchorVariants = tv({
  base: 'inline-flex items-center hover:underline text-primary-600 dark:text-primary-500',
});

interface AnchorProps extends HTMLAnchorAttributes {
  children: Snippet;
  class?: string | undefined | null;
}

export {
  A,
  anchorVariants,
  type AnchorProps
}