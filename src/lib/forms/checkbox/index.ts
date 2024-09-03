import Checkbox from './Checkbox.svelte';
import type { Snippet } from 'svelte';
// import type { FormColorType } from '../../types';
import type { HTMLInputAttributes } from 'svelte/elements';
import { checkbox } from './theme';
import { type VariantProps } from 'tailwind-variants';

type CheckboxItem = {
  value: string;
  checkboxLabel?: string;
  isChecked?: boolean;
};

type ColorType = VariantProps<typeof checkbox>['color'];
interface CheckboxProps extends HTMLInputAttributes {
  children?: Snippet;
  aria_describedby?: string;
  color?: ColorType;
  custom?: boolean;
  inline?: boolean;
  tinted?: boolean;
  rounded?: boolean;
  group?: (string | number)[];
  choices?: CheckboxItem[];
  checked?: boolean;
  classLabel?: string;
  indeterminate?: boolean;
  class?: string;
}

export { Checkbox, checkbox, type CheckboxProps, type CheckboxItem, type ColorType };
