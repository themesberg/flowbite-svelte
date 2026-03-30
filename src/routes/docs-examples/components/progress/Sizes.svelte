<script lang="ts">
  import { Progressbar } from "flowbite-svelte";
</script>

<div class="my-4">
  <div class="mb-1 text-base font-medium text-heading">Small</div>
  <Progressbar progress="50" size="h-1.5" />
</div>

<div class="my-4">
  <div class="mb-1 text-base font-medium text-heading">Default</div>
  <Progressbar progress="50" size="h-2.5" />
</div>

<div class="my-4">
  <div class="mb-1 text-lg font-medium text-heading">Large</div>
  <Progressbar progress="50" size="h-4" />
</div>

<div class="my-4">
  <div class="mb-1 text-lg font-medium text-heading">Extra Large</div>
  <Progressbar progress="50" size="h-6" />
</div>
