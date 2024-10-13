import type { HTMLAttributes } from "svelte/elements";
import CardPlaceholder from "./CardPlaceholder.svelte";
import ImagePlaceholder from "./ImagePlaceholder.svelte";
import ListPlaceholder from "./ListPlaceholder.svelte";
import Skeleton from "./Skeleton.svelte";
import TestimonialPlaceholder from "./TestimonialPlaceholder.svelte";
import TextPlaceholder from "./TextPlaceholder.svelte";
import VideoPlaceholder from "./VideoPlaceholder.svelte";
import WidgetPlaceholder from "./WidgetPlaceholder.svelte";
import { cardPlaceholder, imagePlaceholder, listPlaceholder, skeleton, testimonialPlaceholder, textPlaceholder, videoPlaceholder, widgetPlaceholder } from "./theme";

type CardSizeType = "sm" | "md" | "lg" | "xl" | "2xl" | undefined;
interface CardPlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  size?: CardSizeType;
  class?: string;
}

type SizeImageType = "sm" | "md" | "lg" | undefined;
type RoundedType = "sm" | "md" | "lg" | "none" | "full" | undefined;

interface ImagePlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  size?: SizeImageType;
  rounded?: RoundedType;
  class?: string;
}

type SizeListType = "sm" | "md" | "lg" | undefined;
type RoundedListType = "sm" | "md" | "lg" | "none" | "full" | undefined;

interface ListPlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  itemNumber?: number;
  size?: SizeListType;
  rounded?: RoundedListType;
  class?: string;
}

type SizeSkeletonType = "sm" | "md" | "lg" | "xl" | "2xl" | undefined;

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  size?: SizeSkeletonType;
  class?: string;
}

type SizeTextType = "sm" | "md" | "lg" | "xl" | "2xl" | undefined;

interface TextPlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  size?: SizeTextType;
}

type SizeVideoType = "sm" | "md" | "lg" | "xl" | "2xl" | undefined;

interface VideoPlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  size?: SizeVideoType;
}

export { CardPlaceholder, ImagePlaceholder, ListPlaceholder, Skeleton, TestimonialPlaceholder, TextPlaceholder, VideoPlaceholder, WidgetPlaceholder, cardPlaceholder, imagePlaceholder, listPlaceholder, skeleton, testimonialPlaceholder, textPlaceholder, videoPlaceholder, widgetPlaceholder, type CardPlaceholderProps, type ImagePlaceholderProps, type ListPlaceholderProps, type SkeletonProps, type TextPlaceholderProps, type VideoPlaceholderProps, type SizeVideoType };
