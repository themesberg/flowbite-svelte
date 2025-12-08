---
layout: componentLayout
title: Svelte StepIndicator
breadcrumb_title: StepIndicator
component_title: StepIndicator
dir: Extend
description: Use the step indicator component to show the progress of a process.
---

<script lang="ts">
  import {  TableProp, TableDefaultRow, CompoAttributesViewer, GitHubCompoLinks, LlmLink } from '../../utils'
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

## Clickable navigation

The step indicator supports clickable navigation by default. Click on any step to navigate to it. Use the `onStepClick` callback to handle navigation events.

```svelte example
{#include Clickable.svelte}
```

## Clickable multi-step form

Here's a complete example of using the step indicator with a multi-step form. Users can click on any completed step to go back and edit their information.

```svelte example class="max-w-2xl h-[430px]"
{#include ClickableForm.svelte}
```

## Non-clickable

Set `clickable={false}` to disable click navigation on the step indicators.

```svelte example
{#include NonClickable.svelte}
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

## GitHub Links

<GitHubCompoLinks {components} dir="extend"/>

## LLM Link

<LlmLink />
