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
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

The progress bar component can be used as an indicator to show the completion rate of data sets or it can be used as an animated loader component. There are multiple sizes, colors, and styles available.

## Setup

Import the `Progressbar` component in a script tag.

```svelte example hideOutput
<script>
  import { Progressbar } from 'flowbite-svelte';
</script>
```

## Default progress bar

Use the following example of a progress bar element to show a completion rate of 45% by using an inline style and the utility classes from Tailwind CSS.

```svelte example hideScript
<script>
  import { Progressbar } from 'flowbite-svelte';
</script>

<Progressbar progress="50" />
```

## Sizes

Use the `size` prop to change the size of a progress bar.

```svelte example hideScript
<script>
  import { Progressbar } from 'flowbite-svelte';
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
  import { Progressbar } from 'flowbite-svelte';
</script>

<Progressbar progress="50" size="h-4" labelInside />
```

## With label outside

Use the `labelOutside` prop to add the progress outside of a progress bar.

```svelte example hideScript
<script>
  import { Progressbar } from 'flowbite-svelte';
</script>

<Progressbar progress="50" labelOutside="Flowbite-Svelte" />
```

## Colors

Use the `color` prop to change the color of a progress bar.

```svelte example hideScript
<script>
  import { Progressbar } from 'flowbite-svelte';
</script>

<div class="my-4">
  <div class="mb-1 text-base font-medium dark:text-white">Gray</div>
  <Progressbar progress="50" color="gray" />
</div>

<div class="my-4">
  <div class="mb-1 text-base font-medium text-blue-700 dark:text-blue-500">Blue</div>
  <Progressbar progress="50" color="blue" />
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
  import { Progressbar } from 'flowbite-svelte';
</script>

<Progressbar progress="50" size="h-3" labelInside color="green" labelInsideClass="bg-blue-600 text-blue-100 text-xs font-medium text-center p-0 leading-none rounded-full" class="my-4" labelOutside="Size h-3" />

<Progressbar progress="50" size="h-10" labelInside color="red" labelInsideClass="bg-blue-600 text-blue-100 text-2xl font-medium text-center p-2 leading-none rounded-full" class="my-4" labelOutside="Size h-10" />

<Progressbar progress="50" size="h-6" labelInside labelInsideClass="bg-blue-600 text-blue-100 text-base font-medium text-center p-1 leading-none rounded-full" class="my-4" labelOutside="Size h-6" />
```

## Animation

By default progress bar has animation disabled, you can activate with `animate`, you can custumize with `tweenDuration` and `easing`. By changing `precision` you can custumize the precision inside the progress bar.

```svelte example
<script>
  import { Progressbar, Button } from 'flowbite-svelte';
  import { sineOut } from 'svelte/easing';

  let progress = '45'
</script>

<Progressbar
  {progress}
  animate
  precision={2}
  labelOutside="With animation"
  labelInside
  tweenDuration={1500}
  easing={sineOut}
  size="h-6"
  labelInsideClass="bg-blue-600 text-blue-100 text-base font-medium text-center p-1 leading-none rounded-full"
  class="mb-8"
/>
<Progressbar
  {progress}
  labelOutside="Without animation"
  labelInside
  size="h-6"
  labelInsideClass="bg-blue-600 text-blue-100 text-base font-medium text-center p-1 leading-none rounded-full"
/>
<Button on:click={() => (progress = `${Math.round(Math.random() * 100)}`)} class="mt-8">
  Randomize
</Button>
```

## Custom color

Use the `progressClass` prop to change the color of the progress bar.

```svelte example
<script>
  import { Progressbar } from 'flowbite-svelte';
</script>

<div class="space-y-4">
  <Progressbar progress="40" progressClass="bg-sky-600 dark:bg-sky-400" />
  <Progressbar progress="40" progressClass="bg-lime-600 dark:bg-lime-400" />
  <Progressbar progress="40" progressClass="bg-pink-600 dark:bg-pink-400" />
</div>
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### Progressbar styling

- Use the `class` prop to overwrite the `div` class.
- Use the `classLabelOutside` prop to overwrite the outside `div` class.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Progress Bar](https://flowbite.com/docs/components/progress/)

<GitHubCompoLinks />
