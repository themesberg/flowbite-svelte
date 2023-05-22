<script>
  import { Button, Modal } from '$lib';

  let open = false;
</script>


<Button color="alternative" on:click={() => (open = !open)}>Default modal</Button>

<Modal id="small" title="Terms of Service" autoclose outsideclose bind:open>
  <p>Are you John Doe?</p>
  <svelte:fragment slot="footer">
    <Button color="dark" on:click={() => alert('Handle "success"')}>I accept</Button>
    <Button color="alternative">Decline</Button>
  </svelte:fragment>
</Modal>