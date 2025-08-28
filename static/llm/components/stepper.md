# Svelte Stepper - Flowbite


<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

The stepper component can be used to show a numbered list of steps next to a form component to indicate the progress and number of steps that are required to complete and submit the form data.

There are multiple examples that you can use including horizontal or vertical aligned stepper components, different sizes, styles, and showing icons or numbers all coded with the utility classes from Tailwind CSS.

## Setup

```svelte
<script lang="ts">
  import { BreadcrumbStepper, DetailedStepper, ProgressStepper, Stepper, TimelineStepper, VerticalStepper } from "flowbite-svelte";
</script>
```

## Default stepper

Use this example to show a list of form steps with a number and title of the step in a horizontal alignment.

```svelte
{#include Default.svelte}
```

## ProgressStepper

This example can be used to show the progress of the stepper component based only on icons and showing a checkmark when the step has been finished.

```svelte
{#include Progress.svelte}
```

## DetailedStepper

Use this example to show an extra subtitle next to the number and the title of the steppper component based on an ordered list element.

```svelte
{#include Detailed.svelte}
```

## VerticalStepper

This example can be used to show a list of steps aligned vertically where you can indicate the completed, currently active, and the unexplored steps.

```svelte
{#include Vertical.svelte}
```

## BreadcrumbStepper

This example can be used to show the number of steps similar to how a breadcrumb component looks like by using double chevron icons between the items.

```svelte
{#include Breadcrumb.svelte}
```

## TimelineStepper

Use this example to show the number of steps inside a timeline component using icons, title, and subtitle for each step.

```svelte
{#include Timeline.svelte}
```

## Stepper with form

Use this example to show the stepper component next to a form layout and change the content based on which currently step your are completing.

```svelte
{#include Form.svelte}
```

## Component data

### BreadcrumbStepper

#### Types

[BreadcrumbStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1598)

#### Props

- children
- steps: []
- class: className
- classes

### DetailedStepper

#### Types

[DetailedStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1567)

#### Props

- children
- steps: []
- contentClass
- class: className
- classes

### ProgressStepper

#### Types

[ProgressStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1552)

#### Props

- children
- steps: []
- class: className
- classes

### Stepper

#### Types

[StepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1540)

#### Props

- children
- steps: []
- class: className
- classes

### TimelineStepper

#### Types

[TimelineStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1612)

#### Props

- children
- steps: []
- class: className
- classes
- contentClass

### VerticalStepper

#### Types

[VerticalStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1582)

#### Props

- children
- steps: []
- liClass
- class: className
- classes


## References

- [Flowbite Sidebar](https://flowbite.com/docs/components/stepper)


