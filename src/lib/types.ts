import type { SvelteComponent } from 'svelte';

export type Colors = 'blue' | 'gray' | 'red' | 'yellow' | 'purple' | 'green' | 'indigo' | 'pink';

export type Buttontypes = 'blue' | 'blue-outline' | 'dark' | 'dark-outline' | 'light' | 'green' | 'green-outline' | 'red' | 'red-outline' | 'yellow' | 'yellow-outline' | 'purple' | 'purple-outline';

export type Buttonshadows = 'blue' | 'green' | 'cyan' | 'teal' | 'lime' | 'red' | 'pink' | 'purple';

export type Gradientduotones = 'purple2blue' | 'cyan2blue' | 'green2blue' | 'purple2pink' | 'pink2orange' | 'teal2lime' | 'red2yellow'

export type Textsize = 'text-xs' | 'text-sm' | 'text-base' | 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl' | 'text-4xl'

export interface ButtonGroupType {
    name: string;
    link?: string;
    rel?: string;
    icon?: typeof SvelteComponent;
}

export type CardButtonType = {
    textSize?: Textsize;
    name: string;
    type?: Buttontypes;
    link?: string;
    rel?: string;
    rounded?: boolean;
};

export type ImgType = {
    src: string;
    alt?: string;
}

export interface LinkType {
    name: string;
    link: string;
    rel?: string;
}

export interface SiteType {
    name: string;
    link: string;
}

export interface SocialMediaType {
    link: string;
    icon: typeof SvelteComponent;
}

export type AlignType = 'text-center' | 'text-left' | 'text-right'

export interface TabType {
    name: string;
    active: boolean;
    link: string,
    rel?: string,
}

export interface InteractiveTabType {
    label: string;
    id: number;
    content: string;
}

export interface PillTabType {
    name: string;
    selected: boolean;
    link: string;
}

export interface NavbarType {
    id: number;
    name: string;
    link: string;
    rel?: string;
    child?: NavbarType[];
}

export interface DropdownLinkType {
    label: string;
    href: string;
    rel?: string;
}