import Search from './Search.svelte';
import type { Action } from 'svelte/action';
import type { Snippet } from 'svelte';
import { search } from './theme';

interface SearchProps<T> {
  children?: Snippet;
  right?: Snippet;
  size?: 'sm' | 'md' | 'lg';
  placeholder?: string;
  value?: T;
  show?: boolean;
  use?: Action<HTMLElement, any>;
  class?: string;
}

export { Search, search, type SearchProps };
