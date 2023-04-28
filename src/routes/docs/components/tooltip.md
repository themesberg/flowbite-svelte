---
layout: componentLayout
title: Svelte Tooltip - Flowbite
breadcrumb_title: Svelte Tooltip
component_title: Tooltip
dir: Components
description: Use the following Tailwind CSS powered tooltips to show extra content when hovering or focusing on an element
thumnailSize: w-24
---

<script>
  import { TableProp, TableDefaultRow, } from '../../utils'
  import { P, A } from '$lib'
  import { props as items } from '../../props/Tooltip.json'
  import { props as items2 } from '../../props/Frame.json'
</script>



Flowbite-Svelte allows you to show extra information when hovering or focusing over an element in multiple positions, styles, and animations.

## Setup

```svelte example hideOutput
<script>
  import { Tooltip } from 'flowbite-svelte';
</script>
```

## Default tooltip example

To get started with using tooltips all you need to do is set `triggeredBy` attribute of the tooltip component to any CSS query targeting trigger element(s). In the following example you can see the tooltip that will be trigger by the `tooltip-default` element to be shown when hovered or focused.

```svelte example class="flex items-end h-32"
<script>
  import { Tooltip, Button } from 'flowbite-svelte';
</script>

<Button>Default tooltip</Button>
<Tooltip>Tooltip content</Tooltip>
```

## Tooltip styles

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

## Placement

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

## Triggering

```svelte example class="flex items-end gap-2 h-32"
<script>
  import { Tooltip, Button } from 'flowbite-svelte';
</script>

<Button id="hover">Tooltip hover</Button>
<Button id="click">Tooltip click</Button>
<Tooltip triggeredBy="#hover">Hover tooltip content</Tooltip>
<Tooltip trigger="click" triggeredBy="#click">Click tooltip content</Tooltip>
```

## Disable arrow

```svelte example class="flex items-end gap-2 h-32"
<script>
  import { Tooltip, Button } from 'flowbite-svelte';
</script>

<Button id="disable-arrow">Default tooltip</Button>
<Tooltip arrow={false} triggeredBy='#disable-arrow'>Tooltip content</Tooltip>
```

## Custom style

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

## Props

### Tooltip

The component has the following props, type, and default values. See <A href="/docs/pages/typescript">types 
 page</A> for type information.

<TableProp>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

### Frame

The component inherits the following props, type, and default values from `Frame`. See [types page](/docs/pages/typescript) for type information.

<TableProp>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

## References

<P>
  <A href="https://flowbite.com/docs/components/tooltips/" target="_blank" rel="noreferrer" class="link"
    >Flowbite Tooltip</A>
</P>