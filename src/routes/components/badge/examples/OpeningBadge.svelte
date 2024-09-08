<script lang="ts">
  import { Badge, Button, uiHelpers } from '$lib';
  let openBadgeStatus = $state(false);
  function openBadge() {
    openBadgeStatus = true;
  }
</script>

<Button onclick={openBadge}>Open badge</Button>
<Badge class="ml-4" color="blue" dismissable large bind:badgeStatus={openBadgeStatus}>Default</Badge>
