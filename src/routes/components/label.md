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
	import { Breadcrumb, BreadcrumbItem, CloseButton, Label, Checkbox,  Heading, A } from '$lib';

	import componentProps from '../../props/Label.json';
	// Props table
	let items = componentProps.props;
	let propHeader = ['Name', 'Type', 'Default'];
	let divClass = 'w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4';
	let theadClass = 'text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white';
</script>

<Breadcrumb class="pb-8">
	<BreadcrumbItem href="/" home >Home</BreadcrumbItem>
	<BreadcrumbItem>Utilities</BreadcrumbItem>
	<BreadcrumbItem>Label</BreadcrumbItem>
</Breadcrumb>

<Heading class="w-full mb-2" tag="h1" customSize="text-3xl">Label</Heading>

<CompoDescription
	>The Label components are used throughout the library and you can use it for your app as well</CompoDescription
>

<ExampleDiv>
	<GitHubSource href="forms/Label.svelte">Label</GitHubSource>
</ExampleDiv>

<Htwo label="Label" />

Use the `Label` component when you need to add a label.

<ExampleDiv>
	<Label color="red" class="mt-4 flex items-center font-bold italic">
		<Checkbox class="mr-2" /> Your Label
	</Label>
</ExampleDiv>

```html
<Label color="red" class="mt-4 flex items-center font-bold italic">
	<Checkbox class="mr-2" /> Your Label
</Label>
```

<Htwo label="Props" />

The component has the following props, type, and default values. 
See <A class="hover:underline" href="/pages/types">the types page</A>
for type information.

<TableProp header={propHeader} {divClass} {theadClass}>
	<TableDefaultRow {items} rowState="hover" />
</TableProp>
