import type { HTMLButtonAttributes, HTMLAnchorAttributes, HTMLAttributes, HTMLLiAttributes, HTMLImgAttributes, HTMLInputAttributes, HTMLLabelAttributes } from "svelte/elements";
import type { TransitionConfig, FadeParams, BlurParams, FlyParams, SlideParams, ScaleParams } from "svelte/transition";
import { type Writable } from "svelte/store";
import type { Snippet, Component } from "svelte";

// component variants
import type { AlertVariants } from "./alert/theme";
import type { BadgeVariants } from "./badge/theme";
import type { BannerVariants } from "./banner/theme";
import type { ButtonVariants, GradientButtonVariantes } from "./buttons/theme";
import type { CarouselVariants } from "./carousel/theme";
import type Slide from "./carousel/Slide.svelte";
import type { ApexOptions } from "apexcharts";
import type { DrawerVariants } from "./drawer/theme";
import type { PopperProps } from "$lib/utils/Popper.svelte";
import type { CheckboxVariants } from "./forms/checkbox/theme";
import type { FileuploadViariants } from "$lib/forms/fileupload/theme";
import type { FloatingLabelInputVaratiants } from "$lib/forms/floating-label-input/theme";
import type { HelperVariants } from "$lib/forms/helper/theme";
import type { InputVariants } from "$lib/forms/input/theme";
import type { LabelVariants } from "$lib/forms/label/theme";






// end of component variants

import { tv } from "tailwind-variants";

export interface ThemeConfig {
  slots?: Record<string, object | string>;
  variants?: Record<string, object>;
  compoundVariants?: Array<Record<string, object>>;
  defaultVariants?: Record<string, object>;
}
export interface ThemeType {
  [key: string]: ReturnType<typeof tv>;
}

export declare const xs = "xs";
export declare const sm = "sm";
export declare const md = "md";
export declare const lg = "lg";
export declare const xl = "xl";

export interface drawerTransitionParamTypes {
  amount?: number;
  delay?: number;
  duration?: number;
  easing?: (t: number) => number;
  opacity?: number;
  x?: number;
  y?: number;
}

export type FormSizeType = "sm" | "md" | "lg";

// export type drawerTransitionTypes = 'fade' | 'fly' | 'slide' | 'blur' | 'in:fly' | 'out:fly' | 'in:slide' | 'out:slide' | 'in:fade' | 'out:fade' | 'in:blur' | 'out:blur' | undefined;

// export type PsizeType = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';

// export type PweightType = 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';

// export type BlockQuoteType = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';

// export type FormColorType = 'blue' | 'red' | 'green' | 'purple' | 'teal' | 'yellow' | 'orange' | 'primary' | 'secondary';

// export type ButtonColorType = 'alternative' | 'blue' | 'dark' | 'green' | 'light' | 'primary' | 'purple' | 'red' | 'yellow' | 'none';

// export type SidebarType = {
//   activeClass: string | undefined | null;
//   nonActiveClass: string | undefined | null;
// };

// export interface ButtonClassesTypes {
//   default?: string;
//   border?: string;
//   application?: string;
//   pagination?: string;
//   group?: string;
//   card?: string;
//   meeting?: string;
//   video?: string;
//   custom?: string;
// }

export type NavbarType = {
  navStatus: boolean | undefined;
  breakPoint: "md" | "lg" | "xl" | "xxl";
  activeClass: string | undefined | null;
  nonActiveClass: string | undefined | null;
  closeNav: () => void;
};

export type ColorVariant = "gray" | "red" | "yellow" | "green" | "indigo" | "purple" | "pink" | "blue" | "primary" | "none";

// export type BottomNavVariantType = 'default' | 'border' | 'application' | 'pagination' | 'group' | 'card' | 'meeting' | 'video';

export type DeviceVariantType = "default" | "ios" | "android" | "tablet" | "laptop" | "desktop" | "smartwatch";

// export type ProgressBarColorType = 'primary' | 'blue' | 'gray' | 'red' | 'green' | 'yellow' | 'purple' | 'indigo';

// export type SpinnerColorType = 'primary' | 'blue' | 'gray' | 'green' | 'red' | 'yellow' | 'pink' | 'purple' | 'white' | 'custom';

// export type ToastPositionType = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'none';

// export type SpaceType = 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest' | undefined;

// export type ToolbarButtonType = 'dark' | 'default' | 'gray' | 'red' | 'yellow' | 'green' | 'indigo' | 'purple' | 'pink' | 'blue';

export declare type SizeType = typeof xs | typeof sm | typeof md | typeof lg | typeof xl;

export type TransitionTypes = "fade" | "fly" | "slide" | "blur" | "in:fly" | "out:fly" | "in:slide" | "out:slide" | "in:fade" | "out:fade" | "in:blur" | "out:blur";

export interface TransitionParamTypes {
  delay?: number;
  duration?: number;
  easing?: (t: number) => number;
  css?: (t: number, u: number) => string | undefined | null;
  tick?: (t: number, u: number) => void;
}

export type ParamsType = FadeParams | BlurParams | FlyParams | SlideParams | ScaleParams;

export type TransitionFunc = (node: HTMLElement, params: ParamsType) => TransitionConfig;

export type ModalPlacementType = "top-left" | "top-center" | "top-right" | "center-left" | "center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right";

/* eslint-disable  @typescript-eslint/no-explicit-any */
export interface LinkType {
  name: string;
  href?: string;
  rel?: string;
  active?: boolean;
  [propName: string]: any;
}

interface AnchorAttributes extends Omit<HTMLAnchorAttributes, "on:copy" | "oncopy" | "onclick"> {
  href: string;
  onclick?: HTMLButtonAttributes["onclick"];
}

interface ButtonAttibutes extends Omit<HTMLButtonAttributes, "on:copy" | "oncopy"> {
  href?: undefined;
}

export type AnchorButtonAttributes = AnchorAttributes | ButtonAttibutes;


// accordion
export interface AccordionCtxType {
  flush: boolean;
  activeClass: string | undefined | null;
  inactiveClass: string | undefined | null;
  selected?: Writable<object>;
  classActive?: string;
  classInactive?: string;
  multiple?: boolean;
}

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  flush?: boolean;
  multiple?: boolean;
  activeClass?: string;
  inactiveClass?: string;
  defaultClass?: string;
  classActive?: string;
  classInactive?: string;
}

export interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  header?: Snippet;
  arrowup?: Snippet;
  arrowdown?: Snippet;
  open?: boolean;
  activeClass?: string;
  inactiveClass?: string;
  transitionType?: TransitionFunc;
  transitionParams?: ParamsType;
}

// alert
export type alertColor = "primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose";

export interface AlertProps extends Omit<AlertVariants, "icon">, Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  children: Snippet;
  icon?: Snippet;
  alertStatus?: boolean;
  closeIcon?: Component;
  transition?: TransitionFunc;
  params?: ParamsType;
  onclick?: () => void;
}

// avatar
export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  children?: Snippet;
  href?: HTMLAnchorAttributes["href"];
  target?: HTMLAnchorAttributes["target"];
  src?: string;
  cornerStyle?: "rounded" | "circular";
  stacked?: boolean;
  dot?: object | undefined;
  alt?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  onclick?: () => void;
  border?: boolean;
}

// badge
export interface BadgeProps extends BadgeVariants, Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  children: Snippet;
  icon?: Snippet;
  badgeStatus?: boolean;
  large?: boolean;
  dismissable?: boolean;
  href?: HTMLAnchorAttributes["href"];
  target?: HTMLAnchorAttributes["target"];
  transition?: TransitionFunc;
  params?: ParamsType;
  onclose?: (ev: Event) => void;
  aClass?: string;
}

// banner
export interface BannerProps extends BannerVariants, HTMLAttributes<HTMLDivElement> {
  header?: Snippet;
  open?: boolean;
  dismissable?: boolean;
  color?: BannerVariants["color"];
  innerClass?: string;
  transition?: TransitionFunc;
  params?: object;
}

// bottom-navigation
export type BottomNavVariantType = "border" | "application" | "group" | "default" | "pagination" | "card" | "meeting" | "video" | undefined;

export type PositionType = "static" | "fixed" | "absolute" | "relative" | "sticky" | undefined;

export type BottomNavContextType = {
  activeClass: string | undefined | null;
};

export type AppBtnPositionType = "middle" | "left" | "right" | undefined;

export interface BottomNavProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  header?: Snippet;
  activeUrl?: string;
  position?: PositionType;
  navType?: BottomNavVariantType;
  outerClass?: string;
  innerClass?: string;
  activeClass?: string;
}

export interface BaseBottomNavItemProps {
  children: Snippet;
  btnName?: string;
  appBtnPosition?: AppBtnPositionType;
  target?: string;
  activeClass?: string;
  btnClass?: string;
  spanClass?: string;
}

export type BottomNavItemProps = BaseBottomNavItemProps & (({ href: string } & HTMLAnchorAttributes) | ({ href?: never } & HTMLButtonAttributes));

export interface BottomNavHeaderProps {
  children: Snippet;
  outerClass?: string;
  innerClass?: string;
}

export interface BottomNavHeaderItemProps extends HTMLButtonAttributes {
  itemName: string;
  active?: boolean;
}


// breadcrumb
export interface BreadcrumbProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  solid?: boolean;
  olClass?: string;
  ariaLabel?: string;
}

export interface BreadcrumbItemProps extends HTMLLiAttributes {
  children: Snippet;
  icon?: Snippet;
  home?: boolean;
  href?: string;
  linkClass?: string;
  spanClass?: string;
  homeClass?: string;
}

// buttongroup
export interface ButtonGroupProps {
  children: Snippet;
  size?: ButtonGroupSizeType;
  class?: string;
}

export type ButtonGroupSizeType = "sm" | "md" | "lg" | undefined;

// button
export type HTMLButtonOrAnchorAttributes = Omit<HTMLButtonAttributes & HTMLAnchorAttributes, "color">;

export type ButtonProps = ButtonVariants &
  AnchorButtonAttributes & {
    tag?: string;
    disabled?: boolean;
    outline?: boolean;
    shadow?: boolean;
  };

export interface GradientButtonProps extends GradientButtonVariantes, HTMLButtonOrAnchorAttributes {
  tag?: string;
  disabled?: boolean;
  href?: string;
}

// card
export type CardSizeType = "sm" | "md" | "lg" | "xl" | "xs" | undefined;

export type PaddingType = "sm" | "lg" | "md" | "xl" | "xs" | "none" | undefined;

export type ShadowType = "sm" | "normal" | "lg" | "md" | "xl" | "2xl" | "inner" | undefined;

export type ColorType = "gray" | "primary" | "secondary" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | undefined;

export interface BaseCardProps {
  children: Snippet;
  horizontal?: boolean;
  color?: ColorType;
  target?: string;
  shadow?: ShadowType;
  reverse?: boolean;
  img?: string;
  padding?: PaddingType;
  size?: CardSizeType;
  class?: string;
  // onclick?: () => void;
  imgClass?: string;
  contentClass?: string;
}

export type CardProps = BaseCardProps & (({ href: string } & HTMLAnchorAttributes) | ({ href?: never } & HTMLAttributes<HTMLDivElement>));

// carousel



export type State = {
  images: HTMLImgAttributes[];
  index: number;
  lastSlideChange: Date;
  slideDuration: number; // ms
  forward: boolean;
};

export interface CarouselProps extends CarouselVariants, Omit<HTMLAttributes<HTMLDivElement>, "children" | "onchange"> {
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

export interface IndicatorsProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  children?: Snippet<[{ selected: boolean; index: number }]>;
  activeClass?: string;
  inactiveClass?: string;
}

export interface ControlButtonProps extends HTMLButtonAttributes {
  forward: boolean;
  name: string;
}

export interface ThumbnailProps extends HTMLImgAttributes {
  selected?: boolean;
}

export interface ThumbnailsProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  children?: Snippet<[{ image: HTMLImgAttributes; selected: boolean; imgClass: string; Thumbnail: Component }]>;
  images: HTMLImgAttributes[];
  index: number;
  ariaLabel: string;
  imgClass: string;
  throttleDelay: number;
}

export interface SlideProps extends HTMLImgAttributes {
  image: HTMLImgAttributes;
  transition?: TransitionFunc; // Optional transition function, overrides default slide transition
}

// chart
export interface ChartProps {
  options: ApexOptions;
  class?: string;
}

// darkmode
export interface DarkmodeProps extends HTMLButtonAttributes {
  class?: string;
  lightIcon?: Snippet;
  darkIcon?: Snippet;
  size?: "sm" | "md" | "lg";
  ariaLabel?: string;
}

// datepicker
export type DateOrRange = Date | { from?: Date; to?: Date };

export interface DatepickerProps extends Omit<HTMLAttributes<HTMLDivElement>, "onselect"> {
  value?: Date;
  defaultDate?: Date | null;
  range: boolean;
  rangeFrom?: Date;
  rangeTo?: Date;
  locale: string;
  firstDayOfWeek: number;
  dateFormat: Intl.DateTimeFormatOptions;
  placeholder: string;
  disabled: boolean;
  required: boolean;
  inputClass: string;
  color: ButtonProps["color"];
  inline: boolean;
  autohide: boolean;
  showActionButtons: boolean;
  title: string;
  onselect?: (x: DateOrRange) => void;
  onclear?: () => void;
  onapply?: (x: DateOrRange) => void;
}

// device-mockups
export interface DeviceMockupProps {
  children: Snippet;
  device?: DeviceVariantType;
}

export interface MockupBaseProps extends HTMLAttributes<HTMLElement> {
  children?: Snippet;
  divClass?: string;
  div2Class?: string;
  div3Class?: string;
  div4Class?: string;
}

export interface AndroidProps {
  children?: Snippet;
  divClass?: string;
  div2Class?: string;
  div3Class?: string;
  div4Class?: string;
  div5Class?: string;
  div6Class?: string;
  div7Class?: string;
}

export interface DefaultMockupProps {
  children?: Snippet;
  divClass?: string;
  div2Class?: string;
  div3Class?: string;
  div4Class?: string;
  div5Class?: string;
  div6Class?: string;
}

export interface IosProps {
  children?: Snippet;
  divClass?: string;
  div2Class?: string;
  div3Class?: string;
  div4Class?: string;
  div5Class?: string;
  div6Class?: string;
}

export interface SmartwatchProps {
  children?: Snippet;
  divClass?: string;
  div2Class?: string;
  div3Class?: string;
  div4Class?: string;
  div5Class?: string;
  div6Class?: string;
}

export interface TabletProps {
  children?: Snippet;
  divClass?: string;
  div2Class?: string;
  div3Class?: string;
  div4Class?: string;
  div5Class?: string;
  div6Class?: string;
}

// drawer
export interface DrawerProps extends DrawerVariants, HTMLAttributes<HTMLDivElement> {
  hidden: boolean;
  closeDrawer?: () => void;
  activateClickOutside?: boolean;
  backdrop?: boolean;
  backdropClass?: string;
  transitionParams?: ParamsType;
  transitionType?: TransitionFunc;
}

export interface DrawerheadProps extends HTMLButtonAttributes {
  closeIcon?: Snippet;
  buttonClass?: string;
  svgClass?: string;
}

// dropdown
export interface DropdownProps extends PopperProps {
  simple?: boolean;
  divClass?: string;
  footerClass?: string;
  headerClass?: string;
  ulClass?: string;
  backdropClass?: string;
  activeUrl?: string;
}

export interface DropdownDividerProps extends HTMLAttributes<HTMLDivElement> {}

export interface DropdownHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
}

export interface DropdownItemProps extends HTMLAnchorAttributes {
  children: Snippet;
  aClass?: string;
  href?: string;
  activeClass?: string;
  liClass?: string;
}

export interface DropdownGroupProps extends HTMLAttributes<HTMLUListElement> {
  children: Snippet;
}

// footer
export type FooterType = "default" | "sticky" | "sitemap" | "socialmedia" | "logo" | undefined;

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  footerType?: FooterType;
  class?: string;
}

export interface FooterBrandProps extends HTMLAnchorAttributes {
  children?: Snippet;
  aClass?: string;
  spanClass?: string;
  imgClass?: string;
  href?: string;
  src?: string;
  alt?: string;
  name?: string;
}

export interface FooterCopyrightProps extends HTMLAnchorAttributes {
  spanClass?: string;
  aClass?: string;
  href?: string;
  by?: string;
  copyrightMessage?: string;
  year?: number | undefined;
}

export interface FooterIconProps extends HTMLAnchorAttributes {
  children: Snippet;
  href?: string;
  ariaLabel?: string;
  class?: string;
}

export interface FooterLinkGroupProps extends HTMLAttributes<HTMLUListElement> {
  children: Snippet;
  class?: string;
}

export interface FooterLinkProps extends HTMLAnchorAttributes {
  children: Snippet;
  liClass?: string;
  aClass?: string;
  href?: string;
}

// forms
// checkbox
export interface CheckboxItem {
  value: string;
  label?: string;
  checked?: boolean | null;
  [key: string]: any;
}

export interface CheckboxProps extends Omit<HTMLInputAttributes, "children"> {
  children?: Snippet<[CheckboxItem]>;
  color?: CheckboxVariants["color"];
  custom?: boolean;
  inline?: boolean;
  tinted?: boolean;
  rounded?: boolean;
  group?: (string | number)[];
  choices?: CheckboxItem[];
  indeterminate?: boolean;
}

// checkbox-button
export interface CheckboxButtonProps extends Omit<HTMLInputAttributes, "size"> {
  group?: (string | number)[];
  value?: string | number;
  checked?: boolean | undefined;
  inline?: boolean;
  pill?: boolean;
  outline?: boolean;
  size?: ButtonProps["size"];
  color?: ButtonProps["color"];
  shadow?: boolean;
}

// dropzone
export interface DropzoneProps extends HTMLInputAttributes {
  children: Snippet;
  files?: FileList | null;
}

// fileupload
export interface FileuploadProps extends Omit<HTMLInputAttributes, "size"> {
  files?: FileList;
  size?: FileuploadViariants["size"];
  color?: InputProps<never>["color"];
  clearable?: boolean;
}

// floatinglabel-input
export interface FloatingLabelInputProps extends Omit<HTMLInputAttributes, "size"> {
  children: Snippet;
  id?: string;
  value?: string | number | readonly string[] | undefined;
  "aria-describedby"?: string;
  variant?: FloatingLabelInputVaratiants["variant"];
  size?: FloatingLabelInputVaratiants["size"];
  color?: FloatingLabelInputVaratiants["color"];
  inputClass?: string;
  labelClass?: string;
}

// helper
export interface HelperProps extends HelperVariants, Omit<HTMLAttributes<HTMLParagraphElement>, "color"> {}

// input
export type InputValue = string | number | string[] | undefined;

export interface InputProps<T extends InputValue = string> extends Omit<HTMLInputAttributes, "size" | "children" | "value"> {
  children?: Snippet<[{ class: string } & Omit<InputProps<T>, "children" | "left" | "right" | "size">]>;
  left?: Snippet;
  right?: Snippet;
  size?: InputVariants["size"];
  value?: T;
  clearable?: boolean;
  color?: InputVariants["color"];
  classLeft?: string;
  classRight?: string;
  divClass?: string;
}

// input-addon
export interface InputAddonProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  class?: string;
  size?: "sm" | "md" | "lg" | undefined;
}

// label
export interface LabelProps extends HTMLLabelAttributes {
  children: Snippet;
  color?: LabelVariants["color"];
  show?: boolean;
}






