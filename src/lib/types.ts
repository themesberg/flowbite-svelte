import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

export type BlockQuoteType = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';

export type ButtonColorType = 'alternative' | 'blue' | 'dark' | 'green' | 'light' | 'primary' | 'purple' | 'red' | 'yellow' | 'none';

export type CheckboxItem = {
  value: string;
  label?: string;
  isChecked?: boolean;
};

export type ColorVariant = 'dark' | 'red' | 'yellow' | 'green' | 'indigo' | 'purple' | 'pink' | 'blue' | 'primary' | 'none';

export type ImgType = {
  src: string;
  alt?: string;
};

export type IndicatorColorType = 'gray' | 'dark' | 'blue' | 'green' | 'red' | 'purple' | 'indigo' | 'yellow' | 'teal' | 'none';

export type IndicatorPlacementType = 'top-left' | 'top-center' | 'top-right' | 'center-left' | 'center' | 'center-right' | 'bottom-left' | 'bottom-center' | 'bottom-right' | undefined;

export type InputType = 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'reset' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' | 'search';

export type FormColorType = 'blue' | 'red' | 'green' | 'purple' | 'teal' | 'yellow' | 'orange' | 'primary' | 'secondary';

export type ModalPlacementType = 'top-left' | 'top-center' | 'top-right' | 'center-left' | 'center' | 'center-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

export type PsizeType = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';

export type PweightType = 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';

export type TableColorType = 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'indigo' | 'pink' | 'default' | 'custom';

export declare const xs = 'xs';
export declare const sm = 'sm';
export declare const md = 'md';
export declare const lg = 'lg';
export declare const xl = 'xl';
export declare type SizeType = typeof xs | typeof sm | typeof md | typeof lg | typeof xl;

export declare type FormSizeType = typeof sm | typeof md | typeof lg;

export type ReviewType = {
  name: string;
  imgSrc: string;
  imgAlt: string;
  address: string | undefined;
  reviewDate: string | undefined;
  title: string;
  rating: number;
  item1: string | undefined;
  item2: string | undefined;
  item3: string | undefined;
};

export type SelectOptionType<T> = {
  name: string | number;
  value: T;
  disabled?: boolean;
};

export type TransitionTypes = 'fade' | 'fly' | 'slide' | 'blur' | 'in:fly' | 'out:fly' | 'in:slide' | 'out:slide' | 'in:fade' | 'out:fade' | 'in:blur' | 'out:blur';

export interface ActivityType {
  title: HTMLElement | string;
  date: Date | string;
  src: string;
  alt: string;
  text?: HTMLElement | string;
}

export interface drawerTransitionParamTypes {
  amount?: number;
  delay?: number;
  duration?: number;
  easing?: (t: number) => number;
  opacity?: number;
  x?: number;
  y?: number;
}

export interface Dismissable {
  dismissable?: boolean;
}

export interface GroupTimelineType {
  title: string | HTMLElement;
  src: string;
  alt: string;
  href?: string;
  isPrivate?: boolean;
  comment?: string | HTMLElement;
}

/* eslint-disable  @typescript-eslint/no-explicit-any */
export interface ListGroupItemType {
  name?: string;
  current?: boolean;
  disabled?: boolean;
  href?: string;
  attrs?: HTMLAnchorAttributes | HTMLButtonAttributes;
  [propName: string]: any;
}

export interface LinkType {
  name: string;
  href?: string;
  rel?: string;
  active?: boolean;
}

export interface SiteType {
  name: string;
  href: string;
  img?: string;
}

export interface TransitionParamTypes {
  delay?: number;
  duration?: number;
  easing?: (t: number) => number;
  css?: (t: number, u: number) => string;
  tick?: (t: number, u: number) => void;
}

export interface ButtonClassesTypes {
  default?: string;
  border?: string;
  application?: string;
  pagination?: string;
  group?: string;
  card?: string;
  meeting?: string;
  video?: string;
  custom?: string;
}

export type ToastPositionType = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'none';
