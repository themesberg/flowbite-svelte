import type { HTMLImgAttributes } from "svelte/elements";
import type { Picture } from "vite-imagetools";
import type { ImgVariants } from "./theme";

type EnhancedImgAttributes = Omit<HTMLImgAttributes, "src"> & { src: string | Picture };

interface ImgProps extends HTMLImgAttributes {
  size?: ImgVariants["size"];
  effect?: ImgVariants["effect"];
  caption?: string;
  figClass?: string;
  captionClass?: string;
  href?: HTMLAnchorElement["href"];
}

interface EnhandedImgProps extends EnhancedImgAttributes {
  size?: ImgVariants["size"];
  multiple?: boolean;
  transform?: string;
  effect?: ImgVariants["effect"];
  caption?: string;
  figClass?: string;
  captionClass?: string;
  href?: HTMLAnchorElement["href"];
}

export { type ImgProps, type EnhandedImgProps };
