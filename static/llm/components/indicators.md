# Svelte Indicators - Flowbite


<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

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
{#include Default.svelte}
```

## Legend indicator

This example can be used as a legend indicator for charts to also add a text next to the bullet point.

```svelte
{#include Legend.svelte}
```

## Indicator count

This example can be used to show a number count inside the indicator and position it relative to a button component.

```svelte
{#include Count.svelte}
```

## Status indicator

Use this example to show a status indicator for the currently logged in user by showing red for offline and green for online.

`Avatar` component uses `Indicator` internally as parameter `dot`. You can pass all props accepted by `Indicator` component as an object.

```svelte
{#include Status.svelte}
```

## Badge indicator

This example can be used to add an indicator inside of a badge component.

```svelte
{#include Badge.svelte}
```

## Stepper indicator

You can also use the indicators inside of a stepper component when completing a form element.

```svelte
{#include Stepper.svelte}
```

## Indicator position

Use these examples to position the indicator component anywhere relative to the parent element.

```svelte
{#include Position.svelte}
```

## Component data

### Indicator

#### Types

[IndicatorProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L998)

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


