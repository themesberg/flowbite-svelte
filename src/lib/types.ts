import type { HTMLButtonAttributes, HTMLAnchorAttributes, HTMLAttributes, HTMLLiAttributes, HTMLImgAttributes, HTMLInputAttributes, HTMLLabelAttributes, HTMLSelectAttributes, HTMLTextareaAttributes, HTMLDialogAttributes, SVGAttributes, HTMLTableAttributes, HTMLTdAttributes, HTMLThAttributes, HTMLOlAttributes, HTMLBlockquoteAttributes, HTMLSourceAttributes, HTMLTrackAttributes, HTMLVideoAttributes } from "svelte/elements";
import type { TransitionConfig, FadeParams, BlurParams, FlyParams, SlideParams, ScaleParams, EasingFunction } from "svelte/transition";
import { type Writable } from "svelte/store";
import type { Snippet, Component } from "svelte";
import type { Placement } from "@floating-ui/utils";
import { tv, type VariantProps } from "tailwind-variants";
import type { Picture } from "vite-imagetools";

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

export type ColorType = "primary" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | undefined;

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

// radio
export interface RadioProps<T> extends RadioVariants, Omit<HTMLInputAttributes, "color"> {
  group?: T;
  value?: T;
  inputClass?: string;
  labelClass?: string;
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
}

// range
export interface RangeProps extends RangeVariants, Omit<HTMLInputAttributes, "size" | "color"> {
  value?: number | string;
}

// search
export interface SearchProps<T> extends SearchVariants, Omit<HTMLInputAttributes, "size"> {
  children?: Snippet;
  value?: T;
}

// select
export type SelectOptionType<T> = {
  name: string | number;
  value: T;
  disabled?: boolean;
};

export interface SelectProps<T> extends SelectVariants, Omit<HTMLSelectAttributes, "size"> {
  children?: Snippet;
  items?: SelectOptionType<T>[];
  placeholder?: string;
}

export interface MultiSelectProps<T> extends MultiSelectVariants, Omit<HTMLSelectAttributes, "size" | "children"> {
  children?: Snippet<[{ item: SelectOptionType<T>; clear: () => void }]>;
  items?: SelectOptionType<T>[];
  // value?: (string | number)[];
  dropdownClass?: string;
  placeholder?: string;
  disabled?: boolean;
}

// textarea
export interface TextareaProps extends HTMLTextareaAttributes {
  header?: Snippet;
  footer?: Snippet;
  value?: string;
  wrapped?: boolean;
  divClass?: string | null;
  innerClass?: string;
  headerClass?: string;
  footerClass?: string;
  cols?: number;
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
  name: string;
  Icon?: Component;
  onclick?: () => void;
  href?: string;
  active?: boolean;
  current?: boolean;
  disabled?: boolean;
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
  };

// mega-menu
export interface MegaMenuProps extends Omit<PopperProps, "children"> {
  children: Snippet<[{ item: LinkType; index: number }]>;
  extra?: Snippet;
  items?: LinkType[];
  full?: boolean;
  ulClass?: string;
}

// modal
export interface ModalProps extends ModalVariants, HTMLDialogAttributes {
  header?: Snippet;
  footer?: Snippet;
  modal?: boolean;
  autoclose?: boolean;
  outsideclose?: boolean;
  dismissable?: boolean;
  transition?: TransitionFunc;
  params?: ParamsType;
  headerClass?: string;
  bodyClass?: string;
  footerClass?: string;
  closeBtnClass?: string;
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
};

export type SpeedDialButtonProps = ButtonProps & {
  name?: string;
  tooltip?: Placement | "none";
  pill?: boolean;
  textOutside?: boolean;
  textClass?: string;
};

export type SpeedDialTriggerProps = ButtonProps & {
  icon?: Snippet;
  gradient?: boolean;
  name?: string;
  color?: GradientButtonProps["color"];
};

// spinner
export interface SpinnerProps extends SVGAttributes<SVGSVGElement> {
  color?: SpinnerVaraiants["color"];
  size?: SpinnerVaraiants["size"];
  currentFill?: string;
  currentColor?: string;
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

export interface TableHeadCellProps extends HTMLThAttributes {
  children?: Snippet;
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
  name: string | HTMLElement;
  src: string;
  alt: string;
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
  baseClass?: string;
  iconClass?: string;
  contentClass?: string;
  align?: boolean;
  params?: ParamsType;
  transition?: TransitionFunc;
}

// tooltip
export interface TooltipProps extends PopperProps {
  type?: "light" | "dark";
  color?: TooltipVariants["color"];
}

// typography
// anchor
export interface AnchorProps extends HTMLAnchorAttributes {
  children: Snippet;
  color?: AnchorVariants["color"];
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
export type EnhancedImgAttributes = Omit<HTMLImgAttributes, "src"> & { src: string | Picture };

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
