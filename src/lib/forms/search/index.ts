import Search from './Search.svelte';
import type { Action } from 'svelte/action';
import type { Snippet } from 'svelte';
import { search } from './theme';

interface SearchProps {
  children?: Snippet;
  right?: Snippet;
  size?: 'sm' | 'md' | 'lg';
  placeholder?: string;
  value?: string | number | readonly string[] | undefined;
  show?: boolean;
  use?: Action<HTMLElement, any>;
  class?: string;
}

export { Search, search, type SearchProps };
