<script lang="ts">
  import { Badge } from '$lib';
  let eventStatus = $state(true);
  function handleClose() {
    console.log('Badge dismissed');
    alert('Badge dismissed');
    eventStatus = false;
  }
</script>

<div class="flex h-8 justify-center">
  <Badge dismissable large onclick={handleClose} bind:badgeStatus={eventStatus}>Default</Badge>
</div>