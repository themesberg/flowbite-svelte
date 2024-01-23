<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	interface Props {
		children: any;
		aclass?: string | undefined;
		href?: string | undefined;
	}

	let { aclass, children, href, ...attributes } = $props<Props>();
	const aCls = 'block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white';
</script>

<li>
	{#if href}
		<a {href} class={twMerge(aCls, aclass)} {...attributes}>
			{@render children()}
		</a>
	{/if}
</li>
