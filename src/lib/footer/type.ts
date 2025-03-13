import type { Snippet } from 'svelte';
import type { HTMLAttributes, HTMLAnchorAttributes } from 'svelte/elements';

type FooterType = 'default' | 'sticky' | 'sitemap' | 'socialmedia' | 'logo' | undefined;
interface FooterProps extends HTMLAttributes<HTMLElement> {
	children: Snippet;
	footerType?: FooterType;
	class?: string;
}

interface FooterBrandProps extends HTMLAnchorAttributes {
	children?: Snippet;
	aClass?: string;
	spanClass?: string;
	imgClass?: string;
	href?: string;
	src?: string;
	alt?: string;
	name?: string;
}

interface FooterCopyrightProps extends HTMLAnchorAttributes {
	spanClass?: string;
	aClass?: string;
	href?: string;
	by?: string;
	copyrightMessage?: string;
	year?: number | undefined;
}

interface FooterIconProps extends HTMLAnchorAttributes {
	children: Snippet;
	href?: string;
	ariaLabel?: string;
	class?: string;
}

interface FooterUlProps extends HTMLAttributes<HTMLUListElement> {
	children: Snippet;
	class?: string;
}

interface FooterLiProps extends HTMLAnchorAttributes {
	children: Snippet;
	liClass?: string;
	aClass?: string;
	href?: string;
}

export {
	type FooterProps,
	type FooterBrandProps,
	type FooterCopyrightProps,
	type FooterIconProps,
	type FooterUlProps,
	type FooterLiProps
};
