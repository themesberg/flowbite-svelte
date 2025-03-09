import type { Snippet } from "svelte";
import type { HTMLAttributes, HTMLButtonAttributes, HTMLImgAttributes } from "svelte/elements";
import type { CarouselVariants } from "./theme";
import type { TransitionConfig } from "svelte/transition";
import type { ParamsType } from "$lib/types";

export type State = {
  images: HTMLImgAttributes[];
  index: number;
  lastSlideChange: Date;
  slideDuration: number; // ms
  forward: boolean;
};

interface CarouselProps extends CarouselVariants, Omit<HTMLAttributes<HTMLDivElement>, "children" | "onchange"> {
  children?: Snippet<[number]>;
  slide?: Snippet<[number]>;
  images: HTMLImgAttributes[];
  index: number;
  slideDuration: number;
  transition?: TransitionFunc;
  duration: number;
  ariaLabel: string;
  disableSwipe: boolean;
  imgClass: string;
  onchange?: (x: HTMLImgAttributes) => {}
}

interface IndicatorsProps extends HTMLAttributes<HTMLDivElement> {
  activeClass?: string;
  inactiveClass?: string;
}

interface ControlButtonProps extends HTMLButtonAttributes {
  children?: Snippet;
  forward: boolean;
  name: string;
}

interface ThumbnailsProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  children?: Snippet<[HTMLImgAttributes, boolean, string]>;
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

export type { CarouselProps, IndicatorsProps, ControlButtonProps, ThumbnailsProps, SlideProps };
