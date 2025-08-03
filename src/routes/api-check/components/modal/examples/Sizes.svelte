<script lang="ts">
  import { Button, Modal, type ModalProps, P } from "flowbite-svelte";

  let openModal = $state(false);
  let size: ModalProps["size"] = $state("md"); // Set default value
  
  function onclick(modalSize: ModalProps["size"]) {
    size = modalSize;
    openModal = true;
  }
</script>

<div class="block space-y-4 md:space-y-0 md:space-x-4 rtl:space-x-reverse">
  <Button onclick={() => onclick("xs")}>xs</Button>
  <Button onclick={() => onclick("sm")}>sm</Button>
  <Button onclick={() => onclick("md")}>md</Button>
  <Button onclick={() => onclick("lg")}>lg</Button>
  <Button onclick={() => onclick("xl")}>xl</Button>
</div>

<Modal form title="Terms of Service" bind:open={openModal} {size}>
  <P>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</P>
  <P>The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</P>
  {#snippet footer()}
    <Button type="submit">I accept</Button>
    <Button type="submit" color="alternative">Decline</Button>
  {/snippet}
</Modal>