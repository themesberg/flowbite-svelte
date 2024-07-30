import Gallery from "./Gallery.svelte";
import { type VariantProps, tv } from 'tailwind-variants';
import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

const galleryVariants = tv({
  slots: {
    image: 'h-auto max-w-full rounded-lg',
    div: 'grid'
  }
});

type ImgType = {
  src: string | undefined | null;
  alt?: string | undefined | null;
};

interface GalleryProps extends HTMLAttributes<HTMLDivElement> {
  children?: Snippet;
  items?: ImgType[];
  imgClass?: string | undefined;
  divClass?: string | undefined;
}

export {
  Gallery,
  galleryVariants,
  type GalleryProps
}