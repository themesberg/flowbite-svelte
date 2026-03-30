<script lang="ts">
  import { Progressbar } from "flowbite-svelte";
</script>

<div class="my-4">
  <div class="mb-1 text-base font-medium text-heading">Dark</div>
  <Progressbar progress="50" color="dark" />
</div>

<div class="my-4">
  <div class="mb-1 text-base font-medium text-fg-brand">Brand</div>
  <Progressbar progress="50" color="brand" />
</div>

<div class="my-4">
  <div class="mb-1 text-base font-medium text-fg-success">Success</div>
  <Progressbar progress="50" color="success" />
</div>

<div class="my-4">
  <div class="mb-1 text-base font-medium text-fg-danger">Danger</div>
  <Progressbar progress="50" color="danger" />
</div>

<div class="my-4">
  <div class="mb-1 text-base font-medium text-fg-warning">Warning</div>
  <Progressbar progress="50" color="warning" />
</div>
