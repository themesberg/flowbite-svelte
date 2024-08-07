import Gallery from './Gallery.svelte';
import type { Snippet } from 'svelte';
import type { HTMLImgAttributes } from 'svelte/elements';
import { gallery } from './theme';

type ImgType = {
  src?: string | undefined | null;
  alt?: string | undefined | null;
};

interface GalleryProps {
  children?: Snippet;
  items?: HTMLImgAttributes[];
  imgClass?: string | undefined;
  divClass?: string | undefined;
}

export { Gallery, gallery, type GalleryProps, type ImgType };
