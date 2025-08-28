---
layout: componentLayout
title: Svelte Mega Menu - Flowbite
breadcrumb_title: Svelte Mega Menu
component_title: Mega menu
dir: Components
description: Use the mega menu component as a full-width dropdown inside the navbar to show a list of menu items based on multiple sizes, variants, and styles
---

<script>
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils';
  import { P, A } from '$lib';
  const dirName = toKebabCase(component_title)
</script>

The mega menu component is a full-width dropdown that can be triggered by clicking on the menu item and it shows a list of links that you can use to navigate through the pages on a website.

## Setup

```svelte example hideOutput
<script>
  import { MegaMenu } from "flowbite-svelte";
</script>
```

## Default mega menu

Use this example to show a list of links aligned on three columns inside the mega menu dropdown.

```svelte example class="h-[30rem] md:h-80"
{#include Default.svelte}
```

## Mega menu with icons

This example of a mega menu dropdown can be used to also show an icon near the text of the link.

```svelte example class="h-[30rem] md:h-80"
{#include Icons.svelte}
```

## Transition

Since the `MegaMenu` component extends `Popper`, it also supports the `transition` and `transitionParams` props for customizing animations.

```svelte example class="h-[55rem] md:h-[30rem] relative"
{#include Transition.svelte}
```

## A11y

Use `Tab` and `Shift+Tab` to navigate between buttons or links in the mega menu. Press `ESC` to close it.

## Full width dropdown

Use this example to show a mega menu dropdown that spans the entire width of the document page.

```svelte example class="h-[55rem] md:h-[30rem] relative"
{#include Dropdown.svelte}
```

## Full width with CTA

This example can be used to also show a CTA button or link next to the menu items inside the dropdown.

```svelte example class="h-[40rem] md:h-96 relative"
{#include Cta.svelte}
```

## Full width with image

This example can be used to also show a CTA with a backdround image inside the dropdown next to the other menu items and links.

```svelte example class="h-[40rem] md:h-96 relative"
{#include Image.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Mega Menu](https://flowbite.com/docs/components/list-group/)

<GitHubCompoLinks />
