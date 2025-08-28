# Svelte Mega Menu - Flowbite


The mega menu component is a full-width dropdown that can be triggered by clicking on the menu item and it shows a list of links that you can use to navigate through the pages on a website.

## Setup

```svelte
<script>
  import { MegaMenu } from "flowbite-svelte";
</script>
```

## Default mega menu

Use this example to show a list of links aligned on three columns inside the mega menu dropdown.

```svelte
{#include Default.svelte}
```

## Mega menu with icons

This example of a mega menu dropdown can be used to also show an icon near the text of the link.

```svelte
{#include Icons.svelte}
```

## Transition

Since the `MegaMenu` component extends `Popper`, it also supports the `transition` and `transitionParams` props for customizing animations.

```svelte
{#include Transition.svelte}
```

## A11y

Use `Tab` and `Shift+Tab` to navigate between buttons or links in the mega menu. Press `ESC` to close it.

## Full width dropdown

Use this example to show a mega menu dropdown that spans the entire width of the document page.

```svelte
{#include Dropdown.svelte}
```

## Full width with CTA

This example can be used to also show a CTA button or link next to the menu items inside the dropdown.

```svelte
{#include Cta.svelte}
```

## Full width with image

This example can be used to also show a CTA with a backdround image inside the dropdown next to the other menu items and links.

```svelte
{#include Image.svelte}
```

## Component data

### MegaMenu

#### Types

[MegaMenuProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1050)

#### Props

- children
- extra
- items: []
- full
- ulClass
- isOpen: $bindable(false)
- class: className
- extraClass
- classes


## References

- [Flowbite Mega Menu](https://flowbite.com/docs/components/list-group/)


