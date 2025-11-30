---
layout: componentLayout
title: Svelte Stepper - Flowbite
breadcrumb_title: Svelte Stepper
component_title: Stepper
dir: Components
description: Use the stepper component to show the number of steps required to complete a form inside your application
thumbnailSize: w-48
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, LlmLink } from '../../utils'
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

## Default Active Step

- Stepper, BreadcrumbStepper, VerticalStepper: Default current = 1 (first step active)
- ProgressStepper, DetailedStepper: Default current = 0 (no step active)

Set current = 0 on any component to start with all steps pending.

## Default stepper

Use this example to show a list of form steps with a number and title of the step in a horizontal alignment.

```svelte example class="space-y-4"
{#include DefaultBasic.svelte}
```

```svelte example class="space-y-4"
{#include DefaultIcon.svelte}
```

```svelte example class="space-y-4"
{#include DefaultOverride.svelte}
```

## ProgressStepper

This example can be used to show the progress of the stepper component based on numbers or icons and showing a checkmark when the step has been finished.

Steps show numbers by default. Completed steps show checkmarks.

```svelte example class="space-y-4"
{#include ProgressBasic.svelte}
```

When icons are provided, they replace the default numbers. Completed steps still show checkmarks by default.

```svelte example class="space-y-4"
{#include ProgressIcon.svelte}
```

This example shows how you can manually override the status of specific steps. The first step is forced to `completed` and the last step is forced to `pending`.

```svelte example class="space-y-4"
{#include ProgressOverride.svelte}
```

## DetailedStepper

Use this example to show an extra subtitle next to the number and the title of the stepper component based on an ordered list element.


- `onStepClick` prop can be used for an event handler.
- `clickable` prop allows clicking steps to navigate (default: true)

```svelte example
{#include DetailedBasic.svelte}
```

`showCheckmarkForCompleted` shows checkmark for completed steps instead of icons (default: true).

```svelte example
{#include DetailedIcon.svelte}
```

Following example shows how to override `current` prop using custom status.

- Use `status: "completed" | "current" | "pending"` to override.
- Use `false` for `clickable`.

```svelte example
{#include DetailedOverride.svelte}
```

## VerticalStepper

This example can be used to show a list of steps aligned vertically where you can indicate the completed, currently active, and the unexplored steps.

```svelte example
{#include VerticalBasic.svelte}
```
This example shows how to use custom icons:

```svelte example
{#include VerticalIcon.svelte}
```

This example shows how to override using custom status:

```svelte example
{#include VerticalOverride.svelte}
```

## BreadcrumbStepper

This example can be used to show the number of steps similar to how a breadcrumb component looks like by using double chevron icons between the items.

```svelte example
{#include BreadcrumbBasic.svelte}
```

This example shows how to use custom icons:

```svelte example
{#include BreadcrumbIcon.svelte}
```

This example shows how to override using custom status:

```svelte example
{#include BreadcrumbOverride.svelte}
```

## TimelineStepper

Use this example to show the number of steps inside a timeline component using icons, title, and subtitle for each step.

```svelte example
{#include TimelineBasic.svelte}
```

This example shows how to use custom icons:

```svelte example
{#include TimelineIcon.svelte}
```

This example shows how to override using custom status:

```svelte example
{#include TimelineOverride.svelte}
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

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
