import A from './A.svelte';
import type { Snippet } from 'svelte';
import type { HTMLAnchorAttributes } from 'svelte/elements';
import { anchor } from './theme';

interface AnchorProps extends HTMLAnchorAttributes {
  children: Snippet;
  class?: string | undefined | null;
}

export { A, anchor, type AnchorProps };
