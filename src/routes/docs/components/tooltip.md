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
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
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

```svelte example class="flex items-end h-32" hideResponsiveButtons
<script>
  import { Tooltip, Button } from 'flowbite-svelte';
</script>

<Button>Default tooltip</Button>
<Tooltip>Tooltip content</Tooltip>
```

## Tooltip types

You can use choose between dark and light version styles for the tooltip component by changing the utility classes from Tailwind CSS and by applying the `type={light|dark}` data attribute.

```svelte example class="flex items-end gap-2 h-32" hideResponsiveButtons
<script>
  import { Tooltip, Button } from 'flowbite-svelte';
  let type = 'dark';
</script>

<Button id="type-1" on:mouseenter={()=> type='light'}>Light tooltip</Button>
<Button id="type-2" on:mouseenter={()=> type='auto'}>Default tooltip</Button>
<Button id="type-3" on:mouseenter={()=> type='dark'}>Dark tooltip</Button>
<Tooltip {type} triggeredBy="[id^='type-']">Tooltip content</Tooltip>
```

## Placement

The positioning of the tooltip element relative to the triggering element (eg. button, link) can be set using the `placement={top|right|bottom|left}` attribute.

**Note!** This examples shows you also how to share one tooltip between multiple triggering elements using advanced CSS query.

```svelte example class="flex items-center gap-2 h-36" hideResponsiveButtons
<script>
  import { Tooltip, Button } from 'flowbite-svelte';
  let placement = 'left';
</script>

<Button id="placement-1" on:mouseenter={()=> placement='left'}>Tooltip left</Button>
<Button id="placement-2" on:mouseenter={()=> placement='top'}>Tooltip top</Button>
<Button id="placement-3" on:mouseenter={()=> placement='bottom'}>Tooltip bottom</Button>
<Button id="placement-4" on:mouseenter={()=> placement='right'}>Tooltip right</Button>
<Tooltip triggeredBy="[id^='placement-']" {placement}>
  Tooltip content - {placement}
</Tooltip>
```

## Triggering

```svelte example class="flex items-end gap-2 h-32" hideResponsiveButtons
<script>
  import { Tooltip, Button } from 'flowbite-svelte';
</script>

<Button id="hover">Tooltip hover</Button>
<Button id="click">Tooltip click</Button>
<Tooltip triggeredBy="#hover">Hover tooltip content</Tooltip>
<Tooltip trigger="click" triggeredBy="#click">Click tooltip content</Tooltip>
```

## Disable arrow

```svelte example class="flex items-end gap-2 h-32" hideResponsiveButtons
<script>
  import { Tooltip, Button } from 'flowbite-svelte';
</script>

<Button id="disable-arrow">Default tooltip</Button>
<Tooltip arrow={false} triggeredBy="#disable-arrow">Tooltip content</Tooltip>
```

## External reference

If you need the tooltip to be attached to the other element then the tiggering one you can pass a CSS query to `reference` prop.

```svelte example class="flex gap-4 flex-col justify-center items-center h-72" hideResponsiveButtons
<script>
  import { Tooltip, Button } from 'flowbite-svelte';
  let placement = '';
</script>

<div id="ext-ref" class="p-2 rounded-lg border border-gray-200 dark:border-gray-600">External reference</div>
<div class="space-x-4 rtl:space-x-reverse">
  <Button id="ref-left" on:mouseenter={() => (placement = 'left')}>Left</Button>
  <Button id="ref-top" on:mouseenter={() => (placement = 'top')}>Top</Button>
  <Button id="ref-right" on:mouseenter={() => (placement = 'right')}>Right</Button>
</div>
<Tooltip reference="#ext-ref" triggeredBy="[id^='ref-']" {placement} class="w-64 text-sm font-light">And here's some amazing content. It's very engaging. Right?</Tooltip>
```

## Custom type

Various color palettes can be set for a tooltip by using the `color` property from the underlying `Frame` component. (Setting `color` prop sets the `type` to `custom` implicitly.)

When you want to add a fully custom styles, use `type="custom"`, `defaultClass`, and `class` to modify the tooltip styling.

```svelte example class="flex items-center h-64 gap-2" hideResponsiveButtons
<script>
  import { Tooltip, Button } from 'flowbite-svelte';
</script>

<Button>Green tooltip</Button>
<Tooltip color="green">Tooltip content</Tooltip>

<Button>Yellow tooltip</Button>
<Tooltip color="yellow">Tooltip content</Tooltip>

<Button>Custom type</Button>
<Tooltip placement="right" type="custom" defaultClass="" class="p-4 text-lg font-medium bg-purple-500 text-gray-100" arrow={false}>Tooltip content</Tooltip>
```

## Component data

### Tooltip

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Tooltip](https://flowbite.com/docs/components/tooltips/)

<GitHubCompoLinks />
