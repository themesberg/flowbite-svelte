import Select from './Select.svelte';
import type { Snippet } from 'svelte';
import type { HTMLSelectAttributes, HTMLAttributes } from 'svelte/elements';
import { select } from './theme';

type SelectOptionType<T> = {
  name: string | number;
  value: T;
};

interface SelectProps extends Omit<HTMLSelectAttributes, 'size'> {
  children?: Snippet;
  items?: SelectOptionType<any>[];
  value?: any;
  underline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  selectClass?: string | undefined;
  underlineClass?: string | undefined;
  placeholder?: string | undefined | null;
}

interface MultiSelectProps<T> extends HTMLAttributes<HTMLDivElement> {
  children?: Snippet;
  items?: SelectOptionType<T>[];
  value?: (string | number)[];
  size?: 'sm' | 'md' | 'lg';
  dropdownClass?: string | undefined;
  placeholder?: string | undefined | null;
  change?: (event: Event) => void;
}

export { Select, select, type SelectProps, type SelectOptionType, type MultiSelectProps };
