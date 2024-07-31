<script lang="ts">
  import { Alert, Button, Label, Radio, type AlertProps } from 'svelte-5-ui-lib';
  let color: AlertProps['color'] = $state('gray');
  let rounded: AlertProps['rounded'] = $state(false);
  const changeRounded = () => {
    rounded = !rounded;
  }
  let border: AlertProps['border'] = $state(false);
  const changeBorder = () => {
    border = !border;
  }
  let dismissable: AlertProps['dismissable'] = $state(false);
  const changeDismissable = () => {
    dismissable = !dismissable;
  }
  let alertStatus2 = $state(true)
  const changeStatus = () => {
    alertStatus2 = true
  }
  let alertClass: AlertProps['class'] = $state('')
  const changeClass = () => {
    alertClass = alertClass === '' ? 'p-8' : ''
  }
</script>

<Alert {color} {rounded} {border} {dismissable} class={alertClass} bind:alertStatus={alertStatus2}>
  <span class="font-medium">Default alert!</span>
</Alert>
{#if !alertStatus2}
  <Button color="light" onclick={changeStatus}>Open alert</Button>
{/if}
<div class="flex space-x-4">
  <Label>Change color</Label>
  <Radio name="color" bind:group={color} value="red">Red</Radio>
  <Radio name="color" bind:group={color} value="green">Green</Radio>
  <Radio name="color" bind:group={color} value="yellow">Yellow</Radio>
  <Radio name="color" bind:group={color} value="indigo">Indigo</Radio>
  <Radio name="color" bind:group={color} value="purple">Purple</Radio>
  <Radio name="color" bind:group={color} value="pink">Pink</Radio>
</div>
<Button color="blue" onclick={changeRounded}>{rounded? 'Remove rounded' : 'Add rounded'}</Button>
<Button color="red" onclick={changeBorder}>{border? 'Remove border' : 'Add border'}</Button>
<Button color="yellow" onclick={changeDismissable}>{dismissable? 'Remove dismissable' : 'Add dismissable'}</Button>
<Button color="green" onclick={changeClass}>{alertClass? 'Remove class' : 'Add class'}</Button>