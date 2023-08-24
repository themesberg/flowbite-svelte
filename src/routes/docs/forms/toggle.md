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
  import { TableProp, TableDefaultRow, CompoAttributesViewer, DocBadgeList } from '../../utils'
  import { onMount } from 'svelte';
  import { Toggle, Badge, A } from '$lib'

  const components = 'Toggle'
</script>

The toggle component can be used to receive a simple “yes” or “no” type of answer from the user by choosing a single option from two options available in multiple sizes, styles, and colors coded with the utility classes from Tailwind CSS and with dark mode support.

## Setup

```svelte example hideOutput
<script>
  import { Toggle } from 'flowbite-svelte';
</script>
```

## Toggle examples

Get started with the default toggle component example as a checkbox element to receive a true or false selection from the user.

```svelte example class="flex flex-col gap-2" hideScript
<script>
  import { Toggle } from 'flowbite-svelte';
</script>

<Toggle>Toggle me</Toggle>
<Toggle checked={true}>Checked toggle</Toggle>
<Toggle disabled>Disabled toggle</Toggle>
<Toggle checked disabled>Disabled checked</Toggle>
```

## Colors

```svelte example class="flex justify-between" hideScript
<script>
  import { Toggle } from 'flowbite-svelte';
</script>

<Toggle color="red" checked>Red</Toggle>
<Toggle color="green" checked>Green</Toggle>
<Toggle color="purple" checked>Purple</Toggle>
<Toggle color="yellow" checked>Yellow</Toggle>
<Toggle color="teal" checked>Teal</Toggle>
<Toggle color="orange" checked>Orange</Toggle>
```

## Sizes

```svelte example class="flex flex-col gap-2"
<script>
  import { Toggle } from 'flowbite-svelte';
  const customSize = 'w-16 h-10 after:top-1 after:left-[4px]  after:h-8 after:w-8';
</script>

<Toggle size="small">Small toggle</Toggle>
<Toggle size="default" checked>Default toggle</Toggle>
<Toggle size="large" checked>Large toggle</Toggle>
<Toggle size="custom" {customSize}>Custom toggle</Toggle>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### Toggle styling

- Use the `class` prop to overwrite the `Checkbox` component.
- Use the 'classDiv`prop to overwrite the`divClass`.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Switch (Toggle)](https://flowbite.com/docs/forms/toggle/)
