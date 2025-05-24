import type { HTMLButtonAttributes, HTMLAnchorAttributes, HTMLAttributes, HTMLLiAttributes, HTMLImgAttributes, HTMLInputAttributes, HTMLLabelAttributes, HTMLSelectAttributes, HTMLTextareaAttributes, HTMLDialogAttributes, SVGAttributes, HTMLTableAttributes, HTMLTdAttributes, HTMLThAttributes, HTMLOlAttributes, HTMLBlockquoteAttributes, HTMLSourceAttributes, HTMLTrackAttributes, HTMLVideoAttributes, ChangeEventHandler, DragEventHandler } from "svelte/elements";
import type { TransitionConfig, FadeParams, BlurParams, FlyParams, SlideParams, ScaleParams, EasingFunction } from "svelte/transition";
import { type Writable } from "svelte/store";
import type { Snippet, Component } from "svelte";
import { tv, type VariantProps } from "tailwind-variants";
import type { Coords, Middleware, Placement, Strategy } from "@floating-ui/dom";
import type { ClassValue } from 'clsx';

// component variants
import type { AlertVariants } from "./alert/theme";
import type { BadgeVariants } from "./badge/theme";
import type { BannerVariants } from "./banner/theme";
import type { ButtonVariants, GradientButtonVariantes, button, gradientButton } from "./buttons/theme";
import type { CarouselVariants } from "./carousel/theme";
import type { closeButtonVariants } from "./utils/theme";
import type Slide from "./carousel/Slide.svelte";
import type { ApexOptions } from "apexcharts";
import type { DrawerVariants } from "./drawer/theme";
import type { FileuploadViariants } from "$lib/forms/fileupload/theme";
import type { FloatingLabelInputVaratiants } from "$lib/forms/floating-label/theme";
import type { HelperVariants } from "$lib/forms/helper/theme";
import type { InputVariants } from "$lib/forms/input-field/theme";
import type { LabelVariants } from "$lib/forms/label/theme";
import type { RadioVariants } from "$lib/forms/radio/theme";
import type { RangeVariants } from "$lib/forms/range/theme";
import type { SearchVariants } from "$lib/forms/search/theme";
import type { MultiSelectVariants, SelectVariants } from "$lib/forms/select/theme";
import type { ToggleVariants } from "$lib/forms/toggle/theme";
import type { IndicatorVariants } from "$lib/indicator/theme";
import type { ListgroupItemVariants, ListgroupVariants } from "$lib/list-group/theme";
import type { ModalVariants } from "$lib/modal/theme";
import type { PopoverVariants } from "$lib/popover/theme";
import type { SidebarVariants } from "$lib/sidebar/theme";
import type { CardPlaceholderVariants, ImagePlaceholderVariants, ListPlaceholderVariants, SkeletonVariants, TextPlaceholderVariants, VideoPlaceholderVariants } from "$lib/skeleton/theme";
import type { SpinnerVaraiants } from "$lib/spinner/theme";
import type { TableVariants } from "$lib/table/theme";
import type { TabsVaraints } from "$lib/tabs/theme";
import { baseThemes } from "$lib/theme";
import { timeline } from "$lib/timeline/theme";
import type { ToastVaraints } from "$lib/toast/theme";
import type { ToolbarButtonVariants, ToolbarGroupVariants, ToolbarVariants } from "$lib/toolbar/theme";
import type { TooltipVariants } from "$lib/tooltip/theme";
// typography component variants
import type { AnchorVariants } from "$lib/typography/anchor/theme";
import type { BlockquoteVariants } from "$lib/typography/blockquote/theme";
import type { DescriptionListVariants } from "$lib/typography/descriptionlist/theme";
import type { HeadingVariants } from "$lib/typography/heading/theme";
import type { ImgVariants } from "$lib/typography/img/theme";
import type { ListVariants } from "$lib/typography/list/theme";
import type { ParagraphVariants } from "$lib/typography/paragraph/theme";
import type { SpanVariants } from "$lib/typography/span/theme";
import type { ButtonToggleVariants, ButtonToggleContentVariants, ButtonToggleTextVariants } from "$lib/forms/button-toggle/theme";

// end of component variants

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

// closebutton

export type CloseButtonVariants = VariantProps<typeof closeButtonVariants>;

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
  navStatus: boolean | undefined;
  breakPoint: "md" | "lg" | "xl" | "xxl";
  activeClass: string | undefined | null;
  nonActiveClass: string | undefined | null;
  closeNav: () => void;
};

// primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
export type ColorVariant = "primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | "none";

export type DeviceVariantType = "default" | "ios" | "android" | "tablet" | "laptop" | "desktop" | "smartwatch";

export declare type SizeType = typeof xs | typeof sm | typeof md | typeof lg | typeof xl;

export type TransitionTypes = "fade" | "fly" | "slide" | "blur" | "in:fly" | "out:fly" | "in:slide" | "out:slide" | "in:fade" | "out:fade" | "in:blur" | "out:blur";

export interface TransitionParamTypes {
  delay?: number;
  duration?: number;
  easing?: (t: number) => number;
  css?: (t: number, u: number) => string | undefined | null;
  tick?: (t: number, u: number) => void;
}

export type ParamsType = FadeParams | BlurParams | FlyParams | SlideParams | ScaleParams | undefined;

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

export interface AccordionProps extends Omit<HTMLAttributes<HTMLDivElement>, "class"> {
  children: Snippet;
  flush?: boolean;
  multiple?: boolean;
  activeClass?: string;
  inactiveClass?: string;
  defaultClass?: string;
  classActive?: string;
  classInactive?: string;
  transitionType?: TransitionFunc | "none";
  class?: ClassValue;
}

export interface AccordionItemProps extends Omit<HTMLAttributes<HTMLDivElement>, "class"> {
  children: Snippet;
  header?: Snippet;
  arrowup?: Snippet;
  arrowdown?: Snippet;
  open?: boolean;
  activeClass?: string;
  inactiveClass?: string;
  transitionType?: TransitionFunc | "none";
  transitionParams?: ParamsType;
  headerClass?: string;
  contentClass?: string;
  class?: ClassValue;
}

// alert
export type alertColor = "primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose";

export interface AlertProps extends Omit<AlertVariants, "icon">, Omit<HTMLAttributes<HTMLDivElement>, "color" | "class"> {
  children: Snippet;
  icon?: Snippet;
  alertStatus?: boolean;
  closeIcon?: Component;
  transition?: TransitionFunc;
  params?: ParamsType;
  onclick?: () => void;
  class?: ClassValue;
}

// avatar
export interface AvatarProps extends Omit<HTMLAttributes<HTMLDivElement>, "class"> {
  children?: Snippet;
  indicator?: Snippet;
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
  class?: ClassValue;
}

// badge
export interface BadgeProps extends BadgeVariants, Omit<HTMLAttributes<HTMLDivElement>, "color" | "class"> {
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
  aClass?: ClassValue;
  class?: ClassValue;
}

// banner
export interface BannerProps extends BannerVariants, Omit<HTMLAttributes<HTMLDivElement>, "class"> {
  header?: Snippet;
  open?: boolean;
  dismissable?: boolean;
  color?: BannerVariants["color"];
  innerClass?: ClassValue;
  transition?: TransitionFunc;
  params?: object;
  closeClass?: ClassValue;
  class?: ClassValue;
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
  outerClass?: ClassValue;
  innerClass?: ClassValue;
  activeClass?: ClassValue;
}

export interface BottomNavItemProps {
  children: Snippet;
  btnName?: string;
  appBtnPosition?: AppBtnPositionType;
  activeClass?: ClassValue;
  btnClass?: ClassValue;
  spanClass?: ClassValue;
  active?: boolean;
  // Common attributes that make sense for both button and anchor
  id?: string;
  style?: string;
  tabindex?: number;
  title?: string;
  role?: string;
  "aria-label"?: string;
  "data-testid"?: string;
  // Anchor-specific attributes
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
  // Button-specific attributes
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  name?: string;
  value?: string | number | string[];
  // Allow any other attributes (like data-* attributes)
  [key: string]: any;
}

// export type BottomNavItemProps = BaseBottomNavItemProps & (
//   ({ href: string } & HTMLAnchorAttributes & { active?: boolean }) |
//   ({ href?: never } & HTMLButtonAttributes & { active?: boolean })
// );

export interface BottomNavHeaderProps {
  children: Snippet;
  outerClass?: ClassValue;
  innerClass?: ClassValue;
}

export interface BottomNavHeaderItemProps extends Omit<HTMLButtonAttributes, "class"> {
  itemName: string;
  active?: boolean;
  class?: ClassValue;
}

// breadcrumb
export interface BreadcrumbProps extends Omit<HTMLAttributes<HTMLElement>, "class"> {
  children: Snippet;
  solid?: boolean;
  olClass?: ClassValue;
  ariaLabel?: string;
  class?: ClassValue;
}

export interface BreadcrumbItemProps extends Omit<HTMLLiAttributes, "class"> {
  children: Snippet;
  icon?: Snippet;
  home?: boolean;
  href?: string;
  linkClass?: ClassValue;
  spanClass?: ClassValue;
  homeClass?: ClassValue;
  class?: ClassValue;
}

// buttongroup
export interface ButtonGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, "class"> {
  children: Snippet;
  size?: ButtonGroupSizeType;
  class?: ClassValue;
  disabled?: boolean;
}

export type ButtonGroupSizeType = "sm" | "md" | "lg" | undefined;

// button
export type ButtonColor = NonNullable<VariantProps<typeof button>["color"]>;
export type GradientButtonColor = NonNullable<VariantProps<typeof gradientButton>["color"]>;

export type HTMLButtonOrAnchorAttributes = Omit<HTMLButtonAttributes & HTMLAnchorAttributes, "color">;

export type ButtonProps = ButtonVariants &
  AnchorButtonAttributes & {
    tag?: string;
    disabled?: boolean;
    outline?: boolean;
    shadow?: boolean;
  color?: ButtonColor;
  class?: ClassValue;
  };

export interface GradientButtonProps extends GradientButtonVariantes, Omit<HTMLButtonOrAnchorAttributes, "class"> {
  tag?: string;
  disabled?: boolean;
  href?: string;
  color?: GradientButtonColor;
  btnClass?: ClassValue;
  class?: ClassValue;
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
  class?: ClassValue;
  ctxIconClass?: ClassValue;
  ctxBtnClass?: ClassValue;
};

export type ButtonToggleProps = HTMLButtonAttributes & {
  value: string;
  selected?: boolean;
  children: Snippet;
  iconSlot: Snippet;
  color?: ButtonToggleVariants["color"];
  iconClass?: ClassValue;
  class?: ClassValue;
  contentClass?: ClassValue;
  txtClass?: ClassValue;
};

export interface ButtonToggleContext {
  toggleSelected: (toggleValue: string) => void;
  isSelected: (toggleValue: string) => boolean;
}

export interface CheckIconProps extends Omit<SVGAttributes<SVGSVGElement>, "class"> {
  class?: ClassValue;
}

// card
export type CardSizeType = "sm" | "md" | "lg" | "xl" | "xs" | undefined;

export type ShadowType = "sm" | "normal" | "lg" | "md" | "xl" | "2xl" | "inner" | undefined;

export type ColorType = "primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | undefined;

export interface BaseCardProps {
  children: Snippet;
  horizontal?: boolean;
  color?: ColorType;
  target?: string;
  shadow?: ShadowType;
  reverse?: boolean;
  img?: string;
  size?: CardSizeType;
  class?: ClassValue;
  // onclick?: () => void;
  imgClass?: ClassValue;
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

export interface CarouselProps extends CarouselVariants, Omit<HTMLAttributes<HTMLDivElement>, "children" | "onchange" | "class"> {
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
  divClass?: ClassValue;
  class?: ClassValue;
}

export interface IndicatorsProps extends Omit<HTMLAttributes<HTMLDivElement>, "children" | "class"> {
  children?: Snippet<[{ selected: boolean; index: number }]>;
  activeClass?: ClassValue;
  inactiveClass?: ClassValue;
  position?: "top" | "bottom" | "withThumbnails";
  class?: ClassValue;
}

export interface ControlButtonProps extends Omit<HTMLButtonAttributes, "class"> {
  forward: boolean;
  name?: string | undefined | null;
  spanClass?: ClassValue;
  class?: ClassValue;
}

export interface ControlsProps extends Omit<HTMLButtonAttributes, "children" | "class"> {
  children?: Snippet<[(forward: boolean) => void]>;
  class?: ClassValue;
}

export interface ThumbnailProps extends Omit<HTMLImgAttributes, "class"> {
  selected?: boolean;
  class?: ClassValue;
}

export interface ThumbnailsProps extends Omit<HTMLAttributes<HTMLDivElement>, "children" | "class"> {
  children?: Snippet<[{ image: HTMLImgAttributes; selected: boolean; imgClass: string; Thumbnail: Component }]>;
  images: HTMLImgAttributes[];
  index: number;
  ariaLabel?: string;
  imgClass?: ClassValue;
  throttleDelay?: number;
  class?: ClassValue;
}

export interface SlideProps extends Omit<HTMLImgAttributes, "class"> {
  image: HTMLImgAttributes;
  transition?: TransitionFunc; // Optional transition function, overrides default slide transition
  class?: ClassValue;
}

// chart
export interface ChartProps {
  options: ApexOptions;
  class?: ClassValue;
}

// darkmode
export interface DarkmodeProps extends Omit<HTMLButtonAttributes, "class"> {
  class?: ClassValue;
  lightIcon?: Snippet;
  darkIcon?: Snippet;
  size?: "sm" | "md" | "lg";
  ariaLabel?: string;
}

// datepicker
export type DateOrRange = Date | { from?: Date; to?: Date };

export interface DatepickerProps extends Omit<HTMLAttributes<HTMLDivElement>, "onselect" | "class"> {
  value?: Date;
  defaultDate?: Date | null;
  range?: boolean;
  rangeFrom?: Date;
  rangeTo?: Date;
  locale?: string;
  firstDayOfWeek?: number;
  dateFormat?: Intl.DateTimeFormatOptions;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  inputClass?: ClassValue;
  color?: ButtonProps["color"];
  inline?: boolean;
  autohide?: boolean;
  showActionButtons?: boolean;
  title?: string;
  onselect?: (x: DateOrRange) => void;
  onclear?: () => void;
  onapply?: (x: DateOrRange) => void;
  btnClass?: ClassValue;
  class?: ClassValue;
}

// device-mockups
export interface DeviceMockupProps {
  children: Snippet;
  device?: DeviceVariantType;
}

export interface MockupBaseProps extends HTMLAttributes<HTMLElement> {
  children?: Snippet;
  divClass?: ClassValue;
  div2Class?: ClassValue;
  div3Class?: ClassValue;
  div4Class?: ClassValue;
}

export interface AndroidProps extends HTMLAttributes<HTMLDivElement> {
  children?: Snippet;
  divClass?: ClassValue;
  div2Class?: ClassValue;
  div3Class?: ClassValue;
  div4Class?: ClassValue;
  div5Class?: ClassValue;
  div6Class?: ClassValue;
  div7Class?: ClassValue;
}

export interface DefaultMockupProps {
  children?: Snippet;
  divClass?: ClassValue;
  div2Class?: ClassValue;
  div3Class?: ClassValue;
  div4Class?: ClassValue;
  div5Class?: ClassValue;
  div6Class?: ClassValue;
}

export interface IosProps {
  children?: Snippet;
  divClass?: ClassValue;
  div2Class?: ClassValue;
  div3Class?: ClassValue;
  div4Class?: ClassValue;
  div5Class?: ClassValue;
  div6Class?: ClassValue;
}

export interface SmartwatchProps {
  children?: Snippet;
  divClass?: ClassValue;
  div2Class?: ClassValue;
  div3Class?: ClassValue;
  div4Class?: ClassValue;
  div5Class?: ClassValue;
  div6Class?: ClassValue;
}

export interface TabletProps {
  children?: Snippet;
  divClass?: ClassValue;
  div2Class?: ClassValue;
  div3Class?: ClassValue;
  div4Class?: ClassValue;
  div5Class?: ClassValue;
  div6Class?: ClassValue;
}

// drawer
export interface DrawerProps extends DrawerVariants, Omit<HTMLAttributes<HTMLDivElement>, "class"> {
  hidden: boolean;
  closeDrawer?: () => void;
  activateClickOutside?: boolean;
  backdrop?: boolean;
  backdropClass?: ClassValue;
  transitionParams?: ParamsType;
  transitionType?: TransitionFunc;
  class?: ClassValue;
}

export interface DrawerheadProps extends Omit<HTMLButtonAttributes, "class"> {
  closeIcon?: Snippet;
  buttonClass?: ClassValue;
  svgClass?: ClassValue;
  class?: ClassValue;
}

// dropdown
export interface DropdownProps extends PopperProps {
  simple?: boolean;
  activeUrl?: string;
  isOpen?: boolean | undefined;
  class?: ClassValue;
}

export interface DropdownDividerProps extends Omit<HTMLAttributes<HTMLDivElement>, "class"> {
  class?: ClassValue;
}

export interface DropdownHeaderProps extends Omit<HTMLAttributes<HTMLDivElement>, "class"> {
  children: Snippet;
  class?: ClassValue;
}

export type DropdownItemAnchorButtonAttributes = HTMLAnchorAttributes & Omit<HTMLButtonAttributes, keyof HTMLAnchorAttributes | "type" >;

export interface DropdownItemProps extends Omit<DropdownItemAnchorButtonAttributes, "class"> {
  children: Snippet;
  aClass?: ClassValue;
  href?: string;
  activeClass?: ClassValue;
  liClass?: ClassValue;
  onclick?: () => void;
  class?: ClassValue;
}

export interface DropdownGroupProps extends Omit<HTMLAttributes<HTMLUListElement>, "class"> {
  children: Snippet;
  class?: ClassValue;
}

// footer
export type FooterType = "default" | "sticky" | "sitemap" | "socialmedia" | "logo" | undefined;

export interface FooterProps extends Omit<HTMLAttributes<HTMLElement>, "class"> {
  children: Snippet;
  footerType?: FooterType;
  class?: ClassValue;
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

export interface FooterCopyrightProps extends HTMLAnchorAttributes {
  spanClass?: ClassValue;
  aClass?: ClassValue;
  href?: string;
  by?: string;
  copyrightMessage?: string;
  year?: number | undefined;
  bySpanClass?: ClassValue;
}

export interface FooterIconProps extends Omit<HTMLAnchorAttributes, "class"> {
  children: Snippet;
  href?: string;
  ariaLabel?: string;
  class?: ClassValue;
}

export interface FooterLinkGroupProps extends Omit<HTMLAttributes<HTMLUListElement>, "class"> {
  children: Snippet;
  class?: ClassValue;
}

export interface FooterLinkProps extends HTMLAnchorAttributes {
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

export type CheckboxColorType = "primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose";

export interface CheckboxProps extends Omit<HTMLInputAttributes, "children" | "color" | "class"> {
  children?: Snippet<
    [
      | {
          value?: string | number;
          checked: boolean;
        }
      | CheckboxItem
    ]
  >;
  color?: CheckboxColorType;
  custom?: boolean;
  inline?: boolean;
  tinted?: boolean;
  rounded?: boolean;
  group?: (string | number)[];
  choices?: CheckboxItem[];
  indeterminate?: boolean;
  divClass?: ClassValue;
  labelProps?: Record<string, any>;
  class?: ClassValue;
}

// checkbox-button
export interface CheckboxButtonProps extends Omit<HTMLInputAttributes, "size" | "class"> {
  group?: (string | number)[];
  value?: string | number;
  checked?: boolean | undefined;
  inline?: boolean;
  pill?: boolean;
  outline?: boolean;
  size?: ButtonProps["size"];
  color?: ButtonProps["color"];
  shadow?: boolean;
  class?: ClassValue;
}

// dropzone
export interface DropzoneProps extends Omit<HTMLInputAttributes, "class"> {
  children: Snippet;
  files?: FileList | null;
  class?: ClassValue;
}

// fileupload
export interface FileuploadProps extends Omit<HTMLInputAttributes, "size"> {
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
export interface FloatingLabelInputProps extends Omit<HTMLInputAttributes, "size" | "class"> {
  children: Snippet;
  id?: string;
  value?: string | number | readonly string[] | undefined;
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
  class?: ClassValue;
}

// helper
export interface HelperProps extends HelperVariants, Omit<HTMLAttributes<HTMLParagraphElement>, "color" | "class"> {
  class?: ClassValue;
}

// input
export type InputValue = string | number | string[] | undefined;

export interface InputProps<T extends InputValue = string> extends Omit<HTMLInputAttributes, "size" | "children" | "value" | "class"> {
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
  class?: ClassValue;
}

// input-addon
export interface InputAddonProps extends Omit<HTMLAttributes<HTMLDivElement>, "class"> {
  children: Snippet;
  class?: ClassValue;
  size?: "sm" | "md" | "lg" | undefined;
}

// label
export interface LabelProps extends Omit<HTMLLabelAttributes, "class"> {
  children: Snippet;
  color?: LabelVariants["color"];
  show?: boolean;
  class?: ClassValue;
}

// radio
export interface RadioProps<T> extends RadioVariants, Omit<HTMLInputAttributes, "color"> {
  group?: T;
  value?: T;
  inputClass?: ClassValue;
  labelClass?: ClassValue;
}

// raido-button
export interface RadioButtonProps<T> extends Omit<HTMLInputAttributes, "size" | "class"> {
  group?: T;
  value?: T;
  inline?: boolean;
  pill?: boolean;
  outline?: boolean;
  size?: ButtonProps["size"];
  color?: ButtonProps["color"];
  shadow?: boolean;
  class?: ClassValue;
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

export interface SelectProps<T> extends SelectVariants, Omit<HTMLSelectAttributes, "size" | "disabled" | "class"> {
  children?: Snippet;
  items?: SelectOptionType<T>[];
  elementRef?: HTMLSelectElement;
  placeholder?: string;
  selectClass?: ClassValue;
  clearable?: boolean;
  clearableSvgClass?: ClassValue;
  clearableColor?: CloseButtonVariants["color"];
  clearableClass?: ClassValue;
  clearableOnClick?: () => void;
  disabled?: boolean;
  class?: ClassValue;
}

export interface MultiSelectProps<T> extends MultiSelectVariants, Omit<HTMLSelectAttributes, "size" | "children" | "class"> {
  children?: Snippet<[{ item: SelectOptionType<T>; clear: () => void }]>;
  items: SelectOptionType<T>[];
  value: T[];
  dropdownClass?: ClassValue;
  placeholder?: string;
  disabled?: boolean;
  class?: ClassValue;
}

// Tags
export interface TagsProps extends Omit<HTMLAttributes<HTMLDivElement>, "class"> {
  value: string[];
  itemClass?: ClassValue;
  placeholder?: string;
  class?: ClassValue;
  spanClass?: ClassValue;
  closeClass?: ClassValue;
  inputClass?: ClassValue;
  closeBtnSize?: CloseButtonVariants["size"];
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
  Icon?: Component | undefined;
  type?: TimePickerType;
  optionLabel?: string;
  options?: TimePickerOption[];
  size?: ButtonGroupSizeType; // Use the specific ButtonGroupSizeType
  divClass?: ClassValue;
  inputClass?: ClassValue;
  selectClass?: ClassValue;
  timerangeLabel?: string;
  timerangeButtonLabel?: string;
  timeIntervals?: string[];
  columns?: ColumnCount;
  // Callback props instead of events
  onselect?: (data: { time: string; endTime: string; [key: string]: string }) => void;
}

// textarea
export interface TextareaProps extends Omit<HTMLTextareaAttributes, "class"> {
  header?: Snippet;
  footer?: Snippet;
  value?: string;
  elementRef?: HTMLTextAreaElement;
  wrapped?: boolean;
  divClass?: ClassValue;
  innerClass?: ClassValue;
  headerClass?: ClassValue;
  footerClass?: ClassValue;
  cols?: number;
  clearable?: boolean;
  clearableSvgClass?: ClassValue;
  clearableColor?: CloseButtonVariants["color"];
  clearableClass?: ClassValue;
  clearableOnClick?: () => void;
  class?: ClassValue;
  textareaClass?: ClassValue;
}

// toggle
export interface ToggleProps extends Omit<ToggleVariants, "off_state_label">, Omit<HTMLInputAttributes, "size" | "color"> {
  offLabel?: Snippet;
  value?: string | number;
  checked?: boolean;
  disabled?: boolean;
  spanClass?: string;
  inputClass?: string;
}

// end of forms

// gallery
export type ImgType = {
  src?: string;
  alt?: string;
};

export interface GalleryProps extends HTMLAttributes<HTMLDivElement> {
  children?: Snippet;
  figure?: Snippet<[item: ImgType]>;
  items?: HTMLImgAttributes[];
  imgClass?: string;
  height?: string;
  rowHeight?: number;
  columns?: number;
}

// indicator
export interface IndicatorProps extends Omit<HTMLAttributes<HTMLDivElement>, "class"> {
  children?: Snippet;
  color?: IndicatorVariants["color"];
  cornerStyle?: IndicatorVariants["cornerStyle"];
  size?: IndicatorVariants["size"];
  border?: boolean;
  placement?: IndicatorVariants["placement"];
  offset?: boolean;
  class?: ClassValue;
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
  children?: Snippet<[item: ListGroupItemType | string | undefined]>;
  items?: (ListGroupItemType | string)[];
  active?: boolean;
  onclick?: (event?: MouseEvent) => void;
  itemClass?: string;
  aClasss?: string;
  btnClass?: string;
  iconClass?: string;
}

export type ListgroupItemProps = Omit<ListgroupItemVariants, "state"> &
  AnchorButtonAttributes & {
    current?: boolean;
    disabled?: boolean;
    Icon?: Component;
    iconClass?: string;
    name?: string;
    children?: Snippet;
  };

// mega-menu
export interface MegaMenuProps extends Omit<PopperProps, "children"> {
  children: Snippet<[{ item: LinkType; index: number }]>;
  extra?: Snippet;
  items?: LinkType[];
  full?: boolean;
  ulClass?: string;
  isOpen?: boolean | undefined;
}

// modal
export interface ModalProps extends ModalVariants, HTMLDialogAttributes {
  header?: Snippet;
  footer?: Snippet;
  modal?: boolean;
  autoclose?: boolean;
  outsideclose?: boolean;
  dismissable?: boolean;
  permanent?: boolean;
  transition?: TransitionFunc;
  params?: ParamsType;
  headerClass?: string;
  bodyClass?: string;
  footerClass?: string;
  closeBtnClass?: string;
  onclose?: () => void;
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
};

export interface NavbarProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  children: Snippet<[{ hidden: boolean; toggle: () => void; NavContainer: Component }]>;
  fluid?: boolean;
  navContainerClass?: string;
}

export interface NavBrandProps extends HTMLAnchorAttributes {}

export interface NavContainerProps extends HTMLAttributes<HTMLDivElement> {
  fluid?: boolean;
}

export type NavHamburgerProps = ToolbarButtonProps & {
  menuClass?: string;
  classMenu?: string;
};

export interface NavUlProps extends HTMLAttributes<HTMLDivElement> {
  activeUrl?: string;
  ulClass?: string;
  hidden?: boolean;
  slideParams?: TransitionParamTypes;
  activeClass?: string;
  nonActiveClass?: string;
}

export type NavLiProps = AnchorButtonAttributes & {
  activeClass?: string;
  nonActiveClass?: string;
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
import type { PaginationItemVariants, PaginationVariants } from "$lib/pagination/theme";

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
  size?: "default" | "large" | undefined;
}

export type PaginationHTMLButtonOrAnchorAttributes = HTMLButtonAttributes & HTMLAnchorAttributes;

export interface PaginationButtonProps extends PaginationItemVariants, PaginationHTMLButtonOrAnchorAttributes {
  children?: Snippet;
  onclick?: () => void;
  disabled?: boolean;
}

export interface PaginationNavProps extends HTMLAttributes<HTMLElement>, PaginationVariants {
  prevContent?: Snippet;
  nextContent?: Snippet;
  prevClass?: string;
  nextClass?: string;
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
  class?: string;
  spanClass?: string;
  tableDivClass?: string;
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
export interface PopoverProps extends Omit<PopperProps, "title"> {
  title?: Snippet | string;
  color?: PopoverVariants["color"];
  params?: ParamsType | undefined;
  defaultClass?: string;
  transition?: TransitionFunc;
  isOpen?: boolean | undefined;
}

// progress
export interface ProgressbarProps extends HTMLAttributes<HTMLDivElement> {
  progress?: string | number;
  precision?: number;
  tweenDuration?: number;
  animate?: boolean;
  size?: string;
  labelInside?: boolean;
  labelOutside?: string;
  easing?: EasingFunction;
  color?: ColorType;
  oustsideSpanClass?: string;
  oustsideProgressClass?: string;
  labeloutsidedivClass?: string;
  labelInsideClass?: string;
  divClass?: string;
}

export interface ProgressradialProps {
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
  color?: ColorType;
  labelInsideClass?: string;
  outsideSpanClass?: string;
  outsideProgressClass?: string;
  labelOutsideDivClass?: string;
  divClass?: string;
  [key: string]: any;
}

// rating
export type RatingItem = { label: string | null | undefined; rating: number };

export interface AdvancedRatingProps {
  rating?: Snippet;
  globalText?: Snippet;
  ratings: RatingItem[];
  divClass?: string;
  spanClass?: string;
  div2Class?: string;
  div3Class?: string;
  span2Class?: string;
  unit?: string;
}

export interface RatingProps extends HTMLAttributes<HTMLDivElement> {
  children?: Snippet;
  text?: Snippet;
  size?: number;
  total?: number;
  rating?: number;
  icon?: Component;
  count?: boolean;
  pClass?: string;
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

export interface ReviewProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  address?: Snippet;
  item1?: Snippet;
  item2?: Snippet;
  item3?: Snippet;
  review?: ReviewType;
  articleClass?: string;
  divClass?: string;
  div2Class?: string;
  div3Class?: string;
  imgClass?: string;
  ulClass?: string;
  liClass?: string;
}

export interface ScoreRatingProps {
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
  svgClass?: string;
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
  divClass?: string;
  nonActiveClass?: string;
  activeClass?: string;
  params?: ParamsType;
  transition?: TransitionFunc;
  backdrop?: boolean;
  backdropClass?: string;
  activeUrl?: string;
  alwaysOpen?: boolean;
}

export interface SidebarButtonProps extends HTMLButtonAttributes {
  breakpoint?: SidebarVariants["breakpoint"];
}

export interface SidebarCtaProps extends HTMLAttributes<HTMLDivElement> {
  icon?: Snippet;
  divClass?: string;
  spanClass?: string;
  label: string;
}

export interface SiteType {
  name?: string;
  href?: string;
  img?: string;
}

export interface SidebarBrandProps extends HTMLAnchorAttributes {
  site?: SiteType;
  imgClass?: string;
  spanClass?: string;
}

export interface SidebarDropdownWrapperProps extends HTMLButtonAttributes {
  children: Snippet;
  arrowup?: Snippet;
  arrowdown?: Snippet;
  icon?: Snippet;
  isOpen?: boolean | undefined;
  btnClass?: string;
  label: string | undefined;
  spanClass?: string;
  ulClass?: string;
  params?: ParamsType;
  transition?: TransitionFunc;
  svgClass?: string;
  onclick?: () => void;
  isSingle?: boolean;
}

export interface SidebarGroupProps extends HTMLAttributes<HTMLUListElement> {
  children: Snippet;
  borderClass?: string;
  border?: boolean;
}

export interface SidebarItemProps extends HTMLAnchorAttributes {
  icon?: Snippet;
  subtext?: Snippet;
  label?: string;
  spanClass?: string;
  activeClass?: string;
  nonActiveClass?: string;
  aClass?: string;
  active?: boolean;
}

// skeleton
export interface CardPlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  size?: CardPlaceholderVariants["size"];
}

export interface ImagePlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  size?: ImagePlaceholderVariants["size"];
  rounded?: ImagePlaceholderVariants["rounded"];
  imgOnly?: boolean;
}

export interface ListPlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  itemNumber?: number;
  size?: ListPlaceholderVariants["size"];
  rounded?: ListPlaceholderVariants["rounded"];
}

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  size?: SkeletonVariants["size"];
}

export interface TextPlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  size?: TextPlaceholderVariants["size"];
}

export interface VideoPlaceholderProps extends HTMLAttributes<HTMLDivElement> {
  size?: VideoPlaceholderVariants["size"];
}

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
  color?: ButtonColor;
};

export type GradientSpeedDialTriggerProps = BaseSpeedDialTriggerProps & {
  gradient: true;
  color?: GradientButtonColor;
};

// Union type that forces TypeScript to check properly
export type SpeedDialTriggerProps = RegularSpeedDialTriggerProps | GradientSpeedDialTriggerProps;

export type SpeedDialProps = PopperProps & {
  children: Snippet;
  button?: Snippet;
  popperClass?: string;
  placement?: Placement;
  tooltip?: Placement | "none";
  trigger?: PopperProps["trigger"];
  textOutside?: boolean;
  pill?: boolean;
  ontoggle?: PopperProps["ontoggle"];
  onbeforetoggle?: PopperProps["onbeforetoggle"];
  isOpen?: boolean | undefined;
};

export type SpeedDialButtonProps = ButtonProps & {
  name?: string;
  tooltip?: Placement | "none";
  pill?: boolean;
  textOutside?: boolean;
  textClass?: string;
};

// export type CombinedButtonColor = ButtonColor | GradientButtonColor;

// export type SpeedDialTriggerProps = ButtonProps & {
//   icon?: Snippet;
//   gradient?: boolean;
//   name?: string;
//   color?: CombinedButtonColor;
// };

// spinner
export interface SpinnerProps extends SVGAttributes<SVGSVGElement> {
  color?: SpinnerVaraiants["color"];
  size?: SpinnerVaraiants["size"];
  currentFill?: string;
  currentColor?: string;
}

// stepindicator
export type StepColorType = "primary" | "secondary" | "gray" | "red" | "yellow" | "green" | "indigo" | "purple" | "pink" | "blue" | "custom";

export interface StepIndicatorProps extends HTMLAttributes<HTMLElement> {
  steps: string[];
  currentStep: number;
  size?: string;
  color?: StepColorType;
  glow?: boolean;
  hideLabel?: boolean;
  completedCustom?: string;
  currentCustom?: string;
  class?: string;
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

export interface TableProps extends Omit<HTMLTableAttributes, "border"> {
  children?: Snippet;
  footerSlot?: Snippet;
  captionSlot?: Snippet;
  divClass?: string;
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
  class?: string;
}

export type TableSearchType = {
  striped?: boolean;
  hoverable?: boolean;
  color?: string;
};

export interface TableSearchProps extends HTMLTableAttributes {
  children?: Snippet;
  header?: Snippet;
  footer?: Snippet;
  divClass?: string;
  inputValue?: string;
  striped?: boolean;
  hoverable?: boolean;
  customColor?: string;
  color?: string;
  innerDivClass?: string;
  inputClass?: string;
  searchClass?: string;
  svgDivClass?: string;
  svgClass?: string;
  tableClass?: string;
  placeholder?: string;
}

// tabs
export interface TabsProps extends HTMLAttributes<HTMLUListElement> {
  children: Snippet;
  tabStyle?: TabsVaraints["tabStyle"];
  ulClass?: string;
  contentClass?: string;
  divider?: boolean;
}

export interface TabitemProps extends HTMLLiAttributes {
  children?: Snippet;
  titleSlot?: Snippet;
  open?: boolean;
  title?: string;
  activeClass?: string;
  inactiveClass?: string;
  disabled?: boolean;
  tabStyle?: TabsVaraints["tabStyle"];
}

export interface TabCtxType {
  activeClass?: string;
  inactiveClass?: string;
  tabStyle?: TabsVaraints["tabStyle"];
  selected: Writable<HTMLElement>;
  panelId: string;
}

// theme
export type BaseThemes = typeof baseThemes;

export interface ThemeProps {
  children: Snippet;
  theme?: BaseThemes;
}

// timeline
export type TimelineVariants = VariantProps<typeof timeline>;

export interface ActivityType {
  title: HTMLElement | string;
  date: Date | string;
  src: string;
  alt: string;
  text?: HTMLElement | string;
}

export interface GroupTimelineType {
  name?: string | HTMLElement;
  src?: string;
  alt?: string;
  href?: string;
  isPrivate?: boolean;
  comment?: string | HTMLElement;
}

export interface ActivityProps extends HTMLOlAttributes {
  children: Snippet;
}

export interface ActivityItemProps extends HTMLLiAttributes {
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

export interface GroupProps extends HTMLOlAttributes {
  children: Snippet;
  divClass?: string;
  timeClass?: string;
  date?: Date | string;
  olClass?: string;
}

export interface GroupItemProps extends HTMLLiAttributes {
  timelines: GroupTimelineType[];
  aClass?: string;
  imgClass?: string;
  divClass?: string;
  titleClass?: string;
  spanClass?: string;
}

export type DateFormat = "year" | "month-year" | "full-date";

export interface TimelineProps extends HTMLOlAttributes {
  children: Snippet;
  order?: TimelineVariants["order"];
}

export interface TimelineItemProps extends HTMLLiAttributes {
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
export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
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
  isOpen?: boolean | undefined;
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
export interface HrProps extends HTMLAttributes<HTMLElement> {
  children?: Snippet;
  divClass?: string;
  iconDivClass?: string;
  textSpanClass?: string;
  innerDivClass?: string;
}

// img
export type EnhancedImgAttributes = Omit<HTMLImgAttributes, "src"> & { src: string };

export interface ImgProps extends HTMLImgAttributes {
  size?: ImgVariants["size"];
  effect?: ImgVariants["effect"];
  caption?: string;
  figClass?: string;
  captionClass?: string;
  href?: HTMLAnchorElement["href"];
}

export interface EnhandedImgProps extends EnhancedImgAttributes {
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
export interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children: Snippet;
  italic?: boolean;
  firstUpper?: boolean;
  whitespace?: ParagraphVariants["whitespace"];
  size?: ParagraphVariants["size"];
  weight?: ParagraphVariants["weight"];
  space?: ParagraphVariants["space"];
  height?: ParagraphVariants["height"];
  align?: ParagraphVariants["align"];
  justify?: boolean;
}

// secondary
export interface SecondaryProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
}

// span
export interface SpanProps extends HTMLAttributes<HTMLSpanElement> {
  children?: Snippet;
  italic?: boolean;
  underline?: boolean;
  linethrough?: boolean;
  uppercase?: boolean;
  gradient?: SpanVariants["gradient"];
  highlight?: SpanVariants["highlight"];
  decoration?: SpanVariants["decoration"];
  decorationThickness?: SpanVariants["decorationThickness"];
  decorationColor?: SpanVariants["decorationColor"];
}

// video
export interface VideoProps extends HTMLVideoAttributes {
  children?: Snippet;
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

export interface PopperProps extends Omit<HTMLAttributes<HTMLDivElement>, "onbeforetoggle" | "ontoggle" | "class"> {
  triggeredBy?: string;
  trigger?: "hover" | "click";
  placement?: Placement;
  arrow?: boolean;
  arrowClass?: string;
  offset?: number;
  yOnly?: boolean; // special case for megamenu - only move on y axis
  strategy?: Strategy;
  reference?: string | undefined;
  middlewares?: Middleware[];
  children: Snippet;
  onbeforetoggle?: (ev: TriggeredToggleEvent) => void;
  ontoggle?: (ev: TriggeredToggleEvent) => void;
  transition?: TransitionFunc;
  transitionParams?: ParamsType;
  isOpen?: boolean | undefined;
  class?: ClassValue;
}

export interface ArrowProps {
  placement?: Placement;
  cords: Partial<Coords>;
  strategy?: "absolute" | "fixed";
  class?: string;
}
