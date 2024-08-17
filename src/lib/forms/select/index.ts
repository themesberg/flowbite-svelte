import Select from './Select.svelte';
import type { Snippet } from 'svelte';
import type { HTMLSelectAttributes } from 'svelte/elements';
import { select } from './theme';

type SelectOptionType<T> = {
  name: string | number;
  value: T;
};

interface SelectProps extends Omit<HTMLSelectAttributes, 'size'> {
  children?: Snippet;
  items: SelectOptionType<any>[];
  value?: any;
  underline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  selectClass?: string | undefined;
  underlineClass?: string | undefined;
  placeholder?: string | undefined | null;
}

export { Select, select, type SelectProps, type SelectOptionType };
