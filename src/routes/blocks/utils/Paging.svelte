<script lang="ts">
	import { page } from '$app/state';
	import { PaginationItem } from 'flowbite-svelte';
	import ArrowLeft from './icons/ArrowLeft.svelte';
	import ArrowRight from './icons/ArrowRight.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();

	interface Post {
		meta: {
			layout: string;
			title: string;
			breadcrumb_title?: string; // Optional property with string type (might not exist in all posts)
			no_of_components: string;
			dir: string;
			// ... other properties in the meta object (add more if known)
		};
		path: string;
	}

	const {
		data,
		url,
		params: { slug }
	} = page;
	// two kinds of data. One from src/routes/+layout.js with posts
	// one from src/routes/applications(marketing, examples, publisher)/[slug]/+page.js content, title, dir
	// console.log('data.dir: ',data.dir)
	// console.log('data: ',data)

	const components = Object.values(data.posts as Post[])
		.flat()
		// .filter((x) => x.meta.dir === data.dir)
		.filter((x) => x.meta && x.meta.dir === data.dir)
		.map(({ path, meta }) => ({ path, name: meta.breadcrumb_title }));
	// console.log('components: ', components )

	const index = components.findIndex((x) => x.path === '/' + slug);
	// console.log('index: ', index)

	function sibling(next: boolean) {
		const i = next ? index + 1 : index - 1,
			{ path, name } = components[i],
			href = '' + new URL(path.slice(1), url);

		return { href, name };
	}
</script>

<div class="flex flex-col items-start gap-4 py-4">
	{#if index >= 1}
		<div class="flex flex-row justify-between gap-2.5 self-stretch">
			{#if index > 1}
				{@const { name, href } = sibling(false)}
				<PaginationItem {href} class="hover:text-primary-700 dark:hover:text-primary-700 flex  items-center  gap-2.5">
					<ArrowLeft />
					{name}
				</PaginationItem>
			{:else}
				<div></div>
			{/if}
			{#if children}
				<div class="hidden sm:block">
					{@render children()}
				</div>
			{/if}
			{#if index < components.length - 1}
				{@const { name, href } = sibling(true)}

				<PaginationItem {href} class="hover:text-primary-700 dark: dark:hover:text-primary-700 flex items-center gap-2.5">
					{name}
					<ArrowRight />
				</PaginationItem>
			{:else}
				<div></div>
			{/if}
		</div>
	{/if}
	{#if children}
		<div class="sm:hidden">
			{@render children()}
		</div>
	{/if}
</div>
