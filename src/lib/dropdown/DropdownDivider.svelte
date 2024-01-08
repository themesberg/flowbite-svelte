<script lang="ts">
	interface Props {
		class?: string | undefined;
	}

	import { twMerge } from 'tailwind-merge';
	let { class: classname, ...attributes } = $props<Props>();
</script>

<div {...attributes} class={twMerge('my-1 h-px bg-gray-100 dark:bg-gray-600', classname)} />
