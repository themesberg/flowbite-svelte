# Svelte Indicators - Flowbite


The indicator component can be used as a small element positioned absolutely relative to another component such as a button or card and show a number count, account status (red for offline, green for online) and other useful information.

## Setup

```svelte
<script lang="ts">
  import { Indicator } from "flowbite-svelte";
</script>
```

## Default indicator

Use this example to create a simple indicator with multiple colors and position it anywhere on the website.

```svelte
<script lang="ts">
  import { Indicator } from "flowbite-svelte";
</script>

<Indicator color="gray" />
<Indicator color="secondary" />
<Indicator color="orange" />
<Indicator color="blue" />
<Indicator color="green" />
<Indicator color="red" />
<Indicator color="purple" />
<Indicator color="indigo" />
<Indicator color="yellow" />
<Indicator color="teal" />
```

## Legend indicator

This example can be used as a legend indicator for charts to also add a text next to the bullet point.

```svelte
<script lang="ts">
  import { Indicator } from "flowbite-svelte";
</script>

<span class="flex items-center"><Indicator size="sm" color="orange" class="me-1.5" />Visitors</span>
<span class="flex items-center"><Indicator size="sm" color="purple" class="me-1.5" />Sessions</span>
<span class="flex items-center"><Indicator size="sm" color="indigo" class="me-1.5" />Customers</span>
<span class="flex items-center"><Indicator size="sm" color="teal" class="me-1.5" />Revenue</span>
```

## Indicator count

This example can be used to show a number count inside the indicator and position it relative to a button component.

```svelte
<script lang="ts">
  import { Indicator, Button } from "flowbite-svelte";
  import { EnvelopeSolid } from "flowbite-svelte-icons";
</script>

<Button size="lg" class="relative">
  <EnvelopeSolid class="me-2 h-6 w-6 text-white dark:text-white" />
  <span class="sr-only">Notifications</span>
  Messages
  <Indicator color="red" border size="xl" placement="top-right">
    <span class="text-xs font-bold text-white">8</span>
  </Indicator>
</Button>
```

## Status indicator

Use this example to show a status indicator for the currently logged in user by showing red for offline and green for online.

`Avatar` component uses `Indicator` internally as parameter `dot`. You can pass all props accepted by `Indicator` component as an object.

```svelte
<script lang="ts">
  import { Avatar } from "flowbite-svelte";
</script>

<Avatar src="/images/profile-picture-5.webp" dot={{ color: "green", size: "lg", placement: "top-right" }} />
<Avatar src="/images/profile-picture-5.webp" dot={{ color: "red", size: "lg", placement: "top-right" }} />
```

## Badge indicator

This example can be used to add an indicator inside of a badge component.

```svelte
<script lang="ts">
  import { Indicator, Avatar, Badge } from "flowbite-svelte";
</script>

<ul class="w-full max-w-sm divide-y divide-gray-200 dark:divide-gray-700">
  <li class="py-3 sm:py-4">
    <div class="flex items-center space-x-3 rtl:space-x-reverse">
      <Avatar src="/images/profile-picture-5.webp" alt="Neil image" />
      <div class="min-w-0 flex-1">
        <p class="truncate text-sm font-semibold text-gray-900 dark:text-white">Neil Sims</p>
        <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>
      </div>
      <Badge color="green" class="px-2.5 py-0.5">
        <Indicator color="green" size="xs" class="me-1" />Available
      </Badge>
    </div>
  </li>
  <li class="py-3 sm:py-4">
    <div class="flex items-center space-x-3 rtl:space-x-reverse">
      <div class="shrink-0">
        <Avatar src="/images/profile-picture-4.webp" alt="Bonnie image" />
      </div>
      <div class="min-w-0 flex-1">
        <p class="truncate text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</p>
        <p class="truncate text-sm text-gray-500 dark:text-gray-400">email@flowbite.com</p>
      </div>
      <Badge color="red" class="px-2.5 py-0.5">
        <Indicator color="red" size="xs" class="me-1" />Unavailable
      </Badge>
    </div>
  </li>
</ul>
```

## Stepper indicator

You can also use the indicators inside of a stepper component when completing a form element.

```svelte
<script lang="ts">
  import { Indicator } from "flowbite-svelte";
  import { CheckCircleSolid } from "flowbite-svelte-icons";
</script>

<ol class="flex items-center">
  {#each [1, 2, 2, 3] as step, i}
    <li class="relative mb-6 w-full">
      <div class="flex items-center">
        <Indicator
          size="xl"
          color={i < 3 ? undefined : "gray"}
          class={`z-10 shrink-0 ring-0 ring-white sm:ring-8 ${i < 3 ? "bg-primary-200 dark:bg-primary-900" : "dark:bg-gray-700 dark:ring-gray-900"}`}
        >
          {#if i === 3}
            <CheckCircleSolid class="h-6 w-6 text-gray-800 dark:text-gray-300" />
          {:else}
            <CheckCircleSolid class="text-primary-600 dark:text-primary-300 h-6 w-6" />
          {/if}
        </Indicator>
        {#if i < 3}
          <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>
        {/if}
      </div>
      <div class="mt-3">
        <h3 class="font-medium text-gray-900 dark:text-white">Step {step}</h3>
      </div>
    </li>
  {/each}
</ol>
<ol class="flex items-center">
  {#each [1, 2, 2, 3] as step, i}
    <li class="relative mb-6 w-full">
      <div class="flex items-center">
        <Indicator
          size="xl"
          color={i < 3 ? undefined : "gray"}
          class={`z-10 shrink-0 ring-0 ring-white sm:ring-8 ${i < 3 ? "bg-primary-200 dark:bg-primary-900" : "dark:bg-gray-700 dark:ring-gray-900"}`}
        >
          <Indicator color={i < 3 ? "orange" : "secondary"} class={i === 3 ? "dark:bg-gray-300!" : ""} />
        </Indicator>
        {#if i < 3}
          <div class="flex h-0.5 w-full bg-gray-200 dark:bg-gray-700"></div>
        {/if}
      </div>
      <div class="mt-3">
        <h3 class="font-medium text-gray-900 dark:text-white">Step {step}</h3>
      </div>
    </li>
  {/each}
</ol>
```

## Indicator position

Use these examples to position the indicator component anywhere relative to the parent element.

```svelte
<script lang="ts">
  import { Indicator } from "flowbite-svelte";
</script>

<div class="borer relative h-56 w-56 rounded-lg border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
  <Indicator placement="top-left" color="primary" />
  <Indicator placement="top-center" color="secondary" />
  <Indicator placement="top-right" color="orange" />
  <Indicator placement="center-left" color="green" />
  <Indicator placement="center" color="red" />
  <Indicator placement="center-right" color="purple" />
  <Indicator placement="bottom-left" color="indigo" />
  <Indicator placement="bottom-center" color="yellow" />
  <Indicator placement="bottom-right" color="teal" />
</div>
```

## Component data

### Indicator

#### Types

[IndicatorProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1036)

#### Props

- children
- color: "primary"
- cornerStyle: "circular"
- size: "md"
- border: false
- placement
- offset: true
- class: className


## References

- [Flowbite Indicators](https://flowbite.com/docs/components/indicators/)
