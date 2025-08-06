<script lang="ts">
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
	interface Props {
		home?: string;
		category?: 'application' | 'marketing' | 'publisher' | undefined;
		title?: string;
		description?: string;
		breadcrumb_title?: string;
		headerClass?: string;
	}
	let { home = 'Blocks', category, title, description, breadcrumb_title, ...restProps }: Props = $props();

	let headerCls = breadcrumb_title ? '' : 'mx-auto max-w-8xl pt-8 px-4 lg:px-20 mx-auto max-w-8xl col-span-2 mb-2 lg:mb-0';
	let capitalized = $state();
	if (category !== undefined) {
		const [first, ...rest] = category;
		capitalized = `${first.toUpperCase()}${rest.join('')}`;
	}
	const allowedDirs = ['application', 'marketing', 'publisher'];
</script>

<section>
	<div class={headerCls}>
		<Breadcrumb class="mb-3 flex">
			<BreadcrumbItem href="/blocks" home>{home}</BreadcrumbItem>
			{#if category && allowedDirs.includes(category)}
				<BreadcrumbItem href="/blocks/{category}">{capitalized} UI</BreadcrumbItem>
			{/if}
			{#if breadcrumb_title}
				<BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
			{/if}
		</Breadcrumb>
		<h1 class="mb-2 inline-block text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
			{title}
		</h1>
		<p class="text-lg text-gray-500 lg:mb-0 dark:text-gray-400">
			{description}
		</p>
	</div>
</section>
