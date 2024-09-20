import Radio from './Radio.svelte';
import type { Snippet } from 'svelte';
import type { HTMLInputAttributes } from 'svelte/elements';
import type { VariantProps } from 'tailwind-variants';
import { radio } from './theme';

type ColorType = VariantProps<typeof radio>['color'];
interface RadioProps<T> extends HTMLInputAttributes {
  children: Snippet;
  aria_describedby?: string;
  color?: ColorType;
  group?: T;
  value?: T;
  inputClass?: string;
  labelClass?: string;
}

export { Radio, radio, type RadioProps };
