---
layout: componentLayout
title: Svelte Bottom Navigation - Flowbite
breadcrumb_title: Svelte Bottom Navigation
component_title: Bottom Navigation
dir: Components
description: Use the bottom navigation bar component to allow users to navigate through your website or create a control bar using a menu that is positioned at the bottom of the page
thumbnailSize: w-64
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, LlmLink, Seealso } from '../../utils'
  import { P, A } from '$lib'

  const dirName = toKebabCase(component_title)
  const relatedLinks = [
    '/docs/components/navbar',
    '/docs/components/sidebar',
    '/docs/components/tabs',
    '/docs/components/button-group'
  ];
</script>

The bottom navigation bar component can be used to allow menu items and certain control actions to be performed by the user through the usage of a fixed bar positioning to the bottom side of your page.

Check out multiple examples of the bottom navigation component based on various styles, controls, sizes, content and leverage the utility classes from Tailwind CSS to integrate into your own project.

## Setup

```svelte example hideOutput
<script lang="ts">
  import { BottomNav, BottomNavItem } from "flowbite-svelte";
</script>
```

## Default bottom navigation

Use the default bottom navigation bar example to show a list of menu items as buttons to allow the user to navigate through your website based on a fixed position. You can also use anchor tags instead of buttons for better semantic HTML and SEO.

The fixed positioning ensures the navigation remains accessible as users scroll through content, providing consistent access to key actions and navigation.

```svelte example 
{#include Default.svelte}
```

## Adding links and active class

Utilize the `href` prop within the `BottomNavItem` component to incorporate a hyperlink. To initiate the application of the active class, include the `activeUrl` prop within the `BottomNav` component.

By default, the `BottomNavItem` will only be set to active if the `href` and the `activeUrl` match. This ensures precise highlighting of the current page.

```svelte example class="flex flex-col relative"
{#include Links.svelte}
```

The following example shows how to change the active class styling using the `activeClass` prop. This allows you to customize the appearance of active navigation items to match your brand or design system.

```svelte example class="flex flex-col relative"
{#include ActiveLink.svelte}
```

```svelte example class="flex flex-col relative"
{#include IconColor.svelte}
```

## Menu items with border

This example can be used to show a border between the menu items inside the bottom navbar.

```svelte example class="flex flex-col relative"
{#include Border.svelte}
```

## Application bar example

Use this example to show a CTA button in the center of the navigation component to create new items.

The centered primary action draws attention and makes the most important action easily accessible.

```svelte example class="flex flex-col relative"
{#include Application.svelte}
```

## Example with pagination

This example can be used to paginate multiple pages on a single view alongside other menu items.

This keeps pagination accessible without requiring users to scroll to the bottom of content.

```svelte example class="flex flex-col relative"
{#include Pagination.svelte}
```

## Button group bottom bar

This example demonstrates a button group layout in the bottom bar.

```svelte example class="flex flex-col relative"
{#include Bottom.svelte}
```

## Card with bottom bar

This example can be used to position a bottom navigation bar inside of a card element with scroll enabled on the Y axis to allow changing the content inside of the card, enable certain actions or show a list of menu items.

You can even use the other bottom navbar examples to exchange the default one presented here.

```svelte example class="flex justify-center"
{#include Card.svelte}
```

## Accessibility

The Bottom Navigation component follows accessibility best practices:

- **Keyboard Navigation**: All items are keyboard accessible using Tab and Enter/Space
- **ARIA Landmarks**: Use appropriate ARIA roles like `navigation` for the container
- **Focus Indicators**: Clear focus states for keyboard users
- **Screen Reader Support**: Link text and labels are announced properly
- **Touch Targets**: Minimum 44x44px tap targets for mobile usability
- **Contrast**: Text and icons meet WCAG contrast requirements

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Bottom Navigation](https://flowbite.com/docs/components/bottom-navigation/)

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
