import { type VariantProps } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { ParamsType, TransitionFunc } from '../types';
import type { HTMLAttributes } from 'svelte/elements';
import Badge from './Badge.svelte';
import { badge } from './theme';

type badgeColor = VariantProps<typeof badge>['color'];

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  icon?: Snippet;
  badgeStatus?: boolean;
  color?: badgeColor;
  large?: boolean;
  dismissable?: boolean;
  border?: boolean;
  href?: string;
  rounded?: boolean;
  transition?: TransitionFunc;
  params?: ParamsType;
  onclick?: () => void;
  aClass?: string;
}

export { Badge, badge, type BadgeProps, type badgeColor };
