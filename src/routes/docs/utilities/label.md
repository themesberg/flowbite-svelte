---
layout: componentLayout
title: Svelte Label - Flowbite
breadcrumb_title: Svelte Label
component_title: Label
dir: Utilities
description: The Label components are used throughout the library and you can use it for your app as well
---

<script>
  import { TableProp, TableDefaultRow, GitHubSourceList, CompoAttributesViewer } from '../../utils';
  import { A } from '$lib';

  const components = 'Label'
  let divClass = 'w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4';
  let theadClass = 'text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white';
</script>

## Label

Use the `Label` component when you need to add a label.

```svelte example
<script>
  import { Label, Checkbox } from 'flowbite-svelte';
</script>

<Label color="red" class="mt-4 flex items-center font-bold italic">
  <Checkbox class="mr-2" /> Your Label
</Label>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### Label styling

- Use the `class` prop to overwrite `defaultClass`.

<CompoAttributesViewer {components}/>
