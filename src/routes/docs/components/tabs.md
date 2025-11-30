---
layout: componentLayout
title: Svelte Tabs - Flowbite
breadcrumb_title: Svelte Tabs
component_title: Tabs
dir: Components
description: Use these responsive tabs components to create a secondary navigational hierarchy for your website or toggle content inside a container
thumbnailSize: w-64
---

<script lang="ts">
  import { CompoAttributesViewer,  GitHubCompoLinks, toKebabCase, LlmLink } from '../../utils'
  import { Badge, P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

The tabs component can be used either as an extra navigational hierarchy complementing the main navbar or you can also use it to change content inside a container just below the tabs using the data attributes from Flowbite.

## Setup

```svelte example hideOutput
<script lang="ts">
  import { Tabs, TabItem } from "flowbite-svelte";
</script>
```

## Default tabs

Use the following default tabs component example to show a dynamic content in your webpage.

<p class="my-2"></p>

If your tab title is a simple string set the `title` property on `TabItem`, otherwise when more control is needed overwrite the `title` slot.

<p class="my-2"></p>

The last tab in that example shows not only how to show a disabled tab, but how to use the `title` slot entry as well.

```svelte example
{#include Default.svelte}
```

## Tabs with underline

You can control the style of tabs component by setting the `activeClasses` and `inactiveClasses` on the `TabItem` elements.

<p class="my-2"></p>

However tabs component comes with several pre-defined styles that are accessible to you by setting the `tabStyle` property. This will set the `activeClasses` and `inactiveClasses` properties for you.

<p class="my-2"></p>

Use the `tabStyle="underline"` to achieve this alternative tabs component style with an underline instead of a background when hovering and being active on a certain page.

```svelte example
{#include Underline.svelte}
```

## Tabs with icons

This is an example of the tabs component where you can also use an SVG‑powered icon to complement the text within the navigational tabs. Use icon components for a simple syntax. See <a href="/icons">Icons</a> for more details.

```svelte example
{#include Icons.svelte}
```

## Pills tabs

If you want to use pills as a style for the tabs component use `tabStyle="pill"`.

```svelte example
{#include Pills.svelte}
```

## Full‑width tabs

If you want to show the tabs on the full width relative to the parent element use `tabStyle="full"` prop.

```svelte example
{#include Full.svelte}
```

## Tabs with selected and key

You can control which tab is active using the selected prop on `<Tabs>` together with a key on each `<TabItem>`.

```svelte example
{#include BindSelected.svelte}
```

## Components in tab contents

You can add other components to the `TabItem` component. Here we are adding a timeline component in the tab 1:

```svelte example class="h-auto"
{#include CompoIn.svelte}
```

## Using Svelte's snapshot to preserve the input

Use the following example to preserve the input value. First fill out the form, navigate to a different page, and then use your browser’s back button. You’ll notice that your input is preserved automatically.

```svelte example hideOutput
{#include Snapshot.svelte}
```


## Active class

Use the following example to add active class.

```svelte example
{#include ActiveClass.svelte}
```


## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Tabs](https://flowbite.com/docs/components/tabs/)

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
