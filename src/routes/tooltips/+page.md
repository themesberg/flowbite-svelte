---
layout: tooltipLayout
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
  import { Tooltip, Button, Breadcrumb, BreadcrumbItem } from '$lib'

  import componentProps from '../props/Tooltip.json'
  // Props table
  let items = componentProps.props
  let propHeader = ['Name', 'Type', 'Default']

  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

  let style = 'dark';
  let placement = 'top';
</script>

<Breadcrumb class="pb-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
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

To get started with using tooltips all you need to do is set `triggeredBy` attribute of the tooltip component to any CSS query targeting trigger element(s). In the following example you can see the tooltip that will be trigger by the `tooltip-default` element to be shown when hovered or focused.

<ExampleDiv class="flex items-end gap-2 h-32">
  <Button id="tooltip-default">Default tooltip</Button>
  <Tooltip triggeredBy='#tooltip-default'>
    Tooltip content
  </Tooltip>
</ExampleDiv>

```html
<script>
  import {Tooltip, Button} from 'flowbite-svelte'
</script>

<Button id="tooltip-default">Default tooltip</Button>
<Tooltip triggeredBy='#tooltip-default'>
  Tooltip content
</Tooltip>
```

<Htwo label="Tooltip styles" />

You can use choose between dark and light version styles for the tooltip component by changing the utility classes from Tailwind CSS and by applying the `style={light|dark}` data attribute.

<ExampleDiv class="flex items-end gap-2 h-32">
  <Button id="style-light">Light tooltip</Button>
  <Button id="style-dark">Dark tooltip</Button>
  <Tooltip style="light" triggeredBy="#style-light">Tooltip content</Tooltip>
  <Tooltip style="dark" triggeredBy="#style-dark">Tooltip content</Tooltip>
</ExampleDiv>

```html
  <Button id="style-light">Light tooltip</Button>
  <Button id="style-dark">Dark tooltip</Button>
  <Tooltip style="light" triggeredBy="#style-light">Tooltip content</Tooltip>
  <Tooltip style="dark" triggeredBy="#style-dark">Tooltip content</Tooltip>
```

<Htwo label="Placement" />

The positioning of the tooltip element relative to the triggering element (eg. button, link) can be set using the `placement={top|right|bottom|left}` attribute.

**Note!** This examples shows you also how to share one tooltip between multiple triggering elements using advanced CSS query.

<ExampleDiv class="flex items-center gap-2 h-36">
  <Button id="placement-left">Tooltip left</Button>
  <Button id="placement-top">Tooltip top</Button>
  <Button id="placement-bottom">Tooltip bottom</Button>
  <Button id="placement-right">Tooltip right</Button>
  <Tooltip triggeredBy="[id^='placement-']" {placement} on:show={(e)=> [, placement] = e.target.id.split('-')}>
    Tooltip content - {placement}
  </Tooltip>
</ExampleDiv>

```svelte
<script>
  let placement = 'left';
</script>
<Button id="placement-left">Tooltip left</Button>
<Button id="placement-top">Tooltip top</Button>
<Button id="placement-bottom">Tooltip bottom</Button>
<Button id="placement-right">Tooltip right</Button>
<Tooltip triggeredBy="[id^='placement-']" {placement} on:show={(e)=> [, placement] = e.target.id.split('-')}>
  Tooltip content - {placement}
</Tooltip>
```

<Htwo label="Triggering" />

<ExampleDiv class="flex items-end gap-2 h-32">
  <Button id="hover">Tooltip hover</Button>
  <Button id="click">Tooltip click</Button>
  <Tooltip triggeredBy="#hover">Hover tooltip content</Tooltip>
  <Tooltip trigger="click" triggeredBy="#click">Click tooltip content</Tooltip>
</ExampleDiv>

```html
  <Button id="hover">Tooltip hover</Button>
  <Button id="click">Tooltip click</Button>
  <Tooltip triggeredBy="#hover">Hover tooltip content</Tooltip>
  <Tooltip trigger="click" triggeredBy="#click">Click tooltip content</Tooltip>
```

<Htwo label="Disable arrow" />

<ExampleDiv class="flex items-end gap-2 h-32">
  <Button id="disable-arrow">Default tooltip</Button>
  <Tooltip arrow={false} triggeredBy='#disable-arrow'>Tooltip content</Tooltip>
</ExampleDiv>

```html
<Button id="disable-arrow">Default tooltip</Button>
<Tooltip arrow={false} triggeredBy='#disable-arrow'>Tooltip content</Tooltip>
```

<Htwo label="Custom style" />

When you want to add custom styles, use `style="custom"`, `tipClass`, and `color` to modify the style.

<ExampleDiv class="flex items-center gap-2 h-64">
	<Button id="custom">Custom style</Button>
  <Tooltip
    triggeredBy="#custom"
		placement="auto"
		tipClass="rounded-lg p-24 text-lg font-medium shadow-sm text-white"
		style="custom"
		color="bg-red-900 dark:bg-red-700"
	>
		Tooltip content
	</Tooltip>
</ExampleDiv>

```html
<Button id="custom">Custom style</Button>
<Tooltip
  triggeredBy="#custom"
  placement="auto"
  tipClass="rounded-lg p-24 text-lg font-medium shadow-sm text-white"
  style="custom"
  color="bg-red-900 dark:bg-red-700"
>
  Tooltip content
</Tooltip>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>