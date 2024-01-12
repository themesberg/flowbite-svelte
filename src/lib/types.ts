export declare const xs = 'xs';
export declare const sm = 'sm';
export declare const md = 'md';
export declare const lg = 'lg';
export declare const xl = 'xl';
export declare type SizeType = typeof xs | typeof sm | typeof md | typeof lg | typeof xl;

export type TransitionTypes =
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
	| 'out:blur';
export interface TransitionParamTypes {
	delay?: number;
	duration?: number;
	easing?: (t: number) => number;
	css?: (t: number, u: number) => string;
	tick?: (t: number, u: number) => void;
}
