---
layout: componentLayout
title: Svelte Badge - Flowbite
breadcrumb_title: Svelte Badge
component_title: Badge
dir: Components
description: Use Tailwind CSS badges as elements to show counts or labels separately or inside other components
thumbnailSize: w-28
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, LlmLink, Seealso } from '../../utils'
  import { P, A } from 'flowbite-svelte'
  const dirName = toKebabCase(component_title)
  const relatedLinks = [
    '/docs/components/avatar',
    '/docs/components/buttons',
    '/docs/components/indicators',
    '/docs/components/alert'
  ];
</script>

The badge component can be used to complement other elements such as buttons or text elements as a label or to show the count of a given data, such as the number of comments for an article or how much time has passed since a comment has been made.

Alternatively, badges can also be used as standalone elements that link to a certain page, functioning as interactive tags or category filters.

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

Make sure linked badges have appropriate hover states and are keyboard accessible.

```svelte example class="flex flex-wrap gap-2" hideScript hideResponsiveButtons
{#include Links.svelte}
```

## Badges with icon

You can also use SVG icons inside the badge elements.

```svelte example class="flex flex-wrap gap-2" hideResponsiveButtons
{#include Icon.svelte}
```

## Notification badge

To achieve the functionality of the notification badge, use the sibling [`Indicator`](/docs/components/indicators) component. Remember to add the `relative` class to the parent element.

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

Use the `dismissable` prop to dismiss the current badge.

```svelte example class="flex flex-wrap gap-4" hideScript hideResponsiveButtons
{#include Dismissable.svelte}
```

Use the `icon` snippet to add your desired custom close button icon.

```svelte example class="gap-4"
{#include Dismissable2.svelte}
```

A `onclose` callback will be dispatched during the dismissal, listen to it if needed.

```svelte example class="gap-4"
{#include Dismissable3.svelte}
```

## Dynamic color

The color can be changed dynamically based on application state or user interactions.

```svelte example class="flex flex-wrap gap-4" hideResponsiveButtons
{#include Dynamic.svelte}
```

## Opening badge

This example demonstrates badges with transition effects, creating a smooth animation when badges appear or change state.

```svelte example
{#include Opening.svelte}
```

## Persistent Dismissible Badge with Reset (localStorage)
This example shows how to make a Flowbite-Svelte `<Badge>` stay hidden after dismissal using localStorage. When the user clicks the dismiss (×) button, the badge is hidden across page reloads. A Reset button is provided to clear the stored state and show the badge again. Suitable for announcements, notifications, or one-time hints.

```svelte example
{#include BadgeLocalStorage.svelte}
```

## Accessibility

The Badge component follows accessibility best practices:

- **Semantic HTML**: Uses appropriate HTML elements for different badge types (links, buttons, spans)
- **Color Independence**: Don't rely solely on color to convey meaning; include text or icons
- **Keyboard Navigation**: Interactive badges are fully keyboard accessible
- **Focus Indicators**: Clear focus states for keyboard users
- **ARIA Labels**: Consider adding ARIA labels for icon-only badges

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Badge](https://flowbite.com/docs/components/badge/)

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
