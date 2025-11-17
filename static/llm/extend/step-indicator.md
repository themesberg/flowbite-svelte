# Svelte StepIndicator


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
<script lang="ts">
  import { StepIndicator } from "flowbite-svelte";
  let currentStep = 2;
  let steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
</script>

<StepIndicator {currentStep} {steps} />
```

## Glow

Use the `glow` prop to add a glow effect to the current step.

```svelte
<script lang="ts">
  import { StepIndicator } from "flowbite-svelte";
  let currentStep = 2;
  let steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
</script>

<StepIndicator {currentStep} {steps} glow />
```

## Hide label

Use the `hideLabel` prop to hide the label of the current step.

```svelte
<script lang="ts">
  import { StepIndicator } from "flowbite-svelte";
  let currentStep = 2;
  let steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
</script>

<StepIndicator {currentStep} {steps} hideLabel />
```

## Sizes

Use the `size` prop to change the size of a step indicator.

```svelte
<script lang="ts">
  import { StepIndicator } from "flowbite-svelte";
  let currentStep = 2;
  let steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
</script>

<div class="my-4">
  <div class="mb-1 text-base font-medium dark:text-white">xs</div>
  <StepIndicator {currentStep} {steps} size="xs" />
</div>

<div class="my-4">
  <div class="mb-1 text-base font-medium dark:text-white">sm</div>
  <StepIndicator {currentStep} {steps} size="sm" />
</div>

<div class="my-4">
  <div class="mb-1 text-base font-medium dark:text-white">Default</div>
  <StepIndicator {currentStep} {steps} size="md" />
</div>

<div class="my-4">
  <div class="mb-1 text-lg font-medium dark:text-white">lg</div>
  <StepIndicator {currentStep} {steps} size="lg" />
</div>

<div class="my-4">
  <div class="mb-1 text-lg font-medium dark:text-white">xl</div>
  <StepIndicator {currentStep} {steps} size="xl" />
</div>
```

## Colors

Use the `color` prop to change the color of a step indicator.

```svelte
<script lang="ts">
  import { StepIndicator } from "flowbite-svelte";
  let currentStep = 2;
  let steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
</script>

<div class="my-4">
  <div class="mb-1 text-base font-medium dark:text-white">Gray</div>
  <StepIndicator {currentStep} {steps} color="gray" />
</div>

<div class="my-4">
  <div class="mb-1 text-base font-medium text-blue-700 dark:text-blue-500">Blue/Default</div>
  <StepIndicator {currentStep} {steps} color="blue" />
</div>

<div class="my-4">
  <div class="mb-1 text-base font-medium text-red-700 dark:text-red-500">Red</div>
  <StepIndicator {currentStep} {steps} color="red" />
</div>

<div class="my-4">
  <div class="mb-1 text-base font-medium text-green-700 dark:text-green-500">Green</div>
  <StepIndicator {currentStep} {steps} color="green" />
</div>

<div class="mb-1 text-base font-medium text-yellow-700 dark:text-yellow-500">Yellow</div>
<div class="my-4">
  <StepIndicator {currentStep} {steps} color="yellow" />
</div>

<div class="mb-1 text-base font-medium text-indigo-700 dark:text-indigo-400">Indigo</div>
<div class="my-4">
  <StepIndicator {currentStep} {steps} color="indigo" />
</div>

<div class="mb-1 text-base font-medium text-purple-700 dark:text-purple-400">Purple</div>
<div class="my-4">
  <StepIndicator {currentStep} {steps} color="purple" />
</div>

<div class="mb-1 text-base font-medium text-pink-700 dark:text-pink-400">Pink</div>
<div class="my-4">
  <StepIndicator {currentStep} {steps} color="pink" />
</div>
```

## Component data

### StepIndicator

#### Types

[StepIndicatorProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1564)

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
