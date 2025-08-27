# Svelte Badge - Flowbite

The badge component can be used to complement other elements such as buttons or text elements as a label or to show the count of a given data, such as the number of comments for an article or how much time has passed by since a comment has been made.

Alternatively, badges can also be used as standalone elements that link to a certain page.

## Setup

Import a badge component in the script tag.

```svelte
<script>
  import { Badge } from "flowbite-svelte";
</script>
```

## Default badge

Use the following badge elements to indicate counts or labels inside or outside components.

```svelte
{#include Default.svelte}
```

## Large badges

Use the `large` prop to create a large variant of the badges.

```svelte
{#include Large.svelte}
```

## Bordered badge

Use the `border` prop to add a border accent to the badge component.

```svelte
{#include Bordered.svelte}
```

## Pills badge

Use the `rounded` prop to make the corners even more rounded like pills for the badge component.

```svelte
{#include Pills.svelte}
```

## Badges as links

You can also use badges as anchor elements to link to another page.

```svelte
{#include Links.svelte}
```

## Badges with icon

You can also use SVG icons inside the badge elements.

```svelte
{#include Icon.svelte}
```

## Notification badge

To achive the functionality of the notification badge, use the sibling [`Indicator`](/docs/components/indicators) component. Remember to add the `relative` class to parent element.

```svelte
{#include Notification.svelte}
```

## Button with badge

Use this example to add a badge inside a button component for a count indicator.

```svelte
{#include ButtonBadge.svelte}
```

## Badge with icon only

Alternatively you can also use badges which indicate only a SVG icon.

```svelte
{#include IconOnly.svelte}
```

## Dismissable badges

Use the `dimissable` prop to dismiss the current badge.

```svelte
{#include Dismissable.svelte}
```

Use the `icon` snippet to add your desired button.

```svelte
{#include Dismissable2.svelte}
```

A `onclose` callback will be dispatched during the dismissal, listen to it if needed.

```svelte
{#include Dismissable3.svelte}
```

## Dynamic color

The color can be changed dynamically.

```svelte
{#include Dynamic.svelte}
```

## Opening badge

```svelte
{#include Opening.svelte}
```

## Component data

### Badge

#### Types

[BadgeProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L215)

#### Props

- children
- icon
- badgeStatus: $bindable(true)
- color: "primary"
- large: false
- dismissable: false
- class: className
- classes
- border
- href
- target
- rounded
- transition: fade
- params
- aClass

## References

- [Flowbite Badge](https://flowbite.com/docs/components/badge/)
