import { type VariantProps } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import Alert from './Alert.svelte';
import { type TransitionConfig } from 'svelte/transition';
import type { HTMLAttributes } from 'svelte/elements';
import { alert } from './theme'

type alertColor = VariantProps<typeof alert>['color'];
type TransitionFunc = (node: HTMLElement, params: any) => TransitionConfig;

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  icon?: Snippet;
  alertStatus?: boolean;
  closeIcon?: any;
  color?: alertColor;
  border?: boolean;
  rounded?: boolean;
  dismissable?: boolean;
  transition?: TransitionFunc;
  params?: any;
  onclick?: () => void;
}

export { type alertColor, type AlertProps, Alert };
