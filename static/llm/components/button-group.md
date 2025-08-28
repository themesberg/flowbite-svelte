# Svelte Button Group - Flowbite


<script lang="ts">
  import { CompoAttributesViewer,  GitHubCompoLinks, toKebabCase, Seealso } from '../../utils'
  import { Badge, P, A } from '$lib'
  const dirName = 'buttongroup'
  const relatedLinks = ['/docs/extend/button-toggle','/docs/components/button-group' ,'/docs/components/list-group','/docs/forms/radio#radiobutton' , '/docs/forms/checkbox#checkboxbutton'];
</script>

The button group component from flowbite-svelte can be used to stack together multiple buttons and links inside a single element.

## Setup

```svelte
<script lang="ts">
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

<Seealso links={relatedLinks} />

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


