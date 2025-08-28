# Svelte Avatar - Flowbite


<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { P, A } from 'flowbite-svelte'
  const dirName = toKebabCase(component_title)
</script>

The avatar component can be used as a visual identifier for a user profile on your website and you can use the examples from Flowbite to modify the styles and sizes of these components using the utility classes from Tailwind CSS.

## Setup

Import `Avatar`. If you are using the user dropdown, import `Dropdown`, `DropdownHeader`, `DropdownItem`. If you are using tooltip for avatar import `Tooltip`.

```svelte
<script lang="ts">
  import { Avatar, Dropdown, DropdownHeader, DropdownItem, Tooltip } from "flowbite-svelte";
</script>
```

## Default avatar

Use this example to create a circle and rounded avatar on an image element.

```svelte
{#include Default.svelte}
```

## Icon avatar

```svelte
{#include Icon.svelte}
```

## Custom dot

```svelte
{#include CustomDot.svelte}
```

## Bordered

You can apply a border around the avatar component.

You can use the `ring-&#123;color&#125;` class from Tailwind CSS to modify ring color.

```svelte
{#include Bordered.svelte}
```

## Placeholder

When there is no custom image available a placeholder is displayed.

```svelte
{#include Placeholder.svelte}
```

## Placeholder initials

This example can be used to show the initials of the user’s first and last name as a placeholder when no profile picture is available.

```svelte
{#include PlaceholderInitial.svelte}
```

## Avatar tooltip

Use this example to show a tooltip when hovering over the avatar.

```svelte
{#include AvatarWithTooltip.svelte}
```

## Dot indicator

Use a dot element relative to the avatar component as an indicator for the user (eg. online or offline status).

```svelte
{#include DotIndicator.svelte}
```

## Stacked

Use this example if you want to stack a group of users by overlapping the avatar components.

```svelte
{#include Stacked.svelte}
```

## Avatar text

This example can be used if you want to show additional information in the form of text elements such as the user’s name and join date.

```svelte
{#include AvatarText.svelte}
```

## User dropdown

Use this example if you want to show a dropdown menu when clicking on the avatar component.

```svelte
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

```svelte
{#include Sizes.svelte}
```

## Component data

### Avatar

#### Types

[AvatarProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L202)

#### Props

- children
- indicator
- src
- href
- target
- cornerStyle: "circular"
- border: false
- stacked: false
- dot
- class: className
- alt
- size: "md"
- onclick


## References

- [Flowbite Avatar](https://flowbite.com/docs/components/avatar/)


