import Span from './Span.svelte';
import { type VariantProps, tv } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import { span } from './theme';

type DecorationType = VariantProps<typeof span>['decoration'];
type GradientType = VariantProps<typeof span>['gradient'];
type HighlightType = VariantProps<typeof span>['highlight'];
type DecorationColorType = VariantProps<typeof span>['decorationColor'];
type DecorationThicknessType = VariantProps<typeof span>['decorationThickness'];

interface SpanProps extends HTMLAttributes<HTMLSpanElement> {
  children: Snippet;
  italic?: boolean;
  underline?: boolean;
  linethrough?: boolean;
  uppercase?: boolean;
  gradient?: GradientType;
  highlight?: HighlightType;
  class?: string | undefined;
  decoration?: DecorationType;
  decorationThickness?: DecorationThicknessType;
  decorationColor?: DecorationColorType;
}

export { Span, span, type SpanProps };
