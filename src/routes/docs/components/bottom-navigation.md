---
layout: componentLayout
title: Svelte Bottom Navigation - Flowbite
breadcrumb_title: Svelte Bottom Navigation
component_title: Bottom Navigation
dir: Components
description: Use the bottom navigation bar component to allow users to navigate through your website or create a control bar using a menu that is positioned at the bottom of the page
thumnailSize: w-64
---

<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase, LlmLink, Seealso } from '../../utils'
  import { P, A } from '$lib'

  const dirName = toKebabCase(component_title)
  const relatedLinks = [
    'docs/components/navbar',
    'docs/components/sidebar',
    'docs/components/tabs',
    'docs/components/button-group'
  ];
</script>

The bottom navigation bar component can be used to allow menu items and certain control actions to be performed by the user through the usage of a fixed bar positioning to the bottom side of your page.

Bottom navigation is particularly effective for:
- **Mobile applications** and mobile-first designs where thumb-reach is important
- **Progressive web apps (PWAs)** mimicking native mobile app patterns
- **Multi-view applications** with 3-5 primary sections
- **Media players** and content viewers with playback controls
- **Quick access menus** for frequently used actions
- **Dashboard controls** and filter panels

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

```svelte example class="flex flex-col relative"
{#include Default.svelte}
```

## Adding links and active class

Utilize the `href` prop within the `BottomNavItem` component to incorporate a hyperlink. To initiate the application of the active class, include the `activeUrl` prop within the `BottomNav` component.

By default, the `BottomNavItem` will only be set to active if the `href` and the `activeUrl` are exactly the same. This ensures precise highlighting of the current page.

Active states are crucial for:
- **User orientation** - showing where they are in the app
- **Visual feedback** - confirming navigation actions
- **Improved UX** - reducing confusion about current location
- **Accessibility** - helping screen reader users understand context

```svelte example class="flex flex-col relative"
{#include Links.svelte}
```

The following example shows how to change the active class styling using the `activeClass` prop. This allows you to customize the appearance of active navigation items to match your brand or design system.

```svelte example class="flex flex-col relative"
{#include ActiveLink.svelte}
```

Use the following example to change the icon colors. Customizing icon colors helps:
- Match your brand identity
- Provide better visual hierarchy
- Improve contrast for accessibility
- Create distinct hover and active states

```svelte example class="flex flex-col relative"
{#include IconColor.svelte}
```

## Menu items with border

This example can be used to show a border between the menu items inside the bottom navbar. Borders help:
- **Visually separate** different sections or actions
- **Create clear boundaries** between interactive elements
- **Improve scannability** of menu options
- **Add structure** to the navigation layout

```svelte example class="flex flex-col relative"
{#include Border.svelte}
```

## Application bar example

Use this example to show a CTA button in the center of the navigation component to create new items. This pattern is commonly used in:
- **Social media apps** - for creating posts or content
- **Task managers** - for adding new tasks or items
- **Note-taking apps** - for creating new notes
- **E-commerce apps** - for adding items to cart

The centered primary action draws attention and makes the most important action easily accessible.

```svelte example class="flex flex-col relative"
{#include Application.svelte}
```

## Example with pagination

This example can be used to paginate multiple pages on a single view alongside other menu items. Pagination controls in the bottom navigation are useful for:
- **Content browsers** - galleries, articles, products
- **Step-by-step processes** - forms, tutorials, onboarding
- **Document viewers** - PDFs, presentations, reports
- **Feed navigation** - social media, news, updates

This keeps pagination accessible without requiring users to scroll to the bottom of content.

```svelte example class="flex flex-col relative"
{#include Pagination.svelte}
```

## Button group bottom bar

This example demonstrates a button group layout in the bottom bar, perfect for:
- **Toggle controls** - switching between view modes
- **Filter options** - showing different data sets
- **Action groups** - related actions grouped together
- **Selection tools** - choosing options or modes

```svelte example class="flex flex-col relative"
{#include Bottom.svelte}
```

## Card with bottom bar

This example can be used to position a bottom navigation bar inside of a card element with scroll enabled on the Y axis to allow changing the content inside of the card, enable certain actions or show a list of menu items.

You can even use the other bottom navbar examples to exchange the default one presented here.

This pattern is excellent for:
- **Modal dialogs** with multiple sections
- **Embedded widgets** or mini-applications
- **Dashboard panels** with internal navigation
- **Content cards** with action controls
- **Collapsible sections** with persistent controls

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

## Best Practices

When implementing bottom navigation, consider these guidelines:

- **Limit Items**: Use 3-5 items maximum; more creates clutter and confusion
- **Mobile First**: Bottom navigation is primarily for mobile; consider alternatives for desktop
- **Clear Labels**: Use concise, understandable labels (1-2 words)
- **Meaningful Icons**: Choose recognizable icons that match their labels
- **Avoid Scrolling**: Items should all be visible without horizontal scrolling
- **Primary Actions**: Place the most important actions centrally or on the left
- **Consistent Placement**: Keep bottom navigation in the same position across all pages
- **Fixed Position**: Always use fixed positioning so navigation remains accessible
- **Test on Devices**: Ensure comfortable thumb reach on actual mobile devices

## Design Considerations

- **Safe Area**: Account for notches and home indicators on modern phones
- **Elevation/Shadow**: Add subtle shadow to distinguish from content
- **Background Color**: Ensure sufficient contrast with page content
- **Active State**: Make the active item clearly distinguishable
- **Icon + Label**: Combine icons with text labels for clarity
- **Responsive Design**: Consider hiding or adapting for tablet/desktop views

## See also

<Seealso links={relatedLinks} />

## Component data

The component has the following props, type, and default values. See [types page](/docs/pages/typescript) for type information.

### Key Props

**BottomNav:**
- `activeUrl`: Current page URL for highlighting active items
- `position`: Position of the navigation (default: 'fixed')
- `navType`: Style variant for the navigation bar
- `outerClass`: Custom classes for the outer container
- `innerClass`: Custom classes for the inner container

**BottomNavItem:**
- `href`: Link destination for navigation items
- `activeClass`: Custom classes for active state
- `exact`: Whether URL matching should be exact (default: true)
- `btnName`: Accessible label for the button/link

<CompoAttributesViewer {dirName}/>

## References

- [Flowbite Bottom Navigation](https://flowbite.com/docs/components/bottom-navigation/)

## GitHub Links

<GitHubCompoLinks />

## LLM Link

<LlmLink />
