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

Badges are perfect for:
- Showing notification counts on navigation items
- Displaying status labels (new, featured, beta)
- Highlighting categories or tags
- Indicating numerical values or metrics
- Drawing attention to specific elements

Alternatively, badges can also be used as standalone elements that link to a certain page, functioning as interactive tags or category filters.

## Setup

Import a badge component in the script tag.

```svelte example hideOutput
<script lang="ts">
  import { Badge } from "flowbite-svelte";
</script>
```

## Default badge

Use the following badge elements to indicate counts or labels inside or outside components. Each color variant conveys different semantic meanings:

- **Default/Blue**: General information or neutral labels
- **Dark**: Subtle or secondary information
- **Red**: Errors, warnings, or critical items
- **Green**: Success, active, or positive states
- **Yellow**: Warnings or items requiring attention
- **Indigo/Purple**: Special features or premium content

```svelte example class="flex flex-wrap gap-2" hideScript hideResponsiveButtons
{#include Default.svelte}
```

## Large badges

Use the `large` prop to create a large variant of the badges. Larger badges are more prominent and work well for:
- Hero sections or featured content
- Dashboard metrics and KPIs
- Primary navigation elements
- Call-to-action labels

```svelte example class="flex flex-wrap gap-2" hideScript hideResponsiveButtons
{#include Large.svelte}
```

## Bordered badge

Use the `border` prop to add a border accent to the badge component. Bordered badges provide a more subtle, refined appearance that works well:
- On colored backgrounds where filled badges might clash
- In minimalist designs
- When you need visual distinction without heavy styling
- For secondary or less critical information

```svelte example class="flex flex-wrap gap-2" hideScript hideResponsiveButtons
{#include Bordered.svelte}
```

## Pills badge

Use the `rounded` prop to make the corners even more rounded like pills for the badge component. Pill-shaped badges offer a modern, friendly appearance and are commonly used in:
- Tag systems and filters
- Social media interfaces
- Modern web applications
- Anywhere a softer, more approachable design is desired

```svelte example class="flex flex-wrap gap-2" hideScript hideResponsiveButtons
{#include Pills.svelte}
```

## Badges as links

You can also use badges as anchor elements to link to another page. Interactive badges are useful for:
- Category navigation
- Tag filtering systems
- Quick navigation to related content
- Clickable status indicators that show more details

Make sure linked badges have appropriate hover states and are keyboard accessible.

```svelte example class="flex flex-wrap gap-2" hideScript hideResponsiveButtons
{#include Links.svelte}
```

## Badges with icon

You can also use SVG icons inside the badge elements. Icons enhance badges by:
- Adding visual meaning (checkmarks for verified, stars for featured)
- Making badges more scannable
- Reducing the need for text in some cases
- Creating a more polished, professional appearance

```svelte example class="flex flex-wrap gap-2" hideResponsiveButtons
{#include Icon.svelte}
```

## Notification badge

To achieve the functionality of the notification badge, use the sibling [`Indicator`](/docs/components/indicators) component. Remember to add the `relative` class to the parent element.

Notification badges are commonly used to:
- Show unread message counts
- Indicate pending notifications
- Display cart item quantities
- Alert users to updates or changes

```svelte example class="flex flex-wrap gap-4" hideResponsiveButtons
{#include Notification.svelte}
```

## Button with badge

Use this example to add a badge inside a button component for a count indicator. This pattern is frequently seen in:
- Inbox or message buttons showing unread counts
- Shopping cart buttons displaying item quantities
- Filter buttons showing the number of active filters
- Action buttons with pending item counts

```svelte example class="flex flex-wrap gap-4" hideResponsiveButtons
{#include ButtonBadge.svelte}
```

## Badge with icon only

Alternatively you can also use badges which indicate only a SVG icon. Icon-only badges work well when:
- Space is limited
- The icon meaning is universally understood
- Used consistently throughout the interface
- Paired with tooltips for additional context

```svelte example hideScript hideResponsiveButtons
{#include IconOnly.svelte}
```

## Dismissable badges

Use the `dismissable` prop to dismiss the current badge. Dismissable badges are useful for:
- User-applied filters or tags that can be removed
- Temporary labels or notifications
- Selected items in multi-select interfaces
- Dynamic tag management systems

```svelte example class="flex flex-wrap gap-4" hideScript hideResponsiveButtons
{#include Dismissable.svelte}
```

Use the `icon` snippet to add your desired custom close button icon.

```svelte example class="gap-4"
{#include Dismissable2.svelte}
```

A `onclose` callback will be dispatched during the dismissal, listen to it if needed. This allows you to:
- Update application state when badges are removed
- Track user interactions for analytics
- Trigger related actions (like removing filters)
- Sync badge state with backend data

```svelte example class="gap-4"
{#include Dismissable3.svelte}
```

## Dynamic color

The color can be changed dynamically based on application state or user interactions. Dynamic coloring is useful for:
- Status indicators that change based on real-time data
- Interactive elements that respond to user actions
- Conditional styling based on business logic
- Creating responsive, data-driven interfaces

```svelte example class="flex flex-wrap gap-4" hideResponsiveButtons
{#include Dynamic.svelte}
```

## Opening badge

This example demonstrates badges with transition effects, creating a smooth animation when badges appear or change state.

```svelte example
{#include Opening.svelte}
```

## Accessibility

The Badge component follows accessibility best practices:

- **Semantic HTML**: Uses appropriate HTML elements for different badge types (links, buttons, spans)
- **Color Independence**: Don't rely solely on color to convey meaning; include text or icons
- **Keyboard Navigation**: Interactive badges are fully keyboard accessible
- **Focus Indicators**: Clear focus states for keyboard users
- **ARIA Labels**: Consider adding ARIA labels for icon-only badges

## Best Practices

When using badges, consider these guidelines:

- **Be Concise**: Keep badge text short (1-3 words or numbers)
- **Use Sparingly**: Too many badges can create visual clutter
- **Consistent Meaning**: Use colors consistently throughout your application
- **Appropriate Size**: Match badge size to its context and importance
- **Consider Context**: Place badges near related content for clarity
- **Readable Contrast**: Ensure text has sufficient contrast against badge background

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
