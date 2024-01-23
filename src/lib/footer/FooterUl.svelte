<script lang="ts">
	interface Props {
		children?: any;
		ulclass?: string | undefined;
	}

	import { twMerge } from 'tailwind-merge';

	let { ulclass, children, ...attributes } = $props<Props>();
</script>

<ul {...attributes} class={twMerge('text-gray-600 dark:text-gray-400', ulclass)}>
	{@render children()}
</ul>
