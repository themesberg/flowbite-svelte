import Search from './Search.svelte';
import type { Action } from 'svelte/action';
import type { Snippet } from 'svelte';
import { search } from './theme';
import type { HTMLInputAttributes } from 'svelte/elements';

interface SearchProps<T> extends Omit<HTMLInputAttributes, 'size'> {
  children?: Snippet;
  right?: Snippet;
  inputClass?: string;
  size?: 'sm' | 'md' | 'lg';
  placeholder?: string;
  value?: T;
  show?: boolean;
  use?: Action<HTMLElement, any>;
  class?: string;
}

export { Search, search, type SearchProps };
