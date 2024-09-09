import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import Tooltip from './Tooltip.svelte'
import { tooltip } from './theme'
import { type VariantProps } from 'tailwind-variants';

type TooltipColorType = VariantProps<typeof tooltip>['color'];
interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  triggeredBy: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  color?: TooltipColorType;
  arrow?: boolean;
  offset?: number;
  reference?: string;
}

export { Tooltip, tooltip, type TooltipProps}