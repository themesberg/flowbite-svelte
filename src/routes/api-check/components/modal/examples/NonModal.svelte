<script>
  import { Button, Modal, P } from "flowbite-svelte";
  let defaultModal = $state(false);
</script>

<Button onclick={() => (defaultModal = true)}>Non modal</Button>
<Modal title="Terms of Service" form bind:open={defaultModal} modal={false} class="z-10 border shadow-xl">
  <P>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</P>
  <P>The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</P>
  {#snippet footer()}
    <Button type="submit">I accept</Button>
    <Button type="submit" color="alternative">Decline</Button>
  {/snippet}
</Modal>