---
layout: typographyLayout
---

<script>
	import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
	import { Breadcrumb, BreadcrumbItem, CloseButton, Label, Checkbox, Heading } from '$lib';
	
  export let visible = true;

	import componentProps from '../props/CloseButton.json'
	import componentProps2 from '../props/Label.json'
  // Props table
  let items = componentProps.props
	let items2 = componentProps2.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
	let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb class="pb-8">
	<BreadcrumbItem href="/" home >Home</BreadcrumbItem>
	<BreadcrumbItem>Utilities</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">Utilities</Heading>



<CompoDescription>The following components are used throughout the library and you can use them for your app as well</CompoDescription>

<ExampleDiv>
<GitHubSource href="utils/CloseButton.svelte">CloseButton</GitHubSource>
<GitHubSource href="forms/Label.svelte">Label</GitHubSource>
</ExampleDiv>

<Htwo label="CloseButton" />

Use `CloseButton` component to close a component.

<ExampleDiv>
{#if visible}
<div id="banner" tabindex="-1" class="flex z-50 gap-8 justify-between items-start py-3 px-4 w-full bg-gray-50 border border-b border-gray-200 sm:items-center dark:border-gray-700 lg:py-4 dark:bg-gray-800">
    <p class="text-sm font-light text-gray-500 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, ipsa culpa ea laudantium earum quis? Neque unde aliquam enim, distinctio repellendus delectus? Illo numquam ex fugit dolor esse, cumque nesciunt?</p>
    <CloseButton
				on:click={() => (visible = false)}
				class="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
			/>
  </div>
{/if}
</ExampleDiv>

```html
{#if visible}
<div id="banner" tabindex="-1" class="flex z-50 gap-8 justify-between items-start py-3 px-4 w-full bg-gray-50 border border-b border-gray-200 sm:items-center dark:border-gray-700 lg:py-4 dark:bg-gray-800">
    <p class="text-sm font-light text-gray-500 dark:text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, ipsa culpa ea laudantium earum quis? Neque unde aliquam enim, distinctio repellendus delectus? Illo numquam ex fugit dolor esse, cumque nesciunt?</p>
    <CloseButton
				on:click={() => (visible = false)}
				class="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 dark:hover:bg-gray-600 dark:hover:text-white"
			/>
  </div>
{/if}
```

<Htwo label="Label" />

Use the `Label` component when you need to add a label.

<ExampleDiv>
<Label color='red' class="mt-4 flex items-center font-bold italic">
	 <Checkbox class="mr-2"/> Your Label
</Label>
</ExampleDiv>

```html
<Label color='red' class="mt-4 flex items-center font-bold italic">
	<Checkbox class="mr-2"/> Your Label
</Label>
```


<Htwo label="Props" />

The component has the following props, type, and default values. See <a href="/pages/types">types page</a> for type information.

<h3 class='text-xl w-full dark:text-white py-4'>CloseButton</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>Label</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>