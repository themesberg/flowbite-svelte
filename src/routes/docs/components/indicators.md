---
layout: componentLayout
title: Svelte Indicators - Flowbite
breadcrumb_title: Svelte Indicators
component_title: Indicator
dir: Components
description: Use the indicator component to show a number count, account status, or as a loading label positioned relative to the parent component coded with Tailwind CSS
thumnailSize: w-64
---

<script>
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

The indicator component can be used as a small element positioned absolutely relative to another component such as a button or card and show a number count, account status (red for offline, green for online) and other useful information.

## Setup

```svelte example hideOutput
<script>
  import { Indicator } from "flowbite-svelte";
</script>
```

## Default indicator

Use this example to create a simple indicator with multiple colors and position it anywhere on the website.

```svelte example class="flex gap-2"
{#include Default.svelte}
```

## Legend indicator

This example can be used as a legend indicator for charts to also add a text next to the bullet point.

```svelte example class="text-sm font-medium text-gray-900 dark:text-white flex gap-2"
{#include Legend.svelte}
```

## Indicator count

This example can be used to show a number count inside the indicator and position it relative to a button component.

```svelte example class="space-y-4"
{#include Count.svelte}
```

## Status indicator

Use this example to show a status indicator for the currently logged in user by showing red for offline and green for online.

`Avatar` component uses `Indicator` internally as parameter `dot`. You can pass all props accepted by `Indicator` component as an object.

```svelte example class="flex gap-2"
{#include Status.svelte}
```

## Badge indicator

This example can be used to add an indicator inside of a badge component.

```svelte example class="flex gap-2"
{#include Badge.svelte}
```

## Stepper indicator

You can also use the indicators inside of a stepper component when completing a form element.

```svelte example class="space-y-8"
{#include Stepper.svelte}
```

## Indicator position

Use these examples to position the indicator component anywhere relative to the parent element.

```svelte example class="flex gap-4"
{#include Position.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Indicators](https://flowbite.com/docs/components/indicators/)

<GitHubCompoLinks />
