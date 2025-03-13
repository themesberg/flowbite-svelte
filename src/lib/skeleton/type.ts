import type { HTMLAttributes } from 'svelte/elements';

type CardSizeType = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | undefined;
interface CardPlaceholderProps extends HTMLAttributes<HTMLDivElement> {
	size?: CardSizeType;
	class?: string;
}

type SizeImageType = 'sm' | 'md' | 'lg' | undefined;
type RoundedType = 'sm' | 'md' | 'lg' | 'none' | 'full' | undefined;

interface ImagePlaceholderProps extends HTMLAttributes<HTMLDivElement> {
	size?: SizeImageType;
	rounded?: RoundedType;
	class?: string;
}

type SizeListType = 'sm' | 'md' | 'lg' | undefined;
type RoundedListType = 'sm' | 'md' | 'lg' | 'none' | 'full' | undefined;

interface ListPlaceholderProps extends HTMLAttributes<HTMLDivElement> {
	itemNumber?: number;
	size?: SizeListType;
	rounded?: RoundedListType;
	class?: string;
}

type SizeSkeletonType = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | undefined;

interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
	size?: SizeSkeletonType;
	class?: string;
}

type SizeTextType = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | undefined;

interface TextPlaceholderProps extends HTMLAttributes<HTMLDivElement> {
	size?: SizeTextType;
	class?: string;
}

type SizeVideoType = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | undefined;

interface VideoPlaceholderProps extends HTMLAttributes<HTMLDivElement> {
	size?: SizeVideoType;
	class?: string;
}

export type {
	CardPlaceholderProps,
	ImagePlaceholderProps,
	ListPlaceholderProps,
	SkeletonProps,
	TextPlaceholderProps,
	VideoPlaceholderProps,
	SizeVideoType
};
