import type { Snippet } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

type DecorationType = 'none' | 'solid' | 'double' | 'dotted' | 'dashed' | 'wavy' | undefined;
type GradientType =
	| 'skyToEmerald'
	| 'purpleToBlue'
	| 'pinkToOrange'
	| 'tealToLime'
	| 'redToYellow'
	| 'indigoToCyan'
	| 'fuchsiaToRose'
	| 'amberToEmerald'
	| 'violetToRed'
	| 'blueToGreen'
	| 'orangeToPurple'
	| 'yellowToRed'
	| 'none'
	| undefined;
type HighlightType =
	| 'none'
	| 'blue'
	| 'green'
	| 'red'
	| 'yellow'
	| 'purple'
	| 'pink'
	| 'indigo'
	| 'teal'
	| 'orange'
	| 'cyan'
	| 'fuchsia'
	| 'amber'
	| 'lime'
	| undefined;
type DecorationColorType =
	| 'none'
	| 'blue'
	| 'green'
	| 'red'
	| 'yellow'
	| 'purple'
	| 'pink'
	| 'indigo'
	| 'teal'
	| 'orange'
	| 'cyan'
	| 'fuchsia'
	| 'lime'
	| 'primary'
	| 'secondary'
	| 'gray'
	| 'emerald'
	| 'sky'
	| 'violet'
	| 'rose'
	| undefined;
type DecorationThicknessType = '1' | '2' | '4' | '8' | '0' | undefined;

interface SpanProps extends HTMLAttributes<HTMLSpanElement> {
	children?: Snippet;
	italic?: boolean;
	underline?: boolean;
	linethrough?: boolean;
	uppercase?: boolean;
	gradient?: GradientType;
	highlight?: HighlightType;
	class?: string;
	decoration?: DecorationType;
	decorationThickness?: DecorationThicknessType;
	decorationColor?: DecorationColorType;
}

export { type SpanProps };
