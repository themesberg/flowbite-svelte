<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	interface Props {
		children: any;
		aClass?: string | undefined;
		href: string | undefined;
	}

	let { aClass, children, href } = $props<Props>();
	const aCls = 'block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white';
</script>

<li>
	{#if href}
		<a {href} class={twMerge(aCls, aClass)}>
			{@render children()}
		</a>
	{/if}
</li>
