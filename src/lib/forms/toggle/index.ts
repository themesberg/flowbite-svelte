import Toggle from './Toggle.svelte';
import type { Snippet } from 'svelte';
import type { FormColorType } from '../../types';
import type { HTMLInputAttributes } from 'svelte/elements';
import { toggle } from './theme';
import { type VariantProps } from 'tailwind-variants';

type SizeType = VariantProps<typeof toggle>['size'];

interface ToggleProps extends HTMLInputAttributes {
  children: Snippet;
  leftLabel?: Snippet;
  toggleSize?: SizeType;
  value?: string | number;
  checked?: boolean | undefined;
  spanClass?: string;
  color?: FormColorType;
  labelClass?: string;
  aria_describedby?: string;
  inputClass?: string;
}

export { Toggle, toggle, type ToggleProps };
