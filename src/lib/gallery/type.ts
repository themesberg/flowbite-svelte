import type { Snippet } from "svelte";
import type { HTMLAttributes, HTMLImgAttributes } from "svelte/elements";

type ImgType = {
  src?: string;
  alt?: string;
};

interface GalleryProps extends HTMLAttributes<HTMLDivElement> {
  children?: Snippet;
  figure?: Snippet<[item: ImgType]>;
  items?: HTMLImgAttributes[];
  imgClass?: string;
}

export { type GalleryProps, type ImgType };
