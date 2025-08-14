import type { fade, fly, scale, slide } from "svelte/transition";
import type { Coords, Middleware, Placement, Strategy } from "@floating-ui/dom";
import type { Component, Snippet } from "svelte";
import type { ClassValue, HTMLAnchorAttributes, HTMLAttributes, HTMLBlockquoteAttributes, HTMLButtonAttributes, HTMLDialogAttributes, HTMLImgAttributes, HTMLInputAttributes, HTMLLabelAttributes, HTMLLiAttributes, HTMLOlAttributes, HTMLSelectAttributes, HTMLSourceAttributes, HTMLTableAttributes, HTMLTdAttributes, HTMLTextareaAttributes, HTMLThAttributes, HTMLTrackAttributes, HTMLVideoAttributes, SVGAttributes, FullAutoFill } from "svelte/elements";
import { type Writable } from "svelte/store";
import type { BlurParams, EasingFunction, FadeParams, FlyParams, ScaleParams, SlideParams, TransitionConfig } from "svelte/transition";
import { type VariantProps } from "tailwind-variants";
import type { Day } from "date-fns";

// component variants
import type { AlertVariants } from "$lib/alert/theme";
import type { BadgeVariants } from "$lib/badge/theme";
import type { BannerVariants } from "$lib/banner/theme";
import type { ButtonVariants, GradientButtonVariantes, gradientButton } from "$lib/buttons/theme";
import type { CardVariants } from "$lib/card/theme";
import type Slide from "$lib/carousel/Slide.svelte";
import type { CarouselVariants, SlideVariants } from "$lib/carousel/theme";
import type { DrawerVariants, DrawerheadVariants } from "$lib/drawer/theme";
import type { DropdownItemVariants } from "$lib/dropdown/theme";
import type { DatepickerVariants } from "$lib/datepicker/theme";
import type { FooterCopyrightVariants, FooterLinkVariants } from "$lib/footer/theme";
import type { GalleryVariants } from "$lib/gallery/theme";
import type { IndicatorVariants } from "$lib/indicator/theme";
import type { ListgroupItemVariants, ListgroupVariants } from "$lib/list-group/theme";
import type { MegaMenuVariants } from "$lib/mega-menu/theme";
import type { ModalVariants } from "$lib/modal/theme";
import type { NavbarUlVariants, NavbarHamburgerVariants } from "$lib/navbar/theme";
import type { PaginationNavVariants } from "$lib/pagination/theme";
import type { PopoverVariants } from "$lib/popover/theme";
import type { SidebarVariants, SidebarCtaVariants, SidebarBrandVariants, SidebarDropdownWrapperVariants } from "$lib/sidebar/theme";
import type { CardPlaceholderVariants, ImagePlaceholderVariants, ListPlaceholderVariants, SkeletonVariants, TestimonialPlaceholderVariants, TextPlaceholderVariants, VideoPlaceholderVariants, WidgetPlaceholderVariants } from "$lib/skeleton/theme";
import type { SpeedDialVariants, SpeedDialButtonVariants } from "$lib/speed-dial/theme";
import type { SpinnerVaraiants } from "$lib/spinner/theme";
import type { StepIndicatorVariants } from "$lib/stepindicator/theme";
import type { StepperVariants, ProgressStepperVariants, DetailedStepperVariants, VerticalStepperVariants, BreadcrumbStepperVariants, TimelineStepperVariants } from "$lib/stepper/theme";
import type { PaginationItemVariants, PaginationVariants } from "$lib/pagination/theme";
import type { ProgressbarVariants, ProgressradialVariants } from "$lib/progress/theme";
import type { RatingVariants, AdvancedRatingVariants, ReviewVariants, ScoreRatingVariants } from "$lib/rating/theme";
import type { TableVariants, TableSearchVariants, TableSearchColor } from "$lib/table/theme";
import type { TabsVaraints, TabItemVariants } from "$lib/tabs/theme";
import type { TimelineVariants, ActivityItemVariants, GroupVariants, GroupItemVariants, TimelineItemVariants } from "$lib/timeline/theme";
import type { ToastVaraints } from "$lib/toast/theme";
import type { ToolbarButtonVariants, ToolbarGroupVariants, ToolbarVariants } from "$lib/toolbar/theme";
import type { TooltipVariants } from "$lib/tooltip/theme";
import type { closeButton } from "$lib/utils/theme";

// forms component variants
import type { CheckboxVariants } from "$lib/forms/checkbox/theme";
import type { FileuploadViariants } from "$lib/forms/fileupload/theme";
import type { FloatingLabelInputVaratiants } from "$lib/forms/floating-label/theme";
import type { HelperVariants } from "$lib/forms/helper/theme";
import type { InputVariants } from "$lib/forms/input-field/theme";
import type { LabelVariants } from "$lib/forms/label/theme";
import type { RadioVariants } from "$lib/forms/radio/theme";

import type { RangeVariants } from "$lib/forms/range/theme";
import type { SearchVariants } from "$lib/forms/search/theme";
import type { MultiSelectVariants, SelectVariants } from "$lib/forms/select/theme";
import type { TextareaVariants } from "$lib/forms/textarea/theme";
import type { ToggleVariants } from "$lib/forms/toggle/theme";
import type { PhoneInputVariants } from "$lib/forms/phoneinput/theme";

// typography component variants
import type { AnchorVariants } from "$lib/typography/anchor/theme";
import type { BlockquoteVariants } from "$lib/typography/blockquote/theme";
import type { DescriptionListVariants } from "$lib/typography/descriptionlist/theme";
import type { HeadingVariants } from "$lib/typography/heading/theme";
import type { HrVariants } from "$lib/typography/hr/theme";
import type { ImgVariants } from "$lib/typography/img/theme";
import type { ListVariants } from "$lib/typography/list/theme";
import type { ParagraphVariants } from "$lib/typography/paragraph/theme";
import type { SpanVariants } from "$lib/typography/span/theme";
import type { ClipboardVariants } from "./clipboard/theme";
import type { AccordionItemVariants, AccordionVariants } from "./accordion/theme";
import type { AvatarVariants } from "./avatar/theme";
import type { BottomNavHeaderItemVariants, BottomNavHeaderVariants, BottomNavItemVariants, BottomNavVariants } from "./bottom-navigation/theme";
import type { BreadcrumbItemVariants, BreadcrumbVariants } from "./breadcrumb/theme";
import type { ButtonGroupVariants } from "./button-group/theme";
import type { AndroidVariants, DefaultMockupVariants, DesktopVariants, IosVariants, LaptopVariants, SmartwatchVariants, TabletVariants } from "./device-mockups/theme";

// plugins component variants
import type { ApexOptions } from "apexcharts";

// extend
import type { ButtonToggleVariants } from "$lib/forms/button-toggle/theme";
import type { TagsVariants } from "$lib/forms/tags/theme";

// utils
import type { CloseButtonVariants } from "$lib/utils/theme";
import type { DialogVariants } from "./dialog/theme";

// end of component variants

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

// CloseButton

export type CloseButtonProps = CloseButtonVariants &
  AnchorButtonAttributes & {
    onclick?: (ev: MouseEvent) => void;
    name?: string;
    ariaLabel?: string;
    class?: string;
    svgClass?: string;
  };

// Navbar
export type NavbarType = {
  navStatus?: boolean;
  breakPoint: "md" | "lg" | "xl" | "xxl";
  activeClass?: string | null;
  nonActiveClass?: string | null;
  closeNav: () => void;
};

export type DeviceVariantType = "default" | "ios" | "android" | "tablet" | "laptop" | "desktop" | "smartwatch";

export declare type SizeType = typeof xs | typeof sm | typeof md | typeof lg | typeof xl;

export interface TransitionParamTypes {
  delay?: number;
  duration?: number;
  easing?: (t: number) => number;
  css?: (t: number, u: number) => string | null;
  tick?: (t: number, u: number) => void;
}

export type ParamsType = FadeParams | BlurParams | FlyParams | SlideParams | ScaleParams | undefined;

export type TransitionFunc = (node: HTMLElement, params: ParamsType) => TransitionConfig;

/* eslint-disable  @typescript-eslint/no-explicit-any */
export interface LinkType {
  name: string;
  href?: string;
  rel?: string;
  active?: boolean;
  [propName: string]: any;
}

export type AnchorButtonAttributes = ({ href: string } & HTMLAnchorAttributes) | ({ href?: undefined } & HTMLButtonAttributes);

export type AnchorDivAttributes = ({ href: string } & HTMLAnchorAttributes) | ({ href?: undefined } & HTMLAttributes<HTMLDivElement>);

export type AnchorButtonDivAttributes = ({ href: string } & HTMLAnchorAttributes) | ({ href?: undefined; onclick: Function } & HTMLButtonAttributes) | ({ href?: undefined; onclick?: undefined } & HTMLAttributes<HTMLDivElement>);

// accordion
export interface AccordionCtxType {
  flush?: boolean;
  activeClass?: string | null;
  inactiveClass?: string | null;
  transitionType?: TransitionFunc | "none";
}

export interface AccordionProps extends AccordionVariants, Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  children: Snippet;
  multiple?: boolean;
  activeClass?: string;
  inactiveClass?: string;
  transitionType?: TransitionFunc | "none";
}

export interface AccordionItemProps extends AccordionItemVariants, HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  header?: Snippet;
  arrowup?: Snippet;
  arrowdown?: Snippet;
  activeClass?: string;
  inactiveClass?: string;
  transitionType?: TransitionFunc | "none";
  transitionParams?: ParamsType;
  headerClass?: string;
  contentClass?: string;
}

// alert
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
export interface AvatarProps extends AvatarVariants, HTMLAttributes<HTMLDivElement> {
  children?: Snippet;
  indicator?: Snippet;
  href?: HTMLAnchorAttributes["href"];
  target?: HTMLAnchorAttributes["target"];
  src?: string;
  dot?: object;
  alt?: string;
  onclick?: () => void;
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
  aClass?: ClassValue;
}

// banner
export interface BannerProps extends BannerVariants, Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  header?: Snippet;
  open?: boolean;
  dismissable?: boolean;
  innerClass?: ClassValue;
  transition?: TransitionFunc;
  params?: object;
  closeClass?: ClassValue;
}

// bottom-navigation

export type BottomNavContextType = {
  activeClass?: string | null;
  activeUrl?: string;
  navType?: BottomNavVariants["navType"];
};

export interface BottomNavProps extends BottomNavVariants, HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  header?: Snippet;
  activeUrl?: string;
  outerClass?: ClassValue;
  innerClass?: ClassValue;
  activeClass?: ClassValue;
}

export type BottomNavItemProps = BottomNavItemVariants &
  AnchorButtonAttributes & {
    children: Snippet;
    btnName?: string;
    activeClass?: ClassValue;
    btnClass?: ClassValue;
    spanClass?: ClassValue;
    active?: boolean;
  };

export interface BottomNavHeaderProps extends BottomNavHeaderVariants, HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  outerClass?: ClassValue;
  innerClass?: ClassValue;
}

export interface BottomNavHeaderItemProps extends BottomNavHeaderItemVariants, HTMLButtonAttributes {
  itemName: string;
  active?: boolean;
}

// breadcrumb
export interface BreadcrumbProps extends BreadcrumbVariants, HTMLAttributes<HTMLElement> {
  children: Snippet;
  solid?: boolean;
  olClass?: ClassValue;
  ariaLabel?: string;
}

export interface BreadcrumbItemProps extends BreadcrumbItemVariants, HTMLLiAttributes {
  children: Snippet;
  icon?: Snippet;
  home?: boolean;
  href?: string;
  linkClass?: ClassValue;
  spanClass?: ClassValue;
  homeClass?: ClassValue;
}

// buttongroup
export interface ButtonGroupProps extends ButtonGroupVariants, HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  disabled?: boolean;
}

// button
export type GradientButtonColor = NonNullable<VariantProps<typeof gradientButton>["color"]>;

export type HTMLButtonOrAnchorAttributes = Omit<HTMLButtonAttributes & HTMLAnchorAttributes, "color">;

export type ButtonProps = ButtonVariants &
  AnchorButtonAttributes & {
    tag?: string;
    disabled?: boolean;
    outline?: boolean;
    shadow?: boolean;
    loading?: boolean;
  };

export interface GradientButtonProps extends GradientButtonVariantes, HTMLButtonOrAnchorAttributes {
  tag?: string;
  disabled?: boolean;
  href?: string;
  btnClass?: ClassValue;
}

// button-toggle
export type ButtonToggleGroupProps = HTMLAttributes<HTMLDivElement> & {
  multiSelect?: boolean;
  name?: string;
  value?: string | null | string[];
  color?: ButtonToggleVariants["color"];
  size?: ButtonToggleVariants["size"];
  roundedSize?: ButtonToggleVariants["roundedSize"];
  onSelect?: (val: any) => void;
  children: Snippet;
  ctxIconClass?: ClassValue;
  ctxBtnClass?: ClassValue;
};

export type ButtonToggleProps = ButtonToggleVariants &
  HTMLButtonAttributes & {
    value: string;
    selected?: boolean;
    children: Snippet;
    iconSlot?: Snippet;
    color?: ButtonToggleVariants["color"];
    iconClass?: ClassValue;
    contentClass?: ClassValue;
    txtClass?: ClassValue;
  };

export interface ButtonToggleContext {
  toggleSelected: (toggleValue: string) => void;
  isSelected: (toggleValue: string) => boolean;
}

export type CheckIconProps = SVGAttributes<SVGSVGElement>;

// card
export type CardProps = Omit<CardVariants, "href"> &
  AnchorDivAttributes & {
    children: Snippet;
    img?: string;
    imgClass?: ClassValue;
    contentClass?: string;
  };

// carousel

export type CarouselState = {
  images: HTMLImgAttributes[];
  index: number;
  lastSlideChange: number; // ms
  slideDuration: number; // ms
  forward: boolean;
  changeSlide: (newIndex: number) => void;
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
  imgClass?: ClassValue;
  onchange?: (x: HTMLImgAttributes) => {};
  isPreload?: boolean;
  slideFit?: SlideProps["fit"];
}

export interface IndicatorsProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  children?: Snippet<[{ selected: boolean; index: number }]>;
  activeClass?: ClassValue;
  inactiveClass?: ClassValue;
  position?: "top" | "bottom";
}

export interface ControlButtonProps extends HTMLButtonAttributes {
  forward: boolean;
  name?: string | null;
  spanClass?: ClassValue;
}

export interface ControlsProps extends Omit<HTMLButtonAttributes, "children"> {
  children?: Snippet<[(forward: boolean) => void]>;
}

export interface ThumbnailProps extends HTMLImgAttributes {
  selected?: boolean;
}

export interface ThumbnailsProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  children?: Snippet<[{ image: HTMLImgAttributes; selected: boolean; imgClass: string; Thumbnail: Component }]>;
  images: HTMLImgAttributes[];
  index: number;
  ariaLabel?: string;
  imgClass?: ClassValue;
  throttleDelay?: number;
}

export interface SlideProps extends SlideVariants, HTMLImgAttributes {
  image: HTMLImgAttributes;
  transition?: TransitionFunc; // Optional transition function, overrides default slide transition
}

// chart
export interface ChartProps {
  options: ApexOptions;
  class?: ClassValue;
}

// clipboard
export interface ClipboardProps extends ClipboardVariants, ButtonVariants, Omit<HTMLButtonAttributes, "children" | "color" | "disabled"> {
  children: Snippet<[boolean]>;
  value?: string;
  success?: boolean;
  showLabel?: boolean;
  embedded?: boolean;
}

// darkmode
export interface DarkmodeProps extends HTMLButtonAttributes {
  lightIcon?: Snippet;
  darkIcon?: Snippet;
  size?: "sm" | "md" | "lg";
  ariaLabel?: string;
}

// datepicker
export type DateOrRange = Date | { from?: Date; to?: Date };

export interface DatepickerProps extends DatepickerVariants, Omit<HTMLAttributes<HTMLDivElement>, "onselect"> {
  value?: Date;
  defaultDate?: Date | null;
  range?: boolean;
  rangeFrom?: Date;
  rangeTo?: Date;
  availableFrom?: Date | null;
  availableTo?: Date | null;
  locale?: string;
  firstDayOfWeek?: Day;
  dateFormat?: Intl.DateTimeFormatOptions;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  color?: ButtonProps["color"];
  inline?: boolean;
  autohide?: boolean;
  showActionButtons?: boolean;
  title?: string;
  onselect?: (x: DateOrRange) => void;
  onclear?: () => void;
  onapply?: (x: DateOrRange) => void;
  inputmode?: HTMLInputAttributes["inputmode"];
  monthColor?: ButtonProps["color"];
  btnClass?: ClassValue;
  inputClass?: ClassValue;
  monthBtnSelected?: ClassValue;
  monthBtn?: ClassValue;
  translationLocale?: string;
  elementRef?: HTMLInputElement;
}

// device-mockups
export interface DeviceMockupProps {
  children: Snippet;
  device?: DeviceVariantType;
}

export interface DesktopProps extends DesktopVariants, HTMLAttributes<HTMLElement> {
  children?: Snippet;
  divClass?: ClassValue;
  div2Class?: ClassValue;
  div3Class?: ClassValue;
  div4Class?: ClassValue;
}

export interface LaptopProps extends LaptopVariants, HTMLAttributes<HTMLDivElement> {
  children?: Snippet;
  divClass?: ClassValue;
  div2Class?: ClassValue;
  div3Class?: ClassValue;
  div4Class?: ClassValue;
}

export interface AndroidProps extends AndroidVariants, HTMLAttributes<HTMLDivElement> {
  children?: Snippet;
  divClass?: ClassValue;
  div2Class?: ClassValue;
  div3Class?: ClassValue;
  div4Class?: ClassValue;
  div5Class?: ClassValue;
  div6Class?: ClassValue;
  div7Class?: ClassValue;
}

export interface DefaultMockupProps extends DefaultMockupVariants, HTMLAttributes<HTMLDivElement> {
  children?: Snippet;
  divClass?: ClassValue;
  div2Class?: ClassValue;
  div3Class?: ClassValue;
  div4Class?: ClassValue;
  div5Class?: ClassValue;
  div6Class?: ClassValue;
}

export interface IosProps extends IosVariants, HTMLAttributes<HTMLDivElement> {
  children?: Snippet;
  divClass?: ClassValue;
  div2Class?: ClassValue;
  div3Class?: ClassValue;
  div4Class?: ClassValue;
  div5Class?: ClassValue;
  div6Class?: ClassValue;
}

export interface SmartwatchProps extends SmartwatchVariants, HTMLAttributes<HTMLDivElement> {
  children?: Snippet;
  divClass?: ClassValue;
  div2Class?: ClassValue;
  div3Class?: ClassValue;
  div4Class?: ClassValue;
  div5Class?: ClassValue;
  div6Class?: ClassValue;
}

export interface TabletProps extends TabletVariants, HTMLAttributes<HTMLDivElement> {
  children?: Snippet;
  divClass?: ClassValue;
  div2Class?: ClassValue;
  div3Class?: ClassValue;
  div4Class?: ClassValue;
  div5Class?: ClassValue;
  div6Class?: ClassValue;
}

// dialog

export interface DialogProps extends DialogVariants, HTMLDialogAttributes {
  onaction?: ({ action, data }: { action: string; data: FormData }) => any;
  form?: boolean;
  modal?: boolean;
  autoclose?: boolean;
  focustrap?: boolean;
  permanent?: boolean;
  dismissable?: boolean;
  outsideclose?: boolean;
  transition?: TransitionFunc;
  transitionParams?: ParamsType;
}

// drawer
export interface DrawerProps extends DrawerVariants, Omit<DialogProps, "hidden"> {
  /** @deprecated Use `outsideclose` instead. Will be removed in next minor version. */
  activateClickOutside?: boolean;
  /** @deprecated Use `open` instead. Will be removed in next minor version. */
  hidden?: boolean | null;
}


export interface DrawerheadProps extends DrawerheadVariants, HTMLButtonAttributes {
  closeIcon?: Snippet;
  buttonClass?: ClassValue;
  svgClass?: ClassValue;
}

// dropdown
export interface DropdownProps extends PopperProps {
  simple?: boolean;
  activeUrl?: string;
  isOpen?: boolean;
}

export type DropdownDividerProps = HTMLAttributes<HTMLDivElement>;

export interface DropdownHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
}

export type DropdownItemAnchorButtonAttributes = HTMLAnchorAttributes & Omit<HTMLButtonAttributes, keyof HTMLAnchorAttributes | "type">;

export type DropdownItemProps = DropdownItemVariants &
  AnchorButtonDivAttributes & {
    children: Snippet;
    aClass?: ClassValue;
    activeClass?: ClassValue;
    liClass?: ClassValue;
  };

export interface DropdownGroupProps extends HTMLAttributes<HTMLUListElement> {
  children: Snippet;
}

// footer
export type FooterType = "default" | "sticky" | "sitemap" | "socialmedia" | "logo" | undefined;

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  footerType?: FooterType;
}

export interface FooterBrandProps extends HTMLAnchorAttributes {
  children?: Snippet;
  aClass?: ClassValue;
  spanClass?: ClassValue;
  imgClass?: ClassValue;
  href?: string;
  src?: string;
  alt?: string;
  name?: string;
}

export interface FooterCopyrightProps extends FooterCopyrightVariants, HTMLAnchorAttributes {
  spanClass?: ClassValue;
  aClass?: ClassValue;
  href?: string;
  by?: string;
  copyrightMessage?: string;
  year?: number;
  bySpanClass?: ClassValue;
}

export interface FooterIconProps extends HTMLAnchorAttributes {
  children: Snippet;
  href?: string;
  ariaLabel?: string;
}

export interface FooterLinkGroupProps extends HTMLAttributes<HTMLUListElement> {
  children: Snippet;
}

export interface FooterLinkProps extends FooterLinkVariants, HTMLAnchorAttributes {
  children: Snippet;
  liClass?: ClassValue;
  aClass?: ClassValue;
  href?: string;
}

// forms
// checkbox
export interface CheckboxItem {
  value: string | number;
  label?: string;
  checked?: boolean | null;
  [key: string]: any;
}

export interface CheckboxProps extends CheckboxVariants, Omit<HTMLInputAttributes, "children" | "color" | "disabled"> {
  children?: Snippet<[{ value?: string | number; checked: boolean } | CheckboxItem]>;
  custom?: boolean;
  inline?: boolean;
  tinted?: boolean;
  rounded?: boolean;
  group?: (string | number)[];
  choices?: CheckboxItem[];
  indeterminate?: boolean;
  divClass?: ClassValue;
  labelProps?: Record<string, any>;
}

// checkbox-button
export interface CheckboxButtonProps extends Omit<HTMLInputAttributes, "size"> {
  group?: (string | number)[];
  value?: string | number;
  checked?: boolean;
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
  onDrop?: HTMLLabelAttributes["ondrop"];
  onDragOver?: HTMLLabelAttributes["ondragover"];
  onChange?: HTMLInputAttributes["onchange"];
}

// fileupload
export interface FileuploadProps extends FileuploadViariants, Omit<HTMLInputAttributes, "size"> {
  files?: FileList | null;
  size?: FileuploadViariants["size"];
  color?: InputProps<never>["color"];
  elementRef?: HTMLInputElement;
  clearable?: boolean;
  clearableSvgClass?: ClassValue;
  clearableColor?: CloseButtonVariants["color"];
  clearableOnClick?: () => void;
  clearableClass?: ClassValue;
  wrapperClass?: ClassValue;
}

// floatinglabel-input
export interface FloatingLabelInputProps extends FloatingLabelInputVaratiants, Omit<HTMLInputAttributes, "size"> {
  children: Snippet;
  id?: string;
  value?: string | number | readonly string[];
  elementRef?: HTMLInputElement;
  "aria-describedby"?: string;
  variant?: FloatingLabelInputVaratiants["variant"];
  size?: FloatingLabelInputVaratiants["size"];
  color?: FloatingLabelInputVaratiants["color"];
  inputClass?: ClassValue;
  labelClass?: ClassValue;
  clearable?: boolean;
  clearableSvgClass?: ClassValue;
  clearableColor?: CloseButtonVariants["color"];
  clearableClass?: ClassValue;
  clearableOnClick?: () => void;
  data?: string[];
  maxSuggestions?: number;
  onSelect?: (item: string) => void;
  comboClass?: ClassValue;
}

// helper
export interface HelperProps extends HelperVariants, Omit<HTMLAttributes<HTMLParagraphElement>, "color"> {}

// input
export type InputValue = string | number | string[] | undefined;

export interface InputProps<T extends InputValue = string> extends InputVariants, Omit<HTMLInputAttributes, "size" | "children" | "value"> {
  children?: Snippet<[{ class: string } & Omit<InputProps<T>, "children" | "left" | "right" | "size">]>;
  left?: Snippet;
  right?: Snippet;
  size?: InputVariants["size"];
  value?: T;
  elementRef?: HTMLInputElement;
  color?: InputVariants["color"];
  leftClass?: ClassValue;
  rightClass?: ClassValue;
  divClass?: ClassValue;
  wrapperClass?: ClassValue;
  clearable?: boolean;
  clearableSvgClass?: ClassValue;
  clearableColor?: CloseButtonVariants["color"];
  clearableClass?: ClassValue;
  clearableOnClick?: () => void;
  data?: string[];
  maxSuggestions?: number;
  onSelect?: (item: string) => void;
  comboClass?: ClassValue;
  comboItemClass?: ClassValue;
  oninput?: (event: Event) => void;
  onfocus?: (event: FocusEvent) => void;
  onblur?: (event: FocusEvent) => void;
  onkeydown?: (event: KeyboardEvent) => void;
  /** @deprecated Use `oninput` instead. Will be removed in next minor version. */
  onInput?: (event: Event) => void;
  /** @deprecated Use `onfocus` instead. Will be removed in next minor version. */
  onFocus?: (event: FocusEvent) => void;
  /** @deprecated Use `onblur` instead. Will be removed in next minor version. */
  onBlur?: (event: FocusEvent) => void;
  /** @deprecated Use `onkeydown` instead. Will be removed in next minor version. */
  onKeydown?: (event: KeyboardEvent) => void;
}

// input-addon
export interface InputAddonProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  size?: ButtonGroupProps["size"];
}

// phoneInput
export interface PhoneInputProps<T extends InputValue = number> extends PhoneInputVariants, Omit<HTMLInputAttributes, "size" | "children" | "value"> {
  phoneType?: "default" | "floating" | "countryCode" | "copy" | "advanced";
  children?: Snippet;
  floatingLabel?: string;
  labelFor?: string;
  phoneIcon?: boolean;
}

// label
export interface LabelProps extends HTMLLabelAttributes {
  children: Snippet;
  color?: LabelVariants["color"];
  show?: boolean;
}

// radio
export interface RadioProps<T> extends RadioVariants, Omit<HTMLInputAttributes, "color"> {
  group?: T;
  value?: T;
  inputClass?: ClassValue;
  labelClass?: ClassValue;
}

// raido-button
export interface RadioButtonProps<T> extends Omit<HTMLInputAttributes, "size"> {
  group?: T;
  value?: T;
  inline?: boolean;
  pill?: boolean;
  outline?: boolean;
  size?: ButtonProps["size"];
  color?: ButtonProps["color"];
  shadow?: boolean;
  checkedClass?: ClassValue;
}

// range
export interface RangeProps extends RangeVariants, Omit<HTMLInputAttributes, "size" | "color"> {
  value?: number | string;
  inputClass?: ClassValue;
}

// search
export interface SearchProps extends SearchVariants, Omit<HTMLInputAttributes, "size"> {
  children?: Snippet;
  value?: string;
  elementRef?: HTMLInputElement;
  clearable?: boolean;
  clearableSvgClass?: ClassValue;
  clearableColor?: CloseButtonVariants["color"];
  clearableClass?: ClassValue;
  clearableOnClick?: () => void;
  inputClass?: ClassValue;
}

// select
export type SelectOptionType<T> = {
  name: string | number;
  value: T;
  disabled?: boolean;
  [key: string]: any;
};

export interface SelectProps<T> extends SelectVariants, Omit<HTMLSelectAttributes, "size" | "disabled"> {
  children?: Snippet;
  items?: SelectOptionType<T>[];
  elementRef?: HTMLSelectElement;
  placeholder?: string;
  selectClass?: ClassValue;
  clearable?: boolean;
  clearableSvgClass?: ClassValue;
  clearableColor?: CloseButtonVariants["color"];
  clearableClass?: ClassValue;
  // remove this in next major version
  clearableOnClick?: () => void;
  onClear?: () => void;
  disabled?: boolean;
}

export interface MultiSelectProps<T> extends MultiSelectVariants, Omit<HTMLAttributes<HTMLDivElement>, "size" | "children" | "onchange" | "onblur"> {
  children?: Snippet<[{ item: SelectOptionType<T>; clear: () => void }]>;
  items: SelectOptionType<T>[];
  value: T[];
  dropdownClass?: ClassValue;
  placeholder?: string;
  disabled?: boolean | undefined;
  size?: "sm" | "md" | "lg";
  // Select-specific attributes for the hidden select element
  name?: string | undefined | null;
  form?: string | undefined | null;
  required?: boolean | undefined | null;
  autocomplete?: FullAutoFill | undefined | null;
  onchange?: (event: Event) => void;
  onblur?: (event: FocusEvent) => void;
}

// Tags
export interface TagsProps extends TagsVariants, HTMLAttributes<HTMLDivElement> {
  value: string[];
  itemClass?: ClassValue;
  placeholder?: string;
  spanClass?: ClassValue;
  closeClass?: ClassValue;
  inputClass?: ClassValue;
  closeBtnSize?: CloseButtonVariants["size"];
  unique?: boolean;
  availableTags?: string[];
  maxSuggestions?: number;
  showHelper?: boolean;
  showAvailableTags?: boolean;
  allowNewTags?: boolean;
}

// Timepicker
export type TimePickerType = "default" | "dropdown" | "select" | "range" | "timerange-dropdown" | "timerange-toggle" | "inline-buttons";
export type ColumnCount = 1 | 2 | 3 | 4;
export type TimePickerOption = {
  name: string;
  value: string;
};

export interface TimepickerProps {
  id?: string;
  endId?: string;
  value?: string;
  endValue?: string;
  min?: string;
  max?: string;
  required?: boolean;
  disabled?: boolean;
  inputColor?: InputProps["color"];
  buttonColor?: ButtonProps["color"];
  Icon?: Component;
  iconClass?: string;
  type?: TimePickerType;
  optionLabel?: string;
  options?: TimePickerOption[];
  size?: ButtonGroupVariants["size"]; // Use the specific ButtonGroupSizeType
  divClass?: ClassValue;
  inputClass?: ClassValue;
  selectClass?: ClassValue;
  timerangeLabel?: string;
  timerangeButtonLabel?: string;
  timeIntervals?: string[];
  columns?: ColumnCount;
  // Callback props instead of events
  onselect?: (data: { time: string; endTime: string;[key: string]: string }) => void;
}

// textarea
export interface TextareaProps extends TextareaVariants, HTMLTextareaAttributes {
  header?: Snippet;
  footer?: Snippet;
  addon?: Snippet;
  value?: string;
  elementRef?: HTMLTextAreaElement;
  wrapped?: boolean;
  divClass?: ClassValue;
  innerClass?: ClassValue;
  headerClass?: ClassValue;
  footerClass?: ClassValue;
  addonClass?: ClassValue;
  // cols?: number;
  clearable?: boolean;
  clearableSvgClass?: ClassValue;
  clearableColor?: CloseButtonVariants["color"];
  clearableClass?: ClassValue;
  clearableOnClick?: () => void;
  textareaClass?: ClassValue;
}

// toggle
export interface ToggleProps extends Omit<ToggleVariants, "off_state_label">, Omit<HTMLInputAttributes, "size" | "color"> {
  offLabel?: Snippet;
  value?: string | number;
  checked?: boolean;
  disabled?: boolean;
  spanClass?: ClassValue;
  inputClass?: ClassValue;
}

// end of forms

// gallery
export type ImgType = {
  src?: string;
  alt?: string;
};

export interface GalleryProps extends GalleryVariants, HTMLAttributes<HTMLDivElement> {
  children?: Snippet;
  figure?: Snippet<[item: ImgType]>;
  items?: HTMLImgAttributes[];
  imgClass?: ClassValue;
  height?: string;
  rowHeight?: number;
  columns?: number;
}

// indicator
export interface IndicatorProps extends HTMLAttributes<HTMLDivElement> {
  children?: Snippet;
  color?: IndicatorVariants["color"];
  cornerStyle?: IndicatorVariants["cornerStyle"];
  size?: IndicatorVariants["size"];
  border?: boolean;
  placement?: IndicatorVariants["placement"];
  offset?: boolean;
}

// kbd
export interface KbdProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
}

// list-group
export interface ListGroupItemType {
  name?: string;
  Icon?: Component;
  onclick?: () => void;
  href?: string;
  active?: boolean;
  current?: boolean;
  disabled?: boolean;
  img?: { src: string; alt: string };
  comment?: string;
  message?: string;
  [key: string]: any;
}

export interface ListgroupProps extends ListgroupVariants, Omit<HTMLAttributes<HTMLUListElement>, "children"> {
  children?: Snippet<[item: ListGroupItemType | string]>;
  items?: (ListGroupItemType | string)[];
  active?: boolean;
  onclick?: (event?: MouseEvent) => void;
  itemClass?: ClassValue;
  aClasss?: ClassValue;
  btnClass?: ClassValue;
  iconClass?: ClassValue;
}

export type ListgroupItemProps = Omit<ListgroupItemVariants, "state"> &
  AnchorButtonAttributes & {
    current?: boolean;
    disabled?: boolean;
    Icon?: Component;
    iconClass?: ClassValue;
    name?: string;
    children?: Snippet;
  };

// mega-menu
export interface MegaMenuProps extends MegaMenuVariants, Omit<PopperProps, "children"> {
  children: Snippet<[{ item: LinkType; index: number }]>;
  extra?: Snippet;
  items?: LinkType[];
  full?: boolean;
  ulClass?: ClassValue;
  extraClass?: ClassValue;
  isOpen?: boolean;
}

// modal
export interface ModalProps extends ModalVariants, Omit<DialogProps, "classes"> {
  header?: Snippet;
  footer?: Snippet;
  headerClass?: ClassValue;
  bodyClass?: ClassValue;
  footerClass?: ClassValue;
  closeBtnClass?: ClassValue;
  fullscreen?: boolean;
}

// navbar
export interface MenuProps extends SVGAttributes<SVGSVGElement> {
  size?: string;
  color?: string;
  variation?: "solid" | "outline";
  ariaLabel?: string;
}

export type NavbarState = {
  hidden: boolean;
  activeClass?: string;
  nonActiveClass?: string;
  activeUrl?: string;
};

export type NavbarBreakpoint = "sm" | "md" | "lg" | "xl";

export interface NavbarProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  children: Snippet<[{ hidden: boolean; toggle: () => void; NavContainer: Component }]>;
  fluid?: boolean;
  navContainerClass?: ClassValue;
  closeOnClickOutside?: boolean;
  breakpoint?: NavbarBreakpoint;
}

export type NavBrandProps = HTMLAnchorAttributes;

export interface NavContainerProps extends HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
}

export type NavHamburgerProps = ToolbarButtonProps &
  NavbarHamburgerVariants & {
    href?: undefined;
    menuClass?: ClassValue;
  };

export interface NavUlProps extends NavbarUlVariants, Omit<HTMLAttributes<HTMLDivElement>, "class"> {
  activeUrl?: string;
  ulClass?: ClassValue;
  hidden?: boolean;
  // Legacy support
  slideParams?: SlideParams;
  // New transition props
  transition?: typeof slide | typeof fly | typeof fade | typeof scale;
  transitionParams?: SlideParams | FlyParams | FadeParams | ScaleParams;
  activeClass?: ClassValue;
  nonActiveClass?: ClassValue;
  respectMotionPreference?: boolean;
  class?: ClassValue;
}

export type NavLiProps = AnchorButtonAttributes & {
  activeClass?: ClassValue;
  nonActiveClass?: ClassValue;
};

// toolbar
export interface ToolbarProps extends ToolbarVariants, Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  end?: Snippet;
}

export interface ToolbarGroupProps extends ToolbarGroupVariants, HTMLAttributes<HTMLDivElement> {}

export type ToolbarButtonProps = ToolbarButtonVariants &
  AnchorButtonAttributes & {
    name?: string;
  };

// pagination
export type PaginationItemType = {
  size?: "default" | "large";
  active?: boolean | null;
  group?: boolean | null;
  table?: boolean | null;
};

export interface PaginationItemSpecificProps {
  children?: Snippet;
  name?: string;
  href?: string;
  active?: boolean;
  rel?: string;
  size?: "default" | "large";
}

export type PaginationHTMLButtonOrAnchorAttributes = HTMLButtonAttributes & HTMLAnchorAttributes;

export interface PaginationButtonProps extends PaginationItemVariants, PaginationHTMLButtonOrAnchorAttributes {
  children?: Snippet;
  onclick?: () => void;
  disabled?: boolean;
}

export interface PaginationNavProps extends PaginationNavVariants, HTMLAttributes<HTMLElement>, PaginationVariants {
  prevContent?: Snippet;
  nextContent?: Snippet;
  prevClass?: ClassValue;
  nextClass?: ClassValue;
  currentPage: number;
  totalPages: number;
  visiblePages?: number;
  onPageChange: (page: number) => void;
  layout?: "navigation" | "pagination" | "table";
  previousLabel?: string;
  nextLabel?: string;
  showIcons?: boolean;
  ariaLabel?: string;
  size?: "default" | "large";
  spanClass?: ClassValue;
  tableDivClass?: ClassValue;
}

export interface PaginationItemProps extends PaginationItemVariants, PaginationHTMLButtonOrAnchorAttributes {
  children?: Snippet;
}

export interface PaginationProps extends PaginationVariants, HTMLLiAttributes {
  prevContent?: Snippet;
  nextContent?: Snippet;
  pages?: PaginationItemProps[];
  previous?: () => void;
  next?: () => void;
  ariaLabel?: string;
}

// popover
export interface PopoverProps extends PopoverVariants, Omit<PopperProps, "title"> {
  title?: Snippet | string;
  color?: PopoverVariants["color"];
  params?: ParamsType;
  defaultClass?: ClassValue;
  transition?: TransitionFunc;
  isOpen?: boolean;
}

// progress
export interface ProgressbarProps extends ProgressbarVariants, Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  progress?: string | number;
  precision?: number;
  tweenDuration?: number;
  animate?: boolean;
  size?: string;
  labelInside?: boolean;
  labelOutside?: string;
  easing?: EasingFunction;
}

export interface ProgressradialProps extends ProgressradialVariants, Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  progress?: number | string;
  radius?: number;
  startingPosition?: "top" | "right" | "bottom" | "left";
  precision?: number;
  tweenDuration?: number;
  animate?: boolean;
  size?: string;
  thickness?: number | string;
  labelInside?: boolean;
  labelOutside?: string;
  easing?: (t: number) => number;
}

// rating
export type RatingItem = { label: string | null | undefined; rating: number };

export interface AdvancedRatingProps extends AdvancedRatingVariants, HTMLAttributes<HTMLDivElement> {
  rating?: Snippet;
  globalText?: Snippet;
  ratings: RatingItem[];
  divClass?: ClassValue;
  spanClass?: ClassValue;
  div2Class?: ClassValue;
  div3Class?: ClassValue;
  span2Class?: ClassValue;
  unit?: string;
}

export interface RatingProps extends RatingVariants, HTMLAttributes<HTMLDivElement> {
  children?: Snippet;
  text?: Snippet;
  size?: number;
  total?: number;
  rating?: number;
  icon?: Component;
  count?: boolean;
  pClass?: ClassValue;
}

export interface RatingCommentProps {
  children: Snippet;
  evaluation?: Snippet;
  helpfullink?: string;
  abuselink?: string;
  comment: {
    id?: string;
    user: {
      name?: string;
      img: {
        src: string | undefined | null;
        alt?: string;
      };
      joined?: string;
    };
    total?: number;
    rating: number;
    heading?: string;
    address?: string;
    datetime?: string;
  };
}

export type ReviewType = {
  name?: string;
  imgSrc?: string;
  imgAlt?: string;
  address?: string;
  reviewDate?: string;
  title?: string;
  rating?: number;
  item1?: string;
  item2?: string;
  item3?: string;
};

export interface ReviewProps extends ReviewVariants, HTMLAttributes<HTMLElement> {
  children: Snippet;
  address?: Snippet;
  item1?: Snippet;
  item2?: Snippet;
  item3?: Snippet;
  review?: ReviewType;
  articleClass?: ClassValue;
  divClass?: ClassValue;
  div2Class?: ClassValue;
  div3Class?: ClassValue;
  imgClass?: ClassValue;
  ulClass?: ClassValue;
  liClass?: ClassValue;
}

export interface ScoreRatingProps extends ScoreRatingVariants {
  ratings?: { label: string | undefined | null; rating: number }[];
  ratings2?: { label: string | undefined | null; rating: number }[];
  headerLabel?: {
    desc1?: string;
    desc2?: string;
    desc3?: string;
    link?: { label: string | undefined | null; url: string };
  };
}

export interface RatingIconProps extends SVGAttributes<SVGSVGElement> {
  fillPercent?: number;
  fillColor?: string;
  strokeColor?: string;
  size?: number;
  ariaLabel?: string;
  role?: string;
  svgClass?: ClassValue;
  iconIndex?: number;
  groupId?: string;
  pathd?: string;
}

// sidebar
export type SidebarCtxType = {
  closeSidebar?: () => void;
  activeClass?: string;
  nonActiveClass?: string;
  isSingle?: boolean;
  selected?: Writable<object>;
  activeUrl?: string;
};

export interface SidebarProps extends SidebarVariants, HTMLAttributes<HTMLElement> {
  children: Snippet;
  isOpen?: boolean;
  closeSidebar?: () => void;
  activateClickOutside?: boolean;
  isSingle?: boolean;
  ariaLabel?: string;
  divClass?: ClassValue;
  nonActiveClass?: ClassValue;
  activeClass?: ClassValue;
  params?: ParamsType;
  transition?: TransitionFunc;
  backdrop?: boolean;
  backdropClass?: ClassValue;
  activeUrl?: string;
  alwaysOpen?: boolean;
  disableBreakpoints?: boolean;
}

export interface SidebarButtonProps extends HTMLButtonAttributes {
  breakpoint?: SidebarVariants["breakpoint"];
}

export interface SidebarCtaProps extends SidebarCtaVariants, HTMLAttributes<HTMLDivElement> {
  icon?: Snippet;
  divClass?: ClassValue;
  spanClass?: ClassValue;
  label: string;
}

export interface SiteType {
  name?: string;
  href?: string;
  img?: string;
}

export interface SidebarBrandProps extends SidebarBrandVariants, HTMLAnchorAttributes {
  site?: SiteType;
  imgClass?: ClassValue;
  spanClass?: ClassValue;
}

export interface SidebarDropdownWrapperProps extends SidebarDropdownWrapperVariants, HTMLButtonAttributes {
  children: Snippet;
  arrowup?: Snippet;
  arrowdown?: Snippet;
  icon?: Snippet;
  isOpen?: boolean;
  btnClass?: ClassValue;
  label?: string;
  spanClass?: ClassValue;
  ulClass?: ClassValue;
  params?: ParamsType;
  transition?: TransitionFunc;
  svgClass?: ClassValue;
  onclick?: () => void;
  isSingle?: boolean;
}

export interface SidebarGroupProps extends HTMLAttributes<HTMLUListElement> {
  children: Snippet;
  borderClass?: ClassValue;
  border?: boolean;
}

export interface SidebarItemProps extends HTMLAnchorAttributes {
  icon?: Snippet;
  subtext?: Snippet;
  label?: string;
  spanClass?: ClassValue;
  activeClass?: ClassValue;
  nonActiveClass?: ClassValue;
  aClass?: ClassValue;
  active?: boolean;
}

// skeleton
export interface CardPlaceholderProps extends CardPlaceholderVariants, HTMLAttributes<HTMLDivElement> {
  size?: CardPlaceholderVariants["size"];
}

export interface ImagePlaceholderProps extends ImagePlaceholderVariants, HTMLAttributes<HTMLDivElement> {
  size?: ImagePlaceholderVariants["size"];
  rounded?: ImagePlaceholderVariants["rounded"];
  imgOnly?: boolean;
}

export interface ListPlaceholderProps extends ListPlaceholderVariants, HTMLAttributes<HTMLDivElement> {
  itemNumber?: number;
  size?: ListPlaceholderVariants["size"];
  rounded?: ListPlaceholderVariants["rounded"];
}

export interface SkeletonProps extends SkeletonVariants, HTMLAttributes<HTMLDivElement> {
  size?: SkeletonVariants["size"];
}

export interface TestimonialPlaceholderProps extends TestimonialPlaceholderVariants, HTMLAttributes<HTMLDivElement> {}

export interface TextPlaceholderProps extends TextPlaceholderVariants, HTMLAttributes<HTMLDivElement> {
  size?: TextPlaceholderVariants["size"];
}

export interface VideoPlaceholderProps extends VideoPlaceholderVariants, HTMLAttributes<HTMLDivElement> {
  size?: VideoPlaceholderVariants["size"];
}

export interface WidgetPlaceholderProps extends WidgetPlaceholderVariants, HTMLAttributes<HTMLDivElement> {}

// speeddial
export interface SpeedCtxType {
  pill: boolean;
  tooltip: Placement | "none";
  textOutside: boolean;
}

type BaseSpeedDialTriggerProps = {
  children?: any;
  name?: string;
  pill?: boolean;
  icon?: Snippet;
  class?: string;
  [key: string]: any;
};

// Two different prop types based on gradient flag
export type RegularSpeedDialTriggerProps = BaseSpeedDialTriggerProps & {
  gradient?: false;
  color?: ButtonVariants["color"];
};

export type GradientSpeedDialTriggerProps = BaseSpeedDialTriggerProps & {
  gradient: true;
  color?: GradientButtonColor;
};

// Union type that forces TypeScript to check properly
export type SpeedDialTriggerProps = RegularSpeedDialTriggerProps | GradientSpeedDialTriggerProps;

export type SpeedDialProps = PopperProps &
  SpeedDialVariants & {
    children: Snippet;
    button?: Snippet;
    popperClass?: ClassValue;
    placement?: Placement;
    tooltip?: Placement | "none";
    trigger?: PopperProps["trigger"];
    textOutside?: boolean;
    pill?: boolean;
    ontoggle?: PopperProps["ontoggle"];
    onbeforetoggle?: PopperProps["onbeforetoggle"];
    isOpen?: boolean;
  };

export type SpeedDialButtonProps = ButtonProps &
  SpeedDialButtonVariants & {
    name?: string;
    tooltip?: Placement | "none";
    pill?: boolean;
    textOutside?: boolean;
    textClass?: ClassValue;
  };

// spinner
export interface SpinnerProps extends SVGAttributes<SVGSVGElement> {
  color?: SpinnerVaraiants["color"];
  size?: SpinnerVaraiants["size"];
  currentFill?: string;
  currentColor?: string;
}

// stepindicator
export interface StepIndicatorProps extends StepIndicatorVariants, HTMLAttributes<HTMLElement> {
  steps?: string[];
  currentStep?: number;
  // size?: StepIndicatorVariants["size"];
  color?: StepIndicatorVariants["color"] | "custom";
  // glow?: StepIndicatorVariants["glow"];
  // hideLabel?: StepIndicatorVariants["hideLabel"];
  completedCustom?: string;
  currentCustom?: string;
}

// stepper
export interface Step {
  id?: number;
  label: string;
  description?: string;
  status?: "completed" | "current" | "pending";
  icon?: Component;
  iconClass?: ClassValue;
  descriptionClass?: ClassValue;
}

export interface StepperProps extends HTMLOlAttributes, StepperVariants {
  children?: Snippet;
  steps?: Step[];
}

// ProgressStepper
export interface ProgressStep {
  status?: "completed" | "current" | "pending";
  icon?: Component;
  iconClass?: ClassValue;
}

export interface ProgressStepperProps extends HTMLOlAttributes, ProgressStepperVariants {
  children?: Snippet;
  steps?: ProgressStep[];
}

// DetailedStepper
export interface DetailedStep {
  id: number;
  label: string;
  description?: string;
  status?: "completed" | "current" | "pending";
  icon?: Component;
  iconClass?: ClassValue;
}

export interface DetailedStepperProps extends HTMLOlAttributes, DetailedStepperVariants {
  children?: Snippet;
  steps?: DetailedStep[];
  contentClass?: ClassValue;
}

// VerticalStepper
export interface VerticalStep {
  id: number;
  label: string;
  status?: "completed" | "current" | "pending";
  icon?: Component;
  iconClass?: ClassValue;
}

export interface VerticalStepperProps extends HTMLOlAttributes, VerticalStepperVariants {
  children?: Snippet;
  steps?: VerticalStep[];
  liClass?: ClassValue;
}

// BreadcrumbStepper
export interface BreadcrumbStep {
  id: number;
  label: string;
  shortLabel?: string;
  status?: "completed" | "current" | "pending";
  icon?: Component;
  iconClass?: ClassValue;
}

export interface BreadcrumbStepperProps extends BreadcrumbStepperVariants, HTMLOlAttributes {
  children?: Snippet;
  steps?: BreadcrumbStep[];
}

// TimelineStepper
export interface TimelineStep {
  label: string;
  description?: string;
  status?: "completed" | "current" | "pending";
  icon?: Component;
  iconClass?: ClassValue;
}

export interface TimelineStepperProps extends HTMLOlAttributes, TimelineStepperVariants {
  children?: Snippet;
  steps?: TimelineStep[];
  contentClass?: ClassValue;
}

// tables
export type TableCtxType = {
  striped?: boolean;
  hoverable?: boolean;
  border?: boolean;
  color?: TableVariants["color"];
};

// prettier-ignore
export type HeadItemType = string | number | {
  text: string;
  [key: string]: string | number | boolean;
};

export interface TableHeadProps extends HTMLAttributes<HTMLTableSectionElement> {
  children?: Snippet;
  headerSlot?: Snippet;
  defaultRow?: boolean;
  headItems?: HeadItemType[];
  striped?: boolean;
  border?: boolean;
  color?: TableVariants["color"];
}

export type TableItemType = Record<string, string | number | boolean>;

export interface TableProps extends TableVariants, Omit<HTMLTableAttributes, "border"> {
  children?: Snippet;
  footerSlot?: Snippet;
  captionSlot?: Snippet;
  divClass?: ClassValue;
  striped?: boolean;
  hoverable?: boolean;
  border?: boolean;
  shadow?: boolean;
  color?: TableVariants["color"];
  items?: TableItemType[];
}

export interface TableBodyRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children?: Snippet;
  striped?: boolean;
  hoverable?: boolean;
  border?: boolean;
  color?: TableVariants["color"];
}

export interface TableBodyCellProps extends HTMLTdAttributes {
  children?: Snippet;
  colspan?: number;
  color?: TableVariants["color"];
  onclick?: () => void;
}

export type CellValue = string | number | boolean | null | undefined;

export type BodyRow = CellValue[] | Record<string, CellValue>;

export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  children?: Snippet;
  bodyItems?: BodyRow[];
}

export interface TableHeadCellProps<T = any> extends HTMLThAttributes {
  children?: Snippet;
  padding?: string;
  sort?: ((a: T, b: T) => number) | null;
  defaultDirection?: "asc" | "desc";
  defaultSort?: boolean;
  direction?: "asc" | "desc" | null;
}

export type TableSearchType = {
  striped?: boolean;
  hoverable?: boolean;
  color?: string;
};

export interface TableSearchProps extends TableSearchVariants, HTMLTableAttributes {
  children?: Snippet;
  header?: Snippet;
  footer?: Snippet;
  divClass?: ClassValue;
  inputValue?: string;
  striped?: boolean;
  hoverable?: boolean;
  customColor?: string;
  color?: TableSearchColor;
  innerDivClass?: ClassValue;
  inputClass?: ClassValue;
  searchClass?: ClassValue;
  svgDivClass?: ClassValue;
  svgClass?: ClassValue;
  tableClass?: ClassValue;
  placeholder?: string;
}

// tabs
export interface TabsProps extends TabsVaraints, HTMLAttributes<HTMLUListElement> {
  children: Snippet;
  tabStyle?: TabsVaraints["tabStyle"];
  ulClass?: ClassValue;
  contentClass?: ClassValue;
  divider?: boolean;
}

export interface TabitemProps extends TabItemVariants, HTMLLiAttributes {
  children?: Snippet;
  titleSlot?: Snippet;
  open?: boolean;
  title?: string;
  activeClass?: ClassValue;
  inactiveClass?: ClassValue;
  disabled?: boolean;
  tabStyle?: TabsVaraints["tabStyle"];
}

export interface TabCtxType {
  activeClass?: string;
  inactiveClass?: string;
  tabStyle?: TabsVaraints["tabStyle"];
  panelId: string;
}

export type SelectedTab = { snippet?: Snippet; id?: string };

// theme
//export interface ThemeConfig {
//  [key: string]: ClassValue | ThemeConfig;
//}

export type { ThemeConfig } from "$lib/theme";

// timeline
export interface ActivityType {
  title: HTMLElement | string;
  date: Date | string;
  src: string;
  alt: string;
  text?: HTMLElement | string;
}

export interface ActivityProps extends HTMLOlAttributes {
  children: Snippet;
}

export interface ActivityItemProps extends ActivityItemVariants, HTMLLiAttributes {
  activities: ActivityType[];
  liClass?: string;
  spanClass?: string;
  imgClass?: string;
  outerDivClass?: string;
  innerDivClass?: string;
  timeClass?: string;
  titleClass?: string;
  textClass?: string;
}

export interface GroupProps extends GroupVariants, HTMLOlAttributes {
  children: Snippet;
  divClass?: string;
  timeClass?: string;
  date?: Date | string;
  olClass?: string;
}

export interface GroupItemProps extends GroupItemVariants, HTMLLiAttributes {
  timelines: GroupTimelineType[];
  aClass?: string;
  imgClass?: string;
  divClass?: string;
  titleClass?: string;
  spanClass?: string;
}

export interface GroupTimelineType {
  name?: string | HTMLElement;
  src?: string;
  alt?: string;
  href?: string;
  isPrivate?: boolean;
  comment?: string | HTMLElement;
}

export type DateFormat = "year" | "month-year" | "full-date";

export interface TimelineProps extends HTMLOlAttributes {
  children: Snippet;
  order?: TimelineVariants["order"];
}

export interface TimelineItemProps extends TimelineItemVariants, HTMLLiAttributes {
  children: Snippet;
  orientationSlot?: Snippet;
  title: string;
  date: string;
  svgClass?: string;
  liClass?: string;
  divClass?: string;
  timeClass?: string;
  h3Class?: string;
  dateFormat?: DateFormat;
}

// toast
export interface ToastProps extends ToastVaraints, HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  icon?: Snippet;
  toastStatus?: boolean;
  dismissable?: boolean;
  color?: ToastVaraints["color"];
  position?: ToastVaraints["position"];
  iconClass?: string;
  contentClass?: string;
  align?: boolean;
  params?: ParamsType;
  transition?: TransitionFunc;
  class?: string;
}

// tooltip
export interface TooltipProps extends PopperProps {
  type?: "light" | "dark" | "auto";
  color?: TooltipVariants["color"];
  isOpen?: boolean;
}

// typography
// anchor
export interface AnchorProps {
  children: Snippet;
  color?: AnchorVariants["color"];
  asButton?: boolean;
  onclick?: (event: MouseEvent) => void;
  // Common attributes that make sense for both button and anchor
  id?: string;
  class?: string;
  style?: string;
  tabindex?: number;
  title?: string;
  role?: string;
  "aria-label"?: string;
  "data-testid"?: string;
  // Anchor-specific attributes (used when asButton is false)
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
  // Button-specific attributes (used when asButton is true)
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  name?: string;
  value?: string | number | string[];
  // Allow any other attributes (like data-* attributes)
  [key: string]: any;
}

// blockquote
export interface BlockquoteProps extends HTMLBlockquoteAttributes {
  children: Snippet;
  border?: boolean;
  italic?: boolean;
  bg?: boolean;
  alignment?: BlockquoteVariants["alignment"];
  size?: BlockquoteVariants["size"];
}

// descriptionlist
export interface DescriptionListProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  tag: DescriptionListVariants["tag"];
}

// heading
export interface HeadingProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  tag?: HeadingVariants["tag"];
}

// hr
export interface HrProps extends HrVariants, HTMLAttributes<HTMLElement> {
  children?: Snippet;
  divClass?: string;
  iconDivClass?: string;
  textSpanClass?: string;
  innerDivClass?: string;
}

// img
// https://github.com/JonasKruckenberg/imagetools/blob/main/packages/core/src/types.ts
export interface Picture {
  /**
   * Key is format. Value is srcset.
   */
  sources: Record<string, string>;
  img: {
    src: string;
    w: number;
    h: number;
  };
}
// export type EnhancedImgAttributes = Omit<HTMLImgAttributes, "src"> & { src: string };

export interface ImgProps extends ImgVariants, HTMLImgAttributes {
  size?: ImgVariants["size"];
  effect?: ImgVariants["effect"];
  caption?: string;
  figClass?: string;
  captionClass?: string;
  href?: HTMLAnchorElement["href"];
}

export interface EnhandedImgProps extends ImgVariants, Omit<HTMLImgAttributes, "src"> {
  src: string | Picture;
  size?: ImgVariants["size"];
  multiple?: boolean;
  transform?: string;
  effect?: ImgVariants["effect"];
  caption?: string;
  figClass?: string;
  captionClass?: string;
  href?: HTMLAnchorElement["href"];
}

// layout
export interface LayoutProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
}

// list
export interface ListProps extends HTMLOlAttributes {
  children: Snippet;
  tag?: ListVariants["tag"];
  position?: ListVariants["position"];
  ctxClass?: string;
  isContenteditable?: boolean;
}

export interface LiProps extends HTMLLiAttributes {
  children: Snippet;
  icon?: boolean;
}

// mark
export interface MarkProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
}

// paragraph
export interface ParagraphProps extends ParagraphVariants, HTMLAttributes<HTMLParagraphElement> {
  children: Snippet;
  italic?: boolean;
  firstUpper?: boolean;
  justify?: boolean;
}

// secondary
export interface SecondaryProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
}

// span
export interface SpanProps extends SpanVariants, HTMLAttributes<HTMLSpanElement> {
  children?: Snippet;
  italic?: boolean;
  underline?: boolean;
  linethrough?: boolean;
  uppercase?: boolean;
}

// video
export interface VideoProps extends HTMLVideoAttributes {
  type?: HTMLSourceAttributes["type"];
  src?: HTMLSourceAttributes["src"];
  trackSrc?: HTMLTrackAttributes["src"];
  srclang?: HTMLTrackAttributes["lang"];
  label?: HTMLTrackAttributes["label"];
}

// popper
export interface TriggeredToggleEvent extends ToggleEvent {
  trigger: HTMLElement;
}

export interface PopperProps extends Omit<HTMLAttributes<HTMLDivElement>, "onbeforetoggle" | "ontoggle"> {
  triggeredBy?: string;
  triggerDelay?: number;
  trigger?: "hover" | "click";
  placement?: Placement;
  arrow?: boolean;
  arrowClass?: string;
  offset?: number;
  yOnly?: boolean; // special case for megamenu - only move on y axis
  strategy?: Strategy;
  reference?: string;
  middlewares?: Middleware[];
  children: Snippet;
  onbeforetoggle?: (ev: TriggeredToggleEvent) => void;
  ontoggle?: (ev: TriggeredToggleEvent) => void;
  transition?: TransitionFunc;
  transitionParams?: ParamsType;
  isOpen?: boolean;
}

export interface ArrowProps {
  placement?: Placement;
  cords: Partial<Coords>;
  strategy?: "absolute" | "fixed";
  class?: ClassValue | null;
}
