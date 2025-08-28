# Svelte Button Group - Flowbite


The button group component from flowbite-svelte can be used to stack together multiple buttons and links inside a single element.

## Setup

```svelte
<script>
  import { ButtonGroup, Button } from "flowbite-svelte";
</script>
```

## Default

Use the following code to stack together buttons into a single group.

```svelte
{#include Default.svelte}
```

## Disabled

```svelte
{#include Disabled.svelte}
```

## More examples

```svelte
{#include More.svelte}
```

## Button group as links

You can also use the button group component as links.

```svelte
{#include Links.svelte}
```

## Group buttons with icons

You can also use SVG icons inside the grouped buttons.

```svelte
{#include Icons.svelte}
```

## Outline

Group a series of buttons together on a single line or stack them in a vertical column.

```svelte
{#include Outline.svelte}
```

## Outline with icon

Group a series of buttons together on a single line or stack them in a vertical column.

```svelte
{#include OutlineIcon.svelte}
```

## Events

You can add the `onclick` event to the `Button` component.

```svelte
{#include Event.svelte}
```

## See also

- [Button toggle](https://flowbite-svelte.com/llm/extend/button-toggle.md)
- [Button group](https://flowbite-svelte.com/llm/components/button-group.md)
- [List group](https://flowbite-svelte.com/llm/components/list-group.md)
- [Radio#radiobutton](https://flowbite-svelte.com/llm/forms/radio#radiobutton.md)
- [Checkbox#checkboxbutton](https://flowbite-svelte.com/llm/forms/checkbox#checkboxbutton.md)

## Component data

### ButtonGroup

#### Types

[ButtonGroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L295)

#### Props

- children
- size: "md"
- disabled
- class: className


## References

- [Flowbite Button Group](https://flowbite.com/docs/components/button-group/)


