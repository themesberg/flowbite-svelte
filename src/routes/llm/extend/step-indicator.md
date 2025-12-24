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

## Clickable navigation

The step indicator supports clickable navigation by default. Click on any step to navigate to it. Use the `onStepClick` callback to handle navigation events.

```svelte
<script lang="ts">
  import { StepIndicator, Button } from "flowbite-svelte";

  let currentStep = $state(1);
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];

  function handleStepClick({ current, last }: { current: number; last: number }) {
    console.log(`Navigated from step ${last} to step ${current}`);
  }

  function next() {
    if (currentStep < steps.length) {
      currentStep++;
    }
  }

  function prev() {
    if (currentStep > 1) {
      currentStep--;
    }
  }

  function reset() {
    currentStep = 1;
  }
</script>

<div class="space-y-6">
  <StepIndicator bind:currentStep {steps} onStepClick={handleStepClick} />

  <div class="flex gap-2">
    <Button onclick={prev} disabled={currentStep === 1}>Previous</Button>
    <Button onclick={next} disabled={currentStep === steps.length}>Next</Button>
    <Button onclick={reset} color="alternative">Reset</Button>
  </div>

  <p class="text-sm text-gray-500 dark:text-gray-400">Click on any step indicator to navigate directly to that step.</p>
</div>
```

## Clickable multi-step form

Here's a complete example of using the step indicator with a multi-step form. Users can click on any completed step to go back and edit their information.

```svelte
<script lang="ts">
  import { StepIndicator, Button, Label, Input } from "flowbite-svelte";

  let currentStep = $state(1);
  const steps = ["Personal Info", "Contact Details", "Address", "Review", "Complete"];

  // Form data
  let personalInfo = $state({ firstName: "", lastName: "" });
  let contactInfo = $state({ email: "", phone: "" });
  let addressInfo = $state({ street: "", city: "", zip: "" });

  function next() {
    if (currentStep < steps.length) {
      currentStep++;
    }
  }

  function prev() {
    if (currentStep > 1) {
      currentStep--;
    }
  }

  function handleSubmit(e: Event) {
    e.preventDefault();
    next();
  }
</script>

<div class="space-y-6">
  <StepIndicator bind:currentStep {steps} color="primary" glow />

  <form onsubmit={handleSubmit} class="space-y-4">
    {#if currentStep === 1}
      <div class="space-y-4">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Personal Information</h3>
        <div>
          <Label for="firstName" class="mb-2">First Name</Label>
          <Input type="text" id="firstName" bind:value={personalInfo.firstName} placeholder="John" required />
        </div>
        <div>
          <Label for="lastName" class="mb-2">Last Name</Label>
          <Input type="text" id="lastName" bind:value={personalInfo.lastName} placeholder="Doe" required />
        </div>
      </div>
    {:else if currentStep === 2}
      <div class="space-y-4">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Contact Details</h3>
        <div>
          <Label for="email" class="mb-2">Email</Label>
          <Input type="email" id="email" bind:value={contactInfo.email} placeholder="john.doe@example.com" required />
        </div>
        <div>
          <Label for="phone" class="mb-2">Phone</Label>
          <Input type="tel" id="phone" bind:value={contactInfo.phone} placeholder="+1 (555) 123-4567" required />
        </div>
      </div>
    {:else if currentStep === 3}
      <div class="space-y-4">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Address Information</h3>
        <div>
          <Label for="street" class="mb-2">Street Address</Label>
          <Input type="text" id="street" bind:value={addressInfo.street} placeholder="123 Main St" required />
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <Label for="city" class="mb-2">City</Label>
            <Input type="text" id="city" bind:value={addressInfo.city} placeholder="New York" required />
          </div>
          <div>
            <Label for="zip" class="mb-2">ZIP Code</Label>
            <Input type="text" id="zip" bind:value={addressInfo.zip} placeholder="10001" required />
          </div>
        </div>
      </div>
    {:else if currentStep === 4}
      <div class="space-y-4">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Review Your Information</h3>
        <div class="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
          <dl class="space-y-2">
            <div class="flex justify-between">
              <dt class="font-medium text-gray-500 dark:text-gray-400">Name:</dt>
              <dd class="text-gray-900 dark:text-white">{personalInfo.firstName} {personalInfo.lastName}</dd>
            </div>
            <div class="flex justify-between">
              <dt class="font-medium text-gray-500 dark:text-gray-400">Email:</dt>
              <dd class="text-gray-900 dark:text-white">{contactInfo.email}</dd>
            </div>
            <div class="flex justify-between">
              <dt class="font-medium text-gray-500 dark:text-gray-400">Phone:</dt>
              <dd class="text-gray-900 dark:text-white">{contactInfo.phone}</dd>
            </div>
            <div class="flex justify-between">
              <dt class="font-medium text-gray-500 dark:text-gray-400">Address:</dt>
              <dd class="text-gray-900 dark:text-white">{addressInfo.street}, {addressInfo.city} {addressInfo.zip}</dd>
            </div>
          </dl>
        </div>
        <p class="text-sm text-gray-500 dark:text-gray-400">Click on any step indicator above to go back and edit your information.</p>
      </div>
    {:else if currentStep === 5}
      <div class="space-y-4 text-center">
        <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
          <svg class="h-6 w-6 text-green-600 dark:text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Registration Complete!</h3>
        <p class="text-gray-500 dark:text-gray-400">Thank you for completing the form.</p>
      </div>
    {/if}

    <div class="flex gap-2">
      {#if currentStep > 1 && currentStep < 5}
        <Button type="button" onclick={prev} color="alternative">Previous</Button>
      {/if}
      {#if currentStep < 4}
        <Button type="submit">Next</Button>
      {:else if currentStep === 4}
        <Button type="submit" color="green">Complete</Button>
      {/if}
    </div>
  </form>
</div>
```

## Non-clickable

Set `clickable={false}` to disable click navigation on the step indicators.

```svelte
<script lang="ts">
  import { StepIndicator } from "flowbite-svelte";

  let currentStep = $state(3);
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
</script>

<div class="space-y-4">
  <StepIndicator bind:currentStep {steps} clickable={false} />

  <p class="text-sm text-gray-500 dark:text-gray-400">
    Step indicators are non-clickable when <code class="text-xs">clickable={"{false}"}</code>
    is set.
  </p>
</div>
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
  import { StepIndicator, type StepIndicatorProps, Radio, Label } from "flowbite-svelte";
  const sizes = ["xs", "sm", "md", "lg", "xl"];
  let size: StepIndicatorProps["size"] = $state("xs");
  let currentStep = 2;
  let steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
</script>

<div class="my-4">
  <StepIndicator {currentStep} {steps} bind:size />
</div>

<div class="flex flex-wrap space-x-2">
  <Label class="mb-4 w-full font-bold">Size</Label>
  {#each sizes as sizeOption}
    <Radio class="my-1" classes={{ label: "w-24" }} name="size" bind:group={size} value={sizeOption}>
      {sizeOption}
    </Radio>
  {/each}
</div>
```

## Colors

Use the `color` prop to change the color of a step indicator.

```svelte
<script lang="ts">
  import { StepIndicator, type StepIndicatorProps, Radio, Label } from "flowbite-svelte";

  const colors = ["primary", "secondary", "gray", "red", "yellow", "green", "indigo", "purple", "pink", "blue"];
  let color: StepIndicatorProps["color"] = $state("green");
  let currentStep = 2;
  let steps = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];
</script>

<div class="my-4">
  <StepIndicator {currentStep} {steps} bind:color />
</div>

<div class="flex flex-wrap space-x-2">
  <Label class="mb-4 w-full font-bold">Color</Label>
  {#each colors as colorOption}
    <Radio class="my-1" classes={{ label: "w-24" }} name="color" bind:group={color} value={colorOption as StepIndicatorProps["color"]}>
      {colorOption}
    </Radio>
  {/each}
</div>
```

## Component data

### StepIndicator

#### Types

[StepIndicatorProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1572)

#### Props

- steps: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"]
- currentStep: $bindable(1)
- size: $bindable("md")
- color: $bindable("primary")
- glow: false
- hideLabel: false
- clickable: true
- completedCustom: ""
- currentCustom: ""
- onStepClick
- class: className
- classes


### StepIndicator styling

- Use the `class` prop to overwrite the default class.

<CompoAttributesViewer {components}/>
