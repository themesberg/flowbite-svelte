# Svelte Stepper - Flowbite


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
<script lang="ts">
  import { Stepper } from "flowbite-svelte";
  import { CheckOutline } from "flowbite-svelte-icons";
</script>

<Stepper
  steps={[
    {
      id: 1,
      label: "Personal",
      description: "Info",
      status: "completed"
    },
    {
      id: 2,
      label: "Account",
      description: "Info",
      status: "current"
    },
    {
      id: 3,
      label: "Confirmation",
      status: "pending"
    }
  ]}
/>

<Stepper
  steps={[
    {
      label: "Personal",
      description: "Info",
      status: "completed",
      icon: CheckOutline
    },
    {
      label: "Account",
      description: "Info",
      status: "current"
    },
    {
      label: "Confirmation",
      status: "pending"
    }
  ]}
/>
```

## ProgressStepper

This example can be used to show the progress of the stepper component based only on icons and showing a checkmark when the step has been finished.

```svelte
<script lang="ts">
  import { ProgressStepper } from "flowbite-svelte";
  import { CheckOutline, UserSolid, CreditCardSolid } from "flowbite-svelte-icons";
</script>

<ProgressStepper steps={[{ status: "completed" }, { status: "current" }, { status: "pending" }]} />

<ProgressStepper
  steps={[
    { status: "completed", icon: CheckOutline },
    { status: "current", icon: UserSolid },
    { status: "pending", icon: CreditCardSolid }
  ]}
/>
```

## DetailedStepper

Use this example to show an extra subtitle next to the number and the title of the steppper component based on an ordered list element.

```svelte
<script lang="ts">
  import { DetailedStepper } from "flowbite-svelte";
</script>

<DetailedStepper
  steps={[
    {
      id: 1,
      label: "User info",
      description: "Step details here",
      status: "completed"
    },
    {
      id: 2,
      label: "Company info",
      description: "Step details here",
      status: "current"
    },
    {
      id: 3,
      label: "Payment info",
      description: "Step details here",
      status: "pending"
    }
  ]}
/>
```

## VerticalStepper

This example can be used to show a list of steps aligned vertically where you can indicate the completed, currently active, and the unexplored steps.

```svelte
<script lang="ts">
  import { VerticalStepper } from "flowbite-svelte";
</script>

<VerticalStepper
  steps={[
    {
      id: 1,
      label: "User info",
      status: "completed"
    },
    {
      id: 2,
      label: "Account info",
      status: "completed"
    },
    {
      id: 3,
      label: "Social accounts",
      status: "current"
    },
    {
      id: 4,
      label: "Review",
      status: "pending"
    },
    {
      id: 5,
      label: "Confirmation",
      status: "pending"
    }
  ]}
/>
```

## BreadcrumbStepper

This example can be used to show the number of steps similar to how a breadcrumb component looks like by using double chevron icons between the items.

```svelte
<script lang="ts">
  import { BreadcrumbStepper } from "flowbite-svelte";
</script>

<BreadcrumbStepper
  steps={[
    {
      id: 1,
      label: "Personal",
      shortLabel: "Info",
      status: "completed"
    },
    {
      id: 2,
      label: "Account",
      shortLabel: "Info",
      status: "current"
    },
    {
      id: 3,
      label: "Review",
      status: "pending"
    }
  ]}
/>
```

## TimelineStepper

Use this example to show the number of steps inside a timeline component using icons, title, and subtitle for each step.

```svelte
<script lang="ts">
  import { TimelineStepper } from "flowbite-svelte";
</script>

<TimelineStepper
  steps={[
    { label: "Personal Info", description: "Step details here", status: "completed" },
    { label: "Account Info", description: "Step details here", status: "current" },
    { label: "Review", description: "Step details here", status: "pending" },
    { label: "Confirmation", description: "Step details here", status: "pending" }
  ]}
/>
```

## Stepper with form

Use this example to show the stepper component next to a form layout and change the content based on which currently step your are completing.

```svelte
<script lang="ts">
  import { ProgressStepper, Label, Input, Button } from "flowbite-svelte";
</script>

<ProgressStepper steps={[{ status: "completed" }, { status: "current" }, { status: "pending" }]} class="mb-8" />
<form action="#">
  <h3 class="mb-4 text-lg leading-none font-medium text-gray-900 dark:text-white">Invoice details</h3>
  <div class="mb-4 grid gap-4 sm:grid-cols-2">
    <div>
      <Label for="username" class="mb-2">Username</Label>
      <Input type="text" name="username" id="username" placeholder="username.example" required />
    </div>
    <div>
      <Label for="email" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Email</Label>
      <Input type="email" name="email" id="email" placeholder="name@company.com" required />
    </div>
    <div>
      <Label for="password" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Password</Label>
      <Input type="password" name="password" id="password" placeholder="•••••••••" required />
    </div>
    <div>
      <Label for="confirm-password" class="mb-2 block text-sm font-medium text-gray-900 dark:text-white">Confirm password</Label>
      <Input type="password" name="confirm-password" id="confirm-password" placeholder="•••••••••" required />
    </div>
  </div>
  <Button type="submit">Next Step: Payment Info</Button>
</form>
```

## Component data

### BreadcrumbStepper

#### Types

[BreadcrumbStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1644)

#### Props

- children
- steps: []
- class: className
- classes

### DetailedStepper

#### Types

[DetailedStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1613)

#### Props

- children
- steps: []
- contentClass
- class: className
- classes

### ProgressStepper

#### Types

[ProgressStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1598)

#### Props

- children
- steps: []
- class: className
- classes

### Stepper

#### Types

[StepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1586)

#### Props

- children
- steps: []
- class: className
- classes

### TimelineStepper

#### Types

[TimelineStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1658)

#### Props

- children
- steps: []
- class: className
- classes
- contentClass

### VerticalStepper

#### Types

[VerticalStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1628)

#### Props

- children
- steps: []
- liClass
- class: className
- classes


## References

- [Flowbite Sidebar](https://flowbite.com/docs/components/stepper)
