<script lang="ts">
	interface Props {
		children: any;
		divclass?: string | undefined;
		cols?: string | undefined;
		// gap?: number;
	}

	import { twMerge } from 'tailwind-merge';

	let { children, divclass, cols = 'grid-cols-1 sm:grid-cols-2', ...attributes } = $props<Props>();

	let classDiv = twMerge('grid', cols, divclass);
</script>

<div {...attributes} class={classDiv}>
	{@render children()}
</div>
