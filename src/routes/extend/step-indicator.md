---
layout: componentLayout
title: Svelte Step Indicator
breadcrumb_title: Step Indicator
dir: Components
description: Use the step indicator component to show the progress of a process.
---

<MetaTag {breadcrumb_title} {title} {dir} {description}/>

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow, MetaTag } from '../utils'
  
  import { Breadcrumb, BreadcrumbItem, Heading, P, A } from '$lib'
  import { props as items } from '../props/StepIndicator.json'
  // Props table
  let propHeader = ['Name', 'Type', 'Default']
  let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb class="pt-16 py-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<CompoDescription>{description}</CompoDescription>

<ExampleDiv>
<GitHubSource href="steps/StepIndicator.svelte">Step Indicator</GitHubSource>
</ExampleDiv>

The Step Indicator component is a simple component to show the progress of a process. It can be used to show the progress of a multi-step form or a multi-step process.

<Htwo label="Setup" />

Import the `StepIndicator` component in a script tag.

```html
<script>
  import { StepIndicator } from 'flowbite-svelte'
</script>
```

<Htwo label="Default step indicator" />

Use the following example of a step indicator element to show a progress of step 2 out of 5.

```svelte example
<script>
  import { StepIndicator } from 'flowbite-svelte'
  let currentStep = 2;
  let steps = [
    'Step 1',
    'Step 2',
    'Step 3',
    'Step 4',
    'Step 5'
  ]
</script>

<StepIndicator {currentStep} {steps}/>
```

<Htwo label="Glow" />

Use the `glow` prop to add a glow effect to the current step.

```svelte example hideScript
<script>
  import { StepIndicator } from 'flowbite-svelte'
  let currentStep = 2;
  let steps = [
    'Step 1',
    'Step 2',
    'Step 3',
    'Step 4',
    'Step 5'
  ]
</script>

<StepIndicator {currentStep} {steps} glow/>
```

<Htwo label="Hide label" />

Use the `hideLabel` prop to hide the label of the current step.

```svelte example hideScript
<script>
  import { StepIndicator } from 'flowbite-svelte'
  let currentStep = 2;
  let steps = [
    'Step 1',
    'Step 2',
    'Step 3',
    'Step 4',
    'Step 5'
  ]
</script>

<StepIndicator {currentStep} {steps} hideLabel/>
```

<Htwo label="Sizes" />

Use the `size` prop to change the size of a step indicator.

```svelte example hideScript
<script>
  import { StepIndicator } from 'flowbite-svelte'
  let currentStep = 2;
  let steps = [
    'Step 1',
    'Step 2',
    'Step 3',
    'Step 4',
    'Step 5'
  ]
</script>

<div class="my-4">
<div class="mb-1 text-base font-medium dark:text-white">Small</div>
    <StepIndicator {currentStep} {steps} size="h-1.5" />
</div>

<div class="my-4">
<div class="mb-1 text-base font-medium dark:text-white">Default</div>
    <StepIndicator {currentStep} {steps} size="h-2.5" />
</div>

<div class="my-4">
<div class="mb-1 text-lg font-medium dark:text-white">Large</div>
    <StepIndicator {currentStep} {steps} size="h-4" />
</div>

<div class="my-4">
<div class="mb-1 text-lg font-medium dark:text-white">Extra Large</div>
    <StepIndicator {currentStep} {steps} size="h-6" />
</div>
```

<Htwo label="Colors" />

Use the `color` prop to change the color of a step indicator.

```svelte example hideScript
<script>
  import { StepIndicator } from 'flowbite-svelte'
  let currentStep = 2;
  let steps = [
    'Step 1',
    'Step 2',
    'Step 3',
    'Step 4',
    'Step 5'
  ]
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

<Htwo label="Props" />

The component has the following props, type, and default values. See <A href="/pages/types">types page</A> for type information.

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>
