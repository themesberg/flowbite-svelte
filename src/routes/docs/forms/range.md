---
layout: componentLayout
title: Svelte Range Slider - Flowbite
breadcrumb_title: Svelte Range Slider
component_title: Range
dir: Forms
description: Get started with the range component to receive a number from the user anywhere from 1 to 100 by sliding form control horizontally based on multiple options
---

<script>
  import { CompoAttributesViewer,  GitHubCompoLinks, toKebabCase } from '../../utils'
  const components = 'Range'
  let minmaxValue=5
</script>

The range component can be used as an input field to get a number from the user based on your custom selection (ie. from 1 to 100) by using a sliding animation.

## Setup

```svelte example hideOutput
<script>
  import { Range } from "flowbite-svelte";
</script>
```

## Range slider example

```svelte example
{@include Default.svelte}
```

## Disabled state

```svelte example
{@include Disabled.svelte}
```

## Binding value

Use bind:value to bind the range input value as seen the the following examples.

## Min and max

```svelte example
{@include MinAndMax.svelte}
```

## Steps

```svelte example
{@include Steps.svelte}
```

## Sizes

```svelte example class="space-y-6"
{@include Sizes.svelte}
```

## Unknown attributes

Since we added `...restProps` to input field, you can contain the props which are not declared with export. It will pass down other unknown attributes to an element in a component.

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {components}/>

## References

- [Flowbite Range Slider](https://flowbite.com/docs/forms/range/)

<GitHubCompoLinks {components}/>
