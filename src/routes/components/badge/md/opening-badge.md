<script lang="ts">
  import { Badge, Button } from 'svelte-5-ui-lib';
  let btnBadge = $state(false);
  function openBadge() {
    btnBadge = true;
  }
</script>

<Button onclick={openBadge}>Open badge</Button>
<Badge class='ml-4' color='blue' dismissable large bind:badgeStatus={btnBadge}>Default</Badge>