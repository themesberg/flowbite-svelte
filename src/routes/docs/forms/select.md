---
layout: componentLayout
title: Svelte Select - Flowbite
breadcrumb_title: Svelte Select
component_title: Select
dir: Forms
description: Get started with the select component to allow the user to choose from one or more options from a dropdown list based on multiple styles, sizes, and variants
---

<script lang="ts">
import { CompoAttributesViewer,  GitHubCompoLinks, toKebabCase } from '../../utils'
import { Badge, Kbd  } from '$lib';
import { ArrowUpOutline, ArrowDownOutline } from 'flowbite-svelte-icons';
const components = 'Select, MultiSelect'
</script>

The select input component can be used to gather information from users based on multiple options in the form of a dropdown list and by browsing this page you will find multiple options, styles, sizes, and variants built with the utility classes from Tailwind CSS also available in dark mode.

## Setup

```svelte example hideOutput
<script lang="ts">
  import { Select } from "flowbite-svelte";
</script>
```

## Select input example

Get started with the default example of a select input component to get a single option selection.

```svelte example
{#include Default.svelte}
```

## Clearable

```svelte example
{#include Clearable.svelte}
```

## Event

`onClear` is a `Select`'s prop and `onchange` is Svelte's built-in event handler for the native `<select>` element.

```svelte example
{#include Event.svelte}
```

## Disabled state

Apply the disable state to the select component to disallow the selection of new options.

```svelte example
{#include Disabled.svelte}
```

## Underline select

Use the underline style for the select component as an alternative appearance.

```svelte example
{#include Underline.svelte}
```

## Select with dropdown

Use this example if you want to create a multi-level dropdown and select component combination.

```svelte example class="h-64"
{#include Dropdown.svelte}
```

## Sizes

Get started with the small, default, and large sizes for the select component from the example below.

```svelte example
{#include Sizes.svelte}
```

## Custom options

If you want custom options, put them directly inside the component and leave the `items` prop unset. Furthermore, if the default placeholder is not what you want, set the `placeholder` prop to `""`.

```svelte example
{#include Custom.svelte}
```

## Accessing Select Element with elementRef

```svelte example
{#include ElementRef.svelte}
```

## MultiSelect

```svelte example hideOutput
<script lang="ts">
  import { MultiSelect } from "flowbite-svelte";
</script>
```

### Basic example

Get started with the default toggle component example as a checkbox element to receive a true or false selection from the user.

```svelte example class="h-96"
{#include Multi.svelte}
```

### Placeholder

```svelte example class="h-96"
{#include Placeholder.svelte}
```

### Disabled select

```svelte example class="h-24"
{#include MultiDisabled.svelte}
```

### MultiSelect Disabled Option

```svelte example class="h-80"
{#include MultiOption.svelte}
```

### Pre-select values

```svelte example class="h-80"
{#include Preselect.svelte}
```

### Keyboard Usage

Some keyboard interaction was implemented. Use <Kbd class="p-1.5"><ArrowUpOutline class="inline-block"/></Kbd>/<Kbd class="p-1.5"><ArrowDownOutline class="inline-block"/></Kbd> to highlight an item, then press <Kbd class="p-1.5">Enter</Kbd> or <Kbd class="p-1.5">SpaceBar</Kbd> to toggle the highlighted item. Press <Kbd class="p-1.5">Esc</Kbd> to close the selection pop-up.

### Customization

To customize the look and feel use the `children` snippet to insert inner [`Badge`](/docs/components/badge) component.

Remember to connect the `clear` snippet's prop to trigger option removal.

```svelte example class="h-96"
{#include Customization.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Select](https://flowbite.com/docs/forms/select/)

<GitHubCompoLinks {components}/>
