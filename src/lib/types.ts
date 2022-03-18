import type { SvelteComponent } from 'svelte';

export type Colors = 'blue' | 'gray' | 'red' | 'yellow' | 'purple' | 'green' | 'indigo' | 'pink';

export type Buttontypes = 'blue' | 'blue-outline' | 'dark' | 'dark-outline' | 'light' | 'green' | 'green-outline' | 'red' | 'red-outline' | 'yellow' | 'yellow-outline' | 'purple' | 'purple-outline';

export type Buttonshadows = 'blue' | 'green' | 'cyan' | 'teal' | 'lime' | 'red' | 'pink' | 'purple';

export type Gradientduotones = 'purple2blue' | 'cyan2blue' | 'green2blue' | 'purple2pink' | 'pink2orange' | 'teal2lime' | 'red2yellow'

export type Textsize = 'text-xs' | 'text-sm' | 'text-base' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl' | 'text-4xl'

export interface ButtonGroupType {
    name: string;
    href?: string;
    rel?: string;
    icon?: typeof SvelteComponent;
}

export type CardButtonType = {
    textSize?: Textsize;
    name: string;
    type?: Buttontypes;
    href?: string;
    rel?: string;
    rounded?: boolean;
};

export type ImgType = {
    src: string;
    alt?: string;
}

export interface LinkType {
    name: string;
    href: string;
    rel?: string;
}

export interface SiteType {
    name: string;
    href: string;
    img?: string;
}

export interface SocialMediaType {
    href: string;
    icon: typeof SvelteComponent;
}

export type AlignType = 'text-center' | 'text-left' | 'text-right'

export interface TabType {
    name: string;
    active: boolean;
    href: string,
    rel?: string,
}

export interface InteractiveTabType {
    name: string;
    id: number;
    content: string;
}

export interface PillTabType {
    name: string;
    selected: boolean;
    href: string;
}

export interface NavbarType {
    id: number;
    name: string;
    href: string;
    rel?: string;
    child?: NavbarType[];
}

export interface SocialMediaLinkType {
    parent: string;
	children?: LinkType[]
}

export interface DropdownType {
    name: string;
    href: string;
    divider: boolean;
}

export interface ListCardType {
    img: ImgType;
    field1: string;
    field2?: string;
    field3?: string;
}

export type AuthFunctionType = () => Promise<void>;

export type ButtonType = 'button' | 'submit' | 'reset'

export interface AuthFieldType {
    label: string;
    fieldtype: string;
    required?: boolean;
    placeholder?: string;
}