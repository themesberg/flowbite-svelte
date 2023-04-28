---
layout: componentLayout
title: Svelte Progress Bar - Flowbite
breadcrumb_title: Svelte Progress bar
component_title: Progress
dir: Components
description: Use the progress bar component to show the completion rate of a data indicator or use it as a loader element
thumnailSize: w-48
---

<script>
  import { TableProp, TableDefaultRow, } from '../../utils'
  import { P, A } from '$lib'
  import { props as items } from '../../props/Progressbar.json'
</script>



The progress bar component can be used as an indicator to show the completion rate of data sets or it can be used as an animated loader component. There are multiple sizes, colors, and styles available.

## Setup

Import the `Progressbar` component in a script tag.

```svelte example hideOutput
<script>
  import { Progressbar } from 'flowbite-svelte'
</script>
```

## Default progress bar

Use the following example of a progress bar element to show a completion rate of 45% by using an inline style and the utility classes from Tailwind CSS.

```svelte example hideScript
<script>
  import { Progressbar } from 'flowbite-svelte'
</script>

<Progressbar progress="50" />
```

## Sizes

Use the `size` prop to change the size of a progress bar.

```svelte example hideScript
<script>
  import { Progressbar } from 'flowbite-svelte'
</script>

<div class="my-4">
<div class="mb-1 text-base font-medium dark:text-white">Small</div>
  <Progressbar progress="50" size="h-1.5" />
</div>

<div class="my-4">
<div class="mb-1 text-base font-medium dark:text-white">Default</div>
  <Progressbar progress="50" size="h-2.5" />
</div>

<div class="my-4">
<div class="mb-1 text-lg font-medium dark:text-white">Large</div>
  <Progressbar progress="50" size="h-4" />
</div>

<div class="my-4">
<div class="mb-1 text-lg font-medium dark:text-white">Extra Large</div>
  <Progressbar progress="50" size="h-6" />
</div>
```

## With label inside

Use the `labelInside` prop to add the progress in a progress bar.

```svelte example hideScript
<script>
  import { Progressbar } from 'flowbite-svelte'
</script>

<Progressbar progress="50" size="h-4" labelInside />
```

## With label outside

Use the `labelOutside` prop to add the progress outside of a progress bar.

```svelte example hideScript
<script>
  import { Progressbar } from 'flowbite-svelte'
</script>

<Progressbar progress="50" labelOutside="Flowbite-Svelte" />
```

## Colors

Use the `color` prop to change the color of a progress bar.

```svelte example hideScript
<script>
  import { Progressbar } from 'flowbite-svelte'
</script>

<div class="my-4">
<div class="mb-1 text-base font-medium dark:text-white">Gray</div>
  <Progressbar progress="50" color="gray" />
</div>

<div class="my-4">
<div class="mb-1 text-base font-medium text-blue-700 dark:text-blue-500">Blue/Default</div>
  <Progressbar progress="50" />
</div>

<div class="my-4">
<div class="mb-1 text-base font-medium text-red-700 dark:text-red-500">Red</div>
  <Progressbar progress="50" color="red" />
</div>

<div class="my-4">
<div class="mb-1 text-base font-medium text-green-700 dark:text-green-500">Green</div>
  <Progressbar progress="50" color="green" />
</div>

<div class="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">Yellow</div>
<div class="my-4">
  <Progressbar progress="50" color="yellow" />
</div>

<div class="mb-1 text-base font-medium text-indigo-700 dark:text-indigo-400">Indigo</div>
<div class="my-4">
  <Progressbar progress="50" color="indigo" />
</div>

<div class="mb-1 text-base font-medium text-purple-700 dark:text-purple-400">Purple</div>
<div class="my-4">
  <Progressbar progress="50" color="purple" />
</div>
```

## Custom style

Use `labelInsideClass` prop to style your progressbar.

```svelte example hideScript
<script>
  import { Progressbar } from 'flowbite-svelte'
</script>

<Progressbar
  progress="50"
  size="h-3"
  labelInside
  color="green"
  labelInsideClass="bg-blue-600 text-blue-100 text-xs font-medium text-center p-0 leading-none rounded-full"
  class="my-4"
  labelOutside="Size h-3" />

<Progressbar
  progress="50"
  size="h-10"
  labelInside
  color="red"
  labelInsideClass="bg-blue-600 text-blue-100 text-2xl font-medium text-center p-2 leading-none rounded-full"
  class="my-4"
  labelOutside="Size h-10" />

<Progressbar
  progress="50"
  size="h-6"
  labelInside
  labelInsideClass="bg-blue-600 text-blue-100 text-base font-medium text-center p-1 leading-none rounded-full"
  class="my-4"
  labelOutside="Size h-6" />
```

## Props

The component has the following props, type, and default values. See <A href="/docs/pages/typescript">types page</A> for type information.

<TableProp>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

## References

<P>
  <A href="https://flowbite.com/docs/components/progress/" target="_blank" rel="noreferrer" class="link"
    >Flowbite Progress bar</A
  >
</P>
