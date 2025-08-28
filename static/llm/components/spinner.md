# Svelte Spinner - Flowbite


<script lang="ts">
  import { CompoAttributesViewer, GitHubCompoLinks, toKebabCase } from '../../utils'
  import { P, A } from '$lib'
  const dirName = toKebabCase(component_title)
</script>

The spinner component can be used as a loading indicator which comes in multiple colors, sizes, and styles separately or inside elements such as buttons to improve the user experience whenever data is being fetched from your server.

## Setup

```svelte
<script lang="ts">
  import { Spinner } from "flowbite-svelte";
</script>
```

## Default spinner

Use the following SVG element to show a loading animation:

```svelte
{#include Default.svelte}
```

## Colors

You can change the colors of the spinner element using the `color` prop.

```svelte
{#include Colors.svelte}
```

## Sizes

Change the size of the spinner component using the `size` prop.

```svelte
{#include Sizes.svelte}
```

## Alignment

Because the spinner component is an inline HTML element it can easily be aligned on the left, center, or right side using the `text-{left|center|right}` utility classes:

```svelte
{#include Alignment.svelte}
```

## Buttons

The spinner component can also be used inside elements such as buttons when submitting form data:

```svelte
{#include Buttons.svelte}
```

## Component data

### Spinner

#### Types

[SpinnerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1510)

#### Props

- color: "primary"
- size: "8"
- class: className
- currentFill: "currentFill"
- currentColor: "currentColor"


## References

- [Flowbite Spinner (Loader)](https://flowbite.com/docs/components/spinner/)


