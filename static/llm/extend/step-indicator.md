# Svelte StepIndicator


<script lang="ts">
  import {  TableProp, TableDefaultRow, CompoAttributesViewer } from '../../utils'
  import { P, A } from '$lib'
  const components = 'StepIndicator'
</script>

The Step Indicator component is a simple component to show the progress of a process. It can be used to show the progress of a multi-step form or a multi-step process.

## Setup

Import the `StepIndicator` component in a script tag.

```svelte
<script lang="ts">
  import { StepIndicator } from "flowbite-svelte";
</script>
```

## Default step indicator

Use the following example of a step indicator element to show a progress of step 2 out of 5.

```svelte
{#include Default.svelte}
```

## Glow

Use the `glow` prop to add a glow effect to the current step.

```svelte
{#include Glow.svelte}
```

## Hide label

Use the `hideLabel` prop to hide the label of the current step.

```svelte
{#include HideLabel.svelte}
```

## Sizes

Use the `size` prop to change the size of a step indicator.

```svelte
{#include Sizes.svelte}
```

## Colors

Use the `color` prop to change the color of a step indicator.

```svelte
{#include Colors.svelte}
```

## Component data

### StepIndicator

#### Types

[StepIndicatorProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1518)

#### Props

- steps: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"]
- currentStep: 1
- size: "md"
- color: "primary"
- glow: false
- hideLabel: false
- completedCustom: ""
- currentCustom: ""
- class: className
- classes


### StepIndicator styling

- Use the `class` prop to overwrite the default class.

<CompoAttributesViewer {components}/>
