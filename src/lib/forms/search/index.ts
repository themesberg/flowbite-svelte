import Search from './Search.svelte';
import type { Action } from 'svelte/action';
import type { Snippet } from 'svelte';
import { search } from './theme';

interface SearchProps {
  children?: Snippet;
  right?: Snippet;
  size?: 'sm' | 'md' | 'lg';
  placeholder?: string;
  value?: any;
  show?: boolean;
  use?: Action<HTMLElement, any>;
  class?: string | undefined | null;
}

export { Search, search, type SearchProps };
