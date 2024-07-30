import Mark from './Mark.svelte';
import { type VariantProps, tv } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

const markVariants = tv({
  base: 'text-white dark:bg-blue-500 bg-blue-600 px-2 rounded'
});

interface MarkProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  markClass?: string | undefined;
  class?: string | undefined;
}

export { Mark, markVariants, type MarkProps };
