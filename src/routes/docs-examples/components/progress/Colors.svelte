<script lang="ts">
  import { Progressbar } from "flowbite-svelte";
</script>

<div class="my-4">
  <div class="text-heading mb-1 text-base font-medium">Dark</div>
  <Progressbar progress="50" color="dark" />
</div>

<div class="my-4">
  <div class="text-fg-brand mb-1 text-base font-medium">Brand</div>
  <Progressbar progress="50" color="brand" />
</div>

<div class="my-4">
  <div class="text-fg-success mb-1 text-base font-medium">Success</div>
  <Progressbar progress="50" color="success" />
</div>

<div class="my-4">
  <div class="text-fg-danger mb-1 text-base font-medium">Danger</div>
  <Progressbar progress="50" color="danger" />
</div>

<div class="my-4">
  <div class="text-fg-warning mb-1 text-base font-medium">Warning</div>
  <Progressbar progress="50" color="warning" />
</div>
