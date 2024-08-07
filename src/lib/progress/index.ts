import Progressbar from './Progressbar.svelte';
import { type VariantProps, tv } from 'tailwind-variants';
import type { ProgressBarColorType } from '$lib/types';
import type { HTMLAttributes } from 'svelte/elements';
import type { EasingFunction } from 'svelte/transition';
import { progressbar } from './theme';

// type SizeType = VariantProps<typeof progressbarVariants>['size'];

interface ProgressbarProps extends HTMLAttributes<HTMLDivElement> {
  progress?: string | number;
  precision?: number;
  tweenDuration?: number;
  animate?: boolean;
  size?: string | undefined;
  labelInside?: boolean;
  labelOutside?: string | undefined;
  easing?: EasingFunction;
  color?: ProgressBarColorType;
  div2Class?: string | undefined;
  oustsideSpanClass?: string | undefined;
  oustsideProgressClass?: string | undefined;
  labeloutsidedivClass?: string | undefined;
  divClass?: string | undefined;
}

export { Progressbar, progressbar, type ProgressbarProps };
