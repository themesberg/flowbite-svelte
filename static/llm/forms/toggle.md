# Svelte Toggle (Switch) - Flowbite


The toggle component can be used to receive a simple “yes” or “no” type of answer from the user by choosing a single option from two options available in multiple sizes, styles, and colors coded with the utility classes from Tailwind CSS and with dark mode support.

## Setup

```svelte
<script lang="ts">
  import { Toggle } from "flowbite-svelte";
</script>
```

## Toggle examples

Get started with the default toggle component example as a checkbox element to receive a true or false selection from the user.

```svelte
<script lang="ts">
  import { Toggle } from "flowbite-svelte";
</script>

<Toggle>Toggle me</Toggle>
<Toggle checked={true}>Checked toggle</Toggle>
<Toggle disabled>Disabled toggle</Toggle>
<Toggle checked disabled>Disabled checked</Toggle>
```

## Colors

```svelte
<script lang="ts">
  import { Toggle } from "flowbite-svelte";
</script>

<Toggle color="red" checked>Red</Toggle>
<Toggle color="green" checked>Green</Toggle>
<Toggle color="purple" checked>Purple</Toggle>
<Toggle color="yellow" checked>Yellow</Toggle>
<Toggle color="teal" checked>Teal</Toggle>
<Toggle color="orange" checked>Orange</Toggle>
```

## Sizes

```svelte
<script lang="ts">
  import { Toggle } from "flowbite-svelte";
  const customSize = "w-16 h-10 after:top-1 after:left-[4px]  after:h-8 after:w-8";
</script>

<Toggle size="small">Small toggle</Toggle>
<Toggle size="default" checked>Default toggle</Toggle>
<Toggle size="large" checked>Large toggle</Toggle>
<Toggle size={undefined} classes={{ span: customSize }}>Custom toggle</Toggle>
```

## Label for off state

```svelte
<script lang="ts">
  import { Toggle } from "flowbite-svelte";
</script>

<Toggle>
  {#snippet offLabel()}
    dark mode
  {/snippet}
  light mode
</Toggle>
```

## Disabled

```svelte
<script lang="ts">
  import { Button, Toggle } from "flowbite-svelte";
  let isDisabled = $state(false);
  let checked: boolean = $state(false);
  const handleClick = () => {
    isDisabled = !isDisabled;
  };
</script>

<Button class="w-48" onclick={handleClick}>Disabled: {isDisabled ? "True" : "False"}</Button>

<Toggle class="mt-3" bind:checked disabled={isDisabled}>Disabled: {isDisabled}</Toggle>
```

## Component data

### Toggle

#### Types

[ToggleProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1008)

#### Props

- children
- size: "default"
- value
- checked: $bindable()
- disabled
- color: "primary"
- class: className
- classes
- inputClass
- spanClass
- offLabel


## References

- [Flowbite Switch (Toggle)](https://flowbite.com/docs/forms/toggle/)
