---
layout: componentLayout
title: Svelte Popover - Flowbite
breadcrumb_title: Svelte Popover
component_title: Popover
dir: Components
description: Use the popover component to show detailed information inside a pop-up box relative to the element that is being clicked or hovered based on multiple styles
---

<script>
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

Get started with the popover component to show any type of content inside a pop-up box when hovering or clicking over a trigger element. There are multiple examples that you can choose from, such as showing more information about a user profile, company profile, password strength, and more.

Make sure that you have the Flowbite JavaScript included in your project to enable the popover interactivity by following the quickstart guide.

## Setup

```svelte example hideOutput
<script>
  import { Popover } from "flowbite-svelte";
</script>
```

## Default popover

```svelte example class="flex h-44 items-end justify-center" hideResponsiveButtons
{#include Default.svelte}
```

## User profile

Use this example to show more information about a user profile when hovering over the trigger component.

```svelte example class="flex h-74 items-end justify-center" hideResponsiveButtons
{#include User.svelte}
```

## Company profile

This example can be used to show more information about a company profile.

```svelte example class="flex h-100 items-end justify-center" hideResponsiveButtons
{#include Company.svelte}
```

## Image popover

Use this example to trigger a popover component with detailed information and an image when hovering over a portion of highlighted text inspired by Wikipedia and other large news outlets.

```svelte example class="flex h-96 items-end" hideResponsiveButtons
{#include Image.svelte}
```

## Description popover

Show helpful information inside a popover when hovering over a question mark button.

```svelte example class="h-96" hideResponsiveButtons
{#include Description.svelte}
```

## Progress popover

Show a progress bar with details inside a popover when hovering over a settings button.

```svelte example class="h-60 flex justify-center items-end" hideResponsiveButtons
{#include Progress.svelte}
```

## Password strength

Dynamically show the password strength progress when creating a new password positioned relative to the input element.

```svelte example hideResponsiveButtons
{#include Password.svelte}
```

## A11y

Use `Tab` and `Shift+Tab` to navigate between buttons or links in the popover. Press `ESC` to close it.

## Placement

Set the position of the popover component relative to the trigger element by using the `placement={top|right|bottom|left}` data attribute and its values.

```svelte example class="flex gap-4 flex-col justify-center items-center h-96" hideResponsiveButtons
{#include Placement.svelte}
```

## Triggering

```svelte example class="flex h-44 items-end justify-center gap-4" hideResponsiveButtons
{#include Triggering.svelte}
```

## Offset

Increase or decrease the default offset by adding the `offset` attribute where the value is an integer.

```svelte example class="flex h-56 items-end justify-center"
{#include Offset.svelte}
```

## Animation

Customize the animation of the popover component by using the transition functions from Svelte.

```svelte example class="flex h-44 items-end justify-center gap-8" hideResponsiveButtons
{#include Animation.svelte}
```

## Disable arrow

You can also disable the popover arrow by setting `arrow` attribute to `false`.

```svelte example class="flex h-44 items-end justify-center" hideResponsiveButtons
{#include DisableArrow.svelte}
```

## External reference

If you need the popover to be attached to the other element then the tiggering one you can pass a CSS query to `reference` prop.

```svelte example class="flex gap-4 flex-col justify-end items-center h-64" hideResponsiveButtons
{#include External.svelte}
```

## Component data

The component inherits the following props, type, and default values from `Frame`. See <A href="/docs/pages/typescript">types page</A> for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Popover](https://flowbite.com/docs/components/popover/)

<GitHubCompoLinks />
