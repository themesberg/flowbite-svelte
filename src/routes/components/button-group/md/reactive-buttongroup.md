<script lang="ts">
  import { ButtonGroup, Button, Label, Radio, type ButtonGroupProps } from 'svelte-5-ui-lib';
  
  let size: ButtonGroupProps['size'] = $state('md');
  let buttonGroupClass: ButtonGroupProps['class'] = $state('')
  const changeClass = () => {
    buttonGroupClass = buttonGroupClass === '' ? 'my-4' : ''
  }
</script>

<ButtonGroup {size} class={buttonGroupClass}>
  <Button>Profile</Button>
  <Button>Settings</Button>
  <Button>Messages</Button>
</ButtonGroup>
<div class="mt-8 space-y-4">
  <div class="flex space-x-4">
    <Label>Current size: {size}</Label>
    <Radio name="size" bind:group={size} value="sm">sm</Radio>
    <Radio name="size" bind:group={size} value="md">md</Radio>
    <Radio name="size" bind:group={size} value="lg">lg</Radio>
  </div>
  <Button color="green" onclick={changeClass}>{buttonGroupClass? 'Remove class' : 'Add class'}</Button>
</div>