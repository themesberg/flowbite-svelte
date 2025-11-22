<script lang="ts">
  import { Button, Modal, P, A } from "flowbite-svelte";
  import {createCountdown} from "$utils/countdown.svelte.ts";

  const adCountdown = createCountdown(4);
  const termsCountdown = createCountdown(5);

  let adModal = $state(false);
  let termsModal = $state(false);

  function countdownText(remaining: number): string {
    return `Close available in ${remaining}s`;
  }

  $effect(() => {
    if (adModal) adCountdown.start();
    else adCountdown.reset(4);
    if (termsModal) termsCountdown.start();
    else termsCountdown.reset(5);
  });
</script>

<div class="flex flex-col gap-4">
  <Button class="w-40" onclick={() => (adModal = true)}>Show Ad Modal</Button>

  <Modal bind:open={adModal} permanent={adCountdown.isRunning} dismissable={!adCountdown.isRunning} outsideclose={!adCountdown.isRunning}>
    {#snippet header()}
      <div class="flex w-full items-center justify-between">
        <h2>Ad: Special Offer!</h2>
        {#if adCountdown.isRunning}
          <span class="text-sm text-gray-500 dark:text-gray-400">
            {countdownText(adCountdown.timeLeft)}
          </span>
        {/if}
      </div>
    {/snippet}
    <div class="text-center">
      <P>🎉 Get 50% off your next purchase!</P>
      <P>This amazing deal won't last long. Sign up now to claim your discount.</P>
    </div>
  </Modal>

  <A onclick={() => (termsModal = true)}>Terms of Service</A>

  <Modal form bind:open={termsModal} permanent={termsCountdown.isRunning} dismissable={!termsCountdown.isRunning} outsideclose={!termsCountdown.isRunning}>
    {#snippet header()}
      <div class="flex w-full items-center justify-between">
        <h3>Terms of Service</h3>
        {#if termsCountdown.isRunning}
          <span class="text-sm text-gray-500 dark:text-gray-400">
            {countdownText(termsCountdown.timeLeft)}
          </span>
        {/if}
      </div>
    {/snippet}
    <P>
      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
    </P>
    <P>The European Union's General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union.</P>

    {#snippet footer()}
      <Button value="success" onclick={() => alert("Clicked type is button")}>Button won't close the modal</Button>
      <Button type="submit" value="decline" color="alternative">type submit close the modal</Button>
    {/snippet}
  </Modal>
</div>
