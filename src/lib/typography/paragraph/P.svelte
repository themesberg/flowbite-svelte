<script lang="ts">
	import { type ParagraphProps as Props, paragraph } from './index';

	let {
		children,
		class: className = 'text-gray-900 dark:text-white',
		height = 'normal',
		align = 'left',
		justify = false,
		italic,
		firstUpper = false,
		whitespace = 'normal',
		size = 'base',
		space = 'normal',
		weight = 'normal',
		...restProps
	}: Props = $props();

	let classP = $derived(
		paragraph({
			height,
			size,
			weight,
			space,
			align,
			justify,
			italic,
			firstUpper,
			whitespace,
			className
		})
	);
</script>

<p {...restProps} class={classP}>
	{@render children()}
</p>

