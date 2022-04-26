---
layout: progressbarLayout
---

<script>
  import { Progressbar, Table, TableDefaultRow, Breadcrumb } from '$lib/index'
	import componentProps from '../props/Progressbar.json'
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
      label:'Progress bar',
      href:'/progressbars/'
    }
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Progress bar Components</h1>

<p>Import the `Progressbar` component in a script tag.</p>

```html
<script>
	import { Progressbar } from 'flowbite-svelte'
</script>
```

<h2 class="text-2xl w-full mt-8 dark:text-white py-4" id="Default_sidebar">Size</h2>

<p>Use the `size` prop to change the size of a progress bar.</p>

<div class="container rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">

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

</div>

```html
<Progressbar progress="50" size="h-1.5" />

<Progressbar progress="50" size="h-2.5" />

<Progressbar progress="50" size="h-4" />

<Progressbar progress="50" size="h-6" />

```

<h2 class="text-2xl w-full mt-8 dark:text-white py-8" id="Default_sidebar">Colors</h2>

<p>Use the `color` prop to change the color of a progress bar.</p>

<div class="container rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">

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

</div>

```html
<Progressbar progress="50" color="gray" />

<Progressbar progress="50" color="blue" />

<Progressbar progress="50" color="red" />

<Progressbar progress="50" color="green" />

<Progressbar progress="50" color="yellow" />

<Progressbar progress="50" color="indigo" />

<Progressbar progress="50" color="purple" />
```

<h2 class="text-2xl w-full mt-8 dark:text-white py-8" id="Default_sidebar">Label inside</h2>

<p>Use the `labelInside` prop to add the progress in a progress bar.</p>

<div class="container rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">

<Progressbar progress="50" labelInside />

</div>

```html
<Progressbar progress="50" labelInside />
```


<h2 class="text-2xl w-full mt-8 dark:text-white py-8" id="Default_sidebar">Label outside</h2>

<p>Use the `labelOutside` prop to add the progress outside of a progress bar.</p>

<div class="container rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">

<Progressbar progress="50" labelOutside="Flowbite-Svelte" />

</div>

```html
<Progressbar progress="50" labelOutside="Flowbite-Svelte" />
```

<h2 class="text-2xl w-full dark:text-white py-4">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>