import Range from './Range.svelte';
import { range } from './theme';
import type { HTMLInputAttributes } from 'svelte/elements';
import type { VariantProps } from 'tailwind-variants';

type RangeColorType = VariantProps<typeof range>['color'];
// type RangeColorType = 'gray' | 'red' | 'blue' | 'indigo' | 'violet' | 'purple' | 'fuchsia' | 'pink' | 'rose';
type AppearanceType = VariantProps<typeof range>['appearance'];
// type RangeType = VariantProps<typeof range>['size'];
type RangeType = 'sm' | 'md' | 'lg';

interface RangeProps extends HTMLInputAttributes {
  value?: number | string;
  appearance?: AppearanceType;
  color?: RangeColorType;
  rangeSize?: RangeType;
  inputClass?: string;
}
export { Range, range, type RangeProps, type RangeColorType };
