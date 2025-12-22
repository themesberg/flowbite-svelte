<script lang="ts">
  import Dialog from "$lib/dialog/Dialog.svelte";

  let open = $state(true);
  let submitted = $state(false);

  const handleSubmit = (e: SubmitEvent) => {
    submitted = true;
  };
</script>

<Dialog bind:open form={true} onsubmit={handleSubmit}>
  <h3>Dialog with Form</h3>
  <input type="text" placeholder="Enter text" />
  <button type="submit" value="confirm">Submit</button>
</Dialog>

{#if submitted}
  <div data-testid="submit-indicator">Submitted</div>
{/if}
