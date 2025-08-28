# Svelte Range Slider - Flowbite


<script lang="ts">
  import { CompoAttributesViewer,  GitHubCompoLinks, toKebabCase } from '../../utils'
  const components = 'Range'
  let minmaxValue=5
</script>

The range component can be used as an input field to get a number from the user based on your custom selection (ie. from 1 to 100) by using a sliding animation.

## Setup

```svelte
<script lang="ts">
  import { Range } from "flowbite-svelte";
</script>
```

## Range slider example

```svelte
{#include Default.svelte}
```

## Disabled state

```svelte
{#include Disabled.svelte}
```

## Binding value

Use bind:value to bind the range input value as seen the the following examples.

## Min and max

```svelte
{#include MinAndMax.svelte}
```

## Steps

```svelte
{#include Steps.svelte}
```

## Sizes

```svelte
{#include Sizes.svelte}
```

## Unknown attributes

Since we added `...restProps` to input field, you can contain the props which are not declared with export. It will pass down other unknown attributes to an element in a component.

## Component data

### Range

#### Types

[RangeProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L835)

#### Props

- value: $bindable()
- appearance: "none"
- color: "blue"
- size: "md"
- inputClass
- class: className


## References

- [Flowbite Range Slider](https://flowbite.com/docs/forms/range/)

<GitHubCompoLinks {components}/>
