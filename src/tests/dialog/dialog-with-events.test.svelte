<script lang="ts">
  import Dialog from "$lib/dialog/Dialog.svelte";

  let open = $state(true);
  let cancelCount = $state(0);
  let toggleCount = $state(0);

  const handleCancel = (_e: Event) => {
    cancelCount++;
  };

  const handleToggle = (_e: ToggleEvent) => {
    toggleCount++;
  };
</script>

<Dialog bind:open oncancel={handleCancel} ontoggle={handleToggle}>
  <h3>Dialog with Events</h3>
  <p>This dialog tracks cancel and toggle events.</p>
</Dialog>

<div data-testid="cancel-count">{cancelCount}</div>
<div data-testid="toggle-count">{toggleCount}</div>
