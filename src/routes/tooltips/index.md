---
layout: tooltipLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import GitHubSource from '../utils/GitHubSource.svelte'
  import CompoDescription from '../utils/CompoDescription.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Tooltip, Button, Breadcrumb, BreadcrumbItem } from '$lib'
  import { Home } from 'svelte-heros'
  import componentProps from '../props/Tooltip.json'
  // Props table
  let items = componentProps.props
  let propHeader = ['Name', 'Type', 'Default']

  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Tooltips</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Tooltips</h1>

<CompoDescription>Use the following Tailwind CSS powered tooltips to show extra content when hovering or focusing on an element</CompoDescription>

<ExampleDiv>
<GitHubSource href="tooltips/Tooltip.svelte">Tooltip</GitHubSource>
</ExampleDiv>

Flowbite-Svelte allows you to show extra information when hovering or focusing over an element in multiple positions, styles, and animations.

<Htwo label="Setup" />

```html
<script>
	import { Tooltip } from 'flowbite-svelte';
</script>
```

<Htwo label="Default tooltip example" />

<ExampleDiv>
  <Tooltip content="Tooltip content">
    <Button>Default tooltip</Button>
  </Tooltip>
</ExampleDiv>

```html
<script>
import {Tooltip, Button} from 'flowbite-svelte'
</script>

<Tooltip content="Tooltip content">
  <Button>Default tooltip</Button>
</Tooltip>
```

<Htwo label="Tooltip styles" />

<ExampleDiv>
 <div class="flex gap-2">
<Tooltip content="Tooltip content" style="light">
  <Button>Light tooltip</Button>
</Tooltip>
<Tooltip content="Tooltip content" style="dark">
  <Button>Dark tooltip</Button>
</Tooltip>
</div>
</ExampleDiv>

```html
<Tooltip content="Tooltip content" style="light">
  <Button>Light tooltip</Button>
</Tooltip>
<Tooltip content="Tooltip content" style="dark">
  <Button>Dark tooltip</Button>
</Tooltip>
```

<Htwo label="Placement" />

<ExampleDiv>
<div class="flex gap-2">
  <Tooltip content="Tooltip content" placement="top">
    <Button>Tooltip top</Button>
  </Tooltip>
  <Tooltip content="Tooltip content" placement="right">
    <Button>Tooltip right</Button>
  </Tooltip>
  <Tooltip content="Tooltip content" placement="bottom">
    <Button>Tooltip bottom</Button>
  </Tooltip>
  <Tooltip content="Tooltip content" placement="left">
    <Button>Tooltip left</Button>
  </Tooltip>
</div>
</ExampleDiv>

```html
<Tooltip content="Tooltip content" placement="top">
  <Button>Tooltip top</Button>
</Tooltip>
<Tooltip content="Tooltip content" placement="right">
  <Button>Tooltip right</Button>
</Tooltip>
<Tooltip content="Tooltip content" placement="bottom">
  <Button>Tooltip bottom</Button>
</Tooltip>
<Tooltip content="Tooltip content" placement="left">
  <Button>Tooltip left</Button>
</Tooltip>
```

<Htwo label="Triggering" />

<ExampleDiv>
<div class="flex gap-2">
  <Tooltip content="Tooltip content" trigger="hover">
    <Button>Tooltip hover</Button>
  </Tooltip>
  <Tooltip content="Tooltip content" trigger="click">
    <Button>Tooltip click</Button>
  </Tooltip>
</div>
</ExampleDiv>

```html
<Tooltip content="Tooltip content" trigger="hover">
  <Button>Tooltip hover</Button>
</Tooltip>
<Tooltip content="Tooltip content" trigger="click">
  <Button>Tooltip click</Button>
</Tooltip>
```

<Htwo label="Disable arrow" />

<ExampleDiv>
  <Tooltip content="Tooltip content" arrow={false}>
    <Button>Default tooltip</Button>
  </Tooltip>
</ExampleDiv>

```html
<Tooltip content="Tooltip content" arrow={false}>
  <Button>Default tooltip</Button>
</Tooltip>
```

<Htwo label="Custom style" />

When you want to add custom styles, use `style="custom"`, `tipClass`, and `tipColor` to modify the style.

<ExampleDiv>
  <Tooltip
		content="tooltip content"
		placement="auto"
		tipClass="absolute inline-block rounded-lg p-24 text-lg font-medium shadow-sm text-white"
		style="custom"
		tipColor="bg-red-900 dark:bg-red-700"
	>
		<Button>Custom style</Button>
	</Tooltip>
</ExampleDiv>

```html
<Tooltip
  content="tooltip content"
  placement="auto"
  tipClass="absolute inline-block rounded-lg p-24 text-lg font-medium shadow-sm text-white"
  style="custom"
  tipColor="bg-red-900 dark:bg-red-700"
>
  <Button>Custom style</Button>
</Tooltip>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>