import Secondary from './Secondary.svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import { secondary } from './theme';

interface SecondaryProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  secondaryClass?: string | undefined | null;
  class?: string | undefined | null;
}

export { Secondary, secondary, type SecondaryProps };
