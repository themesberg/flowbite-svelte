---
layout: utilitiesLayout
---

<script>
	import {
		Htwo,
		ExampleDiv,
		GitHubSource,
		CompoDescription,
		TableProp,
		TableDefaultRow
	} from '../../utils';
	import { Breadcrumb, BreadcrumbItem, CloseButton, Label, Checkbox, Home, Heading, A } from '$lib';
	export let visible = true;

	import componentProps from '../../props/CloseButton.json';
	// Props table
	let items = componentProps.props;
	let propHeader = ['Name', 'Type', 'Default'];
	let divClass = 'w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4';
	let theadClass = 'text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white';
</script>


<Breadcrumb class="pb-8">
	<BreadcrumbItem href="/" home >Home</BreadcrumbItem>
	<BreadcrumbItem>Utilities</BreadcrumbItem>
	<BreadcrumbItem>CloseButton</BreadcrumbItem>
</Breadcrumb>

<Heading class="w-full mb-2" tag="h1" customSize="text-3xl">CloseButton</Heading>

<CompoDescription>
The CloseButton components are used throughout the library and you can use it for your app as well
</CompoDescription>

<ExampleDiv>
	<GitHubSource href="utils/CloseButton.svelte">CloseButton</GitHubSource>
</ExampleDiv>

<Htwo label="CloseButton" />

Use `CloseButton` component to close a component.

<ExampleDiv>
	{#if visible}
		<div
			id="banner"
			tabindex="-1"
			class="flex z-50 gap-8 justify-between items-start py-3 px-4 w-full bg-gray-50 border border-b border-gray-200 sm:items-center dark:border-gray-700 lg:py-4 dark:bg-gray-800"
		>
			<p class="text-sm font-light text-gray-500 dark:text-gray-400">
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, ipsa culpa ea laudantium
				earum quis? Neque unde aliquam enim, distinctio repellendus delectus? Illo numquam ex fugit
				dolor esse, cumque nesciunt?
			</p>
			<CloseButton
				on:click={() => (visible = false)}
				class="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
			/>
		</div>
	{/if}
</ExampleDiv>

```html
{#if visible}
	<div
		id="banner"
		tabindex="-1"
		class="flex z-50 gap-8 justify-between items-start py-3 px-4 w-full bg-gray-50 border border-b border-gray-200 sm:items-center dark:border-gray-700 lg:py-4 dark:bg-gray-800"
	>
		<p class="text-sm font-light text-gray-500 dark:text-gray-400">
			Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, ipsa culpa ea laudantium
			earum quis? Neque unde aliquam enim, distinctio repellendus delectus? Illo numquam ex fugit
			dolor esse, cumque nesciunt?
		</p>
		<CloseButton
			on:click={() => (visible = false)}
			class="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
		/>
	</div>
{/if}
```

<Htwo label="Props" />

The component has the following props, type, and default values. 
See <A class="hover:underline" href="/pages/types">the types page</A>
for type information.

<TableProp header={propHeader} {divClass} {theadClass}>
	<TableDefaultRow {items} rowState="hover" />
</TableProp>
