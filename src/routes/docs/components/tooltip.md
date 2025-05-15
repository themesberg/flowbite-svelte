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
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, Seealso } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
  const relatedLinks = ['/docs/components/popover','/docs/components/speed-dial' ,'/docs/components/tooltip'];
</script>

flowbite-svelte allows you to show extra information when hovering or focusing over an element in multiple positions, styles, and animations.

## Setup

```svelte example hideOutput
<script>
  import { Tooltip } from "flowbite-svelte";
</script>
```

## Default tooltip example

To get started with using tooltips all you need to do is to place `Tooltip` element directly after tiggering element (usually `Button`).
In the following example you can see the tooltip that will be trigger by the adjacent element to be shown when hovered or focused.

```svelte example class="flex items-end h-32" hideResponsiveButtons
<script>
  import { Tooltip, Button } from "flowbite-svelte";
</script>

<!-- only works if the button and tooltip are adjacent on your page. Like this: -->
<Button>Default tooltip</Button>
<Tooltip>Tooltip content</Tooltip>
```

If you have anything else between the button and tooltip, they won't find each other and you will need to specify the link between them by setting the property `triggeredBy` to the CSS query of the element that triggers the tooltip. Most of the time you will want to use the `id` attribute of the element to link them, but you can use any CSS query you want. See the examples further down.

```svelte example hideScript class="h-32 flex items-end gap-2" hideResponsiveButtons
<script>
  import { Tooltip, Button, P } from "flowbite-svelte";
</script>

<Button id="specific-button-anywhere-on-page">Default tooltip</Button>
<P>hi mom</P>
<P>lorem ipsum, content blah blah, other stuff</P>
<Tooltip triggeredBy="#specific-button-anywhere-on-page">Tooltip content</Tooltip>
```

## Tooltip types

You can use choose between dark and light version styles for the tooltip component by changing the utility classes from Tailwind CSS and by applying the `type={light|dark|auto}` data attribute.

```svelte example class="flex items-end gap-2 h-32" hideResponsiveButtons
<script>
  import { Tooltip, Button } from "flowbite-svelte";
</script>

<Button>Light tooltip</Button>
<Tooltip type="light">Tooltip content</Tooltip>
<Button>Default tooltip</Button>
<Tooltip type="auto">Tooltip content</Tooltip>
<Button>Dark tooltip</Button>
<Tooltip type="dark">Tooltip content</Tooltip>
```

## Placement

The positioning of the tooltip element relative to the triggering element (eg. button, link) can be set using the `placement={top|right|bottom|left}` attribute.

**Note!** This examples shows you also how to share one tooltip between multiple triggering elements using advanced CSS query.

```svelte example class="flex items-center justify-center gap-2 h-36" hideResponsiveButtons
<script lang="ts">
  import { Tooltip, Button } from "flowbite-svelte";
  import type { Placement } from "@floating-ui/utils";
  let placement: Placement = "left";
</script>

<Button>Tooltip left</Button>
<Tooltip placement="left">Left</Tooltip>
<Button>Tooltip top</Button>
<Tooltip placement="top">Top</Tooltip>
<Button>Tooltip bottom</Button>
<Tooltip placement="bottom">Bottom</Tooltip>
<Button>Tooltip right</Button>
<Tooltip placement="right">Right</Tooltip>
```

## Triggering

```svelte example class="flex items-end gap-2 h-32" hideResponsiveButtons
<script>
  import { Tooltip, Button } from "flowbite-svelte";
</script>

<Button id="hover">Tooltip hover</Button>
<Button id="click">Tooltip click</Button>
<Tooltip triggeredBy="#hover">Hover tooltip content</Tooltip>
<Tooltip trigger="click" triggeredBy="#click">Click tooltip content</Tooltip>
```

## Disable arrow

```svelte example class="flex items-end gap-2 h-32" hideResponsiveButtons
<script>
  import { Tooltip, Button } from "flowbite-svelte";
</script>

<Button id="disable-arrow">Default tooltip</Button>
<Tooltip arrow={false} triggeredBy="#disable-arrow">Tooltip content</Tooltip>
```

## External reference

If you need the tooltip to be attached to the other element then the tiggering one you can pass a CSS query to `reference` prop.

```svelte example class="flex gap-4 flex-col justify-center items-center h-72" hideResponsiveButtons
<script lang="ts">
  import { Tooltip, Button } from "flowbite-svelte";
  import type { Placement } from "@floating-ui/utils";
  let placement: Placement = "top";
  function onbeforetoggle(ev: Event) {
    const trigger = (ev as any).trigger;
    if (trigger?.id) {
      placement = trigger.id.replace("ref-", "");
    }
  }
</script>

<div id="ext-ref" class="rounded-lg border border-gray-200 p-2 dark:border-gray-600">External reference</div>
<div class="space-x-4 rtl:space-x-reverse">
  <Button id="ref-left">Left</Button>
  <Button id="ref-top">Top</Button>
  <Button id="ref-right">Right</Button>
</div>
<Tooltip reference="#ext-ref" triggeredBy="[id^='ref-']" {placement} {onbeforetoggle} class="w-64 text-sm font-light">And here's some amazing content. It's very engaging. Right?</Tooltip>
```

## Animations

Use svelte transistions to configure tooltip animations.

```svelte example class="flex items-end gap-2 h-32" hideResponsiveButtons
<script>
  import { Tooltip, Button } from "flowbite-svelte";
  import { slide, scale, blur } from "svelte/transition";
</script>

<Button>Blur</Button>
<Tooltip transition={blur} transitionParams={{ duration: 300 }}>Tooltip content</Tooltip>
<Button>Slide</Button>
<Tooltip transition={slide}>Tooltip content</Tooltip>
<Button>Scale</Button>
<Tooltip transition={scale}>Tooltip content</Tooltip>
```

## Custom type

Various color palettes can be set for a tooltip by using the `color` property. (Setting `color` prop sets the `type` to `custom` implicitly.)

When you want to add a fully custom styles, use `type="custom"`, `defaultClass`, and `class` to modify the tooltip styling.

```svelte example class="flex items-center h-64 gap-2" hideResponsiveButtons
<script>
  import { Tooltip, Button } from "flowbite-svelte";
</script>

<Button>Green tooltip</Button>
<Tooltip color="green">Tooltip content</Tooltip>

<Button>Yellow tooltip</Button>
<Tooltip color="yellow">Tooltip content</Tooltip>

<Button>Custom type</Button>
<Tooltip placement="right" type={undefined} class="bg-purple-500 p-4 text-lg font-medium text-gray-100" arrow={false}>Tooltip content</Tooltip>
```

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Tooltip](https://flowbite.com/docs/components/tooltips/)

<GitHubCompoLinks />
