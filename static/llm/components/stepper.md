# Svelte Stepper - Flowbite


The stepper component can be used to show a numbered list of steps next to a form component to indicate the progress and number of steps that are required to complete and submit the form data.

There are multiple examples that you can use including horizontal or vertical aligned stepper components, different sizes, styles, and showing icons or numbers all coded with the utility classes from Tailwind CSS.

## Setup

```svelte
<script>
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

## Component data

### BreadcrumbStepper

#### Types

[BreadcrumbStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1576)

#### Props

- children
- steps: []
- classes

### DetailedStepper

#### Types

[DetailedStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1545)

#### Props

- children
- steps: []
- contentClass
- classes

### ProgressStepper

#### Types

[ProgressStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1530)

#### Props

- children
- steps: []
- classes

### Stepper

#### Types

[StepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1518)

#### Props

- children
- steps: []
- classes

### TimelineStepper

#### Types

[TimelineStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1590)

#### Props

- children
- steps: []
- classes
- contentClass

### VerticalStepper

#### Types

[VerticalStepperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1560)

#### Props

- children
- steps: []
- liClass
- classes


## References

- [Flowbite Sidebar](https://flowbite.com/docs/components/stepper)


