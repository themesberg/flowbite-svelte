---
layout: progressbarLayout
---

<script>
	import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import GitHubSource from '../utils/GitHubSource.svelte'
  import CompoDescription from '../utils/CompoDescription.svelte'
	import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Progressbar, Breadcrumb, BreadcrumbItem } from "$lib/index"
	import { Home } from 'svelte-heros'
	import componentProps from '../props/Progressbar.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Progress bar',
      href:'/progressbars/'
    }
  ]
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Progress bar</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Progress</h1>

<p>Import the `Progressbar` component in a script tag.</p>

```html
<script>
	import { Progressbar } from 'flowbite-svelte'
</script>
```

<Htwo label="Default progress bar" />

<p>Use the following example of a progress bar element to show a completion rate of 45% by using an inline style and the utility classes from Tailwind CSS.</p>

<ExampleDiv>
<Progressbar progress="50" />
</ExampleDiv>

```html
<Progressbar progress="50" />
```

<Htwo label="Sizes" />

<p>Use the `size` prop to change the size of a progress bar.</p>

<ExampleDiv>
<div class="my-4">
<div class="mb-1 text-base font-medium dark:text-white">Small</div>
	<Progressbar progress="50" size="h-1.5" />
</div>

<div class="my-4">
<div class="mb-1 text-base font-medium dark:text-white">Default</div>
	<Progressbar progress="50" size="h-2.5" />
</div>

<div class="my-4">
<div class="mb-1 text-lg font-medium dark:text-white">Large</div>
	<Progressbar progress="50" size="h-4" />
</div>

<div class="my-4">
<div class="mb-1 text-lg font-medium dark:text-white">Extra Large</div>
	<Progressbar progress="50" size="h-6" />
</div>

</ExampleDiv>

```html
<Progressbar progress="50" size="h-1.5" />

<Progressbar progress="50" size="h-2.5" />

<Progressbar progress="50" size="h-4" />

<Progressbar progress="50" size="h-6" />

```

<Htwo label="With label inside" />

<p>Use the `labelInside` prop to add the progress in a progress bar.</p>

<ExampleDiv>
<Progressbar progress="50" size="h-4" labelInside />
</ExampleDiv>

```html
<Progressbar progress="50" size="h-4" labelInside />
```

<Htwo label="With label outside" />

<p>Use the `labelOutside` prop to add the progress outside of a progress bar.</p>

<ExampleDiv>
<Progressbar progress="50" labelOutside="Flowbite-Svelte" />
</ExampleDiv>

```html
<Progressbar progress="50" labelOutside="Flowbite-Svelte" />
```

<Htwo label="Colors" />

<p>Use the `color` prop to change the color of a progress bar.</p>

<ExampleDiv>
<div class="my-4">
<div class="mb-1 text-base font-medium dark:text-white">Gray</div>
	<Progressbar progress="50" color="gray" />
</div>

<div class="my-4">
<div class="mb-1 text-base font-medium text-blue-700 dark:text-blue-500">Blue/Default</div>
	<Progressbar progress="50" />
</div>

<div class="my-4">
<div class="mb-1 text-base font-medium text-red-700 dark:text-red-500">Red</div>
	<Progressbar progress="50" color="red" />
</div>

<div class="my-4">
<div class="mb-1 text-base font-medium text-green-700 dark:text-green-500">Green</div>
	<Progressbar progress="50" color="green" />
</div>

<div class="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">Yellow</div>
<div class="my-4">
	<Progressbar progress="50" color="yellow" />
</div>

<div class="mb-1 text-base font-medium text-indigo-700 dark:text-indigo-400">Indigo</div>
<div class="my-4">
	<Progressbar progress="50" color="indigo" />
</div>

<div class="mb-1 text-base font-medium text-purple-700 dark:text-purple-400">Purple</div>
<div class="my-4">
	<Progressbar progress="50" color="purple" />
</div>

</ExampleDiv>

```html
<Progressbar progress="50" color="gray" />

<Progressbar progress="50" color="blue" />

<Progressbar progress="50" color="red" />

<Progressbar progress="50" color="green" />

<Progressbar progress="50" color="yellow" />

<Progressbar progress="50" color="indigo" />

<Progressbar progress="50" color="purple" />
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>