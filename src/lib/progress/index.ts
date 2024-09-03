import Progressbar from './Progressbar.svelte';
import type { HTMLAttributes } from 'svelte/elements';
import type { EasingFunction } from 'svelte/transition';
import { progressbar } from './theme';
import type { VariantProps } from 'tailwind-variants';

// type SizeType = VariantProps<typeof progressbarVariants>['size'];
type ColorType = VariantProps<typeof progressbar>['color'];

interface ProgressbarProps extends HTMLAttributes<HTMLDivElement> {
  progress?: string | number;
  precision?: number;
  tweenDuration?: number;
  animate?: boolean;
  size?: string;
  labelInside?: boolean;
  labelOutside?: string;
  easing?: EasingFunction;
  color?: ColorType;
  div2Class?: string;
  oustsideSpanClass?: string;
  oustsideProgressClass?: string;
  labeloutsidedivClass?: string;
  divClass?: string;
}

export { Progressbar, progressbar, type ProgressbarProps };
