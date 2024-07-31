<script lang="ts">
  import { Badge, Button, Label, type BadgeProps } from 'svelte-5-ui-lib'
  let color: BadgeProps['color'] = $state('red')
  let badgeSize: BadgeProps['large'] = $state(false)
  const changeSize = () => {
    badgeSize = !badgeSize
  }
  let badgeDismissable: BadgeProps['dismissable'] = $state(false)
  const changeDismissable = () => {
    badgeDismissable = !badgeDismissable
  }
  let badgeClass: BadgeProps['class'] = $state('')
  const changeClass = () => {
    badgeClass = badgeClass === '' ? 'p-4' : ''
  }
  let badgeStatus2 = $state(true)
  const changeStatus = () => {
    badgeStatus2 = true
  }
  let border: BadgeProps['border'] = $state(false)
  const changeBorder = () => {
    border = !border
  }
  let rounded: BadgeProps['rounded'] = $state(false)
  const changeRounded = () => {
    rounded = !rounded
  }
</script>

<Badge {color} large={badgeSize} dismissable={badgeDismissable} class={badgeClass} bind:badgeStatus={badgeStatus2} {border} {rounded} >Default</Badge>
{#if !badgeStatus2}
  <Button color="light" onclick={changeStatus}>Open badge</Button>
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
<Button color="blue" onclick={changeSize}>{badgeSize? 'Small' : 'Large'}</Button>
<Button color="green" onclick={changeDismissable}>{badgeDismissable? 'Not dismissable' : 'Dismissable'}</Button>
<Button color="purple" onclick={changeClass}>{badgeClass? 'Remove class' : 'Add class'}</Button>
<Button color="yellow" onclick={changeBorder}>{border? 'Remove border' : 'Add border'}</Button>
<Button color="dark" onclick={changeRounded}>{rounded? 'Remove rounded' : 'Add rounded'}</Button>