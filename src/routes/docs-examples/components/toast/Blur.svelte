<script lang="ts">
  import { Toast } from "flowbite-svelte";
  import { blur } from "svelte/transition";
  import { BellOutline } from "flowbite-svelte-icons";
</script>

<Toast transition={blur} color="purple" params={{ amount: 10 }} class="mb-4">
  {#snippet icon()}
    <BellOutline class="h-6 w-6" />
  {/snippet}
  Transition type: blur, amount: 10
</Toast>

<Toast transition={blur} color="purple" params={{ amount: 50, delay: 1000 }}>
  {#snippet icon()}
    <BellOutline class="h-6 w-6" />
  {/snippet}
  Transition type: blur, amount: 50, delay 1000
</Toast>
