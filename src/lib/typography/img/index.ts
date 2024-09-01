import Img from './Img.svelte';
import { type VariantProps } from 'tailwind-variants';
import type { HTMLImgAttributes } from 'svelte/elements';
import { img } from './theme';

type SizeType = VariantProps<typeof img>['size'];
type AlignmentType = VariantProps<typeof img>['alignment'];
type EffectType = VariantProps<typeof img>['effect'];
type ShadowType = VariantProps<typeof img>['shadow'];
type RoundedType = VariantProps<typeof img>['rounded'];

interface ImgProps extends HTMLImgAttributes {
  size?: SizeType;
  alignment?: AlignmentType;
  effect?: EffectType;
  shadow?: ShadowType;
  rounded?: RoundedType;
  caption?: string | undefined | null;
  imgClass?: string | undefined | null;
  figClass?: string | undefined | null;
  captionClass?: string | undefined | null;
  class?: string | undefined | null;
  href?: string;
}

export { Img, img, type ImgProps };
