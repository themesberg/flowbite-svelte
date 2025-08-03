<script lang="ts">
  import { Button, Modal, type ModalPlacementType, P } from "flowbite-svelte";

  let placement: ModalPlacementType = $state("center");
  let openPlacement = $state(false);
  
  const setPlacement = (newPlacement: ModalPlacementType) => {
    placement = newPlacement;
    console.log('placement: ', placement);
    openPlacement = !openPlacement;
  };
</script>

<div class="inline-grid grid-cols-3 grid-rows-3 gap-4">
  <Button onclick={() => setPlacement("top-left")}>top-left</Button>
  <Button onclick={() => setPlacement("top-center")}>top-center</Button>
  <Button onclick={() => setPlacement("top-right")}>top-right</Button>
  <Button onclick={() => setPlacement("center-left")}>center-left</Button>
  <Button onclick={() => setPlacement("center")}>center</Button>
  <Button onclick={() => setPlacement("center-right")}>center-right</Button>
  <Button onclick={() => setPlacement("bottom-left")}>bottom-left</Button>
  <Button onclick={() => setPlacement("bottom-center")}>bottom-center</Button>
  <Button onclick={() => setPlacement("bottom-right")}>bottom-right</Button>
</div>

<Modal title="Terms of Service" form bind:open={openPlacement} {placement}>
  <P>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</P>
  <P>The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</P>
  {#snippet footer()}
    <Button type="submit">I accept</Button>
    <Button type="submit" color="alternative">Decline</Button>
  {/snippet}
</Modal>