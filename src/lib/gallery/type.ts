import type { Snippet } from "svelte";
import type { HTMLImgAttributes } from "svelte/elements";

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

export { type GalleryProps, type ImgType };
