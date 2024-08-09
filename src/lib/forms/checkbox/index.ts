import Checkbox from './Checkbox.svelte';
import type { Snippet } from 'svelte';
// import type { FormColorType } from '../../types';
import type { HTMLInputAttributes } from 'svelte/elements';
import { checkbox } from './theme';
import { type VariantProps } from 'tailwind-variants';

type ColorType = VariantProps<typeof checkbox>['color'];
interface CheckboxProps extends HTMLInputAttributes {
  children?: Snippet;
  aria_describedby?: string | undefined | null;
  color?: ColorType;
  custom?: boolean;
  inline?: boolean;
  tinted?: boolean;
  rounded?: boolean;
  group?: (string | number)[];
  checked?: boolean | undefined | null;
  spacing?: string | undefined | null;
  groupLabelClass?: string | undefined;
  indeterminate?: boolean;
  class?: string | undefined | null;
}

export { Checkbox, checkbox, type CheckboxProps };
