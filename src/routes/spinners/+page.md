---
layout: spinnerLayout
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
  import { Spinner, Button, Breadcrumb, BreadcrumbItem } from '$lib'
  import { Home } from 'svelte-heros';
  
  import componentProps from '../props/Spinner.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>Spinners</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Spinner</h1>

<CompoDescription>Use the spinner component as a loader indicator in your projects when fetching data based on an animated SVG</CompoDescription>

<ExampleDiv>
<GitHubSource href="spinners/Spinner.svelte">Spinner</GitHubSource>
</ExampleDiv>

The spinner component can be used as a loading indicator which comes in multiple colors, sizes, and styles separately or inside elements such as buttons to improve the user experience whenever data is being fetched from your server.

<Htwo label="Setup" />

```html
<script>
	import { Spinner } from 'flowbite-svelte';
</script>
```

<Htwo label="Default spinner"/>

Use the following SVG element to show a loading animation:

<ExampleDiv>
<Spinner />
</ExampleDiv>

```html
<Spinner />
```

<Htwo label="Colors" />

You can change the colors of the spinner element using the `color` prop.

<ExampleDiv>
<Spinner />
<Spinner color="gray" />
<Spinner color="green" />
<Spinner color="red" />
<Spinner color="yellow" />
<Spinner color="pink" />
<Spinner color="purple" />
</ExampleDiv>

```html
<Spinner />
<Spinner color="gray" />
<Spinner color="green" />
<Spinner color="red" />
<Spinner color="yellow" />
<Spinner color="pink" />
<Spinner color="purple" />
```

<Htwo label="Sizes" />

Change the size of the spinner component using the `size` prop.

<ExampleDiv>
<Spinner size={4} />
<Spinner size={6} />
<Spinner size={8} />
</ExampleDiv>

```html
<Spinner size="4" />
<Spinner size="6" />
<Spinner size="8" />
```

<Htwo label="Alignment" />

Because the spinner component is an inline HTML element it can easily be aligned on the left, center, or right side using the `text-{left|center|right}` utility classes:

<ExampleDiv>
<div class="text-left"><Spinner/></div>
<div class="text-center"><Spinner/></div>
<div class="text-right"><Spinner/></div>
</ExampleDiv>

```html
<div class="text-left"><Spinner /></div>
<div class="text-center"><Spinner /></div>
<div class="text-right"><Spinner /></div>
```

<Htwo label="Buttons" />

The spinner component can also be used inside elements such as buttons when submitting form data:

<ExampleDiv>
<div class="flex flex-wrap items-center gap-2">
<Button>
  <Spinner class="mr-3" size="4" color="white" />
  Loading ...
</Button>
<Button outline color="dark">
  <Spinner class="mr-3" size="4" />
  Loading ...
</Button>
</div>
</ExampleDiv>

```html
<div class="flex flex-wrap items-center gap-2">
<Button>
  <Spinner class="mr-3" size="4" color="white" />
  Loading ...
</Button>
<Button outline color="dark">
  <Spinner class="mr-3" size="4" />
  Loading ...
</Button>
</div>
```

<Htwo label="Props" />

The component has the following props, type, and default values. See <a href="/pages/types">types page</a> for type information.

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>
