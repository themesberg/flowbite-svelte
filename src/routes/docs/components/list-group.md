---
layout: componentLayout
title: Svelte List Group - Flowbite
breadcrumb_title: Svelte List Group
component_title: List Group
dir: Components
description: Use the list group component to display a series of items, buttons or links inside a single element
thumbnailSize: w-36
---

<script lang="ts">
  import { CompoAttributesViewer,  GitHubCompoLinks, toKebabCase, Seealso, LlmLink } from '../../utils'
  import { Badge, Heading, P, A } from '$lib'
  const dirName = toKebabCase(component_title)
  const relatedLinks = ['/docs/extend/button-toggle','/docs/components/button-group' ,'/docs/components/list-group','/docs/forms/radio#radiobutton' , '/docs/forms/checkbox#checkboxbutton'];
</script>

The list group component can be used to display a series of elements, buttons or links inside a single card component similar to a sidebar.

## Setup

```svelte example hideOutput
<script lang="ts">
  import { Listgroup, ListgroupItem } from "flowbite-svelte";
</script>
```

## Default list group

Here’s an example of a list group that you can use right away.

```svelte example class="flex justify-center" hideResponsiveButtons
{#include Default.svelte}
```

## List group with links

You can also display a series of links inside the list group element. Notice how items provide the `href` field.

You need to set the list to `active` mode to enable hovering, focus and links.

If list is active and data items contain `href` field entries are presented as `<a>` elements.

You can pass extra properties to the `<a>` element by setting the `attrs` attribute in the items list.

```svelte example class="flex justify-center"
{#include Links.svelte}
```

## List group with buttons

It is also possible to display a list of button element inside the list group component. The following example includes an active and disabled item as well.

You need to set the list to `active` mode to enable hovering, focus and `onclick`.

If list is active and data items do not contain `href` field entries are presented as `<button>` elements triggering `onclick` events.

You can pass extra properties to the `<button>` element by setting the `attrs` attribute in the items list.

```svelte example class="flex justify-center" hideResponsiveButtons
{#include Buttons.svelte}
```

## List group with icons

Use the following example to create a list of buttons as a menu together with SVG icons.

```svelte example class="flex justify-center" hideResponsiveButtons
{#include Icons.svelte}
```

## Horizontal list group

Use the `horizontal` property to change the direction of list items.

```svelte example class="flex justify-center" hideResponsiveButtons
{#include Group.svelte}
```

## Horizontal list with tooltip

Use the following example when you want to use `Tooltip` with a horizontal list.

```svelte example class="gap-4 flex flex-wrap justify-center items-center" hideResponsiveButtons
{#include Tooltip.svelte}
```

## Advanced

When non-standard usage is needed you can omit the `items` props and add elements directly to the list. Usage of hidden so far `ListgroupItem` helps you with proper layout.

```svelte example class="flex justify-center" hideResponsiveButtons
{#include Advanced.svelte}
```

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite List Group](https://flowbite.com/docs/components/list-group/)

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
