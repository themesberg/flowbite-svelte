<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	interface Props {
		children: any;
		divclass?: string;
		div2class?: string;
		div3class?: string;
		div4class?: string;
	}
	let { children, divclass, div2class, div3class, div4class } = $props<Props>();

	const inner: string = 'rounded-xl overflow-hidden h-[140px] md:h-[262px]';
	const bot: string =
		'relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]';
	const botUnder: string =
		'relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]';
	const div: string =
		'relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]';
</script>

<div class={twMerge(div, divclass)}>
	<div class={twMerge(inner, div2class)}>
		{@render children()}
	</div>
</div>
<div class={twMerge(bot, div3class)} />
<div class={twMerge(botUnder, div4class)} />
