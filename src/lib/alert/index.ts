import { type VariantProps } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import Alert from './Alert.svelte';
import type { ParamsType, TransitionFunc } from '../types';
import type { HTMLAttributes } from 'svelte/elements';
import { alert } from './theme';

type alertColor = VariantProps<typeof alert>['color'];

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  icon?: Snippet;
  alertStatus?: boolean;
  closeIcon?: boolean;
  color?: alertColor;
  border?: boolean;
  rounded?: boolean;
  dismissable?: boolean;
  transition?: TransitionFunc;
  params?: ParamsType;
  onclick?: () => void;
}

export { type alertColor, type AlertProps, Alert, alert };
