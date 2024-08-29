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
  size?: string | undefined;
  labelInside?: boolean;
  labelOutside?: string | undefined;
  easing?: EasingFunction;
  color?: ColorType;
  div2Class?: string | undefined;
  oustsideSpanClass?: string | undefined;
  oustsideProgressClass?: string | undefined;
  labeloutsidedivClass?: string | undefined;
  divClass?: string | undefined;
}

export { Progressbar, progressbar, type ProgressbarProps };
