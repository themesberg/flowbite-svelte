# Svelte Range Slider - Flowbite


The range component can be used as an input field to get a number from the user based on your custom selection (ie. from 1 to 100) by using a sliding animation.

## Setup

```svelte
<script lang="ts">
  import { Range } from "flowbite-svelte";
</script>
```

## Range slider example

```svelte
<script lang="ts">
  import { Range, Label } from "flowbite-svelte";
</script>

<Label>Default range</Label>
<Range id="range1" value={50} />
```

## Disabled state

```svelte
<script lang="ts">
  import { Range, Label } from "flowbite-svelte";
</script>

<Label>Default range</Label>
<Range id="range-disabled" disabled value={50} />
```

## Binding value

Use bind:value to bind the range input value as seen the the following examples.

## Min and max

```svelte
<script lang="ts">
  import { Range, Label } from "flowbite-svelte";
  let minmaxValue = 5;
</script>

<Label>Min-max range</Label>
<Range id="range-minmax" min="0" max="10" bind:value={minmaxValue} />
<p>Value: {minmaxValue}</p>
```

## Steps

```svelte
<script lang="ts">
  import { Range, Label } from "flowbite-svelte";
  let stepValue = 2.5;
</script>

<Label>Range steps</Label>
<Range id="range-steps" min="0" max="5" bind:value={stepValue} step="0.5" />
<p>Value: {stepValue}</p>
```

## Sizes

```svelte
<script lang="ts">
  import { Range, Label } from "flowbite-svelte";
</script>

<Label>Small range</Label>
<Range id="small-range" size="sm" value={50} />
<Label>Default range</Label>
<Range id="default-range" size="md" value={50} />
<Label>Large range</Label>
<Range id="large-range" size="lg" value={50} />
```

## Unknown attributes

Since we added `...restProps` to input field, you can contain the props which are not declared with export. It will pass down other unknown attributes to an element in a component.

## Component data

### Range

#### Types

[RangeProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L871)

#### Props

- value: $bindable()
- appearance: "none"
- color: "blue"
- size: "md"
- inputClass
- class: className


## References

- [Flowbite Range Slider](https://flowbite.com/docs/forms/range/)
