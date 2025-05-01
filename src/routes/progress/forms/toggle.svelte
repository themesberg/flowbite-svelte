<script lang="ts">

  import { Button, Toggle } from '$lib'
  const customSize = "w-16 h-10 after:top-1 after:left-[4px]  after:h-8 after:w-8";
  const components = 'Toggle'

  let isDisabled = $state(false);
  let checked: boolean = $state(false);
  const handleClick = () => {
    isDisabled = !isDisabled;
  };
</script>

The toggle component can be used to receive a simple “yes” or “no” type of answer from the user by choosing a single option from two options available in multiple sizes, styles, and colors coded with the utility classes from Tailwind CSS and with dark mode support.

## Setup

## Toggle examples

Get started with the default toggle component example as a checkbox element to receive a true or false selection from the user.

<div class="m-8">
<Toggle>Toggle me</Toggle>
<Toggle checked={true}>Checked toggle</Toggle>
<Toggle disabled>Disabled toggle</Toggle>
<Toggle checked disabled>Disabled checked</Toggle>
</div>

## Colors

<div class="m-8">
<Toggle color="red" checked>Red</Toggle>
<Toggle color="green" checked>Green</Toggle>
<Toggle color="purple" checked>Purple</Toggle>
<Toggle color="yellow" checked>Yellow</Toggle>
<Toggle color="teal" checked>Teal</Toggle>
<Toggle color="orange" checked>Orange</Toggle>
</div>

## Sizes

<div class="m-8">

<Toggle size="small">Small toggle</Toggle>
<Toggle size="default" checked>Default toggle</Toggle>
<Toggle size="large" checked>Large toggle</Toggle>
<Toggle size={undefined} spanClass={customSize}>Custom toggle</Toggle>
</div>

## Label for off state

<div class="m-8">
<Toggle>
  {#snippet offLabel()}
    dark mode
  {/snippet}
  light mode
</Toggle>
</div>

## Disabled

<div class="m-8">

<Button class="w-48" onclick={handleClick}>Disabled: {isDisabled ? "True" : "False"}</Button>

<Toggle class="mt-3" bind:checked disabled={isDisabled}>Disabled: {isDisabled}</Toggle>
</div>
