import Toast from './Toast.svelte';
import { toast } from './theme';
import type { Snippet } from 'svelte';
import type { TransitionConfig } from 'svelte/transition';
import type { ParamsType } from '../types';
import type { HTMLAttributes } from 'svelte/elements';
import { type VariantProps } from 'tailwind-variants';

type TransitionFunc = (node: HTMLElement, params: any) => TransitionConfig;
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
  transition?: TransitionFunc;
  params?: ParamsType;
}

export { Toast, toast, type ToastProps };
