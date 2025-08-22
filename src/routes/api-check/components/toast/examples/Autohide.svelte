<script>
  import { Toast, Button } from "flowbite-svelte";
  import { slide } from "svelte/transition";
  import { CheckCircleSolid } from "flowbite-svelte-icons";

  let toastStatus = true;
  let counter = 6;

  function trigger() {
    toastStatus = true;
    counter = 6;
    timeout();
  }

  function timeout() {
    if (--counter > 0) return setTimeout(timeout, 1000);
    toastStatus = false;
  }
</script>

<div class="flex gap-10">
  <Button onclick={trigger} class="my-3">Restart</Button>
  <Toast dismissable={false} transition={slide} bind:toastStatus>
    {#snippet icon()}
      <CheckCircleSolid class="h-5 w-5" />
    {/snippet}
    Autohide in {counter}s.
  </Toast>
</div>