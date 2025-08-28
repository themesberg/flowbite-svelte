---
layout: componentLayout
title: Svelte Stepper - Flowbite
breadcrumb_title: Svelte Stepper
component_title: Stepper
dir: Components
description: Use the stepper component to show the number of steps required to complete a form inside your application
thumnailSize: w-48
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

The stepper component can be used to show a numbered list of steps next to a form component to indicate the progress and number of steps that are required to complete and submit the form data.

There are multiple examples that you can use including horizontal or vertical aligned stepper components, different sizes, styles, and showing icons or numbers all coded with the utility classes from Tailwind CSS.

## Setup

```svelte example hideOutput
<script lang="ts">
  import { BreadcrumbStepper, DetailedStepper, ProgressStepper, Stepper, TimelineStepper, VerticalStepper } from "flowbite-svelte";
</script>
```

## Default stepper

Use this example to show a list of form steps with a number and title of the step in a horizontal alignment.

```svelte example class="space-y-4"
{#include Default.svelte}
```

## ProgressStepper

This example can be used to show the progress of the stepper component based only on icons and showing a checkmark when the step has been finished.

```svelte example class="space-y-4"
{#include Progress.svelte}
```

## DetailedStepper

Use this example to show an extra subtitle next to the number and the title of the steppper component based on an ordered list element.

```svelte example
{#include Detailed.svelte}
```

## VerticalStepper

This example can be used to show a list of steps aligned vertically where you can indicate the completed, currently active, and the unexplored steps.

```svelte example
{#include Vertical.svelte}
```

## BreadcrumbStepper

This example can be used to show the number of steps similar to how a breadcrumb component looks like by using double chevron icons between the items.

```svelte example
{#include Breadcrumb.svelte}
```

## TimelineStepper

Use this example to show the number of steps inside a timeline component using icons, title, and subtitle for each step.

```svelte example
{#include Timeline.svelte}
```

## Stepper with form

Use this example to show the stepper component next to a form layout and change the content based on which currently step your are completing.

```svelte example
{#include Form.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Sidebar](https://flowbite.com/docs/components/stepper)

<GitHubCompoLinks />
