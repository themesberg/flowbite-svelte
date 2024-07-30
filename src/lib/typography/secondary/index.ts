import Secondary from './Secondary.svelte';
import { type VariantProps, tv } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

const secondaryVariants = tv({
  base: 'text-gray-500 dark:text-gray-400 font-semibold'
});

interface SecondaryProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  secondaryClass?: string | undefined | null;
  class?: string | undefined | null;
}

export { Secondary, secondaryVariants, type SecondaryProps };
