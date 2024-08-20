import Card from './Card.svelte';
import { type VariantProps } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import { card } from './theme';

// type CardSizeType = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type CardSizeType = VariantProps<typeof card>['size'];
type PaddingType = VariantProps<typeof card>['padding'];
type ShadowType = VariantProps<typeof card>['shadow'];

type ImgType = {
  src: string | undefined | null;
  alt: string | undefined | null;
};

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  href?: string | undefined | null;
  horizontal?: boolean;
  target?: string | undefined | null;
  shadow?: ShadowType;
  reverse?: boolean;
  img?: ImgType;
  padding?: PaddingType;
  size?: CardSizeType;
  class?: string | undefined;
  onclick?: () => void;
}

export { Card, card, type CardProps };
