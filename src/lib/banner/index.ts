import { type VariantProps } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { TransitionFunc } from '../types';
import type { HTMLAttributes } from 'svelte/elements';
import Banner from './Banner.svelte';
import { banner } from './theme';

type ColorVariants = VariantProps<typeof banner>['color'];
type TypeVariants = VariantProps<typeof banner>['bannerType'];
type PositionVariants = VariantProps<typeof banner>['position'];

interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  header?: Snippet;
  bannerStatus?: boolean;
  position?: PositionVariants;
  dismissable?: boolean;
  color?: ColorVariants;
  bannerType?: TypeVariants;
  divClass?: string;
  innerClass?: string;
  transition?: TransitionFunc;
  params?: object;
}

export { Banner, banner, type BannerProps };
