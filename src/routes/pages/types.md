---
layout: pageLayout
dir: Pages
title: Types
---

<script>
  import { Breadcrumb, BreadcrumbItem, Heading, A } from '$lib'
  
</script>

<Breadcrumb class="pb-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

```js
import type { SvelteComponent } from 'svelte';

export type AccordionIconType = {
	up: typeof SvelteComponent;
	down: typeof SvelteComponent;
};

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

export interface AvatarType {
	src?: string;
	alt?: string;
	size?: number;
	border?: boolean;
	round?: boolean;
	header?: string;
	text?: string;
}

export interface ButtonGroupType {
	name: string;
	href?: string;
	rel?: string;
	icon?: typeof SvelteComponent;
	iconSize?: number;
	iconClass?: string;
}

export type ButtonType = 'button' | 'submit' | 'reset';

export type Buttontypes = 'blue' | 'blue-outline' | 'dark' | 'dark-outline' | 'light' | 'green' | 'green-outline' | 'red' | 'red-outline' | 'yellow' | 'yellow-outline' | 'purple' | 'purple-outline';

export type Buttonshadows = 'blue' | 'green' | 'cyan' | 'teal' | 'lime' | 'red' | 'pink' | 'purple';

export type CardButtonType = {
	textSize?: Textsize;
	name: string;
	type?: Buttontypes;
	href?: string;
	rel?: string;
	rounded?: boolean;
};

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

export type Colors = 'blue' | 'gray' | 'red' | 'yellow' | 'purple' | 'green' | 'indigo' | 'pink' | 'white'| 'custom';

export type CrumbType = {
	label: string;
	href: string;
};

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

export type DropdownColorType = 'blue' | 'blue-outline' | 'dark' | 'dark-outline' | 'light' | 'green' | 'green-outline' | 'red' | 'red-outline' | 'yellow' | 'yellow-outline' | 'purple' | 'purple-outline';

export interface DropdownType {
	name: string;
	href: string;
	divider?: boolean;
}

export type FormColorType = 'blue'|'red'|'green'|'purple'|'teal'|'yellow'|'orange'

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

export type InputType = 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' |  'reset' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week';

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
	href: string;
	rel?: string;
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
export declare type Size = typeof xs | typeof sm | typeof md | typeof lg | typeof xl;

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
	name: string;
	value: string;
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

export type ToggleColorType = 'blue'|'red'|'green'|'purple'|'yellow'|'teal'|'orange';

export interface TransitionParamTypes {
	delay?: number;
	duration?: number;
	easing?: (t: number) => number;
	css?: (t: number, u: number) => string;
	tick?: (t: number, u: number) => void;
}

export type TransitionTypes = 'fade' | 'fly' | 'slide' | 'blur' | 'in:fly' | 'out:fly' | 'in:slide' | 'out:slide' | 'in:fade' | 'out:fade' | 'in:blur' | 'out:blur';
```