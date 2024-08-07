import type { HTMLAttributes } from 'svelte/elements';
import { type VariantProps, tv } from 'tailwind-variants';
import CardPlaceholder from './CardPlaceholder.svelte';
import ImagePlaceholder from './ImagePlaceholder.svelte';
import ListPlaceholder from './ListPlaceholder.svelte';
import Skeleton from './Skeleton.svelte';
import TestimonialPlaceholder from './TestimonialPlaceholder.svelte';
import TextPlaceholder from './TextPlaceholder.svelte';
import VideoPlaceholder from './VideoPlaceholder.svelte';
import WidgetPlaceholder from './WidgetPlaceholder.svelte';
import {
  cardPlaceholder,
  imagePlaceholder,
  listPlaceholder,
  skeleton,
  testimonialPlaceholder,
  textPlaceholder,
  videoPlaceholder,
  widgetPlaceholder
} from './theme';

type CardSizeType = VariantProps<typeof cardPlaceholder>['size'];
interface CardPlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  size?: CardSizeType;
  class?: string | undefined;
}

type SizeImageType = VariantProps<typeof imagePlaceholder>['size'];
type RoundedType = VariantProps<typeof imagePlaceholder>['rounded'];

interface ImagePlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  size?: SizeImageType;
  rounded?: RoundedType;
  class?: string;
}

type SizeListType = VariantProps<typeof imagePlaceholder>['size'];
type RoundedListType = VariantProps<typeof imagePlaceholder>['rounded'];

interface ListPlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  itemNumber?: number;
  size?: SizeListType;
  rounded?: RoundedListType;
  class?: string;
}

type SizeSkeletonType = VariantProps<typeof skeleton>['size'];

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  size?: SizeSkeletonType;
  class?: string | undefined;
}

interface TestimonialPlaceholderProps extends HTMLAttributes<HTMLDivElement> {}

type SizeTextType = VariantProps<typeof textPlaceholder>['size'];

interface TextPlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  size?: SizeTextType;
}

type SizeVideoType = VariantProps<typeof textPlaceholder>['size'];

interface VideoPlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  size?: SizeVideoType;
}

interface WidgetPlaceholderProps extends HTMLAttributes<HTMLDivElement> {}

export {
  CardPlaceholder,
  ImagePlaceholder,
  ListPlaceholder,
  Skeleton,
  TestimonialPlaceholder,
  TextPlaceholder,
  VideoPlaceholder,
  WidgetPlaceholder,
  cardPlaceholder,
  imagePlaceholder,
  listPlaceholder,
  skeleton,
  testimonialPlaceholder,
  textPlaceholder,
  videoPlaceholder,
  widgetPlaceholder,
  type CardPlaceholderProps,
  type ImagePlaceholderProps,
  type ListPlaceholderProps,
  type SkeletonProps,
  type TestimonialPlaceholderProps,
  type TextPlaceholderProps,
  type VideoPlaceholderProps,
  type SizeVideoType,
  type WidgetPlaceholderProps
};
