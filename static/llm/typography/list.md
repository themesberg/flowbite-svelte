# Svelte Lists - Flowbite


Get started with a collection of list components built with Tailwind CSS for ordered and unordered lists with bullets, numbers, or icons and other styles and layouts to show a list of items inside an article or throughout your web page.

## Setup

```html
<script>
  import { List, Li } from "flowbite-svelte";
</script>
```

## Unordored list

Use this example to create a default unordered list of items.

```svelte
{#include Unordered.svelte}
```

### Icons

This example can be used to apply custom icons instead of the default bullets for the list items.

```svelte
{#include UnorderedIcons.svelte}
```

### Nested

Use this example to nested another list of items inside the parent list element.

```svelte
{#include UnorderedNested.svelte}
```

### Unstyled

Use the `tag="dl"` prop to disable the list style bullets or numbers.

```svelte
{#include UnorderedUnstyled.svelte}
```

## Ordered list

Use the `tag="ol"` prop to create an ordered list of items with numbers.

```svelte
{#include Ordered.svelte}
```

### Nested

This example can be used to nest multiple lists into each other.

```svelte
{#include OrderedNested.svelte}
```

## Description List

Create a description list by using the `tag="dl"` prop and set the term and name with the following example.

```svelte
{#include Description.svelte}
```

## List with icon

Use this example to create a list of items with custom SVG icons instead of the default bullets.

```svelte
{#include Icon.svelte}
```

## Advanced layout

This example can be used to show more details for each list item such as the user’s name, email and profile picture.

```svelte
{#include Advanced.svelte}
```

## Horizontal List

Use this example to create a horizontally aligned list of items.

```svelte
{#include Horizontal.svelte}
```

## Component data

### List

#### Types

[ListProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1948)

#### Props

- children
- tag: "ul"
- isContenteditable: false
- position: "inside"
- ctxClass
- class: className


## References

<GitHubCompoLinks {components}/>
