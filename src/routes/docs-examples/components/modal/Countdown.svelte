<script lang="ts">
  import { Button, Modal, P, A } from "flowbite-svelte";
  let adModal = $state(false);
  let termsModal = $state(false);
  let testModal = $state(false);

  function adCountdownText(remaining: number): string {
    return `Close available in ${remaining}s`;
  }

  function termsCountdownText(remaining: number): string {
    return `Please read for ${remaining} more seconds`;
  }
</script>

<div class="flex flex-col gap-4">
  <Button class="w-40" onclick={() => (adModal = true)}>Show Ad Modal</Button>
  <Modal title="Ad: Special Offer!" bind:open={adModal} countdown={{ number: 5, text: adCountdownText }}>
    <div class="text-center">
      <P>🎉 Get 50% off your next purchase!</P>
      <P>This amazing deal won't last long. Sign up now to claim your discount.</P>
    </div>
  </Modal>

  <A onclick={() => (termsModal = true)}>Terms of Service</A>
  <Modal title="Terms of Service" form bind:open={termsModal} countdown={{ number: 5, text: termsCountdownText }}>
    <P>With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</P>
    <P>The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union.</P>

    {#snippet footer()}
      <Button value="success" onclick={() => alert("Clicked type is button")}>Button won't close the modal</Button>
      <Button type="submit" value="decline" color="alternative">type submit close the modal</Button>
    {/snippet}
  </Modal>
</div>
