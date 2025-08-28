---
layout: componentLayout
title: Svelte StepIndicator
breadcrumb_title: StepIndicator
component_title: StepIndicator
dir: Extend
description: Use the step indicator component to show the progress of a process.
---

<script lang="ts">
  import {  TableProp, TableDefaultRow, CompoAttributesViewer } from '../../utils'
  import { P, A } from '$lib'
  const components = 'StepIndicator'
</script>

The Step Indicator component is a simple component to show the progress of a process. It can be used to show the progress of a multi-step form or a multi-step process.

## Setup

Import the `StepIndicator` component in a script tag.

```svelte example hideOutput
<script lang="ts">
  import { StepIndicator } from "flowbite-svelte";
</script>
```

## Default step indicator

Use the following example of a step indicator element to show a progress of step 2 out of 5.

```svelte example
{#include Default.svelte}
```

## Glow

Use the `glow` prop to add a glow effect to the current step.

```svelte example
{#include Glow.svelte}
```

## Hide label

Use the `hideLabel` prop to hide the label of the current step.

```svelte example
{#include HideLabel.svelte}
```

## Sizes

Use the `size` prop to change the size of a step indicator.

```svelte example
{#include Sizes.svelte}
```

## Colors

Use the `color` prop to change the color of a step indicator.

```svelte example
{#include Colors.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### StepIndicator styling

- Use the `class` prop to overwrite the default class.

<CompoAttributesViewer {components}/>
