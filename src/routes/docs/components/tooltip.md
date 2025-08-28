---
layout: componentLayout
title: Svelte Tooltip - Flowbite
breadcrumb_title: Svelte Tooltip
component_title: Tooltip
dir: Components
description: Use the following Tailwind CSS powered tooltips to show extra content when hovering or focusing on an element
thumnailSize: w-24
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, Seealso } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
  const relatedLinks = ['/docs/components/popover','/docs/components/speed-dial' ,'/docs/components/tooltip'];
</script>

flowbite-svelte allows you to show extra information when hovering or focusing over an element in multiple positions, styles, and animations.

For interactive elements that need to display additional content on click, use the [popover](/docs/components/popover) component.

## Setup

```svelte example hideOutput
<script lang="ts">
  import { Tooltip } from "flowbite-svelte";
</script>
```

## Default tooltip example

To get started with using tooltips all you need to do is to place `Tooltip` element directly after tiggering element (usually `Button`).
In the following example you can see the tooltip that will be trigger by the adjacent element to be shown when hovered or focused.

```svelte example class="flex items-end h-32" hideResponsiveButtons
{#include Default.svelte}
```

If you have anything else between the button and tooltip, they won't find each other and you will need to specify the link between them by setting the property `triggeredBy` to the CSS query of the element that triggers the tooltip. Most of the time you will want to use the `id` attribute of the element to link them, but you can use any CSS query you want. See the examples further down.

```svelte example hideScript class="h-32 flex items-end gap-2" hideResponsiveButtons
{#include Default2.svelte}
```

## Tooltip types

You can use choose between dark and light version styles for the tooltip component by changing the utility classes from Tailwind CSS and by applying the `type={light|dark|auto}` data attribute.

```svelte example class="flex items-end gap-2 h-32" hideResponsiveButtons
{#include TooltipTypes.svelte}
```

## A11y

Use `Tab` and `Shift+Tab` to navigate between buttons or links in the tooltip. Press `ESC` to close it.

## Placement

The positioning of the tooltip element relative to the triggering element (eg. button, link) can be set using the `placement={top|right|bottom|left}` attribute.

**Note!** This examples shows you also how to share one tooltip between multiple triggering elements using advanced CSS query.

```svelte example class="flex items-center justify-center gap-2 h-36" hideResponsiveButtons
{#include Placement.svelte}
```

## Triggering

```svelte example class="flex items-end gap-2 h-32" hideResponsiveButtons
{#include Triggering.svelte}
```

## Disable arrow

```svelte example class="flex items-end gap-2 h-32" hideResponsiveButtons
{#include DisableArrow.svelte}
```

## External reference

If you need the tooltip to be attached to the other element then the tiggering one you can pass a CSS query to `reference` prop.

```svelte example class="flex gap-4 flex-col justify-center items-center h-72" hideResponsiveButtons
{#include External.svelte}
```

## Animations

Use svelte transistions to configure tooltip animations.

```svelte example class="flex items-end gap-2 h-32" hideResponsiveButtons
{#include Animations.svelte}
```

## Custom type

Various color palettes can be set for a tooltip by using the `color` property. (Setting `color` prop sets the `type` to `custom` implicitly.)

When you want to add a fully custom styles, use `type="custom"`, `defaultClass`, and `class` to modify the tooltip styling.

```svelte example class="flex items-center h-64 gap-2" hideResponsiveButtons
{#include Custom.svelte}
```

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Tooltip](https://flowbite.com/docs/components/tooltips/)

<GitHubCompoLinks />
