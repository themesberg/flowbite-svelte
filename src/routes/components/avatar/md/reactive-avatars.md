<script lang="ts">
  import { Avatar, Button, type AvatarProps } from 'svelte-5-ui-lib';
  let rounded: AvatarProps['rounded'] = $state(false);
  const changeRounded = () => {
    rounded = !rounded;
  }
  let border: AvatarProps['border'] = $state(false);
  const changeBorder = () => {
    border = !border
  }
  let stacked: AvatarProps['stacked'] = $state(false);
  const changeStacked = () => {
    stacked = !stacked
  }
  let avatarClass: AvatarProps['class'] = $state('')
  const changeClass = () => {
    avatarClass = avatarClass === '' ? 'mx-0.5' : ''
  }
</script>

<div class="mb-5 flex">
  <Avatar src="/images/profile-picture-1.webp" {rounded} {border} {stacked} class={avatarClass}/>
  <Avatar src="/images/profile-picture-2.webp" {rounded} {border} {stacked} class={avatarClass}/>
  <Avatar src="/images/profile-picture-3.webp" {rounded} {border} {stacked} class={avatarClass}/>
</div>
<Button color='blue' onclick={changeRounded}>{rounded?'Add rounded' : 'Remove rounded'}</Button>
<Button color='red' onclick={changeBorder}>{border?'Remove border' : 'Add border'}</Button>
<Button color='green' onclick={changeStacked}>{stacked?'Remove stacked' : 'Add  stacked'}</Button>
<Button color='purple' onclick={changeClass}>Change class</Button>