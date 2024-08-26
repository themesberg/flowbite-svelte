import Indicator from './Indicator.svelte';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import { type VariantProps } from 'tailwind-variants';
import { indicator } from './theme';

type ColorType = VariantProps<typeof indicator>['color'];
type SizeType = VariantProps<typeof indicator>['size'];
type PlacementType = VariantProps<typeof indicator>['placement'];

interface IndicatorProps extends HTMLAttributes<HTMLDivElement> {
  children?: Snippet;
  color?: ColorType;
  cornerStyle?: 'rounded' | 'circular';
  size?: SizeType;
  border?: boolean;
  placement?: PlacementType | undefined;
  class?: string | undefined;
  offset?: boolean;
}

export { Indicator, indicator, type IndicatorProps };
