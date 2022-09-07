---
layout: componentLayout
---

<script lang="ts">
	import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
	import { Pagination, Previous, Next, TableData, Breadcrumb, BreadcrumbItem, Badge, Heading, P, A } from '$lib'
  ;
	
	import componentProps1 from '../props/Pagination.json'
  import componentProps2 from '../props/Previous.json'
	import componentProps3 from '../props/Next.json'
  import componentProps4 from '../props/TableData.json'
  let items1 = componentProps1.props
  let items2 = componentProps2.props
	let items3 = componentProps3.props
  let items4 = componentProps4.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

	let pages = [
		{
			pageNum: 1,
			href: '/'
		},
		{
			pageNum: 2,
			href: '/'
		},
		{
			pageNum: 3,
			href: '/'
		},
		{
			pageNum: 4,
			href: '/'
		},
		{
			pageNum: 5,
			href: '/'
		}
	];
	const previous = () => {
		alert('Previous btn clicked. Make a call to your server to fetch data.');
	};
	const next = () => {
		alert('Next btn clicked. Make a call to your server to fetch data.');
	};
  let helper = {
    start: 1,
    end: 10,
    total: 100
  }

</script>

<Breadcrumb class="pb-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>Components</BreadcrumbItem>
  <BreadcrumbItem>Pagination</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">Pagination</Heading>

<CompoDescription>Use the Tailwind CSS pagination element to indicate a series of content across various pages</CompoDescription>

<ExampleDiv>
<GitHubSource href="pagination/Pagination.svelte">Pagination</GitHubSource>
<GitHubSource href="pagination/Previous.svelte">Previous</GitHubSource>
<GitHubSource href="pagination/Next.svelte">Next</GitHubSource>
</ExampleDiv>

The pagination component can be used to navigate across a series of content and data sets for various pages such as blog posts, products, and more. You can use multiple variants of this component with or without icons and even for paginating table data entries.

<Htwo label="Setup" />

```html
<script>
  import { Pagination, Previous, Next } from 'flowbite-svelte'
</script>
```

<Htwo label="Default pagination" />

Use the following list of pagination items to indicate a series of content for your website.

<ExampleDiv class="flex justify-center">
  <Pagination {pages} on:previous={previous} on:next={next} />
</ExampleDiv>

```html
<script lang="ts">
	import { Pagination } from 'flowbite-svelte';
	let pages = [
		{
			pageNum: 1,
			href: '/'
		},
		{
			pageNum: 2,
			href: '/'
		},
		{
			pageNum: 3,
			href: '/'
		},
		{
			pageNum: 4,
			href: '/'
		},
		{
			pageNum: 5,
			href: '/'
		}
	];
	const previous = () => {
		alert('Previous btn clicked. Make a call to your server to fetch data.');
	};
	const next = () => {
		alert('Next btn clicked. Make a call to your server to fetch data.');
	};
</script>

<Pagination {pages} on:previous={previous} on:next={next} />
```

<Htwo label="Pagination with icons" />

The following pagination component example shows how you can use SVG icons instead of text to show the previous and next pages.

<ExampleDiv class="flex justify-center">
  <Pagination {pages} on:previous={previous} on:next={next} icon />
</ExampleDiv>

```html
<Pagination {pages} on:previous={previous} on:next={next} icon />
```

<Htwo label="Previous and next" />

Use the following markup to show simple previous and next elements.

<ExampleDiv class="flex justify-center">
  <Previous on:previous={previous} />
  <Next on:next={next} />
</ExampleDiv>

```html
<script>
  import { Previous, Next } from 'flowbite-svelte';
</script>

<Previous on:previous={previous} />
<Next on:next={next} />
```

<Htwo label="Previous and next with icons" />

Use the following code to show simple previous and next elements with icons.

<ExampleDiv class="flex justify-center">
  <Previous on:previous={previous} icon />
  <Next on:next={next} icon />
</ExampleDiv>

```html
<Previous on:previous={previous} icon />
<Next on:next={next} icon />
```

<Htwo label="Table data pagination" />

You can use the following markup to show the number of data shown inside a table element and also the previous and next action buttons.

<ExampleDiv class="flex justify-center">
<TableData on:next={next} on:previous={previous} />
</ExampleDiv>

```html
<TableData on:next={next} on:previous={previous} />
```

<Htwo label="Table data pagination with icons" />

You can use the following code to show the number of data shown inside a table element and also the previous and next action buttons coupled with icons.

<ExampleDiv class="flex justify-center">
<TableData on:next={next} on:previous={previous} {helper}/>
</ExampleDiv>

```html
<script>
    let helper = {
    start: 1,
    end: 10,
    total: 100
  }
</script>

<TableData on:next={next} on:previous={previous} {helper}/>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<h3 class='text-xl w-full dark:text-white py-4'>Pagination</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items1} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>Previous</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>Next</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items3} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>TableData</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items4} rowState='hover' />
</TableProp>

<Htwo label="Forwarded Events" />

<Heading tag="h3" customSize="text-xl font-semibold" class="mb-4">Next, Pagination, Previous, TableData</Heading>

<div class="flex flex-wrap gap-2">
<Badge large={true}>on:blur</Badge>
<Badge large={true}>on:click</Badge>
<Badge large={true}>on:focus</Badge>
<Badge large={true}>on:keydown</Badge>
<Badge large={true}>on:keypress</Badge>
<Badge large={true}>on:keyup</Badge>
<Badge large={true}>on:mouseenter</Badge>
<Badge large={true}>on:mouseleave</Badge>
<Badge large={true}>on:mouseover</Badge>
</div>

<Htwo label="References" />

<P>
	<A href="https://flowbite.com/docs/components/pagination/" target="_blank" class="link"
		>Flowbite Pagination</A
	>
</P>
