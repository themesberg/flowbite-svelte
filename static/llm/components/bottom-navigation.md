# Svelte Bottom Navigation - Flowbite


The bottom bar component can be used to allow menu items and certain control actions to be performed by the user through the usage of a fixed bar positioning to the bottom side of your page.

Check out multiple examples of the bottom navigation component based on various styles, controls, sizes, content and leverage the utility classes from Tailwind CSS to integrate into your own project.

## Setup

```svelte
<script>
  import { BottomNav, BottomNavItem } from "flowbite-svelte";
</script>
```

## Default bottom navigation

Use the default bottom navigation bar example to show a list of menu items as buttons to allow the user to navigate through your website based on a fixed position. You can also use anchor tags instead of buttons.

```svelte
{#include Default.svelte}
```

## Adding links and active class

Utilize the `href` prop within the `BottomNavItem` component to incorporate a hyperlink. To initiate the application of the active class, include the `activeUrl` prop within the `BottomNav` component.

By default, the `BottomNavItem` will only be set to active if the `href` and the `activeUrl` are exactly the same.

```svelte
{#include Links.svelte}
```

The following example shows how to change active class, by using `activeClass` prop.

```svelte
{#include ActiveLink.svelte}
```

Use the following example to change the icon colors:

```svelte
{#include IconColor.svelte}
```

## Menu items with border

This example can be used to show a border between the menu items inside the bottom navbar.

```svelte
{#include Border.svelte}
```

## Application bar example

Use this example to show a CTA button in the center of the navigation component to create new items.

```svelte
{#include Application.svelte}
```

## Example with pagination

This example be used to paginate multiple pages on a single view alongside other menu items.

```svelte
{#include Pagination.svelte}
```

## Button group bottom bar

```svelte
{#include Bottom.svelte}
```

## Card with bottom bar

This example can be used to position a bottom navigation bar inside of a card element with scroll enabled on the Y axis to allow changing the content inside of the card, enable certain actions or show a list of menu items.

You can even use the other bottom navbar examples to exchange the default one presented here.

```svelte
{#include Card.svelte}
```

## Component data

### BottomNav

#### Types

[BottomNavProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L246)

#### Props

- children
- header
- position: "fixed"
- navType: "default"
- class: className
- classes
- outerClass
- innerClass
- activeClass
- activeUrl: ""

### BottomNavHeader

#### Types

[BottomNavHeaderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L265)

#### Props

- children
- class: className
- classes
- outerClass
- innerClass

### BottomNavHeaderItem

#### Types

[BottomNavHeaderItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L271)

#### Props

- itemName
- active
- class: className

### BottomNavItem

#### Types

[BottomNavItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L255)

#### Props

- children
- btnName
- appBtnPosition: "middle"
- activeClass
- class: className
- classes
- btnClass
- spanClass
- active: manualActive


## References

- [Flowbite Bottom Navigation](https://flowbite.com/docs/components/bottom-navigation/)


