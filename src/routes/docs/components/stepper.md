---
layout: componentLayout
title: Svelte Stepper - Flowbite
breadcrumb_title: Svelte Stepper
component_title: Stepper
dir: Components
description: Use the stepper component to show the number of steps required to complete a form inside your application
thumnailSize: w-48
---

<script>
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

The stepper component can be used to show a numbered list of steps next to a form component to indicate the progress and number of steps that are required to complete and submit the form data.

There are multiple examples that you can use including horizontal or vertical aligned stepper components, different sizes, styles, and showing icons or numbers all coded with the utility classes from Tailwind CSS.

## Setup

```svelte example hideOutput
<script>
  import { BreadcrumbStepper, DetailedStepper, ProgressStepper, Stepper, TimelineStepper, VerticalStepper } from "flowbite-svelte";
</script>
```

## Default stepper

Use this example to show a list of form steps with a number and title of the step in a horizontal alignment.

```svelte example class="space-y-4"
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

```svelte example class="space-y-4"
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

```svelte example
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

```svelte example
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

```svelte example
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

```svelte example
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

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Sidebar](https://flowbite.com/docs/components/stepper)

<GitHubCompoLinks />
