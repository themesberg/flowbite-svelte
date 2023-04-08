---
layout: componentLayout
title: Svelte Label - Flowbite
breadcrumb_title: Label
dir: Utilities
description: The Label components are used throughout the library and you can use it for your app as well
---


<MetaTag {breadcrumb_title} {title} {dir} {description}/>

<script>
  import { PageHeadSection, TableProp, TableDefaultRow, MetaTag } from '../utils';
  import { A } from '$lib';
  import { props as items } from '../props/Label.json';
  let propHeader = ['Name', 'Type', 'Default'];
  let divClass = 'w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4';
  let theadClass = 'text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white';
  // lib files
  const libFiles = import.meta.glob('../../lib/forms/Label.svelte')
</script>

<PageHeadSection {dir} {breadcrumb_title} {title} {description} {libFiles}/>

## Label

Use the `Label` component when you need to add a label.

```svelte example
<script>
  import { Label, Checkbox } from 'flowbite-svelte'
</script>

<Label color="red" class="mt-4 flex items-center font-bold italic">
  <Checkbox class="mr-2" /> Your Label
</Label>
```

## Props

The component has the following props, type, and default values. 
See <A class="hover:underline" href="/pages/types">the types page</A>
for type information.

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState="hover" />
</TableProp>
