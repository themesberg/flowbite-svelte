import type {
	FooterProps,
	FooterBrandProps,
	FooterCopyrightProps,
	FooterIconProps,
	FooterUlProps,
	FooterLiProps
} from './type';
import Footer from './Footer.svelte';
import FooterBrand from './FooterBrand.svelte';
import FooterCopyright from './FooterCopyright.svelte';
import FooterIcon from './FooterIcon.svelte';
import FooterLi from './FooterLi.svelte';
import FooterUl from './FooterUl.svelte';
import { footer, footerBrand, footerCopyright, footerIcon, footerUl, footerLi } from './theme';

export {
	Footer,
	FooterBrand,
	FooterCopyright,
	FooterIcon,
	FooterLi,
	FooterUl,
	footer,
	footerBrand,
	footerCopyright,
	footerIcon,
	footerUl,
	footerLi,
	type FooterProps,
	type FooterBrandProps,
	type FooterCopyrightProps,
	type FooterIconProps,
	type FooterUlProps,
	type FooterLiProps
};
