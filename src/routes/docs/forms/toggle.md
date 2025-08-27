---
layout: componentLayout
title: Svelte Toggle (Switch) - Flowbite
breadcrumb_title: Svelte Toggle (Switch)
component_title: Toggle
dir: Forms
description: Use the toggle component to switch between a binary state of true or false using a single click available in multiple sizes, variants, and colors
thumbnailSize: w-72
---

<script>
  import { CompoAttributesViewer,  GitHubCompoLinks, toKebabCase } from '../../utils'
  import { onMount } from 'svelte';
  import { Toggle } from '$lib'

  const components = 'Toggle'
</script>

The toggle component can be used to receive a simple “yes” or “no” type of answer from the user by choosing a single option from two options available in multiple sizes, styles, and colors coded with the utility classes from Tailwind CSS and with dark mode support.

## Setup

```svelte example hideOutput
<script>
  import { Toggle } from "flowbite-svelte";
</script>
```

## Toggle examples

Get started with the default toggle component example as a checkbox element to receive a true or false selection from the user.

```svelte example class="flex flex-col gap-2" hideScript
{@include Default.svelte}
```

## Colors

```svelte example class="flex justify-between" hideScript hideResponsiveButtons
{@include Colors.svelte}
```

## Sizes

```svelte example class="flex flex-col gap-2"
{@include Sizes.svelte}
```

## Label for off state

```svelte example class="flex flex-col gap-2"
{@include Label.svelte}
```

## Disabled

```svelte example class="flex flex-col gap-2"
{@include Disabled.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Switch (Toggle)](https://flowbite.com/docs/forms/toggle/)

<GitHubCompoLinks {components}/>
