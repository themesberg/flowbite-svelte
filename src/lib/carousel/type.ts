import type { Component, Snippet } from "svelte";
import type { HTMLAttributes, HTMLButtonAttributes, HTMLImgAttributes } from "svelte/elements";
import type { CarouselVariants } from "./theme";
import type { TransitionConfig } from "svelte/transition";
import type { ParamsType } from "$lib/types";
import type Slide from "./Slide.svelte";

export type State = {
  images: HTMLImgAttributes[];
  index: number;
  lastSlideChange: Date;
  slideDuration: number; // ms
  forward: boolean;
};

interface CarouselProps extends CarouselVariants, Omit<HTMLAttributes<HTMLDivElement>, "children" | "onchange"> {
  children?: Snippet<[number]>;
  slide?: Snippet<[{ index: number; Slide: typeof Slide }]>;
  images: HTMLImgAttributes[];
  index?: number;
  slideDuration?: number;
  transition?: TransitionFunc;
  duration?: number;
  disableSwipe?: boolean;
  imgClass?: string;
  onchange?: (x: HTMLImgAttributes) => {};
}

interface IndicatorsProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  children?: Snippet<[{ selected: boolean; index: number }]>;
  activeClass?: string;
  inactiveClass?: string;
}

interface ControlButtonProps extends HTMLButtonAttributes {
  forward: boolean;
  name: string;
}

interface ThumbnailProps extends HTMLImgAttributes {
  selected?: boolean;
}

interface ThumbnailsProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  children?: Snippet<[{ image: HTMLImgAttributes; selected: boolean; imgClass: string; Thumbnail: Component }]>;
  images: HTMLImgAttributes[];
  index: number;
  ariaLabel: string;
  imgClass: string;
  throttleDelay: number;
}

type TransitionFunc = (node: HTMLElement, params: ParamsType) => TransitionConfig;

interface SlideProps extends HTMLImgAttributes {
  image: HTMLImgAttributes;
  transition?: TransitionFunc; // Optional transition function, overrides default slide transition
}

export type { CarouselProps, IndicatorsProps, ControlButtonProps, ThumbnailProps, ThumbnailsProps, SlideProps };
