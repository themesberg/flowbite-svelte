# Svelte Popover - Flowbite


<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

Get started with the popover component to show any type of content inside a pop-up box when hovering or clicking over a trigger element. There are multiple examples that you can choose from, such as showing more information about a user profile, company profile, password strength, and more.

Make sure that you have the Flowbite JavaScript included in your project to enable the popover interactivity by following the quickstart guide.

## Setup

```svelte
<script lang="ts">
  import { Popover } from "flowbite-svelte";
</script>
```

## Default popover

```svelte
{#include Default.svelte}
```

## User profile

Use this example to show more information about a user profile when hovering over the trigger component.

```svelte
{#include User.svelte}
```

## Company profile

This example can be used to show more information about a company profile.

```svelte
{#include Company.svelte}
```

## Image popover

Use this example to trigger a popover component with detailed information and an image when hovering over a portion of highlighted text inspired by Wikipedia and other large news outlets.

```svelte
{#include Image.svelte}
```

## Description popover

Show helpful information inside a popover when hovering over a question mark button.

```svelte
{#include Description.svelte}
```

## Progress popover

Show a progress bar with details inside a popover when hovering over a settings button.

```svelte
{#include Progress.svelte}
```

## Password strength

Dynamically show the password strength progress when creating a new password positioned relative to the input element.

```svelte
{#include Password.svelte}
```

## A11y

Use `Tab` and `Shift+Tab` to navigate between buttons or links in the popover. Press `ESC` to close it.

## Placement

Set the position of the popover component relative to the trigger element by using the `placement={top|right|bottom|left}` data attribute and its values.

```svelte
{#include Placement.svelte}
```

## Triggering

```svelte
{#include Triggering.svelte}
```

## Offset

Increase or decrease the default offset by adding the `offset` attribute where the value is an integer.

```svelte
{#include Offset.svelte}
```

## Animation

Customize the animation of the popover component by using the transition functions from Svelte.

```svelte
{#include Animation.svelte}
```

## Disable arrow

You can also disable the popover arrow by setting `arrow` attribute to `false`.

```svelte
{#include DisableArrow.svelte}
```

## External reference

If you need the popover to be attached to the other element then the tiggering one you can pass a CSS query to `reference` prop.

```svelte
{#include External.svelte}
```

## Component data

### Popover

#### Types

[PopoverProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1198)

#### Props

- title: titleSlot
- color: "default"
- trigger: "hover"
- defaultClass
- arrow: true
- children
- placement: "top"
- class: className
- classes
- isOpen: $bindable(false)


## References

- [Flowbite Popover](https://flowbite.com/docs/components/popover/)


