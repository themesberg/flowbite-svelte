import Toast from './Toast.svelte';
import { toast } from './theme';
import type { Snippet } from 'svelte';
import type { ParamsType, TransitionFunc } from '../types';
import type { HTMLAttributes } from 'svelte/elements';
import { type VariantProps } from 'tailwind-variants';

type ColorType = VariantProps<typeof toast>['color'];
type PositionType = VariantProps<typeof toast>['position'];

interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  icon?: any;
  toastStatus?: boolean;
  dismissable?: boolean;
  color?: ColorType;
  position?: PositionType;
  baseClass?: string | undefined | null;
  iconClass?: string | undefined | null;
  contentClass?: string | undefined | null;
  align?: boolean;
  params?: ParamsType;
  transition?: TransitionFunc;
}

export { Toast, toast, type ToastProps };
