import Card from './Card.svelte';
import { type VariantProps } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import { card } from './theme';

// type CardSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type CardSizeType = VariantProps<typeof card>['size'];
type PaddingType = VariantProps<typeof card>['padding'];
type ShadowType = VariantProps<typeof card>['shadow'];
type ColorType = VariantProps<typeof card>['color'];

type ImgType = {
  src: string | undefined | null;
  alt: string | undefined | null;
};

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  href?: string;
  horizontal?: boolean;
  color?: ColorType;
  target?: string;
  shadow?: ShadowType;
  reverse?: boolean;
  img?: ImgType;
  padding?: PaddingType;
  size?: CardSizeType;
  class?: string;
  onclick?: () => void;
  imgClass?: string;
  contentClass?: string;
}

export { Card, card, type CardProps };
