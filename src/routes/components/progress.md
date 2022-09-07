---
layout: componentLayout
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
  import { Progressbar, Breadcrumb, BreadcrumbItem, Heading, P, A } from '$lib'
	
  
	import componentProps from '../props/Progressbar.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

</script>

<Breadcrumb class="pb-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>Progress bar</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">Progress</Heading>

<CompoDescription>Use the progress bar component to show the completion rate of a data indicator or use it as a loader element</CompoDescription>

<ExampleDiv>
<GitHubSource href="progressbars/Progressbar.svelte">Progressbar</GitHubSource>
</ExampleDiv>

The progress bar component can be used as an indicator to show the completion rate of data sets or it can be used as an animated loader component. There are multiple sizes, colors, and styles available.

<Htwo label="Setup" />

Import the `Progressbar` component in a script tag.

```html
<script>
	import { Progressbar } from 'flowbite-svelte'
</script>
```

<Htwo label="Default progress bar" />

Use the following example of a progress bar element to show a completion rate of 45% by using an inline style and the utility classes from Tailwind CSS.

<ExampleDiv>
<Progressbar progress="50" />
</ExampleDiv>

```html
<Progressbar progress="50" />
```

<Htwo label="Sizes" />

Use the `size` prop to change the size of a progress bar.

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

Use the `labelInside` prop to add the progress in a progress bar.

<ExampleDiv>
<Progressbar progress="50" size="h-4" labelInside />
</ExampleDiv>

```html
<Progressbar progress="50" size="h-4" labelInside />
```

<Htwo label="With label outside" />

Use the `labelOutside` prop to add the progress outside of a progress bar.

<ExampleDiv>
<Progressbar progress="50" labelOutside="Flowbite-Svelte" />
</ExampleDiv>

```html
<Progressbar progress="50" labelOutside="Flowbite-Svelte" />
```

<Htwo label="Colors" />

Use the `color` prop to change the color of a progress bar.

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

<Htwo label='Custom style' />

Use `labelInsideClass` prop to style your progressbar.

<ExampleDiv>
<Progressbar
  progress="50"
  size="h-3"
  labelInside
  color="green"
  labelInsideClass="bg-blue-600 text-blue-100 text-xs font-medium text-center p-0 leading-none rounded-full"
  class="my-4"
  labelOutside="Size h-3" />

<Progressbar
  progress="50"
  size="h-10"
  labelInside
  color="red"
  labelInsideClass="bg-blue-600 text-blue-100 text-2xl font-medium text-center p-2 leading-none rounded-full"
  class="my-4"
  labelOutside="Size h-10" />

<Progressbar
  progress="50"
  size="h-6"
  labelInside
  labelInsideClass="bg-blue-600 text-blue-100 text-base font-medium text-center p-1 leading-none rounded-full"
  class="my-4"
  labelOutside="Size h-6" />
</ExampleDiv>

```html

<Progressbar
  progress="50"
  size="h-3"
  labelInside
  color="green"
  labelInsideClass="bg-blue-600 text-blue-100 text-xs font-medium text-center p-0 leading-none rounded-full"
  class="my-4"
  labelOutside="Size h-3" />

<Progressbar
  progress="50"
  size="h-10"
  labelInside
  color="red"
  labelInsideClass="bg-blue-600 text-blue-100 text-2xl font-medium text-center p-2 leading-none rounded-full"
  class="my-4"
  labelOutside="Size h-10" />

<Progressbar
  progress="50"
  size="h-6"
  labelInside
  labelInsideClass="bg-blue-600 text-blue-100 text-base font-medium text-center p-1 leading-none rounded-full"
  class="my-4"
  labelOutside="Size h-6" />
```

<Htwo label="Props" />

The component has the following props, type, and default values. See <a href="/pages/types">types page</a> for type information.

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

<Htwo label="References" />

<P>
	<A href="https://flowbite.com/docs/components/progress/" target="_blank" class="link"
		>Flowbite Progress bar</A
	>
</P>
