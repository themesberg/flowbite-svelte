import type { HTMLAttributes } from "svelte/elements";
import type { CardPlaceholderVariants, ImagePlaceholderVariants, ListPlaceholderVariants, SkeletonVariants, TextPlaceholderVariants, VideoPlaceholderVariants } from "./theme";

interface CardPlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  size?: CardPlaceholderVariants["size"];
}

interface ImagePlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  size?: ImagePlaceholderVariants["size"];
  rounded?: ImagePlaceholderVariants["rounded"];
}

interface ListPlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  itemNumber?: number;
  size?: ListPlaceholderVariants["size"];
  rounded?: ListPlaceholderVariants["rounded"];
}

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  size?: SkeletonVariants["size"];
}

interface TextPlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  size?: TextPlaceholderVariants["size"];
}

interface VideoPlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  size?: VideoPlaceholderVariants["size"];
}

export type { CardPlaceholderProps, ImagePlaceholderProps, ListPlaceholderProps, SkeletonProps, TextPlaceholderProps, VideoPlaceholderProps };
