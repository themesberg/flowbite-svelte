---
layout: componentLayout
title: Svelte Button Group - Flowbite
breadcrumb_title: Svelte Button Group
component_title: Button group
dir: Components
description: Button groups are a Tailwind CSS powered set of buttons sticked together in a horizontal line
---

<script>
  import { CompoAttributesViewer,  GitHubCompoLinks, toKebabCase, Seealso } from '../../utils'
  import { Badge, P, A } from '$lib'
  const dirName = 'buttongroup'
  const relatedLinks = ['/docs/extend/button-toggle','/docs/components/button-group' ,'/docs/components/list-group','/docs/forms/radio#radiobutton' , '/docs/forms/checkbox#checkboxbutton'];
</script>

The button group component from flowbite-svelte can be used to stack together multiple buttons and links inside a single element.

## Setup

```svelte example hideOutput
<script>
  import { ButtonGroup, Button } from "flowbite-svelte";
</script>
```

## Default

Use the following code to stack together buttons into a single group.

```svelte example class="flex justify-center" hideScript hideResponsiveButtons
{#include Default.svelte}
```

## Disabled

```svelte example class="flex justify-center space-x-4" hideScript hideResponsiveButtons
{#include Disabled.svelte}
```

## More examples

```svelte example class="flex flex-col flex-wrap gap-4" hideResponsiveButtons
{#include More.svelte}
```

## Button group as links

You can also use the button group component as links.

```svelte example class="flex justify-center" hideScript hideResponsiveButtons
{#include Links.svelte}
```

## Group buttons with icons

You can also use SVG icons inside the grouped buttons.

```svelte example class="flex justify-center"
{#include Icons.svelte}
```

## Outline

Group a series of buttons together on a single line or stack them in a vertical column.

```svelte example class="flex justify-center" hideScript hideResponsiveButtons
{#include Outline.svelte}
```

## Outline with icon

Group a series of buttons together on a single line or stack them in a vertical column.

```svelte example class="flex justify-center"
{#include OutlineIcon.svelte}
```

## Events

You can add the `onclick` event to the `Button` component.

```svelte example class="flex justify-center" hideResponsiveButtons
{#include Event.svelte}
```

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Button Group](https://flowbite.com/docs/components/button-group/)

<GitHubCompoLinks />
