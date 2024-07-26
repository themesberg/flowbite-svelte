<script lang="ts">
  import { Badge } from 'svelte-5-ui-lib';
  let myStatus = $state(true);
  function handleClose() {
    console.log('Badge dismissed');
    alert('Badge dismissed');
    myStatus = false;
  }
</script>

<Badge dismissable large onclick={handleClose} bind:badgeStatus={myStatus}>Default</Badge>