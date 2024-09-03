import P from './P.svelte';
import { type VariantProps } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';
import { paragraph } from './theme';

type PsizeType = VariantProps<typeof paragraph>['size'];
type PweightType = VariantProps<typeof paragraph>['weight'];
type SpaceType = VariantProps<typeof paragraph>['space'];
type HeightType = VariantProps<typeof paragraph>['height'];
type AlignType = VariantProps<typeof paragraph>['align'];
type WhitespaceType = VariantProps<typeof paragraph>['whitespace'];

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children: Snippet;
  italic?: boolean;
  firstUpper?: boolean;
  whitespace?: WhitespaceType;
  size?: PsizeType;
  weight?: PweightType;
  space?: SpaceType;
  height?: HeightType;
  align?: AlignType;
  justify?: boolean;
}

export { P, paragraph, type ParagraphProps };
