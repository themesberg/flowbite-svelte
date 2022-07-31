---
layout: paginationLayout
---

<script lang="ts">
	import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import GitHubSource from '../utils/GitHubSource.svelte'
	import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
	import { Pagination, Previous, Next, TableData, Breadcrumb, BreadcrumbItem } from '$lib/index'
  import { Home } from 'svelte-heros';
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

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Pagination',
      href:'/paginations/'
    }
  ]
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Pagination</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Pagination</h1>

<Htwo label="Default pagination" />

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

<ExampleDiv class="flex justify-center">
  <Pagination {pages} on:previous={previous} on:next={next} icon />
</ExampleDiv>

```html
<Pagination {pages} on:previous={previous} on:next={next} icon />
```

<Htwo label="Previous and next" />

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

<ExampleDiv class="flex justify-center">
  <Previous on:previous={previous} icon />
  <Next on:next={next} icon />
</ExampleDiv>

```html
<Previous on:previous={previous} icon />
<Next on:next={next} icon />
```

<Htwo label="Table data pagination" />

<ExampleDiv class="flex justify-center">
<TableData on:next={next} on:previous={previous} />
</ExampleDiv>

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

<TableData on:next={next} on:previous={previous} />
<TableData on:next={next} on:previous={previous} {helper}/>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<h3>Pagination</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items1} rowState='hover' />
</TableProp>

<h3>Previous</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

<h3>Next</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items3} rowState='hover' />
</TableProp>

<h3>TableData</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items4} rowState='hover' />
</TableProp>