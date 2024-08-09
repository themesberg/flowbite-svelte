import Toggle from './Toggle.svelte';
import type { Snippet } from 'svelte';
import type { FormColorType } from '../../types';
import type { HTMLInputAttributes } from 'svelte/elements';
import { toggle } from './theme';
import { type VariantProps } from 'tailwind-variants';

type SizeType = VariantProps<typeof toggle>['size'];
type ColorType = VariantProps<typeof toggle>['color'];

interface ToggleProps extends HTMLInputAttributes {
  children: Snippet;
  toggleSize?: SizeType;
  value?: string | number;
  checked?: boolean | undefined;
  spanClass?: string | undefined | null;
  color?: FormColorType;
  labelClass?: string | undefined;
  aria_describedby?: string | undefined | null;
  inputClass?: string | undefined;
}

export { Toggle, toggle, type ToggleProps };
