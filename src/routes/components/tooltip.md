---
layout: componentLayout
title: Svelte Tooltip - Flowbite
breadcrumb_title: Tooltip
dir: Components
description: Use the following Tailwind CSS powered tooltips to show extra content when hovering or focusing on an element
---

<MetaTag {breadcrumb_title} {title} {dir} {description}/>

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow, MetaTag } from '../utils'
  
  import { Breadcrumb, BreadcrumbItem, Heading, P, A } from '$lib'
  import { props as items } from '../props/Tooltip.json'
  import { props as items2 } from '../props/Frame.json'
  let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb class="pt-16 py-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<CompoDescription>{description}</CompoDescription>

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

```svelte example class="flex items-end h-32"
<script>
  import { Tooltip, Button } from 'flowbite-svelte';
</script>

<Button>Default tooltip</Button>
<Tooltip>Tooltip content</Tooltip>
```

<Htwo label="Tooltip styles" />

You can use choose between dark and light version styles for the tooltip component by changing the utility classes from Tailwind CSS and by applying the `style={light|dark}` data attribute.

```svelte example class="flex items-end gap-2 h-32"
<script>
  import { Tooltip, Button } from 'flowbite-svelte';
  let style = 'dark';
</script>

<Button id="style-light">Light tooltip</Button>
<Button id="style-auto">Default tooltip</Button>
<Button id="style-dark">Dark tooltip</Button>
<Tooltip {style} triggeredBy="[id^='style-']" on:show={ev => style = ev.target.id.split('-')[1]}>Tooltip content</Tooltip>
```

<Htwo label="Placement" />

The positioning of the tooltip element relative to the triggering element (eg. button, link) can be set using the `placement={top|right|bottom|left}` attribute.

**Note!** This examples shows you also how to share one tooltip between multiple triggering elements using advanced CSS query.

```svelte example class="flex items-center gap-2 h-36"
<script>
  import { Tooltip, Button } from 'flowbite-svelte';
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

```svelte example class="flex items-end gap-2 h-32"
<script>
  import { Tooltip, Button } from 'flowbite-svelte';
</script>

<Button id="hover">Tooltip hover</Button>
<Button id="click">Tooltip click</Button>
<Tooltip triggeredBy="#hover">Hover tooltip content</Tooltip>
<Tooltip trigger="click" triggeredBy="#click">Click tooltip content</Tooltip>
```

<Htwo label="Disable arrow" />

```svelte example class="flex items-end gap-2 h-32"
<script>
  import { Tooltip, Button } from 'flowbite-svelte';
</script>

<Button id="disable-arrow">Default tooltip</Button>
<Tooltip arrow={false} triggeredBy='#disable-arrow'>Tooltip content</Tooltip>
```

<Htwo label="Custom style" />

Various color palettes can be set for a tooltip by using the `color` property from the underlying `Frame` component.
(Setting `color` prop sets the `style` to `custom` implicitly.)

When you want to add a fully custom styles, use `style="custom"`, `defaultClass`, and `class` to modify the style.

```svelte example class="flex items-center h-64 gap-2"
<script>
  import { Tooltip, Button } from 'flowbite-svelte';
</script>

<Button>Green tooltip</Button>
<Tooltip  color="green">Tooltip content</Tooltip>

<Button>Yellow tooltip</Button>
<Tooltip  color="yellow">Tooltip content</Tooltip>

<Button>Custom style</Button>
<Tooltip
  placement="right"
  style="custom"
  defaultClass=""
  class="p-4 text-lg font-medium bg-purple-500 text-gray-100"
  arrow={false}
>
  Tooltip content
</Tooltip>
```

<Htwo label="Props" />

<h3 class='text-xl w-full dark:text-white py-4'>Tooltip</h3>

The component has the following props, type, and default values. See <A href="/pages/types">types 
 page</A> for type information.

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>Frame</h3>

The component inherits the following props, type, and default values from `Frame`. See [types page](/pages/types) for type information.

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

<Htwo label="References" />

<P>
  <A href="https://flowbite.com/docs/components/tooltips/" target="_blank" rel="noreferrer" class="link"
    >Flowbite Tooltip</A>
</P>