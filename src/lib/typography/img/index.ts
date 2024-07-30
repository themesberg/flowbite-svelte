import Img from './Img.svelte';
import { type VariantProps, tv } from 'tailwind-variants';
import type { HTMLImgAttributes } from 'svelte/elements';

const imgVariants = tv({
  base: 'max-w-full h-auto'
});

const figureVariants = tv({
  base: 'max-w-lg'
});

const figcaptionVariants = tv({
  base: 'mt-2 text-sm text-center text-gray-500 dark:text-gray-400'
});

interface ImgProps extends HTMLImgAttributes {
  caption?: string | undefined | null;
  imgClass?: string | undefined | null;
  figClass?: string | undefined | null;
  captionClass?: string | undefined | null;
  class?: string | undefined | null;
}

export { Img, imgVariants, figureVariants, figcaptionVariants, type ImgProps };
