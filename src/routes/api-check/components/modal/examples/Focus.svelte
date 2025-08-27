<script lang="ts">
  import { Button, Modal, Label, Input, Checkbox } from "flowbite-svelte";
  let open = $state(false);
  let checked = $state(false);
</script>

<Button onclick={() => (open = true)}>Default modal</Button>
<Checkbox bind:checked>Focus trap</Checkbox>

<Modal form bind:open focustrap={checked} size="sm" title="Notify user">
  <Label class="space-y-2">
    <span>Email:</span>
    <Input autofocus />
  </Label>
  {#snippet footer()}
    <Button type="submit" value="notify">Notify</Button>
    <Button type="submit" color="alternative">Cancel</Button>
  {/snippet}
</Modal>
