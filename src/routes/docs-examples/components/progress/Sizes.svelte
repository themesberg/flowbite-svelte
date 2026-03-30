<script lang="ts">
  import { Progressbar } from "flowbite-svelte";
</script>

<div class="my-4">
  <div class="text-heading mb-1 text-base font-medium">Small</div>
  <Progressbar progress="50" size="h-1.5" />
</div>

<div class="my-4">
  <div class="text-heading mb-1 text-base font-medium">Default</div>
  <Progressbar progress="50" size="h-2.5" />
</div>

<div class="my-4">
  <div class="text-heading mb-1 text-lg font-medium">Large</div>
  <Progressbar progress="50" size="h-4" />
</div>

<div class="my-4">
  <div class="text-heading mb-1 text-lg font-medium">Extra Large</div>
  <Progressbar progress="50" size="h-6" />
</div>
