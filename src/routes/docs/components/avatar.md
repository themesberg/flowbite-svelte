---
layout: componentLayout
title: Svelte Avatar - Flowbite
breadcrumb_title: Svelte Avatar
component_title: Avatar
dir: Components
description: Use the avatar component to show a visual representation of a user profile using an image element or SVG object based on multiple styles and sizes
thumbnailSize: w-64
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, LlmLink, Seealso } from '../../utils'
  import { P, A } from 'flowbite-svelte'
  const dirName = toKebabCase(component_title)
  const relatedLinks = [
    '/docs/components/badge',
    '/docs/components/dropdown',
    '/docs/components/tooltip',
    '/docs/components/indicators'
  ];
</script>

The avatar component can be used as a visual identifier for a user profile on your website. Avatars help users quickly recognize individuals in lists, comments, navigation, and throughout your application. You can use the examples to modify the styles and sizes of these components using the utility classes from Tailwind CSS.

Common use cases include user profile headers, comment sections, team member displays, chat interfaces, and navigation menus.

## Setup

Import `Avatar`. If you are using the user dropdown, import `Dropdown`, `DropdownHeader`, `DropdownItem`. If you are using tooltip for avatar import `Tooltip`.

```svelte example hideOutput
<script lang="ts">
  import { Avatar, Dropdown, DropdownHeader, DropdownItem, Tooltip } from "flowbite-svelte";
</script>
```

## Default avatar

Use this example to create circle and rounded avatar on an image element. The rounded style provides a softer, more modern appearance, while the circular style is the most common and recognizable avatar format.

```svelte example class="flex justify-center gap-4" hideScript hideResponsiveButtons
{#include Default.svelte}
```

## Icon avatar

When no user image is available, you can use an icon as a placeholder. This provides a consistent fallback that maintains visual balance in your UI while still being recognizable as a user avatar.

```svelte example class="flex justify-center" hideResponsiveButtons
{#include Icon.svelte}
```

## Custom dot

Customize the status indicator dot to match your design requirements. You can change colors, sizes, and positioning to indicate different states like online, offline, busy, away, or custom statuses specific to your application.

```svelte example class="flex justify-center" hideResponsiveButtons
{#include CustomDot.svelte}
```

## Bordered

You can apply a border around the avatar component to create visual separation and emphasis. This is particularly useful when avatars are placed on colored backgrounds or need to stand out more prominently.

You can use the `ring-&#123;color&#125;` class from Tailwind CSS to modify the ring color and match your brand or UI theme.

```svelte example class="flex justify-center gap-4" hideScript hideResponsiveButtons
{#include Bordered.svelte}
```

## Placeholder

When there is no custom image available, a placeholder is displayed. Placeholders ensure your layout remains consistent and professional even when user profile images haven't been uploaded yet.

```svelte example class="flex justify-center gap-4" hideScript hideResponsiveButtons
{#include Placeholder.svelte}
```

## Placeholder initials

This example can be used to show the initials of the user's first and last name as a placeholder when no profile picture is available. This creates a more personalized experience than generic icons and helps users identify individuals even without photos.

```svelte example class="flex justify-center gap-4" hideScript hideResponsiveButtons
{#include PlaceholderInitial.svelte}
```

## Avatar tooltip

Use this example to show a tooltip when hovering over the avatar. Tooltips can display additional information such as full names, job titles, status messages, or other relevant user details without cluttering the interface.

```svelte example class="flex justify-center gap-4" hideResponsiveButtons
{#include AvatarWithTooltip.svelte}
```

## Dot indicator

Use a dot element relative to the avatar component as an indicator for the user's status (e.g., online, offline, busy, away). Status indicators help users understand availability in real-time communication tools, collaboration platforms, and social applications.

```svelte example class="flex justify-center gap-4" hideResponsiveButtons
{#include DotIndicator.svelte}
```

## Stacked

Use this example if you want to stack a group of users by overlapping the avatar components. 

This pattern saves space while still providing visual representation of all involved users. Include a count indicator when there are more users than can be displayed.

```svelte example class="flex flex-col justify-center gap-4" hideScript hideResponsiveButtons
{#include Stacked.svelte}
```

## Avatar text

This example can be used if you want to show additional information in the form of text elements such as the user's name and join date. 

```svelte example class="flex justify-center gap-4" hideScript hideResponsiveButtons
{#include AvatarText.svelte}
```

## User dropdown

Use this example if you want to show a dropdown menu when clicking on the avatar component. 

```svelte example class="flex justify-center h-96" hideResponsiveButtons
{#include UserDropdown.svelte}
```

## Sizes

You can set the `size` property to preset values of `xs | sm | md | lg | xl`. Custom sizes can be achieved by adding any of the Tailwind CSS size classes like `w-[x] h-[x]`.

Choose the appropriate size based on context:
- **xs/sm**: Compact lists, inline mentions, small UI elements
- **md**: Default size for most use cases, comment avatars
- **lg**: Profile cards, team pages, prominent displays
- **xl**: Profile headers, feature sections, landing pages

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

## Accessibility

The Avatar component is built with accessibility in mind:

- **Alt Text**: Always provide descriptive alt text for profile images
- **Semantic HTML**: Uses appropriate HTML elements for proper structure
- **Keyboard Navigation**: Interactive avatars (with dropdowns/tooltips) are fully keyboard accessible
- **Screen Reader Support**: Status indicators and additional information are announced to screen readers
- **Color Contrast**: Status dots and text meet WCAG contrast requirements

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Avatar](https://flowbite.com/docs/components/avatar/)

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
