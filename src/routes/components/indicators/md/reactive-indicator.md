<script lang="ts">
  import { Indicator, Button, Avatar, Badge, Label, Radio, type IndicatorProps } from 'svelte-5-ui-lib';
  let color: IndicatorProps['color'] = $state('red');
  let size: IndicatorProps['size'] = $state('md');
  let border: IndicatorProps['border'] = $state(false);
  const changeBorder = () => {
    border = !border
  }
  let placement: IndicatorProps['placement'] = $state('top-left');
</script>

<div
  class="borer relative h-56 w-56 rounded-lg border-gray-300 bg-gray-200 dark:border-gray-700 dark:bg-gray-800"
>
  <Indicator {color} {size} {border} {placement}/>
</div>
<div class="mt-8 space-y-4">
<div class="flex space-x-2">
  <Label>Change color</Label>
  <Radio name="color" bind:group={color} value="gray">Gray</Radio>
  <Radio name="color" bind:group={color} value="dark">Dark</Radio>
  <Radio name="color" bind:group={color} value="orange">Orange</Radio>
  <Radio name="color" bind:group={color} value="blue">Blue</Radio>
  <Radio name="color" bind:group={color} value="green">Green</Radio>
  <Radio name="color" bind:group={color} value="red">Red</Radio>
  <Radio name="color" bind:group={color} value="purple">Purple</Radio>
  <Radio name="color" bind:group={color} value="indigo">Indigo</Radio>
  <Radio name="color" bind:group={color} value="yellow">Yellow</Radio>
  <Radio name="color" bind:group={color} value="teal">Teal</Radio>
</div>
<div class="flex space-x-4">
  <Label>Change size</Label>
  <Radio name="size" bind:group={size} value="xs">xs</Radio>
  <Radio name="size" bind:group={size} value="sm">sm</Radio>
  <Radio name="size" bind:group={size} value="md">md</Radio>
  <Radio name="size" bind:group={size} value="lg">lg</Radio>
  <Radio name="size" bind:group={size} value="xl">xl</Radio>
</div>
<div>
  <Label class="my-2">Change placement</Label>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5" >
    <Radio name="placement" bind:group={placement} value="top-left">top-left</Radio>
    <Radio name="placement" bind:group={placement} value="top-center">top-center</Radio>
    <Radio name="placement" bind:group={placement} value="top-right">top-right</Radio>
    <Radio name="placement" bind:group={placement} value="center-left">center-left</Radio>
    <Radio name="placement" bind:group={placement} value="center">center</Radio>
    <Radio name="placement" bind:group={placement} value="center-right">center-right</Radio>
    <Radio name="placement" bind:group={placement} value="bottom-left">bottom-left</Radio>
    <Radio name="placement" bind:group={placement} value="bottom-center">bottom-center</Radio>
    <Radio name="placement" bind:group={placement} value="bottom-right">bottom-right</Radio>
  </div>
</div>
<Button onclick={changeBorder}>{border ? 'Remove border' : 'Add border'}</Button>
</div>