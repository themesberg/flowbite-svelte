<script lang="ts">
	import { Button, Select } from 'flowbite-svelte';
	import type { PageData } from '../../$types';
	import CompoCard from './CompoCard.svelte';
	import Section from './Section.svelte';
	import { TableSearch } from 'flowbite-svelte';
	import type { Snippet } from 'svelte';

	interface Post {
		meta: {
			layout: string;
			title: string;
			breadcrumb_title?: string;
			no_of_components: string;
			dir: string;
			description?: string;
		};
		path: string;
	}

	interface Props {
		header?: Snippet;
		data: PageData;
		section?: string;
	}

	let { header, data, section }: Props = $props();
	let searchTerm = $state('');
	let expanded = $state(true);
	const INIT_COUNT = 18;

	const sectionPosts = $derived(section !== undefined ? data.posts.blocks[section] : Object.values(data.posts.blocks).flat());
	$inspect('sectionPosts',sectionPosts)

	const searchTermLower = $derived(searchTerm.toLowerCase());

	const components = $derived(
		sectionPosts.filter((post: Post) => {
			if (!post.meta || !post.meta.breadcrumb_title) return false;

			const breadcrumbTitleLower = post.meta.breadcrumb_title.toLowerCase();
			const pathDoesNotIncludePage = post.path.indexOf('/+page') === -1;
			const breadcrumbTitleIncludesSearchTerm = breadcrumbTitleLower.includes(searchTermLower);

			return breadcrumbTitleIncludesSearchTerm && pathDoesNotIncludePage;
		})
	);

	let selected = $state("");
	let blockCategories = [
    { value: "application", name: "Application" },
    { value: "marketing", name: "Marketing" },
    { value: "publisher", name: "Publisher" },
    { value: "example", name: "Example" }
  ];
</script>

<Section class="max-w-8xl mx-auto">
	<div class="w-full mb-6">
	<TableSearch placeholder="Search by name" hoverable={true} bind:inputValue={searchTerm} classes={{ table:"flex flex-col items-center justify-between p-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 sm:flex-row"}}>
	<Select class="inline w-24" items={blockCategories} bind:value={selected} />
	</TableSearch>
	</div>

	{#if header}
		{@render header()}
	{/if}

	<div class="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
		{#each components.slice(0, INIT_COUNT) as { path, meta: { dir, breadcrumb_title, no_of_components } } (dir + path)}
			<CompoCard name={breadcrumb_title} dir={"blocks/"+dir} {path} />
		{/each}
		{#if expanded}
			{#each components.slice(INIT_COUNT) as { path, meta: { dir, breadcrumb_title, no_of_components } } (dir + path)}
				<CompoCard name={breadcrumb_title} dir={"blocks/"+dir} {path} />
			{/each}
		{/if}
	</div>

	{#if !expanded && components.length > INIT_COUNT}
		<div class="mb-4 flex w-full justify-center">
			<Button size="md" class="hover:text-primary-600 focus:text-primary-600 whitespace-nowrap" color="alternative" onclick={() => (expanded = true)}>View all components</Button>
		</div>
	{/if}
</Section>
