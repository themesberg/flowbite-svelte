import type { SvelteComponent } from 'svelte';

export interface ActivityType {
	title: HTMLElement | string;
	date: Date | string;
	src: string;
	alt: string;
	text?: HTMLElement | string;
}

export type AlignType = 'text-center' | 'text-left' | 'text-right';

export interface AuthFieldType {
	label: string;
	fieldtype: string;
	required?: boolean;
	placeholder?: string;
}

export type AuthFunctionType = () => Promise<void>;

export type ButtonType = 'button' | 'submit' | 'reset';

export type Buttontypes = 'blue' | 'blue-outline' | 'dark' | 'dark-outline' | 'light' | 'green' | 'green-outline' | 'red' | 'red-outline' | 'yellow' | 'yellow-outline' | 'purple' | 'purple-outline';

export type Buttonshadows = 'blue' | 'green' | 'cyan' | 'teal' | 'lime' | 'red' | 'pink' | 'purple';

export type CarouselIconType = {
	next: typeof SvelteComponent;
	prev: typeof SvelteComponent;
};

export interface CheckboxType {
	id: string;
	label: string;
	checked?: boolean;
	disabled?: boolean;
	helper?: string;
}

export type Colors = 'blue' | 'gray' | 'red' | 'yellow' | 'purple' | 'green' | 'indigo' | 'pink' | 'white' | 'custom';

export interface DotType {
	top?: boolean;
	color?: string;
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

export type drawerTransitionTypes =
	| 'fade'
	| 'fly'
	| 'slide'
	| 'blur'
	| 'in:fly'
	| 'out:fly'
	| 'in:slide'
	| 'out:slide'
	| 'in:fade'
	| 'out:fade'
	| 'in:blur'
	| 'out:blur'
	| undefined;

export interface DropdownType {
	name: string;
	href: string;
	divider?: boolean;
}

export type FormColorType = 'blue' | 'red' | 'green' | 'purple' | 'teal' | 'yellow' | 'orange'

export type Gradientduotones = 'purple2blue' | 'cyan2blue' | 'green2blue' | 'purple2pink' | 'pink2orange' | 'teal2lime' | 'red2yellow';

export interface GroupTimelineType {
	title: string | HTMLElement;
	src: string;
	alt: string;
	href?: string;
	isPrivate?: boolean;
	comment?: string | HTMLElement;
}

export interface IconType {
	name: typeof SvelteComponent;
	size?: number;
	color?: Colors;
	class?: string;
}
export interface IconTabType {
	name: typeof SvelteComponent;
	active: boolean;
	href: string;
	rel?: string;
	icon?: typeof SvelteComponent;
	iconSize?: number;
}

export type ImgType = {
	src: string;
	alt?: string;
};

export type InputType = 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'reset' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' | 'search';

export interface InteractiveTabType {
	name: string;
	id: number;
	active?: boolean,
	disabled?: boolean,
	icon?: typeof SvelteComponent,
	iconSize?: number,
	content: string | typeof SvelteComponent;
}


export interface ListGroupItemType {
	current?: boolean;
	disabled?: boolean;
	href?: string;
	[propName: string]: any;
}

export interface LinkType {
	name: string;
	href?: string;
	rel?: string;
	active?: boolean;
}

export interface ListCardType {
	img: ImgType;
	field1: string;
	field2?: string;
	field3?: string;
}

export interface NavbarType {
	name: string;
	href: string;
	rel?: string;
	child?: NavbarType[];
}

export interface PageType {
	pageNum: number;
	href: string;
}

export declare const xs = 'xs'
export declare const sm = 'sm'
export declare const md = 'md'
export declare const lg = 'lg'
export declare const xl = 'xl'
export declare type SizeType = typeof xs | typeof sm | typeof md | typeof lg | typeof xl;

export declare type FormSizeType = typeof sm | typeof md | typeof lg;

export interface PillTabType {
	name: string;
	selected: boolean;
	href: string;
}

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
}

export type SelectOptionType = {
	name: string | number;
	value: string | number;
};

export type SidebarType = {
	id: number;
	name: string;
	href?: string;
	icon?: typeof SvelteComponent;
	iconSize?: number;
	iconClass?: string;
	iconColor?: string;
	rel?: string;
	children?: SidebarType[];
	subtext?: HTMLElement;
};

export type SidebarCtaType = {
	label: string;
	text: HTMLElement;
};

export interface SiteType {
	name: string;
	href: string;
	img?: string;
}

export interface SocialMediaLinkType {
	parent: string;
	children?: LinkType[];
}

export interface SocialMediaType {
	href: string;
	icon: typeof SvelteComponent;
	iconSize?: number;
	iconClass?: string;
}

export interface TabHeadType {
	name: string;
	id: number;
}

export interface TabType {
	name: string;
	active: boolean;
	href: string;
	rel?: string;
}

export interface TableDataHelperType {
	start: number;
	end: number;
	total: number
}

export type Textsize = 'text-xs' | 'text-sm' | 'text-base' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl' | 'text-4xl';

export interface TimelineItemType {
	date: Date | string;
	title: string;
	icon?: typeof SvelteComponent;
	href?: string;
	linkname?: string;
	text?: HTMLElement | string;
}

export interface TimelineItemVerticalType {
	date: Date | string;
	title: string;
	icon?: typeof SvelteComponent;
	iconSize?: number;
	iconClass?: string;
	href?: string;
	linkname?: string;
	text?: HTMLElement | string;
}

export interface TimelineItemHorizontalType {
	date: Date | string;
	title: string;
	icon?: typeof SvelteComponent;
	iconSize?: number;
	iconClass?: string;
	text?: HTMLElement | string;
}

export type ToggleColorType = 'blue' | 'red' | 'green' | 'purple' | 'yellow' | 'teal' | 'orange';

export interface TransitionParamTypes {
	delay?: number;
	duration?: number;
	easing?: (t: number) => number;
	css?: (t: number, u: number) => string;
	tick?: (t: number, u: number) => void;
}

export type TransitionTypes = 'fade' | 'fly' | 'slide' | 'blur' | 'in:fly' | 'out:fly' | 'in:slide' | 'out:slide' | 'in:fade' | 'out:fade' | 'in:blur' | 'out:blur';
