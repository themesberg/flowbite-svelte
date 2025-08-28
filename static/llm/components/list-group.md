# Svelte List Group - Flowbite


The list group component can be used to display a series of elements, buttons or links inside a single card component similar to a sidebar.

## Setup

```svelte
<script lang="ts">
  import { Listgroup, ListgroupItem } from "flowbite-svelte";
</script>
```

## Default list group

Here’s an example of a list group that you can use right away.

```svelte
{#include Default.svelte}
```

## List group with links

You can also display a series of links inside the list group element. Notice how items provide the `href` field.

You need to set the list to `active` mode to enable hovering, focus and links.

If list is active and data items contain `href` field entries are presented as `<a>` elements.

You can pass extra properties to the `<a>` element by setting the `attrs` atrribute in the items list.

```svelte
{#include Links.svelte}
```

## List group with buttons

It is also possible to display a list of button element inside the list group component. The following example includes an active and disabled item as well.

You need to set the list to `active` mode to enable hovering, focus and `onclick`.

If list is active and data items do not contain `href` field entries are presented as `<button>` elements triggering `onclick` events.

You can pass extra properties to the `<button>` element by setting the `attrs` atrribute in the items list.

```svelte
{#include Buttons.svelte}
```

## List group with icons

Use the following example to create a list of buttons as a menu together with SVG icons.

```svelte
{#include Icons.svelte}
```

## Horizontal list group

Use the `horizontal` property to change the direction of list items.

```svelte
{#include Group.svelte}
```

## Horizontal list with tooltip

Use the following example when you want to use `Tooltip` with a horizontal list.

```svelte
{#include Tooltip.svelte}
```

## Advanced

When non standard usage is needed you can omit the `items` props and add elements directly to the list. Usage of hidden so far `ListgroupItem` helps you with proper layout.

```svelte
{#include Advanced.svelte}
```

## See also

- [Button toggle](https://flowbite-svelte.com/llm/extend/button-toggle.md)
- [Button group](https://flowbite-svelte.com/llm/components/button-group.md)
- [List group](https://flowbite-svelte.com/llm/components/list-group.md)
- [Radio#radiobutton](https://flowbite-svelte.com/llm/forms/radio#radiobutton.md)
- [Checkbox#checkboxbutton](https://flowbite-svelte.com/llm/forms/checkbox#checkboxbutton.md)

## Component data

### Listgroup

#### Types

[ListgroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1028)

#### Props

- children
- items
- active
- onclick
- horizontal
- rounded
- border
- class: className
- itemClass
- iconClass

### ListgroupItem

#### Types

[ListgroupItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1039)

#### Props

- children
- active
- current
- disabled
- horizontal
- name
- Icon
- class: className
- iconClass: "me-2.5 h-15 w-15"


## References

- [Flowbite List Group](https://flowbite.com/docs/components/list-group/)


