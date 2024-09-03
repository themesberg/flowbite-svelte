import Mark from './Mark.svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import { mark } from './theme';

interface MarkProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  markClass?: string;
  class?: string;
}

export { Mark, mark, type MarkProps };
