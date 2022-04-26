---
layout: cardLayout
---

<script>
  import { HorizontalCard, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/HorizontalCard.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'


  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Cards',
      href:'/cards/'
    },
    {
      label:'Horizontal card',
      href:'/cards/horizontal'
    },
  ]
</script>

<Breadcrumb {crumbs}/>


<h1 class="text-3xl w-full dark:text-white py-8">Horizontal Card</h1>

<h2 class="text-2xl w-full dark:text-white py-4">Set up</h2>

```html
<script>
  import { HorizontalCard } from "flowbite-svelte";
</script>
```

<h2 class="text-2xl w-full dark:text-white py-4">Examples</h2>

```html
<HorizontalCard
  img="/images/image-4.jpeg"
  header="Horizontal card"
  link="/"
>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam sint,iam.
</HorizontalCard>
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <HorizontalCard
    img="/images/image-4.jpeg"
    header="Horizontal card"
    link="/"
  >
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam sint,iam
    quos sed rem provident, aspernatur sunt illum eum ipsam quas. Sed ipsum ex
    non.
  </HorizontalCard>
</div>

```html
<HorizontalCard>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam sint.
</HorizontalCard>
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <HorizontalCard>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam sint,iam
    quos sed rem provident, a
  </HorizontalCard>
</div>

<h2 class="text-2xl w-full dark:text-white py-4">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>


<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>