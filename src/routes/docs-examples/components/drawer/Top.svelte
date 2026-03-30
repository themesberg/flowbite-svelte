<script lang="ts">
  import { Drawer, Button, A } from "flowbite-svelte";
  import { InfoCircleSolid, ArrowRightOutline } from "flowbite-svelte-icons";
  import { sineIn } from "svelte/easing";

  let open7 = $state(false);
  let transitionParamsTop = {
    y: -320,
    duration: 200,
    easing: sineIn
  };
</script>

<div class="text-center">
  <Button onclick={() => (open7 = true)}>Show drawer</Button>
</div>

<Drawer placement="top" class="w-full" transitionParams={transitionParamsTop} bind:open={open7}>
  <h5 id="drawer-label" class="text-body mb-4 inline-flex items-center text-base font-semibold">
    <InfoCircleSolid class="me-2.5 h-5 w-5" />Top drawer
  </h5>
  <p class="text-body mb-6 max-w-lg text-sm">
    Supercharge your hiring by taking advantage of our <A href="/" class="text-fg-brand underline hover:no-underline">limited-time sale</A> for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked
    candidates and the #1 design job board.
  </p>
  <Button color="success" href="/">Learn more</Button>
  <Button href="/" class="px-4">Get access <ArrowRightOutline class="ms-2 h-5 w-5" /></Button>
</Drawer>
