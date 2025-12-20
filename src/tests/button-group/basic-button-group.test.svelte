<script lang="ts">
  import ButtonGroup from "$lib/button-group/ButtonGroup.svelte";
  import Button from "$lib/buttons/Button.svelte";
</script>

<ButtonGroup>
  {#snippet children()}
    <Button>Profile</Button>
    <Button>Settings</Button>
    <Button>Messages</Button>
  {/snippet}
</ButtonGroup>
