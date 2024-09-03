import Gallery from './Gallery.svelte';
import type { Snippet } from 'svelte';
import type { HTMLImgAttributes } from 'svelte/elements';
import { gallery } from './theme';

type ImgType = {
  src?: string;
  alt?: string;
};

interface GalleryProps {
  children?: Snippet;
  items?: HTMLImgAttributes[];
  imgClass?: string;
  divClass?: string;
}

export { Gallery, gallery, type GalleryProps, type ImgType };
