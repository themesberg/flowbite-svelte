import Range from './Range.svelte';
import { range } from './theme'
import type { HTMLInputAttributes } from 'svelte/elements';
import type { VariantProps } from 'tailwind-variants';

type ColorType = VariantProps<typeof range>['color'];
type AppearanceType = VariantProps<typeof range>['appearance'];
type RangeType = VariantProps<typeof range>['size'];

interface RangeProps extends HTMLInputAttributes {
  value?: any;
  appearance?: AppearanceType;
  color?: ColorType;
  rangeSize?: RangeType;
  inputClass?: string | undefined | null;
}
export { Range, range, type RangeProps };
