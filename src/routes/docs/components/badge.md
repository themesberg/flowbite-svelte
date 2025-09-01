---
layout: componentLayout
title: Svelte Badge - Flowbite
breadcrumb_title: Svelte Badge
component_title: Badge
dir: Components
description: Use Tailwind CSS badges as elements to show counts or labels separately or inside other components
thumnailSize: w-28
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, LlmLink } from '../../utils'
  import { P, A } from 'flowbite-svelte'
  const dirName = toKebabCase(component_title)
</script>

The badge component can be used to complement other elements such as buttons or text elements as a label or to show the count of a given data, such as the number of comments for an article or how much time has passed by since a comment has been made.

Alternatively, badges can also be used as standalone elements that link to a certain page.

## Setup

Import a badge component in the script tag.

```svelte example hideOutput
<script lang="ts">
  import { Badge } from "flowbite-svelte";
</script>
```

## Default badge

Use the following badge elements to indicate counts or labels inside or outside components.

```svelte example class="flex flex-wrap gap-2" hideScript hideResponsiveButtons
{#include Default.svelte}
```

## Large badges

Use the `large` prop to create a large variant of the badges.

```svelte example class="flex flex-wrap gap-2" hideScript hideResponsiveButtons
{#include Large.svelte}
```

## Bordered badge

Use the `border` prop to add a border accent to the badge component.

```svelte example class="flex flex-wrap gap-2" hideScript hideResponsiveButtons
{#include Bordered.svelte}
```

## Pills badge

Use the `rounded` prop to make the corners even more rounded like pills for the badge component.

```svelte example class="flex flex-wrap gap-2" hideScript hideResponsiveButtons
{#include Pills.svelte}
```

## Badges as links

You can also use badges as anchor elements to link to another page.

```svelte example class="flex flex-wrap gap-2" hideScript hideResponsiveButtons
{#include Links.svelte}
```

## Badges with icon

You can also use SVG icons inside the badge elements.

```svelte example class="flex flex-wrap gap-2" hideResponsiveButtons
{#include Icon.svelte}
```

## Notification badge

To achive the functionality of the notification badge, use the sibling [`Indicator`](/docs/components/indicators) component. Remember to add the `relative` class to parent element.

```svelte example class="flex flex-wrap gap-4" hideResponsiveButtons
{#include Notification.svelte}
```

## Button with badge

Use this example to add a badge inside a button component for a count indicator.

```svelte example class="flex flex-wrap gap-4" hideResponsiveButtons
{#include ButtonBadge.svelte}
```

## Badge with icon only

Alternatively you can also use badges which indicate only a SVG icon.

```svelte example hideScript hideResponsiveButtons
{#include IconOnly.svelte}
```

## Dismissable badges

Use the `dimissable` prop to dismiss the current badge.

```svelte example class="flex flex-wrap gap-4" hideScript hideResponsiveButtons
{#include Dismissable.svelte}
```

Use the `icon` snippet to add your desired button.

```svelte example class="gap-4"
{#include Dismissable2.svelte}
```

A `onclose` callback will be dispatched during the dismissal, listen to it if needed.

```svelte example class="gap-4"
{#include Dismissable3.svelte}
```

## Dynamic color

The color can be changed dynamically.

```svelte example class="flex flex-wrap gap-4" hideResponsiveButtons
{#include Dynamic.svelte}
```

## Opening badge

```svelte example
{#include Opening.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Badge](https://flowbite.com/docs/components/badge/)

## GitHub Links

<GitHubCompoLinks />

## Machine-Readable LLM Files

<LlmLink />
