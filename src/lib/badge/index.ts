import { type VariantProps } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import { type TransitionConfig } from 'svelte/transition';
import type { HTMLAttributes } from 'svelte/elements';
import Badge from './Badge.svelte'
import { badge } from './theme'

type badgeColor = VariantProps<typeof badge>['color'];
type TransitionFunc = (node: HTMLElement, params: any) => TransitionConfig;

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  icon?: Snippet;
  badgeStatus?: boolean;
  color?: badgeColor;
  large?: boolean;
  dismissable?: boolean;
  border?: boolean;
  href?: string | undefined | null;
  rounded?: boolean;
  transition?: TransitionFunc;
  params?: any;
  onclick?: () => void;
}

export { Badge, type BadgeProps, type badgeColor };