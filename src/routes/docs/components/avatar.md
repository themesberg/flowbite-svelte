---
layout: componentLayout
title: Svelte Avatar - Flowbite
breadcrumb_title: Svelte Avatar
component_title: Avatar
dir: Components
description: Use the avatar component to show a visual representation of a user profile using an image element or SVG object based on multiple styles and sizes
thumnailSize: w-64
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, LlmLink } from '../../utils'
  import { P, A } from 'flowbite-svelte'
  const dirName = toKebabCase(component_title)
</script>

The avatar component can be used as a visual identifier for a user profile on your website and you can use the examples from Flowbite to modify the styles and sizes of these components using the utility classes from Tailwind CSS.

## Setup

Import `Avatar`. If you are using the user dropdown, import `Dropdown`, `DropdownHeader`, `DropdownItem`. If you are using tooltip for avatar import `Tooltip`.

```svelte example hideOutput
<script lang="ts">
  import { Avatar, Dropdown, DropdownHeader, DropdownItem, Tooltip } from "flowbite-svelte";
</script>
```

## Default avatar

Use this example to create a circle and rounded avatar on an image element.

```svelte example class="flex justify-center gap-4" hideScript hideResponsiveButtons
{#include Default.svelte}
```

## Icon avatar

```svelte example class="flex justify-center" hideResponsiveButtons
{#include Icon.svelte}
```

## Custom dot

```svelte example class="flex justify-center" hideResponsiveButtons
{#include CustomDot.svelte}
```

## Bordered

You can apply a border around the avatar component.

You can use the `ring-&#123;color&#125;` class from Tailwind CSS to modify ring color.

```svelte example class="flex justify-center gap-4" hideScript hideResponsiveButtons
{#include Bordered.svelte}
```

## Placeholder

When there is no custom image available a placeholder is displayed.

```svelte example class="flex justify-center gap-4" hideScript hideResponsiveButtons
{#include Placeholder.svelte}
```

## Placeholder initials

This example can be used to show the initials of the user’s first and last name as a placeholder when no profile picture is available.

```svelte example class="flex justify-center gap-4" hideScript hideResponsiveButtons
{#include PlaceholderInitial.svelte}
```

## Avatar tooltip

Use this example to show a tooltip when hovering over the avatar.

```svelte example class="flex justify-center gap-4" hideResponsiveButtons
{#include AvatarWithTooltip.svelte}
```

## Dot indicator

Use a dot element relative to the avatar component as an indicator for the user (eg. online or offline status).

```svelte example class="flex justify-center gap-4" hideResponsiveButtons
{#include DotIndicator.svelte}
```

## Stacked

Use this example if you want to stack a group of users by overlapping the avatar components.

```svelte example class="flex flex-col justify-center gap-4" hideScript hideResponsiveButtons
{#include Stacked.svelte}
```

## Avatar text

This example can be used if you want to show additional information in the form of text elements such as the user’s name and join date.

```svelte example class="flex justify-center gap-4" hideScript hideResponsiveButtons
{#include AvatarText.svelte}
```

## User dropdown

Use this example if you want to show a dropdown menu when clicking on the avatar component.

```svelte example class="flex justify-center h-96" hideResponsiveButtons
{#include UserDropdown.svelte}
```

## Sizes

You can set `size` property to preset values of `xs | sm | md | lg | xl`. Custom size can be achieved by adding any of the Tailwind Css size classes like `w-[x] h-[x]`.

Preset values are equivalents of:

| Size  |     |   Classes   |
| :---: | --- | :---------: |
|  xs   |     |  `w-6 h-6`  |
|  sm   |     |  `w-8 h-8`  |
|  md   |     | `w-10 h-10` |
|  lg   |     | `w-20 h-20` |
|  xl   |     | `w-36 h-36` |

```svelte example class="flex flex-col gap-4" hideScript hideResponsiveButtons
{#include Sizes.svelte}
```

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Avatar](https://flowbite.com/docs/components/avatar/)

## GitHub Links

<GitHubCompoLinks />

## Machine-Readable LLM Files

<LlmLink />
