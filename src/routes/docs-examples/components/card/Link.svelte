<script lang="ts">
  import { Card } from "flowbite-svelte";
  import { GiftBoxSolid, ArrowUpRightFromSquareOutline } from "flowbite-svelte-icons";
</script>

<Card class="p-4 sm:p-6 md:p-8">
  <GiftBoxSolid class="text-body mb-3 h-8 w-8" />
  <a href="/">
    <h5 class="text-heading mb-2 text-2xl font-semibold tracking-tight">Need a help in Claim?</h5>
  </a>
  <p class="text-body mb-3 font-normal">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
  <a href="/" class="text-fg-brand inline-flex items-center hover:underline">
    See our guideline
    <ArrowUpRightFromSquareOutline class="ms-2.5 h-4 w-4" />
  </a>
</Card>
