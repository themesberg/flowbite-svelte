---
layout: popoverLayout
---

<script lang="ts">
	import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
	import { Popover, TableData, Breadcrumb, BreadcrumbItem, Badge } from '$lib'
  import { Home } from 'svelte-heros';
	
	// import componentProps1 from '../props/Popover.json'

  // let items1 = componentProps1.props

	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Popover</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Popover</h1>

<CompoDescription>Use the popover component to show detailed information inside a pop-up box relative to the element that is being clicked or hovered based on multiple styles</CompoDescription>

<ExampleDiv>
<GitHubSource href="popover/Popover.svelte">Popover</GitHubSource>
</ExampleDiv>

<Htwo label="Setup" />

```html
<script>
  import { Popover } from 'flowbite-svelte'
</script>
```

<Htwo label="Default popover" />


<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>


<TableProp header={propHeader} {divClass} {theadClass}>
  
</TableProp>

<Htwo label="Forwarded Events: Popover" />

<div class="flex flex-wrap gap-2">
...
</div>