import type { HTMLImgAttributes } from 'svelte/elements';
import type { Picture } from 'vite-imagetools';

type SizeType = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none' | 'xs' | 'full' | undefined;
type AlignmentType = 'left' | 'center' | 'right' | undefined;
type EffectType =
	| 'none'
	| 'grayscale'
	| 'blur'
	| 'invert'
	| 'sepia'
	| 'saturate'
	| 'hue-rotate'
	| undefined;
type ShadowType = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none' | 'regular' | 'inner' | undefined;
type RoundedType =
	| 'sm'
	| 'md'
	| 'lg'
	| 'xl'
	| '2xl'
	| 'full'
	| 'none'
	| 'regular'
	| '3xl'
	| undefined;

type EnhancedImgAttributes = Omit<HTMLImgAttributes, 'src'> & { src: string | Picture };

interface ImgProps extends HTMLImgAttributes {
	size?: SizeType;
	alignment?: AlignmentType;
	effect?: EffectType;
	shadow?: ShadowType;
	rounded?: RoundedType;
	caption?: string;
	imgClass?: string;
	figClass?: string;
	captionClass?: string;
	class?: string;
	href?: string;
}

interface EnhandedImgProps extends EnhancedImgAttributes {
	size?: SizeType;
	multiple?: boolean;
	transform?: string;
	alignment?: AlignmentType;
	effect?: EffectType;
	shadow?: ShadowType;
	rounded?: RoundedType;
	caption?: string;
	imgClass?: string;
	figClass?: string;
	captionClass?: string;
	class?: string;
	href?: string;
}

export { type ImgProps, type EnhandedImgProps };
