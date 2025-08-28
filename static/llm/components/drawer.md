# Svelte Drawer (Off-canvas) - Flowbite


Use the Drawer component (or “off-canvas”) to show a fixed element relative to the document page from any side for navigation, contact forms, informational purposes or other user actions.

## Set up

```svelte
<script lang="ts">
  import { Drawer, CardPlaceholder, Button } from "flowbite-svelte";
  import { sineIn } from "svelte/easing";
</script>
```

## Default drawer

Since `Drawer` component extend Svelte's `HTMLAttributes<HTMLDivElement>`, you can set the `id`, `aria-labelledby=id` and `aria-controls=id` to the drawer component.

```svelte
{#include Default.svelte}
```

## Drawer navigation

Use this example to show a navigational sidebar inside the drawer component.

```svelte
{#include Navigation.svelte}
```

## Contact form

Use this example to show a contact form inside the drawer component.

```svelte
{#include Contact.svelte}
```

## Form elements

Use this example if you want to add form elements inside the drawer component including datepickers.

```svelte
{#include Form.svelte}
```

## A11y

Use `Tab` and `Shift+Tab` to navigate between buttons or links in the drawer. Press `ESC` to close it on a small screen.

## Placement

Use the placement prop to position the drawer component either on the top, right, bottom, or left side of the document page. This can be done using the `placement='left|right|top|bottom'` where the default value is `left`.

```svelte
{#include Placement.svelte}
```

## Backdrop

Use Tailwind's `backdrop:` variant classes (e.g., `backdrop:bg-black/50`) to style the dialog backdrop. For example:

```svelte
<Drawer class="backdrop:bg-black/50">
  <!-- content -->
</Drawer>
```

## Non-modal

Drawer is `modal` by default (see `dialog`). You can set `modal={false}` to open `Drawer` in non-modal mode (no backdrop). However, you will need to manage the `Drawer` position, z-index, closing outside and `ESC` key behavior manually.

```svelte
{#include NonModal.svelte}
```

## Disabling outside click

As the default, the drawer closes when you click the outside of the drawer. However sometimes you don't want that. Set `outsideclose` to false to disable it. Do not confuse that with non-modal state where there is no backdrop at all.

```svelte
{#include DisablingOutside.svelte}
```

## Swipeable edge

The drawer edge functionality allows you to show a small part of the drawer when it is not shown completely by applying the `offset` property. This can be given any CSS compliant unit like `200px` or `10em`.

In this example we also use the utility `DrawerHandle` component to toggle the visibility of the drawer component by clicking on the “edge” part of the element.

```svelte
{#include SwipeableEdge.svelte}
```

## Component data

### Drawer

#### Types

[DrawerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L579)

#### Props

- children
- open: $bindable(false)
- hidden: $bindable()
- modal
- offset
- width
- dismissable: offset ? false : undefined
- placement: "left"
- class: className
- transitionParams
- transition: fly
- outsideclose
- activateClickOutside

### DrawerHandle

#### Types

[DrawerHandleProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L587)

#### Props

- children
- placement
- "aria-label": ariaLabel
- class: className
- classes

### Drawerhead

#### Types

[DrawerheadProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L589)

#### Props

- closeIcon
- children
- buttonClass
- svgClass
- class: className
- classes


## References

- [Flowbite Drawer](https://flowbite.com/docs/components/drawer/)


