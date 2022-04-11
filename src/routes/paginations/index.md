---
layout: paginationLayout
---

<script lang="ts">
	import { Pagination, Previous, Next, TableData, Table, TableDefaultRow } from '$lib/index';
	import componentProps1 from '../props/Pagination.json'
  import componentProps2 from '../props/Previous.json'
	import componentProps3 from '../props/Next.json'
  import componentProps4 from '../props/TableData.json'
  export let items1 = componentProps1.props
  export let items2 = componentProps2.props
	export let items3 = componentProps3.props
  export let items4 = componentProps4.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

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

<h1 class="text-3xl w-full dark:text-white pt-16">Pagination Components</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Default pagination</h2>

<div
	class="container w-full flex justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
		>
  <Pagination {pages} on:previous={previous} on:next={next} />
</div>

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

<h2 class="text-2xl w-full dark:text-white py-8">Pagination with icons</h2>

<div
	class="container w-full flex justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
		>
  <Pagination {pages} on:previous={previous} on:next={next} icon />
</div>

```html
<Pagination {pages} on:previous={previous} on:next={next} icon />
```

<h2 class="text-2xl w-full dark:text-white py-8">Previous and next</h2>

<div
	class="container w-full flex justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
		>
  <Previous on:previous={previous} />
  <Next on:next={next} />
</div>

```html
<script>
  import { Previous, Next } from 'flowbite-svelte';
</script>

<Previous on:previous={previous} />
<Next on:next={next} />
```

<h2 class="text-2xl w-full dark:text-white py-8">Previous and next with icons</h2>

<div
	class="container w-full flex justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
		>
  <Previous on:previous={previous} icon />
  <Next on:next={next} icon />
</div>

```html
<Previous on:previous={previous} icon />
<Next on:next={next} icon />
```

<h2 class="text-2xl w-full dark:text-white py-8">Table data pagination</h2>

<div
	class="container w-full flex justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
		>

<TableData on:next={next} on:previous={previous} />
</div>

<div
	class="container w-full flex justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
		>

<TableData on:next={next} on:previous={previous} {helper}/>
</div>

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

<h2 class="text-2xl w-full dark:text-white py-8">Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<h3 class="text-xl w-full dark:text-white py-8">Pagination</h3>

<Table header={propHeader} {divClass} >
  <TableDefaultRow items={items1} rowState='hover' />
</Table>

<h3 class="text-xl w-full dark:text-white py-8">Previous</h3>

<Table header={propHeader} {divClass} >
  <TableDefaultRow items={items2} rowState='hover' />
</Table>

<h3 class="text-xl w-full dark:text-white py-8">Next</h3>

<Table header={propHeader} {divClass} >
  <TableDefaultRow items={items3} rowState='hover' />
</Table>

<h3 class="text-xl w-full dark:text-white py-8">TableData</h3>

<Table header={propHeader} {divClass} >
  <TableDefaultRow items={items4} rowState='hover' />
</Table>