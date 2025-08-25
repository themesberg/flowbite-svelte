<script>
  import { Toast } from "flowbite-svelte";
  import { slide, scale } from "svelte/transition";
  import { quintOut, elasticOut } from "svelte/easing";
  import { CheckCircleSolid } from "flowbite-svelte-icons";
</script>

<Toast transition={slide}>
  {#snippet icon()}
    <CheckCircleSolid class="h-6 w-6" />
  {/snippet}
  Transition type: slide
</Toast>

<Toast transition={scale} params={{ delay: 250, duration: 300, easing: quintOut }}>
  {#snippet icon()}
    <CheckCircleSolid class="h-6 w-6" />
  {/snippet}
  Transition type: scale, delay: 250, duration: 300, easing: quintOut
</Toast>

<Toast params={{ delay: 250, duration: 1000 }}>
  {#snippet icon()}
    <CheckCircleSolid class="h-6 w-6" />
  {/snippet}
  Transition type: fade, delay: 250, duration: 1000
</Toast>
